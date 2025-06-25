/* eslint-disable */
import {
    NULL,
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
    Register_MSResult_registered_information,
    _decode_Register_MSResult_registered_information,
    _encode_Register_MSResult_registered_information,
} from '../MSAbstractService/Register-MSResult-registered-information.ta.mjs';
/**
 * @summary Register_MSResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Register-MSResult  ::=  CHOICE {
 *   no-status-information   NULL,
 *   -- 1994 extension
 *   registered-information
 *     SET {auto-action-registrations
 *            [0]  SET SIZE (1..ub-auto-registrations) OF AutoActionRegistration
 *              OPTIONAL,
 *          list-attribute-defaults
 *            [1]  SET SIZE (1..ub-default-registrations) OF
 *                   X413ATTRIBUTE.&id({AttributeTable}) OPTIONAL,
 *          fetch-attribute-defaults
 *            [2]  SET SIZE (1..ub-default-registrations) OF
 *                   X413ATTRIBUTE.&id({AttributeTable}) OPTIONAL,
 *          ua-registrations
 *            [3]  SET SIZE (1..ub-ua-registrations) OF UARegistration OPTIONAL,
 *          submission-defaults            [4]  MSSubmissionOptions OPTIONAL,
 *          message-group-registrations
 *            [5]  SET SIZE (1..ub-message-groups) OF
 *                   MessageGroupNameAndDescriptor OPTIONAL,
 *          register-ms-result-extensions  [6]  MSExtensions OPTIONAL}
 * }
 * ```
 */
export type Register_MSResult =
    | { no_status_information: NULL } /* CHOICE_ALT_ROOT */
    | {
          registered_information: Register_MSResult_registered_information;
      } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Register_MSResult: $.ASN1Decoder<Register_MSResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Register_MSResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Register_MSResult} The decoded data structure.
 */
export function _decode_Register_MSResult(el: _Element): Register_MSResult {
    if (!_cached_decoder_for_Register_MSResult) {
        _cached_decoder_for_Register_MSResult = $._decode_inextensible_choice<Register_MSResult>(
            {
                'UNIVERSAL 5': ['no_status_information', $._decodeNull],
                'UNIVERSAL 17': [
                    'registered_information',
                    _decode_Register_MSResult_registered_information,
                ],
            }
        );
    }
    return _cached_decoder_for_Register_MSResult(el);
}

let _cached_encoder_for_Register_MSResult: $.ASN1Encoder<Register_MSResult> | null = null;

/**
 * @summary Encodes a(n) Register_MSResult into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Register_MSResult, encoded as an ASN.1 Element.
 */
export function _encode_Register_MSResult(
    value: Register_MSResult,
    elGetter: $.ASN1Encoder<Register_MSResult>
): _Element {
    if (!_cached_encoder_for_Register_MSResult) {
        _cached_encoder_for_Register_MSResult = $._encode_choice<Register_MSResult>(
            {
                no_status_information: $._encodeNull,
                registered_information: _encode_Register_MSResult_registered_information,
            },
            $.BER
        );
    }
    return _cached_encoder_for_Register_MSResult(value, elGetter);
}


/* eslint-enable */
