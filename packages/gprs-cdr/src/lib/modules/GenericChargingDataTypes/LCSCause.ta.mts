/* eslint-disable */
import {
    type OCTET_STRING,
    type ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary LCSCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LCSCause    ::=  OCTET STRING ( SIZE( 1 ) )
 * ```
 */
export
type LCSCause = OCTET_STRING; // OctetStringType

export const _decode_LCSCause = (el: _Element): LCSCause => {
    const value = $._decodeOctetString(el);
    if (value.length !== 1) {
        throw new ASN1SizeError("LCSCause violates SIZE constraint");
    }
    return value;
};

export
const _encode_LCSCause: $.ASN1Encoder<LCSCause> = $._encodeOctetString;

/* eslint-enable */
