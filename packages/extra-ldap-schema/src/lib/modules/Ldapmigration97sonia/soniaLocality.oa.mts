/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { locality } from "../SelectedObjectClasses/locality.oa.mjs";
// export { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
// export { id_oc_soniaLocality } from "../Ldapmigration97sonia/id-oc-soniaLocality.va.mjs";


/**
 * @summary soniaLocality
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * soniaLocality OBJECT-CLASS ::= {
 *   SUBCLASS OF               { locality }
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { countryName
 *                               | facsimileTelephoneNumber
 *                               | secretary
 *                               | soniaLocalityNumber
 *                               | soniaLocalityToken
 *                               | soniaLocalityZip
 *                               | telephoneNumber
 *                               | soniaLocalityCompany
 *                               | soniaLocalityDepartment
 *                               | soniaLocalityContactPerson
 *                               | soniaLocalityMobile
 *                               | soniaLocalityMail
 *                               | soniaLocalityURI
 *                               | soniaLocalityCO
 *                               | soniaLocalityPermissions
 *                               | soniaLocalityPager
 *                               | soniaLocalityNickname
 *                               | soniaLocalityTimestamp }
 *   LDAP-NAME                 {"soniaLocality"}
 *   ID                        id-oc-soniaLocality }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const soniaLocality: OBJECT_CLASS = undefined;

/* eslint-enable */
