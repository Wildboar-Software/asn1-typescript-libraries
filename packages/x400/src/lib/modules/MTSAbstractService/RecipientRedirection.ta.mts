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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    RedirectionClass,
    _decode_RedirectionClass,
    _encode_RedirectionClass,
} from '../MTSAbstractService/RedirectionClass.ta.mjs';
import {
    RecipientAssignedAlternateRecipient,
    _decode_RecipientAssignedAlternateRecipient,
    _encode_RecipientAssignedAlternateRecipient,
} from '../MTSAbstractService/RecipientAssignedAlternateRecipient.ta.mjs';
/**
 * @summary RecipientRedirection
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RecipientRedirection ::= SET {
 *   redirection-classes
 *     [0]  SET SIZE (1..ub-redirection-classes) OF RedirectionClass OPTIONAL,
 *   recipient-assigned-alternate-recipient
 *     [1]  RecipientAssignedAlternateRecipient OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class RecipientRedirection {
    constructor(
        /**
         * @summary `redirection_classes`.
         * @public
         * @readonly
         */
        readonly redirection_classes: OPTIONAL<RedirectionClass[]>,
        /**
         * @summary `recipient_assigned_alternate_recipient`.
         * @public
         * @readonly
         */
        readonly recipient_assigned_alternate_recipient: OPTIONAL<RecipientAssignedAlternateRecipient>
    ) {}

    /**
     * @summary Restructures an object into a RecipientRedirection
     * @description
     *
     * This takes an `object` and converts it to a `RecipientRedirection`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RecipientRedirection`.
     * @returns {RecipientRedirection}
     */
    public static _from_object(
        _o: { [_K in keyof RecipientRedirection]: RecipientRedirection[_K] }
    ): RecipientRedirection {
        return new RecipientRedirection(
            _o.redirection_classes,
            _o.recipient_assigned_alternate_recipient
        );
    }
}

/**
 * @summary The Leading Root Component Types of RecipientRedirection
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_RecipientRedirection: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'redirection-classes',
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'recipient-assigned-alternate-recipient',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
];

/**
 * @summary The Trailing Root Component Types of RecipientRedirection
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RecipientRedirection: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of RecipientRedirection
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RecipientRedirection: $.ComponentSpec[] = [];

let _cached_decoder_for_RecipientRedirection: $.ASN1Decoder<RecipientRedirection> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RecipientRedirection
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RecipientRedirection} The decoded data structure.
 */
export function _decode_RecipientRedirection(el: _Element): RecipientRedirection {
    if (!_cached_decoder_for_RecipientRedirection) {
        _cached_decoder_for_RecipientRedirection = function (
            el: _Element
        ): RecipientRedirection {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let redirection_classes: OPTIONAL<RedirectionClass[]>;
            let recipient_assigned_alternate_recipient: OPTIONAL<RecipientAssignedAlternateRecipient>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            const callbacks: $.DecodingMap = {
                'redirection-classes': (_el: _Element): void => {
                    redirection_classes = $._decode_implicit<
                        RedirectionClass[]
                    >(() =>
                        $._decodeSetOf<RedirectionClass>(
                            () => _decode_RedirectionClass
                        )
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
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_RecipientRedirection,
                _extension_additions_list_spec_for_RecipientRedirection,
                _root_component_type_list_2_spec_for_RecipientRedirection,
                undefined
            );
            return new RecipientRedirection /* SET_CONSTRUCTOR_CALL */(
                redirection_classes,
                recipient_assigned_alternate_recipient
            );
        };
    }
    return _cached_decoder_for_RecipientRedirection(el);
}

let _cached_encoder_for_RecipientRedirection: $.ASN1Encoder<RecipientRedirection> | null = null;

/**
 * @summary Encodes a(n) RecipientRedirection into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RecipientRedirection, encoded as an ASN.1 Element.
 */
export function _encode_RecipientRedirection(
    value: RecipientRedirection,
    elGetter: $.ASN1Encoder<RecipientRedirection>
): _Element {
    if (!_cached_encoder_for_RecipientRedirection) {
        _cached_encoder_for_RecipientRedirection = function (
            value: RecipientRedirection        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.redirection_classes === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () =>
                                      $._encodeSetOf<RedirectionClass>(
                                          () => _encode_RedirectionClass,
                                          $.BER
                                      ),
                                  $.BER
                              )(value.redirection_classes, $.BER),
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
    return _cached_encoder_for_RecipientRedirection(value, elGetter);
}


/* eslint-enable */
