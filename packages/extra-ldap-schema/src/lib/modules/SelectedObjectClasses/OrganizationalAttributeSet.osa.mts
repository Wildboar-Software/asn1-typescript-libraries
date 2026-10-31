/* eslint-disable */
import { type ATTRIBUTE} from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
// export { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { LocaleAttributeSet } from "../SelectedObjectClasses/LocaleAttributeSet.osa.mjs";
// export { LocaleAttributeSet } from "../SelectedObjectClasses/LocaleAttributeSet.osa.mjs";
import { PostalAttributeSet } from "../SelectedObjectClasses/PostalAttributeSet.osa.mjs";
// export { PostalAttributeSet } from "../SelectedObjectClasses/PostalAttributeSet.osa.mjs";
import { TelecommunicationAttributeSet } from "../SelectedObjectClasses/TelecommunicationAttributeSet.osa.mjs";
// export { TelecommunicationAttributeSet } from "../SelectedObjectClasses/TelecommunicationAttributeSet.osa.mjs";
import { businessCategory } from "../SelectedAttributeTypes/businessCategory.oa.mjs";
// export { businessCategory } from "../SelectedAttributeTypes/businessCategory.oa.mjs";
import { seeAlso } from "../SelectedAttributeTypes/seeAlso.oa.mjs";
// export { seeAlso } from "../SelectedAttributeTypes/seeAlso.oa.mjs";
import { searchGuide } from "../SelectedAttributeTypes/searchGuide.oa.mjs";
// export { searchGuide } from "../SelectedAttributeTypes/searchGuide.oa.mjs";
import { userPassword } from "../AuthenticationFramework/userPassword.oa.mjs";
// export { userPassword } from "../AuthenticationFramework/userPassword.oa.mjs";


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
export
const OrganizationalAttributeSet: (ATTRIBUTE)[] = [ description, ...LocaleAttributeSet, ...PostalAttributeSet, ...TelecommunicationAttributeSet, businessCategory, seeAlso, searchGuide, userPassword, ];

/* eslint-enable */
