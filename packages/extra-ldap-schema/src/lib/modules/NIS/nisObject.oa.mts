/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
// export { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { id_nis_oc } from "../NIS/id-nis-oc.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { nisMapEntry } from "../NIS/nisMapEntry.oa.mjs";
import { nisMapName } from "../NIS/nisMapName.oa.mjs";
// export { id_nis_oc } from "../NIS/id-nis-oc.va.mjs";


/**
 * @summary nisObject
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nisObject OBJECT-CLASS ::= {
 *     SUBCLASS OF     {top}
 *     KIND            structural
 *     MUST CONTAIN    {commonName | nisMapEntry | nisMapName}
 *     MAY CONTAIN        {description}
 *     LDAP-NAME        {"nisObject"}
 *     LDAP-DESC        "An entry in a NIS map"
 *     ID                { id-nis-oc 10 }
 * }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const nisObject: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, nisMapEntry, nisMapName, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ description, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "nisObject" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "An entry in a NIS map" /* OBJECT_FIELD_SETTING */,
    "&id": _OID.fromParts([10,], id_nis_oc) /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
