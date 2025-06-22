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
    UniversalOrBMPString,
    _decode_UniversalOrBMPString,
    _encode_UniversalOrBMPString,
} from '../MTSAbstractService/UniversalOrBMPString.ta.mjs';
/**
 * @summary AlphaCode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AlphaCode  ::=  UniversalOrBMPString{ub-alpha-code-length}
 * ```
 */
export type AlphaCode = UniversalOrBMPString; // DefinedType

let _cached_decoder_for_AlphaCode: $.ASN1Decoder<AlphaCode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AlphaCode
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AlphaCode} The decoded data structure.
 */
export function _decode_AlphaCode(el: _Element) {
    if (!_cached_decoder_for_AlphaCode) {
        _cached_decoder_for_AlphaCode = _decode_UniversalOrBMPString;
    }
    return _cached_decoder_for_AlphaCode(el);
}

let _cached_encoder_for_AlphaCode: $.ASN1Encoder<AlphaCode> | null = null;

/**
 * @summary Encodes a(n) AlphaCode into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AlphaCode, encoded as an ASN.1 Element.
 */
export function _encode_AlphaCode(
    value: AlphaCode,
    elGetter: $.ASN1Encoder<AlphaCode>
) {
    if (!_cached_encoder_for_AlphaCode) {
        _cached_encoder_for_AlphaCode = _encode_UniversalOrBMPString;
    }
    return _cached_encoder_for_AlphaCode(value, elGetter);
}


/* eslint-enable */
