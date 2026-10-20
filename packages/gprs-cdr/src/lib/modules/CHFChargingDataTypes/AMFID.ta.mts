/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AMFID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AMFID       ::=  OCTET STRING ( SIZE( 6 ) )
 * ```
 */
export
type AMFID = OCTET_STRING; // OctetStringType

export
const _decode_AMFID: $.ASN1Decoder<AMFID> = $._decodeOctetString;

export
const _encode_AMFID: $.ASN1Encoder<AMFID> = $._encodeOctetString;

/* eslint-enable */
