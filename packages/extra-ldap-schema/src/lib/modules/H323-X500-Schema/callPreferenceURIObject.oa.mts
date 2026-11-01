/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { callPreferenceURI } from "../H323-X500-Schema/callPreferenceURI.oa.mjs";
import { call_id_oc } from "../H323-X500-Schema/call-id-oc.va.mjs";

/**
 * @summary callPreferenceURIObject
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * callPreferenceURIObject OBJECT-CLASS ::= {
 *   SUBCLASS OF  {top}
 *   MAY CONTAIN  {callPreferenceURI}
 *   ID           {call-id-oc  1}
 * }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const callPreferenceURIObject: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ callPreferenceURI, ] /* OBJECT_FIELD_SETTING */,
    "&id": _OID.fromParts([1,], call_id_oc) /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
