import type { OBJECT_IDENTIFIER } from "asn1-ts";
import type EqualityMatcher from "../types/EqualityMatcher";
import type {
    ProtectedItems,
} from "../modules/BasicAccessControl/ProtectedItems.ta";
import objectClassesWithinRefinement from "./objectClassesWithinRefinement";
import type ProtectedItem from "../types/ProtectedItem";

export
function itemIsProtected (
    request: ProtectedItem,
    protectedItems: ProtectedItems,
    getEqualityMatcher: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
): boolean {
    if ("entry" in request) {
        if (protectedItems.classes) {
            return objectClassesWithinRefinement(request.entry, protectedItems.classes);
        } else if (protectedItems.entry === null) {
            return true;
        }
    } else if ("attributeType" in request) {
        return (
            protectedItems.allUserAttributeTypes
            || protectedItems.attributeType
                ?.some((at) => at.toString() === request.attributeType.toString())
            || protectedItems.allAttributeValues
                ?.some((av) => av.toString() === request.attributeType.toString())
            || protectedItems.allUserAttributeTypesAndValues
            || protectedItems.attributeValue
                ?.some((av) => av.type_.toString() === request.attributeType.toString())
            || protectedItems.selfValue
                ?.some((sv) => sv.toString() === request.attributeType.toString())
            // || protectedItems.rangeOfValues // TODO: Check if its within the range.
            || protectedItems.maxValueCount
                ?.some((mvc) => mvc.type_.toString() === request.attributeType.toString())
            || protectedItems.restrictedBy
                ?.some((rb) => rb.type_.toString() === request.attributeType.toString())
        );
    } else if ("value" in request) {
        return (
            protectedItems.allUserAttributeTypes
            || protectedItems.attributeType
                ?.some((at) => at.toString() === request.value.type_.toString())
            || protectedItems.allAttributeValues
                ?.some((av) => av.toString() === request.value.type_.toString())
            || protectedItems.allUserAttributeTypesAndValues
            || protectedItems.attributeValue
                ?.some((av) => {
                    if (av.type_.toString() !== request.value.type_.toString()) {
                        return false;
                    }
                    const matcher = getEqualityMatcher(av.type_);
                    if (!matcher) {
                        return false;
                    }
                    return matcher(av.value, request.value.value);
                })
            || protectedItems.selfValue
                ?.some((sv) => sv.toString() === request.value.type_.toString())
            // || protectedItems.rangeOfValues // TODO: Check if its within the range.
            || protectedItems.maxValueCount
                ?.some((mvc) => mvc.type_.toString() === request.value.type_.toString())
            || protectedItems.restrictedBy
                ?.some((rb) => rb.type_.toString() === request.value.type_.toString())
            || Boolean(protectedItems.contexts)
        );
    } else {
        return false; // For lack of knowing what to do.
    }
}

export default itemIsProtected;
