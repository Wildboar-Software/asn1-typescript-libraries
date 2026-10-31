/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { gLUE2Entity } from "../LdapGlue501Entity/gLUE2Entity.oa.mjs";
// export { gLUE2ActivityID } from "../LdapGlue511Activity/gLUE2ActivityID.oa.mjs";
// export { id_oc_gLUE2Activity } from "../LdapGlue511Activity/id-oc-gLUE2Activity.va.mjs";


/**
 * @summary gLUE2Activity
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gLUE2Activity OBJECT-CLASS ::= {
 *   SUBCLASS OF               { gLUE2Entity }
 *   MUST CONTAIN              { gLUE2ActivityID }
 *   MAY CONTAIN               { gLUE2ActivityUserDomainForeignKey
 *                               | gLUE2ActivityEndpointForeignKey
 *                               | gLUE2ActivityShareForeignKey
 *                               | gLUE2ActivityResourceForeignKey
 *                               | gLUE2ActivityActivityForeignKey }
 *   LDAP-NAME                 {"GLUE2Activity"}
 *   LDAP-DESC                 "An activity is a unit of work managed by a Service and submitted via an Endpoint"
 *   ID                        id-oc-gLUE2Activity }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gLUE2Activity: OBJECT_CLASS = undefined;

/* eslint-enable */
