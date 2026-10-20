/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ChargingID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChargingID  ::=  INTEGER ( 0 .. 4294967295 )
 * ```
 */
export
type ChargingID = INTEGER;

export
const _decode_ChargingID: $.ASN1Decoder<ChargingID> = $._decodeInteger;

export
const _encode_ChargingID: $.ASN1Encoder<ChargingID> = $._encodeInteger;

/* eslint-enable */
