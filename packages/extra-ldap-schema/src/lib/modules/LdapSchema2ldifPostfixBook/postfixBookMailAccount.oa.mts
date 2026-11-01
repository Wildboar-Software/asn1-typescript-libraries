/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { mail } from "../LdapSchema2ldifCore/mail.oa.mjs";
import { id_oc_postfixBookMailAccount } from "../LdapSchema2ldifPostfixBook/id-oc-postfixBookMailAccount.va.mjs";
import { mailHomeDirectory } from "../LdapSchema2ldifPostfixBook/mailHomeDirectory.oa.mjs";
import { mailAlias } from "../LdapSchema2ldifPostfixBook/mailAlias.oa.mjs";
import { mailGroupMember } from "../LdapSchema2ldifPostfixBook/mailGroupMember.oa.mjs";
import { mailUidNumber } from "../LdapSchema2ldifPostfixBook/mailUidNumber.oa.mjs";
import { mailGidNumber } from "../LdapSchema2ldifPostfixBook/mailGidNumber.oa.mjs";
import { mailEnabled } from "../LdapSchema2ldifPostfixBook/mailEnabled.oa.mjs";
import { mailQuota } from "../LdapSchema2ldifPostfixBook/mailQuota.oa.mjs";
import { mailStorageDirectory } from "../LdapSchema2ldifPostfixBook/mailStorageDirectory.oa.mjs";
import { mailSieveRuleSource } from "../LdapSchema2ldifPostfixBook/mailSieveRuleSource.oa.mjs";


/**
 * @summary postfixBookMailAccount
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * postfixBookMailAccount OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { mail }
 *   MAY CONTAIN               { mailHomeDirectory
 *                               | mailAlias
 *                               | mailGroupMember
 *                               | mailUidNumber
 *                               | mailGidNumber
 *                               | mailEnabled
 *                               | mailQuota
 *                               | mailStorageDirectory
 *                               | mailSieveRuleSource }
 *   LDAP-NAME                 {"PostfixBookMailAccount"}
 *   LDAP-DESC                 "Mail account used in Postfix Book"
 *   ID                        id-oc-postfixBookMailAccount }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const postfixBookMailAccount: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ mail, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ mailHomeDirectory, mailAlias, mailGroupMember, mailUidNumber, mailGidNumber, mailEnabled, mailQuota, mailStorageDirectory, mailSieveRuleSource, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "PostfixBookMailAccount" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Mail account used in Postfix Book" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_postfixBookMailAccount /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

