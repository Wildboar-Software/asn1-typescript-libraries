/* eslint-disable */
import {
    ObjectIdentifier as _OID,
} from "@wildboar/asn1";

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { top } from "../InformationFramework/top.oa.mjs";
import { sambaSID } from "../SambaV3Schema/sambaSID.oa.mjs";

import { gidNumber } from "../NIS/gidNumber.oa.mjs";
import { uidNumber } from "../NIS/uidNumber.oa.mjs";
/**
 * @summary sambaIdmapEntry
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * sambaIdmapEntry OBJECT-CLASS ::= {
 *     SUBCLASS OF     {top}
 *     KIND            auxiliary
 *     MUST CONTAIN    {sambaSID}
 *     MAY CONTAIN     {gidNumber | uidNumber}
 *     LDAP-NAME       {"sambaIdmapEntry"}
 *     LDAP-DESC       "Mapping from a SID to an ID"
 *     ID              { 1 3 6 1 4 1 7165 2 2 8 }
 * }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const sambaIdmapEntry: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ sambaSID, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ gidNumber, uidNumber, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "sambaIdmapEntry" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Mapping from a SID to an ID" /* OBJECT_FIELD_SETTING */,
    "&id": _OID.fromParts([1, 3, 6, 1, 4, 1, 7165, 2, 2, 8,]) /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
