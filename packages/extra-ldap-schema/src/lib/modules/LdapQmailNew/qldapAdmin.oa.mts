/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_qldapAdmin } from "../LdapQmailNew/id-oc-qldapAdmin.va.mjs";
import { qlaDomainList } from "./qlaDomainList.oa.mjs";
import { qlaMailHostList } from "./qlaMailHostList.oa.mjs";
import { qlaMailMStorePrefix } from "./qlaMailMStorePrefix.oa.mjs";
import { qlaMailQuotaCount } from "./qlaMailQuotaCount.oa.mjs";
import { qlaMailQuotaSize } from "./qlaMailQuotaSize.oa.mjs";
import { qlaMailSizeMax } from "./qlaMailSizeMax.oa.mjs";
import { qlaQmailGid } from "./qlaQmailGid.oa.mjs";
import { qlaQmailUid } from "./qlaQmailUid.oa.mjs";
import { qlaUidPrefix } from "./qlaUidPrefix.oa.mjs";
import { qladnmanager } from "./qladnmanager.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [qladnmanager, qlaDomainList, qlaMailMStorePrefix, qlaMailHostList] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [qlaUidPrefix, qlaQmailUid, qlaQmailGid, qlaMailQuotaSize, qlaMailQuotaCount, qlaMailSizeMax] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["qldapAdmin"],
    "&ldapDesc": "QMail-LDAP Subtree Admin" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_qldapAdmin /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
