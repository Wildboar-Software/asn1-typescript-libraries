import { ObjectIdentifier } from "@wildboar/asn1";
import type { Filter } from "@wildboar/x500/DirectoryAbstractService";
import { normalizeFilter } from "./normalizeFilter.mjs";

// Presence items stand in for the leaves in the LDAP normalizeFilter spec.
const typeX = ObjectIdentifier.fromString("1.2.3.1");
const typeY = ObjectIdentifier.fromString("1.2.3.2");
const typeZ = ObjectIdentifier.fromString("1.2.3.3");
const typeP = ObjectIdentifier.fromString("1.2.3.4");
const typeQ = ObjectIdentifier.fromString("1.2.3.5");

function present (type: ObjectIdentifier): Filter {
    return {
        item: {
            present: type,
        },
    };
}

function isPresent (filter: Filter, type: ObjectIdentifier): boolean {
    return ("item" in filter)
        && ("present" in filter.item)
        && filter.item.present.isEqualTo(type);
}

describe("normalizeFilter()", () => {

    it("not{and{x,y,z}} is the same as or{not{x}, not{y}, not{z}}", () => {
        const filter: Filter = {
            not: {
                and: [
                    present(typeX),
                    present(typeY),
                    present(typeZ),
                ],
            },
        };
        const normed = normalizeFilter(filter);
        expect("or" in normed).toBeTruthy();
        if (!("or" in normed)) {
            return;
        }
        expect(normed.or.length).toBe(3);
        expect(normed.or.every((sub) => ("not" in sub))).toBeTruthy();
        if (!("not" in normed.or[0]) || !("not" in normed.or[1]) || !("not" in normed.or[2])) {
            return;
        }
        expect(isPresent(normed.or[0].not, typeX)).toBeTruthy();
        expect(isPresent(normed.or[1].not, typeY)).toBeTruthy();
        expect(isPresent(normed.or[2].not, typeZ)).toBeTruthy();
    });

    it("not{or{x,y,z}} is the same as and{not{x}, not{y}, not{z}}", () => {
        const filter: Filter = {
            not: {
                or: [
                    present(typeX),
                    present(typeY),
                    present(typeZ),
                ],
            },
        };
        const normed = normalizeFilter(filter);
        expect("and" in normed).toBeTruthy();
        if (!("and" in normed)) {
            return;
        }
        expect(normed.and.every((sub) => ("not" in sub))).toBeTruthy();
        if (!("not" in normed.and[0]) || !("not" in normed.and[1]) || !("not" in normed.and[2])) {
            return;
        }
        expect(isPresent(normed.and[0].not, typeX)).toBeTruthy();
        expect(isPresent(normed.and[1].not, typeY)).toBeTruthy();
        expect(isPresent(normed.and[2].not, typeZ)).toBeTruthy();
    });

    it("not{not{x}} is the same as x", () => {
        const filter: Filter = {
            not: {
                not: present(typeX),
            },
        };
        const normed = normalizeFilter(filter);
        expect(isPresent(normed, typeX)).toBeTruthy();
    });

    it("and{and{x,y,z}, p, q} is the same as and{x,y,z,p,q}", () => {
        const filter: Filter = {
            and: [
                {
                    and: [
                        present(typeX),
                        present(typeY),
                        present(typeZ),
                    ],
                },
                present(typeP),
                present(typeQ),
            ],
        };
        const normed = normalizeFilter(filter);
        expect("and" in normed).toBeTruthy();
        if (!("and" in normed)) {
            return;
        }
        expect(normed.and.length).toBe(5);
        expect(normed.and.every((sub) => ("item" in sub) && ("present" in sub.item))).toBeTruthy();
    });

    it("or{or{x,y,z}, p, q} is the same as or{x,y,z,p,q}", () => {
        const filter: Filter = {
            or: [
                {
                    or: [
                        present(typeX),
                        present(typeY),
                        present(typeZ),
                    ],
                },
                present(typeP),
                present(typeQ),
            ],
        };
        const normed = normalizeFilter(filter);
        expect("or" in normed).toBeTruthy();
        if (!("or" in normed)) {
            return;
        }
        expect(normed.or.length).toBe(5);
        expect(normed.or.every((sub) => ("item" in sub) && ("present" in sub.item))).toBeTruthy();
    });

    // This test is skipped because this dangerous expansion is not done at all anymore.
    it.skip("and{or{x,y,z}, p, q} is the same as or{and{x,p,q}, and{y,p,q}, and{z,p,q}}", () => {
        const filter: Filter = {
            and: [
                {
                    or: [
                        present(typeX),
                        present(typeY),
                        present(typeZ),
                    ],
                },
                present(typeP),
                present(typeQ),
            ],
        };
        const normed = normalizeFilter(filter);
        expect("or" in normed).toBeTruthy();
        if (!("or" in normed)) {
            return;
        }
        expect(normed.or.length).toBe(3);
        expect(normed.or.every((sub) => ("and" in sub))).toBeTruthy();
        if (!("and" in normed.or[0]) || !("and" in normed.or[1]) || !("and" in normed.or[2])) {
            return;
        }
        const orand0 = normed.or[0].and;
        const orand1 = normed.or[1].and;
        const orand2 = normed.or[2].and;
        expect(orand0.length).toBe(3);
        expect(orand1.length).toBe(3);
        expect(orand2.length).toBe(3);
        // The ordering does not matter here, we just have to check that these elements are present in each subset.
        expect(isPresent(orand0[0], typeX)).toBeTruthy();
        expect(isPresent(orand0[1], typeP)).toBeTruthy();
        expect(isPresent(orand0[2], typeQ)).toBeTruthy();
        expect(isPresent(orand1[0], typeY)).toBeTruthy();
        expect(isPresent(orand1[1], typeP)).toBeTruthy();
        expect(isPresent(orand1[2], typeQ)).toBeTruthy();
        expect(isPresent(orand2[0], typeZ)).toBeTruthy();
        expect(isPresent(orand2[1], typeP)).toBeTruthy();
        expect(isPresent(orand2[2], typeQ)).toBeTruthy();
    });

    it("and{and{},x,y,z} is the same as and{x,y,z}", () => {
        const filter: Filter = {
            and: [
                {
                    and: [],
                },
                present(typeX),
                present(typeY),
                present(typeZ),
            ],
        };
        const normed = normalizeFilter(filter);
        expect("and" in normed).toBeTruthy();
        if (!("and" in normed)) {
            return;
        }
        expect(normed.and.length).toBe(3);
        expect(normed.and.every((sub) => ("item" in sub) && ("present" in sub.item))).toBeTruthy();
    });

    it("and{} is TRUE, so that or{and{},x,y,z} is always TRUE", () => {
        const filter: Filter = {
            or: [
                {
                    and: [],
                },
                present(typeX),
                present(typeY),
                present(typeZ),
            ],
        };
        const normed = normalizeFilter(filter);
        expect("and" in normed).toBeTruthy();
        if (!("and" in normed)) {
            return;
        }
        expect(normed.and.length).toBe(0);
    });

    it("or{or{},x,y,z} is the same as or{x,y,z}", () => {
        const filter: Filter = {
            or: [
                {
                    or: [],
                },
                present(typeX),
                present(typeY),
                present(typeZ),
            ],
        };
        const normed = normalizeFilter(filter);
        expect("or" in normed).toBeTruthy();
        if (!("or" in normed)) {
            return;
        }
        expect(normed.or.length).toBe(3);
    });

    it("or{} is FALSE, so that and{or{},x,y,z} is always FALSE", () => {
        const filter: Filter = {
            and: [
                {
                    or: [],
                },
                present(typeX),
                present(typeY),
                present(typeZ),
            ],
        };
        const normed = normalizeFilter(filter);
        expect("or" in normed).toBeTruthy();
        if (!("or" in normed)) {
            return;
        }
        expect(normed.or.length).toBe(0);
    });

    it("handles excessively deep recursion gracefully", () => {
        let filter: Filter = present(typeX);
        let i = 0;
        while (i < 10000) {
            filter = { or: [ filter ] };
            i++;
        }
        const normed = normalizeFilter(filter);
        expect("or" in normed).toBeTruthy();
        if (!("or" in normed)) {
            return;
        }
        expect(normed.or.length).toBe(1);
    });

    // This tests this problematic production:
    // "and { or {x,y,z}, p, q} is the same as or { and {x,p,q}, and {y,p,q}, and {z,p,q} }"
    it("handles excessive expansion recursion gracefully", () => {
        let filter = {
            and: [
                {
                    or: [] as Filter[],
                },
                {
                    or: [] as Filter[],
                },
                {
                    or: [] as Filter[],
                },
                {
                    or: [] as Filter[],
                },
                {
                    or: [] as Filter[],
                },
            ],
        };
        const items: Filter[] = [
            present(typeX),
            present(typeX),
            present(typeX),
            present(typeX),
            present(typeX),
            present(typeX),
            present(typeX),
            present(typeX),
            present(typeX),
            present(typeX),
        ];
        filter.and[0].or.push(...items.slice(0, 3));
        filter.and[1].or.push(...items.slice(0, 5));
        filter.and[2].or.push(...items.slice(0, 7));
        filter.and[3].or.push(...items);
        filter.and[4].or.push(...items);
        const normed = normalizeFilter(filter);
        expect("and" in normed).toBeTruthy();
    });
});
