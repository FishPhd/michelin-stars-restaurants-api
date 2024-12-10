import time
from datetime import date

import requests
from bs4 import BeautifulSoup as bs

from restaurant import Restaurant

base_url = 'https://guide.michelin.com'
query = '/en/restaurants/3-stars-michelin/2-stars-michelin/1-star-michelin/page/'
ratings_map = {'o': 3, 'n': 2, 'm': 1}

# Class names for scraping
selectors = {
    'cards': '.card__menu',
    'rating': '.fa-michelin',
    'guide': '.card__menu-content--rating>span',
    'img': '.card__menu-image>a>noscript>img',
    'name': '.card__menu-content--title>a',
    'link': '.card__menu-content--title>a',
    'location': '.card__menu-footer--location',
    'cuisine': '.restaurant-details__heading-price',
    'page_numbers': '.search-results__btn-carousel-wrapper>div>ul>li>a'
}


class Scraper:
    def __init__(self):
        self.restaurants = []
        self.url = base_url + query + '1'
        self.content = bs(requests.get(self.url).content, 'html.parser')
        self.delay_rate = 0.02
        self.total_pages = self.get_total_pages(self.content)
        self.cur_year = date.today().year

    def get_restaurants(self):
        return self.restaurants

    def refresh_content(self, current_page):
        self.url = base_url + query + str(current_page)
        self.content = bs(requests.get(self.url).content, 'html.parser')

    def remove_duplicates(self):
        # Used if running scraper multiple times
        self.restaurants = [
            i for n, i in enumerate(self.restaurants)
            if i not in self.restaurants[:n]
        ]

    def get_total_pages(self, content):
        # Get second to last page number to get total page count
        page_numbers = content.select(selectors["page_numbers"])[-2].get_text()
        return int(page_numbers)

    def scrape(self, current_page=1):
        # Refresh HTML content for current page
        self.refresh_content(current_page)
        cards = self.content.select(selectors['cards'])

        print("Scraping:", self.url)

        # Scrape Michelin "cards"
        for card in cards:
            rating_tag = card.select_one(selectors['rating']).get_text()
            rating = ratings_map[rating_tag]

            guide = card.select_one(selectors['guide']).get_text().strip()

            img_tag = card.select_one(selectors['img'])
            img = img_tag.attrs["src"].split("?", 1)[0]

            name_tag = card.select_one(selectors['name'])
            name = name_tag.get_text().strip()

            link = base_url + name_tag.attrs["href"]
            location = card.select_one(
                selectors['location']).get_text().strip()

            # Retrieve cuisine's by also scraping restaurant page
            restaurant_page_content = bs(
                requests.get(link).content, 'html.parser')

            cuisine = restaurant_page_content.select_one(
                selectors['cuisine']).get_text().split(u'•')[-1].strip()

            cards = self.content.select(selectors['cards'])

            lat = card.attrs["data-lat"]
            long = card.attrs["data-lng"]

            cur_restaurant = Restaurant(name, rating, guide, img, link,
                                        location, cuisine, lat, long,
                                        self.cur_year)
            self.restaurants.append(cur_restaurant)

        # Add delay to avoid timeouts
        time.sleep(self.delay_rate)

        if current_page < self.total_pages:
            return self.scrape(current_page + 1)
