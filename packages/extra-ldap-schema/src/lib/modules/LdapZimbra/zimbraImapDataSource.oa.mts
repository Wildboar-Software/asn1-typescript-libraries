/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { zimbraDataSource } from "../LdapZimbra/zimbraDataSource.oa.mjs";
// export { id_oc_zimbraImapDataSource } from "../LdapZimbra/id-oc-zimbraImapDataSource.va.mjs";


/**
 * @summary zimbraImapDataSource
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraImapDataSource OBJECT-CLASS ::= {
 *   SUBCLASS OF               { zimbraDataSource }
 *   MUST CONTAIN              { zimbraDataSourceConnectionType
 *                               | zimbraDataSourceHost
 *                               | zimbraDataSourcePort }
 *   MAY CONTAIN               { zimbraDataSourceAuthMechanism
 *                               | zimbraDataSourceAuthorizationId }
 *   LDAP-NAME                 {"zimbraImapDataSource"}
 *   LDAP-DESC                 "IMAP data source object"
 *   ID                        id-oc-zimbraImapDataSource }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const zimbraImapDataSource: OBJECT_CLASS = undefined;

/* eslint-enable */
