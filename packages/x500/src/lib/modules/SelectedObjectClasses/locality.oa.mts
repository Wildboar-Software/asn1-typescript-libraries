/* eslint-disable */
import { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import {
    structural /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { searchGuide } from "../SelectedAttributeTypes/searchGuide.oa.mjs";
import { seeAlso } from "../SelectedAttributeTypes/seeAlso.oa.mjs";
import { id_oc_locality } from "../SelectedObjectClasses/id-oc-locality.va.mjs";
import { LocaleAttributeSet } from "../SelectedObjectClasses/LocaleAttributeSet.osa.mjs";
/* START_OF_SYMBOL_DEFINITION locality */
/**
 * @summary locality
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * locality OBJECT-CLASS ::= {
 *   SUBCLASS OF  {top}
 *   MAY CONTAIN  {description |
 *                 searchGuide |
 *                 LocaleAttributeSet |
 *                 seeAlso}
 *   LDAP-NAME    {"locality"}  -- RFC 4519
 *   ID           id-oc-locality }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const locality: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [
        description,
        searchGuide,
        ...LocaleAttributeSet,
        seeAlso,
    ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["locality"],
    "&id": id_oc_locality /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION locality */

/* eslint-enable */
