import EqualityMatcher from "../../types/EqualityMatcher.mjs";
import type { ASN1Element } from "@wildboar/asn1";
import {
    id_ce_basicAttConstraints,
} from "../../modules/AttributeCertificateDefinitions/id-ce-basicAttConstraints.va.mjs";
import {
    BasicAttConstraintsSyntax,
    _decode_BasicAttConstraintsSyntax,
} from "../../modules/AttributeCertificateDefinitions/BasicAttConstraintsSyntax.ta.mjs";
import {
    AttributeCertificate,
    _decode_AttributeCertificate,
} from "../../modules/AttributeCertificateDefinitions/AttributeCertificate.ta.mjs";
import type {
    Extension,
} from "../../modules/AuthenticationFramework/Extension.ta.mjs";
import { DERElement } from "@wildboar/asn1";

export
const basicAttConstraintsMatch: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): boolean => {
    const a: BasicAttConstraintsSyntax = _decode_BasicAttConstraintsSyntax(assertion);
    const v: AttributeCertificate = _decode_AttributeCertificate(value);
    const ext: Extension | undefined = v.toBeSigned.extensions
        .find((ext: Extension): boolean => (ext.extnId.isEqualTo(id_ce_basicAttConstraints)));
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
