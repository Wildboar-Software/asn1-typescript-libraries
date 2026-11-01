/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_idnsConfigObject } from "../LdapIpadns/id-oc-idnsConfigObject.va.mjs";
import { idnsForwardPolicy } from "../LdapIpadns/idnsForwardPolicy.oa.mjs";
import { idnsForwarders } from "../LdapIpadns/idnsForwarders.oa.mjs";
import { idnsAllowSyncPTR } from "../LdapIpadns/idnsAllowSyncPTR.oa.mjs";
import { idnsZoneRefresh } from "../LdapIpadns/idnsZoneRefresh.oa.mjs";
import { idnsPersistentSearch } from "../LdapIpadns/idnsPersistentSearch.oa.mjs";
// export { id_oc_idnsConfigObject } from "../LdapIpadns/id-oc-idnsConfigObject.va.mjs";


/**
 * @summary idnsConfigObject
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * idnsConfigObject OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MAY CONTAIN               { idnsForwardPolicy
 *                               | idnsForwarders
 *                               | idnsAllowSyncPTR
 *                               | idnsZoneRefresh
 *                               | idnsPersistentSearch }
 *   LDAP-NAME                 {"idnsConfigObject"}
 *   LDAP-DESC                 "DNS global config options"
 *   ID                        id-oc-idnsConfigObject }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const idnsConfigObject: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ idnsForwardPolicy, idnsForwarders, idnsAllowSyncPTR, idnsZoneRefresh, idnsPersistentSearch, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "idnsConfigObject" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "DNS global config options" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_idnsConfigObject /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
