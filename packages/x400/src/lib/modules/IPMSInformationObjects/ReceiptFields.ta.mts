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
    ReceiptTimeField,
    _decode_ReceiptTimeField,
    _encode_ReceiptTimeField,
} from '../IPMSInformationObjects/ReceiptTimeField.ta.mjs';
import {
    AcknowledgmentModeField,
    _enum_for_AcknowledgmentModeField,
    AcknowledgmentModeField_manual /* IMPORTED_LONG_ENUMERATION_ITEM */,
    _decode_AcknowledgmentModeField,
    _encode_AcknowledgmentModeField,
} from '../IPMSInformationObjects/AcknowledgmentModeField.ta.mjs';
import {
    SupplReceiptInfoField,
    _decode_SupplReceiptInfoField,
    _encode_SupplReceiptInfoField,
} from '../IPMSInformationObjects/SupplReceiptInfoField.ta.mjs';
import {
    RNExtensionsField,
    _decode_RNExtensionsField,
    _encode_RNExtensionsField,
} from '../IPMSInformationObjects/RNExtensionsField.ta.mjs';
/**
 * @summary ReceiptFields
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReceiptFields ::= SET {
 *   receipt-time         [0]  ReceiptTimeField,
 *   acknowledgment-mode  [1]  AcknowledgmentModeField DEFAULT manual,
 *   suppl-receipt-info   [2]  SupplReceiptInfoField OPTIONAL,
 *   rn-extensions        [3]  RNExtensionsField OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class ReceiptFields {
    constructor(
        /**
         * @summary `receipt_time`.
         * @public
         * @readonly
         */
        readonly receipt_time: ReceiptTimeField,
        /**
         * @summary `acknowledgment_mode`.
         * @public
         * @readonly
         */
        readonly acknowledgment_mode: OPTIONAL<AcknowledgmentModeField>,
        /**
         * @summary `suppl_receipt_info`.
         * @public
         * @readonly
         */
        readonly suppl_receipt_info: OPTIONAL<SupplReceiptInfoField>,
        /**
         * @summary `rn_extensions`.
         * @public
         * @readonly
         */
        readonly rn_extensions: OPTIONAL<RNExtensionsField>
    ) {}

    /**
     * @summary Restructures an object into a ReceiptFields
     * @description
     *
     * This takes an `object` and converts it to a `ReceiptFields`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ReceiptFields`.
     * @returns {ReceiptFields}
     */
    public static _from_object(
        _o: { [_K in keyof ReceiptFields]: ReceiptFields[_K] }
    ): ReceiptFields {
        return new ReceiptFields(
            _o.receipt_time,
            _o.acknowledgment_mode,
            _o.suppl_receipt_info,
            _o.rn_extensions
        );
    }

    /**
     * @summary Getter that returns the default value for `acknowledgment_mode`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_acknowledgment_mode() {
        return AcknowledgmentModeField_manual;
    }
    /**
     * @summary The enum used as the type of the component `acknowledgment_mode`
     * @public
     * @static
     */

    public static _enum_for_acknowledgment_mode = _enum_for_AcknowledgmentModeField;
}

/**
 * @summary The Leading Root Component Types of ReceiptFields
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ReceiptFields: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'receipt-time',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'acknowledgment-mode',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'suppl-receipt-info',
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'rn-extensions',
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
];

/**
 * @summary The Trailing Root Component Types of ReceiptFields
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ReceiptFields: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of ReceiptFields
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ReceiptFields: $.ComponentSpec[] = [];

let _cached_decoder_for_ReceiptFields: $.ASN1Decoder<ReceiptFields> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReceiptFields
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReceiptFields} The decoded data structure.
 */
export function _decode_ReceiptFields(el: _Element) {
    if (!_cached_decoder_for_ReceiptFields) {
        _cached_decoder_for_ReceiptFields = function (
            el: _Element
        ): ReceiptFields {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let receipt_time!: ReceiptTimeField;
            let acknowledgment_mode: OPTIONAL<AcknowledgmentModeField> =
                ReceiptFields._default_value_for_acknowledgment_mode;
            let suppl_receipt_info: OPTIONAL<SupplReceiptInfoField>;
            let rn_extensions: OPTIONAL<RNExtensionsField>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'receipt-time': (_el: _Element): void => {
                    receipt_time = $._decode_implicit<ReceiptTimeField>(
                        () => _decode_ReceiptTimeField
                    )(_el);
                },
                'acknowledgment-mode': (_el: _Element): void => {
                    acknowledgment_mode = $._decode_implicit<AcknowledgmentModeField>(
                        () => _decode_AcknowledgmentModeField
                    )(_el);
                },
                'suppl-receipt-info': (_el: _Element): void => {
                    suppl_receipt_info = $._decode_implicit<SupplReceiptInfoField>(
                        () => _decode_SupplReceiptInfoField
                    )(_el);
                },
                'rn-extensions': (_el: _Element): void => {
                    rn_extensions = $._decode_implicit<RNExtensionsField>(
                        () => _decode_RNExtensionsField
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ReceiptFields,
                _extension_additions_list_spec_for_ReceiptFields,
                _root_component_type_list_2_spec_for_ReceiptFields,
                undefined
            );
            return new ReceiptFields /* SET_CONSTRUCTOR_CALL */(
                receipt_time,
                acknowledgment_mode,
                suppl_receipt_info,
                rn_extensions
            );
        };
    }
    return _cached_decoder_for_ReceiptFields(el);
}

let _cached_encoder_for_ReceiptFields: $.ASN1Encoder<ReceiptFields> | null = null;

/**
 * @summary Encodes a(n) ReceiptFields into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReceiptFields, encoded as an ASN.1 Element.
 */
export function _encode_ReceiptFields(
    value: ReceiptFields,
    elGetter: $.ASN1Encoder<ReceiptFields>
) {
    if (!_cached_encoder_for_ReceiptFields) {
        _cached_encoder_for_ReceiptFields = function (
            value: ReceiptFields        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => _encode_ReceiptTimeField,
                            $.BER
                        )(value.receipt_time, $.BER),
                        /* IF_DEFAULT */ value.acknowledgment_mode ===
                            undefined ||
                        $.deepEq(
                            value.acknowledgment_mode,
                            ReceiptFields._default_value_for_acknowledgment_mode
                        )
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_AcknowledgmentModeField,
                                  $.BER
                              )(value.acknowledgment_mode, $.BER),
                        /* IF_ABSENT  */ value.suppl_receipt_info === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_SupplReceiptInfoField,
                                  $.BER
                              )(value.suppl_receipt_info, $.BER),
                        /* IF_ABSENT  */ value.rn_extensions === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  3,
                                  () => _encode_RNExtensionsField,
                                  $.BER
                              )(value.rn_extensions, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ReceiptFields(value, elGetter);
}


/* eslint-enable */
