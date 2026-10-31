/* eslint-disable */
import {
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SupportedCurves
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SupportedCurves OBJECT IDENTIFIER ::= {dummyCurv, ...}
 * ```
 * 
 * @type {OBJECT_IDENTIFIER}
 */
export
type SupportedCurves = OBJECT_IDENTIFIER; // VALUE_SET_TYPE

export
const _decode_SupportedCurves: $.ASN1Decoder<SupportedCurves> = $._decodeObjectIdentifier;

export
const _encode_SupportedCurves: $.ASN1Encoder<SupportedCurves> = $._encodeObjectIdentifier;

/* eslint-enable */
