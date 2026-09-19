/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
import { HierarchyBelow, _decode_HierarchyBelow, _encode_HierarchyBelow } from "../InformationFramework/HierarchyBelow.ta.mjs";
// export { HierarchyBelow, _decode_HierarchyBelow, _encode_HierarchyBelow } from "../InformationFramework/HierarchyBelow.ta.mjs";
import { id_oa_hierarchyBelow } from "../InformationFramework/id-oa-hierarchyBelow.va.mjs";
// export { id_oa_hierarchyBelow } from "../InformationFramework/id-oa-hierarchyBelow.va.mjs";


/**
 * @summary hierarchyBelow
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * hierarchyBelow ATTRIBUTE ::= {
 *   WITH SYNTAX             HierarchyBelow
 *   EQUALITY MATCHING RULE  booleanMatch
 *   SINGLE VALUE            TRUE
 *   NO USER MODIFICATION    TRUE
 *   USAGE                   directoryOperation
 *   ID                      id-oa-hierarchyBelow }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<HierarchyBelow>}
 * @implements {ATTRIBUTE<HierarchyBelow>}
 */
export
const hierarchyBelow: ATTRIBUTE<HierarchyBelow> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_HierarchyBelow,
    },
    encoderFor: {
        "&Type": _encode_HierarchyBelow,
    },
    "&equality-match": booleanMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&no-user-modification": true /* OBJECT_FIELD_SETTING */,
    "&usage": directoryOperation /* OBJECT_FIELD_SETTING */,
    "&id": id_oa_hierarchyBelow /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
