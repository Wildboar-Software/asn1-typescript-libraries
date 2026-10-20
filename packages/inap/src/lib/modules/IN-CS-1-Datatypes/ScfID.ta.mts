/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ScfID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ScfID  ::=  OCTET STRING(SIZE (minScfIDLength..maxScfIDLength))
 * ```
 */
export
type ScfID = OCTET_STRING; // OctetStringType

export
const _decode_ScfID: $.ASN1Decoder<ScfID> = $._decodeOctetString;

export
const _encode_ScfID: $.ASN1Encoder<ScfID> = $._encodeOctetString;

/* eslint-enable */
