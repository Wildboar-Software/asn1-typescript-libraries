/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { DirectoryString, _decode_DirectoryString, _encode_DirectoryString } from "../SelectedAttributeTypes/DirectoryString.ta.mjs";
// export { pkcs_9_ub_pseudonym } from "../PKCS-9/pkcs-9-ub-pseudonym.va.mjs";
// export { caseExactMatch } from "../SelectedAttributeTypes/caseExactMatch.oa.mjs";
// export { id_at_pseudonym } from "../PKCS-9/id-at-pseudonym.va.mjs";


/**
 * @summary pseudonym
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * pseudonym ATTRIBUTE ::= {
 *         WITH SYNTAX DirectoryString {pkcs-9-ub-pseudonym}
 *         EQUALITY MATCHING RULE caseExactMatch
 *         ID id-at-pseudonym
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const pseudonym: ATTRIBUTE = undefined;

/* eslint-enable */
