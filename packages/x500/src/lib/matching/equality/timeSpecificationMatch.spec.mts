import { ObjectIdentifier, TRUE_BIT } from "@wildboar/asn1";
import { DER } from "@wildboar/asn1/functional";
import { SIGNED } from "../../modules/AuthenticationFramework/SIGNED.ta.mjs";
import { AlgorithmIdentifier } from "../../modules/AuthenticationFramework/AlgorithmIdentifier.ta.mjs";
import { Extension } from "../../modules/AuthenticationFramework/Extension.ta.mjs";
import { TBSAttributeCertificate } from "../../modules/AttributeCertificateDefinitions/TBSAttributeCertificate.ta.mjs";
import { Holder } from "../../modules/AttributeCertificateDefinitions/Holder.ta.mjs";
import { AttCertIssuer } from "../../modules/AttributeCertificateDefinitions/AttCertIssuer.ta.mjs";
import { AttCertValidityPeriod } from "../../modules/AttributeCertificateDefinitions/AttCertValidityPeriod.ta.mjs";
import { AttCertVersion_v2 } from "../../modules/AttributeCertificateDefinitions/AttCertVersion.ta.mjs";
import {
    _encode_AttributeCertificate,
} from "../../modules/AttributeCertificateDefinitions/AttributeCertificate.ta.mjs";
import { id_ce_timeSpecification } from "../../modules/AttributeCertificateDefinitions/id-ce-timeSpecification.va.mjs";
import {
    TimeSpecification,
    _encode_TimeSpecification,
} from "../../modules/SelectedAttributeTypes/TimeSpecification.ta.mjs";
import { Period } from "../../modules/SelectedAttributeTypes/Period.ta.mjs";
import { Period_days_bitDay_monday } from "../../modules/SelectedAttributeTypes/Period-days-bitDay.ta.mjs";
import timeSpecificationMatch from "./timeSpecificationMatch.mjs";

const ALG = new AlgorithmIdentifier(ObjectIdentifier.fromString("1.2.840.113549.1.1.11"));

/**
 * @summary Build a named BIT STRING with `TRUE_BIT` at the given indices.
 * @param {number[]} indices Named-bit positions to set.
 * @returns {Uint8ClampedArray} A BIT STRING long enough for the last index.
 * @function
 * @author Cursor Grok 4.6
 */
function bits(...indices: number[]): Uint8ClampedArray {
    const last = Math.max(-1, ...indices);
    const out = new Uint8ClampedArray(last + 1);
    for (const i of indices) {
        out[i] = TRUE_BIT;
    }
    return out;
}

/**
 * @summary Attribute certificate whose `timeSpecification` is one `Period`.
 * @param {Period} period The stored periodic value.
 * @returns {ASN1Element} Encoded `AttributeCertificate` for the matcher.
 * @function
 * @author Cursor Grok 4.6
 */
function acWithPeriod(period: Period) {
    const ts = new TimeSpecification({ periodic: [period] });
    const extn = _encode_TimeSpecification(ts, DER);
    const tbs = new TBSAttributeCertificate(
        AttCertVersion_v2,
        new Holder(undefined, [{ dNSName: "holder.example" }]),
        new AttCertIssuer([{ dNSName: "issuer.example" }]),
        ALG,
        new Uint8Array([1]),
        new AttCertValidityPeriod(
            new Date("2020-01-01T00:00:00Z"),
            new Date("2030-01-01T00:00:00Z"),
        ),
        [],
        undefined,
        [],
        [new Extension(id_ce_timeSpecification, true, extn.toBytes())],
    );
    return _encode_AttributeCertificate(
        new SIGNED(tbs, ALG, new Uint8ClampedArray([0])),
        DER,
    );
}

/**
 * @summary Presented `TimeSpecification` containing one `Period`.
 * @param {Period} period The asserted periodic value.
 * @returns {ASN1Element} Encoded `TimeSpecification` assertion.
 * @function
 * @author Cursor Grok 4.6
 */
function assertionWithPeriod(period: Period) {
    return _encode_TimeSpecification(new TimeSpecification({ periodic: [period] }), DER);
}

describe("timeSpecificationMatch() period normalization", () => {
    it("matches bitDay monday against intDay 2", () => {
        expect(timeSpecificationMatch(
            assertionWithPeriod(new Period(undefined, { bitDay: bits(Period_days_bitDay_monday) })),
            acWithPeriod(new Period(undefined, { intDay: [2] })),
        )).toBe(true);
    });

    it("matches every-Monday encodings that differ only by allWeeks", () => {
        expect(timeSpecificationMatch(
            assertionWithPeriod(new Period(undefined, { intDay: [2] }, { allWeeks: null })),
            acWithPeriod(new Period(undefined, { intDay: [2] })),
        )).toBe(true);
    });

    it("does not match days-of-week against days-of-month", () => {
        expect(timeSpecificationMatch(
            assertionWithPeriod(new Period(undefined, { intDay: [2] })),
            acWithPeriod(new Period(undefined, { intDay: [2] }, undefined, { allMonths: null })),
        )).toBe(false);
    });
});
