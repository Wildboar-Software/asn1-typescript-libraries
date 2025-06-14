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

/* START_OF_SYMBOL_DEFINITION HeldByManager */
/**
 * @summary HeldByManager
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HeldByManager  ::=  BOOLEAN
 * ```
 */
export type HeldByManager = BOOLEAN; // BooleanType
/* END_OF_SYMBOL_DEFINITION HeldByManager */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_HeldByManager */
let _cached_decoder_for_HeldByManager: $.ASN1Decoder<HeldByManager> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_HeldByManager */

/* START_OF_SYMBOL_DEFINITION _decode_HeldByManager */
/**
 * @summary Decodes an ASN.1 element into a(n) HeldByManager
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {HeldByManager} The decoded data structure.
 */
export function _decode_HeldByManager(el: _Element) {
    if (!_cached_decoder_for_HeldByManager) {
        _cached_decoder_for_HeldByManager = $._decodeBoolean;
    }
    return _cached_decoder_for_HeldByManager(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_HeldByManager */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_HeldByManager */
let _cached_encoder_for_HeldByManager: $.ASN1Encoder<HeldByManager> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_HeldByManager */

/* START_OF_SYMBOL_DEFINITION _encode_HeldByManager */
/**
 * @summary Encodes a(n) HeldByManager into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HeldByManager, encoded as an ASN.1 Element.
 */
export function _encode_HeldByManager(
    value: HeldByManager,
    elGetter: $.ASN1Encoder<HeldByManager>
) {
    if (!_cached_encoder_for_HeldByManager) {
        _cached_encoder_for_HeldByManager = $._encodeBoolean;
    }
    return _cached_encoder_for_HeldByManager(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_HeldByManager */

/* eslint-enable */
