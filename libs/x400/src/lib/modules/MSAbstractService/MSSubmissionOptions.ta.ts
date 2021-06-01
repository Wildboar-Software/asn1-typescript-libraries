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
    EntryClass,
    EntryClass_delivery /* IMPORTED_LONG_NAMED_INTEGER */,
    delivery /* IMPORTED_SHORT_NAMED_INTEGER */,
    EntryClass_submission /* IMPORTED_LONG_NAMED_INTEGER */,
    submission /* IMPORTED_SHORT_NAMED_INTEGER */,
    EntryClass_draft /* IMPORTED_LONG_NAMED_INTEGER */,
    draft /* IMPORTED_SHORT_NAMED_INTEGER */,
    EntryClass_stored_message /* IMPORTED_LONG_NAMED_INTEGER */,
    stored_message /* IMPORTED_SHORT_NAMED_INTEGER */,
    EntryClass_delivery_log /* IMPORTED_LONG_NAMED_INTEGER */,
    delivery_log /* IMPORTED_SHORT_NAMED_INTEGER */,
    EntryClass_submission_log /* IMPORTED_LONG_NAMED_INTEGER */,
    submission_log /* IMPORTED_SHORT_NAMED_INTEGER */,
    EntryClass_message_log /* IMPORTED_LONG_NAMED_INTEGER */,
    message_log /* IMPORTED_SHORT_NAMED_INTEGER */,
    EntryClass_auto_action_log /* IMPORTED_LONG_NAMED_INTEGER */,
    auto_action_log /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_EntryClass,
    _encode_EntryClass,
} from '../MSAbstractService/EntryClass.ta';
export {
    EntryClass,
    EntryClass_delivery /* IMPORTED_LONG_NAMED_INTEGER */,
    delivery /* IMPORTED_SHORT_NAMED_INTEGER */,
    EntryClass_submission /* IMPORTED_LONG_NAMED_INTEGER */,
    submission /* IMPORTED_SHORT_NAMED_INTEGER */,
    EntryClass_draft /* IMPORTED_LONG_NAMED_INTEGER */,
    draft /* IMPORTED_SHORT_NAMED_INTEGER */,
    EntryClass_stored_message /* IMPORTED_LONG_NAMED_INTEGER */,
    stored_message /* IMPORTED_SHORT_NAMED_INTEGER */,
    EntryClass_delivery_log /* IMPORTED_LONG_NAMED_INTEGER */,
    delivery_log /* IMPORTED_SHORT_NAMED_INTEGER */,
    EntryClass_submission_log /* IMPORTED_LONG_NAMED_INTEGER */,
    submission_log /* IMPORTED_SHORT_NAMED_INTEGER */,
    EntryClass_message_log /* IMPORTED_LONG_NAMED_INTEGER */,
    message_log /* IMPORTED_SHORT_NAMED_INTEGER */,
    EntryClass_auto_action_log /* IMPORTED_LONG_NAMED_INTEGER */,
    auto_action_log /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_EntryClass,
    _encode_EntryClass,
} from '../MSAbstractService/EntryClass.ta';
import {
    MessageGroupName,
    _decode_MessageGroupName,
    _encode_MessageGroupName,
} from '../MSAbstractService/MessageGroupName.ta';
export {
    MessageGroupName,
    _decode_MessageGroupName,
    _encode_MessageGroupName,
} from '../MSAbstractService/MessageGroupName.ta';
import {
    MSExtensions,
    _decode_MSExtensions,
    _encode_MSExtensions,
} from '../MSAbstractService/MSExtensions.ta';
export {
    MSExtensions,
    _decode_MSExtensions,
    _encode_MSExtensions,
} from '../MSAbstractService/MSExtensions.ta';

/* START_OF_SYMBOL_DEFINITION MSSubmissionOptions */
/**
 * @summary MSSubmissionOptions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MSSubmissionOptions ::= SET {
 *   object-entry-class
 *     [0]  EntryClass(submission | submission-log | draft) OPTIONAL,
 *   disable-auto-modify       [1]  BOOLEAN DEFAULT FALSE,
 *   add-message-group-names
 *     [2]  SET SIZE (1..ub-message-groups) OF MessageGroupName OPTIONAL,
 *   ms-submission-extensions  [3]  MSExtensions OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class MSSubmissionOptions {
    constructor(
        /**
         * @summary `object_entry_class`.
         * @public
         * @readonly
         */
        readonly object_entry_class: OPTIONAL<EntryClass>,
        /**
         * @summary `disable_auto_modify`.
         * @public
         * @readonly
         */
        readonly disable_auto_modify: OPTIONAL<BOOLEAN>,
        /**
         * @summary `add_message_group_names`.
         * @public
         * @readonly
         */
        readonly add_message_group_names: OPTIONAL<MessageGroupName[]>,
        /**
         * @summary `ms_submission_extensions`.
         * @public
         * @readonly
         */
        readonly ms_submission_extensions: OPTIONAL<MSExtensions>
    ) {}

    /**
     * @summary Restructures an object into a MSSubmissionOptions
     * @description
     *
     * This takes an `object` and converts it to a `MSSubmissionOptions`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MSSubmissionOptions`.
     * @returns {MSSubmissionOptions}
     */
    public static _from_object(
        _o: { [_K in keyof MSSubmissionOptions]: MSSubmissionOptions[_K] }
    ): MSSubmissionOptions {
        return new MSSubmissionOptions(
            _o.object_entry_class,
            _o.disable_auto_modify,
            _o.add_message_group_names,
            _o.ms_submission_extensions
        );
    }

    /**
     * @summary Getter that returns the default value for `disable_auto_modify`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_disable_auto_modify() {
        return false;
    }
}
/* END_OF_SYMBOL_DEFINITION MSSubmissionOptions */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_MSSubmissionOptions */
/**
 * @summary The Leading Root Component Types of MSSubmissionOptions
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_MSSubmissionOptions: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'object-entry-class',
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'disable-auto-modify',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'add-message-group-names',
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'ms-submission-extensions',
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_MSSubmissionOptions */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_MSSubmissionOptions */
/**
 * @summary The Trailing Root Component Types of MSSubmissionOptions
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_MSSubmissionOptions: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_MSSubmissionOptions */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_MSSubmissionOptions */
/**
 * @summary The Extension Addition Component Types of MSSubmissionOptions
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_MSSubmissionOptions: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_MSSubmissionOptions */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MSSubmissionOptions */
let _cached_decoder_for_MSSubmissionOptions: $.ASN1Decoder<MSSubmissionOptions> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MSSubmissionOptions */

/* START_OF_SYMBOL_DEFINITION _decode_MSSubmissionOptions */
/**
 * @summary Decodes an ASN.1 element into a(n) MSSubmissionOptions
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MSSubmissionOptions} The decoded data structure.
 */
export function _decode_MSSubmissionOptions(el: _Element) {
    if (!_cached_decoder_for_MSSubmissionOptions) {
        _cached_decoder_for_MSSubmissionOptions = function (
            el: _Element
        ): MSSubmissionOptions {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let object_entry_class: OPTIONAL<EntryClass>;
            let disable_auto_modify: OPTIONAL<BOOLEAN> =
                MSSubmissionOptions._default_value_for_disable_auto_modify;
            let add_message_group_names: OPTIONAL<MessageGroupName[]>;
            let ms_submission_extensions: OPTIONAL<MSExtensions>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'object-entry-class': (_el: _Element): void => {
                    object_entry_class = $._decode_explicit<EntryClass>(
                        () => _decode_EntryClass
                    )(_el);
                },
                'disable-auto-modify': (_el: _Element): void => {
                    disable_auto_modify = $._decode_explicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                'add-message-group-names': (_el: _Element): void => {
                    add_message_group_names = $._decode_explicit<
                        MessageGroupName[]
                    >(() =>
                        $._decodeSetOf<MessageGroupName>(
                            () => _decode_MessageGroupName
                        )
                    )(_el);
                },
                'ms-submission-extensions': (_el: _Element): void => {
                    ms_submission_extensions = $._decode_explicit<MSExtensions>(
                        () => _decode_MSExtensions
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_MSSubmissionOptions,
                _extension_additions_list_spec_for_MSSubmissionOptions,
                _root_component_type_list_2_spec_for_MSSubmissionOptions,
                undefined
            );
            return new MSSubmissionOptions /* SET_CONSTRUCTOR_CALL */(
                object_entry_class,
                disable_auto_modify,
                add_message_group_names,
                ms_submission_extensions
            );
        };
    }
    return _cached_decoder_for_MSSubmissionOptions(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MSSubmissionOptions */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MSSubmissionOptions */
let _cached_encoder_for_MSSubmissionOptions: $.ASN1Encoder<MSSubmissionOptions> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MSSubmissionOptions */

/* START_OF_SYMBOL_DEFINITION _encode_MSSubmissionOptions */
/**
 * @summary Encodes a(n) MSSubmissionOptions into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MSSubmissionOptions, encoded as an ASN.1 Element.
 */
export function _encode_MSSubmissionOptions(
    value: MSSubmissionOptions,
    elGetter: $.ASN1Encoder<MSSubmissionOptions>
) {
    if (!_cached_encoder_for_MSSubmissionOptions) {
        _cached_encoder_for_MSSubmissionOptions = function (
            value: MSSubmissionOptions,
            elGetter: $.ASN1Encoder<MSSubmissionOptions>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.object_entry_class === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_EntryClass,
                                  $.BER
                              )(value.object_entry_class, $.BER),
                        /* IF_DEFAULT */ value.disable_auto_modify ===
                            undefined ||
                        $.deepEq(
                            value.disable_auto_modify,
                            MSSubmissionOptions._default_value_for_disable_auto_modify
                        )
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  1,
                                  () => $._encodeBoolean,
                                  $.BER
                              )(value.disable_auto_modify, $.BER),
                        /* IF_ABSENT  */ value.add_message_group_names ===
                        undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  2,
                                  () =>
                                      $._encodeSetOf<MessageGroupName>(
                                          () => _encode_MessageGroupName,
                                          $.BER
                                      ),
                                  $.BER
                              )(value.add_message_group_names, $.BER),
                        /* IF_ABSENT  */ value.ms_submission_extensions ===
                        undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  3,
                                  () => _encode_MSExtensions,
                                  $.BER
                              )(value.ms_submission_extensions, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_MSSubmissionOptions(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MSSubmissionOptions */

/* eslint-enable */
