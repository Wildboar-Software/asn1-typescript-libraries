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
} from '../MSAbstractService/EntryClass.ta.mjs';
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
} from '../MSAbstractService/EntryClass.ta.mjs';
import {
    DeleteArgument_items,
    _decode_DeleteArgument_items,
    _encode_DeleteArgument_items,
} from '../MSAbstractService/DeleteArgument-items.ta.mjs';
export {
    DeleteArgument_items,
    _decode_DeleteArgument_items,
    _encode_DeleteArgument_items,
} from '../MSAbstractService/DeleteArgument-items.ta.mjs';
import {
    MSExtensions,
    _decode_MSExtensions,
    _encode_MSExtensions,
} from '../MSAbstractService/MSExtensions.ta.mjs';
export {
    MSExtensions,
    _decode_MSExtensions,
    _encode_MSExtensions,
} from '../MSAbstractService/MSExtensions.ta.mjs';

/* START_OF_SYMBOL_DEFINITION DeleteArgument */
/**
 * @summary DeleteArgument
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeleteArgument ::= SET {
 *   entry-class        [0]  EntryClass DEFAULT delivery,
 *   items
 *     CHOICE {selector          [1]  Selector,
 *             sequence-numbers  [2]  SET SIZE (1..ub-messages) OF SequenceNumber
 *   },
 *   -- 1994 extension
 *   delete-extensions  [3]  MSExtensions OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class DeleteArgument {
    constructor(
        /**
         * @summary `entry_class`.
         * @public
         * @readonly
         */
        readonly entry_class: OPTIONAL<EntryClass>,
        /**
         * @summary `items`.
         * @public
         * @readonly
         */
        readonly items: DeleteArgument_items,
        /**
         * @summary `delete_extensions`.
         * @public
         * @readonly
         */
        readonly delete_extensions: OPTIONAL<MSExtensions>
    ) {}

    /**
     * @summary Restructures an object into a DeleteArgument
     * @description
     *
     * This takes an `object` and converts it to a `DeleteArgument`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DeleteArgument`.
     * @returns {DeleteArgument}
     */
    public static _from_object(
        _o: { [_K in keyof DeleteArgument]: DeleteArgument[_K] }
    ): DeleteArgument {
        return new DeleteArgument(
            _o.entry_class,
            _o.items,
            _o.delete_extensions
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
/* END_OF_SYMBOL_DEFINITION DeleteArgument */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DeleteArgument */
/**
 * @summary The Leading Root Component Types of DeleteArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DeleteArgument: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'entry-class',
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec('items', false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        'delete-extensions',
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DeleteArgument */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DeleteArgument */
/**
 * @summary The Trailing Root Component Types of DeleteArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DeleteArgument: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DeleteArgument */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DeleteArgument */
/**
 * @summary The Extension Addition Component Types of DeleteArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DeleteArgument: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DeleteArgument */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DeleteArgument */
let _cached_decoder_for_DeleteArgument: $.ASN1Decoder<DeleteArgument> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DeleteArgument */

/* START_OF_SYMBOL_DEFINITION _decode_DeleteArgument */
/**
 * @summary Decodes an ASN.1 element into a(n) DeleteArgument
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DeleteArgument} The decoded data structure.
 */
export function _decode_DeleteArgument(el: _Element) {
    if (!_cached_decoder_for_DeleteArgument) {
        _cached_decoder_for_DeleteArgument = function (
            el: _Element
        ): DeleteArgument {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let entry_class: OPTIONAL<EntryClass> =
                DeleteArgument._default_value_for_entry_class;
            let items!: DeleteArgument_items;
            let delete_extensions: OPTIONAL<MSExtensions>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'entry-class': (_el: _Element): void => {
                    entry_class = $._decode_explicit<EntryClass>(
                        () => _decode_EntryClass
                    )(_el);
                },
                items: (_el: _Element): void => {
                    items = _decode_DeleteArgument_items(_el);
                },
                'delete-extensions': (_el: _Element): void => {
                    delete_extensions = $._decode_explicit<MSExtensions>(
                        () => _decode_MSExtensions
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_DeleteArgument,
                _extension_additions_list_spec_for_DeleteArgument,
                _root_component_type_list_2_spec_for_DeleteArgument,
                undefined
            );
            return new DeleteArgument /* SET_CONSTRUCTOR_CALL */(
                entry_class,
                items,
                delete_extensions
            );
        };
    }
    return _cached_decoder_for_DeleteArgument(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DeleteArgument */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DeleteArgument */
let _cached_encoder_for_DeleteArgument: $.ASN1Encoder<DeleteArgument> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DeleteArgument */

/* START_OF_SYMBOL_DEFINITION _encode_DeleteArgument */
/**
 * @summary Encodes a(n) DeleteArgument into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeleteArgument, encoded as an ASN.1 Element.
 */
export function _encode_DeleteArgument(
    value: DeleteArgument,
    elGetter: $.ASN1Encoder<DeleteArgument>
) {
    if (!_cached_encoder_for_DeleteArgument) {
        _cached_encoder_for_DeleteArgument = function (
            value: DeleteArgument,
            elGetter: $.ASN1Encoder<DeleteArgument>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_DEFAULT */ value.entry_class === undefined ||
                        $.deepEq(
                            value.entry_class,
                            DeleteArgument._default_value_for_entry_class
                        )
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_EntryClass,
                                  $.BER
                              )(value.entry_class, $.BER),
                        /* REQUIRED   */ _encode_DeleteArgument_items(
                            value.items,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.delete_extensions === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  3,
                                  () => _encode_MSExtensions,
                                  $.BER
                              )(value.delete_extensions, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_DeleteArgument(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DeleteArgument */

/* eslint-enable */
