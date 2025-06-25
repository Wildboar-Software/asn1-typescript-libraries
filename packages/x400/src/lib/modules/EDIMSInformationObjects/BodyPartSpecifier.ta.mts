/* eslint-disable */
import {
    INTEGER,
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
    SequenceNumber,
    _decode_SequenceNumber,
    _encode_SequenceNumber,
} from '../MSAbstractService/SequenceNumber.ta.mjs';
import {
    BodyPartSpecifier_stored_body_part,
    _decode_BodyPartSpecifier_stored_body_part,
    _encode_BodyPartSpecifier_stored_body_part,
} from '../EDIMSInformationObjects/BodyPartSpecifier-stored-body-part.ta.mjs';
/**
 * @summary BodyPartSpecifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BodyPartSpecifier  ::=  CHOICE {
 *   stored-entry         [0]  SequenceNumber,
 *   submitted-body-part  [2]  INTEGER(1..MAX),
 *   stored-body-part
 *     [3]  SEQUENCE {message-entry     SequenceNumber,
 *                    body-part-number  INTEGER(1..MAX)}
 * }
 * ```
 */
export type BodyPartSpecifier =
    | { stored_entry: SequenceNumber } /* CHOICE_ALT_ROOT */
    | { submitted_body_part: INTEGER } /* CHOICE_ALT_ROOT */
    | {
          stored_body_part: BodyPartSpecifier_stored_body_part;
      } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_BodyPartSpecifier: $.ASN1Decoder<BodyPartSpecifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BodyPartSpecifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BodyPartSpecifier} The decoded data structure.
 */
export function _decode_BodyPartSpecifier(el: _Element): BodyPartSpecifier {
    if (!_cached_decoder_for_BodyPartSpecifier) {
        _cached_decoder_for_BodyPartSpecifier = $._decode_inextensible_choice<BodyPartSpecifier>(
            {
                'CONTEXT 0': [
                    'stored_entry',
                    $._decode_implicit<SequenceNumber>(
                        () => _decode_SequenceNumber
                    ),
                ],
                'CONTEXT 2': [
                    'submitted_body_part',
                    $._decode_implicit<INTEGER>(() => $._decodeInteger),
                ],
                'CONTEXT 3': [
                    'stored_body_part',
                    $._decode_implicit<BodyPartSpecifier_stored_body_part>(
                        () => _decode_BodyPartSpecifier_stored_body_part
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_BodyPartSpecifier(el);
}

let _cached_encoder_for_BodyPartSpecifier: $.ASN1Encoder<BodyPartSpecifier> | null = null;

/**
 * @summary Encodes a(n) BodyPartSpecifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BodyPartSpecifier, encoded as an ASN.1 Element.
 */
export function _encode_BodyPartSpecifier(
    value: BodyPartSpecifier,
    elGetter: $.ASN1Encoder<BodyPartSpecifier>
): _Element {
    if (!_cached_encoder_for_BodyPartSpecifier) {
        _cached_encoder_for_BodyPartSpecifier = $._encode_choice<BodyPartSpecifier>(
            {
                stored_entry: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_SequenceNumber,
                    $.BER
                ),
                submitted_body_part: $._encode_implicit(
                    _TagClass.context,
                    2,
                    () => $._encodeInteger,
                    $.BER
                ),
                stored_body_part: $._encode_implicit(
                    _TagClass.context,
                    3,
                    () => _encode_BodyPartSpecifier_stored_body_part,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_BodyPartSpecifier(value, elGetter);
}


/* eslint-enable */
