/* eslint-disable */
import {
    ObjectIdentifier as _OID,
} from "@wildboar/asn1";

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { top } from "../InformationFramework/top.oa.mjs";

import { uidNumber } from "../NIS/uidNumber.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { nisPublicKey } from "../RFC2307bis/nisPublicKey.oa.mjs";
import { nisSecretKey } from "../RFC2307bis/nisSecretKey.oa.mjs";
/**
 * @summary nisKeyObject
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nisKeyObject OBJECT-CLASS ::= {
 *     SUBCLASS OF     {top}
 *     KIND            auxiliary
 *     MUST CONTAIN    {commonName | nisPublicKey | nisSecretKey}
 *     MAY CONTAIN     {uidNumber | description}
 *     LDAP-NAME       {"nisKeyObject"}
 *     LDAP-DESC       "An object with a public and secret key"
 *     ID              { 1 3 6 1 1 1 2 14 }
 * }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const nisKeyObject: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, nisPublicKey, nisSecretKey, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ uidNumber, description, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "nisKeyObject" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "An object with a public and secret key" /* OBJECT_FIELD_SETTING */,
    "&id": _OID.fromParts([1, 3, 6, 1, 1, 1, 2, 14,]) /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
