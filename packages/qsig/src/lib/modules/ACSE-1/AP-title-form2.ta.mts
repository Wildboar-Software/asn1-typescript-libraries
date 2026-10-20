/* eslint-disable */
import {
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AP_title_form2
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AP-title-form2  ::=  OBJECT IDENTIFIER
 * ```
 */
export
type AP_title_form2 = OBJECT_IDENTIFIER; // ObjectIdentifierType

export
const _decode_AP_title_form2: $.ASN1Decoder<AP_title_form2> = $._decodeObjectIdentifier;

export
const _encode_AP_title_form2: $.ASN1Encoder<AP_title_form2> = $._encodeObjectIdentifier;

/* eslint-enable */
