/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_nis_oc } from "../NIS/id-nis-oc.va.mjs";
import { bootFile } from "./bootFile.oa.mjs";
import { bootParameter } from "./bootParameter.oa.mjs";

/**
 * @summary bootableDevice
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * bootableDevice OBJECT-CLASS ::= {
 *     SUBCLASS OF     {top}
 *     KIND            auxiliary
 *     MAY CONTAIN        {bootFile | bootParameter}
 *     LDAP-NAME        {"bootableDevice"}
 *     LDAP-DESC        "A device with boot parameters"
 *     ID                { id-nis-oc 12 }
 * }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const bootableDevice: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [bootFile, bootParameter] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["bootableDevice"],
    "&ldapDesc": "A device with boot parameters" /* OBJECT_FIELD_SETTING */,
    "&id": _OID.fromParts([
        12,
    ], id_nis_oc) /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
