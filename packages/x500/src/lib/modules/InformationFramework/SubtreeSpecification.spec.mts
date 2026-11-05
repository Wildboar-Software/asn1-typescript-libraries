import { BERElement, ObjectIdentifier } from "@wildboar/asn1";
import { BER } from "@wildboar/asn1/functional";
import {
    asDITDescending,
    rdnSequenceToJSON,
    rdnSequenceToString,
    type RDNSequenceDescending,
} from "@wildboar/dn";
import {
    AttributeTypeAndValue,
    ChopSpecification,
    SubtreeSpecification,
    type AttributeType,
    type LocalName,
} from "@wildboar/x500/InformationFramework";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { organizationalUnitName } from "../SelectedAttributeTypes/organizationalUnitName.oa.mjs";
import type { EqualityMatcher } from "../../types/matching.mjs";
import { caseIgnoreMatch } from "../../matching/equality/caseIgnoreMatch.mjs";

const getEqualityMatcher = (_type: AttributeType): EqualityMatcher => caseIgnoreMatch;

const person = ObjectIdentifier.fromParts([ 2, 5, 6, 6 ]);
const top = ObjectIdentifier.fromParts([ 2, 5, 6, 0 ]);

function named (attribute: { "&id": AttributeType, encoderFor: { "&Type"?: Function } }, text: string) {
    const encode = attribute.encoderFor["&Type"];
    if (!encode) {
        throw new Error("missing attribute encoder");
    }
    return [
        new AttributeTypeAndValue(
            attribute["&id"],
            encode({ uTF8String: text }, BER),
        ),
    ];
}

function cn (text: string) {
    return named(commonName, text);
}

function ou (text: string) {
    return named(organizationalUnitName, text);
}

const people: LocalName = [ ou("people"), cn("admin") ];

describe("SubtreeSpecification.toString()", () => {
    it("prints an empty specification as {}", () => {
        expect(new SubtreeSpecification().toString()).toBe("{}");
        expect(new SubtreeSpecification([], undefined, 0).toString()).toBe("{}");
        expect(new SubtreeSpecification(undefined, []).toString()).toBe("{}");
    });

    it("prints a local name in X.500 order, superior first", () => {
        const spec = new SubtreeSpecification(people, undefined, 2);
        expect(spec.toString()).toBe('{ base "ou=people,cn=admin", minimum 2 }');
    });

    it("doubles a quotation mark inside the LDAP DN", () => {
        const spec = new SubtreeSpecification([ cn('a"b') ]);
        expect(spec.toString()).toBe('{ base "cn=a\\""b" }');
    });

    it("prints chops, bounds, and a nested refinement in definition order", () => {
        const spec = new SubtreeSpecification(
            people,
            [
                { chopBefore: [ cn("secret") ] },
                { chopAfter: [ cn("keep") ] },
            ],
            1,
            4,
            {
                and: [
                    { item: person },
                    { not: { item: top } },
                    { or: [ { item: person } ] },
                ],
            },
        );
        expect(spec.toString()).toBe(
            "{ base \"ou=people,cn=admin\","
            + " specificExclusions { chopBefore:\"cn=secret\", chopAfter:\"cn=keep\" },"
            + " minimum 1, maximum 4,"
            + " specificationFilter and:{ item:2.5.6.6, not:item:2.5.6.0, or:{ item:2.5.6.6 } } }",
        );
    });

    it("keeps maximum 0, which is not the absent default", () => {
        expect(new SubtreeSpecification(undefined, undefined, undefined, 0).toString())
            .toBe("{ maximum 0 }");
    });

    it("omits an unrecognized choice alternative", () => {
        const element = new BERElement();
        const spec = new SubtreeSpecification(
            undefined,
            [ element ],
            undefined,
            undefined,
            element,
        );
        expect(spec.toString()).toBe("{}");
    });

    it("prints the local name with rdnSequenceToString, without reversing it", () => {
        const spec = new SubtreeSpecification(people);
        expect(spec.toString()).toBe(`{ base "${rdnSequenceToString(people)}" }`);
    });
});

describe("SubtreeSpecification.toJSON()", () => {
    it("omits defaults and absent components", () => {
        expect(new SubtreeSpecification().toJSON()).toEqual({});
        expect(new SubtreeSpecification([], undefined, 0).toJSON()).toEqual({});
    });

    it("keeps local names in X.500 order", () => {
        // Encode the expected JSON from a separate RDN sequence so a
        // later BER write cannot clobber the bytes this assertion reads.
        const expected = {
            base: rdnSequenceToJSON([ ou("people"), cn("admin") ]),
            specificExclusions: [
                { chopBefore: rdnSequenceToJSON([ cn("secret") ]) },
            ],
            minimum: 1,
            maximum: 4,
            specificationFilter: {
                or: [
                    { item: "2.5.6.6" },
                    { not: { item: "2.5.6.0" } },
                ],
            },
        };
        const spec = new SubtreeSpecification(
            [ ou("people"), cn("admin") ],
            [ { chopBefore: [ cn("secret") ] } ],
            1,
            4,
            { or: [ { item: person }, { not: { item: top } } ] },
        );
        expect(spec.toJSON()).toEqual(expected);
        expect(spec.toJSON().base?.[0]?.[0]?.type).toBe("2.5.4.11");
        expect(spec.toJSON().base?.[1]?.[0]?.type).toBe("2.5.4.3");
    });

    it("encodes a bigint minimum that is not a JSON-safe number as a string", () => {
        const huge = 2n ** 80n;
        expect(new SubtreeSpecification(undefined, undefined, huge).toJSON())
            .toEqual({ minimum: huge.toString() });
    });

    it("encodes an unrecognized specific exclusion as an empty object", () => {
        const element = new BERElement();
        const spec = new SubtreeSpecification(
            undefined,
            [ element, { chopBefore: [ cn("secret") ] } ],
            undefined,
            undefined,
            element,
        );
        expect(spec.toJSON()).toEqual({
            specificExclusions: [
                {},
                { chopBefore: rdnSequenceToJSON([ cn("secret") ]) },
            ],
        });
    });
});

describe("SubtreeSpecification.intersection()", () => {
    const root1: RDNSequenceDescending = asDITDescending([ cn("root1") ]);
    const root2: RDNSequenceDescending = asDITDescending([ cn("root2") ]);

    it("returns the overlap of two compatible specifications", () => {
        const below = new SubtreeSpecification(undefined, undefined, 1);
        const above = new SubtreeSpecification(undefined, undefined, undefined, 1);
        const result = below.intersection(above, getEqualityMatcher);
        expect(result).not.toBeNull();
        const [ subtree, root ] = result!;
        expect(root).toHaveLength(0);
        expect(subtree.base).toBeUndefined();
        expect(subtree.minimum ?? 0).toBe(1);
        expect(subtree.maximum).toBe(1);
    });

    it("returns null when the vertical bounds do not overlap", () => {
        const deep = new SubtreeSpecification(undefined, undefined, 2);
        const shallow = new SubtreeSpecification(undefined, undefined, undefined, 1);
        expect(deep.intersection(shallow, getEqualityMatcher)).toBeNull();
    });

    it("returns null when the context prefixes do not overlap", () => {
        const open = new SubtreeSpecification();
        expect(open.intersection(open, getEqualityMatcher, root1, root2)).toBeNull();
    });
});

describe("SubtreeSpecification.isEmpty()", () => {
    it("treats {} and default base/minimum as empty", () => {
        expect(new SubtreeSpecification().isEmpty()).toBe(true);
        expect(new SubtreeSpecification([]).isEmpty()).toBe(true);
        expect(new SubtreeSpecification([], undefined, 0).isEmpty()).toBe(true);
        expect(new SubtreeSpecification(people).isEmpty()).toBe(false);
        expect(new SubtreeSpecification([], undefined, 1).isEmpty()).toBe(false);
        expect(new SubtreeSpecification(undefined, undefined, undefined, 2).isEmpty())
            .toBe(false);
    });
});

describe("ChopSpecification.isEmpty()", () => {
    it("is true when the chop does not restrict", () => {
        expect(new ChopSpecification().isEmpty()).toBe(true);
        expect(new ChopSpecification(undefined, 0n).isEmpty()).toBe(true);
        expect(new ChopSpecification(undefined, 1).isEmpty()).toBe(false);
        expect(new ChopSpecification(undefined, undefined, 3).isEmpty()).toBe(false);
    });
});
