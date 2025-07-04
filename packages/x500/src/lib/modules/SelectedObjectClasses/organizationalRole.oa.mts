/* eslint-disable */
import { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import {
    structural /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { organizationalUnitName } from "../SelectedAttributeTypes/organizationalUnitName.oa.mjs";
import { preferredDeliveryMethod } from "../SelectedAttributeTypes/preferredDeliveryMethod.oa.mjs";
import { roleOccupant } from "../SelectedAttributeTypes/roleOccupant.oa.mjs";
import { seeAlso } from "../SelectedAttributeTypes/seeAlso.oa.mjs";
import { id_oc_organizationalRole } from "../SelectedObjectClasses/id-oc-organizationalRole.va.mjs";
import { LocaleAttributeSet } from "../SelectedObjectClasses/LocaleAttributeSet.osa.mjs";
import { PostalAttributeSet } from "../SelectedObjectClasses/PostalAttributeSet.osa.mjs";
import { TelecommunicationAttributeSet } from "../SelectedObjectClasses/TelecommunicationAttributeSet.osa.mjs";
/**
 * @summary organizationalRole
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * organizationalRole OBJECT-CLASS ::= {
 *   SUBCLASS OF   {top}
 *   MUST CONTAIN  {commonName}
 *   MAY CONTAIN   {description |
 *                  LocaleAttributeSet |
 *                  organizationalUnitName |
 *                  PostalAttributeSet |
 *                  preferredDeliveryMethod |
 *                  roleOccupant |
 *                  seeAlso |
 *                  TelecommunicationAttributeSet}
 *   LDAP-NAME      {"organizationalRole"}  -- RFC 4519
 *   ID            id-oc-organizationalRole }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const organizationalRole: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [
        description,
        ...LocaleAttributeSet,
        organizationalUnitName,
        ...PostalAttributeSet,
        preferredDeliveryMethod,
        roleOccupant,
        seeAlso,
        ...TelecommunicationAttributeSet,
    ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["organizationalRole"],
    "&id": id_oc_organizationalRole /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
