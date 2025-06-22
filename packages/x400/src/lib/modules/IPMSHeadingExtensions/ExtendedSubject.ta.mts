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
 * @summary ExtendedSubject
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ExtendedSubject  ::=  UniversalOrBMPString{ub-extended-subject-length}
 * ```
 */
export type ExtendedSubject = UniversalOrBMPString; // DefinedType

let _cached_decoder_for_ExtendedSubject: $.ASN1Decoder<ExtendedSubject> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ExtendedSubject
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ExtendedSubject} The decoded data structure.
 */
export function _decode_ExtendedSubject(el: _Element) {
    if (!_cached_decoder_for_ExtendedSubject) {
        _cached_decoder_for_ExtendedSubject = _decode_UniversalOrBMPString;
    }
    return _cached_decoder_for_ExtendedSubject(el);
}

let _cached_encoder_for_ExtendedSubject: $.ASN1Encoder<ExtendedSubject> | null = null;

/**
 * @summary Encodes a(n) ExtendedSubject into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExtendedSubject, encoded as an ASN.1 Element.
 */
export function _encode_ExtendedSubject(
    value: ExtendedSubject,
    elGetter: $.ASN1Encoder<ExtendedSubject>
) {
    if (!_cached_encoder_for_ExtendedSubject) {
        _cached_encoder_for_ExtendedSubject = _encode_UniversalOrBMPString;
    }
    return _cached_encoder_for_ExtendedSubject(value, elGetter);
}


/* eslint-enable */
