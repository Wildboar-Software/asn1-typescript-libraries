/* eslint-disable */
import {
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary WirelessControlHeader
 * @description
 *
 * A Wireless-Control-Message-Protocol (WCMP) protocol data unit (ECMA-325
 * §E.1.3.1.7). On a concatenated Short Message the same header is included in
 * every segment. No size constraint is specified.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-325/
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
