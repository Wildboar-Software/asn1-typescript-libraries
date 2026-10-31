/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { h320_id_at } from "../H323-X500-Schema/h320-id-at.va.mjs";


/**
 * @summary h320IdentityCC
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * h320IdentityCC ATTRIBUTE ::= {
 *   WITH SYNTAX             IA5String(SIZE (1..3))
 *   EQUALITY MATCHING RULE  caseIgnoreIA5Match
 *   ID                      {h320-id-at  1}
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const h320IdentityCC: ATTRIBUTE = undefined;

/* eslint-enable */
