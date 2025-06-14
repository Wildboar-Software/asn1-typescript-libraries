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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { SimpleNameType, _decode_SimpleNameType, _encode_SimpleNameType } from "../Attribute-ASN1Module/SimpleNameType.ta.mjs";
/* START_OF_SYMBOL_DEFINITION LogRecordId */
/**
 * @summary LogRecordId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LogRecordId  ::= 
 *   SimpleNameType(WITH COMPONENTS {
 *                    number  PRESENT,
 *                    string  ABSENT
 *                  })
 * ```
 */
export
type LogRecordId = SimpleNameType; // DefinedType
/* END_OF_SYMBOL_DEFINITION LogRecordId */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_LogRecordId */
let _cached_decoder_for_LogRecordId: $.ASN1Decoder<LogRecordId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_LogRecordId */

/* START_OF_SYMBOL_DEFINITION _decode_LogRecordId */
/**
 * @summary Decodes an ASN.1 element into a(n) LogRecordId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LogRecordId} The decoded data structure.
 */
export
function _decode_LogRecordId (el: _Element) {
    if (!_cached_decoder_for_LogRecordId) { _cached_decoder_for_LogRecordId = _decode_SimpleNameType; }
    return _cached_decoder_for_LogRecordId(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_LogRecordId */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_LogRecordId */
let _cached_encoder_for_LogRecordId: $.ASN1Encoder<LogRecordId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_LogRecordId */

/* START_OF_SYMBOL_DEFINITION _encode_LogRecordId */
/**
 * @summary Encodes a(n) LogRecordId into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LogRecordId, encoded as an ASN.1 Element.
 */
export
function _encode_LogRecordId (value: LogRecordId, elGetter: $.ASN1Encoder<LogRecordId>) {
    if (!_cached_encoder_for_LogRecordId) { _cached_encoder_for_LogRecordId = _encode_SimpleNameType; }
    return _cached_encoder_for_LogRecordId(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_LogRecordId */

/* eslint-enable */
