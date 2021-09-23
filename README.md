# Kurze Projektbeschreibung:
Wer bei diesem heißen Wetter Lust auf coole Cocktails oder extravagante Drinks verspürt, für den haben wir Drinks&Chill ins Leben gerufen. Dort könnt ihr nach einfacher Anleitung eure eigenen Drinks selbst mixen
und auf der nächsten Party seid ihr euer eigener Barista - Cheers!🥂🍻

# Technologien, die genutzt werden sollen:
HTML/CSS, Git/Github, Auswahl: JS oder ReactJS
Das ist zu beachten:
Organisiert euch in der Gruppe gut, wie ihr eure Aufgaben verteilen wollt, welche Kommunikationswege ihr nutzen wollt und achtet auf das Zeitmanagement.

Tipps falls mit React und API gearbeitet wird:
Styles für die boxen können mit Modulus gemacht werden.
{data.map((e, i) => <div className={`
            style${Math.floor((i % 6) + 1)}
            ${i % 2 == 0 ? 'left' : 'right'}
            `} 
            key={e.id}
            >
            {e.first_name}
            </div>)}
So bekommt jedes Element 2 Klassen. style1 bis style6 und left oder right. 
So kann man mit CSS style1 bis 6 die Hintergrundfarben geben und mit left oder right die flex-direction ändern.

# Phase 1
Die Grundvoraussetzung ist eine statische Website zu programmieren. Hier erhält der Nutzer Informationen zum Rezept mit Titel, Beschreibung und Bild.
Dazu erstellt ihr selbst eure eigenen Daten. Diese speichert ihr euch in einen Array aus 10 Objekten als data.js.
Die Website ist responsiv für Mobile & Desktop.

# Phase 2
In dieser Phase bezieht ihr nun alle nötigen Daten aus der API.
Lese euch die Dokumentation zur API genau durch damit ihr die
gewünschten endpoints als Ergebnis herausbekommt.
Nutze die Framer Motion Library um eure Nutzer durch eine bessere User Experience(UX) zu navigieren.

# Phase 3
Der Benutzer kann nun über eine
Suchfunktion nach verschiedenen
Kategorien filtern.

# Die wichtigsten Ressourcen
Link Design: https://www.figma.com/file/WtLI53nXsGkBHpfJPyRUuj/Cocktails-Copy?node-id=10%3A0
Link Prototype: https://www.figma.com/proto/WtLI53nXsGkBHpfJPyRUuj/Cocktails-Copy?node-id=3%3A2&scaling=min-zoom
Link API: https://www.thecocktaildb.com/api.php
Framer Motion



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
