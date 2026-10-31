/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { domain } from "../LdapSchema2ldifCosine/domain.oa.mjs";
// export { id_oc_rFC822localPart } from "../LdapSchema2ldifCosine/id-oc-rFC822localPart.va.mjs";


/**
 * @summary rFC822localPart
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * rFC822localPart OBJECT-CLASS ::= {
 *   SUBCLASS OF               { domain }
 *   MAY CONTAIN               { commonName
 *                               | surname
 *                               | description
 *                               | seeAlso
 *                               | telephoneNumber
 *                               | physicalDeliveryOfficeName
 *                               | postalAddress
 *                               | postalCode
 *                               | postOfficeBox
 *                               | streetAddress
 *                               | facsimileTelephoneNumber
 *                               | internationalISDNNumber
 *                               | telephoneNumber
 *                               | teletexTerminalIdentifier
 *                               | telexNumber
 *                               | preferredDeliveryMethod
 *                               | destinationIndicator
 *                               | registeredAddress
 *                               | x121Address }
 *   LDAP-NAME                 {"RFC822localPart"}
 *   ID                        id-oc-rFC822localPart }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const rFC822localPart: OBJECT_CLASS = undefined;

/* eslint-enable */
