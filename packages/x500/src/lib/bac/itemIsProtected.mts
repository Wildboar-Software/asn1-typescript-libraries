import {
    ASN1TagClass,
    ASN1UniversalType,
} from "@wildboar/asn1";
import type {
    ProtectedItems,
} from "../modules/BasicAccessControl/ProtectedItems.ta.mjs";
import objectClassesWithinRefinement from "../utils/objectClassesWithinRefinement.mjs";
import type ProtectedItem from "../types/ProtectedItem.mjs";
import {
    NameAndOptionalUID,
    _decode_NameAndOptionalUID,
} from "../modules/SelectedAttributeTypes/NameAndOptionalUID.ta.mjs";
import {
    type DistinguishedName,
    _decode_DistinguishedName,
} from "../modules/InformationFramework/DistinguishedName.ta.mjs";
import { compareRDNSequence } from "@wildboar/dn";
import { valueEqualityMatcher } from "../matching/valueEqualityMatcher.mjs";
import { evaluateFilter, type EvaluateFilterSettings } from "../utils/evaluateFilter.mjs";
import {
    EntryInformation,
} from "../modules/DirectoryAbstractService/EntryInformation.ta.mjs";
import {
    Attribute,
} from "../modules/InformationFramework/Attribute.ta.mjs";
import compareElements from "../comparators/compareElements.mjs";

/**
 * @summary Whether the requested item is protected by the `ProtectedItems`.
 * @description
 *
 * This function determines whether the requested item is targeted by the
 * `ProtectedItems`.
 *
 * @param {object} request The aspect of the entry to which authorization is
 *  being requested.
 * @param {ProtectedItems} protectedItems The data structure that defines what
 *  is protected by the ACI item.
 * @param {function} getEqualityMatcher A function that takes an object
 *  identifier and returns another function (if one can be found) that can be
 *  used to compare two values of the same attribute type.
 * @returns `true` if the requested item is protected by the `ProtectedItems`,
 *  `false` if it is not, or `undefined` if the class refinement cannot be
 *  determined (for example, because its recursion budget is exhausted).
 * @function
 */
export
function itemIsProtected (
    request: ProtectedItem,
    protectedItems: ProtectedItems,
    requester: NameAndOptionalUID | undefined | null,
    settings: EvaluateFilterSettings,
): boolean | undefined {
    if ("entry" in request) {
        if (protectedItems.classes) {
            return objectClassesWithinRefinement(request.entry, protectedItems.classes);
        } else if (protectedItems.entry === null) {
            return true;
        } else {
            return false;
        }
    } else if ("attributeType" in request) {
        return Boolean(
            (
                (protectedItems.allUserAttributeTypes === null)
                && !request.operational
            )
            || protectedItems.attributeType
                ?.some((at) => request.attributeType.isEqualTo(at))
            || (
                (protectedItems.allUserAttributeTypesAndValues === null)
                && !request.operational
            )
        );
    } else if ("value" in request) {
        return Boolean(
            protectedItems.allAttributeValues
                ?.some((av) => request.value.type_.isEqualTo(av))
            || (
                (protectedItems.allUserAttributeTypesAndValues === null)
                && !request.operational
            )
            || protectedItems.attributeValue
                ?.some((av) => {
                    if (!request.value.type_.isEqualTo(av.type_)) {
                        return false;
                    }
                    const matcher = settings.getEqualityMatcher(av.type_);
                    return matcher
                        ? matcher(av.value, request.value, settings.getEqualityMatcher) === true
                        : compareElements(av.value, request.value.value);
                })
            || (
                requester
                && protectedItems.selfValue?.some((type_) => type_.isEqualTo(request.value.type_))
                && ((): boolean => {
                    try {
                        const elements = request.value.value.sequence;
                        const valueIsNameAndOptionalUID: boolean = (
                            (elements.length >= 1)
                            && (elements[0].tagClass === ASN1TagClass.universal)
                            && (elements[0].tagNumber === ASN1UniversalType.sequence)
                        );
                        const dn: DistinguishedName = valueIsNameAndOptionalUID
                            ? _decode_NameAndOptionalUID(request.value.value).dn
                            : _decode_DistinguishedName(request.value.value);
                        return compareRDNSequence(
                            dn,
                            requester.dn,
                            valueEqualityMatcher(settings.getEqualityMatcher),
                        );
                    } catch {
                        return false;
                    }
                })()
            )
            || (
                protectedItems.rangeOfValues
                && evaluateFilter(
                    protectedItems.rangeOfValues,
                    [
                        new EntryInformation(
                            {
                                rdnSequence: [],
                            },
                            undefined,
                            [
                                {
                                    attribute: new Attribute(
                                        request.value.type_,
                                        [ request.value.value ],
                                        undefined,
                                    ),
                                },
                            ],
                        ),
                    ],
                    settings,
                )?.matched
            )
            // restrictedBy is supported, but not in this function.
            /*
            Kept commented out to clarify here that this field is not used in
            determining whether the item is protected. ITU-T Recommendation
            X.501 (2019), Section 18.4.2.4, states that:

            "This is only relevant when the permission sought is add, and all
            context assertions shall be satisfied. It does not provide for
            general use of contexts to differentiate protected items for other
            permissions."
            */
            // || (
            //     contexts?.length
            //     && protectedItems.contexts?.every((ca) => evaluateContextAssertion(
            //         ca,
            //         contexts,
            //         settings.getContextMatcher,
            //         settings.determineAbsentMatch,
            //     )))
        );
    } else {
        return false; // For lack of knowing what to do.
    }
}

export default itemIsProtected;
