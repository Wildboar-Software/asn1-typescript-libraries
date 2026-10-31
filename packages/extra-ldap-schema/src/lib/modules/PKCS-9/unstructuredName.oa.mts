/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { PKCS9String, _decode_PKCS9String, _encode_PKCS9String } from "../PKCS-9/PKCS9String.ta.mjs";
// export { pkcs_9_ub_unstructuredName } from "../PKCS-9/pkcs-9-ub-unstructuredName.va.mjs";
// export { pkcs9CaseIgnoreMatch } from "../PKCS-9/pkcs9CaseIgnoreMatch.oa.mjs";
// export { pkcs_9_at_unstructuredName } from "../PKCS-9/pkcs-9-at-unstructuredName.va.mjs";


/**
 * @summary unstructuredName
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * unstructuredName ATTRIBUTE ::= {
 *         WITH SYNTAX PKCS9String {pkcs-9-ub-unstructuredName}
 *         EQUALITY MATCHING RULE pkcs9CaseIgnoreMatch
 *         ID pkcs-9-at-unstructuredName
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const unstructuredName: ATTRIBUTE = undefined;

/* eslint-enable */
