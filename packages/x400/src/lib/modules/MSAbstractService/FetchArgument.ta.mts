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
    FetchArgument_item,
    _decode_FetchArgument_item,
    _encode_FetchArgument_item,
} from '../MSAbstractService/FetchArgument-item.ta.mjs';
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
 * @summary FetchArgument
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FetchArgument ::= SET {
 *   entry-class           [0]  EntryClass DEFAULT delivery,
 *   item
 *     CHOICE {search   [1]  Selector,
 *             precise  [2]  SequenceNumber},
 *   requested-attributes  [3]  EntryInformationSelection OPTIONAL,
 *   -- 1994 extension
 *   fetch-extensions      [4]  MSExtensions OPTIONAL
 * }
 * ```
 *
 */
export class FetchArgument {
    constructor(
        /**
         * @summary `entry_class`.
         * @public
         * @readonly
         */
        readonly entry_class: OPTIONAL<EntryClass>,
        /**
         * @summary `item`.
         * @public
         * @readonly
         */
        readonly item: FetchArgument_item,
        /**
         * @summary `requested_attributes`.
         * @public
         * @readonly
         */
        readonly requested_attributes: OPTIONAL<EntryInformationSelection>,
        /**
         * @summary `fetch_extensions`.
         * @public
         * @readonly
         */
        readonly fetch_extensions: OPTIONAL<MSExtensions>
    ) {}

    /**
     * @summary Restructures an object into a FetchArgument
     * @description
     *
     * This takes an `object` and converts it to a `FetchArgument`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FetchArgument`.
     * @returns {FetchArgument}
     */
    public static _from_object(
        _o: { [_K in keyof FetchArgument]: FetchArgument[_K] }
    ): FetchArgument {
        return new FetchArgument(
            _o.entry_class,
            _o.item,
            _o.requested_attributes,
            _o.fetch_extensions
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
 * @summary The Leading Root Component Types of FetchArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_FetchArgument: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'entry-class',
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec('item', false, $.hasAnyTag),
    new $.ComponentSpec(
        'requested-attributes',
        true,
        $.hasTag(_TagClass.context, 3)
    ),
    new $.ComponentSpec(
        'fetch-extensions',
        true,
        $.hasTag(_TagClass.context, 4)
    ),
];

/**
 * @summary The Trailing Root Component Types of FetchArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_FetchArgument: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of FetchArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_FetchArgument: $.ComponentSpec[] = [];

let _cached_decoder_for_FetchArgument: $.ASN1Decoder<FetchArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FetchArgument
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {FetchArgument} The decoded data structure.
 */
export function _decode_FetchArgument(el: _Element): FetchArgument {
    if (!_cached_decoder_for_FetchArgument) {
        _cached_decoder_for_FetchArgument = function (
            el: _Element
        ): FetchArgument {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let entry_class: OPTIONAL<EntryClass> =
                FetchArgument._default_value_for_entry_class;
            let item!: FetchArgument_item;
            let requested_attributes: OPTIONAL<EntryInformationSelection>;
            let fetch_extensions: OPTIONAL<MSExtensions>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            const callbacks: $.DecodingMap = {
                'entry-class': (_el: _Element): void => {
                    entry_class = $._decode_explicit<EntryClass>(
                        () => _decode_EntryClass
                    )(_el);
                },
                item: (_el: _Element): void => {
                    item = _decode_FetchArgument_item(_el);
                },
                'requested-attributes': (_el: _Element): void => {
                    requested_attributes = $._decode_explicit<EntryInformationSelection>(
                        () => _decode_EntryInformationSelection
                    )(_el);
                },
                'fetch-extensions': (_el: _Element): void => {
                    fetch_extensions = $._decode_explicit<MSExtensions>(
                        () => _decode_MSExtensions
                    )(_el);
                },
            };
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_FetchArgument,
                _extension_additions_list_spec_for_FetchArgument,
                _root_component_type_list_2_spec_for_FetchArgument,
                undefined
            );
            return new FetchArgument /* SET_CONSTRUCTOR_CALL */(
                entry_class,
                item,
                requested_attributes,
                fetch_extensions
            );
        };
    }
    return _cached_decoder_for_FetchArgument(el);
}

let _cached_encoder_for_FetchArgument: $.ASN1Encoder<FetchArgument> | null = null;

/**
 * @summary Encodes a(n) FetchArgument into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FetchArgument, encoded as an ASN.1 Element.
 */
export function _encode_FetchArgument(
    value: FetchArgument,
    elGetter: $.ASN1Encoder<FetchArgument>
): _Element {
    if (!_cached_encoder_for_FetchArgument) {
        _cached_encoder_for_FetchArgument = function (
            value: FetchArgument        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_DEFAULT */ value.entry_class === undefined ||
                        $.deepEq(
                            value.entry_class,
                            FetchArgument._default_value_for_entry_class
                        )
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_EntryClass,
                                  $.BER
                              )(value.entry_class, $.BER),
                        /* REQUIRED   */ _encode_FetchArgument_item(
                            value.item,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.requested_attributes ===
                        undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  3,
                                  () => _encode_EntryInformationSelection,
                                  $.BER
                              )(value.requested_attributes, $.BER),
                        /* IF_ABSENT  */ value.fetch_extensions === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  4,
                                  () => _encode_MSExtensions,
                                  $.BER
                              )(value.fetch_extensions, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_FetchArgument(value, elGetter);
}


/* eslint-enable */
