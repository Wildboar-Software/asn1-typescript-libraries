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
import * as $ from 'asn1-ts/dist/node/functional';
import {
    Filter,
    _decode_Filter,
    _encode_Filter,
} from '../MSAbstractService/Filter.ta';
export {
    Filter,
    _decode_Filter,
    _encode_Filter,
} from '../MSAbstractService/Filter.ta';
import {
    MessageSubmissionEnvelope,
    _decode_MessageSubmissionEnvelope,
    _encode_MessageSubmissionEnvelope,
} from '../MTSAbstractService/MessageSubmissionEnvelope.ta';
export {
    MessageSubmissionEnvelope,
    _decode_MessageSubmissionEnvelope,
    _encode_MessageSubmissionEnvelope,
} from '../MTSAbstractService/MessageSubmissionEnvelope.ta';
import {
    Heading,
    _decode_Heading,
    _encode_Heading,
} from '../IPMSInformationObjects/Heading.ta';
export {
    Heading,
    _decode_Heading,
    _encode_Heading,
} from '../IPMSInformationObjects/Heading.ta';
import {
    BodyPart,
    _decode_BodyPart,
    _encode_BodyPart,
} from '../IPMSInformationObjects/BodyPart.ta';
export {
    BodyPart,
    _decode_BodyPart,
    _encode_BodyPart,
} from '../IPMSInformationObjects/BodyPart.ta';
import {
    MSSubmissionOptions,
    _decode_MSSubmissionOptions,
    _encode_MSSubmissionOptions,
} from '../MSAbstractService/MSSubmissionOptions.ta';
export {
    MSSubmissionOptions,
    _decode_MSSubmissionOptions,
    _encode_MSSubmissionOptions,
} from '../MSAbstractService/MSSubmissionOptions.ta';
import {
    AutoForwardComment,
    _decode_AutoForwardComment,
    _encode_AutoForwardComment,
} from '../IPMSInformationObjects/AutoForwardComment.ta';
export {
    AutoForwardComment,
    _decode_AutoForwardComment,
    _encode_AutoForwardComment,
} from '../IPMSInformationObjects/AutoForwardComment.ta';
import {
    IPMAutoForwardOptions,
    IPMAutoForwardOptions_forward_all_object_types /* IMPORTED_LONG_NAMED_BIT */,
    forward_all_object_types /* IMPORTED_SHORT_NAMED_BIT */,
    IPMAutoForwardOptions_include_returned_content /* IMPORTED_LONG_NAMED_BIT */,
    include_returned_content /* IMPORTED_SHORT_NAMED_BIT */,
    IPMAutoForwardOptions_include_returned_ipm /* IMPORTED_LONG_NAMED_BIT */,
    include_returned_ipm /* IMPORTED_SHORT_NAMED_BIT */,
    IPMAutoForwardOptions_forwarded_content_prohibited /* IMPORTED_LONG_NAMED_BIT */,
    forwarded_content_prohibited /* IMPORTED_SHORT_NAMED_BIT */,
    IPMAutoForwardOptions_preserve_retrieval_status /* IMPORTED_LONG_NAMED_BIT */,
    preserve_retrieval_status /* IMPORTED_SHORT_NAMED_BIT */,
    IPMAutoForwardOptions_delete_delivered_object /* IMPORTED_LONG_NAMED_BIT */,
    delete_delivered_object /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_IPMAutoForwardOptions,
    _encode_IPMAutoForwardOptions,
} from '../IPMSAutoActionTypes/IPMAutoForwardOptions.ta';
export {
    IPMAutoForwardOptions,
    IPMAutoForwardOptions_forward_all_object_types /* IMPORTED_LONG_NAMED_BIT */,
    forward_all_object_types /* IMPORTED_SHORT_NAMED_BIT */,
    IPMAutoForwardOptions_include_returned_content /* IMPORTED_LONG_NAMED_BIT */,
    include_returned_content /* IMPORTED_SHORT_NAMED_BIT */,
    IPMAutoForwardOptions_include_returned_ipm /* IMPORTED_LONG_NAMED_BIT */,
    include_returned_ipm /* IMPORTED_SHORT_NAMED_BIT */,
    IPMAutoForwardOptions_forwarded_content_prohibited /* IMPORTED_LONG_NAMED_BIT */,
    forwarded_content_prohibited /* IMPORTED_SHORT_NAMED_BIT */,
    IPMAutoForwardOptions_preserve_retrieval_status /* IMPORTED_LONG_NAMED_BIT */,
    preserve_retrieval_status /* IMPORTED_SHORT_NAMED_BIT */,
    IPMAutoForwardOptions_delete_delivered_object /* IMPORTED_LONG_NAMED_BIT */,
    delete_delivered_object /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_IPMAutoForwardOptions,
    _encode_IPMAutoForwardOptions,
} from '../IPMSAutoActionTypes/IPMAutoForwardOptions.ta';

/* START_OF_SYMBOL_DEFINITION IPMAutoForwardRegistrationParameter */
/**
 * @summary IPMAutoForwardRegistrationParameter
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IPMAutoForwardRegistrationParameter ::= SEQUENCE {
 *   filter                    [0]  Filter OPTIONAL,
 *   forwarding-envelope       [1]  MessageSubmissionEnvelope,
 *   forwarding-heading        [2]  Heading,
 *   forwarding-cover-note     [3]  BodyPart OPTIONAL,
 *   submission-options        [4]  MSSubmissionOptions OPTIONAL,
 *   nrn-comment               [5]  AutoForwardComment OPTIONAL,
 *   ipm-auto-forward-options  [6]  IPMAutoForwardOptions DEFAULT {}
 * }
 * ```
 *
 * @class
 */
export class IPMAutoForwardRegistrationParameter {
    constructor(
        /**
         * @summary `filter`.
         * @public
         * @readonly
         */
        readonly filter: OPTIONAL<Filter>,
        /**
         * @summary `forwarding_envelope`.
         * @public
         * @readonly
         */
        readonly forwarding_envelope: MessageSubmissionEnvelope,
        /**
         * @summary `forwarding_heading`.
         * @public
         * @readonly
         */
        readonly forwarding_heading: Heading,
        /**
         * @summary `forwarding_cover_note`.
         * @public
         * @readonly
         */
        readonly forwarding_cover_note: OPTIONAL<BodyPart>,
        /**
         * @summary `submission_options`.
         * @public
         * @readonly
         */
        readonly submission_options: OPTIONAL<MSSubmissionOptions>,
        /**
         * @summary `nrn_comment`.
         * @public
         * @readonly
         */
        readonly nrn_comment: OPTIONAL<AutoForwardComment>,
        /**
         * @summary `ipm_auto_forward_options`.
         * @public
         * @readonly
         */
        readonly ipm_auto_forward_options: OPTIONAL<IPMAutoForwardOptions>
    ) {}

    /**
     * @summary Restructures an object into a IPMAutoForwardRegistrationParameter
     * @description
     *
     * This takes an `object` and converts it to a `IPMAutoForwardRegistrationParameter`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IPMAutoForwardRegistrationParameter`.
     * @returns {IPMAutoForwardRegistrationParameter}
     */
    public static _from_object(
        _o: {
            [_K in keyof IPMAutoForwardRegistrationParameter]: IPMAutoForwardRegistrationParameter[_K];
        }
    ): IPMAutoForwardRegistrationParameter {
        return new IPMAutoForwardRegistrationParameter(
            _o.filter,
            _o.forwarding_envelope,
            _o.forwarding_heading,
            _o.forwarding_cover_note,
            _o.submission_options,
            _o.nrn_comment,
            _o.ipm_auto_forward_options
        );
    }

    /**
     * @summary Getter that returns the default value for `ipm_auto_forward_options`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_ipm_auto_forward_options() {
        return new Uint8ClampedArray([]);
    }
}
/* END_OF_SYMBOL_DEFINITION IPMAutoForwardRegistrationParameter */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_IPMAutoForwardRegistrationParameter */
/**
 * @summary The Leading Root Component Types of IPMAutoForwardRegistrationParameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_IPMAutoForwardRegistrationParameter: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'filter',
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'forwarding-envelope',
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'forwarding-heading',
        false,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'forwarding-cover-note',
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'submission-options',
        true,
        $.hasTag(_TagClass.context, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'nrn-comment',
        true,
        $.hasTag(_TagClass.context, 5),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'ipm-auto-forward-options',
        true,
        $.hasTag(_TagClass.context, 6),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_IPMAutoForwardRegistrationParameter */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_IPMAutoForwardRegistrationParameter */
/**
 * @summary The Trailing Root Component Types of IPMAutoForwardRegistrationParameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_IPMAutoForwardRegistrationParameter: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_IPMAutoForwardRegistrationParameter */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_IPMAutoForwardRegistrationParameter */
/**
 * @summary The Extension Addition Component Types of IPMAutoForwardRegistrationParameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_IPMAutoForwardRegistrationParameter: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_IPMAutoForwardRegistrationParameter */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_IPMAutoForwardRegistrationParameter */
let _cached_decoder_for_IPMAutoForwardRegistrationParameter: $.ASN1Decoder<IPMAutoForwardRegistrationParameter> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_IPMAutoForwardRegistrationParameter */

/* START_OF_SYMBOL_DEFINITION _decode_IPMAutoForwardRegistrationParameter */
/**
 * @summary Decodes an ASN.1 element into a(n) IPMAutoForwardRegistrationParameter
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IPMAutoForwardRegistrationParameter} The decoded data structure.
 */
export function _decode_IPMAutoForwardRegistrationParameter(el: _Element) {
    if (!_cached_decoder_for_IPMAutoForwardRegistrationParameter) {
        _cached_decoder_for_IPMAutoForwardRegistrationParameter = function (
            el: _Element
        ): IPMAutoForwardRegistrationParameter {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let filter: OPTIONAL<Filter>;
            let forwarding_envelope!: MessageSubmissionEnvelope;
            let forwarding_heading!: Heading;
            let forwarding_cover_note: OPTIONAL<BodyPart>;
            let submission_options: OPTIONAL<MSSubmissionOptions>;
            let nrn_comment: OPTIONAL<AutoForwardComment>;
            let ipm_auto_forward_options: OPTIONAL<IPMAutoForwardOptions> =
                IPMAutoForwardRegistrationParameter._default_value_for_ipm_auto_forward_options;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                filter: (_el: _Element): void => {
                    filter = $._decode_explicit<Filter>(() => _decode_Filter)(
                        _el
                    );
                },
                'forwarding-envelope': (_el: _Element): void => {
                    forwarding_envelope = $._decode_explicit<MessageSubmissionEnvelope>(
                        () => _decode_MessageSubmissionEnvelope
                    )(_el);
                },
                'forwarding-heading': (_el: _Element): void => {
                    forwarding_heading = $._decode_explicit<Heading>(
                        () => _decode_Heading
                    )(_el);
                },
                'forwarding-cover-note': (_el: _Element): void => {
                    forwarding_cover_note = $._decode_explicit<BodyPart>(
                        () => _decode_BodyPart
                    )(_el);
                },
                'submission-options': (_el: _Element): void => {
                    submission_options = $._decode_explicit<MSSubmissionOptions>(
                        () => _decode_MSSubmissionOptions
                    )(_el);
                },
                'nrn-comment': (_el: _Element): void => {
                    nrn_comment = $._decode_explicit<AutoForwardComment>(
                        () => _decode_AutoForwardComment
                    )(_el);
                },
                'ipm-auto-forward-options': (_el: _Element): void => {
                    ipm_auto_forward_options = $._decode_explicit<IPMAutoForwardOptions>(
                        () => _decode_IPMAutoForwardOptions
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_IPMAutoForwardRegistrationParameter,
                _extension_additions_list_spec_for_IPMAutoForwardRegistrationParameter,
                _root_component_type_list_2_spec_for_IPMAutoForwardRegistrationParameter,
                undefined
            );
            return new IPMAutoForwardRegistrationParameter /* SEQUENCE_CONSTRUCTOR_CALL */(
                filter,
                forwarding_envelope,
                forwarding_heading,
                forwarding_cover_note,
                submission_options,
                nrn_comment,
                ipm_auto_forward_options
            );
        };
    }
    return _cached_decoder_for_IPMAutoForwardRegistrationParameter(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_IPMAutoForwardRegistrationParameter */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_IPMAutoForwardRegistrationParameter */
let _cached_encoder_for_IPMAutoForwardRegistrationParameter: $.ASN1Encoder<IPMAutoForwardRegistrationParameter> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_IPMAutoForwardRegistrationParameter */

/* START_OF_SYMBOL_DEFINITION _encode_IPMAutoForwardRegistrationParameter */
/**
 * @summary Encodes a(n) IPMAutoForwardRegistrationParameter into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IPMAutoForwardRegistrationParameter, encoded as an ASN.1 Element.
 */
export function _encode_IPMAutoForwardRegistrationParameter(
    value: IPMAutoForwardRegistrationParameter,
    elGetter: $.ASN1Encoder<IPMAutoForwardRegistrationParameter>
) {
    if (!_cached_encoder_for_IPMAutoForwardRegistrationParameter) {
        _cached_encoder_for_IPMAutoForwardRegistrationParameter = function (
            value: IPMAutoForwardRegistrationParameter,
            elGetter: $.ASN1Encoder<IPMAutoForwardRegistrationParameter>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.filter === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_Filter,
                                  $.BER
                              )(value.filter, $.BER),
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            1,
                            () => _encode_MessageSubmissionEnvelope,
                            $.BER
                        )(value.forwarding_envelope, $.BER),
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            2,
                            () => _encode_Heading,
                            $.BER
                        )(value.forwarding_heading, $.BER),
                        /* IF_ABSENT  */ value.forwarding_cover_note ===
                        undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  3,
                                  () => _encode_BodyPart,
                                  $.BER
                              )(value.forwarding_cover_note, $.BER),
                        /* IF_ABSENT  */ value.submission_options === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  4,
                                  () => _encode_MSSubmissionOptions,
                                  $.BER
                              )(value.submission_options, $.BER),
                        /* IF_ABSENT  */ value.nrn_comment === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  5,
                                  () => _encode_AutoForwardComment,
                                  $.BER
                              )(value.nrn_comment, $.BER),
                        /* IF_DEFAULT */ value.ipm_auto_forward_options ===
                            undefined ||
                        $.deepEq(
                            value.ipm_auto_forward_options,
                            IPMAutoForwardRegistrationParameter._default_value_for_ipm_auto_forward_options
                        )
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  6,
                                  () => _encode_IPMAutoForwardOptions,
                                  $.BER
                              )(value.ipm_auto_forward_options, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_IPMAutoForwardRegistrationParameter(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_IPMAutoForwardRegistrationParameter */

/* eslint-enable */
