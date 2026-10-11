import type EqualityMatcher from "../../types/EqualityMatcher.mjs";
import type { ASN1Element, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { readDecoded } from "../readValue.mjs";
import {
    id_ce_delegatedNameConstraints,
} from "../../modules/AttributeCertificateDefinitions/id-ce-delegatedNameConstraints.va.mjs";
import {
    NameConstraintsSyntax,
    _decode_NameConstraintsSyntax,
} from "../../modules/CertificateExtensions/NameConstraintsSyntax.ta.mjs";
import {
    AttributeCertificate,
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
export
function delegatedNameConstraintsMatch (
    assertion: ASN1Element | NameConstraintsSyntax,
    value: ASN1Element | AttributeCertificate,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
): boolean {
    return delegatedNameConstraintsMatchTyped(
        readDecoded(assertion, _decode_NameConstraintsSyntax),
        readDecoded(value, _decode_AttributeCertificate),
        getEqualityMatcher,
    );
}

/**
 * `delegatedNameConstraintsMatch` on decoded values.
 *
 * @param a Presented name constraints.
 * @param v Stored attribute certificate.
 * @param getEqualityMatcher Equality rule lookup for naming attributes.
 * @returns `true` when the stored extension matches.
 */
export
function delegatedNameConstraintsMatchTyped (
    a: NameConstraintsSyntax,
    v: AttributeCertificate,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
): boolean {
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

export default delegatedNameConstraintsMatch;
