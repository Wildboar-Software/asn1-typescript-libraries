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
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.mjs';

/**
 * @summary DisconnectInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DisconnectInformation  ::=  SEQUENCE OF ObjectInstance
 * ```
 */
export type DisconnectInformation = ObjectInstance[]; // SequenceOfType


let _cached_decoder_for_DisconnectInformation: $.ASN1Decoder<DisconnectInformation> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) DisconnectInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DisconnectInformation} The decoded data structure.
 */
export function _decode_DisconnectInformation(el: _Element): DisconnectInformation {
    if (!_cached_decoder_for_DisconnectInformation) {
        _cached_decoder_for_DisconnectInformation = $._decodeSequenceOf<ObjectInstance>(
            () => _decode_ObjectInstance
        );
    }
    return _cached_decoder_for_DisconnectInformation(el);
}


let _cached_encoder_for_DisconnectInformation: $.ASN1Encoder<DisconnectInformation> | null = null;


/**
 * @summary Encodes a(n) DisconnectInformation into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DisconnectInformation, encoded as an ASN.1 Element.
 */
export function _encode_DisconnectInformation(
    value: DisconnectInformation,
    elGetter: $.ASN1Encoder<DisconnectInformation>
): _Element {
    if (!_cached_encoder_for_DisconnectInformation) {
        _cached_encoder_for_DisconnectInformation = $._encodeSequenceOf<ObjectInstance>(
            () => _encode_ObjectInstance,
            $.BER
        );
    }
    return _cached_encoder_for_DisconnectInformation(value, elGetter);
}


/* eslint-enable */
