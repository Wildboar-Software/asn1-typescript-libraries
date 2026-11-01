/* eslint-disable */
import {
    ObjectIdentifier as _OID,
} from "@wildboar/asn1";

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { top } from "../InformationFramework/top.oa.mjs";
import { gi_oc } from "../H323-X500-Schema/gi-oc.va.mjs";

import { genericIdentityProtocolIdentifier } from "../H323-X500-Schema/genericIdentityProtocolIdentifier.oa.mjs";
import { genericIdentityMessage } from "../H323-X500-Schema/genericIdentityMessage.oa.mjs";
/**
 * @summary genericIdentity
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * genericIdentity OBJECT-CLASS ::= {
 *   SUBCLASS OF  {top}
 *   MAY CONTAIN  {genericIdentityProtocolIdentifier | genericIdentityMessage}
 *   ID           {gi-oc  1}
 * }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const genericIdentity: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ genericIdentityProtocolIdentifier, genericIdentityMessage, ] /* OBJECT_FIELD_SETTING */,
    "&id": _OID.fromParts([1,], gi_oc) /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
