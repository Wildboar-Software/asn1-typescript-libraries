/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
import { DT_Code, _decode_DT_Code, _encode_DT_Code } from "../IN-SCF-SDF-datatypes/DT-Code.ta.mjs";
// export { DT_Code, _decode_DT_Code, _encode_DT_Code } from "../IN-SCF-SDF-datatypes/DT-Code.ta.mjs";
import { objectIdentifierMatch } from "../InformationFramework/objectIdentifierMatch.oa.mjs";
// export { objectIdentifierMatch } from "../InformationFramework/objectIdentifierMatch.oa.mjs";
import { id_at_stockId } from "../IN-object-identifiers/id-at-stockId.va.mjs";
// export { id_at_stockId } from "../IN-object-identifiers/id-at-stockId.va.mjs";


/**
 * @summary stockId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * stockId ATTRIBUTE ::= {
 *   WITH SYNTAX             DT-Code
 *   EQUALITY MATCHING RULE  objectIdentifierMatch
 *   SINGLE VALUE            TRUE
 *   ID                      id-at-stockId
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<DT_Code>}
 * @implements {ATTRIBUTE<DT_Code>}
 */
export
const stockId: ATTRIBUTE<DT_Code> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_DT_Code,
    },
    encoderFor: {
        "&Type": _encode_DT_Code,
    },
    "&equality-match": objectIdentifierMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&id": id_at_stockId /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
