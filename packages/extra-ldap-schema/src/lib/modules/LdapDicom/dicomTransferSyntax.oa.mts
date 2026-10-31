/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { objectIdentifierMatch } from "../InformationFramework/objectIdentifierMatch.oa.mjs";
// export { oid } from "../SelectedAttributeTypes/oid.oa.mjs";
// export { id_at_dicomTransferSyntax } from "../LdapDicom/id-at-dicomTransferSyntax.va.mjs";


/**
 * @summary dicomTransferSyntax
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dicomTransferSyntax ATTRIBUTE ::= {
 *   WITH SYNTAX               OBJECT IDENTIFIER
 *   EQUALITY MATCHING RULE    objectIdentifierMatch
 *   LDAP-SYNTAX               oid.&id
 *   LDAP-NAME                 {"dicomTransferSyntax"}
 *   LDAP-DESC                 "A Transfer Syntax UID"
 *   ID                        id-at-dicomTransferSyntax }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const dicomTransferSyntax: ATTRIBUTE = undefined;

/* eslint-enable */
