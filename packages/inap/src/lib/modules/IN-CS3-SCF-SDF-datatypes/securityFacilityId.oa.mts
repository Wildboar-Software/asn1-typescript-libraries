/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
import { type SF_CODE, _decode_SF_CODE, _encode_SF_CODE } from "../IN-CS3-SCF-SDF-datatypes/SF-CODE.ta.mjs";
// export { SF_CODE, _decode_SF_CODE, _encode_SF_CODE } from "../IN-CS3-SCF-SDF-datatypes/SF-CODE.ta.mjs";
import { objectIdentifierMatch } from "../InformationFramework/objectIdentifierMatch.oa.mjs";
// export { objectIdentifierMatch } from "../InformationFramework/objectIdentifierMatch.oa.mjs";
import { id_at_securityFacilityId } from "../IN-CS3-object-identifiers/id-at-securityFacilityId.va.mjs";
// export { id_at_securityFacilityId } from "../IN-CS3-object-identifiers/id-at-securityFacilityId.va.mjs";


/**
 * @summary securityFacilityId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * securityFacilityId ATTRIBUTE ::= {
 *   WITH SYNTAX SF-CODE EQUALITY MATCHING RULE  objectIdentifierMatch
 *   SINGLE VALUE                                TRUE
 *   ID                                          id-at-securityFacilityId
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<SF_CODE>}
 * @implements {ATTRIBUTE<SF_CODE>}
 */
export
const securityFacilityId: ATTRIBUTE<SF_CODE> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_SF_CODE,
    },
    encoderFor: {
        "&Type": _encode_SF_CODE,
    },
    "&equality-match": objectIdentifierMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&id": id_at_securityFacilityId /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
