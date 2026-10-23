/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
import { ACIItem, _decode_ACIItem, _encode_ACIItem } from "../IN-SCF-SDF-datatypes/ACIItem.ta.mjs";
// export { ACIItem, _decode_ACIItem, _encode_ACIItem } from "../IN-SCF-SDF-datatypes/ACIItem.ta.mjs";
import { directoryStringFirstComponentMatch } from "../SelectedAttributeTypes/directoryStringFirstComponentMatch.oa.mjs";
// export { directoryStringFirstComponentMatch } from "../SelectedAttributeTypes/directoryStringFirstComponentMatch.oa.mjs";
import { id_aca_entryACI } from "../IN-object-identifiers/id-aca-entryACI.va.mjs";
// export { id_aca_entryACI } from "../IN-object-identifiers/id-aca-entryACI.va.mjs";


/**
 * @summary entryACI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * entryACI ATTRIBUTE ::= {
 *   WITH SYNTAX             ACIItem
 *   EQUALITY MATCHING RULE  directoryStringFirstComponentMatch
 *   USAGE                   directoryOperation
 *   ID                      id-aca-entryACI
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<ACIItem>}
 * @implements {ATTRIBUTE<ACIItem>}
 */
export
const entryACI: ATTRIBUTE<ACIItem> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_ACIItem,
    },
    encoderFor: {
        "&Type": _encode_ACIItem,
    },
    "&equality-match": directoryStringFirstComponentMatch /* OBJECT_FIELD_SETTING */,
    "&usage": directoryOperation /* OBJECT_FIELD_SETTING */,
    "&id": id_aca_entryACI /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
