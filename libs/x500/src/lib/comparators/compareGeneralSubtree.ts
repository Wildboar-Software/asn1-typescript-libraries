import {
    GeneralSubtree,
} from "../modules/CertificateExtensions/GeneralSubtree.ta";
import compareGeneralName from "./compareGeneralName";

const DEFAULT_MINIMUM: number = GeneralSubtree._default_value_for_minimum;

export
function compareGeneralSubtree (a: GeneralSubtree, b: GeneralSubtree): boolean {
    if ((a.minimum ?? DEFAULT_MINIMUM) !== (b.minimum ?? DEFAULT_MINIMUM)) {
        return false;
    }
    if (a.maximum !== b.maximum) {
        return false;
    }
    return compareGeneralName(a.base, b.base);
}

export default compareGeneralSubtree;
