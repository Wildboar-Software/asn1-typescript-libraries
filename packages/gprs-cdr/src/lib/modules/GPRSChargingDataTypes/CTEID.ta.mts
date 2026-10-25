/* eslint-disable */
import {
    type OCTET_STRING,
    type ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CTEID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CTEID       ::=  OCTET STRING ( SIZE( 4 ) )
 * ```
 */
export
type CTEID = OCTET_STRING; // OctetStringType

export const _decode_CTEID = (el: _Element): CTEID => {
    const value = $._decodeOctetString(el);
    if (value.length !== 4) {
        throw new ASN1SizeError("CTEID violates SIZE constraint");
    }
    return value;
};

export
const _encode_CTEID: $.ASN1Encoder<CTEID> = $._encodeOctetString;

/* eslint-enable */
