/* eslint-disable */
import {
    GraphicString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Service_Id
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Service-Id  ::=  GraphicString
 * ```
 */
export
type Service_Id = GraphicString; // GraphicString

export
const _decode_Service_Id: $.ASN1Decoder<Service_Id> = $._decodeGraphicString;

export
const _encode_Service_Id: $.ASN1Encoder<Service_Id> = $._encodeGraphicString;

/* eslint-enable */
