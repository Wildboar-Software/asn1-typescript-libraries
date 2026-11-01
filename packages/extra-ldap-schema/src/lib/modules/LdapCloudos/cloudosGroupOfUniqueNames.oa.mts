/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_cloudosGroupOfUniqueNames } from "../LdapCloudos/id-oc-cloudosGroupOfUniqueNames.va.mjs";
import { entryUUID } from "../LdapCloudos/entryUUID.oa.mjs";
import { mirror } from "../LdapCloudos/mirror.oa.mjs";
import { storageQuota } from "../LdapCloudos/storageQuota.oa.mjs";
// export { id_oc_cloudosGroupOfUniqueNames } from "../LdapCloudos/id-oc-cloudosGroupOfUniqueNames.va.mjs";


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
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ entryUUID, mirror, storageQuota, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "cloudosGroupOfUniqueNames" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "cloudos group of names" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_cloudosGroupOfUniqueNames /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
