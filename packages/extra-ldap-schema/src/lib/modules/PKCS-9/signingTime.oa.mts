/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { SigningTime, _decode_SigningTime, _encode_SigningTime } from "../PKCS-9/SigningTime.ta.mjs";
// export { signingTimeMatch } from "../PKCS-9/signingTimeMatch.oa.mjs";
// export { pkcs_9_at_signingTime } from "../PKCS-9/pkcs-9-at-signingTime.va.mjs";


/**
 * @summary signingTime
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * signingTime ATTRIBUTE ::= {
 *         WITH SYNTAX SigningTime
 *         EQUALITY MATCHING RULE signingTimeMatch
 *         SINGLE VALUE TRUE
 *         ID pkcs-9-at-signingTime
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const signingTime: ATTRIBUTE = undefined;

/* eslint-enable */
