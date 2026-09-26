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
import {
    type RoleSpecCertIdentifier,
} from "../../modules/AttributeCertificateDefinitions/RoleSpecCertIdentifier.ta.mjs";
import type {
    Extension,
} from "../../modules/AuthenticationFramework/Extension.ta.mjs";
import { DERElement } from "@wildboar/asn1";
import { compareGeneralName } from "../../comparators/compareGeneralName.mjs";
import { compareGeneralNames } from "../../comparators/compareGeneralNames.mjs";

/**
 * @summary Assert a role spec cert identifier against a stored value.
 * @description
 * 
 * This differs from {@link compareRoleSpecCertIdentifier} in that it
 * only compares components that are present in the asserted value; if
 * the stored value has a component that is not present in the asserted
 * value, it is ignored.
 * 
 * @param a - The asserted `RoleSpecCertIdentifier`.
 * @param b - The stored `RoleSpecCertIdentifier`.
 * @param getEqualityMatcher - A function that takes an attribute type and
 *  returns a function that can equality-match two values of that type
 * @returns {boolean} `true` if they match; `false` otherwise
 * @function
 */
function assertRoleSpecCertIdentifier (
    a: RoleSpecCertIdentifier,
    b: RoleSpecCertIdentifier,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
): boolean {
    if (!compareGeneralName(a.roleName, b.roleName, getEqualityMatcher)) {
        return false;
    }
    if (!compareGeneralName(a.roleCertIssuer, b.roleCertIssuer, getEqualityMatcher)) {
        return false;
    }
    if (
        a.roleCertSerialNumber
        && !(
            b.roleCertSerialNumber
            && !Buffer.compare(a.roleCertSerialNumber, b.roleCertSerialNumber)
        )
    ) {
        return false;
    }
    if (
        a.roleCertLocator
        && !(
            b.roleCertLocator
            && compareGeneralNames(a.roleCertLocator, b.roleCertLocator, getEqualityMatcher)
        )
    ) {
        return false;
    }
    return true;
}

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
        if (!assertRoleSpecCertIdentifier(a[i], storedValue[i], getEqualityMatcher)) {
            return false;
        }
    }
    return true;
}

export default roleSpecCertIdMatch;
