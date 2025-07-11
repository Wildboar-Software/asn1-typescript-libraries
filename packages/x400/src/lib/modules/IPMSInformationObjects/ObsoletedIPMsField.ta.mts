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
    ObsoletedIPMsSubfield,
    _decode_ObsoletedIPMsSubfield,
    _encode_ObsoletedIPMsSubfield,
} from '../IPMSInformationObjects/ObsoletedIPMsSubfield.ta.mjs';
/**
 * @summary ObsoletedIPMsField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ObsoletedIPMsField  ::=  SEQUENCE OF ObsoletedIPMsSubfield
 * ```
 */
export type ObsoletedIPMsField = ObsoletedIPMsSubfield[]; // SequenceOfType

let _cached_decoder_for_ObsoletedIPMsField: $.ASN1Decoder<ObsoletedIPMsField> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ObsoletedIPMsField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ObsoletedIPMsField} The decoded data structure.
 */
export function _decode_ObsoletedIPMsField(el: _Element): ObsoletedIPMsField {
    if (!_cached_decoder_for_ObsoletedIPMsField) {
        _cached_decoder_for_ObsoletedIPMsField = $._decodeSequenceOf<ObsoletedIPMsSubfield>(
            () => _decode_ObsoletedIPMsSubfield
        );
    }
    return _cached_decoder_for_ObsoletedIPMsField(el);
}

let _cached_encoder_for_ObsoletedIPMsField: $.ASN1Encoder<ObsoletedIPMsField> | null = null;

/**
 * @summary Encodes a(n) ObsoletedIPMsField into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ObsoletedIPMsField, encoded as an ASN.1 Element.
 */
export function _encode_ObsoletedIPMsField(
    value: ObsoletedIPMsField,
    elGetter: $.ASN1Encoder<ObsoletedIPMsField>
): _Element {
    if (!_cached_encoder_for_ObsoletedIPMsField) {
        _cached_encoder_for_ObsoletedIPMsField = $._encodeSequenceOf<ObsoletedIPMsSubfield>(
            () => _encode_ObsoletedIPMsSubfield,
            $.BER
        );
    }
    return _cached_encoder_for_ObsoletedIPMsField(value, elGetter);
}


/* eslint-enable */
