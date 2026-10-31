/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { base4kidsIsBlocked } from "../LdapBase4kids2/base4kidsIsBlocked.oa.mjs";
// export { id_at_base4kidsIsDisabled } from "../LdapBase4kids2/id-at-base4kidsIsDisabled.va.mjs";


/**
 * @summary base4kidsIsDisabled
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * base4kidsIsDisabled ATTRIBUTE ::= {
 *   SUBTYPE OF                base4kidsIsBlocked
 *   LDAP-NAME                 {"base4kidsIsDisabled"}
 *   LDAP-DESC                 "Determines whether a base4kids object is disabled but still active"
 *   ID                        id-at-base4kidsIsDisabled }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const base4kidsIsDisabled: ATTRIBUTE = undefined;

/* eslint-enable */
