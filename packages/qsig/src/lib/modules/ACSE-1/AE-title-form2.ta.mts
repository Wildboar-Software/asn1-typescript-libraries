/* eslint-disable */
import {
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AE_title_form2
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AE-title-form2  ::=  OBJECT IDENTIFIER
 * ```
 */
export
type AE_title_form2 = OBJECT_IDENTIFIER; // ObjectIdentifierType

export
const _decode_AE_title_form2: $.ASN1Decoder<AE_title_form2> = $._decodeObjectIdentifier;

export
const _encode_AE_title_form2: $.ASN1Encoder<AE_title_form2> = $._encodeObjectIdentifier;

/* eslint-enable */
