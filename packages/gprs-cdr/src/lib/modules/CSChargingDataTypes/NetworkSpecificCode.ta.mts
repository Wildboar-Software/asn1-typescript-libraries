/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NetworkSpecificCode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NetworkSpecificCode  ::=  INTEGER
 * ```
 */
export
type NetworkSpecificCode = INTEGER;

export
const _decode_NetworkSpecificCode: $.ASN1Decoder<NetworkSpecificCode> = $._decodeInteger;

export
const _encode_NetworkSpecificCode: $.ASN1Encoder<NetworkSpecificCode> = $._encodeInteger;

/* eslint-enable */
