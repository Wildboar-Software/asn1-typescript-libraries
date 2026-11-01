/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_zimbraAlwaysOnCluster } from "../LdapZimbra/id-oc-zimbraAlwaysOnCluster.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { zimbraId } from "../LdapZimbra/zimbraId.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { zimbraACE } from "../LdapZimbra/zimbraACE.oa.mjs";
import { zimbraCreateTimestamp } from "../LdapZimbra/zimbraCreateTimestamp.oa.mjs";
import { zimbraMemcachedClientServerList } from "../LdapZimbra/zimbraMemcachedClientServerList.oa.mjs";
import { zimbraZookeeperClientServerList } from "../LdapZimbra/zimbraZookeeperClientServerList.oa.mjs";
// export { id_oc_zimbraAlwaysOnCluster } from "../LdapZimbra/id-oc-zimbraAlwaysOnCluster.va.mjs";


/**
 * @summary zimbraAlwaysOnCluster
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraAlwaysOnCluster OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName
 *                               | zimbraId }
 *   MAY CONTAIN               { description
 *                               | zimbraACE
 *                               | zimbraCreateTimestamp
 *                               | zimbraMemcachedClientServerList
 *                               | zimbraZookeeperClientServerList }
 *   LDAP-NAME                 {"zimbraAlwaysOnCluster"}
 *   LDAP-DESC                 "AlwaysOn Cluster"
 *   ID                        id-oc-zimbraAlwaysOnCluster }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const zimbraAlwaysOnCluster: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, zimbraId, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ description, zimbraACE, zimbraCreateTimestamp, zimbraMemcachedClientServerList, zimbraZookeeperClientServerList, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "zimbraAlwaysOnCluster" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "AlwaysOn Cluster" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_zimbraAlwaysOnCluster /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
