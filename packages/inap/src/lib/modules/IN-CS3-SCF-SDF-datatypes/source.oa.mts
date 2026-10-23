/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
import { SourceType, _decode_SourceType, _encode_SourceType } from "../IN-CS3-SCF-SDF-datatypes/SourceType.ta.mjs";
// export { SourceType, _decode_SourceType, _encode_SourceType } from "../IN-CS3-SCF-SDF-datatypes/SourceType.ta.mjs";
import { id_at_source } from "../IN-CS3-object-identifiers/id-at-source.va.mjs";
// export { id_at_source } from "../IN-CS3-object-identifiers/id-at-source.va.mjs";


/**
 * @summary source
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * source ATTRIBUTE ::= {
 *   WITH SYNTAX   SourceType
 *   SINGLE VALUE  TRUE
 *   ID            id-at-source
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<SourceType>}
 * @implements {ATTRIBUTE<SourceType>}
 */
export
const source: ATTRIBUTE<SourceType> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_SourceType,
    },
    encoderFor: {
        "&Type": _encode_SourceType,
    },
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&id": id_at_source /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
