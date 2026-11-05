// Run with `npx vitest bench --run src/lib/matching` from packages/x500.
import { describe, expect, test } from "vitest";
import { evaluateLDAPAttributeOptionContextTyped } from "./ldapAttributeOptionContext.mjs";

const localTyped = evaluateLDAPAttributeOptionContextTyped;

function matchWithLowercasedSet (
    assertion: readonly string[],
    value: readonly string[],
): boolean {
    const storedValues = new Set(value.map((str) => str.toLowerCase()));
    for (let i = 0; i < assertion.length; i++) {
        if (!storedValues.has(assertion[i].toLowerCase())) {
            return false;
        }
    }
    return true;
}

const stored = [ "lang-en", "binary", "x-foo" ];
const presentedHit = [ "lang-EN", "binary" ];
const presentedMiss = [ "lang-FR", "binary" ];

let sink = 0;

describe("ldapAttributeOptionContext linear vs Set of lowercased options", () => {
    for (const [ name, assertion, expected ] of [
        [ "2-in-3 match", presentedHit, true ],
        [ "2-in-3 miss", presentedMiss, false ],
    ] as const) {
        test(name, async ({ bench }) => {
            expect(matchWithLowercasedSet(assertion, stored)).toBe(expected);
            expect(localTyped(assertion, stored)).toBe(expected);
            const result = await bench.compare(
                bench("Set of lowercased", () => {
                    sink += matchWithLowercasedSet(assertion, stored) ? 1 : 0;
                }),
                bench("linear case-insensitive", () => {
                    sink += localTyped(assertion, stored) ? 1 : 0;
                }),
            );
            expect(result.get("linear case-insensitive")).toBeFasterThan(result.get("Set of lowercased"));
        });
    }
});

export { sink };
