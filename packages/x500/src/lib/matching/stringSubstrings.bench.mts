// Run with `npx vitest bench --run src/lib/matching` from packages/x500.
import { describe, expect, test } from "vitest";
import {
    matchStringSubstrings,
    type AssertedSubstring,
} from "../types/matching.mjs";

const localMatch = matchStringSubstrings;

function matchBySlicing (
    prepared: string,
    assertion: AssertedSubstring<string>[],
): boolean {
    let v = prepared;
    for (let i = 0; i < assertion.length; i++) {
        const subass = assertion[i];
        if ("any_" in subass) {
            const idx = v.indexOf(subass.any_);
            if (idx >= 0) {
                v = v.slice(idx + subass.any_.length);
            } else {
                return false;
            }
        } else if ("initial" in subass) {
            if (v.startsWith(subass.initial)) {
                v = v.slice(subass.initial.length);
            } else {
                return false;
            }
        } else if ("final" in subass) {
            if (v.endsWith(subass.final)) {
                v = v.slice(0, v.length - subass.final.length);
            } else {
                return false;
            }
        }
    }
    return true;
}

function matchByAllocatingFactory (
    prepared: string,
    assertion: AssertedSubstring<string>[],
): boolean {
    return ((valuePrepper: () => string) => {
        return matchBySlicing(valuePrepper(), assertion);
    })(() => prepared);
}

const shortPrepared = "What are you looking at, you hockey puck? The directory contains many common names such as Jonathan Wilbur.";
const shortAssertion: AssertedSubstring<string>[] = [
    { initial: "What" },
    { any_: "looking" },
    { any_: "hockey" },
    { final: "Wilbur." },
];
const longPrepared = "commonName Jonathan Wilbur of Wildboar Software. ".repeat(40);
const longAssertion: AssertedSubstring<string>[] = [
    { initial: "commonName" },
    { any_: "Jonathan" },
    { any_: "Wilbur" },
    { any_: "Wildboar" },
    { any_: "Software" },
    { any_: "Jonathan" },
    { any_: "Wilbur" },
    { any_: "Wildboar" },
    { final: "Software. " },
];

let sink = 0;

describe("matchStringSubstrings index window vs slicing the remainder", () => {
    for (const [ name, prepared, assertion ] of [
        [ "~100 char description", shortPrepared, shortAssertion ],
        [ "~2KB description", longPrepared, longAssertion ],
    ] as const) {
        test(name, async ({ bench }) => {
            expect(localMatch(prepared, assertion)).toBe(matchBySlicing(prepared, assertion));
            const result = await bench.compare(
                bench("slice remainder", () => {
                    sink += matchBySlicing(prepared, assertion) ? 1 : 0;
                }),
                bench("index window", () => {
                    sink += localMatch(prepared, assertion) ? 1 : 0;
                }),
            );
            expect(result.get("index window")).toBeFasterThan(result.get("slice remainder"));
        });
    }
});

describe("matchPreparedString factory allocation", () => {
    test("direct match vs new matcher every call", async ({ bench }) => {
        expect(localMatch(shortPrepared, shortAssertion)).toBe(
            matchByAllocatingFactory(shortPrepared, shortAssertion),
        );
        const result = await bench.compare(
            bench("new matcher every call", () => {
                sink += matchByAllocatingFactory(shortPrepared, shortAssertion) ? 1 : 0;
            }),
            bench("direct match", () => {
                sink += localMatch(shortPrepared, shortAssertion) ? 1 : 0;
            }),
        );
        expect(result.get("direct match")).toBeFasterThan(result.get("new matcher every call"));
    });
});

export { sink };
