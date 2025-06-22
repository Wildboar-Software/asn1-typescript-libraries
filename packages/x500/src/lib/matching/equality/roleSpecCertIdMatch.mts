import type EqualityMatcher from "../../types/EqualityMatcher.mjs";
import type { ASN1Element, OBJECT_IDENTIFIER } from "@wildboar/asn1";
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

export
const roleSpecCertIdMatch: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
): boolean => {
    const a: RoleSpecCertIdentifierSyntax = _decode_RoleSpecCertIdentifierSyntax(assertion);
    const v: AttributeCertificate = _decode_AttributeCertificate(value);
    const rsci: Extension | undefined = v.toBeSigned.extensions
        .find((ext: Extension): boolean => ext.extnId.isEqualTo(id_ce_roleSpecCertIdentifier));
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
