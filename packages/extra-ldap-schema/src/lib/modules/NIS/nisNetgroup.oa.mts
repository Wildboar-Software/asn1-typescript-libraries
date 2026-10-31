/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_nis_oc } from "../NIS/id-nis-oc.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { memberNisNetgroup } from "./memberNisNetgroup.oa.mjs";
import { nisNetgroupTriple } from "./nisNetgroupTriple.oa.mjs";

/**
 * @summary nisNetgroup
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nisNetgroup OBJECT-CLASS ::= {
 *     SUBCLASS OF     {top}
 *     KIND            structural
 *     MUST CONTAIN    {commonName}
 *     MAY CONTAIN        {
 *         nisNetgroupTriple
 *         | memberNisNetgroup
 *         | description
 *     }
 *     LDAP-NAME        {"nisNetgroup"}
 *     LDAP-DESC        "Abstraction of a netgroup"
 *     ID                { id-nis-oc 8 }
 * }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const nisNetgroup: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [nisNetgroupTriple, memberNisNetgroup, description] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["nisNetgroup"],
    "&ldapDesc": "Abstraction of a netgroup" /* OBJECT_FIELD_SETTING */,
    "&id": _OID.fromParts([
        8,
    ], id_nis_oc) /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
