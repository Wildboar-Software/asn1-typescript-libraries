import type {
    GeneralNames,
} from "../modules/CertificateExtensions/GeneralNames.ta";
import compareGeneralName from "./compareGeneralName";

export
function compareGeneralNames (a: GeneralNames, b: GeneralNames): boolean {
    if (a.length !== b.length) {
        return false;
    }
    for (let i = 0; i < a.length; i++) {
        if (!compareGeneralName(a[i], b[i])) {
            return false;
        }
    }
    return true;
}

export default compareGeneralNames;
