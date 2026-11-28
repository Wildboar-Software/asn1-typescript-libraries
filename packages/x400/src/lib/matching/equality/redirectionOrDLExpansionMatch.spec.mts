import { DERElement, ObjectIdentifier } from "@wildboar/asn1";
import { DER } from "@wildboar/asn1/functional";
import { AttributeTypeAndValue as DNAtav, type Name } from "@wildboar/dn";
import { MATCH_FLAG_USED_FOR_NAME } from "@wildboar/x500";
import { Attribute, AttributeTypeAndValue } from "@wildboar/x500/InformationFramework";
import {
    BuiltInStandardAttributes,
    DLExpansion,
    IntendedRecipientName,
    ORName,
    Redirection,
    RedirectionReason_alias,
    RedirectionReason_directory_look_up,
    RedirectionReason_recipient_assigned_alternate_recipient,
    _encode_DLExpansion,
    _encode_DLExpansionHistory,
    _encode_ORName,
    _encode_Redirection,
    _encode_RedirectionHistory,
    _encode_RedirectionReason,
} from "@wildboar/x400/MTSAbstractService";
import { _encode_MSString } from "@wildboar/x400/MSMatchingRules";
import redirectionOrDLExpansionMatch from "./redirectionOrDLExpansionMatch.mjs";
import redirectionOrDLExpansionElementsMatch from "./redirectionOrDLExpansionElementsMatch.mjs";
import redirectionOrDLExpansionSubstringElementsMatch from "./redirectionOrDLExpansionSubstringElementsMatch.mjs";
import redirectionOrDLExpansionSingleElementMatch from "./redirectionOrDLExpansionSingleElementMatch.mjs";
import redirectionReasonMatch from "./redirectionReasonMatch.mjs";

const id_att_dl_expansion_history = ObjectIdentifier.fromString("2.6.4.3.28");
const id_att_redirection_history = ObjectIdentifier.fromString("2.6.4.3.68");
const id_at_commonName = ObjectIdentifier.fromString("2.5.4.3");
const now = new Date("2026-01-01T12:00:00Z");

function cnName(cn: string): Name {
    const val = new DERElement();
    val.printableString = cn;
    return {
        rdnSequence: [[new DNAtav(id_at_commonName, val)]],
    };
}

function makeORName(opts: { country?: string; org?: string; dn?: Name }): ORName {
    return new ORName(
        new BuiltInStandardAttributes(
            opts.country ? { iso_3166_alpha2_code: opts.country } : undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            opts.org,
        ),
        undefined,
        undefined,
        opts.dn,
    );
}

describe("redirectionOrDLExpansion* and redirectionReasonMatch", () => {
    const dlListA = makeORName({ country: "US", org: "Engineering DL", dn: cnName("eng-dl") });
    const dlListB = makeORName({ country: "GB", org: "Sales DL" });
    const redirTarget = makeORName({ country: "DE", org: "Berlin Office", dn: cnName("berlin") });

    const singleDLExpansionA = _encode_DLExpansion(new DLExpansion(dlListA, now), DER);
    const singleDLExpansionB = _encode_DLExpansion(new DLExpansion(dlListB, now), DER);
    const singleRedirection = _encode_Redirection(
        new Redirection(
            new IntendedRecipientName(redirTarget, now),
            RedirectionReason_alias,
        ),
        DER,
    );

    test("matches multi-valued mt-dl-expansion-history Attribute containing single DLExpansion values", () => {
        const attr = new Attribute(id_att_dl_expansion_history, [
            singleDLExpansionB,
            singleDLExpansionA,
        ]);

        expect(
            redirectionOrDLExpansionMatch(
                _encode_ORName(makeORName({ country: "US", org: "Engineering DL" }), DER),
                attr,
            ),
        ).toBe(true);
        // Preserves directory-name on DLExpansion.dl (previously lost when stripping outer ORName)
        expect(
            redirectionOrDLExpansionMatch(
                _encode_ORName(makeORName({ dn: cnName("eng-dl") }), DER),
                attr,
            ),
        ).toBe(true);
        expect(
            redirectionOrDLExpansionElementsMatch(
                _encode_ORName(makeORName({ country: "US" }), DER),
                attr,
            ),
        ).toBe(true);
        expect(
            redirectionOrDLExpansionSubstringElementsMatch(
                _encode_ORName(makeORName({ org: "engineer" }), DER),
                attr,
            ),
        ).toBe(true);
        expect(
            redirectionOrDLExpansionSingleElementMatch(
                _encode_MSString({ printable: "sales dl" }, DER),
                attr,
            ),
        ).toBe(true);
        expect(
            redirectionOrDLExpansionMatch(
                _encode_ORName(makeORName({ country: "FR" }), DER),
                attr,
            ),
        ).toBe(false);
    });

    test("matches single Redirection values in mt-redirection-history for all four ORName rules and redirectionReasonMatch", () => {
        const storedRedir = new AttributeTypeAndValue(id_att_redirection_history, singleRedirection);

        expect(
            redirectionOrDLExpansionMatch(
                _encode_ORName(makeORName({ dn: cnName("berlin") }), DER),
                storedRedir,
            ),
        ).toBe(true);
        expect(
            redirectionOrDLExpansionElementsMatch(
                _encode_ORName(makeORName({ country: "DE" }), DER),
                storedRedir,
            ),
        ).toBe(true);
        expect(
            redirectionOrDLExpansionSubstringElementsMatch(
                _encode_ORName(makeORName({ org: "berlin" }), DER),
                storedRedir,
            ),
        ).toBe(true);
        expect(
            redirectionOrDLExpansionSingleElementMatch(
                _encode_MSString({ printable: "berlin office" }, DER),
                storedRedir,
            ),
        ).toBe(true);

        expect(
            redirectionReasonMatch(
                _encode_RedirectionReason(RedirectionReason_alias, DER),
                storedRedir,
            ),
        ).toBe(true);
        expect(
            redirectionReasonMatch(
                _encode_RedirectionReason(RedirectionReason_directory_look_up, DER),
                storedRedir,
            ),
        ).toBe(false);
    });

    test("also supports DLExpansionHistory and RedirectionHistory SEQUENCE OF values", () => {
        const dlHistory = _encode_DLExpansionHistory(
            [new DLExpansion(dlListB, now), new DLExpansion(dlListA, now)],
            DER,
        );
        const redirHistory = _encode_RedirectionHistory(
            [
                new Redirection(
                    new IntendedRecipientName(dlListB, now),
                    RedirectionReason_recipient_assigned_alternate_recipient,
                ),
                new Redirection(
                    new IntendedRecipientName(redirTarget, now),
                    RedirectionReason_alias,
                ),
            ],
            DER,
        );

        expect(
            redirectionOrDLExpansionSubstringElementsMatch(
                _encode_ORName(makeORName({ org: "engineer" }), DER),
                new AttributeTypeAndValue(id_att_dl_expansion_history, dlHistory),
            ),
        ).toBe(true);
        expect(
            redirectionOrDLExpansionSubstringElementsMatch(
                _encode_ORName(makeORName({ org: "berlin" }), DER),
                new AttributeTypeAndValue(id_att_redirection_history, redirHistory),
            ),
        ).toBe(true);
        expect(
            redirectionReasonMatch(
                _encode_RedirectionReason(RedirectionReason_alias, DER),
                new AttributeTypeAndValue(id_att_redirection_history, redirHistory),
            ),
        ).toBe(true);
    });

    test("returns undefined on malformed stored values, throws on empty assertions, and refuses name matching", () => {
        const malformedSeq = DERElement.fromSequence([]);
        const malformedPrim = new DERElement();
        malformedPrim.boolean = true;
        const assertedORName = _encode_ORName(makeORName({ country: "US" }), DER);
        const emptyORName = _encode_ORName(makeORName({}), DER);

        expect(
            redirectionOrDLExpansionMatch(
                assertedORName,
                new AttributeTypeAndValue(id_att_dl_expansion_history, malformedSeq),
            ),
        ).toBeUndefined();
        expect(
            redirectionOrDLExpansionMatch(
                assertedORName,
                new AttributeTypeAndValue(id_att_dl_expansion_history, malformedPrim),
            ),
        ).toBeUndefined();
        expect(
            redirectionReasonMatch(
                _encode_RedirectionReason(RedirectionReason_alias, DER),
                new AttributeTypeAndValue(id_att_redirection_history, malformedSeq),
            ),
        ).toBeUndefined();

        for (const matcher of [
            redirectionOrDLExpansionMatch,
            redirectionOrDLExpansionElementsMatch,
            redirectionOrDLExpansionSubstringElementsMatch,
        ]) {
            expect(() =>
                matcher(
                    emptyORName,
                    new AttributeTypeAndValue(id_att_dl_expansion_history, singleDLExpansionA),
                ),
            ).toThrow();
            expect(
                matcher(
                    assertedORName,
                    new AttributeTypeAndValue(id_att_dl_expansion_history, singleDLExpansionA),
                    undefined,
                    MATCH_FLAG_USED_FOR_NAME,
                ),
            ).toBeUndefined();
        }
    });
});
