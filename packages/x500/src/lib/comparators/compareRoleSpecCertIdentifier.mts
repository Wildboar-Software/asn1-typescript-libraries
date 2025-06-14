import type { OBJECT_IDENTIFIER } from "asn1-ts";
import type EqualityMatcher from "../types/EqualityMatcher.mjs";
import {
    RoleSpecCertIdentifier,
} from "../modules/AttributeCertificateDefinitions/RoleSpecCertIdentifier.ta.mjs";
import compareGeneralName from "./compareGeneralName.mjs";
import compareGeneralNames from "./compareGeneralNames.mjs";

export
function compareRoleSpecCertIdentifier (
    a: RoleSpecCertIdentifier,
    b: RoleSpecCertIdentifier,
    getEqualityMatcher: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
): boolean {
    if (!compareGeneralName(a.roleName, b.roleName, getEqualityMatcher)) {
        return false;
    }
    if (!compareGeneralName(a.roleCertIssuer, b.roleCertIssuer, getEqualityMatcher)) {
        return false;
    }
    if (Buffer.compare(a.roleCertSerialNumber, b.roleCertSerialNumber)) {
        return false;
    }
    return ((!a && !b) || ((a && b) && compareGeneralNames(a.roleCertLocator, b.roleCertLocator, getEqualityMatcher)));
}

export default compareRoleSpecCertIdentifier;
