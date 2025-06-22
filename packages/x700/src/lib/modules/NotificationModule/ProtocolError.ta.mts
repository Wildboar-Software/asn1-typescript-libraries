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
    ManagementExtension,
    _decode_ManagementExtension,
    _encode_ManagementExtension,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/ManagementExtension.ta.mjs';
/**
 * @summary ProtocolError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProtocolError  ::=  SET OF ManagementExtension
 * ```
 */
export type ProtocolError = ManagementExtension[]; // SetOfType

let _cached_decoder_for_ProtocolError: $.ASN1Decoder<ProtocolError> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProtocolError
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ProtocolError} The decoded data structure.
 */
export function _decode_ProtocolError(el: _Element) {
    if (!_cached_decoder_for_ProtocolError) {
        _cached_decoder_for_ProtocolError = $._decodeSetOf<ManagementExtension>(
            () => _decode_ManagementExtension
        );
    }
    return _cached_decoder_for_ProtocolError(el);
}

let _cached_encoder_for_ProtocolError: $.ASN1Encoder<ProtocolError> | null = null;

/**
 * @summary Encodes a(n) ProtocolError into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProtocolError, encoded as an ASN.1 Element.
 */
export function _encode_ProtocolError(
    value: ProtocolError,
    elGetter: $.ASN1Encoder<ProtocolError>
) {
    if (!_cached_encoder_for_ProtocolError) {
        _cached_encoder_for_ProtocolError = $._encodeSetOf<ManagementExtension>(
            () => _encode_ManagementExtension,
            $.BER
        );
    }
    return _cached_encoder_for_ProtocolError(value, elGetter);
}


/* eslint-enable */
