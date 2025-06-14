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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.mjs';
/* START_OF_SYMBOL_DEFINITION SynchronizingClocks */
/**
 * @summary SynchronizingClocks
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SynchronizingClocks  ::=  SET OF ObjectInstance
 * ```
 */
export type SynchronizingClocks = ObjectInstance[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION SynchronizingClocks */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SynchronizingClocks */
let _cached_decoder_for_SynchronizingClocks: $.ASN1Decoder<SynchronizingClocks> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SynchronizingClocks */

/* START_OF_SYMBOL_DEFINITION _decode_SynchronizingClocks */
/**
 * @summary Decodes an ASN.1 element into a(n) SynchronizingClocks
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SynchronizingClocks} The decoded data structure.
 */
export function _decode_SynchronizingClocks(el: _Element) {
    if (!_cached_decoder_for_SynchronizingClocks) {
        _cached_decoder_for_SynchronizingClocks = $._decodeSetOf<ObjectInstance>(
            () => _decode_ObjectInstance
        );
    }
    return _cached_decoder_for_SynchronizingClocks(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SynchronizingClocks */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SynchronizingClocks */
let _cached_encoder_for_SynchronizingClocks: $.ASN1Encoder<SynchronizingClocks> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SynchronizingClocks */

/* START_OF_SYMBOL_DEFINITION _encode_SynchronizingClocks */
/**
 * @summary Encodes a(n) SynchronizingClocks into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SynchronizingClocks, encoded as an ASN.1 Element.
 */
export function _encode_SynchronizingClocks(
    value: SynchronizingClocks,
    elGetter: $.ASN1Encoder<SynchronizingClocks>
) {
    if (!_cached_encoder_for_SynchronizingClocks) {
        _cached_encoder_for_SynchronizingClocks = $._encodeSetOf<ObjectInstance>(
            () => _encode_ObjectInstance,
            $.BER
        );
    }
    return _cached_encoder_for_SynchronizingClocks(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SynchronizingClocks */

/* eslint-enable */
