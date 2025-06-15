/* eslint-disable */
import {
    TeletexString,
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

/**
 * @summary InterchangeControlReferenceField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InterchangeControlReferenceField  ::=
 *   TeletexString(SIZE (1..ub-interchange-control-reference))
 * ```
 */
export type InterchangeControlReferenceField = TeletexString; // TeletexString

let _cached_decoder_for_InterchangeControlReferenceField: $.ASN1Decoder<InterchangeControlReferenceField> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InterchangeControlReferenceField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {InterchangeControlReferenceField} The decoded data structure.
 */
export function _decode_InterchangeControlReferenceField(el: _Element) {
    if (!_cached_decoder_for_InterchangeControlReferenceField) {
        _cached_decoder_for_InterchangeControlReferenceField =
            $._decodeTeletexString;
    }
    return _cached_decoder_for_InterchangeControlReferenceField(el);
}

let _cached_encoder_for_InterchangeControlReferenceField: $.ASN1Encoder<InterchangeControlReferenceField> | null = null;

/**
 * @summary Encodes a(n) InterchangeControlReferenceField into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InterchangeControlReferenceField, encoded as an ASN.1 Element.
 */
export function _encode_InterchangeControlReferenceField(
    value: InterchangeControlReferenceField,
    elGetter: $.ASN1Encoder<InterchangeControlReferenceField>
) {
    if (!_cached_encoder_for_InterchangeControlReferenceField) {
        _cached_encoder_for_InterchangeControlReferenceField =
            $._encodeTeletexString;
    }
    return _cached_encoder_for_InterchangeControlReferenceField(
        value,
        elGetter
    );
}


/* eslint-enable */
