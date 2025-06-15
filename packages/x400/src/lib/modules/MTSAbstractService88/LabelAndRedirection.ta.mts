/* eslint-disable */
import {
    OPTIONAL,
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
    UserSecurityLabel,
    _decode_UserSecurityLabel,
    _encode_UserSecurityLabel,
} from '../MTSAbstractService88/UserSecurityLabel.ta.mjs';
import {
    RecipientAssignedAlternateRecipient,
    _decode_RecipientAssignedAlternateRecipient,
    _encode_RecipientAssignedAlternateRecipient,
} from '../MTSAbstractService/RecipientAssignedAlternateRecipient.ta.mjs';
/**
 * @summary LabelAndRedirection
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LabelAndRedirection ::= SET {
 *   user-security-label                     [0]  UserSecurityLabel OPTIONAL,
 *   recipient-assigned-alternate-recipient
 *     [1]  RecipientAssignedAlternateRecipient OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class LabelAndRedirection {
    constructor(
        /**
         * @summary `user_security_label`.
         * @public
         * @readonly
         */
        readonly user_security_label: OPTIONAL<UserSecurityLabel>,
        /**
         * @summary `recipient_assigned_alternate_recipient`.
         * @public
         * @readonly
         */
        readonly recipient_assigned_alternate_recipient: OPTIONAL<RecipientAssignedAlternateRecipient>
    ) {}

    /**
     * @summary Restructures an object into a LabelAndRedirection
     * @description
     *
     * This takes an `object` and converts it to a `LabelAndRedirection`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LabelAndRedirection`.
     * @returns {LabelAndRedirection}
     */
    public static _from_object(
        _o: { [_K in keyof LabelAndRedirection]: LabelAndRedirection[_K] }
    ): LabelAndRedirection {
        return new LabelAndRedirection(
            _o.user_security_label,
            _o.recipient_assigned_alternate_recipient
        );
    }
}

/**
 * @summary The Leading Root Component Types of LabelAndRedirection
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_LabelAndRedirection: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'user-security-label',
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'recipient-assigned-alternate-recipient',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];

/**
 * @summary The Trailing Root Component Types of LabelAndRedirection
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_LabelAndRedirection: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of LabelAndRedirection
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_LabelAndRedirection: $.ComponentSpec[] = [];

let _cached_decoder_for_LabelAndRedirection: $.ASN1Decoder<LabelAndRedirection> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LabelAndRedirection
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LabelAndRedirection} The decoded data structure.
 */
export function _decode_LabelAndRedirection(el: _Element) {
    if (!_cached_decoder_for_LabelAndRedirection) {
        _cached_decoder_for_LabelAndRedirection = function (
            el: _Element
        ): LabelAndRedirection {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let user_security_label: OPTIONAL<UserSecurityLabel>;
            let recipient_assigned_alternate_recipient: OPTIONAL<RecipientAssignedAlternateRecipient>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'user-security-label': (_el: _Element): void => {
                    user_security_label = $._decode_implicit<UserSecurityLabel>(
                        () => _decode_UserSecurityLabel
                    )(_el);
                },
                'recipient-assigned-alternate-recipient': (
                    _el: _Element
                ): void => {
                    recipient_assigned_alternate_recipient = $._decode_implicit<RecipientAssignedAlternateRecipient>(
                        () => _decode_RecipientAssignedAlternateRecipient
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_LabelAndRedirection,
                _extension_additions_list_spec_for_LabelAndRedirection,
                _root_component_type_list_2_spec_for_LabelAndRedirection,
                undefined
            );
            return new LabelAndRedirection /* SET_CONSTRUCTOR_CALL */(
                user_security_label,
                recipient_assigned_alternate_recipient
            );
        };
    }
    return _cached_decoder_for_LabelAndRedirection(el);
}

let _cached_encoder_for_LabelAndRedirection: $.ASN1Encoder<LabelAndRedirection> | null = null;

/**
 * @summary Encodes a(n) LabelAndRedirection into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LabelAndRedirection, encoded as an ASN.1 Element.
 */
export function _encode_LabelAndRedirection(
    value: LabelAndRedirection,
    elGetter: $.ASN1Encoder<LabelAndRedirection>
) {
    if (!_cached_encoder_for_LabelAndRedirection) {
        _cached_encoder_for_LabelAndRedirection = function (
            value: LabelAndRedirection        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.user_security_label === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_UserSecurityLabel,
                                  $.BER
                              )(value.user_security_label, $.BER),
                        /* IF_ABSENT  */ value.recipient_assigned_alternate_recipient ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () =>
                                      _encode_RecipientAssignedAlternateRecipient,
                                  $.BER
                              )(
                                  value.recipient_assigned_alternate_recipient,
                                  $.BER
                              ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_LabelAndRedirection(value, elGetter);
}


/* eslint-enable */
