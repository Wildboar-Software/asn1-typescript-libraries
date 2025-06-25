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
    ExplicitConversion,
    _decode_ExplicitConversion,
    _encode_ExplicitConversion,
} from '../MTSAbstractService/ExplicitConversion.ta.mjs';
import {
    GenericConversion,
    _decode_GenericConversion,
    _encode_GenericConversion,
} from '../MhsMTAAsn1Module/GenericConversion.ta.mjs';
/**
 * @summary EMailConversionType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EMailConversionType  ::=  CHOICE {
 *   x400Conversion     [0]  ExplicitConversion,
 *   genericConversion  [1]  GenericConversion
 * }
 * ```
 */
export type EMailConversionType =
    | { x400Conversion: ExplicitConversion } /* CHOICE_ALT_ROOT */
    | { genericConversion: GenericConversion } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_EMailConversionType: $.ASN1Decoder<EMailConversionType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EMailConversionType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EMailConversionType} The decoded data structure.
 */
export function _decode_EMailConversionType(el: _Element): EMailConversionType {
    if (!_cached_decoder_for_EMailConversionType) {
        _cached_decoder_for_EMailConversionType = $._decode_inextensible_choice<EMailConversionType>(
            {
                'CONTEXT 0': [
                    'x400Conversion',
                    $._decode_implicit<ExplicitConversion>(
                        () => _decode_ExplicitConversion
                    ),
                ],
                'CONTEXT 1': [
                    'genericConversion',
                    $._decode_implicit<GenericConversion>(
                        () => _decode_GenericConversion
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_EMailConversionType(el);
}

let _cached_encoder_for_EMailConversionType: $.ASN1Encoder<EMailConversionType> | null = null;

/**
 * @summary Encodes a(n) EMailConversionType into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EMailConversionType, encoded as an ASN.1 Element.
 */
export function _encode_EMailConversionType(
    value: EMailConversionType,
    elGetter: $.ASN1Encoder<EMailConversionType>
): _Element {
    if (!_cached_encoder_for_EMailConversionType) {
        _cached_encoder_for_EMailConversionType = $._encode_choice<EMailConversionType>(
            {
                x400Conversion: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_ExplicitConversion,
                    $.BER
                ),
                genericConversion: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_GenericConversion,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_EMailConversionType(value, elGetter);
}


/* eslint-enable */
