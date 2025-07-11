/* eslint-disable */
import { userPassword } from "../AuthenticationFramework/userPassword.oa.mjs";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { businessCategory } from "../SelectedAttributeTypes/businessCategory.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { searchGuide } from "../SelectedAttributeTypes/searchGuide.oa.mjs";
import { seeAlso } from "../SelectedAttributeTypes/seeAlso.oa.mjs";
import { LocaleAttributeSet } from "../SelectedObjectClasses/LocaleAttributeSet.osa.mjs";
import { PostalAttributeSet } from "../SelectedObjectClasses/PostalAttributeSet.osa.mjs";
import { TelecommunicationAttributeSet } from "../SelectedObjectClasses/TelecommunicationAttributeSet.osa.mjs";
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

/* eslint-enable */
