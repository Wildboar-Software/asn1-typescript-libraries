/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary BodyPartSequenceNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BodyPartSequenceNumber  ::=  INTEGER
 * ```
 */
export
type BodyPartSequenceNumber = INTEGER;
export const _decode_BodyPartSequenceNumber = $._decodeInteger;
export const _encode_BodyPartSequenceNumber = $._encodeInteger;


/* eslint-enable */
