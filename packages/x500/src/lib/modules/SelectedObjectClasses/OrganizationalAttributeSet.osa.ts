/* eslint-disable */
import { userPassword } from "../AuthenticationFramework/userPassword.oa.js";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.js";
import { businessCategory } from "../SelectedAttributeTypes/businessCategory.oa.js";
import { description } from "../SelectedAttributeTypes/description.oa.js";
import { searchGuide } from "../SelectedAttributeTypes/searchGuide.oa.js";
import { seeAlso } from "../SelectedAttributeTypes/seeAlso.oa.js";
import { LocaleAttributeSet } from "../SelectedObjectClasses/LocaleAttributeSet.osa.js";
import { PostalAttributeSet } from "../SelectedObjectClasses/PostalAttributeSet.osa.js";
import { TelecommunicationAttributeSet } from "../SelectedObjectClasses/TelecommunicationAttributeSet.osa.js";
export { userPassword } from "../AuthenticationFramework/userPassword.oa.js";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.js";
export { businessCategory } from "../SelectedAttributeTypes/businessCategory.oa.js";
export { description } from "../SelectedAttributeTypes/description.oa.js";
export { searchGuide } from "../SelectedAttributeTypes/searchGuide.oa.js";
export { seeAlso } from "../SelectedAttributeTypes/seeAlso.oa.js";
export { LocaleAttributeSet } from "../SelectedObjectClasses/LocaleAttributeSet.osa.js";
export { PostalAttributeSet } from "../SelectedObjectClasses/PostalAttributeSet.osa.js";
export { TelecommunicationAttributeSet } from "../SelectedObjectClasses/TelecommunicationAttributeSet.osa.js";

/* START_OF_SYMBOL_DEFINITION OrganizationalAttributeSet */
/**
 * @summary OrganizationalAttributeSet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OrganizationalAttributeSet ATTRIBUTE ::= {description |
 *    LocaleAttributeSet |
 *    PostalAttributeSet |
 *    TelecommunicationAttributeSet |
 *    businessCategory |
 *    seeAlso |
 *    searchGuide |
 *    userPassword}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE[]}
 *
 */
export const OrganizationalAttributeSet: ATTRIBUTE[] = [
    description,
    ...LocaleAttributeSet,
    ...PostalAttributeSet,
    ...TelecommunicationAttributeSet,
    businessCategory,
    seeAlso,
    searchGuide,
    userPassword,
];
/* END_OF_SYMBOL_DEFINITION OrganizationalAttributeSet */

/* eslint-enable */
