/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
import { EnhancedGuide, _decode_EnhancedGuide, _encode_EnhancedGuide } from "../SelectedAttributeTypes/EnhancedGuide.ta.mjs";
// export { EnhancedGuide, _decode_EnhancedGuide, _encode_EnhancedGuide } from "../SelectedAttributeTypes/EnhancedGuide.ta.mjs";
import { id_at_enhancedSearchGuide } from "../SelectedAttributeTypes/id-at-enhancedSearchGuide.va.mjs";
// export { id_at_enhancedSearchGuide } from "../SelectedAttributeTypes/id-at-enhancedSearchGuide.va.mjs";


/**
 * @summary enhancedSearchGuide
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * enhancedSearchGuide ATTRIBUTE ::= {
 *   WITH SYNTAX  EnhancedGuide
 *   ID           id-at-enhancedSearchGuide
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<EnhancedGuide>}
 * @implements {ATTRIBUTE<EnhancedGuide>}
 */
export
const enhancedSearchGuide: ATTRIBUTE<EnhancedGuide> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_EnhancedGuide,
    },
    encoderFor: {
        "&Type": _encode_EnhancedGuide,
    },
    "&id": id_at_enhancedSearchGuide /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
