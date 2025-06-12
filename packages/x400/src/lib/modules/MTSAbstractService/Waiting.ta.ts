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
    Operations,
    Operations_probe_submission_or_report_delivery /* IMPORTED_LONG_NAMED_BIT */,
    probe_submission_or_report_delivery /* IMPORTED_SHORT_NAMED_BIT */,
    Operations_message_submission_or_message_delivery /* IMPORTED_LONG_NAMED_BIT */,
    message_submission_or_message_delivery /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_Operations,
    _encode_Operations,
} from '../MTSAbstractService/Operations.ta.js';
export {
    Operations,
    Operations_probe_submission_or_report_delivery /* IMPORTED_LONG_NAMED_BIT */,
    probe_submission_or_report_delivery /* IMPORTED_SHORT_NAMED_BIT */,
    Operations_message_submission_or_message_delivery /* IMPORTED_LONG_NAMED_BIT */,
    message_submission_or_message_delivery /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_Operations,
    _encode_Operations,
} from '../MTSAbstractService/Operations.ta.js';
import {
    WaitingMessages,
    WaitingMessages_long_content /* IMPORTED_LONG_NAMED_BIT */,
    long_content /* IMPORTED_SHORT_NAMED_BIT */,
    WaitingMessages_low_priority /* IMPORTED_LONG_NAMED_BIT */,
    low_priority /* IMPORTED_SHORT_NAMED_BIT */,
    WaitingMessages_other_security_labels /* IMPORTED_LONG_NAMED_BIT */,
    other_security_labels /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_WaitingMessages,
    _encode_WaitingMessages,
} from '../MTSAbstractService/WaitingMessages.ta.js';
export {
    WaitingMessages,
    WaitingMessages_long_content /* IMPORTED_LONG_NAMED_BIT */,
    long_content /* IMPORTED_SHORT_NAMED_BIT */,
    WaitingMessages_low_priority /* IMPORTED_LONG_NAMED_BIT */,
    low_priority /* IMPORTED_SHORT_NAMED_BIT */,
    WaitingMessages_other_security_labels /* IMPORTED_LONG_NAMED_BIT */,
    other_security_labels /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_WaitingMessages,
    _encode_WaitingMessages,
} from '../MTSAbstractService/WaitingMessages.ta.js';
import {
    ContentType,
    _decode_ContentType,
    _encode_ContentType,
} from '../MTSAbstractService/ContentType.ta.js';
export {
    ContentType,
    _decode_ContentType,
    _encode_ContentType,
} from '../MTSAbstractService/ContentType.ta.js';
import {
    EncodedInformationTypes,
    _decode_EncodedInformationTypes,
    _encode_EncodedInformationTypes,
} from '../MTSAbstractService/EncodedInformationTypes.ta.js';
export {
    EncodedInformationTypes,
    _decode_EncodedInformationTypes,
    _encode_EncodedInformationTypes,
} from '../MTSAbstractService/EncodedInformationTypes.ta.js';

/* START_OF_SYMBOL_DEFINITION Waiting */
/**
 * @summary Waiting
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Waiting ::= SET {
 *   waiting-operations                 [0]  Operations DEFAULT {},
 *   waiting-messages                   [1]  WaitingMessages DEFAULT {},
 *   waiting-content-types
 *     [2]  SET SIZE (0..ub-content-types) OF ContentType DEFAULT {},
 *   waiting-encoded-information-types  EncodedInformationTypes OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class Waiting {
    constructor(
        /**
         * @summary `waiting_operations`.
         * @public
         * @readonly
         */
        readonly waiting_operations: OPTIONAL<Operations>,
        /**
         * @summary `waiting_messages`.
         * @public
         * @readonly
         */
        readonly waiting_messages: OPTIONAL<WaitingMessages>,
        /**
         * @summary `waiting_content_types`.
         * @public
         * @readonly
         */
        readonly waiting_content_types: OPTIONAL<ContentType[]>,
        /**
         * @summary `waiting_encoded_information_types`.
         * @public
         * @readonly
         */
        readonly waiting_encoded_information_types: OPTIONAL<EncodedInformationTypes>
    ) {}

    /**
     * @summary Restructures an object into a Waiting
     * @description
     *
     * This takes an `object` and converts it to a `Waiting`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Waiting`.
     * @returns {Waiting}
     */
    public static _from_object(
        _o: { [_K in keyof Waiting]: Waiting[_K] }
    ): Waiting {
        return new Waiting(
            _o.waiting_operations,
            _o.waiting_messages,
            _o.waiting_content_types,
            _o.waiting_encoded_information_types
        );
    }

    /**
     * @summary Getter that returns the default value for `waiting_operations`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_waiting_operations() {
        return new Uint8ClampedArray([]);
    }
    /**
     * @summary Getter that returns the default value for `waiting_messages`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_waiting_messages() {
        return new Uint8ClampedArray([]);
    }
    /**
     * @summary Getter that returns the default value for `waiting_content_types`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_waiting_content_types() {
        return [];
    }
}
/* END_OF_SYMBOL_DEFINITION Waiting */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Waiting */
/**
 * @summary The Leading Root Component Types of Waiting
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Waiting: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'waiting-operations',
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'waiting-messages',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'waiting-content-types',
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'waiting-encoded-information-types',
        true,
        $.hasTag(_TagClass.application, 5),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Waiting */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Waiting */
/**
 * @summary The Trailing Root Component Types of Waiting
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Waiting: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Waiting */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Waiting */
/**
 * @summary The Extension Addition Component Types of Waiting
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Waiting: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Waiting */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Waiting */
let _cached_decoder_for_Waiting: $.ASN1Decoder<Waiting> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Waiting */

/* START_OF_SYMBOL_DEFINITION _decode_Waiting */
/**
 * @summary Decodes an ASN.1 element into a(n) Waiting
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Waiting} The decoded data structure.
 */
export function _decode_Waiting(el: _Element) {
    if (!_cached_decoder_for_Waiting) {
        _cached_decoder_for_Waiting = function (el: _Element): Waiting {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let waiting_operations: OPTIONAL<Operations> =
                Waiting._default_value_for_waiting_operations;
            let waiting_messages: OPTIONAL<WaitingMessages> =
                Waiting._default_value_for_waiting_messages;
            let waiting_content_types: OPTIONAL<ContentType[]> =
                Waiting._default_value_for_waiting_content_types;
            let waiting_encoded_information_types: OPTIONAL<EncodedInformationTypes>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'waiting-operations': (_el: _Element): void => {
                    waiting_operations = $._decode_implicit<Operations>(
                        () => _decode_Operations
                    )(_el);
                },
                'waiting-messages': (_el: _Element): void => {
                    waiting_messages = $._decode_implicit<WaitingMessages>(
                        () => _decode_WaitingMessages
                    )(_el);
                },
                'waiting-content-types': (_el: _Element): void => {
                    waiting_content_types = $._decode_implicit<ContentType[]>(
                        () =>
                            $._decodeSetOf<ContentType>(
                                () => _decode_ContentType
                            )
                    )(_el);
                },
                'waiting-encoded-information-types': (_el: _Element): void => {
                    waiting_encoded_information_types = _decode_EncodedInformationTypes(
                        _el
                    );
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_Waiting,
                _extension_additions_list_spec_for_Waiting,
                _root_component_type_list_2_spec_for_Waiting,
                undefined
            );
            return new Waiting /* SET_CONSTRUCTOR_CALL */(
                waiting_operations,
                waiting_messages,
                waiting_content_types,
                waiting_encoded_information_types
            );
        };
    }
    return _cached_decoder_for_Waiting(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Waiting */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Waiting */
let _cached_encoder_for_Waiting: $.ASN1Encoder<Waiting> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Waiting */

/* START_OF_SYMBOL_DEFINITION _encode_Waiting */
/**
 * @summary Encodes a(n) Waiting into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Waiting, encoded as an ASN.1 Element.
 */
export function _encode_Waiting(
    value: Waiting,
    elGetter: $.ASN1Encoder<Waiting>
) {
    if (!_cached_encoder_for_Waiting) {
        _cached_encoder_for_Waiting = function (
            value: Waiting,
            elGetter: $.ASN1Encoder<Waiting>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_DEFAULT */ value.waiting_operations ===
                            undefined ||
                        $.deepEq(
                            value.waiting_operations,
                            Waiting._default_value_for_waiting_operations
                        )
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_Operations,
                                  $.BER
                              )(value.waiting_operations, $.BER),
                        /* IF_DEFAULT */ value.waiting_messages === undefined ||
                        $.deepEq(
                            value.waiting_messages,
                            Waiting._default_value_for_waiting_messages
                        )
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_WaitingMessages,
                                  $.BER
                              )(value.waiting_messages, $.BER),
                        /* IF_DEFAULT */ value.waiting_content_types ===
                            undefined ||
                        $.deepEq(
                            value.waiting_content_types,
                            Waiting._default_value_for_waiting_content_types
                        )
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () =>
                                      $._encodeSetOf<ContentType>(
                                          () => _encode_ContentType,
                                          $.BER
                                      ),
                                  $.BER
                              )(value.waiting_content_types, $.BER),
                        /* IF_ABSENT  */ value.waiting_encoded_information_types ===
                        undefined
                            ? undefined
                            : _encode_EncodedInformationTypes(
                                  value.waiting_encoded_information_types,
                                  $.BER
                              ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_Waiting(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Waiting */

/* eslint-enable */
