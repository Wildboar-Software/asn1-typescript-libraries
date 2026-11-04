/* eslint-disable */
import {
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UUID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UUID  ::=  OCTET STRING(SIZE (16))
 * ```
 */
export
type UUID = OCTET_STRING; // OctetStringType

export
const _decode_UUID: $.ASN1Decoder<UUID> = $._decodeOctetString;

export
const _encode_UUID: $.ASN1Encoder<UUID> = $._encodeOctetString;

/* eslint-enable */
