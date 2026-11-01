/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { nsdsoc } from "../DSEE/nsdsoc.va.mjs";
import { targetDn } from "../DSEE/targetDn.oa.mjs";
import { changeTime } from "../DSEE/changeTime.oa.mjs";
import { changeNumber } from "../DSEE/changeNumber.oa.mjs";
import { changeType } from "../DSEE/changeType.oa.mjs";
import { changes } from "../DSEE/changes.oa.mjs";
import { newRdn } from "../DSEE/newRdn.oa.mjs";
import { deleteOldRdn } from "../DSEE/deleteOldRdn.oa.mjs";
import { newSuperior } from "../DSEE/newSuperior.oa.mjs";
// export { nsdsoc } from "../DSEE/nsdsoc.va.mjs";


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
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ targetDn, changeTime, changeNumber, changeType, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ changes, newRdn, deleteOldRdn, newSuperior, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "changeLogEntry" ] /* OBJECT_FIELD_SETTING */,
    "&id": _OID.fromParts([1,], nsdsoc) /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
