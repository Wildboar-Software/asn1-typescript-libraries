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
    ControlStatus,
    _decode_ControlStatus,
    _encode_ControlStatus,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/ControlStatus.ta.mjs';
/**
 * @summary ControlStatusValue
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ControlStatusValue  ::=  ControlStatus(WITH COMPONENT (suspended))
 * ```
 */
export type ControlStatusValue = ControlStatus; // DefinedType

let _cached_decoder_for_ControlStatusValue: $.ASN1Decoder<ControlStatusValue> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ControlStatusValue
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ControlStatusValue} The decoded data structure.
 */
export function _decode_ControlStatusValue(el: _Element): ControlStatusValue {
    if (!_cached_decoder_for_ControlStatusValue) {
        _cached_decoder_for_ControlStatusValue = _decode_ControlStatus;
    }
    return _cached_decoder_for_ControlStatusValue(el);
}

let _cached_encoder_for_ControlStatusValue: $.ASN1Encoder<ControlStatusValue> | null = null;

/**
 * @summary Encodes a(n) ControlStatusValue into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ControlStatusValue, encoded as an ASN.1 Element.
 */
export function _encode_ControlStatusValue(
    value: ControlStatusValue,
    elGetter: $.ASN1Encoder<ControlStatusValue>
): _Element {
    if (!_cached_encoder_for_ControlStatusValue) {
        _cached_encoder_for_ControlStatusValue = _encode_ControlStatus;
    }
    return _cached_encoder_for_ControlStatusValue(value, elGetter);
}


/* eslint-enable */
