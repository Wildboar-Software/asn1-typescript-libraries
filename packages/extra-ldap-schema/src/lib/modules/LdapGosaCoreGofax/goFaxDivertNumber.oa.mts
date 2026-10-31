/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { FacsimileTelephoneNumber, _decode_FacsimileTelephoneNumber, _encode_FacsimileTelephoneNumber } from "../SelectedAttributeTypes/FacsimileTelephoneNumber.ta.mjs";
// export { facsimileTelephoneNr } from "../SelectedAttributeTypes/facsimileTelephoneNr.oa.mjs";
// export { id_at_goFaxDivertNumber } from "../LdapGosaCoreGofax/id-at-goFaxDivertNumber.va.mjs";


/**
 * @summary goFaxDivertNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * goFaxDivertNumber ATTRIBUTE ::= {
 *   WITH SYNTAX               FacsimileTelephoneNumber
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               facsimileTelephoneNr.&id
 *   LDAP-NAME                 {"goFaxDivertNumber"}
 *   LDAP-DESC                 "for fax diversion services"
 *   ID                        id-at-goFaxDivertNumber }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const goFaxDivertNumber: ATTRIBUTE = undefined;

/* eslint-enable */
