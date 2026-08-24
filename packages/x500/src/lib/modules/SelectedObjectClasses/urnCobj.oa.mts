/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import {
    structural /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { urnC } from "../SelectedAttributeTypes/urnC.oa.mjs";
import { id_oc_urnCobj } from "../SelectedObjectClasses/id-oc-urnCobj.va.mjs";
/**
 * @summary urnCobj
 * @description
 *
 * One component of a URN mapped into the DIT. Named by `urnC`
 * (`PrintableString`, `caseExactMatch`). X.520: the subtree root for a
 * class of URNs holds the IANA namespace identifier in `urnC`. Spec
 * prose for this class is truncated.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * urnCobj OBJECT-CLASS ::= {
 *   SUBCLASS OF   {top}
 *   MUST CONTAIN  { urnC }
 *   LDAP-NAME     {"urnCobj"}
 *   ID            id-oc-urnCobj }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const urnCobj: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [urnC] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["urnCobj"],
    "&id": id_oc_urnCobj /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
