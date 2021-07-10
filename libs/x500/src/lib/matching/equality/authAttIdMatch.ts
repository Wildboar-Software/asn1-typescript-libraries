import type EqualityMatcher from "../../types/EqualityMatcher";
import type { ASN1Element, OBJECT_IDENTIFIER } from "asn1-ts";
import {
    id_ce_basicAttConstraints,
} from "../../modules/AttributeCertificateDefinitions/id-ce-basicAttConstraints.va";
import {
    AuthorityAttributeIdentifierSyntax,
    _decode_AuthorityAttributeIdentifierSyntax,
} from "../../modules/AttributeCertificateDefinitions/AuthorityAttributeIdentifierSyntax.ta";
import {
    AttributeCertificate,
    _decode_AttributeCertificate,
} from "../../modules/AttributeCertificateDefinitions/AttributeCertificate.ta";
import type {
    Extension,
} from "../../modules/AuthenticationFramework/Extension.ta";
import { DERElement } from "asn1-ts";
import compareIssuerSerial from "../../comparators/compareIssuerSerial";

export
const authAttIdMatch: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
): boolean => {
    const ass: AuthorityAttributeIdentifierSyntax = _decode_AuthorityAttributeIdentifierSyntax(assertion);
    const val: AttributeCertificate = _decode_AttributeCertificate(value);
    const ext: Extension | undefined = val.toBeSigned.extensions
        .find((ext: Extension): boolean => (ext.extnId.isEqualTo(id_ce_basicAttConstraints)));
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
