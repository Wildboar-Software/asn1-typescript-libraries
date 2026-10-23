/* eslint-disable */
import {
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SF_CODE
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SF-CODE  ::=  OBJECT IDENTIFIER
 * ```
 */
export
type SF_CODE = OBJECT_IDENTIFIER; // ObjectIdentifierType

export
const _decode_SF_CODE: $.ASN1Decoder<SF_CODE> = $._decodeObjectIdentifier;

export
const _encode_SF_CODE: $.ASN1Encoder<SF_CODE> = $._encodeObjectIdentifier;

/* eslint-enable */
