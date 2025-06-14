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
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from '@wildboar/x500/src/lib/modules/AuthenticationFramework/AlgorithmIdentifier.ta.mjs';
/* START_OF_SYMBOL_DEFINITION ReportOriginAuthenticationAlgorithmIdentifier */
/**
 * @summary ReportOriginAuthenticationAlgorithmIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReportOriginAuthenticationAlgorithmIdentifier  ::=  AlgorithmIdentifier
 * ```
 */
export type ReportOriginAuthenticationAlgorithmIdentifier = AlgorithmIdentifier; // DefinedType
/* END_OF_SYMBOL_DEFINITION ReportOriginAuthenticationAlgorithmIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ReportOriginAuthenticationAlgorithmIdentifier */
let _cached_decoder_for_ReportOriginAuthenticationAlgorithmIdentifier: $.ASN1Decoder<ReportOriginAuthenticationAlgorithmIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ReportOriginAuthenticationAlgorithmIdentifier */

/* START_OF_SYMBOL_DEFINITION _decode_ReportOriginAuthenticationAlgorithmIdentifier */
/**
 * @summary Decodes an ASN.1 element into a(n) ReportOriginAuthenticationAlgorithmIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReportOriginAuthenticationAlgorithmIdentifier} The decoded data structure.
 */
export function _decode_ReportOriginAuthenticationAlgorithmIdentifier(
    el: _Element
) {
    if (!_cached_decoder_for_ReportOriginAuthenticationAlgorithmIdentifier) {
        _cached_decoder_for_ReportOriginAuthenticationAlgorithmIdentifier = _decode_AlgorithmIdentifier;
    }
    return _cached_decoder_for_ReportOriginAuthenticationAlgorithmIdentifier(
        el
    );
}
/* END_OF_SYMBOL_DEFINITION _decode_ReportOriginAuthenticationAlgorithmIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ReportOriginAuthenticationAlgorithmIdentifier */
let _cached_encoder_for_ReportOriginAuthenticationAlgorithmIdentifier: $.ASN1Encoder<ReportOriginAuthenticationAlgorithmIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ReportOriginAuthenticationAlgorithmIdentifier */

/* START_OF_SYMBOL_DEFINITION _encode_ReportOriginAuthenticationAlgorithmIdentifier */
/**
 * @summary Encodes a(n) ReportOriginAuthenticationAlgorithmIdentifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReportOriginAuthenticationAlgorithmIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_ReportOriginAuthenticationAlgorithmIdentifier(
    value: ReportOriginAuthenticationAlgorithmIdentifier,
    elGetter: $.ASN1Encoder<ReportOriginAuthenticationAlgorithmIdentifier>
) {
    if (!_cached_encoder_for_ReportOriginAuthenticationAlgorithmIdentifier) {
        _cached_encoder_for_ReportOriginAuthenticationAlgorithmIdentifier = _encode_AlgorithmIdentifier;
    }
    return _cached_encoder_for_ReportOriginAuthenticationAlgorithmIdentifier(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_ReportOriginAuthenticationAlgorithmIdentifier */

/* eslint-enable */
