/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_not_multipleMatchingLocalities } from "../SelectedAttributeTypes/id-not-multipleMatchingLocalities.va.mjs";
import {
    MultipleMatchingLocalities,
    _decode_MultipleMatchingLocalities,
    _encode_MultipleMatchingLocalities,
} from "../SelectedAttributeTypes/MultipleMatchingLocalities.ta.mjs";
/* START_OF_SYMBOL_DEFINITION multipleMatchingLocalities */
/**
 * @summary multipleMatchingLocalities
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * multipleMatchingLocalities ATTRIBUTE ::= {
 *   WITH SYNTAX              MultipleMatchingLocalities
 *   ID                       id-not-multipleMatchingLocalities }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<MultipleMatchingLocalities>}
 * @implements {ATTRIBUTE<MultipleMatchingLocalities>}
 */
export const multipleMatchingLocalities: ATTRIBUTE<MultipleMatchingLocalities> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_MultipleMatchingLocalities,
    },
    encoderFor: {
        "&Type": _encode_MultipleMatchingLocalities,
    },
    "&id": id_not_multipleMatchingLocalities /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION multipleMatchingLocalities */

/* eslint-enable */
