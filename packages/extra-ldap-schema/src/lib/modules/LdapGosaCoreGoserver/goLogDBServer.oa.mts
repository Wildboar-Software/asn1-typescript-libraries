/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { goLogDBServerStatus } from "../LdapGosaCoreGoserver/goLogDBServerStatus.oa.mjs";
// export { id_oc_goLogDBServer } from "../LdapGosaCoreGoserver/id-oc-goLogDBServer.va.mjs";


/**
 * @summary goLogDBServer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * goLogDBServer OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { commonName
 *                               | gosaLogDB
 *                               | goLogAdmin
 *                               | goLogPassword }
 *   MAY CONTAIN               { goLogDBServerStatus }
 *   LDAP-NAME                 {"goLogDBServer"}
 *   LDAP-DESC                 "Log DB server description (v2.7)"
 *   ID                        id-oc-goLogDBServer }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const goLogDBServer: OBJECT_CLASS = undefined;

/* eslint-enable */
