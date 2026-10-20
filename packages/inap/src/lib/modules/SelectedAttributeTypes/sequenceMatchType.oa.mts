/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
import { _decode_sequenceMatchType_Type, _encode_sequenceMatchType_Type, sequenceMatchType_Type } from "../SelectedAttributeTypes/sequenceMatchType-Type.ta.mjs";
// export { sequenceMatchType_Type, _enum_for_sequenceMatchType_Type, sequenceMatchType_Type_sequenceExact /* IMPORTED_LONG_ENUMERATION_ITEM */, sequenceExact /* IMPORTED_SHORT_ENUMERATION_ITEM */, sequenceMatchType_Type_sequenceDeletion /* IMPORTED_LONG_ENUMERATION_ITEM */, sequenceDeletion /* IMPORTED_SHORT_ENUMERATION_ITEM */, sequenceMatchType_Type_sequenceRestrictedDeletion /* IMPORTED_LONG_ENUMERATION_ITEM */, sequenceRestrictedDeletion /* IMPORTED_SHORT_ENUMERATION_ITEM */, sequenceMatchType_Type_sequencePermutation /* IMPORTED_LONG_ENUMERATION_ITEM */, sequencePermutation /* IMPORTED_SHORT_ENUMERATION_ITEM */, sequenceMatchType_Type_sequencePermutationAndDeletion /* IMPORTED_LONG_ENUMERATION_ITEM */, sequencePermutationAndDeletion /* IMPORTED_SHORT_ENUMERATION_ITEM */, sequenceMatchType_Type_sequenceProviderDefined /* IMPORTED_LONG_ENUMERATION_ITEM */, sequenceProviderDefined /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_sequenceMatchType_Type, _encode_sequenceMatchType_Type } from "../SelectedAttributeTypes/sequenceMatchType-Type.ta.mjs";
import { id_cat_sequenceMatchType } from "../SelectedAttributeTypes/id-cat-sequenceMatchType.va.mjs";
// export { id_cat_sequenceMatchType } from "../SelectedAttributeTypes/id-cat-sequenceMatchType.va.mjs";


/**
 * @summary sequenceMatchType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * sequenceMatchType ATTRIBUTE ::= {
 *   WITH SYNTAX
 *     ENUMERATED {sequenceExact(0), sequenceDeletion(1),
 *                 sequenceRestrictedDeletion(2), sequencePermutation(3),
 *                 sequencePermutationAndDeletion(4), sequenceProviderDefined(5)}
 *   SINGLE VALUE  TRUE
 *   ID            id-cat-sequenceMatchType
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<sequenceMatchType_Type>}
 * @implements {ATTRIBUTE<sequenceMatchType_Type>}
 */
export
const sequenceMatchType: ATTRIBUTE<sequenceMatchType_Type> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_sequenceMatchType_Type,
    },
    encoderFor: {
        "&Type": _encode_sequenceMatchType_Type,
    },
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&id": id_cat_sequenceMatchType /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
