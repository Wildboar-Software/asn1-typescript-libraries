/* eslint-disable */
import {
    REAL,
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



/**
 * @summary ExpressionPointRealReal
 * @description
 *
 * One CDF point of a real-valued variable: proportion of values ≤
 * `xValue` is `yValue` (Clause 6.4.4.3.3).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExpressionPointRealReal ::= SEQUENCE {
 *     xValue  REAL,
 *     yValue  REAL
 * }
 * ```
 * 
 * @class
 */
export
class ExpressionPointRealReal {
    constructor (
        /**
         * @summary `xValue`.
         * @description
         *
         * Score (or other real) at this CDF point (Clause 6.4.4.3.3).
         *
         * @public
         * @readonly
         */
        readonly xValue: REAL,
        /**
         * @summary `yValue`.
         * @description
         *
         * Proportion of values ≤ `xValue` (Clause 6.4.4.3.3).
         *
         * @public
         * @readonly
         */
        readonly yValue: REAL
    ) {}

    /**
     * @summary Restructures an object into a ExpressionPointRealReal
     * @description
     * 
     * This takes an `object` and converts it to a `ExpressionPointRealReal`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ExpressionPointRealReal`.
     * @returns {ExpressionPointRealReal}
     */
    public static _from_object (_o: { [_K in keyof (ExpressionPointRealReal)]: (ExpressionPointRealReal)[_K] }): ExpressionPointRealReal {
        return new ExpressionPointRealReal(_o.xValue, _o.yValue);
    }


}

/**
 * @summary The Leading Root Component Types of ExpressionPointRealReal
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ExpressionPointRealReal: $.ComponentSpec[] = [
    new $.ComponentSpec("xValue", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("yValue", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of ExpressionPointRealReal
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ExpressionPointRealReal: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ExpressionPointRealReal
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ExpressionPointRealReal: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ExpressionPointRealReal: $.ASN1Decoder<ExpressionPointRealReal> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ExpressionPointRealReal
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ExpressionPointRealReal (el: _Element): ExpressionPointRealReal {
    if (!_cached_decoder_for_ExpressionPointRealReal) { _cached_decoder_for_ExpressionPointRealReal = function (el: _Element): ExpressionPointRealReal {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("ExpressionPointRealReal contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "xValue";
    sequence[1].name = "yValue";
    let xValue!: REAL;
    let yValue!: REAL;
    xValue = $._decodeReal(sequence[0]);
    yValue = $._decodeReal(sequence[1]);
    return new ExpressionPointRealReal(
        xValue,
        yValue,

    );
}; }
    return _cached_decoder_for_ExpressionPointRealReal(el);
}

let _cached_encoder_for_ExpressionPointRealReal: $.ASN1Encoder<ExpressionPointRealReal> | null = null;

/**
 * @summary Encodes a(n) ExpressionPointRealReal into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExpressionPointRealReal, encoded as an ASN.1 Element.
 */
export
function _encode_ExpressionPointRealReal (value: ExpressionPointRealReal, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ExpressionPointRealReal) { _cached_encoder_for_ExpressionPointRealReal = function (value: ExpressionPointRealReal): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED  */ $._encode_implicit(_TagClass.context, 0, () => $._encodeReal, $.BER)(value.xValue, $.BER),
            /* REQUIRED  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeReal, $.BER)(value.yValue, $.BER),
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ExpressionPointRealReal(value, elGetter);
}


/* eslint-enable */
