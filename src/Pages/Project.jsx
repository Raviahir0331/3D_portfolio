import { NavLink } from "react-router-dom";
import { github, linkedin, twitter } from "../assets/icons";
import "./pages.css";

export const Project = () => {
  return (
    <>
      <div className="container project ">
        <h2 className="myproject col-md-2 ">MY PROJECT</h2>
        <div className="col-md-10 aboutproject">
          <span>
            I've embarked on numerous projects throughout the years, but these
            are the ones I hold closest to my heart. Many of them are
            open-source, so if you come across something that piques your
            interest, feel free to explore the codebase and contribute your
            ideas for further enhancements. Your collaboration is highly valued
          </span>
        </div>
      </div>

     
      <div className="container allprojects col-md-10">
        <div className="row">
          <div className="col-md-6 kanban">
            <h4>KANBAN BOARD</h4>
            <ul>Description :</ul>
            <p>
              This E-commerce Platform project demonstrates your ability to
              create a functional online shopping experience without direct
              database interaction. It showcases your skills in client-side data
              management, application state handling, user interaction, and
              UI/UX design within a React environment.
            </p>
            <ul>Application Structure:</ul>
            <li>
              <b>Component Hierarchy:</b> Design the component structure,
              comprising components for boards, columns, tasks, and UI elements
            </li>
            <li>
              <b>State Management:</b>Utilize React's useState hook to manage
              local component state, such as task data, board details, and
              column information.
            </li>

            <ul>Board and Task Management:</ul>
            <li>
              <b>Board Creation:</b> Allow users to create multiple boards, each
              with customizable columns (e.g., To Do, In Progress, Done).
            </li>
            <li>
              <b>Task Handling:</b> Enable users to add, edit, delete, and move
              tasks between columns using drag-and-drop functionality. Use React
              DnD or similar libraries for drag-and-drop support.
            </li>

            <ul>User Interface and Interaction:</ul>
            <li>
              <b>UI Design ,Drag-and-Drop Functionality ,User Interaction</b>
            </li>

            <ul>Project Scope:</ul>
            <li>
              <b>Component Structure:</b> Plan and design the React component
              hierarchy for boards, columns, tasks, and UI interactions.
            </li>

            <li>
              <b>State Management: </b>Use React Hooks for local state
              management, including task data, board details, and UI states.
            </li>
            <li>
              <b>Local Storage Handling: </b>Implement functions to store,
              update, and retrieve data from the browser's local storage.
            </li>
            <li>
              <b>Drag-and-Drop Functionality:</b> Integrate drag-and-drop
              libraries for smooth task movement between columns.
            </li>
            <li>
              <b>UI/UX Design:</b> Create an intuitive and visually appealing
              interface for managing tasks and boards.
            </li>
            <ul> Github Link :</ul>
            <span>
              <b>https://github.com/Raviahir0331/Kanban-Board.git</b>
            </span>
          </div>
          <div className="col-md-6 recipe">
            <h4>SEARCH RECIPE</h4>
            <ul>
              <b>Description :</b>
            </ul>
            <p>
              The "Search Recipe Using React.js" project is a dynamic web
              application designed to provide users with a seamless and
              interactive experience for discovering and exploring various
              recipes. Leveraging the power of React.js, this project offers an
              intuitive search functionality that allows users to find recipes
              based on ingredients, cuisine, or dietary preferences.
            </p>
            <ul>
              <b>Key Features :</b>
            </ul>
            <div className="row">
              <div className="col-md-6">
                <li>Search Functionality:</li>
                <li>Recipe Details:</li>
                <li>Responsive Design</li>
              </div>
              <div className="col-md-6 ">
                <li className="endtext">User-Friendly Interface</li>
                <li className="endtext">Sorting and Filtering</li>
                <li className="endtext">Save and Favorites:</li>
              </div>
            </div>
            <ul>
              <b>Technology :</b>
            </ul>
            <div className="row">
              <div className="col-md-6">
                <ul className="technology">Front-end:</ul>
                <li>React.js</li>
                <li>JSX for component-based UI</li>
                <li>State management using React Hooks</li>
                <li>External API integration for recipe data retrieval</li>
                <ul className="technology">Styling:</ul>
                <li>CSS or a styling library (e.g., styled-components)</li>
              </div>
              <div className="col-md-6">
                <ul className="technology">Data Management:</ul>
                <li>
                  Fetching and handling data from a recipe API (e.g.,
                  Spoonacular API)
                </li>
                <li>
                  Here i used embabed api which is open source free api to use.
                </li>
                <ul className="technology">Version Control:</ul>
                <li>Git and GitHub for collaborative development</li>
              </div>
            </div>
            <ul>Future Improvements:</ul>
            <li>Implement user authentication and personalized user profiles.
 <br />Extend the recipe database to include a wider variety of cuisines and dietary options.
 <br />Enhance the UI with additional features such as recipe ratings and comments.                  Here i used embabed api which is open source free api to use.

</li>
            <ul>Github link :</ul>
            <span>
              <b> "https://github.com/Raviahir0331/Search-Recipe.git" </b>
            </span>
            {/* <p >Users can easily search for recipes by entering specific ingredients, cuisine types, or dietary restrictions.</p>
                <p>The application employs real-time filtering to provide instant and relevant results as users type</p> */}
          </div>
        </div>

        <div className="row tic-toe">
          <div className="col-md-6 tic-toe1">
            <h4>Tic-Tac-Toe Game</h4>
            <ul>Description:</ul>
            <p>
              The "Tic-Tac-Toe Game" project is a classic and interactive web
              application that allows users to play the well-known game of
              Tic-Tac-Toe. Built using HTML, CSS, jQuery, and JavaScript, this
              project provides a user-friendly interface for an enjoyable gaming
              experience. Players can compete against each other or against an
              AI opponent in a responsive and visually appealing environment.
            </p>
            <ul>Key Features:</ul>
            <li>
              <b>Game Board:</b>
              <br />A 3x3 grid serves as the game board, where players can make
              their moves.
              <br />
              The grid updates dynamically to display X and O symbols as players
              take turns.
            </li>
            <ul>Player Turns:</ul>
            <li>
              The game alternates between player turns, allowing users to click
              on an empty cell to make their move. <br />
              The interface visually indicates whose turn it is.
            </li>
            <ul>Winning Conditions:</ul>
            <li>
              The game automatically checks for winning conditions after each
              move.
              <br />A winner is declared when a player successfully forms a
              horizontal, vertical, or diagonal line of three matching symbols.
            </li>
            <ul>Draw Detection:</ul>
            <li>
              If the entire grid is filled without a winner, the game is
              declared a draw.
            </li>
            <ul>Restart and Reset:</ul>
            <li>
              Players can restart the game at any point to play again.
              <br />A reset button is available to clear the board and start a
              new game.
            </li>
            <ul>Responsive Design:</ul>
            <li>
              The user interface is designed to be responsive and accessible
              across various devices, including desktops, tablets, and mobile
              phones.
            </li>

            <ul>Technology :</ul>
            <li>
              <b>HTML:</b>
            </li>
            <li>Structure and layout of the game board.</li>

            <li>
              <b>CSS:</b>
            </li>
            <li>
              Styling for the game board, cells, and overall user interface.
            </li>
            <ul>
              JavaScript:
              <li>
                Game logic for turns, win detection, and draw detection.
                <br />
                DOM manipulation for updating the game board.
              </li>
            </ul>
            <ul>
              jQuery:
              <li>Simplifies DOM manipulation and event handling.</li>
            </ul>
            <ul>
              How to Play:
              <li>Open the game in a web browser.</li>
              <li>Click on an empty cell to make your move.</li>
              <li>Take turns with your opponent or the AI.</li>
              <li>The game will automatically detect wins or draws.</li>
              <li>Use the restart button to play again.</li>
            </ul>
            <ul>Github Link :</ul>
            <span>
              <b>"https://github.com/Raviahir0331/TIC_TAK_TOE"</b>
            </span>
          </div>
          <div className="col-md-6">
                <h4>Project Title: Ceramic Tiles Showcase

</h4>
<ul>Description: </ul>
<p>The "Ceramic Tiles Showcase" is a dynamic web application that presents a curated collection of ceramic tiles. This project utilizes a full-stack approach, combining HTML, CSS, Bootstrap, jQuery, and JavaScript for the front end, and Python with Django and MySQL for the back end. The goal is to create an interactive and responsive platform for users to explore, inquire, and get detailed information about various ceramic tiles.

</p>
<ul>Front-End Features:
</ul>

<li> <b>Tile Display:</b> <br />The main page displays a grid of ceramic tiles with high-quality images and essential details. <br />Implemented using HTML, CSS, and Bootstrap for a clean and responsive design.

</li>
<li><b>Modal Pop-up:
</b>Clicking on a tile opens a modal pop-up powered by jQuery and JavaScript.
 <br />The modal displays larger images, detailed specifications, and a brief description.
  </li>
  <li><b>Filtering and Sorting:
</b>Users can filter and sort tiles based on various criteria (e.g., material, size, color) using jQuery for dynamic updates.
</li>
<li><b>Responsive Design:
</b> Bootstrap ensures a responsive layout that adapts to different screen sizes for optimal user experience.
</li>
<ul>Back-End Features:

</ul>
<li><b>Django Framework:
</b>The back end is built using the Django framework, providing a scalable and maintainable structure.
</li>
<li><b>Database Integration:
</b>Utilizing MySQL as the database management system to store tile information.
 <br />Django ORM (Object-Relational Mapping) facilitates seamless interaction with the database.
</li>
<li><b>User Authentication:
</b>Implement user authentication with Django's built-in authentication system to allow registered users to save favorite tiles and make inquiries.
</li>
<ul>How to Explore:
<li>Visit the web application through a web browser.
</li>
<li>Browse through the collection of ceramic tiles on the main grid.
</li>
<li>Click on a tile to open a modal pop-up with additional details.
</li>
<li>Use the filtering and sorting options to refine your search.
</li>
<li>Register and log in to save favorite tiles and submit inquiries through the contact form.
</li>
</ul>
<ul>Technology :
  <li><b>Front End:
</b> <br />HTML, CSS, Bootstrap <br />jQuery, JavaScript

</li>
<li><b>Back End:
</b> <br />Python, Django
 <br />MySQL</li>
</ul>
<ul>Contributions: </ul>
<p>Contributions to enhance the visual appeal, add more tiles, improve the user interface, or introduce new features are encouraged. Developers can fork the repository, create a new branch, and submit pull requests.

</p>
<ul>Github Link :</ul>
<span> <b>"https://github.com/Raviahir0331/tiles"</b></span>




          </div>
        </div>

        <hr />
        
        <span className="haveproject1">Have a project in mind? <br />
Let’s build something together!</span>

<NavLink to='/contact'>
<button class="button-18" role="button">Contact</button>
</NavLink>
<hr />

        <div className="row footer col-md-11 ">

            <div className="col-md-6 rights">
            <span className="rights">© 2023 <b>Ravi Dangar.</b>  All rights reserved.</span>
            </div>
            <div className="col-md-6 icons">
            
            <img src={linkedin} alt="" className="linkdin"/>
            <img src={github} alt="" className="github" />
            <img src={twitter} alt="" className="twiter" />

            </div>
        </div>
        
      </div>
    </>
  );
};
