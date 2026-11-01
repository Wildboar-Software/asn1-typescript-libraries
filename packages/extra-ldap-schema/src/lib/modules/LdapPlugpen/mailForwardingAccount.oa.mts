/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { mailForward } from "../LdapPlugpen/mailForward.oa.mjs";
import { id_oc_mailForwardingAccount } from "../LdapPlugpen/id-oc-mailForwardingAccount.va.mjs";


/**
 * @summary mailForwardingAccount
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mailForwardingAccount OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { mailForward }
 *   LDAP-NAME                 {"mailForwardingAccount"}
 *   LDAP-DESC                 "Allows mail forwarding address"
 *   ID                        id-oc-mailForwardingAccount }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const mailForwardingAccount: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ mailForward, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "mailForwardingAccount" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Allows mail forwarding address" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_mailForwardingAccount /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

