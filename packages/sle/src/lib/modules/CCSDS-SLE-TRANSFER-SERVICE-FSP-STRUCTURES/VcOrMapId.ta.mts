/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary VcOrMapId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VcOrMapId                ::=    INTEGER (0 .. 63)
 * ```
 */
export
type VcOrMapId = INTEGER;
export const _decode_VcOrMapId: $.ASN1Decoder<VcOrMapId> = $._decodeInteger;
export const _encode_VcOrMapId: $.ASN1Encoder<VcOrMapId> = $._encodeInteger;


/* eslint-enable */
