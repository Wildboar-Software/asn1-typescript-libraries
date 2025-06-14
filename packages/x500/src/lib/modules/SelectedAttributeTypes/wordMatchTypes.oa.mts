/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_cat_wordMatchType } from "../SelectedAttributeTypes/id-cat-wordMatchType.va.mjs";
import {
    WordMatchTypes,
    _decode_WordMatchTypes,
    _encode_WordMatchTypes,
} from "../SelectedAttributeTypes/WordMatchTypes.ta.mjs";
/* START_OF_SYMBOL_DEFINITION wordMatchTypes */
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
export const wordMatchTypes: ATTRIBUTE<WordMatchTypes> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_WordMatchTypes,
    },
    encoderFor: {
        "&Type": _encode_WordMatchTypes,
    },
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&id": id_cat_wordMatchType /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION wordMatchTypes */

/* eslint-enable */
