/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Bitrate
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Bitrate     ::=  OCTET STRING
 * ```
 */
export
type Bitrate = OCTET_STRING; // OctetStringType

export
const _decode_Bitrate: $.ASN1Decoder<Bitrate> = $._decodeOctetString;

export
const _encode_Bitrate: $.ASN1Encoder<Bitrate> = $._encodeOctetString;

/* eslint-enable */
