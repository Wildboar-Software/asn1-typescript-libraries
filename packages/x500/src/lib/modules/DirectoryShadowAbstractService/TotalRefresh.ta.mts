/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    SDSEContent,
    _decode_SDSEContent,
    _encode_SDSEContent,
} from "../DirectoryShadowAbstractService/SDSEContent.ta.mjs";
import {
    Subtree,
    _decode_Subtree,
    _encode_Subtree,
} from "../DirectoryShadowAbstractService/Subtree.ta.mjs";
/**
 * @summary TotalRefresh
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TotalRefresh ::= SEQUENCE {
 *   sDSE     SDSEContent OPTIONAL,
 *   subtree  SET SIZE (1..MAX) OF Subtree OPTIONAL,
 *   ...}
 * ```
 *
 */
export class TotalRefresh {
    constructor(
        /**
         * @summary `sDSE`.
         * @public
         * @readonly
         */
        readonly sDSE: OPTIONAL<SDSEContent>,
        /**
         * @summary `subtree`.
         * @public
         * @readonly
         */
        readonly subtree: OPTIONAL<Subtree[]>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a TotalRefresh
     * @description
     *
     * This takes an `object` and converts it to a `TotalRefresh`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TotalRefresh`.
     * @returns {TotalRefresh}
     */
    public static _from_object(
        _o: { [_K in keyof TotalRefresh]: TotalRefresh[_K] }
    ): TotalRefresh {
        return new TotalRefresh(
            _o.sDSE,
            _o.subtree,
            _o._unrecognizedExtensionsList
        );
    }
}

/**
 * @summary The Leading Root Component Types of TotalRefresh
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TotalRefresh: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "sDSE",
        true,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec(
        "subtree",
        true,
        $.hasTag(_TagClass.universal, 17)
    ),
];

/**
 * @summary The Trailing Root Component Types of TotalRefresh
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TotalRefresh: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of TotalRefresh
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TotalRefresh: $.ComponentSpec[] = [];

let _cached_decoder_for_TotalRefresh: $.ASN1Decoder<TotalRefresh> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TotalRefresh
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TotalRefresh} The decoded data structure.
 */
export function _decode_TotalRefresh(el: _Element): TotalRefresh {
    if (!_cached_decoder_for_TotalRefresh) {
        _cached_decoder_for_TotalRefresh = function (
            el: _Element
        ): TotalRefresh {
            let sDSE: OPTIONAL<SDSEContent>;
            let subtree: OPTIONAL<Subtree[]>;
            let _unrecognizedExtensionsList: _Element[] = [];
            const callbacks: $.DecodingMap = {
                sDSE: (_el: _Element): void => {
                    sDSE = _decode_SDSEContent(_el);
                },
                subtree: (_el: _Element): void => {
                    subtree = $._decodeSetOf<Subtree>(() => _decode_Subtree)(
                        _el
                    );
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TotalRefresh,
                _extension_additions_list_spec_for_TotalRefresh,
                _root_component_type_list_2_spec_for_TotalRefresh,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new TotalRefresh(
                sDSE,
                subtree,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_TotalRefresh(el);
}

let _cached_encoder_for_TotalRefresh: $.ASN1Encoder<TotalRefresh> | null = null;

/**
 * @summary Encodes a(n) TotalRefresh into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TotalRefresh, encoded as an ASN.1 Element.
 */
export function _encode_TotalRefresh(
    value: TotalRefresh,
    elGetter: $.ASN1Encoder<TotalRefresh>
): _Element {
    if (!_cached_encoder_for_TotalRefresh) {
        _cached_encoder_for_TotalRefresh = function (
            value: TotalRefresh        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.sDSE === undefined
                                ? undefined
                                : _encode_SDSEContent(value.sDSE, $.DER),
                            /* IF_ABSENT  */ value.subtree === undefined
                                ? undefined
                                : $._encodeSetOf<Subtree>(
                                      () => _encode_Subtree,
                                      $.DER
                                  )(value.subtree, $.DER),
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
    return _cached_encoder_for_TotalRefresh(value, elGetter);
}


/* eslint-enable */
