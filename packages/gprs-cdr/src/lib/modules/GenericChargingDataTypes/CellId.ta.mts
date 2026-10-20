/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CellId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CellId      ::=  OCTET STRING ( SIZE( 2 ) )
 * ```
 */
export
type CellId = OCTET_STRING; // OctetStringType

export
const _decode_CellId: $.ASN1Decoder<CellId> = $._decodeOctetString;

export
const _encode_CellId: $.ASN1Encoder<CellId> = $._encodeOctetString;

/* eslint-enable */
