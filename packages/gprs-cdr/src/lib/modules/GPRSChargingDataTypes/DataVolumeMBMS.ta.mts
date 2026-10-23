/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DataVolumeMBMS
 * @description
 * 
 * Octet count for an MBMS bearer context. The MBMS volume containers count
 * downlink traffic (clauses 5.2.3.7 and 5.2.3.7A).
 * 
 * 3GPP TS 32.251 V19.0.0.
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
