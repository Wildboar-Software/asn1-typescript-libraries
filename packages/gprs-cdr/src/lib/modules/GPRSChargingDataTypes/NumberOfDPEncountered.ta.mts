/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NumberOfDPEncountered
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NumberOfDPEncountered  ::=  INTEGER
 * ```
 */
export
type NumberOfDPEncountered = INTEGER;

export
const _decode_NumberOfDPEncountered: $.ASN1Decoder<NumberOfDPEncountered> = $._decodeInteger;

export
const _encode_NumberOfDPEncountered: $.ASN1Encoder<NumberOfDPEncountered> = $._encodeInteger;

/* eslint-enable */
