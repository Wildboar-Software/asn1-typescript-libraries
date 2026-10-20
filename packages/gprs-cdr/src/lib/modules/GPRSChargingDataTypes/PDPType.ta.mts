/* eslint-disable */
import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1SizeError
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

export const _decode_PDPType = (el: _Element): PDPType => {
    const value = $._decodeOctetString(el);
    if (value.length !== 2) {
        throw new ASN1SizeError("PDPType violates SIZE constraint");
    }
    return value;
};

export
const _encode_PDPType: $.ASN1Encoder<PDPType> = $._encodeOctetString;

/* eslint-enable */
