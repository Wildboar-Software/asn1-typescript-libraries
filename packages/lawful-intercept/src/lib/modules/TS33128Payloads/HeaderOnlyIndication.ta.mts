/* eslint-disable */
import {
    BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary HeaderOnlyIndication
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HeaderOnlyIndication  ::=  BOOLEAN
 * ```
 */
export
type HeaderOnlyIndication = BOOLEAN; // BooleanType
export const _decode_HeaderOnlyIndication: $.ASN1Decoder<HeaderOnlyIndication> = $._decodeBoolean;
export const _encode_HeaderOnlyIndication: $.ASN1Encoder<HeaderOnlyIndication> = $._encodeBoolean;


/* eslint-enable */
