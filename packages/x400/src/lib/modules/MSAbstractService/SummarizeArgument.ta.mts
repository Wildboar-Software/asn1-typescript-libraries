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
    Selector,
    _decode_Selector,
    _encode_Selector,
} from '../MSAbstractService/Selector.ta.mjs';
import {
    MSExtensions,
    _decode_MSExtensions,
    _encode_MSExtensions,
} from '../MSAbstractService/MSExtensions.ta.mjs';
import {
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from "./AttributeType.ta.mjs";

/**
 * @summary SummarizeArgument
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SummarizeArgument ::= SET {
 *   entry-class           [0]  EntryClass DEFAULT delivery,
 *   selector              [1]  Selector,
 *   summary-requests
 *     [2]  SEQUENCE SIZE (1..ub-summaries) OF
 *            X413ATTRIBUTE.&id({AttributeTable})
 *       OPTIONAL -- absent if no summaries are requested--,
 *   -- 1994 extension
 *   summarize-extensions  [3]  MSExtensions OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class SummarizeArgument {
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
         * @summary `summary_requests`.
         * @public
         * @readonly
         */
        readonly summary_requests: OPTIONAL<AttributeType[]>,
        /**
         * @summary `summarize_extensions`.
         * @public
         * @readonly
         */
        readonly summarize_extensions: OPTIONAL<MSExtensions>
    ) {}

    /**
     * @summary Restructures an object into a SummarizeArgument
     * @description
     *
     * This takes an `object` and converts it to a `SummarizeArgument`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SummarizeArgument`.
     * @returns {SummarizeArgument}
     */
    public static _from_object(
        _o: { [_K in keyof SummarizeArgument]: SummarizeArgument[_K] }
    ): SummarizeArgument {
        return new SummarizeArgument(
            _o.entry_class,
            _o.selector,
            _o.summary_requests,
            _o.summarize_extensions
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
 * @summary The Leading Root Component Types of SummarizeArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SummarizeArgument: $.ComponentSpec[] = [
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
        'summary-requests',
        true,
        $.hasTag(_TagClass.context, 2)
    ),
    new $.ComponentSpec(
        'summarize-extensions',
        true,
        $.hasTag(_TagClass.context, 3)
    ),
];

/**
 * @summary The Trailing Root Component Types of SummarizeArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SummarizeArgument: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of SummarizeArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SummarizeArgument: $.ComponentSpec[] = [];

let _cached_decoder_for_SummarizeArgument: $.ASN1Decoder<SummarizeArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SummarizeArgument
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SummarizeArgument} The decoded data structure.
 */
export function _decode_SummarizeArgument(el: _Element): SummarizeArgument {
    if (!_cached_decoder_for_SummarizeArgument) {
        _cached_decoder_for_SummarizeArgument = function (
            el: _Element
        ): SummarizeArgument {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let entry_class: OPTIONAL<EntryClass> =
                SummarizeArgument._default_value_for_entry_class;
            let selector!: Selector;
            let summary_requests: OPTIONAL<AttributeType[]>;
            let summarize_extensions: OPTIONAL<MSExtensions>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
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
                'summary-requests': (_el: _Element): void => {
                    summary_requests = $._decode_explicit<AttributeType[]>(() =>
                        $._decodeSequenceOf<AttributeType>(
                            () => _decode_AttributeType
                        )
                    )(_el);
                },
                'summarize-extensions': (_el: _Element): void => {
                    summarize_extensions = $._decode_explicit<MSExtensions>(
                        () => _decode_MSExtensions
                    )(_el);
                },
            };
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SummarizeArgument,
                _extension_additions_list_spec_for_SummarizeArgument,
                _root_component_type_list_2_spec_for_SummarizeArgument,
                undefined
            );
            return new SummarizeArgument /* SET_CONSTRUCTOR_CALL */(
                entry_class,
                selector,
                summary_requests,
                summarize_extensions
            );
        };
    }
    return _cached_decoder_for_SummarizeArgument(el);
}

let _cached_encoder_for_SummarizeArgument: $.ASN1Encoder<SummarizeArgument> | null = null;

/**
 * @summary Encodes a(n) SummarizeArgument into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SummarizeArgument, encoded as an ASN.1 Element.
 */
export function _encode_SummarizeArgument(
    value: SummarizeArgument,
    elGetter: $.ASN1Encoder<SummarizeArgument>
): _Element {
    if (!_cached_encoder_for_SummarizeArgument) {
        _cached_encoder_for_SummarizeArgument = function (
            value: SummarizeArgument        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_DEFAULT */ value.entry_class === undefined ||
                        $.deepEq(
                            value.entry_class,
                            SummarizeArgument._default_value_for_entry_class
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
                        /* IF_ABSENT  */ value.summary_requests === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  2,
                                  () =>
                                      $._encodeSequenceOf<AttributeType>(
                                          () => _encode_AttributeType,
                                          $.BER
                                      ),
                                  $.BER
                              )(value.summary_requests, $.BER),
                        /* IF_ABSENT  */ value.summarize_extensions ===
                        undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  3,
                                  () => _encode_MSExtensions,
                                  $.BER
                              )(value.summarize_extensions, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_SummarizeArgument(value, elGetter);
}


/* eslint-enable */
