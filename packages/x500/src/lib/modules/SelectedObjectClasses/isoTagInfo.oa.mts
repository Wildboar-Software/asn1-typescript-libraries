/* eslint-disable */
import { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import {
    auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { contentUrl } from "../SelectedAttributeTypes/contentUrl.oa.mjs";
import { tagAfi } from "../SelectedAttributeTypes/tagAfi.oa.mjs";
import { tagLocation } from "../SelectedAttributeTypes/tagLocation.oa.mjs";
import { tagOid } from "../SelectedAttributeTypes/tagOid.oa.mjs";
import { uii } from "../SelectedAttributeTypes/uii.oa.mjs";
import { uiiInUrn } from "../SelectedAttributeTypes/uiiInUrn.oa.mjs";
import { id_oc_isoTagInfo } from "../SelectedObjectClasses/id-oc-isoTagInfo.va.mjs";
/**
 * @summary isoTagInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * isoTagInfo OBJECT-CLASS ::= {
 *   SUBCLASS OF  { top }
 *   KIND         auxiliary
 *   MAY CONTAIN  { tagOid |
 *                  tagAfi |
 *                  uii |
 *                  uiiInUrn |
 *                  contentUrl |
 *                  tagLocation }
 *   LDAP-NAME    {"isoTagInfo"}
 *   ID           id-oc-isoTagInfo }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const isoTagInfo: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [
        tagOid,
        tagAfi,
        uii,
        uiiInUrn,
        contentUrl,
        tagLocation,
    ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["isoTagInfo"],
    "&id": id_oc_isoTagInfo /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
