# Educational Data #


## To Run ##
* Languages/Tools
    * `Python (3.6.2+)`
    * `NPM`

### For Lighweight/Development Deployment ###
1. (Optional) Virtual Environment
    * `python3 -m venv venv && source ./venv/bin/activate`
2. Install required packages
    * `pip install -r requirements.txt`
    * `npm install`
3. Build/Compile JSX for webapp
    * `npx webpack` or `webpack`
        * Add `--watch` flag for live updating during development
4. Export api key as an environmental variable
    * `export API_KEY='YOUR_KEY_HERE'`
    * If you don't have an api key, sign up for one for free at [https://api.data.gov/](https://api.data.gov/)
5. Run Flask to serve web app
    * `python3 app.py`
6. Head to `localhost:5000` in a browser (Chrome and Firefox recommended)

*Note: Saving the charts to a single, concise pdf proved difficult without a headless chrome instance, so the only way currently to download as a pdf is through printing to a pdf in the browser*
