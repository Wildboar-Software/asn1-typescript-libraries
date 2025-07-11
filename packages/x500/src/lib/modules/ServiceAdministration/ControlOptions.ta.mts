/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
    TRUE_BIT,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    HierarchySelections,
    _decode_HierarchySelections,
    _encode_HierarchySelections,
} from "../DirectoryAbstractService/HierarchySelections.ta.mjs";
import {
    SearchControlOptions,
    SearchControlOptions_searchAliases /* IMPORTED_LONG_NAMED_BIT */,
    _decode_SearchControlOptions,
    _encode_SearchControlOptions,
} from "../DirectoryAbstractService/SearchControlOptions.ta.mjs";
import {
    ServiceControlOptions,
    _decode_ServiceControlOptions,
    _encode_ServiceControlOptions,
} from "../DirectoryAbstractService/ServiceControlOptions.ta.mjs";
/**
 * @summary ControlOptions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ControlOptions ::= SEQUENCE {
 *   serviceControls   [0]  ServiceControlOptions DEFAULT {},
 *   searchOptions     [1]  SearchControlOptions  DEFAULT {searchAliases},
 *   hierarchyOptions  [2]  HierarchySelections   OPTIONAL,
 *   ... }
 * ```
 *
 */
export class ControlOptions {
    constructor(
        /**
         * @summary `serviceControls`.
         * @public
         * @readonly
         */
        readonly serviceControls: OPTIONAL<ServiceControlOptions>,
        /**
         * @summary `searchOptions`.
         * @public
         * @readonly
         */
        readonly searchOptions: OPTIONAL<SearchControlOptions>,
        /**
         * @summary `hierarchyOptions`.
         * @public
         * @readonly
         */
        readonly hierarchyOptions: OPTIONAL<HierarchySelections>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ControlOptions
     * @description
     *
     * This takes an `object` and converts it to a `ControlOptions`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ControlOptions`.
     * @returns {ControlOptions}
     */
    public static _from_object(
        _o: { [_K in keyof ControlOptions]: ControlOptions[_K] }
    ): ControlOptions {
        return new ControlOptions(
            _o.serviceControls,
            _o.searchOptions,
            _o.hierarchyOptions,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `serviceControls`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_serviceControls(): ServiceControlOptions {
        return new Uint8ClampedArray([]);
    }
    /**
     * @summary Getter that returns the default value for `searchOptions`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_searchOptions(): SearchControlOptions {
        return (() => {
            const _ret = new Uint8ClampedArray(12);
            _ret[SearchControlOptions_searchAliases] = TRUE_BIT;
            return _ret;
        })();
    }
}

/**
 * @summary The Leading Root Component Types of ControlOptions
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ControlOptions: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "serviceControls",
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "searchOptions",
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        "hierarchyOptions",
        true,
        $.hasTag(_TagClass.context, 2)
    ),
];

/**
 * @summary The Trailing Root Component Types of ControlOptions
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ControlOptions: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of ControlOptions
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ControlOptions: $.ComponentSpec[] = [];

let _cached_decoder_for_ControlOptions: $.ASN1Decoder<ControlOptions> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ControlOptions
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ControlOptions} The decoded data structure.
 */
export function _decode_ControlOptions(el: _Element): ControlOptions {
    if (!_cached_decoder_for_ControlOptions) {
        _cached_decoder_for_ControlOptions = function (
            el: _Element
        ): ControlOptions {
            let serviceControls: OPTIONAL<ServiceControlOptions> =
                ControlOptions._default_value_for_serviceControls;
            let searchOptions: OPTIONAL<SearchControlOptions> =
                ControlOptions._default_value_for_searchOptions;
            let hierarchyOptions: OPTIONAL<HierarchySelections>;
            let _unrecognizedExtensionsList: _Element[] = [];
            const callbacks: $.DecodingMap = {
                serviceControls: (_el: _Element): void => {
                    serviceControls = $._decode_explicit<ServiceControlOptions>(
                        () => _decode_ServiceControlOptions
                    )(_el);
                },
                searchOptions: (_el: _Element): void => {
                    searchOptions = $._decode_explicit<SearchControlOptions>(
                        () => _decode_SearchControlOptions
                    )(_el);
                },
                hierarchyOptions: (_el: _Element): void => {
                    hierarchyOptions = $._decode_explicit<HierarchySelections>(
                        () => _decode_HierarchySelections
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ControlOptions,
                _extension_additions_list_spec_for_ControlOptions,
                _root_component_type_list_2_spec_for_ControlOptions,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new ControlOptions(
                serviceControls,
                searchOptions,
                hierarchyOptions,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_ControlOptions(el);
}

let _cached_encoder_for_ControlOptions: $.ASN1Encoder<ControlOptions> | null = null;

/**
 * @summary Encodes a(n) ControlOptions into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ControlOptions, encoded as an ASN.1 Element.
 */
export function _encode_ControlOptions(
    value: ControlOptions,
    elGetter: $.ASN1Encoder<ControlOptions>
): _Element {
    if (!_cached_encoder_for_ControlOptions) {
        _cached_encoder_for_ControlOptions = function (
            value: ControlOptions        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.serviceControls ===
                                undefined ||
                            $.deepEq(
                                value.serviceControls,
                                ControlOptions._default_value_for_serviceControls
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_ServiceControlOptions,
                                      $.DER
                                  )(value.serviceControls, $.DER),
                            /* IF_DEFAULT */ value.searchOptions ===
                                undefined ||
                            $.deepEq(
                                value.searchOptions,
                                ControlOptions._default_value_for_searchOptions
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () => _encode_SearchControlOptions,
                                      $.DER
                                  )(value.searchOptions, $.DER),
                            /* IF_ABSENT  */ value.hierarchyOptions ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      2,
                                      () => _encode_HierarchySelections,
                                      $.DER
                                  )(value.hierarchyOptions, $.DER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_ControlOptions(value, elGetter);
}


/* eslint-enable */
