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
    SupportedProtocol,
    _decode_SupportedProtocol,
    _encode_SupportedProtocol,
} from '../NLM/SupportedProtocol.ta.mjs';

/**
 * @summary SupportedProtocols
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SupportedProtocols  ::=  SET OF SupportedProtocol
 * ```
 */
export type SupportedProtocols = SupportedProtocol[]; // SetOfType


let _cached_decoder_for_SupportedProtocols: $.ASN1Decoder<SupportedProtocols> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) SupportedProtocols
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SupportedProtocols} The decoded data structure.
 */
export function _decode_SupportedProtocols(el: _Element): SupportedProtocols {
    if (!_cached_decoder_for_SupportedProtocols) {
        _cached_decoder_for_SupportedProtocols = $._decodeSetOf<SupportedProtocol>(
            () => _decode_SupportedProtocol
        );
    }
    return _cached_decoder_for_SupportedProtocols(el);
}


let _cached_encoder_for_SupportedProtocols: $.ASN1Encoder<SupportedProtocols> | null = null;


/**
 * @summary Encodes a(n) SupportedProtocols into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SupportedProtocols, encoded as an ASN.1 Element.
 */
export function _encode_SupportedProtocols(
    value: SupportedProtocols,
    elGetter: $.ASN1Encoder<SupportedProtocols>
): _Element {
    if (!_cached_encoder_for_SupportedProtocols) {
        _cached_encoder_for_SupportedProtocols = $._encodeSetOf<SupportedProtocol>(
            () => _encode_SupportedProtocol,
            $.BER
        );
    }
    return _cached_encoder_for_SupportedProtocols(value, elGetter);
}


/* eslint-enable */
