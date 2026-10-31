/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { internationalISDNNumber } from "../SelectedAttributeTypes/internationalISDNNumber.oa.mjs";
// export { numericString } from "../SelectedAttributeTypes/numericString.oa.mjs";
// export { id_at_collectiveInternationalISDNNumber } from "../SelectedAttributeTypes/id-at-collectiveInternationalISDNNumber.va.mjs";


/**
 * @summary collectiveInternationalISDNNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * collectiveInternationalISDNNumber ATTRIBUTE ::= {
 *   SUBTYPE OF               internationalISDNNumber
 *   COLLECTIVE               TRUE
 *   LDAP-SYNTAX              numericString.&id
 *   LDAP-NAME                {"c-InternationalISDNNumber"}
 *   ID                       id-at-collectiveInternationalISDNNumber }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const collectiveInternationalISDNNumber: ATTRIBUTE = undefined;

/* eslint-enable */
