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
    ModifyArgument_entries,
    _decode_ModifyArgument_entries,
    _encode_ModifyArgument_entries,
} from '../MSAbstractService/ModifyArgument-entries.ta';
export {
    ModifyArgument_entries,
    _decode_ModifyArgument_entries,
    _encode_ModifyArgument_entries,
} from '../MSAbstractService/ModifyArgument-entries.ta';
import {
    EntryModification,
    _decode_EntryModification,
    _encode_EntryModification,
} from '../MSAbstractService/EntryModification.ta';
export {
    EntryModification,
    _decode_EntryModification,
    _encode_EntryModification,
} from '../MSAbstractService/EntryModification.ta';
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

/* START_OF_SYMBOL_DEFINITION ModifyArgument */
/**
 * @summary ModifyArgument
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ModifyArgument ::= SET {
 *   entry-class        [0]  EntryClass DEFAULT delivery,
 *   entries
 *     CHOICE {selector          [1]  Selector,
 *             specific-entries
 *               [2]  SEQUENCE SIZE (1..ub-messages) OF SequenceNumber},
 *   modifications
 *     [3]  SEQUENCE SIZE (1..ub-modifications) OF EntryModification,
 *   modify-extensions  [4]  MSExtensions OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class ModifyArgument {
    constructor(
        /**
         * @summary `entry_class`.
         * @public
         * @readonly
         */
        readonly entry_class: OPTIONAL<EntryClass>,
        /**
         * @summary `entries`.
         * @public
         * @readonly
         */
        readonly entries: ModifyArgument_entries,
        /**
         * @summary `modifications`.
         * @public
         * @readonly
         */
        readonly modifications: EntryModification[],
        /**
         * @summary `modify_extensions`.
         * @public
         * @readonly
         */
        readonly modify_extensions: OPTIONAL<MSExtensions>
    ) {}

    /**
     * @summary Restructures an object into a ModifyArgument
     * @description
     *
     * This takes an `object` and converts it to a `ModifyArgument`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ModifyArgument`.
     * @returns {ModifyArgument}
     */
    public static _from_object(
        _o: { [_K in keyof ModifyArgument]: ModifyArgument[_K] }
    ): ModifyArgument {
        return new ModifyArgument(
            _o.entry_class,
            _o.entries,
            _o.modifications,
            _o.modify_extensions
        );
    }

    /**
     * @summary Getter that returns the default value for `entry_class`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_entry_class() {
        return delivery;
    }
}
/* END_OF_SYMBOL_DEFINITION ModifyArgument */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ModifyArgument */
/**
 * @summary The Leading Root Component Types of ModifyArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ModifyArgument: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'entry-class',
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec('entries', false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        'modifications',
        false,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'modify-extensions',
        true,
        $.hasTag(_TagClass.context, 4),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ModifyArgument */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ModifyArgument */
/**
 * @summary The Trailing Root Component Types of ModifyArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ModifyArgument: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ModifyArgument */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ModifyArgument */
/**
 * @summary The Extension Addition Component Types of ModifyArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ModifyArgument: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ModifyArgument */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ModifyArgument */
let _cached_decoder_for_ModifyArgument: $.ASN1Decoder<ModifyArgument> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ModifyArgument */

/* START_OF_SYMBOL_DEFINITION _decode_ModifyArgument */
/**
 * @summary Decodes an ASN.1 element into a(n) ModifyArgument
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ModifyArgument} The decoded data structure.
 */
export function _decode_ModifyArgument(el: _Element) {
    if (!_cached_decoder_for_ModifyArgument) {
        _cached_decoder_for_ModifyArgument = function (
            el: _Element
        ): ModifyArgument {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let entry_class: OPTIONAL<EntryClass> =
                ModifyArgument._default_value_for_entry_class;
            let entries!: ModifyArgument_entries;
            let modifications!: EntryModification[];
            let modify_extensions: OPTIONAL<MSExtensions>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'entry-class': (_el: _Element): void => {
                    entry_class = $._decode_explicit<EntryClass>(
                        () => _decode_EntryClass
                    )(_el);
                },
                entries: (_el: _Element): void => {
                    entries = _decode_ModifyArgument_entries(_el);
                },
                modifications: (_el: _Element): void => {
                    modifications = $._decode_explicit<EntryModification[]>(
                        () =>
                            $._decodeSequenceOf<EntryModification>(
                                () => _decode_EntryModification
                            )
                    )(_el);
                },
                'modify-extensions': (_el: _Element): void => {
                    modify_extensions = $._decode_explicit<MSExtensions>(
                        () => _decode_MSExtensions
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ModifyArgument,
                _extension_additions_list_spec_for_ModifyArgument,
                _root_component_type_list_2_spec_for_ModifyArgument,
                undefined
            );
            return new ModifyArgument /* SET_CONSTRUCTOR_CALL */(
                entry_class,
                entries,
                modifications,
                modify_extensions
            );
        };
    }
    return _cached_decoder_for_ModifyArgument(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ModifyArgument */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ModifyArgument */
let _cached_encoder_for_ModifyArgument: $.ASN1Encoder<ModifyArgument> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ModifyArgument */

/* START_OF_SYMBOL_DEFINITION _encode_ModifyArgument */
/**
 * @summary Encodes a(n) ModifyArgument into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ModifyArgument, encoded as an ASN.1 Element.
 */
export function _encode_ModifyArgument(
    value: ModifyArgument,
    elGetter: $.ASN1Encoder<ModifyArgument>
) {
    if (!_cached_encoder_for_ModifyArgument) {
        _cached_encoder_for_ModifyArgument = function (
            value: ModifyArgument,
            elGetter: $.ASN1Encoder<ModifyArgument>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_DEFAULT */ value.entry_class === undefined ||
                        $.deepEq(
                            value.entry_class,
                            ModifyArgument._default_value_for_entry_class
                        )
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_EntryClass,
                                  $.BER
                              )(value.entry_class, $.BER),
                        /* REQUIRED   */ _encode_ModifyArgument_entries(
                            value.entries,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            3,
                            () =>
                                $._encodeSequenceOf<EntryModification>(
                                    () => _encode_EntryModification,
                                    $.BER
                                ),
                            $.BER
                        )(value.modifications, $.BER),
                        /* IF_ABSENT  */ value.modify_extensions === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  4,
                                  () => _encode_MSExtensions,
                                  $.BER
                              )(value.modify_extensions, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ModifyArgument(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ModifyArgument */

/* eslint-enable */
