/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CutAndPaste
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CutAndPaste  ::=  INTEGER(0..2)
 * ```
 */
export
type CutAndPaste = INTEGER;

export
const _decode_CutAndPaste: $.ASN1Decoder<CutAndPaste> = $._decodeInteger;

export
const _encode_CutAndPaste: $.ASN1Encoder<CutAndPaste> = $._encodeInteger;

/* eslint-enable */
