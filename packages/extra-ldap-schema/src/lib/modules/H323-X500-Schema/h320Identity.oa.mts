/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { h320_id_oc } from "../H323-X500-Schema/h320-id-oc.va.mjs";
import { h320IdentityCC } from "../H323-X500-Schema/h320IdentityCC.oa.mjs";
import { h320IdentityNDC } from "../H323-X500-Schema/h320IdentityNDC.oa.mjs";
import { h320IdentitySN } from "../H323-X500-Schema/h320IdentitySN.oa.mjs";
import { h320IdentityServiceLevel } from "../H323-X500-Schema/h320IdentityServiceLevel.oa.mjs";
import { h320IdentityExtension } from "../H323-X500-Schema/h320IdentityExtension.oa.mjs";


/**
 * @summary h320Identity
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * h320Identity OBJECT-CLASS ::= {
 *   SUBCLASS OF  {top}
 *   MAY CONTAIN
 *     {h320IdentityCC | h320IdentityNDC | h320IdentitySN |
 *       h320IdentityServiceLevel | h320IdentityExtension}
 *   ID           {h320-id-oc  1}
 * }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const h320Identity: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ h320IdentityCC, h320IdentityNDC, h320IdentitySN, h320IdentityServiceLevel, h320IdentityExtension, ] /* OBJECT_FIELD_SETTING */,
    "&id": _OID.fromParts([1,], h320_id_oc) /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

