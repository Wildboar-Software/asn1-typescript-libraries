/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_dcExternalMailAccount } from "../LdapDovecot/id-oc-dcExternalMailAccount.va.mjs";
import { dcSubMailAddress } from "../LdapDovecot/dcSubMailAddress.oa.mjs";
import { dcAccountStatus } from "../LdapDovecot/dcAccountStatus.oa.mjs";
import { dcSMTPServer } from "../LdapDovecot/dcSMTPServer.oa.mjs";
import { dcSMTPLogin } from "../LdapDovecot/dcSMTPLogin.oa.mjs";
import { dcSMTPPassword } from "../LdapDovecot/dcSMTPPassword.oa.mjs";
import { dcPOP3Server } from "../LdapDovecot/dcPOP3Server.oa.mjs";
import { dcPOP3Login } from "../LdapDovecot/dcPOP3Login.oa.mjs";
import { dcPOP3Password } from "../LdapDovecot/dcPOP3Password.oa.mjs";
import { dcMailQuota } from "../LdapDovecot/dcMailQuota.oa.mjs";
import { dcMailSizeMax } from "../LdapDovecot/dcMailSizeMax.oa.mjs";


/**
 * @summary dcExternalMailAccount
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dcExternalMailAccount OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { dcSubMailAddress
 *                               | dcAccountStatus }
 *   MAY CONTAIN               { dcSMTPServer
 *                               | dcSMTPLogin
 *                               | dcSMTPPassword
 *                               | dcPOP3Server
 *                               | dcPOP3Login
 *                               | dcPOP3Password
 *                               | dcMailQuota
 *                               | dcMailSizeMax }
 *   LDAP-NAME                 {"dcExternalMailAccount"}
 *   LDAP-DESC                 "Dovecot-LDAP external mail account"
 *   ID                        id-oc-dcExternalMailAccount }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const dcExternalMailAccount: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ dcSubMailAddress, dcAccountStatus, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ dcSMTPServer, dcSMTPLogin, dcSMTPPassword, dcPOP3Server, dcPOP3Login, dcPOP3Password, dcMailQuota, dcMailSizeMax, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "dcExternalMailAccount" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Dovecot-LDAP external mail account" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_dcExternalMailAccount /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

