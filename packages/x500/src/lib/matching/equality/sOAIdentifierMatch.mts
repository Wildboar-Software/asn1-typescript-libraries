import {
    ASN1Construction,
    ASN1Error,
    ASN1TagClass,
    ASN1UniversalType,
    type ASN1Element,
} from "@wildboar/asn1";
import { _decodeNull } from "@wildboar/asn1/functional";
import { readDecoded } from "../readValue.mjs";
import {
    type Certificate,
    _decode_Certificate,
} from "../../modules/AuthenticationFramework/Certificate.ta.mjs";
import {
    id_ce_sOAIdentifier,
} from "../../modules/AttributeCertificateDefinitions/id-ce-sOAIdentifier.va.mjs";
import {
    createEqualityMatcher,
    type Matcher,
    type TypedEquationFunction,
} from "../../types/matching.mjs";

/**
 * Rec. ITU-T X.509 (10/2019), clause 17.3.2.1.2
 * `sOAIdentifierMatch`.
 *
 * Assertion syntax is NULL. TRUE iff the stored public-key
 * certificate contains a `sOAIdentifier` extension.
 *
 * @param _assertion Presented NULL. Ignored.
 * @param value Stored certificate, or that certificate already decoded.
 */
export
function sOAIdentifierMatchTyped (
    _assertion: null,
    value: Certificate | ASN1Element,
): boolean | undefined {
    const certificate = readDecoded(value, _decode_Certificate);
    return Boolean(certificate.toBeSigned.extensions?.some((ext) => ext.extnId.isEqualTo(id_ce_sOAIdentifier)));
}

sOAIdentifierMatchTyped satisfies TypedEquationFunction<null>;

function decodeNullAssertion (el: ASN1Element): null {
    if (
        el.tagClass !== ASN1TagClass.universal
        || el.construction !== ASN1Construction.primitive
        || el.tagNumber !== ASN1UniversalType.nill
        || el.value.length !== 0
    ) {
        throw new ASN1Error("sOAIdentifierMatch assertion is not NULL", el);
    }
    return _decodeNull(el);
}

/**
 * `sOAIdentifierMatch` as a `Matcher`.
 */
export
const sOAIdentifierMatch: Matcher = createEqualityMatcher(
    decodeNullAssertion,
    sOAIdentifierMatchTyped,
    undefined,
    true,
);

export default sOAIdentifierMatch;
