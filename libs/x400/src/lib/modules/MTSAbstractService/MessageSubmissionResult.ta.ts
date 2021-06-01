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
    MessageSubmissionIdentifier,
    _decode_MessageSubmissionIdentifier,
    _encode_MessageSubmissionIdentifier,
} from '../MTSAbstractService/MessageSubmissionIdentifier.ta';
export {
    MessageSubmissionIdentifier,
    _decode_MessageSubmissionIdentifier,
    _encode_MessageSubmissionIdentifier,
} from '../MTSAbstractService/MessageSubmissionIdentifier.ta';
import {
    MessageSubmissionTime,
    _decode_MessageSubmissionTime,
    _encode_MessageSubmissionTime,
} from '../MTSAbstractService/MessageSubmissionTime.ta';
export {
    MessageSubmissionTime,
    _decode_MessageSubmissionTime,
    _encode_MessageSubmissionTime,
} from '../MTSAbstractService/MessageSubmissionTime.ta';
import {
    ContentIdentifier,
    _decode_ContentIdentifier,
    _encode_ContentIdentifier,
} from '../MTSAbstractService/ContentIdentifier.ta';
export {
    ContentIdentifier,
    _decode_ContentIdentifier,
    _encode_ContentIdentifier,
} from '../MTSAbstractService/ContentIdentifier.ta';
import {
    ExtensionField,
    _decode_ExtensionField,
    _encode_ExtensionField,
} from '../MTSAbstractService/ExtensionField.ta';
export {
    ExtensionField,
    _decode_ExtensionField,
    _encode_ExtensionField,
} from '../MTSAbstractService/ExtensionField.ta';

/* START_OF_SYMBOL_DEFINITION MessageSubmissionResult */
/**
 * @summary MessageSubmissionResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MessageSubmissionResult ::= SET {
 *   message-submission-identifier  MessageSubmissionIdentifier,
 *   message-submission-time        [0]  MessageSubmissionTime,
 *   content-identifier             ContentIdentifier OPTIONAL,
 *   extensions
 *     [1]  SET OF ExtensionField{{MessageSubmissionResultExtensions}} DEFAULT {}
 * }
 * ```
 *
 * @class
 */
export class MessageSubmissionResult {
    constructor(
        /**
         * @summary `message_submission_identifier`.
         * @public
         * @readonly
         */
        readonly message_submission_identifier: MessageSubmissionIdentifier,
        /**
         * @summary `message_submission_time`.
         * @public
         * @readonly
         */
        readonly message_submission_time: MessageSubmissionTime,
        /**
         * @summary `content_identifier`.
         * @public
         * @readonly
         */
        readonly content_identifier: OPTIONAL<ContentIdentifier>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<ExtensionField[]>
    ) {}

    /**
     * @summary Restructures an object into a MessageSubmissionResult
     * @description
     *
     * This takes an `object` and converts it to a `MessageSubmissionResult`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MessageSubmissionResult`.
     * @returns {MessageSubmissionResult}
     */
    public static _from_object(
        _o: {
            [_K in keyof MessageSubmissionResult]: MessageSubmissionResult[_K];
        }
    ): MessageSubmissionResult {
        return new MessageSubmissionResult(
            _o.message_submission_identifier,
            _o.message_submission_time,
            _o.content_identifier,
            _o.extensions
        );
    }

    /**
     * @summary Getter that returns the default value for `extensions`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_extensions() {
        return [];
    }
}
/* END_OF_SYMBOL_DEFINITION MessageSubmissionResult */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_MessageSubmissionResult */
/**
 * @summary The Leading Root Component Types of MessageSubmissionResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_MessageSubmissionResult: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'message-submission-identifier',
        false,
        $.hasTag(_TagClass.application, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'message-submission-time',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'content-identifier',
        true,
        $.hasTag(_TagClass.application, 10),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'extensions',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_MessageSubmissionResult */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_MessageSubmissionResult */
/**
 * @summary The Trailing Root Component Types of MessageSubmissionResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_MessageSubmissionResult: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_MessageSubmissionResult */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_MessageSubmissionResult */
/**
 * @summary The Extension Addition Component Types of MessageSubmissionResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_MessageSubmissionResult: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_MessageSubmissionResult */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MessageSubmissionResult */
let _cached_decoder_for_MessageSubmissionResult: $.ASN1Decoder<MessageSubmissionResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MessageSubmissionResult */

/* START_OF_SYMBOL_DEFINITION _decode_MessageSubmissionResult */
/**
 * @summary Decodes an ASN.1 element into a(n) MessageSubmissionResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MessageSubmissionResult} The decoded data structure.
 */
export function _decode_MessageSubmissionResult(el: _Element) {
    if (!_cached_decoder_for_MessageSubmissionResult) {
        _cached_decoder_for_MessageSubmissionResult = function (
            el: _Element
        ): MessageSubmissionResult {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let message_submission_identifier!: MessageSubmissionIdentifier;
            let message_submission_time!: MessageSubmissionTime;
            let content_identifier: OPTIONAL<ContentIdentifier>;
            let extensions: OPTIONAL<ExtensionField[]> =
                MessageSubmissionResult._default_value_for_extensions;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'message-submission-identifier': (_el: _Element): void => {
                    message_submission_identifier = _decode_MessageSubmissionIdentifier(
                        _el
                    );
                },
                'message-submission-time': (_el: _Element): void => {
                    message_submission_time = $._decode_implicit<MessageSubmissionTime>(
                        () => _decode_MessageSubmissionTime
                    )(_el);
                },
                'content-identifier': (_el: _Element): void => {
                    content_identifier = _decode_ContentIdentifier(_el);
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
                _root_component_type_list_1_spec_for_MessageSubmissionResult,
                _extension_additions_list_spec_for_MessageSubmissionResult,
                _root_component_type_list_2_spec_for_MessageSubmissionResult,
                undefined
            );
            return new MessageSubmissionResult /* SET_CONSTRUCTOR_CALL */(
                message_submission_identifier,
                message_submission_time,
                content_identifier,
                extensions
            );
        };
    }
    return _cached_decoder_for_MessageSubmissionResult(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MessageSubmissionResult */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MessageSubmissionResult */
let _cached_encoder_for_MessageSubmissionResult: $.ASN1Encoder<MessageSubmissionResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MessageSubmissionResult */

/* START_OF_SYMBOL_DEFINITION _encode_MessageSubmissionResult */
/**
 * @summary Encodes a(n) MessageSubmissionResult into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MessageSubmissionResult, encoded as an ASN.1 Element.
 */
export function _encode_MessageSubmissionResult(
    value: MessageSubmissionResult,
    elGetter: $.ASN1Encoder<MessageSubmissionResult>
) {
    if (!_cached_encoder_for_MessageSubmissionResult) {
        _cached_encoder_for_MessageSubmissionResult = function (
            value: MessageSubmissionResult,
            elGetter: $.ASN1Encoder<MessageSubmissionResult>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_MessageSubmissionIdentifier(
                            value.message_submission_identifier,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => _encode_MessageSubmissionTime,
                            $.BER
                        )(value.message_submission_time, $.BER),
                        /* IF_ABSENT  */ value.content_identifier === undefined
                            ? undefined
                            : _encode_ContentIdentifier(
                                  value.content_identifier,
                                  $.BER
                              ),
                        /* IF_DEFAULT */ value.extensions === undefined ||
                        $.deepEq(
                            value.extensions,
                            MessageSubmissionResult._default_value_for_extensions
                        )
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
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
    return _cached_encoder_for_MessageSubmissionResult(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MessageSubmissionResult */

/* eslint-enable */
