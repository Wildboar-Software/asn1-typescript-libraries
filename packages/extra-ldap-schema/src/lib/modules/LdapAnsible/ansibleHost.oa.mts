/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { ansibleVar } from "../LdapAnsible/ansibleVar.oa.mjs";
// export { id_oc_ansibleHost } from "../LdapAnsible/id-oc-ansibleHost.va.mjs";


/**
 * @summary ansibleHost
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ansibleHost OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { ansibleVar }
 *   LDAP-NAME                 {"ansibleHost"}
 *   LDAP-DESC                 "Ansible host entry"
 *   ID                        id-oc-ansibleHost }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const ansibleHost: OBJECT_CLASS = undefined;

/* eslint-enable */
