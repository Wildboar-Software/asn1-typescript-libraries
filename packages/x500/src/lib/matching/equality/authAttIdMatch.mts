import type EqualityMatcher from "../../types/EqualityMatcher.mjs";
import type { ASN1Element, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { readDecoded } from "../readValue.mjs";
import {
    id_ce_basicAttConstraints,
} from "../../modules/AttributeCertificateDefinitions/id-ce-basicAttConstraints.va.mjs";
import {
    AuthorityAttributeIdentifierSyntax,
    _decode_AuthorityAttributeIdentifierSyntax,
} from "../../modules/AttributeCertificateDefinitions/AuthorityAttributeIdentifierSyntax.ta.mjs";
import {
    AttributeCertificate,
    _decode_AttributeCertificate,
} from "../../modules/AttributeCertificateDefinitions/AttributeCertificate.ta.mjs";
import type {
    Extension,
} from "../../modules/AuthenticationFramework/Extension.ta.mjs";
import { DERElement } from "@wildboar/asn1";
import compareIssuerSerial from "../../comparators/compareIssuerSerial.mjs";

/**
 * Rec. ITU-T X.509 (10/2019), clause 17.5.2.4.2 `authAttIdMatch`.
 *
 * TRUE iff the stored AC contains `authorityAttributeIdentifier`
 * and every component present in the presented
 * `AuthorityAttributeIdentifierSyntax` matches the stored
 * `IssuerSerial` pointers.
 */
export
function authAttIdMatch (
    assertion: ASN1Element | AuthorityAttributeIdentifierSyntax,
    value: ASN1Element | AttributeCertificate,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
): boolean {
    return authAttIdMatchTyped(
        readDecoded(assertion, _decode_AuthorityAttributeIdentifierSyntax),
        readDecoded(value, _decode_AttributeCertificate),
        getEqualityMatcher,
    );
}

/**
 * `authAttIdMatch` on decoded values.
 *
 * @param ass Presented authority attribute identifiers.
 * @param val Stored attribute certificate.
 * @param getEqualityMatcher Equality rule lookup for naming attributes.
 * @returns `true` when the issuer-serial lists match.
 */
export
function authAttIdMatchTyped (
    ass: AuthorityAttributeIdentifierSyntax,
    val: AttributeCertificate,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
): boolean {
    const ext: Extension | undefined = val.toBeSigned.extensions
        ?.find((ext: Extension): boolean => (ext.extnId.isEqualTo(id_ce_basicAttConstraints)));
    if (!ext) {
        return false;
    }
    const el: DERElement = new DERElement();
    el.fromBytes(ext.extnValue);
    const storedValue: AuthorityAttributeIdentifierSyntax = _decode_AuthorityAttributeIdentifierSyntax(el);
    /**
     * Even though the specification seems to prescribe a comparison of a
     * SEQUENCE to SEQUENCE, there is no significance to the SEQUENCE in
     * `AuthorityAttributeIdentifierSyntax`, so we sort by serial numbers, then
     * compare so we effectively ignore the ordering of elements.
     */
    const bSorted = storedValue.sort((a, b) => (
        a.serial.reduce((p, c) => (p + c), 0) - b.serial.reduce((p, c) => (p + c), 0)
    ));
    const aSorted = ass.sort((a, b) => (
        a.serial.reduce((p, c) => (p + c), 0) - b.serial.reduce((p, c) => (p + c), 0)
    ));
    return aSorted.every((a, i) => compareIssuerSerial(a, bSorted[i], getEqualityMatcher));
}

export default authAttIdMatch;
