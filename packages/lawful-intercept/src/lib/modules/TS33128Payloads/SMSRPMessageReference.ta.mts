/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SMSRPMessageReference
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMSRPMessageReference  ::=  INTEGER (0..255)
 * ```
 */
export
type SMSRPMessageReference = INTEGER;
export const _decode_SMSRPMessageReference: $.ASN1Decoder<SMSRPMessageReference> = $._decodeInteger;
export const _encode_SMSRPMessageReference: $.ASN1Encoder<SMSRPMessageReference> = $._encodeInteger;


/* eslint-enable */
