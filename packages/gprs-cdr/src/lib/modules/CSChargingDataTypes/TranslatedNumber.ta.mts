/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TranslatedNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TranslatedNumber  ::=  OCTET STRING
 * ```
 */
export
type TranslatedNumber = OCTET_STRING; // OctetStringType

export
const _decode_TranslatedNumber: $.ASN1Decoder<TranslatedNumber> = $._decodeOctetString;

export
const _encode_TranslatedNumber: $.ASN1Encoder<TranslatedNumber> = $._encodeOctetString;

/* eslint-enable */
