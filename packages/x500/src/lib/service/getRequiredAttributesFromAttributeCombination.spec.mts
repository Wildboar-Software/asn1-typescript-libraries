import type { DotDelimitedOidString } from "@wildboar/asn1";
import { ObjectIdentifier } from "@wildboar/asn1";
import type { AttributeCombination } from "@wildboar/x500/ServiceAdministration";
import { getRequiredAttributesFromAttributeCombination } from "./getRequiredAttributesFromAttributeCombination.mjs";
import { commonName, streetAddress } from "@wildboar/x500/SelectedAttributeTypes";

describe("getRequiredAttributesFromAttributeCombination", () => {
    const cn_oid = commonName["&id"].toString();
    const street_oid = streetAddress["&id"].toString();

    it("should return the required attributes in the simplest case", () => {
        const combo: AttributeCombination = {
            attribute: commonName["&id"],
        };
        const ret = new Set<DotDelimitedOidString>();
        getRequiredAttributesFromAttributeCombination(combo, true, ret);
        expect(ret.size).toBe(1);
        expect(ret.has(cn_oid)).toBe(true);
    });

    it("should return the required attributes in the simplest case nested in and", () => {
        const combo: AttributeCombination = {
            and: [
                {
                    attribute: commonName["&id"],
                },
            ],
        };
        const ret = new Set<DotDelimitedOidString>();
        getRequiredAttributesFromAttributeCombination(combo, true, ret);
        expect(ret.size).toBe(1);
        expect(ret.has(cn_oid)).toBe(true);
    });

    it("should return the required attributes in the simplest case nested in or", () => {
        const combo: AttributeCombination = {
            or: [
                {
                    attribute: commonName["&id"],
                },
            ],
        };
        const ret = new Set<DotDelimitedOidString>();
        getRequiredAttributesFromAttributeCombination(combo, true, ret);
        expect(ret.size).toBe(1);
        expect(ret.has(cn_oid)).toBe(true);
    });

    it("should not return any required attributes if the simplest case is nested in not", () => {
        const combo: AttributeCombination = {
            not: {
                attribute: commonName["&id"],
            },
        };
        const ret = new Set<DotDelimitedOidString>();
        getRequiredAttributesFromAttributeCombination(combo, true, ret);
        expect(ret.size).toBe(0);
        expect(ret.has(cn_oid)).toBe(false);
    });

    it("should return the required attributes in a complex case", () => {
        const combo: AttributeCombination = {
            or: [
                {
                    attribute: commonName["&id"],
                },
                {
                    and: [
                        {
                            attribute: commonName["&id"],
                        },
                        {
                            attribute: streetAddress["&id"],
                        },
                    ],
                },
            ],
        };
        const ret = new Set<DotDelimitedOidString>();
        getRequiredAttributesFromAttributeCombination(combo, true, ret);
        expect(ret.size).toBe(1);
        expect(ret.has(cn_oid)).toBe(true);
    });

    describe("De Morgan's rules under negation", () => {
        it("does not report alternatives as mandatory for NOT(AND(NOT A, NOT B))", () => {
            // NOT(AND(NOT A, NOT B)) === A OR B -> neither is unconditionally required.
            const combo: AttributeCombination = {
                not: {
                    and: [
                        { not: { attribute: commonName["&id"] } },
                        { not: { attribute: streetAddress["&id"] } },
                    ],
                },
            };
            const ret = new Set<DotDelimitedOidString>();
            getRequiredAttributesFromAttributeCombination(combo, true, ret);
            expect(ret.size).toBe(0);
        });

        it("reports both operands as mandatory for NOT(OR(NOT A, NOT B))", () => {
            // NOT(OR(NOT A, NOT B)) === A AND B -> both are unconditionally required.
            const combo: AttributeCombination = {
                not: {
                    or: [
                        { not: { attribute: commonName["&id"] } },
                        { not: { attribute: streetAddress["&id"] } },
                    ],
                },
            };
            const ret = new Set<DotDelimitedOidString>();
            getRequiredAttributesFromAttributeCombination(combo, true, ret);
            expect(Array.from(ret).sort()).toEqual([cn_oid, street_oid].sort());
        });

        it("extracts shared mandatory attributes across negated AND branches", () => {
            // NOT(AND(NOT A, NOT(AND(A, B)))) === A OR (A AND B) === A.
            const combo: AttributeCombination = {
                not: {
                    and: [
                        { not: { attribute: commonName["&id"] } },
                        {
                            not: {
                                and: [
                                    { attribute: commonName["&id"] },
                                    { attribute: streetAddress["&id"] },
                                ],
                            },
                        },
                    ],
                },
            };
            const ret = new Set<DotDelimitedOidString>();
            getRequiredAttributesFromAttributeCombination(combo, true, ret);
            expect(Array.from(ret)).toEqual([cn_oid]);
        });

        it("extracts only positively required attributes from NOT(OR(NOT A, B))", () => {
            // NOT(OR(NOT A, B)) === A AND NOT B -> only A is required.
            const combo: AttributeCombination = {
                not: {
                    or: [
                        { not: { attribute: commonName["&id"] } },
                        { attribute: streetAddress["&id"] },
                    ],
                },
            };
            const ret = new Set<DotDelimitedOidString>();
            getRequiredAttributesFromAttributeCombination(combo, true, ret);
            expect(Array.from(ret)).toEqual([cn_oid]);
        });

        it("handles NOT(AND(A, B)) without requiring A or B", () => {
            // NOT(AND(A, B)) === NOT A OR NOT B -> no attribute is required.
            const combo: AttributeCombination = {
                not: {
                    and: [
                        { attribute: commonName["&id"] },
                        { attribute: streetAddress["&id"] },
                    ],
                },
            };
            const ret = new Set<DotDelimitedOidString>();
            getRequiredAttributesFromAttributeCombination(combo, true, ret);
            expect(ret.size).toBe(0);
        });

        it("handles double negation NOT(NOT(A))", () => {
            const combo: AttributeCombination = {
                not: {
                    not: { attribute: commonName["&id"] },
                },
            };
            const ret = new Set<DotDelimitedOidString>();
            getRequiredAttributesFromAttributeCombination(combo, true, ret);
            expect(Array.from(ret)).toEqual([cn_oid]);
        });

        it("handles direct invocation with non_negated=false", () => {
            const and_not_ab: AttributeCombination = {
                and: [
                    { not: { attribute: commonName["&id"] } },
                    { not: { attribute: streetAddress["&id"] } },
                ],
            };
            const ret_or = new Set<DotDelimitedOidString>();
            getRequiredAttributesFromAttributeCombination(and_not_ab, false, ret_or);
            expect(ret_or.size).toBe(0);

            const or_not_ab: AttributeCombination = {
                or: [
                    { not: { attribute: commonName["&id"] } },
                    { not: { attribute: streetAddress["&id"] } },
                ],
            };
            const ret_and = new Set<DotDelimitedOidString>();
            getRequiredAttributesFromAttributeCombination(or_not_ab, false, ret_and);
            expect(Array.from(ret_and).sort()).toEqual([cn_oid, street_oid].sort());
        });

        it("handles wide disjunctions accurately and applies depth safeguards conservatively", () => {
            const wide_disjoint_negated_and: AttributeCombination = {
                not: {
                    and: Array.from({ length: 150 }, (_, i) => ({
                        not: { attribute: ObjectIdentifier.fromParts([2, 999, i + 1]) },
                    })),
                },
            };
            const ret_wide_disjoint = new Set<DotDelimitedOidString>();
            getRequiredAttributesFromAttributeCombination(wide_disjoint_negated_and, true, ret_wide_disjoint);
            expect(ret_wide_disjoint.size).toBe(0);

            const wide_shared_or: AttributeCombination = {
                or: Array.from({ length: 150 }, (_, i) => ({
                    and: [
                        { attribute: commonName["&id"] },
                        { attribute: ObjectIdentifier.fromParts([2, 999, i + 1]) },
                    ],
                })),
            };
            const ret_wide_shared = new Set<DotDelimitedOidString>();
            getRequiredAttributesFromAttributeCombination(wide_shared_or, true, ret_wide_shared);
            expect(Array.from(ret_wide_shared)).toEqual([cn_oid]);

            const empty_or: AttributeCombination = { or: [] };
            const ret_empty = new Set<DotDelimitedOidString>();
            getRequiredAttributesFromAttributeCombination(empty_or, true, ret_empty);
            expect(ret_empty.size).toBe(0);

            let deep: AttributeCombination = { attribute: commonName["&id"] };
            for (let i = 0; i < 120; i++) {
                deep = { not: deep };
            }
            const ret_deep = new Set<DotDelimitedOidString>();
            getRequiredAttributesFromAttributeCombination(deep, true, ret_deep);
            expect(ret_deep.size).toBe(0);
        });
    });
});