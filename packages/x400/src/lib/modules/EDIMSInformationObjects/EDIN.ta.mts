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
    PositiveNotificationFields,
    _decode_PositiveNotificationFields,
    _encode_PositiveNotificationFields,
} from '../EDIMSInformationObjects/PositiveNotificationFields.ta.mjs';
import {
    NegativeNotificationFields,
    _decode_NegativeNotificationFields,
    _encode_NegativeNotificationFields,
} from '../EDIMSInformationObjects/NegativeNotificationFields.ta.mjs';
import {
    ForwardedNotificationFields,
    _decode_ForwardedNotificationFields,
    _encode_ForwardedNotificationFields,
} from '../EDIMSInformationObjects/ForwardedNotificationFields.ta.mjs';
/**
 * @summary EDIN
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EDIN  ::=  CHOICE {
 *   positive-notification   [0]  PositiveNotificationFields,
 *   negative-notification   [1]  NegativeNotificationFields,
 *   forwarded-notification  [2]  ForwardedNotificationFields
 * }
 * ```
 */
export type EDIN =
    | {
          positive_notification: PositiveNotificationFields;
      } /* CHOICE_ALT_ROOT */
    | {
          negative_notification: NegativeNotificationFields;
      } /* CHOICE_ALT_ROOT */
    | {
          forwarded_notification: ForwardedNotificationFields;
      } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_EDIN: $.ASN1Decoder<EDIN> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EDIN
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EDIN} The decoded data structure.
 */
export function _decode_EDIN(el: _Element): EDIN {
    if (!_cached_decoder_for_EDIN) {
        _cached_decoder_for_EDIN = $._decode_inextensible_choice<EDIN>({
            'CONTEXT 0': [
                'positive_notification',
                $._decode_implicit<PositiveNotificationFields>(
                    () => _decode_PositiveNotificationFields
                ),
            ],
            'CONTEXT 1': [
                'negative_notification',
                $._decode_implicit<NegativeNotificationFields>(
                    () => _decode_NegativeNotificationFields
                ),
            ],
            'CONTEXT 2': [
                'forwarded_notification',
                $._decode_implicit<ForwardedNotificationFields>(
                    () => _decode_ForwardedNotificationFields
                ),
            ],
        });
    }
    return _cached_decoder_for_EDIN(el);
}

let _cached_encoder_for_EDIN: $.ASN1Encoder<EDIN> | null = null;

/**
 * @summary Encodes a(n) EDIN into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EDIN, encoded as an ASN.1 Element.
 */
export function _encode_EDIN(value: EDIN, elGetter: $.ASN1Encoder<EDIN>): _Element {
    if (!_cached_encoder_for_EDIN) {
        _cached_encoder_for_EDIN = $._encode_choice<EDIN>(
            {
                positive_notification: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_PositiveNotificationFields,
                    $.BER
                ),
                negative_notification: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_NegativeNotificationFields,
                    $.BER
                ),
                forwarded_notification: $._encode_implicit(
                    _TagClass.context,
                    2,
                    () => _encode_ForwardedNotificationFields,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_EDIN(value, elGetter);
}


/* eslint-enable */
