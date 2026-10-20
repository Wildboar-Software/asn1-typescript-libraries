/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SliceDifferentiator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SliceDifferentiator  ::=  OCTET STRING ( SIZE( 3 ) )
 * ```
 */
export
type SliceDifferentiator = OCTET_STRING; // OctetStringType

export
const _decode_SliceDifferentiator: $.ASN1Decoder<SliceDifferentiator> = $._decodeOctetString;

export
const _encode_SliceDifferentiator: $.ASN1Encoder<SliceDifferentiator> = $._encodeOctetString;

/* eslint-enable */
