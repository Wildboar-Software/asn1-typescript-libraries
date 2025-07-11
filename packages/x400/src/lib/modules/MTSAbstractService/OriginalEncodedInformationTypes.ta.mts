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
    EncodedInformationTypes,
    _decode_EncodedInformationTypes,
    _encode_EncodedInformationTypes,
} from '../MTSAbstractService/EncodedInformationTypes.ta.mjs';
/**
 * @summary OriginalEncodedInformationTypes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OriginalEncodedInformationTypes  ::=  EncodedInformationTypes
 * ```
 */
export type OriginalEncodedInformationTypes = EncodedInformationTypes; // DefinedType

let _cached_decoder_for_OriginalEncodedInformationTypes: $.ASN1Decoder<OriginalEncodedInformationTypes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OriginalEncodedInformationTypes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OriginalEncodedInformationTypes} The decoded data structure.
 */
export function _decode_OriginalEncodedInformationTypes(el: _Element): OriginalEncodedInformationTypes {
    if (!_cached_decoder_for_OriginalEncodedInformationTypes) {
        _cached_decoder_for_OriginalEncodedInformationTypes = _decode_EncodedInformationTypes;
    }
    return _cached_decoder_for_OriginalEncodedInformationTypes(el);
}

let _cached_encoder_for_OriginalEncodedInformationTypes: $.ASN1Encoder<OriginalEncodedInformationTypes> | null = null;

/**
 * @summary Encodes a(n) OriginalEncodedInformationTypes into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OriginalEncodedInformationTypes, encoded as an ASN.1 Element.
 */
export function _encode_OriginalEncodedInformationTypes(
    value: OriginalEncodedInformationTypes,
    elGetter: $.ASN1Encoder<OriginalEncodedInformationTypes>
): _Element {
    if (!_cached_encoder_for_OriginalEncodedInformationTypes) {
        _cached_encoder_for_OriginalEncodedInformationTypes = _encode_EncodedInformationTypes;
    }
    return _cached_encoder_for_OriginalEncodedInformationTypes(value, elGetter);
}


/* eslint-enable */
