/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { buildingName } from "../LdapSchema2ldifCosine/buildingName.oa.mjs";
// export { id_oc_pilotOrganization } from "../LdapSchema2ldifCosine/id-oc-pilotOrganization.va.mjs";


/**
 * @summary pilotOrganization
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * pilotOrganization OBJECT-CLASS ::= {
 *   SUBCLASS OF               { organization
 *                               | organizationalUnit }
 *   MAY CONTAIN               { buildingName }
 *   LDAP-NAME                 {"pilotOrganization"}
 *   ID                        id-oc-pilotOrganization }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const pilotOrganization: OBJECT_CLASS = undefined;

/* eslint-enable */
