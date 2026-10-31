/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { serviceConnectionPoint } from "../LdapSchema2ldifFmserver/serviceConnectionPoint.oa.mjs";
// export { id_oc_mS_SQL_OLAPServer } from "../LdapSchema2ldifMicrosoft/id-oc-mS-SQL-OLAPServer.va.mjs";


/**
 * @summary mS_SQL_OLAPServer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mS-SQL-OLAPServer OBJECT-CLASS ::= {
 *   SUBCLASS OF               { serviceConnectionPoint }
 *   MAY CONTAIN               { mS-SQL-Name
 *                               | mS-SQL-RegisteredOwner
 *                               | mS-SQL-Contact
 *                               | mS-SQL-Build
 *                               | mS-SQL-ServiceAccount
 *                               | mS-SQL-Status
 *                               | mS-SQL-InformationURL
 *                               | mS-SQL-PublicationURL
 *                               | mS-SQL-Version
 *                               | mS-SQL-Language
 *                               | mS-SQL-Keywords }
 *   LDAP-NAME                 {"mS-SQL-OLAPServer"}
 *   ID                        id-oc-mS-SQL-OLAPServer }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const mS_SQL_OLAPServer: OBJECT_CLASS = undefined;

/* eslint-enable */
