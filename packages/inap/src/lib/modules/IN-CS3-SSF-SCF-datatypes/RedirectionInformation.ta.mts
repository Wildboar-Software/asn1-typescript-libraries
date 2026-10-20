/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RedirectionInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RedirectionInformation  ::=  OCTET STRING(SIZE (2))
 * ```
 */
export
type RedirectionInformation = OCTET_STRING; // OctetStringType

export
const _decode_RedirectionInformation: $.ASN1Decoder<RedirectionInformation> = $._decodeOctetString;

export
const _encode_RedirectionInformation: $.ASN1Encoder<RedirectionInformation> = $._encodeOctetString;

/* eslint-enable */
