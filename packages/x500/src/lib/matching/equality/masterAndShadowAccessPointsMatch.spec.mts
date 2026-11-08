import { DER, _encodeSetOf } from "@wildboar/asn1/functional";
import { PresentationAddress } from "@wildboar/presentation-address";
import {
    AttributeTypeAndValue,
} from "../../modules/InformationFramework/AttributeTypeAndValue.ta.mjs";
import {
    type Name,
    _encode_Name,
} from "../../modules/InformationFramework/Name.ta.mjs";
import {
    MasterOrShadowAccessPoint,
} from "../../modules/DistributedOperations/MasterOrShadowAccessPoint.ta.mjs";
import {
    _enum_for_MasterOrShadowAccessPoint_category,
} from "../../modules/DistributedOperations/MasterOrShadowAccessPoint-category.ta.mjs";
import {
    _encode_MasterAndShadowAccessPoints,
} from "../../modules/DistributedOperations/MasterAndShadowAccessPoints.ta.mjs";
import { commonName } from "../../modules/SelectedAttributeTypes/commonName.oa.mjs";
import { countryName } from "../../modules/SelectedAttributeTypes/countryName.oa.mjs";
import { _encode_CountryName } from "../../modules/SelectedAttributeTypes/CountryName.ta.mjs";
import {
    MATCH_FLAG_CONSTANT_TIME,
    MATCH_FLAG_USED_FOR_NAME,
    type Matcher,
} from "../../types/matching.mjs";
import masterAndShadowAccessPointsMatch_, {
    masterAndShadowAccessPointsMatchTyped,
} from "./masterAndShadowAccessPointsMatch.mjs";
import { onStoredValue } from "./onStoredValue.spec.mjs";

const masterAndShadowAccessPointsMatch = onStoredValue(masterAndShadowAccessPointsMatch_);

const shadow = _enum_for_MasterOrShadowAccessPoint_category.shadow;

function cn (label: string): AttributeTypeAndValue {
    return new AttributeTypeAndValue(
        commonName["&id"],
        commonName.encoderFor["&Type"]!({ printableString: label }, DER),
    );
}

function country (label: string): AttributeTypeAndValue {
    return new AttributeTypeAndValue(
        countryName["&id"],
        _encode_CountryName(label, DER),
    );
}

function name (...rdns: AttributeTypeAndValue[][]): Name {
    return { rdnSequence: rdns };
}

function points (
    titles: Name[],
    category?: _enum_for_MasterOrShadowAccessPoint_category,
    addressByte: number = 1,
): MasterOrShadowAccessPoint[] {
    const address = new PresentationAddress(
        undefined,
        undefined,
        undefined,
        [ new Uint8Array([ addressByte ]) ],
    );
    return titles.map((aeTitle) => new MasterOrShadowAccessPoint(
        aeTitle,
        address,
        undefined,
        category,
        true,
    ));
}

const alice = name([ cn("Alice") ]);
const bob = name([ cn("Bob") ]);
const carol = name([ cn("Carol") ]);
const aliceFolded = name([ cn("alice") ]);

describe("masterAndShadowAccessPointsMatch", () => {
    it("matches one ae-title and ignores category and address", () => {
        expect(masterAndShadowAccessPointsMatchTyped(
            [ alice ],
            points([ alice ], shadow, 9),
        )).toBe(true);
        expect(masterAndShadowAccessPointsMatchTyped(
            [ alice ],
            points([ bob ]),
        )).toBe(false);
    });

    it("matches ae-titles independent of element order", () => {
        const asserted = [ alice, bob, carol ];
        const stored = points([ carol, alice, bob ]);
        expect(masterAndShadowAccessPointsMatchTyped(asserted, stored)).toBe(true);
        expect(masterAndShadowAccessPointsMatchTyped(
            asserted,
            stored,
            undefined,
            MATCH_FLAG_CONSTANT_TIME,
        )).toBe(true);
    });

    it("treats duplicate ae-titles as a multiset", () => {
        expect(masterAndShadowAccessPointsMatchTyped(
            [ alice, alice ],
            points([ alice, alice ]),
        )).toBe(true);
        expect(masterAndShadowAccessPointsMatchTyped(
            [ alice, alice ],
            points([ alice, bob ]),
        )).toBe(false);
        expect(masterAndShadowAccessPointsMatchTyped(
            [ alice, alice ],
            points([ alice, bob ]),
            undefined,
            MATCH_FLAG_CONSTANT_TIME,
        )).toBe(false);
    });

    it("rejects a different member or a different count", () => {
        expect(masterAndShadowAccessPointsMatchTyped(
            [ alice, bob ],
            points([ alice, carol ]),
        )).toBe(false);
        expect(masterAndShadowAccessPointsMatchTyped(
            [ alice, bob ],
            points([ alice ]),
        )).toBe(false);
        expect(masterAndShadowAccessPointsMatchTyped(
            [],
            points([]),
        )).toBe(true);
    });

    it("matches names that differ only by distinguished-name equality", () => {
        const folded = [ aliceFolded, bob ];
        const stored = points([ bob, alice ]);
        expect(masterAndShadowAccessPointsMatchTyped(folded, stored)).toBe(true);
        expect(masterAndShadowAccessPointsMatchTyped(
            folded,
            stored,
            undefined,
            MATCH_FLAG_CONSTANT_TIME,
        )).toBe(true);
    });

    it("ignores attribute order inside an RDN and keeps RDN sequence order", () => {
        const cnThenCountry = name([ cn("Alice"), country("US") ]);
        const countryThenCn = name([ country("US"), cn("Alice") ]);
        expect(masterAndShadowAccessPointsMatchTyped(
            [ cnThenCountry, bob ],
            points([ bob, countryThenCn ]),
        )).toBe(true);

        const twoLevel = name([ country("US") ], [ cn("Alice") ]);
        const reversedLevels = name([ cn("Alice") ], [ country("US") ]);
        expect(masterAndShadowAccessPointsMatchTyped(
            [ twoLevel ],
            points([ reversedLevels ]),
        )).toBe(false);
    });

    it("matches on nameToKey and ignores a supplied equality rule", () => {
        const matchAll: Matcher = () => true;
        expect(masterAndShadowAccessPointsMatchTyped(
            [ alice, bob ],
            points([ carol, aliceFolded ]),
            () => matchAll,
        )).toBe(false);
        expect(masterAndShadowAccessPointsMatchTyped(
            [ aliceFolded, bob ],
            points([ alice, bob ]),
            () => matchAll,
        )).toBe(true);
        expect(masterAndShadowAccessPointsMatchTyped(
            [ alice, bob ],
            points([ bob, alice ]),
            () => matchAll,
            MATCH_FLAG_CONSTANT_TIME,
        )).toBe(true);
    });

    it("does not change equality at the former constant-time work cap (M28)", () => {
        const withinCap = Array.from(
            { length: 31 },
            (_, i) => name([ cn(`n${i}`) ]),
        );
        const overCap = Array.from(
            { length: 32 },
            (_, i) => name([ cn(`n${i}`) ]),
        );
        expect(masterAndShadowAccessPointsMatchTyped(
            withinCap,
            points(withinCap),
            undefined,
            MATCH_FLAG_CONSTANT_TIME,
        )).toBe(true);
        expect(masterAndShadowAccessPointsMatchTyped(
            overCap,
            points(overCap),
            undefined,
            MATCH_FLAG_CONSTANT_TIME,
        )).toBe(true);
        expect(masterAndShadowAccessPointsMatchTyped(
            overCap,
            points(overCap),
        )).toBe(true);
    });

    it("compares larger reordered multisets and preserves duplicate counts (M28)", () => {
        const titles = Array.from({ length: 256 }, (_, i) => name([cn(`title-${i}`)]));
        for (const flags of [0, MATCH_FLAG_CONSTANT_TIME]) {
            expect(masterAndShadowAccessPointsMatchTyped(titles, points([...titles].reverse()), undefined, flags)).toBe(true);
            expect(masterAndShadowAccessPointsMatchTyped(titles, points([...titles.slice(1), titles[1]]), undefined, flags)).toBe(false);
        }
    });

    it("matches an encoded value and refuses name matching", () => {
        const assertion = _encodeSetOf<Name>(() => _encode_Name, DER)(
            [ bob, alice ],
            DER,
        );
        const stored = _encode_MasterAndShadowAccessPoints(
            points([ alice, bob ], shadow, 4),
            DER,
        );
        expect(masterAndShadowAccessPointsMatch(assertion, stored)).toBe(true);
        expect(masterAndShadowAccessPointsMatch(
            assertion,
            _encode_MasterAndShadowAccessPoints(points([ alice, carol ]), DER),
        )).toBe(false);
        expect(masterAndShadowAccessPointsMatch(
            assertion,
            stored,
            MATCH_FLAG_USED_FOR_NAME,
        )).toBeUndefined();
    });
});
