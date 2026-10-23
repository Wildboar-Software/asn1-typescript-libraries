/* eslint-disable */
import {
    IA5String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DisplayInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DisplayInformation  ::= 
 *   IA5String
 * ```
 */
export
type DisplayInformation = IA5String; // IA5String

export
const _decode_DisplayInformation: $.ASN1Decoder<DisplayInformation> = $._decodeIA5String;

export
const _encode_DisplayInformation: $.ASN1Encoder<DisplayInformation> = $._encodeIA5String;

/* eslint-enable */
