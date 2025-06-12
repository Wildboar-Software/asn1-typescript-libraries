/* eslint-disable */
import { userPassword } from "../AuthenticationFramework/userPassword.oa.mjs";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { businessCategory } from "../SelectedAttributeTypes/businessCategory.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { searchGuide } from "../SelectedAttributeTypes/searchGuide.oa.mjs";
import { seeAlso } from "../SelectedAttributeTypes/seeAlso.oa.mjs";
import { LocaleAttributeSet } from "../SelectedObjectClasses/LocaleAttributeSet.osa.mjs";
import { PostalAttributeSet } from "../SelectedObjectClasses/PostalAttributeSet.osa.mjs";
import { TelecommunicationAttributeSet } from "../SelectedObjectClasses/TelecommunicationAttributeSet.osa.mjs";
export { userPassword } from "../AuthenticationFramework/userPassword.oa.mjs";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
export { businessCategory } from "../SelectedAttributeTypes/businessCategory.oa.mjs";
export { description } from "../SelectedAttributeTypes/description.oa.mjs";
export { searchGuide } from "../SelectedAttributeTypes/searchGuide.oa.mjs";
export { seeAlso } from "../SelectedAttributeTypes/seeAlso.oa.mjs";
export { LocaleAttributeSet } from "../SelectedObjectClasses/LocaleAttributeSet.osa.mjs";
export { PostalAttributeSet } from "../SelectedObjectClasses/PostalAttributeSet.osa.mjs";
export { TelecommunicationAttributeSet } from "../SelectedObjectClasses/TelecommunicationAttributeSet.osa.mjs";

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
