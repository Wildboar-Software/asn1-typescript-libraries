/* eslint-disable */
import { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import {
    auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { tagAfi } from "../SelectedAttributeTypes/tagAfi.oa.mjs";
import { tagOid } from "../SelectedAttributeTypes/tagOid.oa.mjs";
import { uiiFormat } from "../SelectedAttributeTypes/uiiFormat.oa.mjs";
import { id_oc_isoTagType } from "../SelectedObjectClasses/id-oc-isoTagType.va.mjs";
/**
 * @summary isoTagType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * isoTagType  OBJECT-CLASS ::= {
 *   SUBCLASS OF  { top }
 *   KIND         auxiliary
 *   MAY CONTAIN  { tagOid |
 *                  tagAfi |
 *                  uiiFormat }
 *   LDAP-NAME    {"isoTagType"}
 *   ID           id-oc-isoTagType }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const isoTagType: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [
        tagOid,
        tagAfi,
        uiiFormat,
    ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["isoTagType"],
    "&id": id_oc_isoTagType /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
