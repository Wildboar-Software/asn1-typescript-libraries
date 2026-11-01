/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { sambaOptionName } from "../SambaV3Schema/sambaOptionName.oa.mjs";
import { sambaBoolOption } from "../SambaV3Schema/sambaBoolOption.oa.mjs";
import { sambaIntegerOption } from "../SambaV3Schema/sambaIntegerOption.oa.mjs";
import { sambaStringListOption } from "../SambaV3Schema/sambaStringListOption.oa.mjs";
import { sambaStringOption } from "../SambaV3Schema/sambaStringOption.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";


/**
 * @summary sambaConfigOption
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * sambaConfigOption OBJECT-CLASS ::= {
 *     SUBCLASS OF     {top}
 *     KIND            structural
 *     MUST CONTAIN    {sambaOptionName}
 *     MAY CONTAIN     {sambaBoolOption | sambaIntegerOption | sambaStringListOption | sambaStringOption | description}
 *     LDAP-NAME       {"sambaConfigOption"}
 *     LDAP-DESC       "Samba Configuration Option"
 *     ID              { 1 3 6 1 4 1 7165 2 2 12 }
 * }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const sambaConfigOption: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ sambaOptionName, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ sambaBoolOption, sambaIntegerOption, sambaStringListOption, sambaStringOption, description, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "sambaConfigOption" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Samba Configuration Option" /* OBJECT_FIELD_SETTING */,
    "&id": _OID.fromParts([1, 3, 6, 1, 4, 1, 7165, 2, 2, 12,]) /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

