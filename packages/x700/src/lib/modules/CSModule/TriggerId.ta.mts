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
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.mjs';
/**
 * @summary TriggerId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TriggerId  ::=  ObjectInstance
 * ```
 */
export type TriggerId = ObjectInstance; // DefinedType

let _cached_decoder_for_TriggerId: $.ASN1Decoder<TriggerId> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TriggerId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TriggerId} The decoded data structure.
 */
export function _decode_TriggerId(el: _Element): TriggerId {
    if (!_cached_decoder_for_TriggerId) {
        _cached_decoder_for_TriggerId = _decode_ObjectInstance;
    }
    return _cached_decoder_for_TriggerId(el);
}

let _cached_encoder_for_TriggerId: $.ASN1Encoder<TriggerId> | null = null;

/**
 * @summary Encodes a(n) TriggerId into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TriggerId, encoded as an ASN.1 Element.
 */
export function _encode_TriggerId(
    value: TriggerId,
    elGetter: $.ASN1Encoder<TriggerId>
): _Element {
    if (!_cached_encoder_for_TriggerId) {
        _cached_encoder_for_TriggerId = _encode_ObjectInstance;
    }
    return _cached_encoder_for_TriggerId(value, elGetter);
}


/* eslint-enable */
