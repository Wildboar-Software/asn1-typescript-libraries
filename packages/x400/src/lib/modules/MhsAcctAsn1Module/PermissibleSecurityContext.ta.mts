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
    SecurityContext,
    _decode_SecurityContext,
    _encode_SecurityContext,
} from '../MTSAbstractService/SecurityContext.ta.mjs';
/**
 * @summary PermissibleSecurityContext
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PermissibleSecurityContext  ::=  SET OF SecurityContext
 * ```
 */
export type PermissibleSecurityContext = SecurityContext[]; // SetOfType

let _cached_decoder_for_PermissibleSecurityContext: $.ASN1Decoder<PermissibleSecurityContext> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PermissibleSecurityContext
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PermissibleSecurityContext} The decoded data structure.
 */
export function _decode_PermissibleSecurityContext(el: _Element) {
    if (!_cached_decoder_for_PermissibleSecurityContext) {
        _cached_decoder_for_PermissibleSecurityContext = $._decodeSetOf<SecurityContext>(
            () => _decode_SecurityContext
        );
    }
    return _cached_decoder_for_PermissibleSecurityContext(el);
}

let _cached_encoder_for_PermissibleSecurityContext: $.ASN1Encoder<PermissibleSecurityContext> | null = null;

/**
 * @summary Encodes a(n) PermissibleSecurityContext into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PermissibleSecurityContext, encoded as an ASN.1 Element.
 */
export function _encode_PermissibleSecurityContext(
    value: PermissibleSecurityContext,
    elGetter: $.ASN1Encoder<PermissibleSecurityContext>
) {
    if (!_cached_encoder_for_PermissibleSecurityContext) {
        _cached_encoder_for_PermissibleSecurityContext = $._encodeSetOf<SecurityContext>(
            () => _encode_SecurityContext,
            $.BER
        );
    }
    return _cached_encoder_for_PermissibleSecurityContext(value, elGetter);
}


/* eslint-enable */
