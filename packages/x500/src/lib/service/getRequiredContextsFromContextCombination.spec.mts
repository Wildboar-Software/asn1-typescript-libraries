import type { DotDelimitedOidString } from "@wildboar/asn1";
import { ObjectIdentifier } from "@wildboar/asn1";
import type { ContextCombination } from "@wildboar/x500/ServiceAdministration";
import { getRequiredContextsFromContextCombination } from "./getRequiredContextsFromContextCombination.mjs";
import {
    languageContext,
    localeContext,
} from "@wildboar/x500/SelectedAttributeTypes";

describe("getRequiredContextsFromContextCombination", () => {
    const lang_oid = languageContext["&id"].toString();
    const locale_oid = localeContext["&id"].toString();

    it("should return the required contexts in the simplest case", () => {
        const combo: ContextCombination = {
            context: languageContext["&id"],
        };
        const ret = new Set<DotDelimitedOidString>();
        getRequiredContextsFromContextCombination(combo, true, ret);
        expect(ret.size).toBe(1);
        expect(ret.has(lang_oid)).toBe(true);
    });

    it("should correctly evaluate a more complex combination", () => {
        // Basically "use localeContext or languageContext, but not both."
        const combo: ContextCombination = {
            or: [
                {
                    and: [
                        {
                            context: languageContext["&id"],
                        },
                        {
                            not: {
                                context: localeContext["&id"],
                            },
                        },
                    ],
                },
                {
                    and: [
                        {
                            context: localeContext["&id"],
                        },
                        {
                            not: {
                                context: languageContext["&id"],
                            },
                        },
                    ],
                },
            ],
        };
        // There should be no required contexts, because not all
        // subfilters require the same context.
        const ret = new Set<DotDelimitedOidString>();
        getRequiredContextsFromContextCombination(combo, true, ret);
        expect(ret.size).toBe(0);
    });

    describe("De Morgan's rules under negation", () => {
        it("does not report alternatives as mandatory for NOT(AND(NOT A, NOT B))", () => {
            // NOT(AND(NOT A, NOT B)) === A OR B -> neither is unconditionally required.
            const combo: ContextCombination = {
                not: {
                    and: [
                        { not: { context: languageContext["&id"] } },
                        { not: { context: localeContext["&id"] } },
                    ],
                },
            };
            const ret = new Set<DotDelimitedOidString>();
            getRequiredContextsFromContextCombination(combo, true, ret);
            expect(ret.size).toBe(0);
        });

        it("reports both operands as mandatory for NOT(OR(NOT A, NOT B))", () => {
            // NOT(OR(NOT A, NOT B)) === A AND B -> both are unconditionally required.
            const combo: ContextCombination = {
                not: {
                    or: [
                        { not: { context: languageContext["&id"] } },
                        { not: { context: localeContext["&id"] } },
                    ],
                },
            };
            const ret = new Set<DotDelimitedOidString>();
            getRequiredContextsFromContextCombination(combo, true, ret);
            expect(Array.from(ret).sort()).toEqual([lang_oid, locale_oid].sort());
        });

        it("extracts shared mandatory contexts across negated AND branches", () => {
            // NOT(AND(NOT A, NOT(AND(A, B)))) === A OR (A AND B) === A.
            const combo: ContextCombination = {
                not: {
                    and: [
                        { not: { context: languageContext["&id"] } },
                        {
                            not: {
                                and: [
                                    { context: languageContext["&id"] },
                                    { context: localeContext["&id"] },
                                ],
                            },
                        },
                    ],
                },
            };
            const ret = new Set<DotDelimitedOidString>();
            getRequiredContextsFromContextCombination(combo, true, ret);
            expect(Array.from(ret)).toEqual([lang_oid]);
        });

        it("extracts only positively required contexts from NOT(OR(NOT A, B))", () => {
            // NOT(OR(NOT A, B)) === A AND NOT B -> only A is required.
            const combo: ContextCombination = {
                not: {
                    or: [
                        { not: { context: languageContext["&id"] } },
                        { context: localeContext["&id"] },
                    ],
                },
            };
            const ret = new Set<DotDelimitedOidString>();
            getRequiredContextsFromContextCombination(combo, true, ret);
            expect(Array.from(ret)).toEqual([lang_oid]);
        });

        it("handles NOT(AND(A, B)) without requiring A or B", () => {
            // NOT(AND(A, B)) === NOT A OR NOT B -> no context is required.
            const combo: ContextCombination = {
                not: {
                    and: [
                        { context: languageContext["&id"] },
                        { context: localeContext["&id"] },
                    ],
                },
            };
            const ret = new Set<DotDelimitedOidString>();
            getRequiredContextsFromContextCombination(combo, true, ret);
            expect(ret.size).toBe(0);
        });

        it("handles double negation NOT(NOT(A))", () => {
            const combo: ContextCombination = {
                not: {
                    not: { context: languageContext["&id"] },
                },
            };
            const ret = new Set<DotDelimitedOidString>();
            getRequiredContextsFromContextCombination(combo, true, ret);
            expect(Array.from(ret)).toEqual([lang_oid]);
        });

        it("handles direct invocation with non_negated=false", () => {
            const and_not_ab: ContextCombination = {
                and: [
                    { not: { context: languageContext["&id"] } },
                    { not: { context: localeContext["&id"] } },
                ],
            };
            const ret_or = new Set<DotDelimitedOidString>();
            getRequiredContextsFromContextCombination(and_not_ab, false, ret_or);
            expect(ret_or.size).toBe(0);

            const or_not_ab: ContextCombination = {
                or: [
                    { not: { context: languageContext["&id"] } },
                    { not: { context: localeContext["&id"] } },
                ],
            };
            const ret_and = new Set<DotDelimitedOidString>();
            getRequiredContextsFromContextCombination(or_not_ab, false, ret_and);
            expect(Array.from(ret_and).sort()).toEqual([lang_oid, locale_oid].sort());
        });

        it("applies width and depth safeguards conservatively on negated combinations", () => {
            const wide_negated_and: ContextCombination = {
                not: {
                    and: Array.from({ length: 101 }, (_, i) => ({
                        not: { context: ObjectIdentifier.fromParts([2, 999, i + 1]) },
                    })),
                },
            };
            const ret_wide = new Set<DotDelimitedOidString>();
            getRequiredContextsFromContextCombination(wide_negated_and, true, ret_wide);
            expect(ret_wide.size).toBe(0);

            let deep: ContextCombination = { context: languageContext["&id"] };
            for (let i = 0; i < 120; i++) {
                deep = { not: deep };
            }
            const ret_deep = new Set<DotDelimitedOidString>();
            getRequiredContextsFromContextCombination(deep, true, ret_deep);
            expect(ret_deep.size).toBe(0);
        });
    });
});