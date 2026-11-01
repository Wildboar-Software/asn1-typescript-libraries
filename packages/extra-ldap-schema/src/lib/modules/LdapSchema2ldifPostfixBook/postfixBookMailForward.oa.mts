/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { mailForwardingAddress } from "../LdapSchema2ldifPostfixBook/mailForwardingAddress.oa.mjs";
// export { mailForwardingAddress } from "../LdapSchema2ldifPostfixBook/mailForwardingAddress.oa.mjs";
import { id_oc_postfixBookMailForward } from "../LdapSchema2ldifPostfixBook/id-oc-postfixBookMailForward.va.mjs";
import { mail } from "../LdapSchema2ldifCore/mail.oa.mjs";
import { mailAlias } from "../LdapSchema2ldifPostfixBook/mailAlias.oa.mjs";
// export { id_oc_postfixBookMailForward } from "../LdapSchema2ldifPostfixBook/id-oc-postfixBookMailForward.va.mjs";


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
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ mail, mailAlias, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ mailForwardingAddress, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "PostfixBookMailForward" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Mail forward used in Postfix Book" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_postfixBookMailForward /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
