------------ > SLUGS in Angular < ------------

1 - Data Model Changes:
Ensure your data model (e.g., IShoe) has a unique property, often a name, that you can use to generate the slug.

2 - Slug Generation Utility:
Create a utility function, generateSlug, which takes a string and returns a URL-friendly string (the slug).
This function can convert the input string to lowercase, replace spaces with hyphens, and remove any unwanted characters.

3 - Routing:
Update your Angular route configuration to accept a slug as a route parameter.
Example: { path: 'shoes-nike-dett/:slug', component: NikeDettComponent }.

4 - Link Creation:
In components where you list items, use the generateSlug utility to create links with slugs.
Example: If you're listing shoes, each shoe's link would be something like /shoes-nike-dett/nike-air-max where nike-air-max is the slug generated from the shoe's name.

5 - Retrieving Items by Slug:
In the detail component (like NikeDettComponent), use Angular's ActivatedRoute to retrieve the slug from the URL.
Use the retrieved slug to find the correct item (e.g., shoe) either from local data or by making an API call.

6 - Service Logic:
Modify services (like ShoesService) to have methods like findShoeBySlug that allow you to retrieve an item based on its slug.
If using local data, ensure this data is loaded before attempting to find an item by its slug.

7 - Error Handling:
Handle scenarios where an item for a given slug might not exist. This could be by redirecting the user to a 404 page or displaying an appropriate message.

8 - Bonus (SEO & Performance):
Consider using server-side rendering (like Angular Universal) to ensure that pages with slugs are SEO-friendly.
Cache the results of slug generation to improve performance if necessary.
By following this checklist, you can effectively implement and use slugs in your Angular application.
