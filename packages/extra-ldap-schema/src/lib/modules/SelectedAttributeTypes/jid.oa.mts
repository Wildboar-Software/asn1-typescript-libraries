/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { Jid, _decode_Jid, _encode_Jid } from "../SelectedAttributeTypes/Jid.ta.mjs";
// export { jidMatch } from "../SelectedAttributeTypes/jidMatch.oa.mjs";
// export { jidString } from "../SelectedAttributeTypes/jidString.oa.mjs";
// export { id_at_jid } from "../SelectedAttributeTypes/id-at-jid.va.mjs";


/**
 * @summary jid
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * jid ATTRIBUTE ::= {
 *   WITH SYNTAX             Jid
 *   EQUALITY MATCHING RULE  jidMatch
 *   SINGLE VALUE            TRUE
 *   LDAP-SYNTAX             jidString.&id
 *   LDAP-NAME               {"Jabber identifier"}
 *   ID                      id-at-jid }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const jid: ATTRIBUTE = undefined;

/* eslint-enable */
