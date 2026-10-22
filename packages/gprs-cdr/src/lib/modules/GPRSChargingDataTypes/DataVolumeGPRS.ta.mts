/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DataVolumeGPRS
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DataVolumeGPRS  ::=  INTEGER
 * ```
 */
export
type DataVolumeGPRS = INTEGER;

export
const _decode_DataVolumeGPRS: $.ASN1Decoder<DataVolumeGPRS> = $._decodeInteger;

export
const _encode_DataVolumeGPRS: $.ASN1Encoder<DataVolumeGPRS> = $._encodeInteger;

/* eslint-enable */
