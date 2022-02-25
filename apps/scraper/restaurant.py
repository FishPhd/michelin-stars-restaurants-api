class Restaurant:
    def __init__(self, name, rating, guide, img, link, location, cuisine_type,
                 lat, long, year):
        self.name = name
        self.rating = rating
        self.guide = guide
        self.img = img
        self.link = link
        self.location = location
        self.type = cuisine_type
        self.lat = lat
        self.long = long
        self.year = year

    def __str__(self):
        return_string = f"Restaurant: {self.name} in {self.location} from {self.guide} \n"
        return_string += f"Rating: {'*' * self.rating} \n"
        return_string += f"Type: {self.type} \n"
        return_string += f"Location: {self.lat}, {self.long}"
        return_string += f"Year: {self.year}"
        return return_string
