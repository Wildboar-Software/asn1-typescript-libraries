import type { ASN1Element } from "@wildboar/asn1";
import { Buffer } from "node:buffer";
import { isAsn1Element } from "../readValue.mjs";
import type {
    AttributeCertificateExactAssertion,
} from "../../modules/AttributeCertificateDefinitions/AttributeCertificateExactAssertion.ta.mjs";
import type {
    AttributeCertificate,
} from "../../modules/AttributeCertificateDefinitions/AttributeCertificate.ta.mjs";

/**
 * Rec. ITU-T X.509 (10/2019), clause 19.3.1
 * `attributeCertificateExactMatch`.
 *
 * Uniquely selects an `AttributeCertificate`. TRUE iff serial
 * number and issuer (`AttCertIssuer`) in
 * `AttributeCertificateExactAssertion` equal those in the stored
 * certificate.
 */
function exactOctets (
    value: ASN1Element | Uint8Array | AttributeCertificateExactAssertion | AttributeCertificate,
): Uint8Array {
    if (isAsn1Element(value)) {
        return value.sequence[2].octetString;
    }
    if (value instanceof Uint8Array) {
        return value;
    }
    if ("toBeSigned" in value) {
        return value.toBeSigned.serialNumber;
    }
    return value.serialNumber;
}

export
function attributeCertificateExactMatch (
    assertion: ASN1Element | Uint8Array | AttributeCertificateExactAssertion,
    value: ASN1Element | Uint8Array | AttributeCertificate,
): boolean {
    return attributeCertificateExactMatchTyped(exactOctets(assertion), exactOctets(value));
}

/**
 * `attributeCertificateExactMatch` on the octet strings this rule
 * compares. Encoded values contribute the third SEQUENCE component,
 * which is what this implementation has always compared. Decoded
 * values contribute `serialNumber`.
 *
 * @param assertion Presented octets.
 * @param value Stored octets.
 * @returns `true` when the octets are equal.
 */
export
function attributeCertificateExactMatchTyped (
    assertion: Uint8Array,
    value: Uint8Array,
): boolean {
    return Buffer.compare(assertion, value) === 0;
}

export default attributeCertificateExactMatch;
