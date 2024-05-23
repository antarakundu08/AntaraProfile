import recommenderApp from '../assets/recommenderApp.jpg';
import foodstoreApp from '../assets/foodstoreApp.jpg';
import ecommApp from '../assets/ecommApp.jpg';
import newsApp from '../assets/newsApp.jpeg';
import bintrackerApp from '../assets/bintrackerApp.jpeg';
import translatorApp from '../assets/babelApp.jpeg';

export const rawData = {
    "HotFlix": {
        "title": "HotFlix",
        "content":"A secured movie recommendation app based on individual preferences by integrating OpenAI API with TMDb data, incorporating custom key features for enhanced capabilities of the OpenAI model.",
        "image": recommenderApp,
        "code" : "https://github.com/antarakundu08/HotFlix",
        "live" : "https://netflix-gpt17.vercel.app/"
    },

    "FoodBazaar": {
        "title": "FoodBazaar",
        "content":"A food ordering app built on react using Swiggy's public API to display restaurants based on the location where user can select food items and place an order.",
        "image": foodstoreApp,
        "code" : "https://github.com/antarakundu08/FoodBazaar",
        "live" : null
    },

    "ShopItHere": {
        "title": "Shop-It-Here",
        "content":"Aims to practice DevOps technology, developed an e-commerce platform using Flask with user-authentication, product catalog, shopping cart and order processing features. Added automated CI/CD pipeline with jenkins.",
        "image": ecommApp,
        "code" : "https://github.com/antarakundu08/shop-it-here",
        "live" : null
    },

    "BinTracker": {
        "title": "BinTracker",
        "content":"An android application with user and driver perspective. User after authentication can track the garbage vehicle or can send request to nearby driver to take up the garbage from house. Driver after signing in, can checks his notification.",
        "image": bintrackerApp,
        "code" : "https://github.com/antarakundu08/BinTracker",
        "live" : null
    },

    "NewsApp": {
        "title": "NewsApp",
        "content":"An android application built with the goal to create a fun and challenging application based on the MVVM architectural pattern, built with feature of infinite scrolling, saves news, deletes and undo deleted the news.",
        "image": newsApp,
        "code" : "https://github.com/antarakundu08/NewsApp",
        "live" : null
    },

    "BabelApp": {
        "title": "BabelMate",
        "content":"BabelMate is a versatile language translation app that enables users to seamlessly translate text between any two inputted languages. This project utilizes JavaScript async functions to fetch data from an open-source API, offering features such as text copying, speech synthesis, and language exchange for the translated content.",
        "image": translatorApp,
        "code" : "https://github.com/antarakundu08/BabelMate",
        "live" : null
    },

}