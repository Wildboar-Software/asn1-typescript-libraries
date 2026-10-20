/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CallingPartyCategory
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallingPartyCategory  ::=  OCTET STRING ( SIZE( 1 ) )
 * ```
 */
export
type CallingPartyCategory = OCTET_STRING; // OctetStringType

export
const _decode_CallingPartyCategory: $.ASN1Decoder<CallingPartyCategory> = $._decodeOctetString;

export
const _encode_CallingPartyCategory: $.ASN1Encoder<CallingPartyCategory> = $._encodeOctetString;

/* eslint-enable */
