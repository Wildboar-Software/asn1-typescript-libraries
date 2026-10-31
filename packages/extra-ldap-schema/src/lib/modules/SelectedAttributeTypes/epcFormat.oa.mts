/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { EpcFormat, _decode_EpcFormat, _encode_EpcFormat } from "../SelectedAttributeTypes/EpcFormat.ta.mjs";
// export { epcForm } from "../SelectedAttributeTypes/epcForm.oa.mjs";
// export { id_at_epcFormat } from "../SelectedAttributeTypes/id-at-epcFormat.va.mjs";


/**
 * @summary epcFormat
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * epcFormat  ATTRIBUTE ::= {
 *   WITH SYNTAX              EpcFormat
 *   SINGLE VALUE             TRUE
 *   LDAP-SYNTAX              epcForm.&id
 *   LDAP-NAME                {"epcFormat"}
 *   ID                       id-at-epcFormat }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const epcFormat: ATTRIBUTE = undefined;

/* eslint-enable */
