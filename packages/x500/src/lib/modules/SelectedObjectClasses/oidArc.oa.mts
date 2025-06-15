/* eslint-disable */
import { alias } from "../InformationFramework/alias.oa.mjs";
import { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import {
    structural /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/ObjectClassKind.ta.mjs";
import { oidC } from "../SelectedAttributeTypes/oidC.oa.mjs";
import { id_oidArc } from "../SelectedObjectClasses/id-oidArc.va.mjs";
/**
 * @summary oidArc
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * oidArc OBJECT-CLASS ::= {
 *   SUBCLASS OF   {alias}
 *   MUST CONTAIN  {oidC}
 *   LDAP-NAME     {"oidArc"}
 *   ID            id-oidArc }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const oidArc: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [alias] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [oidC] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["oidArc"],
    "&id": id_oidArc /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
