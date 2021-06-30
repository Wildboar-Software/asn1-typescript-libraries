import type { OBJECT_IDENTIFIER } from "asn1-ts";
import type EqualityMatcher from "../types/EqualityMatcher";
import {
    RoleSpecCertIdentifier,
} from "../modules/AttributeCertificateDefinitions/RoleSpecCertIdentifier.ta";
import compareGeneralName from "./compareGeneralName";
import compareGeneralNames from "./compareGeneralNames";
import compareUint8Arrays from "./compareUint8Arrays";

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
    if (!compareUint8Arrays(a.roleCertSerialNumber, b.roleCertSerialNumber)) {
        return false;
    }
    return ((!a && !b) || ((a && b) && compareGeneralNames(a.roleCertLocator, b.roleCertLocator, getEqualityMatcher)));
}

export default compareRoleSpecCertIdentifier;
