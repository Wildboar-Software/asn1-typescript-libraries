/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import {
    structural /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/ObjectClassKind.ta.mjs";
import { businessCategory } from "../SelectedAttributeTypes/businessCategory.oa.mjs";
import { localityName } from "../SelectedAttributeTypes/localityName.oa.mjs";
import { preferredDeliveryMethod } from "../SelectedAttributeTypes/preferredDeliveryMethod.oa.mjs";
import { id_oc_residentialPerson } from "../SelectedObjectClasses/id-oc-residentialPerson.va.mjs";
import { LocaleAttributeSet } from "../SelectedObjectClasses/LocaleAttributeSet.osa.mjs";
import { person } from "../SelectedObjectClasses/person.oa.mjs";
import { PostalAttributeSet } from "../SelectedObjectClasses/PostalAttributeSet.osa.mjs";
import { TelecommunicationAttributeSet } from "../SelectedObjectClasses/TelecommunicationAttributeSet.osa.mjs";
/**
 * @summary residentialPerson
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * residentialPerson OBJECT-CLASS ::= {
 *   SUBCLASS OF   {person}
 *   MUST CONTAIN  {localityName}
 *   MAY CONTAIN   {LocaleAttributeSet |
 *                  PostalAttributeSet |
 *                  preferredDeliveryMethod |
 *                  TelecommunicationAttributeSet |
 *                  businessCategory}
 *   LDAP-NAME     {"residentialPerson"}  -- RFC 4519
 *   ID            id-oc-residentialPerson }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const residentialPerson: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [person] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [localityName] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [
        ...LocaleAttributeSet,
        ...PostalAttributeSet,
        preferredDeliveryMethod,
        ...TelecommunicationAttributeSet,
        businessCategory,
    ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["residentialPerson"],
    "&id": id_oc_residentialPerson /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
