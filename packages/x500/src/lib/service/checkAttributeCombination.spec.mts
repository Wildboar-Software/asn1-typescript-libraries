import type { AttributeCombination } from "@wildboar/x500/ServiceAdministration";
import type { Filter } from "@wildboar/x500/DirectoryAbstractService";
import { checkAttributeCombination } from "./checkAttributeCombination.mjs";
import {
    commonName,
    countryName,
    localityName,
    organizationName,
    organizationalUnitName,
    stateOrProvinceName,
    streetAddress,
    surname,
} from "@wildboar/x500/SelectedAttributeTypes";
import { AttributeValueAssertion } from "@wildboar/x500/InformationFramework";
import { BER } from "@wildboar/asn1/functional";
import { ASN1TagClass, BERElement, ObjectIdentifier } from "@wildboar/asn1";

describe("checkAttributeCombination", () => {
    it("should not find any violations in the simplest compliant case", () => {
        const violations: AttributeCombination[] = [];
        const filter: Filter = {
            item: {
                equality: new AttributeValueAssertion(
                    commonName["&id"],
                    commonName.encoderFor["&Type"]!({ uTF8String: "John Doe" }, BER),
                ),
            },
        };
        const combo: AttributeCombination = {
            attribute: commonName["&id"],
        };
        const result = checkAttributeCombination(filter, combo, true, violations);
        expect(result).toBe(true);
        expect(violations).toHaveLength(0);
    });

    it("should not find any violations in the simplest compliant AND case", () => {
        const violations: AttributeCombination[] = [];
        const filter: Filter = {
            and: [
                {
                    item: {
                        equality: new AttributeValueAssertion(
                            commonName["&id"],
                            commonName.encoderFor["&Type"]!({ uTF8String: "John Doe" }, BER),
                        ),
                    },
                },
                {
                    item: {
                        equality: new AttributeValueAssertion(
                            streetAddress["&id"],
                            streetAddress.encoderFor["&Type"]!({ uTF8String: "123 Main St" }, BER),
                        ),
                    },
                },
            ],
        };
        const combo: AttributeCombination = {
            and: [
                { attribute: commonName["&id"] },
                { attribute: streetAddress["&id"] },
            ],
        };
        const result = checkAttributeCombination(filter, combo, true, violations);
        expect(result).toBe(true);
        expect(violations).toHaveLength(0);
    });

    it("should not find any violations in the simplest compliant OR case", () => {
        const violations: AttributeCombination[] = [];
        const filter: Filter = {
            or: [
                {
                    item: {
                        equality: new AttributeValueAssertion(
                            commonName["&id"],
                            commonName.encoderFor["&Type"]!({ uTF8String: "John Doe" }, BER),
                        ),
                    },
                },
                {
                    item: {
                        equality: new AttributeValueAssertion(
                            streetAddress["&id"],
                            streetAddress.encoderFor["&Type"]!({ uTF8String: "123 Main St" }, BER),
                        ),
                    },
                },
            ],
        };
        // X.501 §16.5 / X.511 §15.1(3): each OR branch satisfies the complete
        // attributeCombination independently (branch 1 has cn, branch 2 has streetAddress).
        const combo: AttributeCombination = {
            or: [
                { attribute: commonName["&id"] },
                { attribute: streetAddress["&id"] },
            ],
        };
        const result = checkAttributeCombination(filter, combo, true, violations);
        expect(result).toBe(true);
        expect(violations).toHaveLength(0);
    });

    it("should reject an OR filter when any branch violates an OR combination", () => {
        const violations: AttributeCombination[] = [];
        const filter: Filter = {
            or: [
                { item: { present: commonName["&id"] } },
                { item: { present: surname["&id"] } },
            ],
        };
        const combo: AttributeCombination = {
            or: [
                { attribute: commonName["&id"] },
                { attribute: streetAddress["&id"] },
            ],
        };
        const result = checkAttributeCombination(filter, combo, true, violations);
        expect(result).toBe(false);
        expect(violations).toEqual([combo]);
    });

    it("should not find any violations in an empty AND case", () => {
        const violations: AttributeCombination[] = [];
        const filter: Filter = {
            and: [],
        };
        const combo: AttributeCombination = {
            and: [],
        };
        const result = checkAttributeCombination(filter, combo, true, violations);
        expect(result).toBe(true);
        expect(violations).toHaveLength(0);
    });

    it("should vacuously accept an empty OR filter (no DNF terms) and reject an empty OR combo on non-empty filters", () => {
        const emptyOrViolations: AttributeCombination[] = [];
        const emptyOrCombo: AttributeCombination = { or: [] };
        expect(checkAttributeCombination({ or: [] }, emptyOrCombo, true, emptyOrViolations)).toBe(true);
        expect(emptyOrViolations).toHaveLength(0);

        const emptyAndViolations: AttributeCombination[] = [];
        expect(checkAttributeCombination({ and: [] }, emptyOrCombo, true, emptyAndViolations)).toBe(false);
        expect(emptyAndViolations).toEqual([emptyOrCombo]);
    });

    describe("negated compound attribute combinations", () => {
        const cn: Filter = { item: { present: commonName["&id"] } };
        const street: Filter = { item: { present: streetAddress["&id"] } };
        const sn: Filter = { item: { present: surname["&id"] } };

        it("evaluates NOT(AND(cn, street)) per DNF term using De Morgan semantics", () => {
            const combo: AttributeCombination = {
                not: {
                    and: [
                        { attribute: commonName["&id"] },
                        { attribute: streetAddress["&id"] },
                    ],
                },
            };

            expect(checkAttributeCombination(cn, combo, true)).toBe(true);
            expect(checkAttributeCombination(street, combo, true)).toBe(true);
            expect(checkAttributeCombination({ or: [cn, street] }, combo, true)).toBe(true);

            const violations: AttributeCombination[] = [];
            expect(checkAttributeCombination({ and: [cn, street] }, combo, true, violations)).toBe(false);
            expect(violations).toEqual([combo]);
        });

        it("evaluates NOT(OR(cn, street)) per DNF term using De Morgan semantics", () => {
            const combo: AttributeCombination = {
                not: {
                    or: [
                        { attribute: commonName["&id"] },
                        { attribute: streetAddress["&id"] },
                    ],
                },
            };

            expect(checkAttributeCombination(sn, combo, true)).toBe(true);
            expect(checkAttributeCombination(cn, combo, true)).toBe(false);
            expect(checkAttributeCombination({ or: [sn, street] }, combo, true)).toBe(false);
        });
    });

    describe("AND-of-ORs and deduplication", () => {
        const cn: Filter = { item: { present: commonName["&id"] } };
        const street: Filter = { item: { present: streetAddress["&id"] } };
        const sn: Filter = { item: { present: surname["&id"] } };
        const l: Filter = { item: { present: localityName["&id"] } };

        it("evaluates combinations across expanded AND-of-ORs terms", () => {
            const combo: AttributeCombination = {
                and: [
                    { attribute: surname["&id"] },
                    {
                        or: [
                            { attribute: commonName["&id"] },
                            { attribute: streetAddress["&id"] },
                        ],
                    },
                ],
            };

            expect(checkAttributeCombination({ and: [sn, { or: [cn, street] }] }, combo, true)).toBe(true);
            expect(checkAttributeCombination({ and: [sn, { or: [cn, l] }] }, combo, true)).toBe(false);
            expect(checkAttributeCombination({
                or: [
                    { and: [sn, cn] },
                    { and: [sn, street] },
                ],
            }, combo, true)).toBe(true);
        });

        it("preserves outer conjunct attributes when the same attribute also appears in an inner OR", () => {
            const combo: AttributeCombination = {
                and: [
                    { attribute: commonName["&id"] },
                    {
                        or: [
                            { attribute: commonName["&id"] },
                            { attribute: streetAddress["&id"] },
                        ],
                    },
                ],
            };
            const filter: Filter = {
                and: [
                    cn,
                    { or: [cn, street] },
                ],
            };
            expect(checkAttributeCombination(filter, combo, true)).toBe(true);
        });

        it("deduplicates multi-value ORs and irrelevant-attribute ORs without hitting maxTerms", () => {
            // 10 ORs of 3 values each for the same attribute would naively be 3^10 = 59,049 terms.
            const multiValueOrs: Filter[] = Array.from({ length: 10 }, (_, i) => ({
                or: [
                    {
                        item: {
                            equality: new AttributeValueAssertion(
                                commonName["&id"],
                                commonName.encoderFor["&Type"]!({ uTF8String: `A${i}` }, BER),
                            ),
                        },
                    },
                    {
                        item: {
                            equality: new AttributeValueAssertion(
                                commonName["&id"],
                                commonName.encoderFor["&Type"]!({ uTF8String: `B${i}` }, BER),
                            ),
                        },
                    },
                    {
                        item: {
                            equality: new AttributeValueAssertion(
                                commonName["&id"],
                                commonName.encoderFor["&Type"]!({ uTF8String: `C${i}` }, BER),
                            ),
                        },
                    },
                ],
            }));
            expect(checkAttributeCombination(
                { and: multiValueOrs },
                { attribute: commonName["&id"] },
                true,
            )).toBe(true);

            // 10 ORs of irrelevant attributes alongside a top-level cn should collapse to 1 term.
            const irrelevantOrs: Filter[] = Array.from({ length: 10 }, () => ({
                or: [sn, l],
            }));
            expect(checkAttributeCombination(
                { and: [cn, ...irrelevantOrs] },
                { attribute: commonName["&id"] },
                true,
            )).toBe(true);
        });

        it("short-circuits an AND containing an empty OR (FALSE) before branching", () => {
            const combo: AttributeCombination = {
                or: [
                    { attribute: commonName["&id"] },
                    { attribute: streetAddress["&id"] },
                    { attribute: surname["&id"] },
                    { attribute: localityName["&id"] },
                    { attribute: organizationName["&id"] },
                    { attribute: organizationalUnitName["&id"] },
                    { attribute: stateOrProvinceName["&id"] },
                    { attribute: countryName["&id"] },
                ],
            };
            const branching = [
                { or: [cn, street] },
                { or: [sn, l] },
                { or: [{ item: { present: organizationName["&id"] } }, { item: { present: organizationalUnitName["&id"] } }] },
                { or: [{ item: { present: stateOrProvinceName["&id"] } }, { item: { present: countryName["&id"] } }] },
            ];
            expect(checkAttributeCombination(
                { and: [...branching, { or: [] }] },
                combo,
                true,
                undefined,
                { maxTerms: 1 },
            )).toBe(true);
        });
    });

    describe("filter negation and presence requirements", () => {
        const cn: Filter = { item: { present: commonName["&id"] } };
        const street: Filter = { item: { present: streetAddress["&id"] } };
        const required: AttributeCombination = { attribute: commonName["&id"] };
        const excluded: AttributeCombination = { not: required };

        const cases: [string, Filter, boolean, boolean][] = [
            ["the required type", cn, true, false],
            ["an unrelated type", street, false, true],
            ["a negated required type", { not: cn }, false, true],
            ["a negated unrelated type", { not: street }, false, true],
            ["a double-negated required type", { not: { not: cn } }, true, false],
            ["a double-negated unrelated type", { not: { not: street } }, false, true],
            ["a triple-negated required type", { not: { not: { not: cn } } }, false, true],
            ["a triple-negated unrelated type", { not: { not: { not: street } } }, false, true],
            ["an AND containing the required type", { and: [cn, street] }, true, false],
            ["an AND containing only a negated required type", { and: [street, { not: cn }] }, false, true],
            ["an AND with an unrelated negation", { and: [cn, { not: street }] }, true, false],
            ["an OR missing the required type in one branch", { or: [cn, street] }, false, false],
            ["an OR with an unrelated negated branch", { or: [cn, { not: street }] }, false, false],
            ["a negated AND", { not: { and: [{ not: cn }, { not: street }] } }, false, false],
            ["a negated OR", { not: { or: [{ not: cn }, { not: street }] } }, true, false],
            ["an empty AND", { and: [] }, false, true],
            ["an empty OR", { or: [] }, true, true],
            ["an AND with a false operand", { and: [cn, { or: [] }] }, true, true],
            ["an OR with a false operand", { or: [cn, { or: [] }] }, true, false],
        ];

        it.each(cases)("checks non-negated presence for %s", (_description, filter, meets_presence, meets_absence) => {
            const required_violations: AttributeCombination[] = [];
            expect(checkAttributeCombination(filter, required, true, required_violations)).toBe(meets_presence);
            expect(required_violations).toHaveLength(meets_presence ? 0 : 1);

            const excluded_violations: AttributeCombination[] = [];
            expect(checkAttributeCombination(filter, excluded, true, excluded_violations)).toBe(meets_absence);
            expect(excluded_violations).toHaveLength(meets_absence ? 0 : 1);

            const negated_violations: AttributeCombination[] = [];
            expect(checkAttributeCombination(filter, required, false, negated_violations)).toBe(meets_absence);
            expect(negated_violations).toHaveLength(meets_absence ? 0 : 1);
        });

        it.each([true, false])("returns undefined and fails closed for unknown filter alternatives with non_negated=%s", (non_negated) => {
            const filter = new BERElement();
            filter.tagClass = ASN1TagClass.context;
            filter.tagNumber = 99;
            const violations: AttributeCombination[] = [];
            const result = checkAttributeCombination(filter, required, non_negated, violations);
            expect(result).toBeUndefined();
            expect(violations).toEqual([required]);
        });

        it("returns undefined and fails closed for unknown FilterItem and AttributeCombination alternatives", () => {
            const unknownEl = new BERElement();
            unknownEl.tagClass = ASN1TagClass.context;
            unknownEl.tagNumber = 99;

            const itemViolations: AttributeCombination[] = [];
            expect(checkAttributeCombination({ item: unknownEl }, required, true, itemViolations)).toBeUndefined();
            expect(itemViolations).toEqual([required]);

            const comboViolations: AttributeCombination[] = [];
            expect(checkAttributeCombination(cn, unknownEl, true, comboViolations)).toBeUndefined();
            expect(comboViolations).toEqual([unknownEl]);
        });

        it.each([true, false])("returns undefined and fails closed at the filter depth limit with non_negated=%s", (non_negated) => {
            let filter: Filter = cn;
            for (let i = 0; i < 12; i++) {
                filter = { not: filter };
            }
            const violations: AttributeCombination[] = [];
            const result = checkAttributeCombination(filter, required, non_negated, violations);
            expect(result).toBeUndefined();
            expect(violations).toEqual([required]);
        });
    });

    describe("complexity bounds", () => {
        it("returns undefined and pushes combo to violations when maxTerms is exceeded", () => {
            // 7 independent ORs over 14 distinct attributes in combo -> 2^7 = 128 terms > default 64.
            const oids = Array.from({ length: 14 }, (_, i) => ObjectIdentifier.fromString(`1.2.3.4.${i + 1}`));
            const filter: Filter = {
                and: Array.from({ length: 7 }, (_, i) => ({
                    or: [
                        { item: { present: oids[i * 2] } },
                        { item: { present: oids[i * 2 + 1] } },
                    ],
                })),
            };
            // Always satisfied by every term so short-circuiting on false does not trigger.
            const combo: AttributeCombination = {
                or: oids.map((oid) => ({ attribute: oid })),
            };
            const violations: AttributeCombination[] = [];
            expect(checkAttributeCombination(filter, combo, true, violations)).toBeUndefined();
            expect(violations).toEqual([combo]);

            // Increasing maxTerms lets the exact same filter succeed.
            const okViolations: AttributeCombination[] = [];
            expect(checkAttributeCombination(filter, combo, true, okViolations, { maxTerms: 128 })).toBe(true);
            expect(okViolations).toHaveLength(0);
        });

        it("returns undefined and pushes combo to violations when maxFilterNodes is exceeded", () => {
            const filter: Filter = {
                and: [
                    { item: { present: commonName["&id"] } },
                    { item: { present: streetAddress["&id"] } },
                    { item: { present: surname["&id"] } },
                ],
            };
            const combo: AttributeCombination = { attribute: commonName["&id"] };
            const violations: AttributeCombination[] = [];
            expect(checkAttributeCombination(filter, combo, true, violations, { maxFilterNodes: 2 })).toBeUndefined();
            expect(violations).toEqual([combo]);

            // Exact node count (1 AND + 3 items = 4) still succeeds.
            const exactViolations: AttributeCombination[] = [];
            expect(checkAttributeCombination(filter, combo, true, exactViolations, { maxFilterNodes: 4 })).toBe(true);
            expect(exactViolations).toHaveLength(0);

            // Huge flat AND is rejected in O(1) before pushing children onto `work`.
            const hugeAnd: Filter = {
                and: Array.from({ length: 100_000 }, () => ({ item: { present: commonName["&id"] } })),
            };
            const hugeViolations: AttributeCombination[] = [];
            expect(checkAttributeCombination(hugeAnd, combo, true, hugeViolations)).toBeUndefined();
            expect(hugeViolations).toEqual([combo]);
        });

        it("tolerates deeper administrator-supplied combinations than untrusted filters", () => {
            const filter: Filter = { item: { present: commonName["&id"] } };
            let deepCombo: AttributeCombination = { attribute: commonName["&id"] };
            for (let i = 0; i < 20; i++) {
                deepCombo = { not: deepCombo };
            }
            // Even number (20) of NOTs exceeds default maxFilterDepth (10), but is
            // well within default maxComboDepth (100).
            expect(checkAttributeCombination(filter, deepCombo, true)).toBe(true);

            const violations: AttributeCombination[] = [];
            expect(checkAttributeCombination(filter, deepCombo, true, violations, { maxComboDepth: 10 })).toBeUndefined();
            expect(violations).toEqual([deepCombo]);
        });
    });
});
