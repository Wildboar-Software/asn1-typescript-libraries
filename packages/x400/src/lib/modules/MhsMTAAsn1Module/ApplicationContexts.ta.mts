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
    ApplicationContext,
    _decode_ApplicationContext,
    _encode_ApplicationContext,
} from '../MhsMTAAsn1Module/ApplicationContext.ta.mjs';
/**
 * @summary ApplicationContexts
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ApplicationContexts  ::=  SET OF ApplicationContext
 * ```
 */
export type ApplicationContexts = ApplicationContext[]; // SetOfType

let _cached_decoder_for_ApplicationContexts: $.ASN1Decoder<ApplicationContexts> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ApplicationContexts
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ApplicationContexts} The decoded data structure.
 */
export function _decode_ApplicationContexts(el: _Element) {
    if (!_cached_decoder_for_ApplicationContexts) {
        _cached_decoder_for_ApplicationContexts = $._decodeSetOf<ApplicationContext>(
            () => _decode_ApplicationContext
        );
    }
    return _cached_decoder_for_ApplicationContexts(el);
}

let _cached_encoder_for_ApplicationContexts: $.ASN1Encoder<ApplicationContexts> | null = null;

/**
 * @summary Encodes a(n) ApplicationContexts into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ApplicationContexts, encoded as an ASN.1 Element.
 */
export function _encode_ApplicationContexts(
    value: ApplicationContexts,
    elGetter: $.ASN1Encoder<ApplicationContexts>
) {
    if (!_cached_encoder_for_ApplicationContexts) {
        _cached_encoder_for_ApplicationContexts = $._encodeSetOf<ApplicationContext>(
            () => _encode_ApplicationContext,
            $.BER
        );
    }
    return _cached_encoder_for_ApplicationContexts(value, elGetter);
}


/* eslint-enable */
