/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { organizationalUnitName } from "../SelectedAttributeTypes/organizationalUnitName.oa.mjs";
import { title } from "../SelectedAttributeTypes/title.oa.mjs";
import { id_oc_organizationalPerson } from "../SelectedObjectClasses/id-oc-organizationalPerson.va.mjs";
import { person } from "../SelectedObjectClasses/person.oa.mjs";
import { LocaleAttributeSet } from "./LocaleAttributeSet.osa.mjs";
import { PostalAttributeSet } from "./PostalAttributeSet.osa.mjs";
import { TelecommunicationAttributeSet } from "./TelecommunicationAttributeSet.osa.mjs";

/**
 * @summary organizationalPerson
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * organizationalPerson OBJECT-CLASS ::= {
 *   SUBCLASS OF  {person}
 *   MAY CONTAIN  {LocaleAttributeSet |
 *                 PostalAttributeSet |
 *                 TelecommunicationAttributeSet |
 *                 organizationalUnitName |
 *                 title}
 *   LDAP-NAME    {"organizationalPerson"}  -- RFC 4519
 *   ID           id-oc-organizationalPerson }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const organizationalPerson: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [person] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [...LocaleAttributeSet, ...PostalAttributeSet, ...TelecommunicationAttributeSet, organizationalUnitName, title] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["organizationalPerson"],
    "&id": id_oc_organizationalPerson /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
