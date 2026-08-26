/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary RC2ParameterVersion
 * @description
 *
 * INTEGER encoding RC2 effective key bits for wrap/CBC parameters
 * ([RFC 3370 §4.3.2](https://datatracker.ietf.org/doc/html/rfc3370#section-4.3.2),
 * [§5.2](https://datatracker.ietf.org/doc/html/rfc3370#section-5.2)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RC2ParameterVersion  ::=  INTEGER
 * ```
 */
export type RC2ParameterVersion = INTEGER;




export const _decode_RC2ParameterVersion = $._decodeInteger;




export const _encode_RC2ParameterVersion = $._encodeInteger;


/* eslint-enable */
