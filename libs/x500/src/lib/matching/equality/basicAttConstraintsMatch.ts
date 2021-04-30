import EqualityMatcher from "../../types/EqualityMatcher";
import type { ASN1Element } from "asn1-ts";
import {
    id_ce_basicAttConstraints,
} from "../../modules/AttributeCertificateDefinitions/id-ce-basicAttConstraints.va";
import {
    BasicAttConstraintsSyntax,
    _decode_BasicAttConstraintsSyntax,
} from "../../modules/AttributeCertificateDefinitions/BasicAttConstraintsSyntax.ta";
import {
    AttributeCertificate,
    _decode_AttributeCertificate,
} from "../../modules/AttributeCertificateDefinitions/AttributeCertificate.ta";
import type {
    Extension,
} from "../../modules/AuthenticationFramework/Extension.ta";
import { DERElement } from "asn1-ts";

const SOUGHT_OID: string = id_ce_basicAttConstraints.toString();

export
const basicAttConstraintsMatch: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): boolean => {
    const a: BasicAttConstraintsSyntax = _decode_BasicAttConstraintsSyntax(assertion);
    const v: AttributeCertificate = _decode_AttributeCertificate(value);
    const ext: Extension | undefined = v.toBeSigned.extensions
        .find((ext: Extension): boolean => (ext.extnId.toString() === SOUGHT_OID));
    if (!ext) {
        return false;
    }
    const el: DERElement = new DERElement();
    el.fromBytes(ext.extnValue);
    const storedValue: BasicAttConstraintsSyntax = _decode_BasicAttConstraintsSyntax(el);
    if (Boolean(a.authority) !== Boolean(storedValue.authority)) {
        return false;
    }
    return (a.pathLenConstraint === storedValue.pathLenConstraint);
}

export default basicAttConstraintsMatch;
