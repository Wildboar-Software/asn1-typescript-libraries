/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { organizationalUnitName } from "../SelectedAttributeTypes/organizationalUnitName.oa.mjs";
// export { id_oc_sunservicecomponent } from "../Ldapmigration70sunSchema2/id-oc-sunservicecomponent.va.mjs";


/**
 * @summary sunservicecomponent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * sunservicecomponent OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { organizationalUnitName }
 *   MAY CONTAIN               { sunserviceid
 *                               | sunsmspriority
 *                               | sunkeyvalue
 *                               | sunxmlkeyvalue
 *                               | description }
 *   LDAP-NAME                 {"sunservicecomponent"}
 *   LDAP-DESC                 "Sub-components of the service"
 *   ID                        id-oc-sunservicecomponent }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const sunservicecomponent: OBJECT_CLASS = undefined;

/* eslint-enable */
