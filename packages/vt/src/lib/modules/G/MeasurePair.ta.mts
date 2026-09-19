/* eslint-disable */
import {
    OPTIONAL,
    INTEGER,
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
 * @summary MeasurePair
 * @description
 *
 * Origin or size of a block or field-element: `xValue` required,
 * `yValue` optional (omit when the Y dimension is not defined).
 * ISO/IEC 9040:1997 §13.1.2, §13.1.3; ISO/IEC 9041-1:1997 §12.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MeasurePair ::= SEQUENCE {
 *     xValue [0] IMPLICIT INTEGER,
 *     yValue [1] IMPLICIT INTEGER OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class MeasurePair {
    constructor (
        /**
         * @summary `xValue`.
         * @description
         * X origin or width. ISO/IEC 9040:1997 §13.1.2.
         * @public
         * @readonly
         */
        readonly xValue: INTEGER,
        /**
         * @summary `yValue`.
         * @description
         * Y origin or depth. Omitted for a one-dimensional Y-array.
         * ISO/IEC 9040:1997 §13.1.2.
         * @public
         * @readonly
         */
        readonly yValue: OPTIONAL<INTEGER>
    ) {}

    /**
     * @summary Restructures an object into a MeasurePair
     * @description
     * 
     * This takes an `object` and converts it to a `MeasurePair`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MeasurePair`.
     * @returns {MeasurePair}
     */
    public static _from_object (_o: { [_K in keyof (MeasurePair)]: (MeasurePair)[_K] }): MeasurePair {
        return new MeasurePair(_o.xValue, _o.yValue);
    }


}

/**
 * @summary The Leading Root Component Types of MeasurePair
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MeasurePair: $.ComponentSpec[] = [
    new $.ComponentSpec("xValue", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("yValue", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of MeasurePair
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MeasurePair: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MeasurePair
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MeasurePair: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MeasurePair: $.ASN1Decoder<MeasurePair> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MeasurePair
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MeasurePair (el: _Element): MeasurePair {
    if (!_cached_decoder_for_MeasurePair) { _cached_decoder_for_MeasurePair = function (el: _Element): MeasurePair {
    let xValue!: INTEGER;
    let yValue: OPTIONAL<INTEGER>;
    const callbacks: $.DecodingMap = {
        "xValue": (_el: _Element): void => { xValue = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "yValue": (_el: _Element): void => { yValue = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MeasurePair,
        _extension_additions_list_spec_for_MeasurePair,
        _root_component_type_list_2_spec_for_MeasurePair,
        undefined,
    );
    return new MeasurePair(
        xValue,
        yValue
    );
}; }
    return _cached_decoder_for_MeasurePair(el);
}

let _cached_encoder_for_MeasurePair: $.ASN1Encoder<MeasurePair> | null = null;

/**
 * @summary Encodes a(n) MeasurePair into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MeasurePair, encoded as an ASN.1 Element.
 */
export
function _encode_MeasurePair (value: MeasurePair, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MeasurePair) { _cached_encoder_for_MeasurePair = function (value: MeasurePair): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.xValue, $.BER),
            /* IF_ABSENT  */ ((value.yValue === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.yValue, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_MeasurePair(value, elGetter);
}


/* eslint-enable */
