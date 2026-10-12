/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TCPPort
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TCPPort  ::=  INTEGER (1..65535)
 * ```
 */
export
type TCPPort = INTEGER;
export const _decode_TCPPort: $.ASN1Decoder<TCPPort> = $._decodeInteger;
export const _encode_TCPPort: $.ASN1Encoder<TCPPort> = $._encodeInteger;


/* eslint-enable */
