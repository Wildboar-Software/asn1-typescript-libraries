/* eslint-disable */
import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1SizeError
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

export const _decode_SliceDifferentiator = (el: _Element): SliceDifferentiator => {
    const value = $._decodeOctetString(el);
    if (value.length !== 3) {
        throw new ASN1SizeError("SliceDifferentiator violates SIZE constraint");
    }
    return value;
};

export
const _encode_SliceDifferentiator: $.ASN1Encoder<SliceDifferentiator> = $._encodeOctetString;

/* eslint-enable */
