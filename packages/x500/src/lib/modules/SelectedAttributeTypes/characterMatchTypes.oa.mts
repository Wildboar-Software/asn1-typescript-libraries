/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
import {
    CharacterMatchTypes,
    _decode_CharacterMatchTypes,
    _encode_CharacterMatchTypes,
} from "../SelectedAttributeTypes/CharacterMatchTypes.ta.mjs";
import { id_cat_characterMatchTypes } from "../SelectedAttributeTypes/id-cat-characterMatchTypes.va.mjs";
/* START_OF_SYMBOL_DEFINITION characterMatchTypes */
/**
 * @summary characterMatchTypes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * characterMatchTypes ATTRIBUTE ::= {
 *   WITH SYNTAX   CharacterMatchTypes
 *   SINGLE VALUE  TRUE
 *   ID            id-cat-characterMatchTypes }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<CharacterMatchTypes>}
 * @implements {ATTRIBUTE<CharacterMatchTypes>}
 */
export const characterMatchTypes: ATTRIBUTE<CharacterMatchTypes> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_CharacterMatchTypes,
    },
    encoderFor: {
        "&Type": _encode_CharacterMatchTypes,
    },
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&id": id_cat_characterMatchTypes /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION characterMatchTypes */

/* eslint-enable */
