import {
    RoleSpecCertIdentifier,
} from "../modules/AttributeCertificateDefinitions/RoleSpecCertIdentifier.ta";
import compareGeneralName from "./compareGeneralName";
import compareGeneralNames from "./compareGeneralNames";
import compareUint8Arrays from "./compareUint8Arrays";

export
function compareRoleSpecCertIdentifier (a: RoleSpecCertIdentifier, b: RoleSpecCertIdentifier): boolean {
    if (!compareGeneralName(a.roleName, b.roleName)) {
        return false;
    }
    if (!compareGeneralName(a.roleCertIssuer, b.roleCertIssuer)) {
        return false;
    }
    if (!compareUint8Arrays(a.roleCertSerialNumber, b.roleCertSerialNumber)) {
        return false;
    }
    return ((!a && !b) || ((a && b) && compareGeneralNames(a.roleCertLocator, b.roleCertLocator)));
}

export default compareRoleSpecCertIdentifier;
