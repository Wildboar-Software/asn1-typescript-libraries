import {
    ASN1TagClass,
    ASN1UniversalType,
} from "asn1-ts";
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
    DistinguishedName,
    _decode_DistinguishedName,
} from "../modules/InformationFramework/DistinguishedName.ta.mjs";
import compareDistinguishedName from "../comparators/compareDistinguishedName.mjs";
import { evaluateFilter, EvaluateFilterSettings } from "../utils/evaluateFilter.mjs";
import {
    EntryInformation,
} from "@wildboar/x500/src/lib/modules/DirectoryAbstractService/EntryInformation.ta.mjs";
import {
    Attribute,
} from "@wildboar/x500/src/lib/modules/InformationFramework/Attribute.ta.mjs";
import evaluateContextAssertion from "../utils/evaluateContextAssertion.mjs";

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
    requester: NameAndOptionalUID | undefined | null,
    settings: EvaluateFilterSettings,
): boolean {
    if ("entry" in request) {
        if (protectedItems.classes) {
            return objectClassesWithinRefinement(request.entry, protectedItems.classes);
        } else if (protectedItems.entry === null) {
            return true;
        } else {
            return false;
        }
    } else if ("attributeType" in request) {
        return (
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
        return (
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
                    if (!matcher) {
                        return false;
                    }
                    return matcher(av.value, request.value.value);
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
                        return compareDistinguishedName(
                            dn,
                            requester.dn,
                            settings.getEqualityMatcher,
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
            // || protectedItems.restrictedBy // Probably will never support this.
            //     ?.some((rb) => rb.type_.toString() === request.value.type_.toString())
            || (
                request.contexts?.length
                && protectedItems.contexts?.every((ca) => evaluateContextAssertion(
                    ca,
                    request.contexts,
                    settings.getContextMatcher,
                    settings.determineAbsentMatch,
                )))
        );
    } else {
        return false; // For lack of knowing what to do.
    }
}

export default itemIsProtected;
