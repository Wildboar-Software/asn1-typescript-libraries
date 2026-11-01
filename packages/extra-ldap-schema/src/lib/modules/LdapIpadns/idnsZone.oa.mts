/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { idnsRecord } from "../LdapIpadns/idnsRecord.oa.mjs";
// export { idnsRecord } from "../LdapIpadns/idnsRecord.oa.mjs";
import { id_oc_idnsZone } from "../LdapIpadns/id-oc-idnsZone.va.mjs";
import { idnsName } from "../LdapIpadns/idnsName.oa.mjs";
import { idnsZoneActive } from "../LdapIpadns/idnsZoneActive.oa.mjs";
import { idnsSOAmName } from "../LdapIpadns/idnsSOAmName.oa.mjs";
import { idnsSOArName } from "../LdapIpadns/idnsSOArName.oa.mjs";
import { idnsSOAserial } from "../LdapIpadns/idnsSOAserial.oa.mjs";
import { idnsSOArefresh } from "../LdapIpadns/idnsSOArefresh.oa.mjs";
import { idnsSOAretry } from "../LdapIpadns/idnsSOAretry.oa.mjs";
import { idnsSOAexpire } from "../LdapIpadns/idnsSOAexpire.oa.mjs";
import { idnsSOAminimum } from "../LdapIpadns/idnsSOAminimum.oa.mjs";
import { idnsUpdatePolicy } from "../LdapIpadns/idnsUpdatePolicy.oa.mjs";
import { idnsAllowQuery } from "../LdapIpadns/idnsAllowQuery.oa.mjs";
import { idnsAllowTransfer } from "../LdapIpadns/idnsAllowTransfer.oa.mjs";
import { idnsAllowSyncPTR } from "../LdapIpadns/idnsAllowSyncPTR.oa.mjs";
import { idnsForwardPolicy } from "../LdapIpadns/idnsForwardPolicy.oa.mjs";
import { idnsForwarders } from "../LdapIpadns/idnsForwarders.oa.mjs";
// export { id_oc_idnsZone } from "../LdapIpadns/id-oc-idnsZone.va.mjs";


/**
 * @summary idnsZone
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * idnsZone OBJECT-CLASS ::= {
 *   SUBCLASS OF               { idnsRecord }
 *   MUST CONTAIN              { idnsName
 *                               | idnsZoneActive
 *                               | idnsSOAmName
 *                               | idnsSOArName
 *                               | idnsSOAserial
 *                               | idnsSOArefresh
 *                               | idnsSOAretry
 *                               | idnsSOAexpire
 *                               | idnsSOAminimum }
 *   MAY CONTAIN               { idnsUpdatePolicy
 *                               | idnsAllowQuery
 *                               | idnsAllowTransfer
 *                               | idnsAllowSyncPTR
 *                               | idnsForwardPolicy
 *                               | idnsForwarders }
 *   LDAP-NAME                 {"idnsZone"}
 *   LDAP-DESC                 "Zone class"
 *   ID                        id-oc-idnsZone }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const idnsZone: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ idnsRecord, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ idnsName, idnsZoneActive, idnsSOAmName, idnsSOArName, idnsSOAserial, idnsSOArefresh, idnsSOAretry, idnsSOAexpire, idnsSOAminimum, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ idnsUpdatePolicy, idnsAllowQuery, idnsAllowTransfer, idnsAllowSyncPTR, idnsForwardPolicy, idnsForwarders, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "idnsZone" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Zone class" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_idnsZone /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
