/* eslint-disable */
import {
    GraphicString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Session_Id
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Session-Id  ::=  GraphicString
 * ```
 */
export
type Session_Id = GraphicString; // GraphicString

export
const _decode_Session_Id: $.ASN1Decoder<Session_Id> = $._decodeGraphicString;

export
const _encode_Session_Id: $.ASN1Encoder<Session_Id> = $._encodeGraphicString;

/* eslint-enable */
