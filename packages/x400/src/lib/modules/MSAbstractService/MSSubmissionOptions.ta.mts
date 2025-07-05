/* eslint-disable */
import {
    OPTIONAL,
    BOOLEAN,
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
    EntryClass,
    _decode_EntryClass,
    _encode_EntryClass,
} from '../MSAbstractService/EntryClass.ta.mjs';
import {
    MessageGroupName,
    _decode_MessageGroupName,
    _encode_MessageGroupName,
} from '../MSAbstractService/MessageGroupName.ta.mjs';
import {
    MSExtensions,
    _decode_MSExtensions,
    _encode_MSExtensions,
} from '../MSAbstractService/MSExtensions.ta.mjs';
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
    public static get _default_value_for_disable_auto_modify(): BOOLEAN {
        return false;
    }
}

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
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'disable-auto-modify',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'add-message-group-names',
        true,
        $.hasTag(_TagClass.context, 2)
    ),
    new $.ComponentSpec(
        'ms-submission-extensions',
        true,
        $.hasTag(_TagClass.context, 3)
    ),
];

/**
 * @summary The Trailing Root Component Types of MSSubmissionOptions
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_MSSubmissionOptions: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of MSSubmissionOptions
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_MSSubmissionOptions: $.ComponentSpec[] = [];

let _cached_decoder_for_MSSubmissionOptions: $.ASN1Decoder<MSSubmissionOptions> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MSSubmissionOptions
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MSSubmissionOptions} The decoded data structure.
 */
export function _decode_MSSubmissionOptions(el: _Element): MSSubmissionOptions {
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

let _cached_encoder_for_MSSubmissionOptions: $.ASN1Encoder<MSSubmissionOptions> | null = null;

/**
 * @summary Encodes a(n) MSSubmissionOptions into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MSSubmissionOptions, encoded as an ASN.1 Element.
 */
export function _encode_MSSubmissionOptions(
    value: MSSubmissionOptions,
    elGetter: $.ASN1Encoder<MSSubmissionOptions>
): _Element {
    if (!_cached_encoder_for_MSSubmissionOptions) {
        _cached_encoder_for_MSSubmissionOptions = function (
            value: MSSubmissionOptions        ): _Element {
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


/* eslint-enable */
