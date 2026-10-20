/* eslint-disable */
import {
    BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SGSNChange
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SGSNChange  ::=  BOOLEAN
 * ```
 */
export
type SGSNChange = BOOLEAN; // BooleanType

export
const _decode_SGSNChange: $.ASN1Decoder<SGSNChange> = $._decodeBoolean;

export
const _encode_SGSNChange: $.ASN1Encoder<SGSNChange> = $._encodeBoolean;

/* eslint-enable */
