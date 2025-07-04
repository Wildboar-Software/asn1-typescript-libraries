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
    SimpleNameType,
    _decode_SimpleNameType,
    _encode_SimpleNameType,
} from '@wildboar/attribute-asn1module';
/**
 * @summary SynchronizationProtocolID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SynchronizationProtocolID  ::=  SimpleNameType
 * ```
 */
export type SynchronizationProtocolID = SimpleNameType; // DefinedType

let _cached_decoder_for_SynchronizationProtocolID: $.ASN1Decoder<SynchronizationProtocolID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SynchronizationProtocolID
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SynchronizationProtocolID} The decoded data structure.
 */
export function _decode_SynchronizationProtocolID(el: _Element): SynchronizationProtocolID {
    if (!_cached_decoder_for_SynchronizationProtocolID) {
        _cached_decoder_for_SynchronizationProtocolID = _decode_SimpleNameType;
    }
    return _cached_decoder_for_SynchronizationProtocolID(el);
}

let _cached_encoder_for_SynchronizationProtocolID: $.ASN1Encoder<SynchronizationProtocolID> | null = null;

/**
 * @summary Encodes a(n) SynchronizationProtocolID into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SynchronizationProtocolID, encoded as an ASN.1 Element.
 */
export function _encode_SynchronizationProtocolID(
    value: SynchronizationProtocolID,
    elGetter: $.ASN1Encoder<SynchronizationProtocolID>
): _Element {
    if (!_cached_encoder_for_SynchronizationProtocolID) {
        _cached_encoder_for_SynchronizationProtocolID = _encode_SimpleNameType;
    }
    return _cached_encoder_for_SynchronizationProtocolID(value, elGetter);
}


/* eslint-enable */
