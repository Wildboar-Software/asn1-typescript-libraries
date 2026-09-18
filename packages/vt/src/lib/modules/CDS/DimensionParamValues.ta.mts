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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DimensionParamValues_bound, _decode_DimensionParamValues_bound, _encode_DimensionParamValues_bound } from "../CDS/DimensionParamValues-bound.ta.mjs";
// export { DimensionParamValues_bound, _decode_DimensionParamValues_bound, _encode_DimensionParamValues_bound } from "../CDS/DimensionParamValues-bound.ta.mjs";
import { DimensionParamValues_addressing, _decode_DimensionParamValues_addressing, _encode_DimensionParamValues_addressing } from "../CDS/DimensionParamValues-addressing.ta.mjs";
// export { DimensionParamValues_addressing, DimensionParamValues_addressing_noConstraint /* IMPORTED_LONG_NAMED_INTEGER */, noConstraint /* IMPORTED_SHORT_NAMED_INTEGER */, DimensionParamValues_addressing_higherOnly /* IMPORTED_LONG_NAMED_INTEGER */, higherOnly /* IMPORTED_SHORT_NAMED_INTEGER */, DimensionParamValues_addressing_notPermitted /* IMPORTED_LONG_NAMED_INTEGER */, notPermitted /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_DimensionParamValues_addressing, _encode_DimensionParamValues_addressing } from "../CDS/DimensionParamValues-addressing.ta.mjs";
import { DimensionParamValues_window, _decode_DimensionParamValues_window, _encode_DimensionParamValues_window } from "../CDS/DimensionParamValues-window.ta.mjs";
// export { DimensionParamValues_window, _decode_DimensionParamValues_window, _encode_DimensionParamValues_window } from "../CDS/DimensionParamValues-window.ta.mjs";


/**
 * @summary DimensionParamValues
 * @description
 *
 * Selected addressing VTE-parameters for one defined dimension.
 * `absolute`: `true` = `"yes"`; `false` or absent = `"no"`.
 * ISO/IEC 9040:1997 §18.2.3; ISO/IEC 9041-1:1997 §12.3.3.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DimensionParamValues ::= SEQUENCE {
 *     bound       [0] CHOICE { unbounded NULL, limit INTEGER } OPTIONAL,
 *     addressing  [1] IMPLICIT INTEGER {
 *         noConstraint (0),
 *         higherOnly   (1),
 *         notPermitted (2)
 *     } OPTIONAL,
 *     absolute    [2] IMPLICIT BOOLEAN OPTIONAL, -- true = "yes", false or absent = "no"
 *     window      [3] CHOICE { unbounded NULL, limit INTEGER } OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class DimensionParamValues {
    constructor (
        /**
         * @summary `bound`.
         * @description
         * Selected `d-bound`: unbounded or integer limit. X default
         * unbounded. ISO/IEC 9040:1997 §18.2.3.
         * @public
         * @readonly
         */
        readonly bound: OPTIONAL<DimensionParamValues_bound>,
        /**
         * @summary `addressing`.
         * @description
         * Selected `d-addressing`. Default `"higher only"`. ISO/IEC
         * 9040:1997 §18.2.3.
         * @public
         * @readonly
         */
        readonly addressing: OPTIONAL<DimensionParamValues_addressing>,
        /**
         * @summary `absolute`.
         * @description
         * Selected `d-absolute`. `true` = `"yes"`; `false` or absent
         * = `"no"` (default). ISO/IEC 9040:1997 §18.2.3; ISO/IEC
         * 9041-1:1997 §12.3.3.
         * @public
         * @readonly
         */
        readonly absolute: OPTIONAL<BOOLEAN>,
        /**
         * @summary `window`.
         * @description
         * Selected update-window-size. Default 0 if bound unbounded
         * (X: no backward movement); else default = bound. Y/Z
         * default 1 when that bound is unbounded. Unused (assumes
         * bound default) for X/Y when blocks or fields are selected.
         * ISO/IEC 9040:1997 §18.2.3, §19.1.1.3.
         * @public
         * @readonly
         */
        readonly window: OPTIONAL<DimensionParamValues_window>
    ) {}

    /**
     * @summary Restructures an object into a DimensionParamValues
     * @description
     * 
     * This takes an `object` and converts it to a `DimensionParamValues`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DimensionParamValues`.
     * @returns {DimensionParamValues}
     */
    public static _from_object (_o: { [_K in keyof (DimensionParamValues)]: (DimensionParamValues)[_K] }): DimensionParamValues {
        return new DimensionParamValues(_o.bound, _o.addressing, _o.absolute, _o.window);
    }


}

/**
 * @summary The Leading Root Component Types of DimensionParamValues
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DimensionParamValues: $.ComponentSpec[] = [
    new $.ComponentSpec("bound", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("addressing", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("absolute", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("window", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of DimensionParamValues
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DimensionParamValues: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DimensionParamValues
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DimensionParamValues: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DimensionParamValues: $.ASN1Decoder<DimensionParamValues> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DimensionParamValues
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DimensionParamValues (el: _Element): DimensionParamValues {
    if (!_cached_decoder_for_DimensionParamValues) { _cached_decoder_for_DimensionParamValues = function (el: _Element): DimensionParamValues {
    let bound: OPTIONAL<DimensionParamValues_bound>;
    let addressing: OPTIONAL<DimensionParamValues_addressing>;
    let absolute: OPTIONAL<BOOLEAN>;
    let window: OPTIONAL<DimensionParamValues_window>;
    const callbacks: $.DecodingMap = {
        "bound": (_el: _Element): void => { bound = $._decode_explicit<DimensionParamValues_bound>(() => _decode_DimensionParamValues_bound)(_el); },
        "addressing": (_el: _Element): void => { addressing = $._decode_implicit<DimensionParamValues_addressing>(() => _decode_DimensionParamValues_addressing)(_el); },
        "absolute": (_el: _Element): void => { absolute = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "window": (_el: _Element): void => { window = $._decode_explicit<DimensionParamValues_window>(() => _decode_DimensionParamValues_window)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DimensionParamValues,
        _extension_additions_list_spec_for_DimensionParamValues,
        _root_component_type_list_2_spec_for_DimensionParamValues,
        undefined,
    );
    return new DimensionParamValues(
        bound,
        addressing,
        absolute,
        window
    );
}; }
    return _cached_decoder_for_DimensionParamValues(el);
}

let _cached_encoder_for_DimensionParamValues: $.ASN1Encoder<DimensionParamValues> | null = null;

/**
 * @summary Encodes a(n) DimensionParamValues into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DimensionParamValues, encoded as an ASN.1 Element.
 */
export
function _encode_DimensionParamValues (value: DimensionParamValues, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DimensionParamValues) { _cached_encoder_for_DimensionParamValues = function (value: DimensionParamValues): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.bound === undefined) ? undefined : $._encode_explicit(_TagClass.context, 0, () => _encode_DimensionParamValues_bound, $.BER)(value.bound, $.BER)),
            /* IF_ABSENT  */ ((value.addressing === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_DimensionParamValues_addressing, $.BER)(value.addressing, $.BER)),
            /* IF_ABSENT  */ ((value.absolute === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeBoolean, $.BER)(value.absolute, $.BER)),
            /* IF_ABSENT  */ ((value.window === undefined) ? undefined : $._encode_explicit(_TagClass.context, 3, () => _encode_DimensionParamValues_window, $.BER)(value.window, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DimensionParamValues(value, elGetter);
}


/* eslint-enable */
