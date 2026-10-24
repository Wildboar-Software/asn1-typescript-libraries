/* eslint-disable */
import {
    type OCTET_STRING,
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FreeFormatData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FreeFormatData  ::=  OCTET STRING ( SIZE( 1 .. 160 ) )
 * ```
 */
export
type FreeFormatData = OCTET_STRING; // OctetStringType

export const _decode_FreeFormatData = (el: _Element): FreeFormatData => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 160) {
        throw new ASN1SizeError("FreeFormatData violates SIZE constraint");
    }
    return value;
};

export
const _encode_FreeFormatData: $.ASN1Encoder<FreeFormatData> = $._encodeOctetString;

/* eslint-enable */
