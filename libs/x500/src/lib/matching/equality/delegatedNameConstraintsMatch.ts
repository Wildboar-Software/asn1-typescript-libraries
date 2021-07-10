import type EqualityMatcher from "../../types/EqualityMatcher";
import type { ASN1Element, OBJECT_IDENTIFIER } from "asn1-ts";
import {
    id_ce_delegatedNameConstraints,
} from "../../modules/AttributeCertificateDefinitions/id-ce-delegatedNameConstraints.va";
import {
    NameConstraintsSyntax,
    _decode_NameConstraintsSyntax,
} from "../../modules/CertificateExtensions/NameConstraintsSyntax.ta";
import {
    AttributeCertificate,
    _decode_AttributeCertificate,
} from "../../modules/AttributeCertificateDefinitions/AttributeCertificate.ta";
import type {
    Extension,
} from "../../modules/AuthenticationFramework/Extension.ta";
import { DERElement } from "asn1-ts";
import compareNameConstraintsSyntax from "../../comparators/compareNameConstraintsSyntax";

export
const delegatedNameConstraintsMatch: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
): boolean => {
    const a: NameConstraintsSyntax = _decode_NameConstraintsSyntax(assertion);
    const v: AttributeCertificate = _decode_AttributeCertificate(value);
    const ext: Extension | undefined = v.toBeSigned.extensions
        .find((ext: Extension): boolean => (ext.extnId.isEqualTo(id_ce_delegatedNameConstraints)));
    if (!ext) {
        return false;
    }
    const el: DERElement = new DERElement();
    el.fromBytes(ext.extnValue);
    const storedValue: NameConstraintsSyntax = _decode_NameConstraintsSyntax(el);
    return compareNameConstraintsSyntax(a, storedValue, getEqualityMatcher);
}

export default delegatedNameConstraintsMatch;
