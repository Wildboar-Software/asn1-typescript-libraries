// Run with `npx vitest bench --run src/lib/matching` from packages/x500.
import { describe, expect, test } from "vitest";
import { evaluateLDAPAttributeOptionContextTyped } from "./ldapAttributeOptionContext.mjs";

const localTyped = evaluateLDAPAttributeOptionContextTyped;

/** Previous matcher: every stored and asserted option is lowercased. */
function matchLowercasedSet (
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

/** Production: original + lowercased keys, exact `Set.has` first. */
function matchDualKeySet (
    assertion: readonly string[],
    value: readonly string[],
): boolean {
    const stored = new Set<string>();
    for (let i = 0; i < value.length; i++) {
        const option = value[i];
        stored.add(option);
        const folded = option.toLowerCase();
        if (folded !== option) {
            stored.add(folded);
        }
    }
    for (let i = 0; i < assertion.length; i++) {
        const option = assertion[i];
        if (!(stored.has(option) || stored.has(option.toLowerCase()))) {
            return false;
        }
    }
    return true;
}

const foldedStored = [ "lang-en", "binary", "x-foo" ];
const foldedHit = [ "lang-en", "binary" ];
const mixedHit = [ "lang-EN", "binary" ];

let sink = 0;

describe("ldapAttributeOptionContext dual-key Set vs always-lowercased Set", () => {
    const cases: [ string, readonly string[], readonly string[], boolean ][] = [
        [ "already-folded 2-in-3", foldedHit, foldedStored, true ],
        [ "1-vs-1 already folded", [ "binary" ], [ "binary" ], true ],
        [ "1-vs-1 same mixed case", [ "BINARY" ], [ "BINARY" ], true ],
    ];
    for (const [ name, assertion, stored, expected ] of cases) {
        test(name, async ({ bench }) => {
            expect(matchLowercasedSet(assertion, stored)).toBe(expected);
            expect(matchDualKeySet(assertion, stored)).toBe(expected);
            expect(localTyped(assertion, stored)).toBe(expected);
            const result = await bench.compare(
                bench("always lowercase", () => {
                    sink += matchLowercasedSet(assertion, stored) ? 1 : 0;
                }),
                bench("exact has, then lowercase", () => {
                    sink += matchDualKeySet(assertion, stored) ? 1 : 0;
                }),
            );
            expect(result.get("exact has, then lowercase")).toBeFasterThan(
                result.get("always lowercase"),
            );
        });
    }

    test("mixed-case assertion against folded stored still matches", () => {
        expect(localTyped(mixedHit, foldedStored)).toBe(true);
        expect(localTyped([ "lang-FR" ], foldedStored)).toBe(false);
    });
});

export { sink };
