/* eslint-disable */
import {
    type OCTET_STRING,
    ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CUG_Interlock
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CUG-Interlock  ::=  OCTET STRING(SIZE (4))
 * ```
 */
export
type CUG_Interlock = OCTET_STRING; // OctetStringType

export
function _decode_CUG_Interlock (el: _Element): CUG_Interlock {
    const value = $._decodeOctetString(el);
    if (value.length !== 4) {
        throw new ASN1SizeError("CUG_Interlock violates SIZE constraint");
    }
    return value;
}

export
const _encode_CUG_Interlock: $.ASN1Encoder<CUG_Interlock> = $._encodeOctetString;

/* eslint-enable */
