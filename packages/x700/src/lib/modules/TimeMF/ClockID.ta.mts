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
    SimpleNameType,
    _decode_SimpleNameType,
    _encode_SimpleNameType,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/SimpleNameType.ta.mjs';
/**
 * @summary ClockID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ClockID  ::=  SimpleNameType
 * ```
 */
export type ClockID = SimpleNameType; // DefinedType

let _cached_decoder_for_ClockID: $.ASN1Decoder<ClockID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ClockID
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ClockID} The decoded data structure.
 */
export function _decode_ClockID(el: _Element): ClockID {
    if (!_cached_decoder_for_ClockID) {
        _cached_decoder_for_ClockID = _decode_SimpleNameType;
    }
    return _cached_decoder_for_ClockID(el);
}

let _cached_encoder_for_ClockID: $.ASN1Encoder<ClockID> | null = null;

/**
 * @summary Encodes a(n) ClockID into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ClockID, encoded as an ASN.1 Element.
 */
export function _encode_ClockID(
    value: ClockID,
    elGetter: $.ASN1Encoder<ClockID>
): _Element {
    if (!_cached_encoder_for_ClockID) {
        _cached_encoder_for_ClockID = _encode_SimpleNameType;
    }
    return _cached_encoder_for_ClockID(value, elGetter);
}


/* eslint-enable */
