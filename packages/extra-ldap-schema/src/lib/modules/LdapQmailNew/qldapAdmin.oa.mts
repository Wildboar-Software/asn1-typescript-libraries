/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_qldapAdmin } from "../LdapQmailNew/id-oc-qldapAdmin.va.mjs";
import { qladnmanager } from "../LdapQmailNew/qladnmanager.oa.mjs";
import { qlaDomainList } from "../LdapQmailNew/qlaDomainList.oa.mjs";
import { qlaMailMStorePrefix } from "../LdapQmailNew/qlaMailMStorePrefix.oa.mjs";
import { qlaMailHostList } from "../LdapQmailNew/qlaMailHostList.oa.mjs";
import { qlaUidPrefix } from "../LdapQmailNew/qlaUidPrefix.oa.mjs";
import { qlaQmailUid } from "../LdapQmailNew/qlaQmailUid.oa.mjs";
import { qlaQmailGid } from "../LdapQmailNew/qlaQmailGid.oa.mjs";
import { qlaMailQuotaSize } from "../LdapQmailNew/qlaMailQuotaSize.oa.mjs";
import { qlaMailQuotaCount } from "../LdapQmailNew/qlaMailQuotaCount.oa.mjs";
import { qlaMailSizeMax } from "../LdapQmailNew/qlaMailSizeMax.oa.mjs";


/**
 * @summary qldapAdmin
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * qldapAdmin OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { qladnmanager
 *                               | qlaDomainList
 *                               | qlaMailMStorePrefix
 *                               | qlaMailHostList }
 *   MAY CONTAIN               { qlaUidPrefix
 *                               | qlaQmailUid
 *                               | qlaQmailGid
 *                               | qlaMailQuotaSize
 *                               | qlaMailQuotaCount
 *                               | qlaMailSizeMax }
 *   LDAP-NAME                 {"qldapAdmin"}
 *   LDAP-DESC                 "QMail-LDAP Subtree Admin"
 *   ID                        id-oc-qldapAdmin }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const qldapAdmin: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ qladnmanager, qlaDomainList, qlaMailMStorePrefix, qlaMailHostList, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ qlaUidPrefix, qlaQmailUid, qlaQmailGid, qlaMailQuotaSize, qlaMailQuotaCount, qlaMailSizeMax, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "qldapAdmin" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "QMail-LDAP Subtree Admin" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_qldapAdmin /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

