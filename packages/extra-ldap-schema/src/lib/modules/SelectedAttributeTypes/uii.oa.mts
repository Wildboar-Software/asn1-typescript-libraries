/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { bitStringMatch } from "../SelectedAttributeTypes/bitStringMatch.oa.mjs";
// export { bitString } from "../SelectedAttributeTypes/bitString.oa.mjs";
// export { id_at_uii } from "../SelectedAttributeTypes/id-at-uii.va.mjs";


/**
 * @summary uii
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * uii ATTRIBUTE ::= {
 *   WITH SYNTAX              BIT STRING
 *   EQUALITY MATCHING RULE   bitStringMatch
 *   LDAP-SYNTAX              bitString.&id
 *   LDAP-NAME                {"uii"}
 *   ID                       id-at-uii }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const uii: ATTRIBUTE = undefined;

/* eslint-enable */
