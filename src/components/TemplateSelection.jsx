import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const templates = [
  {
    id: 1,
    name: "Template 1",
    image: require("../assets/template1.png"),
  },
  {
    id: 2,
    name: "Template 2",
    image: require("../assets/template2.png"),
  },
  {
    id: 3,
    name: "Template 3",
    image: require("../assets/template3.png"),
  },
  {
    id: 4,
    name: "Template 4",
    image: require("../assets/template4.png"),
  },
  {
    id: 5,
    name: "Template 5",
    image: require("../assets/template5.png"),
  },
];

function TemplateSelection() {
  const [selectedTemplate, setSelectedTemplate] = useState(templates[0]);

  return (
    <div className="w-72">
      <Listbox value={selectedTemplate} onChange={setSelectedTemplate}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate">{selectedTemplate.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <FontAwesomeIcon
                icon={faChevronDown}
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {templates.map((template) => (
                <Listbox.Option
                  key={template.id}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-cyan-100 text-cyan-900" : "text-gray-900"
                    }`
                  }
                  value={template}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {template.name}
                      </span>
                      {selected && (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-cyan-600">
                          <FontAwesomeIcon
                            icon={faCheck}
                            className="h-5 w-5"
                            aria-hidden="true"
                          />
                        </span>
                      )}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
      <div className="mt-8 shadow-lg">
        <img
          src={selectedTemplate.image}
          alt={selectedTemplate.name}
          className="w-full"
        />
      </div>
    </div>
  );
}

export default TemplateSelection;
