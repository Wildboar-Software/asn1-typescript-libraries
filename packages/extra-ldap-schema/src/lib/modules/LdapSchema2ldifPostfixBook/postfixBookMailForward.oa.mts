/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { mail } from "../LdapSchema2ldifCore/mail.oa.mjs";
import { id_oc_postfixBookMailForward } from "../LdapSchema2ldifPostfixBook/id-oc-postfixBookMailForward.va.mjs";
import { mailForwardingAddress } from "../LdapSchema2ldifPostfixBook/mailForwardingAddress.oa.mjs";
import { mailAlias } from "./mailAlias.oa.mjs";

/**
 * @summary postfixBookMailForward
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * postfixBookMailForward OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { mail
 *                               | mailAlias }
 *   MAY CONTAIN               { mailForwardingAddress }
 *   LDAP-NAME                 {"PostfixBookMailForward"}
 *   LDAP-DESC                 "Mail forward used in Postfix Book"
 *   ID                        id-oc-postfixBookMailForward }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const postfixBookMailForward: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [mail, mailAlias] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [mailForwardingAddress] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["PostfixBookMailForward"],
    "&ldapDesc": "Mail forward used in Postfix Book" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_postfixBookMailForward /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
