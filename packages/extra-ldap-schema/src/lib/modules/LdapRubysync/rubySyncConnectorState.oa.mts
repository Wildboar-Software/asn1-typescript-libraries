/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { rubySyncLastSync } from "../LdapRubysync/rubySyncLastSync.oa.mjs";
// export { id_oc_rubySyncConnectorState } from "../LdapRubysync/id-oc-rubySyncConnectorState.va.mjs";


/**
 * @summary rubySyncConnectorState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * rubySyncConnectorState OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { rubySyncLastSync }
 *   LDAP-NAME                 {"rubySyncConnectorState"}
 *   LDAP-DESC                 "Synchronization informations between client and vault connectors"
 *   ID                        id-oc-rubySyncConnectorState }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const rubySyncConnectorState: OBJECT_CLASS = undefined;

/* eslint-enable */
