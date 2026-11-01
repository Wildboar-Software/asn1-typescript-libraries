import type { ASN1Element } from "@wildboar/asn1";
import { readDecoded } from "../readValue.mjs";
import {
    createEqualityMatcher,
    type Matcher,
    type TypedEquationFunction,
} from "../../types/matching.mjs";
import {
    id_ce_basicAttConstraints,
} from "../../modules/AttributeCertificateDefinitions/id-ce-basicAttConstraints.va.mjs";
import {
    BasicAttConstraintsSyntax,
    _decode_BasicAttConstraintsSyntax,
} from "../../modules/AttributeCertificateDefinitions/BasicAttConstraintsSyntax.ta.mjs";
import {
    type AttributeCertificate,
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
/**
 * `basicAttConstraintsMatch` on decoded values.
 *
 * @param a Presented constraints.
 * @param value Stored attribute certificate, or that certificate already decoded.
 * @returns `true` when authority and path length match.
 */
export
function basicAttConstraintsMatchTyped (
    a: BasicAttConstraintsSyntax,
    value: AttributeCertificate | ASN1Element,
): boolean {
    const v = readDecoded(value, _decode_AttributeCertificate);
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

basicAttConstraintsMatchTyped satisfies TypedEquationFunction<BasicAttConstraintsSyntax>;

/**
 * `basicAttConstraintsMatch` as a `Matcher`.
 */
export
const basicAttConstraintsMatch: Matcher = createEqualityMatcher(
    _decode_BasicAttConstraintsSyntax,
    basicAttConstraintsMatchTyped,
    undefined,
    true,
);

export default basicAttConstraintsMatch;
