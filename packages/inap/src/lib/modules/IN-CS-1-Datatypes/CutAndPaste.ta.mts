/* eslint-disable */
import {
    type INTEGER,
    ASN1Element as _Element,
    ASN1OverflowError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CutAndPaste
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CutAndPaste  ::=  INTEGER(0..22)
 * ```
 */
export
type CutAndPaste = INTEGER;

export
function _decode_CutAndPaste (el: _Element): CutAndPaste {
    const value = $._decodeInteger(el);
    if (value < 0 || value > 22) {
        throw new ASN1OverflowError("CutAndPaste violates INTEGER constraint");
    }
    return value;
}

export
const _encode_CutAndPaste: $.ASN1Encoder<CutAndPaste> = $._encodeInteger;

/* eslint-enable */
