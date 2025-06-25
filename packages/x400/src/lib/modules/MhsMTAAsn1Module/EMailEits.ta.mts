/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
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
    EncodedInformationTypes,
    _decode_EncodedInformationTypes,
    _encode_EncodedInformationTypes,
} from '../MTSAbstractService/EncodedInformationTypes.ta.mjs';
/**
 * @summary EMailEits
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EMailEits  ::=  CHOICE {
 *   x400EIT      [0]  EncodedInformationTypes,
 *   genericEITs  [1]  SEQUENCE OF OBJECT IDENTIFIER
 * }
 * ```
 */
export type EMailEits =
    | { x400EIT: EncodedInformationTypes } /* CHOICE_ALT_ROOT */
    | { genericEITs: OBJECT_IDENTIFIER[] } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_EMailEits: $.ASN1Decoder<EMailEits> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EMailEits
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EMailEits} The decoded data structure.
 */
export function _decode_EMailEits(el: _Element): EMailEits {
    if (!_cached_decoder_for_EMailEits) {
        _cached_decoder_for_EMailEits = $._decode_inextensible_choice<EMailEits>(
            {
                'CONTEXT 0': [
                    'x400EIT',
                    $._decode_implicit<EncodedInformationTypes>(
                        () => _decode_EncodedInformationTypes
                    ),
                ],
                'CONTEXT 1': [
                    'genericEITs',
                    $._decode_implicit<OBJECT_IDENTIFIER[]>(() =>
                        $._decodeSequenceOf<OBJECT_IDENTIFIER>(
                            () => $._decodeObjectIdentifier
                        )
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_EMailEits(el);
}

let _cached_encoder_for_EMailEits: $.ASN1Encoder<EMailEits> | null = null;

/**
 * @summary Encodes a(n) EMailEits into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EMailEits, encoded as an ASN.1 Element.
 */
export function _encode_EMailEits(
    value: EMailEits,
    elGetter: $.ASN1Encoder<EMailEits>
): _Element {
    if (!_cached_encoder_for_EMailEits) {
        _cached_encoder_for_EMailEits = $._encode_choice<EMailEits>(
            {
                x400EIT: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_EncodedInformationTypes,
                    $.BER
                ),
                genericEITs: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () =>
                        $._encodeSequenceOf<OBJECT_IDENTIFIER>(
                            () => $._encodeObjectIdentifier,
                            $.BER
                        ),
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_EMailEits(value, elGetter);
}


/* eslint-enable */
