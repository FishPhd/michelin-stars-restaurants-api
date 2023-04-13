from scraper import Scraper
from postgres import Postgres
import pandas as pd
import time
import os
from glob2 import glob


def scrape_website():
    output_name = f"restaurants{round(time.time())}.csv"
    output_path = os.path.join('output', output_name)

    # Scrape Michelin guide website
    scraper_instance = Scraper()
    scraper_instance.scrape()

    # Convert restaurants into a pandas DataFrame and save output
    df = pd.DataFrame([r.__dict__ for r in scraper_instance.restaurants])
    df.to_csv(output_path, index=False)

    print(f"Output saved: {output_path}")
    return output_path


def upload_to_postgres(file):
    print('Connecting to the database...')
    postgres_conn = Postgres()

    print('Inserting restaurants...')
    postgres_conn.insert_restaurants(file)

    print('Done!')


if __name__ == "__main__":
    # If output file is not found then refresh data
    # if glob('./output/*.csv'):
    #     print("Output found will not refresh data...")
    # else:
    #     print("Output not found refreshing data...")
    #     data_file = scrape_website()
    upload_to_postgres("./output/restaurants1658265034.csv")
