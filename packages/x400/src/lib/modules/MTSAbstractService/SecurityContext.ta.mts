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
    SecurityLabel,
    _decode_SecurityLabel,
    _encode_SecurityLabel,
} from '../MTSAbstractService/SecurityLabel.ta.mjs';
/**
 * @summary SecurityContext
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SecurityContext  ::=  SET SIZE (1..ub-security-labels) OF SecurityLabel
 * ```
 */
export type SecurityContext = SecurityLabel[]; // SetOfType

let _cached_decoder_for_SecurityContext: $.ASN1Decoder<SecurityContext> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SecurityContext
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SecurityContext} The decoded data structure.
 */
export function _decode_SecurityContext(el: _Element): SecurityContext {
    if (!_cached_decoder_for_SecurityContext) {
        _cached_decoder_for_SecurityContext = $._decodeSetOf<SecurityLabel>(
            () => _decode_SecurityLabel
        );
    }
    return _cached_decoder_for_SecurityContext(el);
}

let _cached_encoder_for_SecurityContext: $.ASN1Encoder<SecurityContext> | null = null;

/**
 * @summary Encodes a(n) SecurityContext into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SecurityContext, encoded as an ASN.1 Element.
 */
export function _encode_SecurityContext(
    value: SecurityContext,
    elGetter: $.ASN1Encoder<SecurityContext>
): _Element {
    if (!_cached_encoder_for_SecurityContext) {
        _cached_encoder_for_SecurityContext = $._encodeSetOf<SecurityLabel>(
            () => _encode_SecurityLabel,
            $.BER
        );
    }
    return _cached_encoder_for_SecurityContext(value, elGetter);
}


/* eslint-enable */
