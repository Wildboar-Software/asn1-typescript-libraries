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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    ACBioInstance,
    _decode_ACBioInstance,
    _encode_ACBioInstance,
} from '../AuthenticationContextForBiometrics/ACBioInstance.ta.mjs';
/* START_OF_SYMBOL_DEFINITION SequenceOfACBioInstances */
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
/* END_OF_SYMBOL_DEFINITION SequenceOfACBioInstances */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SequenceOfACBioInstances */
let _cached_decoder_for_SequenceOfACBioInstances: $.ASN1Decoder<SequenceOfACBioInstances> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SequenceOfACBioInstances */

/* START_OF_SYMBOL_DEFINITION _decode_SequenceOfACBioInstances */
/**
 * @summary Decodes an ASN.1 element into a(n) SequenceOfACBioInstances
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SequenceOfACBioInstances} The decoded data structure.
 */
export function _decode_SequenceOfACBioInstances(el: _Element) {
    if (!_cached_decoder_for_SequenceOfACBioInstances) {
        _cached_decoder_for_SequenceOfACBioInstances = $._decodeSequenceOf<ACBioInstance>(
            () => _decode_ACBioInstance
        );
    }
    return _cached_decoder_for_SequenceOfACBioInstances(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SequenceOfACBioInstances */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SequenceOfACBioInstances */
let _cached_encoder_for_SequenceOfACBioInstances: $.ASN1Encoder<SequenceOfACBioInstances> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SequenceOfACBioInstances */

/* START_OF_SYMBOL_DEFINITION _encode_SequenceOfACBioInstances */
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
) {
    if (!_cached_encoder_for_SequenceOfACBioInstances) {
        _cached_encoder_for_SequenceOfACBioInstances = $._encodeSequenceOf<ACBioInstance>(
            () => _encode_ACBioInstance,
            $.BER
        );
    }
    return _cached_encoder_for_SequenceOfACBioInstances(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SequenceOfACBioInstances */

/* eslint-enable */
