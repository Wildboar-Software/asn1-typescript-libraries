/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_dbmailForwardingAddress } from "../LdapDbmail/id-oc-dbmailForwardingAddress.va.mjs";
import { mail } from "../LdapSchema2ldifCore/mail.oa.mjs";
import { mailForwardingAddress } from "../LdapDbmail/mailForwardingAddress.oa.mjs";
// export { id_oc_dbmailForwardingAddress } from "../LdapDbmail/id-oc-dbmailForwardingAddress.va.mjs";


/**
 * @summary dbmailForwardingAddress
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dbmailForwardingAddress OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { mail
 *                               | mailForwardingAddress }
 *   LDAP-NAME                 {"dbmailForwardingAddress"}
 *   LDAP-DESC                 "DBMail-LDAP Forwarding Address"
 *   ID                        id-oc-dbmailForwardingAddress }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const dbmailForwardingAddress: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ mail, mailForwardingAddress, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "dbmailForwardingAddress" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "DBMail-LDAP Forwarding Address" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_dbmailForwardingAddress /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
