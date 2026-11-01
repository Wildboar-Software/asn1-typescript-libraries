import type { ASN1Element } from "@wildboar/asn1";
import type { AttributeType } from "../../modules/InformationFramework/index.mjs";
import { valueEqualityMatcher } from "../valueEqualityMatcher.mjs";
import {
    createEqualityMatcher,
    type Matcher,
    type TypedEquationFunction,
} from "../../types/matching.mjs";
import { readDecoded } from "../readValue.mjs";
import {
    id_ce_delegatedNameConstraints,
} from "../../modules/AttributeCertificateDefinitions/id-ce-delegatedNameConstraints.va.mjs";
import {
    NameConstraintsSyntax,
    _decode_NameConstraintsSyntax,
} from "../../modules/CertificateExtensions/NameConstraintsSyntax.ta.mjs";
import {
    type AttributeCertificate,
    _decode_AttributeCertificate,
} from "../../modules/AttributeCertificateDefinitions/AttributeCertificate.ta.mjs";
import type {
    Extension,
} from "../../modules/AuthenticationFramework/Extension.ta.mjs";
import { DERElement } from "@wildboar/asn1";
import compareNameConstraintsSyntax from "../../comparators/compareNameConstraintsSyntax.mjs";

/**
 * Rec. ITU-T X.509 (10/2019), clause 17.5.2.2.2
 * `delegatedNameConstraintsMatch`.
 *
 * TRUE iff the stored AC contains delegated name constraints
 * (`delegatedNameConstraints` / the spec also names
 * `attributeNameConstraints`) and every component present in the
 * presented `NameConstraintsSyntax` matches the stored extension.
 */
/**
 * `delegatedNameConstraintsMatch` on decoded values.
 *
 * @param a Presented name constraints.
 * @param value Stored attribute certificate, or that certificate already decoded.
 * @param getMatcher Equality rule lookup for naming attributes.
 * @returns `true` when the stored extension matches.
 */
export
function delegatedNameConstraintsMatchTyped (
    a: NameConstraintsSyntax,
    value: AttributeCertificate | ASN1Element,
    getMatcher?: (attributeType: AttributeType) => Matcher | undefined,
): boolean {
    const v = readDecoded(value, _decode_AttributeCertificate);
    const getEqualityMatcher = valueEqualityMatcher(getMatcher);
    const ext: Extension | undefined = v.toBeSigned.extensions
        ?.find((ext: Extension): boolean => (ext.extnId.isEqualTo(id_ce_delegatedNameConstraints)));
    if (!ext) {
        return false;
    }
    const el: DERElement = new DERElement();
    el.fromBytes(ext.extnValue);
    const storedValue: NameConstraintsSyntax = _decode_NameConstraintsSyntax(el);
    return compareNameConstraintsSyntax(a, storedValue, getEqualityMatcher);
}

delegatedNameConstraintsMatchTyped satisfies TypedEquationFunction<NameConstraintsSyntax>;

/**
 * `delegatedNameConstraintsMatch` as a `Matcher`.
 */
export
const delegatedNameConstraintsMatch: Matcher = createEqualityMatcher(
    _decode_NameConstraintsSyntax,
    delegatedNameConstraintsMatchTyped,
    undefined,
    true,
);

export default delegatedNameConstraintsMatch;
