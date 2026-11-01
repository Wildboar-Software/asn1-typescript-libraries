/* eslint-disable */
import {
    ObjectIdentifier as _OID,
} from "@wildboar/asn1";

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { top } from "../InformationFramework/top.oa.mjs";
import { id_nis_oc } from "../NIS/id-nis-oc.va.mjs";

import { ipNetmaskNumber } from "../NIS/ipNetmaskNumber.oa.mjs";
import { localityName } from "../SelectedAttributeTypes/localityName.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { manager } from "../LdapSchema2ldifCosine/manager.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { ipNetworkNumber } from "../NIS/ipNetworkNumber.oa.mjs";
/**
 * @summary ipNetwork
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ipNetwork OBJECT-CLASS ::= {
 *     SUBCLASS OF     {top}
 *     KIND            structural
 *     MUST CONTAIN    {commonName | ipNetworkNumber}
 *     MAY CONTAIN        {ipNetmaskNumber | localityName | description | manager}
 *     LDAP-NAME        {"ipNetwork"}
 *     LDAP-DESC        "Abstraction of an IP network"
 *     ID                { id-nis-oc 7 }
 * }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const ipNetwork: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, ipNetworkNumber, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ ipNetmaskNumber, localityName, description, manager, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "ipNetwork" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Abstraction of an IP network" /* OBJECT_FIELD_SETTING */,
    "&id": _OID.fromParts([7,], id_nis_oc) /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
