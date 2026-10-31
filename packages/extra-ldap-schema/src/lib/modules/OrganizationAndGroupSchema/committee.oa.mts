/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_committee } from "../OrganizationAndGroupSchema/id-oc-committee.va.mjs";


/**
 * @summary committee
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * committee OBJECT-CLASS ::= {
 *     SUBCLASS OF            {top}
 *     KIND                auxiliary
 *     MUST CONTAIN        {}
 *     MAY CONTAIN            {
 *         committeeType -- executive, conference, standing, nominating, steering, special
 *     }
 *     LDAP-NAME            {"committee"}
 *     LDAP-DESC            "Committee"
 *     ID                    id-oc-committee
 * }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const committee: OBJECT_CLASS = undefined;

/* eslint-enable */
