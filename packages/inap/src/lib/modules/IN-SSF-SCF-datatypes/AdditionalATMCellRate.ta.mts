/* eslint-disable */
import {
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AdditionalATMCellRate
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AdditionalATMCellRate  ::= 
 *   OCTET STRING
 * ```
 */
export
type AdditionalATMCellRate = OCTET_STRING; // OctetStringType

export
const _decode_AdditionalATMCellRate: $.ASN1Decoder<AdditionalATMCellRate> = $._decodeOctetString;

export
const _encode_AdditionalATMCellRate: $.ASN1Encoder<AdditionalATMCellRate> = $._encodeOctetString;

/* eslint-enable */
