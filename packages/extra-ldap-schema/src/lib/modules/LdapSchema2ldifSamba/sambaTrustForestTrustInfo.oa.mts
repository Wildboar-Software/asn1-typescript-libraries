/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { DirectoryString, _decode_DirectoryString, _encode_DirectoryString } from "../SelectedAttributeTypes/DirectoryString.ta.mjs";
// export { caseExactMatch } from "../SelectedAttributeTypes/caseExactMatch.oa.mjs";
// export { directoryString } from "../SelectedAttributeTypes/directoryString.oa.mjs";
// export { id_at_sambaTrustForestTrustInfo } from "../LdapSchema2ldifSamba/id-at-sambaTrustForestTrustInfo.va.mjs";


/**
 * @summary sambaTrustForestTrustInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * sambaTrustForestTrustInfo ATTRIBUTE ::= {
 *   WITH SYNTAX               DirectoryString{1050}
 *   EQUALITY MATCHING RULE    caseExactMatch
 *   LDAP-SYNTAX               directoryString.&id
 *   LDAP-NAME                 {"sambaTrustForestTrustInfo"}
 *   LDAP-DESC                 "Forest trust information for a trusted domain object"
 *   ID                        id-at-sambaTrustForestTrustInfo }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const sambaTrustForestTrustInfo: ATTRIBUTE = undefined;

/* eslint-enable */
