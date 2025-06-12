/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
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
    SupplReceiptInfoField,
    _decode_SupplReceiptInfoField,
    _encode_SupplReceiptInfoField,
} from '../IPMSInformationObjects/SupplReceiptInfoField.ta.mjs';
export {
    SupplReceiptInfoField,
    _decode_SupplReceiptInfoField,
    _encode_SupplReceiptInfoField,
} from '../IPMSInformationObjects/SupplReceiptInfoField.ta.mjs';
import {
    MSSubmissionOptions,
    _decode_MSSubmissionOptions,
    _encode_MSSubmissionOptions,
} from '../MSAbstractService/MSSubmissionOptions.ta.mjs';
export {
    MSSubmissionOptions,
    _decode_MSSubmissionOptions,
    _encode_MSSubmissionOptions,
} from '../MSAbstractService/MSSubmissionOptions.ta.mjs';

/* START_OF_SYMBOL_DEFINITION IPMAutoAcknowledgementRegistrationParameter */
/**
 * @summary IPMAutoAcknowledgementRegistrationParameter
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IPMAutoAcknowledgementRegistrationParameter ::= SET {
 *   auto-acknowledge-suppl-receipt-info  [0]  SupplReceiptInfoField OPTIONAL,
 *   submission-options                   [1]  MSSubmissionOptions OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class IPMAutoAcknowledgementRegistrationParameter {
    constructor(
        /**
         * @summary `auto_acknowledge_suppl_receipt_info`.
         * @public
         * @readonly
         */
        readonly auto_acknowledge_suppl_receipt_info: OPTIONAL<SupplReceiptInfoField>,
        /**
         * @summary `submission_options`.
         * @public
         * @readonly
         */
        readonly submission_options: OPTIONAL<MSSubmissionOptions>
    ) {}

    /**
     * @summary Restructures an object into a IPMAutoAcknowledgementRegistrationParameter
     * @description
     *
     * This takes an `object` and converts it to a `IPMAutoAcknowledgementRegistrationParameter`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IPMAutoAcknowledgementRegistrationParameter`.
     * @returns {IPMAutoAcknowledgementRegistrationParameter}
     */
    public static _from_object(
        _o: {
            [_K in keyof IPMAutoAcknowledgementRegistrationParameter]: IPMAutoAcknowledgementRegistrationParameter[_K];
        }
    ): IPMAutoAcknowledgementRegistrationParameter {
        return new IPMAutoAcknowledgementRegistrationParameter(
            _o.auto_acknowledge_suppl_receipt_info,
            _o.submission_options
        );
    }
}
/* END_OF_SYMBOL_DEFINITION IPMAutoAcknowledgementRegistrationParameter */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_IPMAutoAcknowledgementRegistrationParameter */
/**
 * @summary The Leading Root Component Types of IPMAutoAcknowledgementRegistrationParameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_IPMAutoAcknowledgementRegistrationParameter: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'auto-acknowledge-suppl-receipt-info',
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'submission-options',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_IPMAutoAcknowledgementRegistrationParameter */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_IPMAutoAcknowledgementRegistrationParameter */
/**
 * @summary The Trailing Root Component Types of IPMAutoAcknowledgementRegistrationParameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_IPMAutoAcknowledgementRegistrationParameter: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_IPMAutoAcknowledgementRegistrationParameter */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_IPMAutoAcknowledgementRegistrationParameter */
/**
 * @summary The Extension Addition Component Types of IPMAutoAcknowledgementRegistrationParameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_IPMAutoAcknowledgementRegistrationParameter: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_IPMAutoAcknowledgementRegistrationParameter */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_IPMAutoAcknowledgementRegistrationParameter */
let _cached_decoder_for_IPMAutoAcknowledgementRegistrationParameter: $.ASN1Decoder<IPMAutoAcknowledgementRegistrationParameter> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_IPMAutoAcknowledgementRegistrationParameter */

/* START_OF_SYMBOL_DEFINITION _decode_IPMAutoAcknowledgementRegistrationParameter */
/**
 * @summary Decodes an ASN.1 element into a(n) IPMAutoAcknowledgementRegistrationParameter
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IPMAutoAcknowledgementRegistrationParameter} The decoded data structure.
 */
export function _decode_IPMAutoAcknowledgementRegistrationParameter(
    el: _Element
) {
    if (!_cached_decoder_for_IPMAutoAcknowledgementRegistrationParameter) {
        _cached_decoder_for_IPMAutoAcknowledgementRegistrationParameter = function (
            el: _Element
        ): IPMAutoAcknowledgementRegistrationParameter {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let auto_acknowledge_suppl_receipt_info: OPTIONAL<SupplReceiptInfoField>;
            let submission_options: OPTIONAL<MSSubmissionOptions>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'auto-acknowledge-suppl-receipt-info': (
                    _el: _Element
                ): void => {
                    auto_acknowledge_suppl_receipt_info = $._decode_explicit<SupplReceiptInfoField>(
                        () => _decode_SupplReceiptInfoField
                    )(_el);
                },
                'submission-options': (_el: _Element): void => {
                    submission_options = $._decode_explicit<MSSubmissionOptions>(
                        () => _decode_MSSubmissionOptions
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_IPMAutoAcknowledgementRegistrationParameter,
                _extension_additions_list_spec_for_IPMAutoAcknowledgementRegistrationParameter,
                _root_component_type_list_2_spec_for_IPMAutoAcknowledgementRegistrationParameter,
                undefined
            );
            return new IPMAutoAcknowledgementRegistrationParameter /* SET_CONSTRUCTOR_CALL */(
                auto_acknowledge_suppl_receipt_info,
                submission_options
            );
        };
    }
    return _cached_decoder_for_IPMAutoAcknowledgementRegistrationParameter(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_IPMAutoAcknowledgementRegistrationParameter */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_IPMAutoAcknowledgementRegistrationParameter */
let _cached_encoder_for_IPMAutoAcknowledgementRegistrationParameter: $.ASN1Encoder<IPMAutoAcknowledgementRegistrationParameter> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_IPMAutoAcknowledgementRegistrationParameter */

/* START_OF_SYMBOL_DEFINITION _encode_IPMAutoAcknowledgementRegistrationParameter */
/**
 * @summary Encodes a(n) IPMAutoAcknowledgementRegistrationParameter into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IPMAutoAcknowledgementRegistrationParameter, encoded as an ASN.1 Element.
 */
export function _encode_IPMAutoAcknowledgementRegistrationParameter(
    value: IPMAutoAcknowledgementRegistrationParameter,
    elGetter: $.ASN1Encoder<IPMAutoAcknowledgementRegistrationParameter>
) {
    if (!_cached_encoder_for_IPMAutoAcknowledgementRegistrationParameter) {
        _cached_encoder_for_IPMAutoAcknowledgementRegistrationParameter = function (
            value: IPMAutoAcknowledgementRegistrationParameter,
            elGetter: $.ASN1Encoder<IPMAutoAcknowledgementRegistrationParameter>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.auto_acknowledge_suppl_receipt_info ===
                        undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_SupplReceiptInfoField,
                                  $.BER
                              )(
                                  value.auto_acknowledge_suppl_receipt_info,
                                  $.BER
                              ),
                        /* IF_ABSENT  */ value.submission_options === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_MSSubmissionOptions,
                                  $.BER
                              )(value.submission_options, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_IPMAutoAcknowledgementRegistrationParameter(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_IPMAutoAcknowledgementRegistrationParameter */

/* eslint-enable */
