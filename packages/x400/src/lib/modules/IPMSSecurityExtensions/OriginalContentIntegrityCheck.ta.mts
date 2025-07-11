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
    ContentIntegrityCheck,
    _decode_ContentIntegrityCheck,
    _encode_ContentIntegrityCheck,
} from '../MTSAbstractService/ContentIntegrityCheck.ta.mjs';
/**
 * @summary OriginalContentIntegrityCheck
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OriginalContentIntegrityCheck  ::=  ContentIntegrityCheck
 * ```
 */
export type OriginalContentIntegrityCheck = ContentIntegrityCheck; // DefinedType

let _cached_decoder_for_OriginalContentIntegrityCheck: $.ASN1Decoder<OriginalContentIntegrityCheck> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OriginalContentIntegrityCheck
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OriginalContentIntegrityCheck} The decoded data structure.
 */
export function _decode_OriginalContentIntegrityCheck(el: _Element): OriginalContentIntegrityCheck {
    if (!_cached_decoder_for_OriginalContentIntegrityCheck) {
        _cached_decoder_for_OriginalContentIntegrityCheck = _decode_ContentIntegrityCheck;
    }
    return _cached_decoder_for_OriginalContentIntegrityCheck(el);
}

let _cached_encoder_for_OriginalContentIntegrityCheck: $.ASN1Encoder<OriginalContentIntegrityCheck> | null = null;

/**
 * @summary Encodes a(n) OriginalContentIntegrityCheck into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OriginalContentIntegrityCheck, encoded as an ASN.1 Element.
 */
export function _encode_OriginalContentIntegrityCheck(
    value: OriginalContentIntegrityCheck,
    elGetter: $.ASN1Encoder<OriginalContentIntegrityCheck>
): _Element {
    if (!_cached_encoder_for_OriginalContentIntegrityCheck) {
        _cached_encoder_for_OriginalContentIntegrityCheck = _encode_ContentIntegrityCheck;
    }
    return _cached_encoder_for_OriginalContentIntegrityCheck(value, elGetter);
}


/* eslint-enable */
