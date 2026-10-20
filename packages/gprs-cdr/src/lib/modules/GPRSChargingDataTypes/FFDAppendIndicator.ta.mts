/* eslint-disable */
import {
    BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FFDAppendIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FFDAppendIndicator  ::=  BOOLEAN
 * ```
 */
export
type FFDAppendIndicator = BOOLEAN; // BooleanType

export
const _decode_FFDAppendIndicator: $.ASN1Decoder<FFDAppendIndicator> = $._decodeBoolean;

export
const _encode_FFDAppendIndicator: $.ASN1Encoder<FFDAppendIndicator> = $._encodeBoolean;

/* eslint-enable */
