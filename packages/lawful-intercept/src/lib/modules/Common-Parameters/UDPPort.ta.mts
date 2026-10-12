/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UDPPort
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UDPPort  ::=  INTEGER (0..65535)
 * ```
 */
export
type UDPPort = INTEGER;
export const _decode_UDPPort: $.ASN1Decoder<UDPPort> = $._decodeInteger;
export const _encode_UDPPort: $.ASN1Encoder<UDPPort> = $._encodeInteger;


/* eslint-enable */
