/* eslint-disable */
import { ASN1Element as _Element, type INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary RC2ParameterVersion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RC2ParameterVersion  ::=  INTEGER
 * ```
 */
export type RC2ParameterVersion = INTEGER;




export const _decode_RC2ParameterVersion: $.ASN1Decoder<INTEGER> = $._decodeInteger;




export const _encode_RC2ParameterVersion: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
