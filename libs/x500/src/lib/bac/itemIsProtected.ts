import type { OBJECT_IDENTIFIER } from "asn1-ts";
import type EqualityMatcher from "../types/EqualityMatcher";
import type {
    ProtectedItems,
} from "../modules/BasicAccessControl/ProtectedItems.ta";
import objectClassesWithinRefinement from "../utils/objectClassesWithinRefinement";
import type ProtectedItem from "../types/ProtectedItem";

/**
 * @summary Whether the requested item is protected by the `ProtectedItems`.
 * @description
 *
 * This function determines whether the requested item is targeted by the
 * `ProtectedItems`.
 *
 * ### Parameters
 *
 * @param {object} request The aspect of the entry to which authorization is
 *  being requested.
 * @param {ProtectedItems} protectedItems The data structure that defines what
 *  is protected by the ACI item.
 * @param {function} getEqualityMatcher A function that takes an object
 *  identifier and returns another function (if one can be found) that can be
 *  used to compare two values of the same attribute type.
 * @returns {boolean} A `boolean` that is `true` if the requested item is
 *  protected by the `ProtectedItems` and `false` if it is not.
 * @function
 */
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
            (protectedItems.allUserAttributeTypes === null)
            || protectedItems.attributeType
                ?.some((at) => at.toString() === request.attributeType.toString())
            || protectedItems.allAttributeValues
                ?.some((av) => av.toString() === request.attributeType.toString())
            || (protectedItems.allUserAttributeTypesAndValues === null)
            || protectedItems.attributeValue
                ?.some((av) => av.type_.toString() === request.attributeType.toString())
            // || protectedItems.selfValue // TODO:
            //     ?.some((sv) => sv.toString() === request.attributeType.toString())
            // || protectedItems.rangeOfValues // TODO: Check if its within the range.
            // || protectedItems.maxValueCount // TODO: I don't know how to implement this.
            //     ?.some((mvc) => mvc.type_.toString() === request.attributeType.toString())
            // || protectedItems.restrictedBy // TODO:
            //     ?.some((rb) => rb.type_.toString() === request.attributeType.toString())
        );
    } else if ("value" in request) {
        return (
            protectedItems.allAttributeValues
                ?.some((av) => av.toString() === request.value.type_.toString())
            || (protectedItems.allUserAttributeTypesAndValues === null)
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
            // || protectedItems.selfValue
            //     ?.some((sv) => sv.toString() === request.value.type_.toString())
            // || protectedItems.rangeOfValues // TODO: Check if its within the range.
            // || protectedItems.maxValueCount // TODO: I don't know how to implement this.
            //     ?.some((mvc) => mvc.type_.toString() === request.value.type_.toString())
            // || protectedItems.restrictedBy
            //     ?.some((rb) => rb.type_.toString() === request.value.type_.toString())
            // || Boolean(protectedItems.contexts)
        );
    } else {
        return false; // For lack of knowing what to do.
    }
}

export default itemIsProtected;
