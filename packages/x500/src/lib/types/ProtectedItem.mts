import type { OBJECT_CLASS } from "../modules/InformationFramework/OBJECT-CLASS.oca.mjs";
import type {
    AttributeType,
} from "../modules/InformationFramework/AttributeType.ta.mjs";
import type {
    AttributeTypeAndValue,
} from "../modules/InformationFramework/AttributeTypeAndValue.ta.mjs";
import type {
    Context,
} from "../modules/InformationFramework/Context.ta.mjs";
import type { Attribute } from "../modules/InformationFramework/Attribute.ta.mjs";

/**
 * From ITU Recommendation X.501 (2016), Section 18.2.1:
 *
 * > The protected items of the Directory are entries, attributes, attribute
 * > values and names.
 */
export
type ProtectedItem = {
        entry: OBJECT_CLASS["&id"][];
        /** Number of immediate subordinates after the addition or import. */
        siblingsCount?: number;
        /** Set false when the superior is in another DSA and maxImmSub does not apply. */
        immediateSuperiorInSameDSA?: boolean;
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
        /** Total values of this type after addition, regardless of contexts or access control. */
        valuesCount?: number;
        /** Complete post-operation entry attributes, without access-control filtering. */
        entryAttributes?: readonly Attribute[];
    };

export type { ProtectedItem as default };
