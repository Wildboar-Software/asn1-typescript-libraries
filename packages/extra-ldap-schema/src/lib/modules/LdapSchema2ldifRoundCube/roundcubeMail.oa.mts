/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_roundcubeMail } from "../LdapSchema2ldifRoundCube/id-oc-roundcubeMail.va.mjs";


/**
 * @summary roundcubeMail
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * roundcubeMail OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { rcNickname
 *                               | rcBirthday
 *                               | rcGender
 *                               | rcHomeMail
 *                               | rcWorkMail
 *                               | rcHomeFax
 *                               | rcWorkFax
 *                               | rcHomeURL
 *                               | rcWorkURL
 *                               | rcBlogURL
 *                               | rcProfileURL
 *                               | rcSkype
 *                               | rcJabber
 *                               | rcAIM
 *                               | rcICQ
 *                               | rcRegion
 *                               | rcCountry
 *                               | rcManager
 *                               | rcAssistant }
 *   LDAP-NAME                 {"RoundcubeMail"}
 *   ID                        id-oc-roundcubeMail }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const roundcubeMail: OBJECT_CLASS = undefined;

/* eslint-enable */
