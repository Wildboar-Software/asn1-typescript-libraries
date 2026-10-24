/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DataVolumeOctets
 * @description
 *
 * This field includes the number of octet transmitted during the use of data
 * services.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.1.1.0B.
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
