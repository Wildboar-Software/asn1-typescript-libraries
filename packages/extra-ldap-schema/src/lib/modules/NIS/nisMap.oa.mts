/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_nis_oc } from "../NIS/id-nis-oc.va.mjs";
import { nisMapName } from "../NIS/nisMapName.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";

/**
 * @summary nisMap
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nisMap OBJECT-CLASS ::= {
 *     SUBCLASS OF     {top}
 *     KIND            structural
 *     MUST CONTAIN    {nisMapName}
 *     MAY CONTAIN        {description}
 *     LDAP-NAME        {"nisMap"}
 *     LDAP-DESC        "A generic abstraction of a NIS map"
 *     ID                { id-nis-oc 9 }
 * }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const nisMap: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [nisMapName] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [description] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["nisMap"],
    "&ldapDesc": "A generic abstraction of a NIS map" /* OBJECT_FIELD_SETTING */,
    "&id": _OID.fromParts([
        9,
    ], id_nis_oc) /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
