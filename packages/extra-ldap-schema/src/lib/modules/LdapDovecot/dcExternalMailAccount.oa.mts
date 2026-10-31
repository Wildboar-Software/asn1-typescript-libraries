/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_dcExternalMailAccount } from "../LdapDovecot/id-oc-dcExternalMailAccount.va.mjs";
import { dcAccountStatus } from "./dcAccountStatus.oa.mjs";
import { dcMailQuota } from "./dcMailQuota.oa.mjs";
import { dcMailSizeMax } from "./dcMailSizeMax.oa.mjs";
import { dcPOP3Login } from "./dcPOP3Login.oa.mjs";
import { dcPOP3Password } from "./dcPOP3Password.oa.mjs";
import { dcPOP3Server } from "./dcPOP3Server.oa.mjs";
import { dcSMTPLogin } from "./dcSMTPLogin.oa.mjs";
import { dcSMTPPassword } from "./dcSMTPPassword.oa.mjs";
import { dcSMTPServer } from "./dcSMTPServer.oa.mjs";
import { dcSubMailAddress } from "./dcSubMailAddress.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [dcSubMailAddress, dcAccountStatus] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [dcSMTPServer, dcSMTPLogin, dcSMTPPassword, dcPOP3Server, dcPOP3Login, dcPOP3Password, dcMailQuota, dcMailSizeMax] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["dcExternalMailAccount"],
    "&ldapDesc": "Dovecot-LDAP external mail account" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_dcExternalMailAccount /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
