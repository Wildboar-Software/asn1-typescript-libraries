/* eslint-disable */
import {
    BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary AwaitConnect
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AwaitConnect  ::=  BOOLEAN
 * ```
 */
export
type AwaitConnect = BOOLEAN; // BooleanType

export
const _decode_AwaitConnect: $.ASN1Decoder<AwaitConnect> = $._decodeBoolean;

export
const _encode_AwaitConnect: $.ASN1Encoder<AwaitConnect> = $._encodeBoolean;

/* eslint-enable */
