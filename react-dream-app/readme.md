# Dream App
- The purpose of this application is to send requests to OpenAI's DALL-E API to generate images based on user input and display them in a neat manner
- To utilize DALL-E, purchase is required

## How to Use + Set Up
1. Terminal Commands
    ```
    npm init vite@latest dream

    cd dream
    npm install
    npm run dev //this is what runs the vite server
    ```
2. API Key
    - use API key and store it in .env
    - add .env to .gitignore
3. Server Set up via cmd
    ```
    touch server.js //Not required

    npm i dotenv express cors openai
    node server.js
    ```
4. using ThunderClient as a REST client during testing
    - ThunderClient allows us to test out REST client easily through VS-Code
    - It creates the end point that we are making the request to
    - in our request body we have to specify the prompt in JSON format
5. Final Step:
    - If you wish to combine everything to run on a website we can run `npm run build` which combines everything into a bundle