/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NumberOfDPEncountered
 * @description
 * 
 * Count of CAMEL detection points encountered for this PDP or MM dialogue.
 * TS 32.251 places CAMEL online charging outside its scope (clause
 * 5.3.1.0) and only requires the SGSN to include the CAMEL information set
 * when CAMEL is activated.
 * 
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
