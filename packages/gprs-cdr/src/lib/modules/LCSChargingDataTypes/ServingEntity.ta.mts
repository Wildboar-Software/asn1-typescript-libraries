/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ServingEntity
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServingEntity  ::=  OCTET STRING ( SIZE( 1 .. 20 ) )
 * ```
 */
export
type ServingEntity = OCTET_STRING; // OctetStringType

export
const _decode_ServingEntity: $.ASN1Decoder<ServingEntity> = $._decodeOctetString;

export
const _encode_ServingEntity: $.ASN1Encoder<ServingEntity> = $._encodeOctetString;

/* eslint-enable */
