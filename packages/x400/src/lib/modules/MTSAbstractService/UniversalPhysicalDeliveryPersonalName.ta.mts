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
    UniversalPDSParameter,
    _decode_UniversalPDSParameter,
    _encode_UniversalPDSParameter,
} from '../MTSAbstractService/UniversalPDSParameter.ta.mjs';
/**
 * @summary UniversalPhysicalDeliveryPersonalName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UniversalPhysicalDeliveryPersonalName  ::=  UniversalPDSParameter
 * ```
 */
export type UniversalPhysicalDeliveryPersonalName = UniversalPDSParameter; // DefinedType

let _cached_decoder_for_UniversalPhysicalDeliveryPersonalName: $.ASN1Decoder<UniversalPhysicalDeliveryPersonalName> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UniversalPhysicalDeliveryPersonalName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UniversalPhysicalDeliveryPersonalName} The decoded data structure.
 */
export function _decode_UniversalPhysicalDeliveryPersonalName(el: _Element) {
    if (!_cached_decoder_for_UniversalPhysicalDeliveryPersonalName) {
        _cached_decoder_for_UniversalPhysicalDeliveryPersonalName = _decode_UniversalPDSParameter;
    }
    return _cached_decoder_for_UniversalPhysicalDeliveryPersonalName(el);
}

let _cached_encoder_for_UniversalPhysicalDeliveryPersonalName: $.ASN1Encoder<UniversalPhysicalDeliveryPersonalName> | null = null;

/**
 * @summary Encodes a(n) UniversalPhysicalDeliveryPersonalName into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UniversalPhysicalDeliveryPersonalName, encoded as an ASN.1 Element.
 */
export function _encode_UniversalPhysicalDeliveryPersonalName(
    value: UniversalPhysicalDeliveryPersonalName,
    elGetter: $.ASN1Encoder<UniversalPhysicalDeliveryPersonalName>
) {
    if (!_cached_encoder_for_UniversalPhysicalDeliveryPersonalName) {
        _cached_encoder_for_UniversalPhysicalDeliveryPersonalName = _encode_UniversalPDSParameter;
    }
    return _cached_encoder_for_UniversalPhysicalDeliveryPersonalName(
        value,
        elGetter
    );
}


/* eslint-enable */
