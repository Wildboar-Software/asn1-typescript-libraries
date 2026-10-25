/* eslint-disable */
import {
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EndToEndTransitDelay
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EndToEndTransitDelay  ::= 
 *   OCTET STRING
 * ```
 */
export
type EndToEndTransitDelay = OCTET_STRING; // OctetStringType

export
const _decode_EndToEndTransitDelay: $.ASN1Decoder<EndToEndTransitDelay> = $._decodeOctetString;

export
const _encode_EndToEndTransitDelay: $.ASN1Encoder<EndToEndTransitDelay> = $._encodeOctetString;

/* eslint-enable */
