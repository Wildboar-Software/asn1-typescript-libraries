/* eslint-disable */
import {
    BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CCSS
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CCSS  ::=  BOOLEAN
 * ```
 */
export
type CCSS = BOOLEAN; // BooleanType

export
const _decode_CCSS: $.ASN1Decoder<CCSS> = $._decodeBoolean;

export
const _encode_CCSS: $.ASN1Encoder<CCSS> = $._encodeBoolean;

/* eslint-enable */
