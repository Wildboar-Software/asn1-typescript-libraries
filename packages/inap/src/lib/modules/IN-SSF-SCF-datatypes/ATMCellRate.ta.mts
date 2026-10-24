/* eslint-disable */
import {
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ATMCellRate
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ATMCellRate  ::= 
 *   OCTET STRING
 * ```
 */
export
type ATMCellRate = OCTET_STRING; // OctetStringType

export
const _decode_ATMCellRate: $.ASN1Decoder<ATMCellRate> = $._decodeOctetString;

export
const _encode_ATMCellRate: $.ASN1Encoder<ATMCellRate> = $._encodeOctetString;

/* eslint-enable */
