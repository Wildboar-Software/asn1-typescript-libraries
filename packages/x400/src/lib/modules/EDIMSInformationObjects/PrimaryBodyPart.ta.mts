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
    EDIBodyPart,
    _decode_EDIBodyPart,
    _encode_EDIBodyPart,
} from '../EDIMSInformationObjects/EDIBodyPart.ta.mjs';
import {
    EDIMBodyPart,
    _decode_EDIMBodyPart,
    _encode_EDIMBodyPart,
} from '../EDIMSInformationObjects/EDIMBodyPart.ta.mjs';
/**
 * @summary PrimaryBodyPart
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PrimaryBodyPart  ::=  CHOICE {
 *   edi-body-part   [0]  EDIBodyPart,
 *   forwarded-EDIM  [1]  EDIMBodyPart
 * }
 * ```
 */
export type PrimaryBodyPart =
    | { edi_body_part: EDIBodyPart } /* CHOICE_ALT_ROOT */
    | { forwarded_EDIM: EDIMBodyPart } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_PrimaryBodyPart: $.ASN1Decoder<PrimaryBodyPart> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PrimaryBodyPart
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PrimaryBodyPart} The decoded data structure.
 */
export function _decode_PrimaryBodyPart(el: _Element): PrimaryBodyPart {
    if (!_cached_decoder_for_PrimaryBodyPart) {
        _cached_decoder_for_PrimaryBodyPart = $._decode_inextensible_choice<PrimaryBodyPart>(
            {
                'CONTEXT 0': [
                    'edi_body_part',
                    $._decode_implicit<EDIBodyPart>(() => _decode_EDIBodyPart),
                ],
                'CONTEXT 1': [
                    'forwarded_EDIM',
                    $._decode_implicit<EDIMBodyPart>(
                        () => _decode_EDIMBodyPart
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_PrimaryBodyPart(el);
}

let _cached_encoder_for_PrimaryBodyPart: $.ASN1Encoder<PrimaryBodyPart> | null = null;

/**
 * @summary Encodes a(n) PrimaryBodyPart into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PrimaryBodyPart, encoded as an ASN.1 Element.
 */
export function _encode_PrimaryBodyPart(
    value: PrimaryBodyPart,
    elGetter: $.ASN1Encoder<PrimaryBodyPart>
): _Element {
    if (!_cached_encoder_for_PrimaryBodyPart) {
        _cached_encoder_for_PrimaryBodyPart = $._encode_choice<PrimaryBodyPart>(
            {
                edi_body_part: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_EDIBodyPart,
                    $.BER
                ),
                forwarded_EDIM: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_EDIMBodyPart,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_PrimaryBodyPart(value, elGetter);
}


/* eslint-enable */
