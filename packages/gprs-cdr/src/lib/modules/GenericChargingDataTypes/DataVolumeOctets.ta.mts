/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DataVolumeOctets
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DataVolumeOctets  ::=  INTEGER
 * ```
 */
export
type DataVolumeOctets = INTEGER;

export
const _decode_DataVolumeOctets: $.ASN1Decoder<DataVolumeOctets> = $._decodeInteger;

export
const _encode_DataVolumeOctets: $.ASN1Encoder<DataVolumeOctets> = $._encodeInteger;

/* eslint-enable */
