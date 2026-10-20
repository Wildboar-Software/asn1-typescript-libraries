/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ProtocolIdentifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProtocolIdentifier  ::=  INTEGER (0..127)
 * ```
 */
export
type ProtocolIdentifier = INTEGER;

export
const _decode_ProtocolIdentifier: $.ASN1Decoder<ProtocolIdentifier> = $._decodeInteger;

export
const _encode_ProtocolIdentifier: $.ASN1Encoder<ProtocolIdentifier> = $._encodeInteger;

/* eslint-enable */
