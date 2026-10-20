/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PDPType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PDPType     ::=  OCTET STRING ( SIZE( 2 ) )
 * ```
 */
export
type PDPType = OCTET_STRING; // OctetStringType

export
const _decode_PDPType: $.ASN1Decoder<PDPType> = $._decodeOctetString;

export
const _encode_PDPType: $.ASN1Encoder<PDPType> = $._encodeOctetString;

/* eslint-enable */
