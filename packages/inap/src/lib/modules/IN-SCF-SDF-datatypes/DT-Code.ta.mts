/* eslint-disable */
import {
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DT_Code
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DT-Code  ::=  OBJECT IDENTIFIER
 * ```
 */
export
type DT_Code = OBJECT_IDENTIFIER; // ObjectIdentifierType

export
const _decode_DT_Code: $.ASN1Decoder<DT_Code> = $._decodeObjectIdentifier;

export
const _encode_DT_Code: $.ASN1Encoder<DT_Code> = $._encodeObjectIdentifier;

/* eslint-enable */
