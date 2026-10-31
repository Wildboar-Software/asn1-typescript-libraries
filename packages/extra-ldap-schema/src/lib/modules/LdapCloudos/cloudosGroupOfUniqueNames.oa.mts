/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_cloudosGroupOfUniqueNames } from "../LdapCloudos/id-oc-cloudosGroupOfUniqueNames.va.mjs";
import { entryUUID } from "./entryUUID.oa.mjs";
import { mirror } from "./mirror.oa.mjs";
import { storageQuota } from "./storageQuota.oa.mjs";

/**
 * @summary cloudosGroupOfUniqueNames
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cloudosGroupOfUniqueNames OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { entryUUID
 *                               | mirror
 *                               | storageQuota }
 *   LDAP-NAME                 {"cloudosGroupOfUniqueNames"}
 *   LDAP-DESC                 "cloudos group of names"
 *   ID                        id-oc-cloudosGroupOfUniqueNames }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const cloudosGroupOfUniqueNames: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [entryUUID, mirror, storageQuota] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["cloudosGroupOfUniqueNames"],
    "&ldapDesc": "cloudos group of names" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_cloudosGroupOfUniqueNames /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
