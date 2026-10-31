/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { telexNumber } from "../SelectedAttributeTypes/telexNumber.oa.mjs";
// export { telexNr } from "../SelectedAttributeTypes/telexNr.oa.mjs";
// export { id_at_collectiveTelexNumber } from "../SelectedAttributeTypes/id-at-collectiveTelexNumber.va.mjs";


/**
 * @summary collectiveTelexNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * collectiveTelexNumber ATTRIBUTE ::= {
 *   SUBTYPE OF               telexNumber
 *   COLLECTIVE               TRUE
 *   LDAP-SYNTAX              telexNr.&id
 *   LDAP-NAME                {"c-TelexNumber"}
 *   ID                       id-at-collectiveTelexNumber }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const collectiveTelexNumber: ATTRIBUTE = undefined;

/* eslint-enable */
