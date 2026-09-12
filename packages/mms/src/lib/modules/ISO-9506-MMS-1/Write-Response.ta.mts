/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Write_Response_Item, _decode_Write_Response_Item, _encode_Write_Response_Item } from "../ISO-9506-MMS-1/Write-Response-Item.ta.mjs";
// export { Write_Response_Item, _decode_Write_Response_Item, _encode_Write_Response_Item } from "../ISO-9506-MMS-1/Write-Response-Item.ta.mjs";


/**
 * @summary Write_Response
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Write-Response  ::=  SEQUENCE OF CHOICE {
 *    failure                       [0] IMPLICIT DataAccessError,
 *    success                       [1] IMPLICIT NULL   }
 * ```
 */
export
type Write_Response = Write_Response_Item[]; // SequenceOfType

let _cached_decoder_for_Write_Response: $.ASN1Decoder<Write_Response> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Write_Response
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Write_Response (el: _Element): Write_Response {
    if (!_cached_decoder_for_Write_Response) { _cached_decoder_for_Write_Response = $._decodeSequenceOf<Write_Response_Item>(() => _decode_Write_Response_Item); }
    return _cached_decoder_for_Write_Response(el);
}

let _cached_encoder_for_Write_Response: $.ASN1Encoder<Write_Response> | null = null;

/**
 * @summary Encodes a(n) Write_Response into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Write_Response, encoded as an ASN.1 Element.
 */
export
function _encode_Write_Response (value: Write_Response, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Write_Response) { _cached_encoder_for_Write_Response = $._encodeSequenceOf<Write_Response_Item>(() => _encode_Write_Response_Item, $.BER); }
    return _cached_encoder_for_Write_Response(value, elGetter);
}


/* eslint-enable */
