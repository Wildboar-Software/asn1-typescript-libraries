/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DestinationIndex
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DestinationIndex  ::= 
 *   OCTET STRING
 * ```
 */
export
type DestinationIndex = OCTET_STRING; // OctetStringType

export
const _decode_DestinationIndex: $.ASN1Decoder<DestinationIndex> = $._decodeOctetString;

export
const _encode_DestinationIndex: $.ASN1Encoder<DestinationIndex> = $._encodeOctetString;

/* eslint-enable */
