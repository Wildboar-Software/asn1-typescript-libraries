/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { integerMatch } from "../SelectedAttributeTypes/integerMatch.oa.mjs";
// export { integer } from "../SelectedAttributeTypes/integer.oa.mjs";
// export { id_at_zimbraMobilePolicyAllowBluetooth } from "../LdapZimbra/id-at-zimbraMobilePolicyAllowBluetooth.va.mjs";


/**
 * @summary zimbraMobilePolicyAllowBluetooth
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraMobilePolicyAllowBluetooth ATTRIBUTE ::= {
 *   WITH SYNTAX               INTEGER
 *   EQUALITY MATCHING RULE    integerMatch
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               integer.&id
 *   LDAP-NAME                 {"zimbraMobilePolicyAllowBluetooth"}
 *   LDAP-DESC                 "whether the Bluetooth capabilities are allowed on the device. The available options are Disable, HandsfreeOnly, and Allow. 0 - DISABLE 1 - HANDSFREE 2 - ALLOW ignored if zimbraFeatureMobilePolicyEnabled=FALSE or zimbraMobilePolicyAllowBluetooth value is set to -1"
 *   ID                        id-at-zimbraMobilePolicyAllowBluetooth }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const zimbraMobilePolicyAllowBluetooth: ATTRIBUTE = undefined;

/* eslint-enable */
