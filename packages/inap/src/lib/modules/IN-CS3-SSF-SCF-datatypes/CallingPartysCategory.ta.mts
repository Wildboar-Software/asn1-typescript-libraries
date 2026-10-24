/* eslint-disable */
import {
    type OCTET_STRING,
    ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CallingPartysCategory
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallingPartysCategory  ::=  OCTET STRING(SIZE (1))
 * ```
 */
export
type CallingPartysCategory = OCTET_STRING; // OctetStringType

export
function _decode_CallingPartysCategory (el: _Element): CallingPartysCategory {
    const value = $._decodeOctetString(el);
    if (value.length !== 1) {
        throw new ASN1SizeError("CallingPartysCategory violates SIZE constraint");
    }
    return value;
}

export
const _encode_CallingPartysCategory: $.ASN1Encoder<CallingPartysCategory> = $._encodeOctetString;

/* eslint-enable */
