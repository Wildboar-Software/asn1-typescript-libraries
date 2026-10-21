/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary WirelessControlHeader
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * WirelessControlHeader  ::=  OCTET STRING
 * ```
 */
export
type WirelessControlHeader = OCTET_STRING; // OctetStringType

export
const _decode_WirelessControlHeader: $.ASN1Decoder<WirelessControlHeader> = $._decodeOctetString;

export
const _encode_WirelessControlHeader: $.ASN1Encoder<WirelessControlHeader> = $._encodeOctetString;

/* eslint-enable */
