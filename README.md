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
4. Run Flask to serve web app
    * `python3 app.py`
