/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import {
    structural /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { oidC } from "../SelectedAttributeTypes/oidC.oa.mjs";
import { id_oc_oidC1obj } from "../SelectedObjectClasses/id-oc-oidC1obj.va.mjs";
/**
 * @summary oidC1obj
 * @description
 *
 * First-arc OID component entry. MUST CONTAIN `oidC` (not `oidC1`).
 * X.520 says `oidC1` (INTEGER 0, 1, or 2 only) is the intended naming
 * attribute for this class and for `oidRoot` — the object class ASN.1
 * does not require `oidC1`. No name form in this module names this class
 * (`oidC1NameForm` names `oidCobj`).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * oidC1obj OBJECT-CLASS ::= {
 *   SUBCLASS OF   {top}
 *   MUST CONTAIN  {oidC}
 *   LDAP-NAME     {"oidC1obj"}
 *   ID            id-oc-oidC1obj }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const oidC1obj: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [oidC] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["oidC1obj"],
    "&id": id_oc_oidC1obj /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
