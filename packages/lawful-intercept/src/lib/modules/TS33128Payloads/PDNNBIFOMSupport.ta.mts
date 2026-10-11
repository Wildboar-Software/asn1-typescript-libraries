/* eslint-disable */
import {
    BOOLEAN,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary PDNNBIFOMSupport
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PDNNBIFOMSupport  ::=  BOOLEAN
 * ```
 */
export
type PDNNBIFOMSupport = BOOLEAN; // BooleanType

export const _decode_PDNNBIFOMSupport: $.ASN1Decoder<PDNNBIFOMSupport> = $._decodeBoolean;

export const _encode_PDNNBIFOMSupport: $.ASN1Encoder<PDNNBIFOMSupport> = $._encodeBoolean;

/* eslint-enable */
