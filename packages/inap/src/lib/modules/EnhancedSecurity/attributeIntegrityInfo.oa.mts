/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
import { AttributeIntegrityInfo, _decode_AttributeIntegrityInfo, _encode_AttributeIntegrityInfo } from "../EnhancedSecurity/AttributeIntegrityInfo.ta.mjs";
// export { AttributeIntegrityInfo, _decode_AttributeIntegrityInfo, _encode_AttributeIntegrityInfo } from "../EnhancedSecurity/AttributeIntegrityInfo.ta.mjs";
import { id_at_attributeIntegrityInfo } from "../EnhancedSecurity/id-at-attributeIntegrityInfo.va.mjs";
// export { id_at_attributeIntegrityInfo } from "../EnhancedSecurity/id-at-attributeIntegrityInfo.va.mjs";


/**
 * @summary attributeIntegrityInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * attributeIntegrityInfo ATTRIBUTE ::= {
 *   WITH SYNTAX  AttributeIntegrityInfo
 *   ID           id-at-attributeIntegrityInfo
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<AttributeIntegrityInfo>}
 * @implements {ATTRIBUTE<AttributeIntegrityInfo>}
 */
export
const attributeIntegrityInfo: ATTRIBUTE<AttributeIntegrityInfo> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_AttributeIntegrityInfo,
    },
    encoderFor: {
        "&Type": _encode_AttributeIntegrityInfo,
    },
    "&id": id_at_attributeIntegrityInfo /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
