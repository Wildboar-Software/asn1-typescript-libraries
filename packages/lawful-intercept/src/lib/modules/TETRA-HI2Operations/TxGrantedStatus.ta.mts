/* eslint-disable */
import {
    ASN1Element as _Element,
    BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TxGrantedStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TxGrantedStatus  ::=  BOOLEAN
 * ```
 */
export
type TxGrantedStatus = BOOLEAN; // BooleanType
export const _decode_TxGrantedStatus: $.ASN1Decoder<TxGrantedStatus> = $._decodeBoolean;
export const _encode_TxGrantedStatus: $.ASN1Encoder<TxGrantedStatus> = $._encodeBoolean;


/* eslint-enable */
