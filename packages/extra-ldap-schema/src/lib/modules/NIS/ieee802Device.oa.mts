/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_nis_oc } from "../NIS/id-nis-oc.va.mjs";
import { macAddress } from "../NIS/macAddress.oa.mjs";

/**
 * @summary ieee802Device
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ieee802Device OBJECT-CLASS ::= {
 *     SUBCLASS OF     {top}
 *     KIND            auxiliary
 *     MAY CONTAIN        {macAddress}
 *     LDAP-NAME        {"ieee802Device"}
 *     LDAP-DESC        "A device with a MAC address"
 *     ID                { id-nis-oc 11 }
 * }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const ieee802Device: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [macAddress] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["ieee802Device"],
    "&ldapDesc": "A device with a MAC address" /* OBJECT_FIELD_SETTING */,
    "&id": _OID.fromParts([
        11,
    ], id_nis_oc) /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
