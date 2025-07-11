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
    ACBioInstance,
    _decode_ACBioInstance,
    _encode_ACBioInstance,
} from '../AuthenticationContextForBiometrics/ACBioInstance.ta.mjs';

/**
 * @summary SequenceOfACBioInstances
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SequenceOfACBioInstances  ::=  SEQUENCE OF ACBioInstance
 * ```
 */
export type SequenceOfACBioInstances = ACBioInstance[]; // SequenceOfType


let _cached_decoder_for_SequenceOfACBioInstances: $.ASN1Decoder<SequenceOfACBioInstances> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) SequenceOfACBioInstances
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SequenceOfACBioInstances} The decoded data structure.
 */
export function _decode_SequenceOfACBioInstances(el: _Element): SequenceOfACBioInstances {
    if (!_cached_decoder_for_SequenceOfACBioInstances) {
        _cached_decoder_for_SequenceOfACBioInstances = $._decodeSequenceOf<ACBioInstance>(
            () => _decode_ACBioInstance
        );
    }
    return _cached_decoder_for_SequenceOfACBioInstances(el);
}


let _cached_encoder_for_SequenceOfACBioInstances: $.ASN1Encoder<SequenceOfACBioInstances> | null = null;


/**
 * @summary Encodes a(n) SequenceOfACBioInstances into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SequenceOfACBioInstances, encoded as an ASN.1 Element.
 */
export function _encode_SequenceOfACBioInstances(
    value: SequenceOfACBioInstances,
    elGetter: $.ASN1Encoder<SequenceOfACBioInstances>
): _Element {
    if (!_cached_encoder_for_SequenceOfACBioInstances) {
        _cached_encoder_for_SequenceOfACBioInstances = $._encodeSequenceOf<ACBioInstance>(
            () => _encode_ACBioInstance,
            $.BER
        );
    }
    return _cached_encoder_for_SequenceOfACBioInstances(value, elGetter);
}


/* eslint-enable */
