/* eslint-disable */
import {
    ASN1Element as _Element,
    BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PGWChangeIndication
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PGWChangeIndication  ::=  BOOLEAN
 * ```
 */
export
type PGWChangeIndication = BOOLEAN; // BooleanType
export const _decode_PGWChangeIndication: $.ASN1Decoder<PGWChangeIndication> = $._decodeBoolean;
export const _encode_PGWChangeIndication: $.ASN1Encoder<PGWChangeIndication> = $._encodeBoolean;


/* eslint-enable */
