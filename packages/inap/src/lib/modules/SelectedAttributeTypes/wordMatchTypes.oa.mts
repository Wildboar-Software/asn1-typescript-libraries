/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
import { _decode_wordMatchTypes_Type, _encode_wordMatchTypes_Type, wordMatchTypes_Type } from "../SelectedAttributeTypes/wordMatchTypes-Type.ta.mjs";
// export { wordMatchTypes_Type, _enum_for_wordMatchTypes_Type, wordMatchTypes_Type_wordExact /* IMPORTED_LONG_ENUMERATION_ITEM */, wordExact /* IMPORTED_SHORT_ENUMERATION_ITEM */, wordMatchTypes_Type_wordTruncated /* IMPORTED_LONG_ENUMERATION_ITEM */, wordTruncated /* IMPORTED_SHORT_ENUMERATION_ITEM */, wordMatchTypes_Type_wordPhonetic /* IMPORTED_LONG_ENUMERATION_ITEM */, wordPhonetic /* IMPORTED_SHORT_ENUMERATION_ITEM */, wordMatchTypes_Type_wordProviderDefined /* IMPORTED_LONG_ENUMERATION_ITEM */, wordProviderDefined /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_wordMatchTypes_Type, _encode_wordMatchTypes_Type } from "../SelectedAttributeTypes/wordMatchTypes-Type.ta.mjs";
import { id_cat_wordMatchType } from "../SelectedAttributeTypes/id-cat-wordMatchType.va.mjs";
// export { id_cat_wordMatchType } from "../SelectedAttributeTypes/id-cat-wordMatchType.va.mjs";


/**
 * @summary wordMatchTypes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * wordMatchTypes ATTRIBUTE ::= {
 *   WITH SYNTAX
 *     ENUMERATED {wordExact(0), wordTruncated(1), wordPhonetic(2),
 *                 wordProviderDefined(3)}
 *   SINGLE VALUE  TRUE
 *   ID            id-cat-wordMatchType
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<wordMatchTypes_Type>}
 * @implements {ATTRIBUTE<wordMatchTypes_Type>}
 */
export
const wordMatchTypes: ATTRIBUTE<wordMatchTypes_Type> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_wordMatchTypes_Type,
    },
    encoderFor: {
        "&Type": _encode_wordMatchTypes_Type,
    },
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&id": id_cat_wordMatchType /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
