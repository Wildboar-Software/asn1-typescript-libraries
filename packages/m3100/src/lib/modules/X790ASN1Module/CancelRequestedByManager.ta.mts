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

/* START_OF_SYMBOL_DEFINITION CancelRequestedByManager */
/**
 * @summary CancelRequestedByManager
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CancelRequestedByManager  ::=  BOOLEAN
 * ```
 */
export type CancelRequestedByManager = BOOLEAN; // BooleanType
/* END_OF_SYMBOL_DEFINITION CancelRequestedByManager */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CancelRequestedByManager */
let _cached_decoder_for_CancelRequestedByManager: $.ASN1Decoder<CancelRequestedByManager> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CancelRequestedByManager */

/* START_OF_SYMBOL_DEFINITION _decode_CancelRequestedByManager */
/**
 * @summary Decodes an ASN.1 element into a(n) CancelRequestedByManager
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CancelRequestedByManager} The decoded data structure.
 */
export function _decode_CancelRequestedByManager(el: _Element) {
    if (!_cached_decoder_for_CancelRequestedByManager) {
        _cached_decoder_for_CancelRequestedByManager = $._decodeBoolean;
    }
    return _cached_decoder_for_CancelRequestedByManager(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CancelRequestedByManager */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CancelRequestedByManager */
let _cached_encoder_for_CancelRequestedByManager: $.ASN1Encoder<CancelRequestedByManager> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CancelRequestedByManager */

/* START_OF_SYMBOL_DEFINITION _encode_CancelRequestedByManager */
/**
 * @summary Encodes a(n) CancelRequestedByManager into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CancelRequestedByManager, encoded as an ASN.1 Element.
 */
export function _encode_CancelRequestedByManager(
    value: CancelRequestedByManager,
    elGetter: $.ASN1Encoder<CancelRequestedByManager>
) {
    if (!_cached_encoder_for_CancelRequestedByManager) {
        _cached_encoder_for_CancelRequestedByManager = $._encodeBoolean;
    }
    return _cached_encoder_for_CancelRequestedByManager(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CancelRequestedByManager */

/* eslint-enable */
