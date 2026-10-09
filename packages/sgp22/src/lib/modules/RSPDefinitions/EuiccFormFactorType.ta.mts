/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EuiccFormFactorType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EuiccFormFactorType  ::=  INTEGER
 * ```
 */
export
type EuiccFormFactorType = INTEGER;
export const _decode_EuiccFormFactorType = $._decodeInteger;
export const _encode_EuiccFormFactorType = $._encodeInteger;


/* eslint-enable */
