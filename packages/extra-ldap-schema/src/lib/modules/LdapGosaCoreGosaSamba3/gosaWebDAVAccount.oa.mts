/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { gosaWebDAVQuota } from "../LdapGosaCoreGosaSamba3/gosaWebDAVQuota.oa.mjs";
import { id_oc_gosaWebDAVAccount } from "../LdapGosaCoreGosaSamba3/id-oc-gosaWebDAVAccount.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { uid } from "../SelectedAttributeTypes/uid.oa.mjs";

/**
 * @summary gosaWebDAVAccount
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gosaWebDAVAccount OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { commonName
 *                               | uid }
 *   MAY CONTAIN               { gosaWebDAVQuota }
 *   LDAP-NAME                 {"gosaWebDAVAccount"}
 *   LDAP-DESC                 "GOsa webdav enabling account (v2.7)"
 *   ID                        id-oc-gosaWebDAVAccount }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gosaWebDAVAccount: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName, uid] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [gosaWebDAVQuota] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["gosaWebDAVAccount"],
    "&ldapDesc": "GOsa webdav enabling account (v2.7)" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gosaWebDAVAccount /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
