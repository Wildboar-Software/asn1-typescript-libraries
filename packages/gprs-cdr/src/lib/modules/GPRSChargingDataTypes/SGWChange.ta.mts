/* eslint-disable */
import {
    BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SGWChange
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SGWChange   ::=  BOOLEAN
 * ```
 */
export
type SGWChange = BOOLEAN; // BooleanType

export
const _decode_SGWChange: $.ASN1Decoder<SGWChange> = $._decodeBoolean;

export
const _encode_SGWChange: $.ASN1Encoder<SGWChange> = $._encodeBoolean;

/* eslint-enable */
