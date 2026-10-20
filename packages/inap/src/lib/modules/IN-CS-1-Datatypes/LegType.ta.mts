/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary LegType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LegType  ::=  OCTET STRING(SIZE (1))
 * ```
 */
export
type LegType = OCTET_STRING; // OctetStringType

export
const _decode_LegType: $.ASN1Decoder<LegType> = $._decodeOctetString;

export
const _encode_LegType: $.ASN1Encoder<LegType> = $._encodeOctetString;

/* eslint-enable */
