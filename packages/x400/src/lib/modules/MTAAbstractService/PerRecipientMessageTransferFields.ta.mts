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
    RecipientName,
    _decode_RecipientName,
    _encode_RecipientName,
} from '../MTAAbstractService/RecipientName.ta.mjs';
import {
    OriginallySpecifiedRecipientNumber,
    _decode_OriginallySpecifiedRecipientNumber,
    _encode_OriginallySpecifiedRecipientNumber,
} from '../MTAAbstractService/OriginallySpecifiedRecipientNumber.ta.mjs';
import {
    PerRecipientIndicators,
    _decode_PerRecipientIndicators,
    _encode_PerRecipientIndicators,
} from '../MTAAbstractService/PerRecipientIndicators.ta.mjs';
import {
    ExplicitConversion,
    _decode_ExplicitConversion,
    _encode_ExplicitConversion,
} from '../MTSAbstractService/ExplicitConversion.ta.mjs';
import {
    ExtensionField,
    _decode_ExtensionField,
    _encode_ExtensionField,
} from '../MTSAbstractService/ExtensionField.ta.mjs';
/**
 * @summary PerRecipientMessageTransferFields
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PerRecipientMessageTransferFields ::= SET {
 *   recipient-name                         RecipientName,
 *   originally-specified-recipient-number
 *     [0]  OriginallySpecifiedRecipientNumber,
 *   per-recipient-indicators               [1]  PerRecipientIndicators,
 *   explicit-conversion                    [2]  ExplicitConversion OPTIONAL,
 *   extensions
 *     [3]  SET OF ExtensionField{{PerRecipientMessageTransferExtensions}}
 *       DEFAULT {}
 * }
 * ```
 *
 * @class
 */
export class PerRecipientMessageTransferFields {
    constructor(
        /**
         * @summary `recipient_name`.
         * @public
         * @readonly
         */
        readonly recipient_name: RecipientName,
        /**
         * @summary `originally_specified_recipient_number`.
         * @public
         * @readonly
         */
        readonly originally_specified_recipient_number: OriginallySpecifiedRecipientNumber,
        /**
         * @summary `per_recipient_indicators`.
         * @public
         * @readonly
         */
        readonly per_recipient_indicators: PerRecipientIndicators,
        /**
         * @summary `explicit_conversion`.
         * @public
         * @readonly
         */
        readonly explicit_conversion: OPTIONAL<ExplicitConversion>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<ExtensionField[]>
    ) {}

    /**
     * @summary Restructures an object into a PerRecipientMessageTransferFields
     * @description
     *
     * This takes an `object` and converts it to a `PerRecipientMessageTransferFields`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PerRecipientMessageTransferFields`.
     * @returns {PerRecipientMessageTransferFields}
     */
    public static _from_object(
        _o: {
            [_K in keyof PerRecipientMessageTransferFields]: PerRecipientMessageTransferFields[_K];
        }
    ): PerRecipientMessageTransferFields {
        return new PerRecipientMessageTransferFields(
            _o.recipient_name,
            _o.originally_specified_recipient_number,
            _o.per_recipient_indicators,
            _o.explicit_conversion,
            _o.extensions
        );
    }

    /**
     * @summary Getter that returns the default value for `extensions`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_extensions(): ExtensionField[] {
        return [];
    }
}

/**
 * @summary The Leading Root Component Types of PerRecipientMessageTransferFields
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PerRecipientMessageTransferFields: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'recipient-name',
        false,
        $.hasTag(_TagClass.application, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'originally-specified-recipient-number',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'per-recipient-indicators',
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'explicit-conversion',
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'extensions',
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
];

/**
 * @summary The Trailing Root Component Types of PerRecipientMessageTransferFields
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PerRecipientMessageTransferFields: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of PerRecipientMessageTransferFields
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PerRecipientMessageTransferFields: $.ComponentSpec[] = [];

let _cached_decoder_for_PerRecipientMessageTransferFields: $.ASN1Decoder<PerRecipientMessageTransferFields> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PerRecipientMessageTransferFields
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PerRecipientMessageTransferFields} The decoded data structure.
 */
export function _decode_PerRecipientMessageTransferFields(el: _Element) {
    if (!_cached_decoder_for_PerRecipientMessageTransferFields) {
        _cached_decoder_for_PerRecipientMessageTransferFields = function (
            el: _Element
        ): PerRecipientMessageTransferFields {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let recipient_name!: RecipientName;
            let originally_specified_recipient_number!: OriginallySpecifiedRecipientNumber;
            let per_recipient_indicators!: PerRecipientIndicators;
            let explicit_conversion: OPTIONAL<ExplicitConversion>;
            let extensions: OPTIONAL<ExtensionField[]> =
                PerRecipientMessageTransferFields._default_value_for_extensions;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'recipient-name': (_el: _Element): void => {
                    recipient_name = _decode_RecipientName(_el);
                },
                'originally-specified-recipient-number': (
                    _el: _Element
                ): void => {
                    originally_specified_recipient_number = $._decode_implicit<OriginallySpecifiedRecipientNumber>(
                        () => _decode_OriginallySpecifiedRecipientNumber
                    )(_el);
                },
                'per-recipient-indicators': (_el: _Element): void => {
                    per_recipient_indicators = $._decode_implicit<PerRecipientIndicators>(
                        () => _decode_PerRecipientIndicators
                    )(_el);
                },
                'explicit-conversion': (_el: _Element): void => {
                    explicit_conversion = $._decode_implicit<ExplicitConversion>(
                        () => _decode_ExplicitConversion
                    )(_el);
                },
                extensions: (_el: _Element): void => {
                    extensions = $._decode_implicit<ExtensionField[]>(() =>
                        $._decodeSetOf<ExtensionField>(
                            () => _decode_ExtensionField
                        )
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_PerRecipientMessageTransferFields,
                _extension_additions_list_spec_for_PerRecipientMessageTransferFields,
                _root_component_type_list_2_spec_for_PerRecipientMessageTransferFields,
                undefined
            );
            return new PerRecipientMessageTransferFields /* SET_CONSTRUCTOR_CALL */(
                recipient_name,
                originally_specified_recipient_number,
                per_recipient_indicators,
                explicit_conversion,
                extensions
            );
        };
    }
    return _cached_decoder_for_PerRecipientMessageTransferFields(el);
}

let _cached_encoder_for_PerRecipientMessageTransferFields: $.ASN1Encoder<PerRecipientMessageTransferFields> | null = null;

/**
 * @summary Encodes a(n) PerRecipientMessageTransferFields into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PerRecipientMessageTransferFields, encoded as an ASN.1 Element.
 */
export function _encode_PerRecipientMessageTransferFields(
    value: PerRecipientMessageTransferFields,
    elGetter: $.ASN1Encoder<PerRecipientMessageTransferFields>
) {
    if (!_cached_encoder_for_PerRecipientMessageTransferFields) {
        _cached_encoder_for_PerRecipientMessageTransferFields = function (
            value: PerRecipientMessageTransferFields        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_RecipientName(
                            value.recipient_name,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => _encode_OriginallySpecifiedRecipientNumber,
                            $.BER
                        )(value.originally_specified_recipient_number, $.BER),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            1,
                            () => _encode_PerRecipientIndicators,
                            $.BER
                        )(value.per_recipient_indicators, $.BER),
                        /* IF_ABSENT  */ value.explicit_conversion === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_ExplicitConversion,
                                  $.BER
                              )(value.explicit_conversion, $.BER),
                        /* IF_DEFAULT */ value.extensions === undefined ||
                        $.deepEq(
                            value.extensions,
                            PerRecipientMessageTransferFields._default_value_for_extensions
                        )
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  3,
                                  () =>
                                      $._encodeSetOf<ExtensionField>(
                                          () => _encode_ExtensionField,
                                          $.BER
                                      ),
                                  $.BER
                              )(value.extensions, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_PerRecipientMessageTransferFields(
        value,
        elGetter
    );
}


/* eslint-enable */
