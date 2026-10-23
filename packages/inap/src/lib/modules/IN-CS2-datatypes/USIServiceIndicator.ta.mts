/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary USIServiceIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * USIServiceIndicator  ::= 
 *   OCTET STRING
 * ```
 */
export
type USIServiceIndicator = OCTET_STRING; // OctetStringType

export
const _decode_USIServiceIndicator: $.ASN1Decoder<USIServiceIndicator> = $._decodeOctetString;

export
const _encode_USIServiceIndicator: $.ASN1Encoder<USIServiceIndicator> = $._encodeOctetString;

/* eslint-enable */
