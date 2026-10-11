/* eslint-disable */
import {
    BOOLEAN,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary RDSSupport
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RDSSupport  ::=  BOOLEAN
 * ```
 */
export
type RDSSupport = BOOLEAN; // BooleanType

export const _decode_RDSSupport: $.ASN1Decoder<RDSSupport> = $._decodeBoolean;

export const _encode_RDSSupport: $.ASN1Encoder<RDSSupport> = $._encodeBoolean;

/* eslint-enable */
