import { ExampleSingleton } from "./example-singleton";
import "./module-a-example";

const example = ExampleSingleton.getInstance();

example.setNum(2);
example.bazingaIterator();
