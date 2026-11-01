/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_at_eligibilityNoSubtypesFilter } from "../OrganizationAndGroupSchema/id-at-eligibilityNoSubtypesFilter.va.mjs";
// export { id_at_eligibilityNoSubtypesFilter } from "../OrganizationAndGroupSchema/id-at-eligibilityNoSubtypesFilter.va.mjs";


/**
 * @summary eligibilityNoSubtypesFilter
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * eligibilityNoSubtypesFilter ATTRIBUTE ::= {
 *     WITH SYNTAX                 Filter
 *     ID                          id-at-eligibilityNoSubtypesFilter
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<Filter>}
 * @implements {ATTRIBUTE<Filter>}
 */
export
const eligibilityNoSubtypesFilter: ATTRIBUTE<Filter> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_Filter,
    },
    encoderFor: {
        "&Type": _encode_Filter,
    },
    "&id": id_at_eligibilityNoSubtypesFilter /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
