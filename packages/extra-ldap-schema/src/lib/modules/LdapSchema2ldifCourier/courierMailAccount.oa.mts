/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_courierMailAccount } from "../LdapSchema2ldifCourier/id-oc-courierMailAccount.va.mjs";


/**
 * @summary courierMailAccount
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * courierMailAccount OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { mail
 *                               | homeDirectory }
 *   MAY CONTAIN               { uidNumber
 *                               | gidNumber
 *                               | mailbox
 *                               | uid
 *                               | commonName
 *                               | gecos
 *                               | description
 *                               | loginShell
 *                               | quota
 *                               | userPassword
 *                               | clearPassword
 *                               | defaultdelivery
 *                               | disableimap
 *                               | disablepop3
 *                               | disablewebmail
 *                               | sharedgroup
 *                               | disableshared
 *                               | mailhost }
 *   LDAP-NAME                 {"CourierMailAccount"}
 *   LDAP-DESC                 "Mail account object as used by the Courier mail server"
 *   ID                        id-oc-courierMailAccount }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const courierMailAccount: OBJECT_CLASS = undefined;

/* eslint-enable */
