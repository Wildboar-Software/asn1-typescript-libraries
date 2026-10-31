/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { base4kidsIsActive } from "../LdapBase4kids2/base4kidsIsActive.oa.mjs";
// export { id_at_base4kidsSmtpReceiveIsActive } from "../LdapBase4kids2/id-at-base4kidsSmtpReceiveIsActive.va.mjs";


/**
 * @summary base4kidsSmtpReceiveIsActive
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * base4kidsSmtpReceiveIsActive ATTRIBUTE ::= {
 *   SUBTYPE OF                base4kidsIsActive
 *   LDAP-NAME                 {"base4kidsSmtpReceiveIsActive"}
 *   LDAP-DESC                 "Determines whether SMTP (mail) receiving is active"
 *   ID                        id-at-base4kidsSmtpReceiveIsActive }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const base4kidsSmtpReceiveIsActive: ATTRIBUTE = undefined;

/* eslint-enable */
