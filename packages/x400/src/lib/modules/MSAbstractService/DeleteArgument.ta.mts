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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    EntryClass,
    delivery /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_EntryClass,
    _encode_EntryClass,
} from '../MSAbstractService/EntryClass.ta.mjs';
import {
    DeleteArgument_items,
    _decode_DeleteArgument_items,
    _encode_DeleteArgument_items,
} from '../MSAbstractService/DeleteArgument-items.ta.mjs';
import {
    MSExtensions,
    _decode_MSExtensions,
    _encode_MSExtensions,
} from '../MSAbstractService/MSExtensions.ta.mjs';
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
    public static get _default_value_for_entry_class(): EntryClass {
        return delivery;
    }
}

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
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec('items', false, $.hasAnyTag),
    new $.ComponentSpec(
        'delete-extensions',
        true,
        $.hasTag(_TagClass.context, 3)
    ),
];

/**
 * @summary The Trailing Root Component Types of DeleteArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DeleteArgument: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of DeleteArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DeleteArgument: $.ComponentSpec[] = [];

let _cached_decoder_for_DeleteArgument: $.ASN1Decoder<DeleteArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DeleteArgument
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DeleteArgument} The decoded data structure.
 */
export function _decode_DeleteArgument(el: _Element): DeleteArgument {
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

let _cached_encoder_for_DeleteArgument: $.ASN1Encoder<DeleteArgument> | null = null;

/**
 * @summary Encodes a(n) DeleteArgument into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeleteArgument, encoded as an ASN.1 Element.
 */
export function _encode_DeleteArgument(
    value: DeleteArgument,
    elGetter: $.ASN1Encoder<DeleteArgument>
): _Element {
    if (!_cached_encoder_for_DeleteArgument) {
        _cached_encoder_for_DeleteArgument = function (
            value: DeleteArgument        ): _Element {
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


/* eslint-enable */
