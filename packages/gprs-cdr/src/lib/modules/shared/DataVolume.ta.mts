/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DataVolume
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DataVolume  ::=  INTEGER
 * ```
 */
export
type DataVolume = INTEGER;

export
const _decode_DataVolume: $.ASN1Decoder<DataVolume> = $._decodeInteger;

export
const _encode_DataVolume: $.ASN1Encoder<DataVolume> = $._encodeInteger;

/* eslint-enable */
