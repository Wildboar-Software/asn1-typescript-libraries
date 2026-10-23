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
    AttributeId,
    _decode_AttributeId,
    _encode_AttributeId,
} from '@wildboar/cmip';
/**
 * @summary TimeAttributeIdentifier
 * @description
 *
 * Identifies which attribute of an observed managed
 * object is used for time-window selection in
 * `timingSelectionPackage` (`{summarizationAttribute
 * 28}`). That attribute shall have `GeneralizedTime`
 * syntax. ITU-T Rec. X.738 (11/93)
 * [§8.1.12.5.2](https://www.itu.int/rec/T-REC-X.738-199311-I),
 * A.4.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TimeAttributeIdentifier  ::=  AttributeId
 * ```
 */
export type TimeAttributeIdentifier = AttributeId; // DefinedType

let _cached_decoder_for_TimeAttributeIdentifier: $.ASN1Decoder<TimeAttributeIdentifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TimeAttributeIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TimeAttributeIdentifier} The decoded data structure.
 */
export function _decode_TimeAttributeIdentifier(el: _Element): TimeAttributeIdentifier {
    if (!_cached_decoder_for_TimeAttributeIdentifier) {
        _cached_decoder_for_TimeAttributeIdentifier = _decode_AttributeId;
    }
    return _cached_decoder_for_TimeAttributeIdentifier(el);
}

let _cached_encoder_for_TimeAttributeIdentifier: $.ASN1Encoder<TimeAttributeIdentifier> | null = null;

/**
 * @summary Encodes a(n) TimeAttributeIdentifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TimeAttributeIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_TimeAttributeIdentifier(
    value: TimeAttributeIdentifier,
    elGetter: $.ASN1Encoder<TimeAttributeIdentifier>
): _Element {
    if (!_cached_encoder_for_TimeAttributeIdentifier) {
        _cached_encoder_for_TimeAttributeIdentifier = _encode_AttributeId;
    }
    return _cached_encoder_for_TimeAttributeIdentifier(value, elGetter);
}


/* eslint-enable */
