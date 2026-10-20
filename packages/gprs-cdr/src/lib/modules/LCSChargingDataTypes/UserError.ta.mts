/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UserError
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UserError   ::=  OCTET STRING ( SIZE( 1 ) )
 * ```
 */
export
type UserError = OCTET_STRING; // OctetStringType

export
const _decode_UserError: $.ASN1Decoder<UserError> = $._decodeOctetString;

export
const _encode_UserError: $.ASN1Encoder<UserError> = $._encodeOctetString;

/* eslint-enable */
