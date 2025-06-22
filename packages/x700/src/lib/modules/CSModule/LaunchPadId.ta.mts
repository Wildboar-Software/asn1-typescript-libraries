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
import * as $ from '@wildboar/asn1/functional';
import {
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.mjs';
/**
 * @summary LaunchPadId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LaunchPadId  ::=  ObjectInstance
 * ```
 */
export type LaunchPadId = ObjectInstance; // DefinedType

let _cached_decoder_for_LaunchPadId: $.ASN1Decoder<LaunchPadId> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LaunchPadId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LaunchPadId} The decoded data structure.
 */
export function _decode_LaunchPadId(el: _Element) {
    if (!_cached_decoder_for_LaunchPadId) {
        _cached_decoder_for_LaunchPadId = _decode_ObjectInstance;
    }
    return _cached_decoder_for_LaunchPadId(el);
}

let _cached_encoder_for_LaunchPadId: $.ASN1Encoder<LaunchPadId> | null = null;

/**
 * @summary Encodes a(n) LaunchPadId into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LaunchPadId, encoded as an ASN.1 Element.
 */
export function _encode_LaunchPadId(
    value: LaunchPadId,
    elGetter: $.ASN1Encoder<LaunchPadId>
) {
    if (!_cached_encoder_for_LaunchPadId) {
        _cached_encoder_for_LaunchPadId = _encode_ObjectInstance;
    }
    return _cached_encoder_for_LaunchPadId(value, elGetter);
}


/* eslint-enable */
