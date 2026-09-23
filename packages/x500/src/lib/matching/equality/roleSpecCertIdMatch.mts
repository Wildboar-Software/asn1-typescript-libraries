import type EqualityMatcher from "../../types/EqualityMatcher.mjs";
import type { ASN1Element, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { readDecoded } from "../readValue.mjs";
import {
    id_ce_roleSpecCertIdentifier,
} from "../../modules/AttributeCertificateDefinitions/id-ce-roleSpecCertIdentifier.va.mjs";
import {
    AttributeCertificate,
    _decode_AttributeCertificate,
} from "../../modules/AttributeCertificateDefinitions/AttributeCertificate.ta.mjs";
import {
    RoleSpecCertIdentifierSyntax,
    _decode_RoleSpecCertIdentifierSyntax,
} from "../../modules/AttributeCertificateDefinitions/RoleSpecCertIdentifierSyntax.ta.mjs";
import type {
    Extension,
} from "../../modules/AuthenticationFramework/Extension.ta.mjs";
import compareRoleSpecCertIdentifier from "../../comparators/compareRoleSpecCertIdentifier.mjs";
import { DERElement } from "@wildboar/asn1";

/**
 * Rec. ITU-T X.509 (10/2019), clause 17.4.2.1.2
 * `roleSpecCertIdMatch`.
 *
 * TRUE iff the stored AC contains `roleSpecCertIdentifier` and
 * every component present in the presented
 * `RoleSpecCertIdentifierSyntax` matches the corresponding stored
 * component.
 */
export
function roleSpecCertIdMatch (
    assertion: ASN1Element | RoleSpecCertIdentifierSyntax,
    value: ASN1Element | AttributeCertificate,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
): boolean {
    return roleSpecCertIdMatchTyped(
        readDecoded(assertion, _decode_RoleSpecCertIdentifierSyntax),
        readDecoded(value, _decode_AttributeCertificate),
        getEqualityMatcher,
    );
}

/**
 * `roleSpecCertIdMatch` on decoded values.
 *
 * @param a Presented role-specification certificate identifiers.
 * @param v Stored attribute certificate.
 * @param getEqualityMatcher Equality rule lookup for naming attributes.
 * @returns `true` when the stored extension matches.
 */
export
function roleSpecCertIdMatchTyped (
    a: RoleSpecCertIdentifierSyntax,
    v: AttributeCertificate,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
): boolean {
    const rsci: Extension | undefined = v.toBeSigned.extensions
        ?.find((ext: Extension): boolean => ext.extnId.isEqualTo(id_ce_roleSpecCertIdentifier));
    if (!rsci) {
        return false;
    }
    const el: DERElement = new DERElement();
    el.fromBytes(rsci.extnValue);
    const storedValue: RoleSpecCertIdentifierSyntax = _decode_RoleSpecCertIdentifierSyntax(el);
    if (a.length !== storedValue.length) {
        return false;
    }
    for (let i = 0; i < a.length; i++) {
        if (!compareRoleSpecCertIdentifier(a[i], storedValue[i], getEqualityMatcher)) {
            return false;
        }
    }
    return true;
}

export default roleSpecCertIdMatch;
