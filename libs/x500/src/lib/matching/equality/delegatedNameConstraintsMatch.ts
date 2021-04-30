import EqualityMatcher from "../../types/EqualityMatcher";
import type { ASN1Element } from "asn1-ts";
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

const SOUGHT_OID: string = id_ce_delegatedNameConstraints.toString();

export
const delegatedNameConstraintsMatch: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): boolean => {
    const a: NameConstraintsSyntax = _decode_NameConstraintsSyntax(assertion);
    const v: AttributeCertificate = _decode_AttributeCertificate(value);
    const ext: Extension | undefined = v.toBeSigned.extensions
        .find((ext: Extension): boolean => (ext.extnId.toString() === SOUGHT_OID));
    if (!ext) {
        return false;
    }
    const el: DERElement = new DERElement();
    el.fromBytes(ext.extnValue);
    const storedValue: NameConstraintsSyntax = _decode_NameConstraintsSyntax(el);
    return compareNameConstraintsSyntax(a, storedValue);
}

export default delegatedNameConstraintsMatch;
