/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { postalAddress } from "../SelectedAttributeTypes/postalAddress.oa.mjs";
// export { postalAddr } from "../SelectedAttributeTypes/postalAddr.oa.mjs";
// export { id_at_collectivePostalAddress } from "../SelectedAttributeTypes/id-at-collectivePostalAddress.va.mjs";


/**
 * @summary collectivePostalAddress
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * collectivePostalAddress ATTRIBUTE ::= {
 *   SUBTYPE OF               postalAddress
 *   COLLECTIVE               TRUE
 *   LDAP-SYNTAX              postalAddr.&id
 *   LDAP-NAME                {"c-PostalAddress"}
 *   ID                       id-at-collectivePostalAddress }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const collectivePostalAddress: ATTRIBUTE = undefined;

/* eslint-enable */
