/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FreeContainer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FreeContainer  ::=  OCTET STRING
 * ```
 */
export
type FreeContainer = OCTET_STRING; // OctetStringType

export
const _decode_FreeContainer: $.ASN1Decoder<FreeContainer> = $._decodeOctetString;

export
const _encode_FreeContainer: $.ASN1Encoder<FreeContainer> = $._encodeOctetString;

/* eslint-enable */
