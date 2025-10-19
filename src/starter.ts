import { mount } from 'svelte'
import { FlowbiteFreonLayout, WebappConfigurator, setDevelopment, inDevelopment } from "@freon4dsl/weblib-flowbite"
import { configureExternals } from "./external/externals.js"
import { LanguageEnvironment } from "./freon/index.js";
import { configureLoggers } from "./loggers.js"
import { ServerCommunication } from "@freon4dsl/core"

/**
 * Initialize everything
 */
setDevelopment(false)

inDevelopment.value = false

WebappConfigurator.getInstance().setEnvironment(
    LanguageEnvironment.getInstance(),
    ServerCommunication.getInstance(),
);
configureExternals()
configureLoggers()

const app = mount(FlowbiteFreonLayout, {
    target: document.getElementById('freon')!,
})

export default app

