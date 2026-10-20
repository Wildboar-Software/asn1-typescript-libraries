/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DataVolumeMBMS
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DataVolumeMBMS  ::=  INTEGER
 * ```
 */
export
type DataVolumeMBMS = INTEGER;

export
const _decode_DataVolumeMBMS: $.ASN1Decoder<DataVolumeMBMS> = $._decodeInteger;

export
const _encode_DataVolumeMBMS: $.ASN1Encoder<DataVolumeMBMS> = $._encodeInteger;

/* eslint-enable */
