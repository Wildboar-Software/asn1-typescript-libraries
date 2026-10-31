/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { dcMailAlternateAddress } from "../LdapDovecot/dcMailAlternateAddress.oa.mjs";
// export { dcMailForwardingAddress } from "../LdapDovecot/dcMailForwardingAddress.oa.mjs";
// export { id_oc_dcMailAlias } from "../LdapDovecot/id-oc-dcMailAlias.va.mjs";


/**
 * @summary dcMailAlias
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dcMailAlias OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { dcMailAlternateAddress }
 *   MAY CONTAIN               { dcMailForwardingAddress }
 *   LDAP-NAME                 {"dcMailAlias"}
 *   LDAP-DESC                 "Dovecot Mail Alias"
 *   ID                        id-oc-dcMailAlias }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const dcMailAlias: OBJECT_CLASS = undefined;

/* eslint-enable */
