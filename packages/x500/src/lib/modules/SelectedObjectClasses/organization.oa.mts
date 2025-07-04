/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import {
    structural /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { organizationName } from "../SelectedAttributeTypes/organizationName.oa.mjs";
import { id_oc_organization } from "../SelectedObjectClasses/id-oc-organization.va.mjs";
import { OrganizationalAttributeSet } from "../SelectedObjectClasses/OrganizationalAttributeSet.osa.mjs";
/**
 * @summary organization
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * organization OBJECT-CLASS ::= {
 *   SUBCLASS OF   {top}
 *   MUST CONTAIN  {organizationName}
 *   MAY CONTAIN   {OrganizationalAttributeSet}
 *   LDAP-NAME     {"organization"}  -- RFC 4519
 *   ID            id-oc-organization }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const organization: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [organizationName] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [
        ...OrganizationalAttributeSet,
    ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["organization"],
    "&id": id_oc_organization /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
