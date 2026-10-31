/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { PresentationAddress, _decode_PresentationAddress, _encode_PresentationAddress } from "../SelectedAttributeTypes/PresentationAddress.ta.mjs";
// export { presentationAddressMatch } from "../SelectedAttributeTypes/presentationAddressMatch.oa.mjs";
// export { presentationAddr } from "../SelectedAttributeTypes/presentationAddr.oa.mjs";
// export { id_at_presentationAddress } from "../SelectedAttributeTypes/id-at-presentationAddress.va.mjs";


/**
 * @summary presentationAddress
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * presentationAddress ATTRIBUTE ::= {
 *   WITH SYNTAX              PresentationAddress
 *   EQUALITY MATCHING RULE   presentationAddressMatch
 *   SINGLE VALUE             TRUE
 *   LDAP-SYNTAX              presentationAddr.&id
 *   LDAP-NAME                {"presentationAddress"}
 *   ID                       id-at-presentationAddress }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const presentationAddress: ATTRIBUTE = undefined;

/* eslint-enable */
