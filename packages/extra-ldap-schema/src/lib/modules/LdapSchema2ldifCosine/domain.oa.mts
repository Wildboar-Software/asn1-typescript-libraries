/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { dc } from "../SelectedAttributeTypes/dc.oa.mjs";
// export { id_oc_domain } from "../LdapSchema2ldifCosine/id-oc-domain.va.mjs";


/**
 * @summary domain
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * domain OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { dc }
 *   MAY CONTAIN               { associatedName
 *                               | organizationName
 *                               | description
 *                               | businessCategory
 *                               | seeAlso
 *                               | searchGuide
 *                               | userPassword
 *                               | localityName
 *                               | stateOrProvinceName
 *                               | streetAddress
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
 *   LDAP-NAME                 {"domain"}
 *   ID                        id-oc-domain }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const domain: OBJECT_CLASS = undefined;

/* eslint-enable */
