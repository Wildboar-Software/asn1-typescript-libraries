/* eslint-disable */
import {
    type OCTET_STRING,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary ProprietaryBDBType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProprietaryBDBType  ::=  OCTET STRING
 * ```
 */
export
type ProprietaryBDBType = OCTET_STRING; // OctetStringType

export
const _decode_ProprietaryBDBType: $.ASN1Decoder<ProprietaryBDBType> = $._decodeOctetString;

export
const _encode_ProprietaryBDBType: $.ASN1Encoder<ProprietaryBDBType> = $._encodeOctetString;

/* eslint-enable */
