/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { commURI } from "../H323-X500-Schema/commURI.oa.mjs";
import { cu_oc } from "../H323-X500-Schema/cu-oc.va.mjs";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";

/**
 * @summary commURIObject
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * commURIObject OBJECT-CLASS ::= {
 *   SUBCLASS OF  {top}
 *   KIND         auxiliary
 *   MAY CONTAIN  {commURI}
 *   ID           {cu-oc  1}
 * }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const commURIObject: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [commURI] /* OBJECT_FIELD_SETTING */,
    "&id": _OID.fromParts([
        1,
    ], cu_oc) /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
