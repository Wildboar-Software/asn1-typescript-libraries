/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RFPowerCapability
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RFPowerCapability  ::=  INTEGER
 * ```
 */
export
type RFPowerCapability = INTEGER;

export
const _decode_RFPowerCapability: $.ASN1Decoder<RFPowerCapability> = $._decodeInteger;

export
const _encode_RFPowerCapability: $.ASN1Encoder<RFPowerCapability> = $._encodeInteger;

/* eslint-enable */
