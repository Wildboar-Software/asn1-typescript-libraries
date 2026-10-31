/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { telephoneNumber } from "../SelectedAttributeTypes/telephoneNumber.oa.mjs";
// export { printableString } from "../SelectedAttributeTypes/printableString.oa.mjs";
// export { id_at_collectiveTelephoneNumber } from "../SelectedAttributeTypes/id-at-collectiveTelephoneNumber.va.mjs";


/**
 * @summary collectiveTelephoneNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * collectiveTelephoneNumber ATTRIBUTE ::= {
 *   SUBTYPE OF               telephoneNumber
 *   COLLECTIVE               TRUE
 *   LDAP-SYNTAX              printableString.&id
 *   LDAP-NAME                {"c-TelephoneNumber"}
 *   ID                       id-at-collectiveTelephoneNumber }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const collectiveTelephoneNumber: ATTRIBUTE = undefined;

/* eslint-enable */
