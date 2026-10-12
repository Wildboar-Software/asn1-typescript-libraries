/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CellPortionID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CellPortionID  ::=  INTEGER (0..4095)
 * ```
 */
export
type CellPortionID = INTEGER;
export const _decode_CellPortionID: $.ASN1Decoder<CellPortionID> = $._decodeInteger;
export const _encode_CellPortionID: $.ASN1Encoder<CellPortionID> = $._encodeInteger;


/* eslint-enable */
