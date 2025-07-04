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
    ProceduralStatus,
    _decode_ProceduralStatus,
    _encode_ProceduralStatus,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/ProceduralStatus.ta.mjs';
/**
 * @summary ProceduralStatusValue
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProceduralStatusValue  ::=  ProceduralStatus(WITH COMPONENT (terminating))
 * ```
 */
export type ProceduralStatusValue = ProceduralStatus; // DefinedType

let _cached_decoder_for_ProceduralStatusValue: $.ASN1Decoder<ProceduralStatusValue> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProceduralStatusValue
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ProceduralStatusValue} The decoded data structure.
 */
export function _decode_ProceduralStatusValue(el: _Element): ProceduralStatusValue {
    if (!_cached_decoder_for_ProceduralStatusValue) {
        _cached_decoder_for_ProceduralStatusValue = _decode_ProceduralStatus;
    }
    return _cached_decoder_for_ProceduralStatusValue(el);
}

let _cached_encoder_for_ProceduralStatusValue: $.ASN1Encoder<ProceduralStatusValue> | null = null;

/**
 * @summary Encodes a(n) ProceduralStatusValue into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProceduralStatusValue, encoded as an ASN.1 Element.
 */
export function _encode_ProceduralStatusValue(
    value: ProceduralStatusValue,
    elGetter: $.ASN1Encoder<ProceduralStatusValue>
): _Element {
    if (!_cached_encoder_for_ProceduralStatusValue) {
        _cached_encoder_for_ProceduralStatusValue = _encode_ProceduralStatus;
    }
    return _cached_encoder_for_ProceduralStatusValue(value, elGetter);
}


/* eslint-enable */
