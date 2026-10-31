/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { DirectoryString, _decode_DirectoryString, _encode_DirectoryString } from "../SelectedAttributeTypes/DirectoryString.ta.mjs";
// export { pkcs_9_ub_unstructuredAddress } from "../PKCS-9/pkcs-9-ub-unstructuredAddress.va.mjs";
// export { caseIgnoreMatch } from "../SelectedAttributeTypes/caseIgnoreMatch.oa.mjs";
// export { pkcs_9_at_unstructuredAddress } from "../PKCS-9/pkcs-9-at-unstructuredAddress.va.mjs";


/**
 * @summary unstructuredAddress
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * unstructuredAddress ATTRIBUTE ::= {
 *         WITH SYNTAX DirectoryString {pkcs-9-ub-unstructuredAddress}
 *         EQUALITY MATCHING RULE caseIgnoreMatch
 *         ID pkcs-9-at-unstructuredAddress
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const unstructuredAddress: ATTRIBUTE = undefined;

/* eslint-enable */
