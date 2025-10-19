# langdev2025-editor-external-components
This is the code fopr the demo application used in the LangDev 2025 presentation "Freon-Powered: Crafting Web-Native DSL Editors That Wow".

It shows how external widgets can be easily integrated in a Freon editor through the Freon plugin mechanism.


# setup
Start a bash terminal and run the following.

```bash
npm run install
npm run generate
npm run styles
```

Then open a second bash terminal.
In the second bash terminal start the server:

```bash
npm run server
```

In the first terminal startup the application and =go to the URL being show.

```bash
npm run dev
```

# See External Widgets
After opening the EdultEducation1 model, you will see the textual projections.
To see the external components, goto the `Change Views` menu (the Eye icon: the rightmost on the toolbar)
and select the `final` view.

You will them see the plugged in DatPicker, Collapsible, Accordion, and Schedule views.
