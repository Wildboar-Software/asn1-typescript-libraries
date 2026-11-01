/* eslint-disable */
import {
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary ContentType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ContentType  ::=  OBJECT IDENTIFIER
 * ```
 */
export
type ContentType = OBJECT_IDENTIFIER; // ObjectIdentifierType

export
const _decode_ContentType: $.ASN1Decoder<ContentType> = $._decodeObjectIdentifier;

export
const _encode_ContentType: $.ASN1Encoder<ContentType> = $._encodeObjectIdentifier;

/* eslint-enable */
