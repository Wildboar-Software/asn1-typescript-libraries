/* eslint-disable */
import {
    INTEGER,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary ADatP3Parameters
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ADatP3Parameters  ::=  INTEGER
 * ```
 */
export
type ADatP3Parameters = INTEGER;
export const _decode_ADatP3Parameters = $._decodeInteger;
export const _encode_ADatP3Parameters = $._encodeInteger;

/* eslint-enable */
