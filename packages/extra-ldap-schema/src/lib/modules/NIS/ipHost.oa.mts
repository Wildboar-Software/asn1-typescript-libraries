/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { manager } from "../LdapSchema2ldifCosine/manager.oa.mjs";
import { id_nis_oc } from "../NIS/id-nis-oc.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { localityName } from "../SelectedAttributeTypes/localityName.oa.mjs";
import { ipHostNumber } from "./ipHostNumber.oa.mjs";

/**
 * @summary ipHost
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ipHost OBJECT-CLASS ::= {
 *     SUBCLASS OF     {top}
 *     KIND            auxiliary
 *     MUST CONTAIN    {commonName | ipHostNumber}
 *     MAY CONTAIN        {localityName | description | manager}
 *     LDAP-NAME        {"ipHost"}
 *     LDAP-DESC        "Abstraction of a host, an IP device"
 *     ID                { id-nis-oc 6 }
 * }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const ipHost: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName, ipHostNumber] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [localityName, description, manager] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["ipHost"],
    "&ldapDesc": "Abstraction of a host, an IP device" /* OBJECT_FIELD_SETTING */,
    "&id": _OID.fromParts([
        6,
    ], id_nis_oc) /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
