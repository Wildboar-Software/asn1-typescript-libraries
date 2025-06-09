import type { OBJECT_CLASS } from "../modules/InformationFramework/OBJECT-CLASS.oca.js";
import type {
    AttributeType,
} from "../modules/InformationFramework/AttributeType.ta.js";
import type {
    AttributeTypeAndValue,
} from "../modules/InformationFramework/AttributeTypeAndValue.ta.js";
import type {
    Context,
} from "../modules/InformationFramework/Context.ta.js";

/**
 * From ITU Recommendation X.501 (2016), Section 18.2.1:
 *
 * > The protected items of the Directory are entries, attributes, attribute
 * > values and names.
 */
export
type ProtectedItem = {
        entry: OBJECT_CLASS["&id"][];
        siblingsCount?: number; // for maxImmSub support.
    }
    | {
        attributeType: AttributeType;
        valuesCount?: number; // for maxValueCount support.
        operational?: boolean;
    }
    | {
        value: AttributeTypeAndValue;
        contexts?: Context[];
        operational?: boolean;
    };

export default ProtectedItem;
