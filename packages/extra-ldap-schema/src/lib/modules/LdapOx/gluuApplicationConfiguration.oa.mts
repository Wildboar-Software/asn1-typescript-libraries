/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { objectClass } from "../InformationFramework/objectClass.oa.mjs";
// export { id_oc_gluuApplicationConfiguration } from "../LdapOx/id-oc-gluuApplicationConfiguration.va.mjs";


/**
 * @summary gluuApplicationConfiguration
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gluuApplicationConfiguration OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { objectClass }
 *   MAY CONTAIN               { organizationalUnitName
 *                               | gluuConfDynamic
 *                               | gluuConfStatic
 *                               | oxRevision }
 *   LDAP-NAME                 {"gluuApplicationConfiguration"}
 *   ID                        id-oc-gluuApplicationConfiguration }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gluuApplicationConfiguration: OBJECT_CLASS = undefined;

/* eslint-enable */
