/* eslint-disable */
import {
    BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PGWRNSI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PGWRNSI  ::=  BOOLEAN
 * ```
 */
export
type PGWRNSI = BOOLEAN; // BooleanType
export const _decode_PGWRNSI: $.ASN1Decoder<PGWRNSI> = $._decodeBoolean;
export const _encode_PGWRNSI: $.ASN1Encoder<PGWRNSI> = $._encodeBoolean;


/* eslint-enable */
