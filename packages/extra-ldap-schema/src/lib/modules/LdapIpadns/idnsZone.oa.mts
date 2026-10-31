/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { idnsRecord } from "../LdapIpadns/idnsRecord.oa.mjs";
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
const idnsZone: OBJECT_CLASS = undefined;

/* eslint-enable */
