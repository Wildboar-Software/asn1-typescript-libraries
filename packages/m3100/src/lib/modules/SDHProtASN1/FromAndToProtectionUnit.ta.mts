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
    RelativeDistinguishedName,
    _decode_RelativeDistinguishedName,
    _encode_RelativeDistinguishedName,
} from '@wildboar/pki-stub/src/lib/modules/PKI-Stub/RelativeDistinguishedName.ta.mjs';
/* START_OF_SYMBOL_DEFINITION FromAndToProtectionUnit */
/**
 * @summary FromAndToProtectionUnit
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FromAndToProtectionUnit  ::=  CHOICE {
 *   fromProtectionUnitNumber  [0]  RelativeDistinguishedName,
 *   toProtectionUnitNumber    [1]  RelativeDistinguishedName
 * }
 * ```
 */
export type FromAndToProtectionUnit =
    | {
          fromProtectionUnitNumber: RelativeDistinguishedName;
      } /* CHOICE_ALT_ROOT */
    | {
          toProtectionUnitNumber: RelativeDistinguishedName;
      } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION FromAndToProtectionUnit */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_FromAndToProtectionUnit */
let _cached_decoder_for_FromAndToProtectionUnit: $.ASN1Decoder<FromAndToProtectionUnit> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_FromAndToProtectionUnit */

/* START_OF_SYMBOL_DEFINITION _decode_FromAndToProtectionUnit */
/**
 * @summary Decodes an ASN.1 element into a(n) FromAndToProtectionUnit
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {FromAndToProtectionUnit} The decoded data structure.
 */
export function _decode_FromAndToProtectionUnit(el: _Element) {
    if (!_cached_decoder_for_FromAndToProtectionUnit) {
        _cached_decoder_for_FromAndToProtectionUnit = $._decode_inextensible_choice<FromAndToProtectionUnit>(
            {
                'CONTEXT 0': [
                    'fromProtectionUnitNumber',
                    $._decode_implicit<RelativeDistinguishedName>(
                        () => _decode_RelativeDistinguishedName
                    ),
                ],
                'CONTEXT 1': [
                    'toProtectionUnitNumber',
                    $._decode_implicit<RelativeDistinguishedName>(
                        () => _decode_RelativeDistinguishedName
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_FromAndToProtectionUnit(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_FromAndToProtectionUnit */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_FromAndToProtectionUnit */
let _cached_encoder_for_FromAndToProtectionUnit: $.ASN1Encoder<FromAndToProtectionUnit> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_FromAndToProtectionUnit */

/* START_OF_SYMBOL_DEFINITION _encode_FromAndToProtectionUnit */
/**
 * @summary Encodes a(n) FromAndToProtectionUnit into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FromAndToProtectionUnit, encoded as an ASN.1 Element.
 */
export function _encode_FromAndToProtectionUnit(
    value: FromAndToProtectionUnit,
    elGetter: $.ASN1Encoder<FromAndToProtectionUnit>
) {
    if (!_cached_encoder_for_FromAndToProtectionUnit) {
        _cached_encoder_for_FromAndToProtectionUnit = $._encode_choice<FromAndToProtectionUnit>(
            {
                fromProtectionUnitNumber: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_RelativeDistinguishedName,
                    $.BER
                ),
                toProtectionUnitNumber: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_RelativeDistinguishedName,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_FromAndToProtectionUnit(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_FromAndToProtectionUnit */

/* eslint-enable */
