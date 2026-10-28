# My Recipe Book

An Angular exercise in sharing data between components with a service.

Browse a catalogue of recipes, each shown in its own card with its category,
preparation time and difficulty level. Save recipes to a favorites list, view
them in a separate component, and clear the list with one click.

**Concepts practiced**
- Components and `@Input` (passing a recipe from parent to child)
- A shared service holding the favorites list
- Dependency injection into several components
- No data passed through `App`, and no custom `Output` needed

**Run locally**
    npm install
    ng serve
