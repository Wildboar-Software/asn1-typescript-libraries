/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
import { _decode_characterMatchTypes_Type, _encode_characterMatchTypes_Type, characterMatchTypes_Type } from "../SelectedAttributeTypes/characterMatchTypes-Type.ta.mjs";
// export { characterMatchTypes_Type, _enum_for_characterMatchTypes_Type, characterMatchTypes_Type_characterExact /* IMPORTED_LONG_ENUMERATION_ITEM */, characterExact /* IMPORTED_SHORT_ENUMERATION_ITEM */, characterMatchTypes_Type_characterCaseIgnore /* IMPORTED_LONG_ENUMERATION_ITEM */, characterCaseIgnore /* IMPORTED_SHORT_ENUMERATION_ITEM */, characterMatchTypes_Type_characterMapped /* IMPORTED_LONG_ENUMERATION_ITEM */, characterMapped /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_characterMatchTypes_Type, _encode_characterMatchTypes_Type } from "../SelectedAttributeTypes/characterMatchTypes-Type.ta.mjs";
import { id_cat_characterMatchTypes } from "../SelectedAttributeTypes/id-cat-characterMatchTypes.va.mjs";
// export { id_cat_characterMatchTypes } from "../SelectedAttributeTypes/id-cat-characterMatchTypes.va.mjs";


/**
 * @summary characterMatchTypes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * characterMatchTypes ATTRIBUTE ::= {
 *   WITH SYNTAX
 *     ENUMERATED {characterExact(0), characterCaseIgnore(1), characterMapped(2)}
 *   SINGLE VALUE  TRUE
 *   ID            id-cat-characterMatchTypes
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<characterMatchTypes_Type>}
 * @implements {ATTRIBUTE<characterMatchTypes_Type>}
 */
export
const characterMatchTypes: ATTRIBUTE<characterMatchTypes_Type> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_characterMatchTypes_Type,
    },
    encoderFor: {
        "&Type": _encode_characterMatchTypes_Type,
    },
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&id": id_cat_characterMatchTypes /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
