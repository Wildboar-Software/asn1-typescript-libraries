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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip';
/**
 * @summary SynchronizedClock
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SynchronizedClock  ::=  ObjectInstance
 * ```
 */
export type SynchronizedClock = ObjectInstance; // DefinedType

let _cached_decoder_for_SynchronizedClock: $.ASN1Decoder<SynchronizedClock> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SynchronizedClock
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SynchronizedClock} The decoded data structure.
 */
export function _decode_SynchronizedClock(el: _Element): SynchronizedClock {
    if (!_cached_decoder_for_SynchronizedClock) {
        _cached_decoder_for_SynchronizedClock = _decode_ObjectInstance;
    }
    return _cached_decoder_for_SynchronizedClock(el);
}

let _cached_encoder_for_SynchronizedClock: $.ASN1Encoder<SynchronizedClock> | null = null;

/**
 * @summary Encodes a(n) SynchronizedClock into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SynchronizedClock, encoded as an ASN.1 Element.
 */
export function _encode_SynchronizedClock(
    value: SynchronizedClock,
    elGetter: $.ASN1Encoder<SynchronizedClock>
): _Element {
    if (!_cached_encoder_for_SynchronizedClock) {
        _cached_encoder_for_SynchronizedClock = _encode_ObjectInstance;
    }
    return _cached_encoder_for_SynchronizedClock(value, elGetter);
}


/* eslint-enable */
