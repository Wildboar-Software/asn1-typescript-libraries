/* eslint-disable */
import { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import {
    structural /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/ObjectClassKind.ta.mjs";
import { knowledgeInformation } from "../SelectedAttributeTypes/knowledgeInformation.oa.mjs";
import { applicationEntity } from "../SelectedObjectClasses/applicationEntity.oa.mjs";
import { id_oc_dSA } from "../SelectedObjectClasses/id-oc-dSA.va.mjs";
/**
 * @summary dSA
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dSA OBJECT-CLASS ::= {
 *   SUBCLASS OF   {applicationEntity}
 *   MAY CONTAIN   {knowledgeInformation}
 *   LDAP-NAME     {"dSA"} -- RFC 2256
 *   ID            id-oc-dSA }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const dSA: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [applicationEntity] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [knowledgeInformation] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["dSA"],
    "&id": id_oc_dSA /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
