/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { mail } from "../LdapSchema2ldifCore/mail.oa.mjs";
import { id_oc_postfixBookMailAccount } from "../LdapSchema2ldifPostfixBook/id-oc-postfixBookMailAccount.va.mjs";
import { mailAlias } from "./mailAlias.oa.mjs";
import { mailEnabled } from "./mailEnabled.oa.mjs";
import { mailGidNumber } from "./mailGidNumber.oa.mjs";
import { mailGroupMember } from "./mailGroupMember.oa.mjs";
import { mailHomeDirectory } from "./mailHomeDirectory.oa.mjs";
import { mailQuota } from "./mailQuota.oa.mjs";
import { mailSieveRuleSource } from "./mailSieveRuleSource.oa.mjs";
import { mailStorageDirectory } from "./mailStorageDirectory.oa.mjs";
import { mailUidNumber } from "./mailUidNumber.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [mail] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [mailHomeDirectory, mailAlias, mailGroupMember, mailUidNumber, mailGidNumber, mailEnabled, mailQuota, mailStorageDirectory, mailSieveRuleSource] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["PostfixBookMailAccount"],
    "&ldapDesc": "Mail account used in Postfix Book" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_postfixBookMailAccount /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
