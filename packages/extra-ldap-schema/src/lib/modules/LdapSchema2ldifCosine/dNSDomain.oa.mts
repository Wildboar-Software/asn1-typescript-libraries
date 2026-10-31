/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { domain } from "../LdapSchema2ldifCosine/domain.oa.mjs";
// export { id_oc_dNSDomain } from "../LdapSchema2ldifCosine/id-oc-dNSDomain.va.mjs";


/**
 * @summary dNSDomain
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dNSDomain OBJECT-CLASS ::= {
 *   SUBCLASS OF               { domain }
 *   MAY CONTAIN               { aRecord
 *                               | mDRecord
 *                               | mxRecord
 *                               | nSRecord
 *                               | sOARecord
 *                               | cNAMERecord }
 *   LDAP-NAME                 {"dNSDomain"}
 *   ID                        id-oc-dNSDomain }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const dNSDomain: OBJECT_CLASS = undefined;

/* eslint-enable */
