/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_nis_oc } from "../NIS/id-nis-oc.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { oncRpcNumber } from "./oncRpcNumber.oa.mjs";

/**
 * @summary oncRpc
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * oncRpc OBJECT-CLASS ::= {
 *     SUBCLASS OF     {top}
 *     KIND            structural
 *     MUST CONTAIN    {commonName | oncRpcNumber}
 *     MAY CONTAIN        {description}
 *     LDAP-NAME        {"oncRpc"}
 *     LDAP-DESC        "Abstraction of an ONC/RPC binding"
 *     ID                { id-nis-oc 5 }
 * }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const oncRpc: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName, oncRpcNumber] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [description] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["oncRpc"],
    "&ldapDesc": "Abstraction of an ONC/RPC binding" /* OBJECT_FIELD_SETTING */,
    "&id": _OID.fromParts([
        5,
    ], id_nis_oc) /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
