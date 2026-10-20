/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AE_qualifier_form2
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AE-qualifier-form2  ::=  INTEGER
 * ```
 */
export
type AE_qualifier_form2 = INTEGER;

export
const _decode_AE_qualifier_form2: $.ASN1Decoder<AE_qualifier_form2> = $._decodeInteger;

export
const _encode_AE_qualifier_form2: $.ASN1Encoder<AE_qualifier_form2> = $._encodeInteger;

/* eslint-enable */
