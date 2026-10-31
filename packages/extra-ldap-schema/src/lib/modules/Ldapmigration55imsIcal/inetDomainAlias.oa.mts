/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { alias } from "../InformationFramework/alias.oa.mjs";
// export { dc } from "../SelectedAttributeTypes/dc.oa.mjs";
// export { id_oc_inetDomainAlias } from "../Ldapmigration55imsIcal/id-oc-inetDomainAlias.va.mjs";


/**
 * @summary inetDomainAlias
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * inetDomainAlias OBJECT-CLASS ::= {
 *   SUBCLASS OF               { alias }
 *   MUST CONTAIN              { dc }
 *   LDAP-NAME                 {"inetDomainAlias"}
 *   LDAP-DESC                 "auxiliary class for hosted domain aliases"
 *   ID                        id-oc-inetDomainAlias }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const inetDomainAlias: OBJECT_CLASS = undefined;

/* eslint-enable */
