/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import {
    structural /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { oidC } from "../SelectedAttributeTypes/oidC.oa.mjs";
import { id_oc_oidCobj } from "../SelectedObjectClasses/id-oc-oidCobj.va.mjs";
/**
 * @summary oidCobj
 * @description
 *
 * Third-or-lower OID arc entry. MUST `oidC`. Tag-based OIDs typically
 * have only three levels, first two `{2 27}` (X.521). All three name
 * forms `oidC1NameForm` / `oidC2NameForm` / `oidCNameForm` name this
 * class with `oidC`.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * oidCobj OBJECT-CLASS ::= {
 *   SUBCLASS OF   {top}
 *   MUST CONTAIN  {oidC}
 *   LDAP-NAME     {"oidCobj"}
 *   ID            id-oc-oidCobj }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const oidCobj: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [oidC] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["oidCobj"],
    "&id": id_oc_oidCobj /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
