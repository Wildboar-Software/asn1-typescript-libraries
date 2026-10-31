/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { labeledURI } from "../OpenLDAPCoreSchema/labeledURI.oa.mjs";
// export { caseExactMatch } from "../SelectedAttributeTypes/caseExactMatch.oa.mjs";
// export { caseExactOrderingMatch } from "../SelectedAttributeTypes/caseExactOrderingMatch.oa.mjs";
// export { caseExactSubstringsMatch } from "../SelectedAttributeTypes/caseExactSubstringsMatch.oa.mjs";
// export { directoryString } from "../SelectedAttributeTypes/directoryString.oa.mjs";
// export { id_nsdsat } from "../DynGroup/id-nsdsat.va.mjs";


/**
 * @summary memberURL
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * memberURL ATTRIBUTE ::= {
 *     SUBTYPE OF                  labeledURI
 *     EQUALITY MATCHING RULE         caseExactMatch
 *     ORDERING MATCHING RULE        caseExactOrderingMatch
 *     SUBSTRINGS MATCHING RULE     caseExactSubstringsMatch
 *     LDAP-SYNTAX                 directoryString.&id
 *     LDAP-NAME                   {"memberURL"}
 *     LDAP-DESC "Identifies an URL associated with each member of a group. Any type of labeled URL can be used."
 *     ID                          { id-nsdsat 198 }
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const memberURL: ATTRIBUTE = undefined;

/* eslint-enable */
