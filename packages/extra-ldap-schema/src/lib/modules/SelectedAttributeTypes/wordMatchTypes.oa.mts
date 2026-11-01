/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
import { _decode_WordMatchTypes, _encode_WordMatchTypes, WordMatchTypes } from "../SelectedAttributeTypes/WordMatchTypes.ta.mjs";
// export { WordMatchTypes, _enum_for_WordMatchTypes, WordMatchTypes_wordExact /* IMPORTED_LONG_ENUMERATION_ITEM */, wordExact /* IMPORTED_SHORT_ENUMERATION_ITEM */, WordMatchTypes_wordTruncated /* IMPORTED_LONG_ENUMERATION_ITEM */, wordTruncated /* IMPORTED_SHORT_ENUMERATION_ITEM */, WordMatchTypes_wordPhonetic /* IMPORTED_LONG_ENUMERATION_ITEM */, wordPhonetic /* IMPORTED_SHORT_ENUMERATION_ITEM */, WordMatchTypes_wordProviderDefined /* IMPORTED_LONG_ENUMERATION_ITEM */, wordProviderDefined /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_WordMatchTypes, _encode_WordMatchTypes } from "../SelectedAttributeTypes/WordMatchTypes.ta.mjs";
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
 *   WITH SYNTAX   WordMatchTypes
 *   SINGLE VALUE  TRUE
 *   ID            id-cat-wordMatchType }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<WordMatchTypes>}
 * @implements {ATTRIBUTE<WordMatchTypes>}
 */
export
const wordMatchTypes: ATTRIBUTE<WordMatchTypes> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_WordMatchTypes,
    },
    encoderFor: {
        "&Type": _encode_WordMatchTypes,
    },
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&id": id_cat_wordMatchType /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
