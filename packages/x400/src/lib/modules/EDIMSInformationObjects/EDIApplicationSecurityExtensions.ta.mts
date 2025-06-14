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
    EDIApplicationSecurityExtension,
    _decode_EDIApplicationSecurityExtension,
    _encode_EDIApplicationSecurityExtension,
} from '../EDIMSInformationObjects/EDIApplicationSecurityExtension.ta.mjs';
/* START_OF_SYMBOL_DEFINITION EDIApplicationSecurityExtensions */
/**
 * @summary EDIApplicationSecurityExtensions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EDIApplicationSecurityExtensions  ::=  SET OF EDIApplicationSecurityExtension
 * ```
 */
export type EDIApplicationSecurityExtensions = EDIApplicationSecurityExtension[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION EDIApplicationSecurityExtensions */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EDIApplicationSecurityExtensions */
let _cached_decoder_for_EDIApplicationSecurityExtensions: $.ASN1Decoder<EDIApplicationSecurityExtensions> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EDIApplicationSecurityExtensions */

/* START_OF_SYMBOL_DEFINITION _decode_EDIApplicationSecurityExtensions */
/**
 * @summary Decodes an ASN.1 element into a(n) EDIApplicationSecurityExtensions
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EDIApplicationSecurityExtensions} The decoded data structure.
 */
export function _decode_EDIApplicationSecurityExtensions(el: _Element) {
    if (!_cached_decoder_for_EDIApplicationSecurityExtensions) {
        _cached_decoder_for_EDIApplicationSecurityExtensions = $._decodeSetOf<EDIApplicationSecurityExtension>(
            () => _decode_EDIApplicationSecurityExtension
        );
    }
    return _cached_decoder_for_EDIApplicationSecurityExtensions(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EDIApplicationSecurityExtensions */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EDIApplicationSecurityExtensions */
let _cached_encoder_for_EDIApplicationSecurityExtensions: $.ASN1Encoder<EDIApplicationSecurityExtensions> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EDIApplicationSecurityExtensions */

/* START_OF_SYMBOL_DEFINITION _encode_EDIApplicationSecurityExtensions */
/**
 * @summary Encodes a(n) EDIApplicationSecurityExtensions into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EDIApplicationSecurityExtensions, encoded as an ASN.1 Element.
 */
export function _encode_EDIApplicationSecurityExtensions(
    value: EDIApplicationSecurityExtensions,
    elGetter: $.ASN1Encoder<EDIApplicationSecurityExtensions>
) {
    if (!_cached_encoder_for_EDIApplicationSecurityExtensions) {
        _cached_encoder_for_EDIApplicationSecurityExtensions = $._encodeSetOf<EDIApplicationSecurityExtension>(
            () => _encode_EDIApplicationSecurityExtension,
            $.BER
        );
    }
    return _cached_encoder_for_EDIApplicationSecurityExtensions(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_EDIApplicationSecurityExtensions */

/* eslint-enable */
