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
    EntryClass,
    delivery /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_EntryClass,
    _encode_EntryClass,
} from '../MSAbstractService/EntryClass.ta.mjs';
import {
    Selector,
    _decode_Selector,
    _encode_Selector,
} from '../MSAbstractService/Selector.ta.mjs';
import {
    EntryInformationSelection,
    _decode_EntryInformationSelection,
    _encode_EntryInformationSelection,
} from '../MSAbstractService/EntryInformationSelection.ta.mjs';
import {
    MSExtensions,
    _decode_MSExtensions,
    _encode_MSExtensions,
} from '../MSAbstractService/MSExtensions.ta.mjs';
/**
 * @summary ListArgument
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ListArgument ::= SET {
 *   entry-class           [0]  EntryClass DEFAULT delivery,
 *   selector              [1]  Selector,
 *   requested-attributes  [3]  EntryInformationSelection OPTIONAL,
 *   -- 1994 extension
 *   list-extensions       [4]  MSExtensions OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class ListArgument {
    constructor(
        /**
         * @summary `entry_class`.
         * @public
         * @readonly
         */
        readonly entry_class: OPTIONAL<EntryClass>,
        /**
         * @summary `selector`.
         * @public
         * @readonly
         */
        readonly selector: Selector,
        /**
         * @summary `requested_attributes`.
         * @public
         * @readonly
         */
        readonly requested_attributes: OPTIONAL<EntryInformationSelection>,
        /**
         * @summary `list_extensions`.
         * @public
         * @readonly
         */
        readonly list_extensions: OPTIONAL<MSExtensions>
    ) {}

    /**
     * @summary Restructures an object into a ListArgument
     * @description
     *
     * This takes an `object` and converts it to a `ListArgument`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ListArgument`.
     * @returns {ListArgument}
     */
    public static _from_object(
        _o: { [_K in keyof ListArgument]: ListArgument[_K] }
    ): ListArgument {
        return new ListArgument(
            _o.entry_class,
            _o.selector,
            _o.requested_attributes,
            _o.list_extensions
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

/**
 * @summary The Leading Root Component Types of ListArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ListArgument: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'entry-class',
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'selector',
        false,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'requested-attributes',
        true,
        $.hasTag(_TagClass.context, 3)
    ),
    new $.ComponentSpec(
        'list-extensions',
        true,
        $.hasTag(_TagClass.context, 4)
    ),
];

/**
 * @summary The Trailing Root Component Types of ListArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ListArgument: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of ListArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ListArgument: $.ComponentSpec[] = [];

let _cached_decoder_for_ListArgument: $.ASN1Decoder<ListArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ListArgument
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ListArgument} The decoded data structure.
 */
export function _decode_ListArgument(el: _Element) {
    if (!_cached_decoder_for_ListArgument) {
        _cached_decoder_for_ListArgument = function (
            el: _Element
        ): ListArgument {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let entry_class: OPTIONAL<EntryClass> =
                ListArgument._default_value_for_entry_class;
            let selector!: Selector;
            let requested_attributes: OPTIONAL<EntryInformationSelection>;
            let list_extensions: OPTIONAL<MSExtensions>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'entry-class': (_el: _Element): void => {
                    entry_class = $._decode_explicit<EntryClass>(
                        () => _decode_EntryClass
                    )(_el);
                },
                selector: (_el: _Element): void => {
                    selector = $._decode_explicit<Selector>(
                        () => _decode_Selector
                    )(_el);
                },
                'requested-attributes': (_el: _Element): void => {
                    requested_attributes = $._decode_explicit<EntryInformationSelection>(
                        () => _decode_EntryInformationSelection
                    )(_el);
                },
                'list-extensions': (_el: _Element): void => {
                    list_extensions = $._decode_explicit<MSExtensions>(
                        () => _decode_MSExtensions
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ListArgument,
                _extension_additions_list_spec_for_ListArgument,
                _root_component_type_list_2_spec_for_ListArgument,
                undefined
            );
            return new ListArgument /* SET_CONSTRUCTOR_CALL */(
                entry_class,
                selector,
                requested_attributes,
                list_extensions
            );
        };
    }
    return _cached_decoder_for_ListArgument(el);
}

let _cached_encoder_for_ListArgument: $.ASN1Encoder<ListArgument> | null = null;

/**
 * @summary Encodes a(n) ListArgument into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ListArgument, encoded as an ASN.1 Element.
 */
export function _encode_ListArgument(
    value: ListArgument,
    elGetter: $.ASN1Encoder<ListArgument>
) {
    if (!_cached_encoder_for_ListArgument) {
        _cached_encoder_for_ListArgument = function (
            value: ListArgument        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_DEFAULT */ value.entry_class === undefined ||
                        $.deepEq(
                            value.entry_class,
                            ListArgument._default_value_for_entry_class
                        )
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_EntryClass,
                                  $.BER
                              )(value.entry_class, $.BER),
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            1,
                            () => _encode_Selector,
                            $.BER
                        )(value.selector, $.BER),
                        /* IF_ABSENT  */ value.requested_attributes ===
                        undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  3,
                                  () => _encode_EntryInformationSelection,
                                  $.BER
                              )(value.requested_attributes, $.BER),
                        /* IF_ABSENT  */ value.list_extensions === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  4,
                                  () => _encode_MSExtensions,
                                  $.BER
                              )(value.list_extensions, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ListArgument(value, elGetter);
}


/* eslint-enable */
