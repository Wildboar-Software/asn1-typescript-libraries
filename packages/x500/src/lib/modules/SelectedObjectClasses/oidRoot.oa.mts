/* eslint-disable */
import { alias } from "../InformationFramework/alias.oa.mjs";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import {
    structural /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/ObjectClassKind.ta.mjs";
import { oidC } from "../SelectedAttributeTypes/oidC.oa.mjs";
import { oidC1 } from "../SelectedAttributeTypes/oidC1.oa.mjs";
import { oidC2 } from "../SelectedAttributeTypes/oidC2.oa.mjs";
import { id_oidRoot } from "../SelectedObjectClasses/id-oidRoot.va.mjs";
/**
 * @summary oidRoot
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * oidRoot OBJECT-CLASS ::= {
 *   SUBCLASS OF   {alias}
 *   MUST CONTAIN  { oidC1 | oidC2 | oidC}
 *   LDAP-NAME     {"oidRoot"}
 *   ID            id-oidRoot }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const oidRoot: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [alias] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [oidC1, oidC2, oidC] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["oidRoot"],
    "&id": id_oidRoot /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
