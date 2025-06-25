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
} from '../MhsAcctAsn1Module/GenericConversion.ta.mjs';
/**
 * @summary EMailFromToEIT
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EMailFromToEIT  ::=  CHOICE {
 *   explicitConversion  [0]  ExplicitConversion,
 *   genericConversion   [1]  GenericConversion
 * }
 * ```
 */
export type EMailFromToEIT =
    | { explicitConversion: ExplicitConversion } /* CHOICE_ALT_ROOT */
    | { genericConversion: GenericConversion } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_EMailFromToEIT: $.ASN1Decoder<EMailFromToEIT> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EMailFromToEIT
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EMailFromToEIT} The decoded data structure.
 */
export function _decode_EMailFromToEIT(el: _Element): EMailFromToEIT {
    if (!_cached_decoder_for_EMailFromToEIT) {
        _cached_decoder_for_EMailFromToEIT = $._decode_inextensible_choice<EMailFromToEIT>(
            {
                'CONTEXT 0': [
                    'explicitConversion',
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
    return _cached_decoder_for_EMailFromToEIT(el);
}

let _cached_encoder_for_EMailFromToEIT: $.ASN1Encoder<EMailFromToEIT> | null = null;

/**
 * @summary Encodes a(n) EMailFromToEIT into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EMailFromToEIT, encoded as an ASN.1 Element.
 */
export function _encode_EMailFromToEIT(
    value: EMailFromToEIT,
    elGetter: $.ASN1Encoder<EMailFromToEIT>
): _Element {
    if (!_cached_encoder_for_EMailFromToEIT) {
        _cached_encoder_for_EMailFromToEIT = $._encode_choice<EMailFromToEIT>(
            {
                explicitConversion: $._encode_implicit(
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
    return _cached_encoder_for_EMailFromToEIT(value, elGetter);
}


/* eslint-enable */
