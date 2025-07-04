/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import {
    structural /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { localityName } from "../SelectedAttributeTypes/localityName.oa.mjs";
import { organizationalUnitName } from "../SelectedAttributeTypes/organizationalUnitName.oa.mjs";
import { organizationName } from "../SelectedAttributeTypes/organizationName.oa.mjs";
import { presentationAddress } from "../SelectedAttributeTypes/presentationAddress.oa.mjs";
import { seeAlso } from "../SelectedAttributeTypes/seeAlso.oa.mjs";
import { supportedApplicationContext } from "../SelectedAttributeTypes/supportedApplicationContext.oa.mjs";
import { id_oc_applicationEntity } from "../SelectedObjectClasses/id-oc-applicationEntity.va.mjs";
/**
 * @summary applicationEntity
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * applicationEntity OBJECT-CLASS ::= {
 *   SUBCLASS OF   {top}
 *   MUST CONTAIN  {commonName |
 *                  presentationAddress}
 *   MAY CONTAIN   {description |
 *                  localityName |
 *                  organizationName |
 *                  organizationalUnitName |
 *                  seeAlso |
 *                  supportedApplicationContext}
 *   LDAP-NAME     {"applicationEntity"} -- RFC 2256
 *   ID            id-oc-applicationEntity }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const applicationEntity: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [
        commonName,
        presentationAddress,
    ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [
        description,
        localityName,
        organizationName,
        organizationalUnitName,
        seeAlso,
        supportedApplicationContext,
    ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["applicationEntity"],
    "&id": id_oc_applicationEntity /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
