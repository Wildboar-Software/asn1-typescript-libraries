/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import {
    auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { contentUrl } from "../SelectedAttributeTypes/contentUrl.oa.mjs";
import { epc } from "../SelectedAttributeTypes/epc.oa.mjs";
import { epcInUrn } from "../SelectedAttributeTypes/epcInUrn.oa.mjs";
import { tagLocation } from "../SelectedAttributeTypes/tagLocation.oa.mjs";
import { id_oc_epcTagInfoObj } from "../SelectedObjectClasses/id-oc-epcTagInfoObj.va.mjs";
/**
 * @summary epcTagInfoObj
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * epcTagInfoObj OBJECT-CLASS ::= {
 *   SUBCLASS OF  { top }
 *   KIND         auxiliary
 *   MAY CONTAIN  { epc |
 *                  epcInUrn |
 *                  contentUrl |
 *                  tagLocation }
 *   LDAP-NAME    {"epcTagInfoObj"}
 *   ID           id-oc-epcTagInfoObj }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const epcTagInfoObj: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [
        epc,
        epcInUrn,
        contentUrl,
        tagLocation,
    ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["epcTagInfoObj"],
    "&id": id_oc_epcTagInfoObj /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
