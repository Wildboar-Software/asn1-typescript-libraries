/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { nsdsoc } from "../DSEE/nsdsoc.va.mjs";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { changeNumber } from "./changeNumber.oa.mjs";
import { changeTime } from "./changeTime.oa.mjs";
import { changeType } from "./changeType.oa.mjs";
import { changes } from "./changes.oa.mjs";
import { deleteOldRdn } from "./deleteOldRdn.oa.mjs";
import { newRdn } from "./newRdn.oa.mjs";
import { newSuperior } from "./newSuperior.oa.mjs";
import { targetDn } from "./targetDn.oa.mjs";

/**
 * @summary changeLogEntry
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * changeLogEntry OBJECT-CLASS ::= {
 *     SUBCLASS OF     {top}
 *     KIND            structural
 *     MUST CONTAIN    {targetDn | changeTime | changeNumber | changeType}
 *     MAY CONTAIN        {changes | newRdn | deleteOldRdn | newSuperior}
 *     LDAP-NAME        {"changeLogEntry"}
 *     ID                { nsdsoc 1 }
 * }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const changeLogEntry: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [targetDn, changeTime, changeNumber, changeType] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [changes, newRdn, deleteOldRdn, newSuperior] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["changeLogEntry"],
    "&id": _OID.fromParts([
        1,
    ], nsdsoc) /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
