/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ipaAssociation } from "../Ldap60basev2/ipaAssociation.oa.mjs";
// export { id_oc_ipaNISNetgroup } from "../Ldap60basev2/id-oc-ipaNISNetgroup.va.mjs";


/**
 * @summary ipaNISNetgroup
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ipaNISNetgroup OBJECT-CLASS ::= {
 *   SUBCLASS OF               { ipaAssociation }
 *   MAY CONTAIN               { externalHost
 *                               | nisDomainName
 *                               | member
 *                               | memberOf }
 *   LDAP-NAME                 {"ipaNISNetgroup"}
 *   LDAP-DESC                 "IPA version of NIS netgroup"
 *   ID                        id-oc-ipaNISNetgroup }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const ipaNISNetgroup: OBJECT_CLASS = undefined;

/* eslint-enable */
