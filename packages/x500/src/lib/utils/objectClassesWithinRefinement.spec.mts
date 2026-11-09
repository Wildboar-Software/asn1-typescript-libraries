import { DERElement, ObjectIdentifier } from "@wildboar/asn1";
import type { Refinement } from "../modules/InformationFramework/Refinement.ta.mjs";
import { objectClassesWithinRefinement } from "./objectClassesWithinRefinement.mjs";

const present = ObjectIdentifier.fromString("2.5.6.6");
const absent = ObjectIdentifier.fromString("2.5.6.7");
const classes = [present];
const trueRefinement: Refinement = { item: present };
const falseRefinement: Refinement = { item: absent };

function nestedNot(depth: number): Refinement {
    let refinement: Refinement = trueRefinement;
    for (let i = 0; i < depth; i++) {
        refinement = { not: refinement };
    }
    return refinement;
}

describe("bounded object-class refinements (M5)", () => {
    it("preserves ordinary item, AND, OR, and NOT matching", () => {
        expect(objectClassesWithinRefinement(classes, trueRefinement)).toBe(true);
        expect(objectClassesWithinRefinement(classes, falseRefinement)).toBe(false);
        expect(objectClassesWithinRefinement(classes, { not: falseRefinement })).toBe(true);
        expect(objectClassesWithinRefinement(classes, { not: trueRefinement })).toBe(false);
        expect(objectClassesWithinRefinement(classes, { and: [trueRefinement, falseRefinement] })).toBe(false);
        expect(objectClassesWithinRefinement(classes, { or: [falseRefinement, trueRefinement] })).toBe(true);
    });

    it("does not turn an exhausted child into a match under NOT", () => {
        expect(objectClassesWithinRefinement(classes, { not: trueRefinement }, 1)).toBeUndefined();
        expect(objectClassesWithinRefinement(classes, { not: falseRefinement }, 1)).toBeUndefined();
        expect(objectClassesWithinRefinement(classes, { not: falseRefinement }, 2)).toBe(true);
        expect(objectClassesWithinRefinement(classes, nestedNot(20))).toBeUndefined();
        expect(objectClassesWithinRefinement(classes, nestedNot(21))).toBeUndefined();
    });

    it.each(["and", "or"] as const)("preserves exhaustion through %s before negation", (kind) => {
        // At depth three, the inner NOT reaches its leaf with no budget left.
        const exhausted: Refinement = { not: trueRefinement };
        const ordinary = kind === "and" ? trueRefinement : falseRefinement;
        for (const children of [[exhausted, ordinary], [ordinary, exhausted]]) {
            const group: Refinement = kind === "and" ? { and: children } : { or: children };
            expect(objectClassesWithinRefinement(classes, group, 2)).toBeUndefined();
            expect(objectClassesWithinRefinement(classes, { not: group }, 3)).toBeUndefined();
        }
    });

    it("allows a decisive sibling to determine a refinement despite an unknown child", () => {
        const exhausted: Refinement = { not: trueRefinement };
        for (const reversed of [false, true]) {
            const children = (other: Refinement): Refinement[] => reversed ? [other, exhausted] : [exhausted, other];
            expect(objectClassesWithinRefinement(classes, { and: children(falseRefinement) }, 2)).toBe(false);
            expect(objectClassesWithinRefinement(classes, { or: children(trueRefinement) }, 2)).toBe(true);
            expect(objectClassesWithinRefinement(classes, { not: { and: children(falseRefinement) } }, 3)).toBe(true);
        }
    });

    it("does not negate an unsupported refinement into a match", () => {
        const unsupported = new DERElement();
        expect(objectClassesWithinRefinement(classes, unsupported)).toBeUndefined();
        expect(objectClassesWithinRefinement(classes, { not: unsupported })).toBeUndefined();
    });

    it.each([0, -1, NaN, Infinity, -Infinity])("returns UNDEFINED for an unusable budget %s", (budget) => {
        expect(objectClassesWithinRefinement(classes, trueRefinement, budget)).toBeUndefined();
        expect(objectClassesWithinRefinement(classes, { not: falseRefinement }, budget)).toBeUndefined();
    });

    it("caps caller-supplied budgets for deeply nested and cyclic decoded refinements", () => {
        expect(objectClassesWithinRefinement(classes, nestedNot(10_001), 1_000_000)).toBeUndefined();
        const cyclic: { not: Refinement } = { not: trueRefinement };
        cyclic.not = cyclic;
        expect(objectClassesWithinRefinement(classes, cyclic, 1_000_000)).toBeUndefined();
    });

    it("preserves the complete three-valued AND, OR, and NOT truth tables", () => {
        const refinements: Refinement[] = [trueRefinement, falseRefinement, new DERElement()];
        const truth = [true, false, undefined];
        for (let a = 0; a < refinements.length; a++) {
            expect(objectClassesWithinRefinement(classes, { not: refinements[a] })).toBe(
                truth[a] === undefined ? undefined : !truth[a],
            );
            for (let b = 0; b < refinements.length; b++) {
                const and = truth[a] === false || truth[b] === false
                    ? false : truth[a] === undefined || truth[b] === undefined ? undefined : true;
                const or = truth[a] === true || truth[b] === true
                    ? true : truth[a] === undefined || truth[b] === undefined ? undefined : false;
                expect(objectClassesWithinRefinement(classes, { and: [refinements[a], refinements[b]] })).toBe(and);
                expect(objectClassesWithinRefinement(classes, { or: [refinements[a], refinements[b]] })).toBe(or);
            }
        }
    });
});
