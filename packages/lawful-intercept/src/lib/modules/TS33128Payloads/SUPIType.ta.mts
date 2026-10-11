/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SUPIType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SUPIType  ::=  INTEGER (0..7)
 * ```
 */
export
type SUPIType = INTEGER;

export const _decode_SUPIType: $.ASN1Decoder<SUPIType> = $._decodeInteger;

export const _encode_SUPIType: $.ASN1Encoder<SUPIType> = $._encodeInteger;


/* eslint-enable */
