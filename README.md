# simple-got-api
GoT API to get names, places and things from the Game of Thrones universe

To get the code working, create a MongoDB db
Next, create a .env file in your project in the root folder.

A .sample_env file where you can add in your own db and other related entries

You can use data from below: <br />
https://docs.google.com/spreadsheets/d/1NQhMc0qNt-7snzCHo_hE-pKC0nFqrgwM5lZHmOX5Cwo/edit?usp=sharing

*****************************************************************************************************************************************
 

 
Base URL:
=========

https://peaceful-sea-89348.herokuapp.com/


Routes:
=======

Names:
------
For All Names: /names <br />
For a ID: /names/id/5981a2e012e6ca28dc6b6531 <br />
For a Name: /names/Jon <br />
For a House: /names/?House=Stark <br />
For a Name and House: /names/Jon?House=Stark <br />

Houses:
-------
For All Houses: /houses <br />
For a ID: /houses/id/5978af5612e6ca19a06d0b90 <br />
For a House: /houses/Stark <br />
For a Type of House: /houses/?Type=Major <br />
For a House and Type: /houses/Stark?Type=Major <br />

Things:
-------

<br />

Example URL:
============

https://peaceful-sea-89348.herokuapp.com/names/id/5981a2e012e6ca28dc6b6531


Working:
=======
NAME: Get all names, Get names by house, Get names by ID, Get names by FullName and House, Get names by FullName
 
WIP:
====

PLACE <br />
THING <br />
 

 

 
