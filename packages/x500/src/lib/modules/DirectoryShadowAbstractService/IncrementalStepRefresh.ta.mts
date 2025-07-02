/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    IncrementalStepRefresh_sDSEChanges,
    _decode_IncrementalStepRefresh_sDSEChanges,
    _encode_IncrementalStepRefresh_sDSEChanges,
} from "../DirectoryShadowAbstractService/IncrementalStepRefresh-sDSEChanges.ta.mjs";
import {
    SubordinateChanges,
    _decode_SubordinateChanges,
    _encode_SubordinateChanges,
} from "../DirectoryShadowAbstractService/SubordinateChanges.ta.mjs";
/**
 * @summary IncrementalStepRefresh
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IncrementalStepRefresh ::= SEQUENCE {
 *   sDSEChanges
 *     CHOICE {add     [0]  SDSEContent,
 *             remove  NULL,
 *             modify  [1]  ContentChange,
 *             ...} OPTIONAL,
 *   subordinateUpdates  SEQUENCE SIZE (1..MAX) OF SubordinateChanges OPTIONAL }
 * ```
 *
 */
export class IncrementalStepRefresh {
    constructor(
        /**
         * @summary `sDSEChanges`.
         * @public
         * @readonly
         */
        readonly sDSEChanges: OPTIONAL<IncrementalStepRefresh_sDSEChanges>,
        /**
         * @summary `subordinateUpdates`.
         * @public
         * @readonly
         */
        readonly subordinateUpdates: OPTIONAL<SubordinateChanges[]>
    ) {}

    /**
     * @summary Restructures an object into a IncrementalStepRefresh
     * @description
     *
     * This takes an `object` and converts it to a `IncrementalStepRefresh`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IncrementalStepRefresh`.
     * @returns {IncrementalStepRefresh}
     */
    public static _from_object(
        _o: { [_K in keyof IncrementalStepRefresh]: IncrementalStepRefresh[_K] }
    ): IncrementalStepRefresh {
        return new IncrementalStepRefresh(
            _o.sDSEChanges,
            _o.subordinateUpdates
        );
    }
}

/**
 * @summary The Leading Root Component Types of IncrementalStepRefresh
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_IncrementalStepRefresh: $.ComponentSpec[] = [
    new $.ComponentSpec("sDSEChanges", true, $.not($.hasTag(_TagClass.universal, 16))),
    new $.ComponentSpec(
        "subordinateUpdates",
        true,
        $.hasTag(_TagClass.universal, 16)
    ),
];

/**
 * @summary The Trailing Root Component Types of IncrementalStepRefresh
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_IncrementalStepRefresh: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of IncrementalStepRefresh
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_IncrementalStepRefresh: $.ComponentSpec[] = [];

let _cached_decoder_for_IncrementalStepRefresh: $.ASN1Decoder<IncrementalStepRefresh> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IncrementalStepRefresh
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IncrementalStepRefresh} The decoded data structure.
 */
export function _decode_IncrementalStepRefresh(el: _Element): IncrementalStepRefresh {
    if (!_cached_decoder_for_IncrementalStepRefresh) {
        _cached_decoder_for_IncrementalStepRefresh = function (
            el: _Element
        ): IncrementalStepRefresh {
            let sDSEChanges: OPTIONAL<IncrementalStepRefresh_sDSEChanges>;
            let subordinateUpdates: OPTIONAL<SubordinateChanges[]>;
            const callbacks: $.DecodingMap = {
                sDSEChanges: (_el: _Element): void => {
                    sDSEChanges = _decode_IncrementalStepRefresh_sDSEChanges(
                        _el
                    );
                },
                subordinateUpdates: (_el: _Element): void => {
                    subordinateUpdates = $._decodeSequenceOf<SubordinateChanges>(
                        () => _decode_SubordinateChanges
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_IncrementalStepRefresh,
                _extension_additions_list_spec_for_IncrementalStepRefresh,
                _root_component_type_list_2_spec_for_IncrementalStepRefresh,
                undefined
            );
            return new IncrementalStepRefresh(
                sDSEChanges,
                subordinateUpdates
            );
        };
    }
    return _cached_decoder_for_IncrementalStepRefresh(el);
}

let _cached_encoder_for_IncrementalStepRefresh: $.ASN1Encoder<IncrementalStepRefresh> | null = null;

/**
 * @summary Encodes a(n) IncrementalStepRefresh into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IncrementalStepRefresh, encoded as an ASN.1 Element.
 */
export function _encode_IncrementalStepRefresh(
    value: IncrementalStepRefresh,
    elGetter: $.ASN1Encoder<IncrementalStepRefresh>
): _Element {
    if (!_cached_encoder_for_IncrementalStepRefresh) {
        _cached_encoder_for_IncrementalStepRefresh = function (
            value: IncrementalStepRefresh        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.sDSEChanges === undefined
                            ? undefined
                            : _encode_IncrementalStepRefresh_sDSEChanges(
                                  value.sDSEChanges,
                                  $.DER
                              ),
                        /* IF_ABSENT  */ value.subordinateUpdates === undefined
                            ? undefined
                            : $._encodeSequenceOf<SubordinateChanges>(
                                  () => _encode_SubordinateChanges,
                                  $.DER
                              )(value.subordinateUpdates, $.DER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_IncrementalStepRefresh(value, elGetter);
}


/* eslint-enable */
