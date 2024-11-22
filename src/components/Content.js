import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

export default function Content() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            width="100%"
            height="100%"
            strokeWidth={0}
          />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base/7 font-semibold text-indigo-600">
                React Query
              </p>
              <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                How We Manage API Calls and State Handling Using React Query in
                Our Next.js Project
              </h1>
              <p className="text-base/7 font-semibold text-indigo-600 pt-6">
                Introduction
              </p>
              <p className="text-xl/8 text-gray-700">
                Migrating our project from React/JavaScript to
                Next.js/TypeScript brought a lot of exciting improvements. One
                of the most impactful changes has been using React Query to
                handle API requests and manage server state efficiently. This
                blog will cover how React Query helped me streamline GET and
                POST API calls, manage server state, and reduce the complexity
                of error handling, caching, and data refetching.
              </p>
              <p className=" mt-2  text-gray-700">
                From my experience, React Query’s mutation, invalidateQueries,
                and polling features were game changers, simplifying tasks that
                previously required a lot of manual coding. In this blog, I will
                walk through the problems I faced before React Query, how it
                solved those issues, and the detailed steps I took to integrate
                it into our Next.js project.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden ">
          <img
            alt="dfvds"
            src={
              "https://anhdangcode.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F12linmif%2Fproduction%2Fc59674dd2d182f6d4f60d072288d6f170460f17e-955x500.png%3Fw%3D955%26auto%3Dformat&w=3840&q=75"
            }
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base/7 text-gray-700 lg:max-w-lg">
              <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900">
                Challenges Before React Query
              </h2>
              <p className="mt-6">
                Before using React Query, making API calls and managing server
                state was more cumbersome and error-prone. Some common
                challenges included:
              </p>

              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Manual State Management:
                    </strong>{" "}
                    I had to manually write code for managing loading states,
                    updating the UI after a successful API call, and handling
                    server errors.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Polling APIs:
                    </strong>{" "}
                    For polling APIs (repeatedly calling an API at regular
                    intervals), I had to set up timers and clean them up
                    properly, adding extra complexity to the code.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Refetching after Mutations:
                    </strong>{" "}
                    After a POST or PUT request, I needed to manually refetch
                    GET APIs to ensure the UI displayed the latest data, leading
                    to redundant code.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                This manual process was time-consuming, error-prone, and made
                the codebase more difficult to maintain. Enter React Query,
                which provided a streamlined solution.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                No server? No problem.
              </h2>
              <p className="mt-6">
                Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam
                consequat in. Convallis arcu ipsum urna nibh. Pharetra, euismod
                vitae interdum mauris enim, consequat vulputate nibh. Maecenas
                pellentesque id sed tellus mauris, ultrices mauris. Tincidunt
                enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam
                turpis ipsum eu a sed convallis diam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
