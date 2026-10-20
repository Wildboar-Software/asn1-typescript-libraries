/* eslint-disable */
import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CSGId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CSGId       ::=  OCTET STRING ( SIZE( 4 ) )
 * ```
 */
export
type CSGId = OCTET_STRING; // OctetStringType

export const _decode_CSGId = (el: _Element): CSGId => {
    const value = $._decodeOctetString(el);
    if (value.length !== 4) {
        throw new ASN1SizeError("CSGId violates SIZE constraint");
    }
    return value;
};

export
const _encode_CSGId: $.ASN1Encoder<CSGId> = $._encodeOctetString;

/* eslint-enable */
