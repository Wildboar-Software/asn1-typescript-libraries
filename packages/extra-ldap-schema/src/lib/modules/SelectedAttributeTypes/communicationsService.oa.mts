/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { CommunicationsService, _decode_CommunicationsService, _encode_CommunicationsService } from "../SelectedAttributeTypes/CommunicationsService.ta.mjs";
// export { objectIdentifierMatch } from "../InformationFramework/objectIdentifierMatch.oa.mjs";
// export { oid } from "../SelectedAttributeTypes/oid.oa.mjs";
// export { id_at_communicationsService } from "../SelectedAttributeTypes/id-at-communicationsService.va.mjs";


/**
 * @summary communicationsService
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * communicationsService ATTRIBUTE ::= {
 *   WITH SYNTAX              CommunicationsService
 *   EQUALITY MATCHING RULE   objectIdentifierMatch
 *   LDAP-SYNTAX              oid.&id
 *   LDAP-NAME                {"communicationsService"}
 *   ID                       id-at-communicationsService }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const communicationsService: ATTRIBUTE = undefined;

/* eslint-enable */
