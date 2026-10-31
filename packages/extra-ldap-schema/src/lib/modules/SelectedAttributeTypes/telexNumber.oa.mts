/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { TelexNumber, _decode_TelexNumber, _encode_TelexNumber } from "../SelectedAttributeTypes/TelexNumber.ta.mjs";
// export { telexNr } from "../SelectedAttributeTypes/telexNr.oa.mjs";
// export { id_at_telexNumber } from "../SelectedAttributeTypes/id-at-telexNumber.va.mjs";


/**
 * @summary telexNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * telexNumber ATTRIBUTE ::= {
 *   WITH SYNTAX              TelexNumber
 *   LDAP-SYNTAX              telexNr.&id
 *   LDAP-NAME                {"telexNumber"}
 *   ID                       id-at-telexNumber }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const telexNumber: ATTRIBUTE = undefined;

/* eslint-enable */
