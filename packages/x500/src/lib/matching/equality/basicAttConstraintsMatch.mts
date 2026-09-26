import type { ASN1Element } from "@wildboar/asn1";
import { readDecoded } from "../readValue.mjs";
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

/**
 * Rec. ITU-T X.509 (10/2019), clause 17.5.2.1.2
 * `basicAttConstraintsMatch`.
 *
 * TRUE iff the stored AC contains `basicAttConstraints` and every
 * component present in the presented
 * `BasicAttConstraintsSyntax` matches the corresponding stored
 * component (`authority`, optional `pathLenConstraint`).
 */
export
function basicAttConstraintsMatch (
    assertion: ASN1Element | BasicAttConstraintsSyntax,
    value: ASN1Element | AttributeCertificate,
): boolean {
    return basicAttConstraintsMatchTyped(
        readDecoded(assertion, _decode_BasicAttConstraintsSyntax),
        readDecoded(value, _decode_AttributeCertificate),
    );
}

/**
 * `basicAttConstraintsMatch` on decoded values.
 *
 * @param a Presented constraints.
 * @param v Stored attribute certificate.
 * @returns `true` when authority and path length match.
 */
export
function basicAttConstraintsMatchTyped (
    a: BasicAttConstraintsSyntax,
    v: AttributeCertificate,
): boolean {
    const ext: Extension | undefined = v.toBeSigned.extensions
        ?.find((ext: Extension): boolean => (ext.extnId.isEqualTo(id_ce_basicAttConstraints)));
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
