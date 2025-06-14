/* eslint-disable */
import {
    BOOLEAN,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/* START_OF_SYMBOL_DEFINITION ProcessingErrorFlag */
/**
 * @summary ProcessingErrorFlag
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProcessingErrorFlag  ::=  BOOLEAN
 * ```
 */
export type ProcessingErrorFlag = BOOLEAN; // BooleanType
/* END_OF_SYMBOL_DEFINITION ProcessingErrorFlag */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ProcessingErrorFlag */
let _cached_decoder_for_ProcessingErrorFlag: $.ASN1Decoder<ProcessingErrorFlag> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ProcessingErrorFlag */

/* START_OF_SYMBOL_DEFINITION _decode_ProcessingErrorFlag */
/**
 * @summary Decodes an ASN.1 element into a(n) ProcessingErrorFlag
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ProcessingErrorFlag} The decoded data structure.
 */
export function _decode_ProcessingErrorFlag(el: _Element) {
    if (!_cached_decoder_for_ProcessingErrorFlag) {
        _cached_decoder_for_ProcessingErrorFlag = $._decodeBoolean;
    }
    return _cached_decoder_for_ProcessingErrorFlag(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ProcessingErrorFlag */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ProcessingErrorFlag */
let _cached_encoder_for_ProcessingErrorFlag: $.ASN1Encoder<ProcessingErrorFlag> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ProcessingErrorFlag */

/* START_OF_SYMBOL_DEFINITION _encode_ProcessingErrorFlag */
/**
 * @summary Encodes a(n) ProcessingErrorFlag into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProcessingErrorFlag, encoded as an ASN.1 Element.
 */
export function _encode_ProcessingErrorFlag(
    value: ProcessingErrorFlag,
    elGetter: $.ASN1Encoder<ProcessingErrorFlag>
) {
    if (!_cached_encoder_for_ProcessingErrorFlag) {
        _cached_encoder_for_ProcessingErrorFlag = $._encodeBoolean;
    }
    return _cached_encoder_for_ProcessingErrorFlag(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ProcessingErrorFlag */

/* eslint-enable */
