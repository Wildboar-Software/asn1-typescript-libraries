/* eslint-disable */
import {
    ObjectIdentifier as _OID,
} from "@wildboar/asn1";

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { top } from "../InformationFramework/top.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { id_nis_oc } from "../NIS/id-nis-oc.va.mjs";

import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { ipServicePort } from "../NIS/ipServicePort.oa.mjs";
import { ipServiceProtocol } from "../NIS/ipServiceProtocol.oa.mjs";
/**
 * @summary ipService
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ipService OBJECT-CLASS ::= {
 *     SUBCLASS OF     {top}
 *     KIND            structural
 *     MUST CONTAIN    {
 *         commonName
 *         | ipServicePort
 *         | ipServiceProtocol
 *     }
 *     MAY CONTAIN        {description}
 *     LDAP-NAME        {"ipService"}
 *     LDAP-DESC        "Abstraction an Internet Protocol service"
 *     ID                { id-nis-oc 3 }
 * }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const ipService: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, ipServicePort, ipServiceProtocol, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ description, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "ipService" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Abstraction an Internet Protocol service" /* OBJECT_FIELD_SETTING */,
    "&id": _OID.fromParts([3,], id_nis_oc) /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
