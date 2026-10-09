/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Range
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Range ::= SEQUENCE {
 *     startingPosition    [1] IMPLICIT INTEGER,
 *     numberOfRecords     [2] IMPLICIT INTEGER
 * }
 * ```
 * 
 * @class
 */
export
class Range {
    /**
     * @summary `startingPosition`.
     * @public
     * @readonly
     */
    readonly startingPosition: INTEGER;
    /**
     * @summary `numberOfRecords`.
     * @public
     * @readonly
     */
    readonly numberOfRecords: INTEGER;

    constructor (
        startingPosition: INTEGER,
        numberOfRecords: INTEGER
    ) {
        this.startingPosition = startingPosition;
        this.numberOfRecords = numberOfRecords;
    }

    /**
     * @summary Restructures an object into a Range
     * @description
     * 
     * This takes an `object` and converts it to a `Range`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Range`.
     * @returns {Range}
     */
    public static _from_object (_o: { [_K in keyof (Range)]: (Range)[_K] }): Range {
        return new Range(_o.startingPosition, _o.numberOfRecords);
    }


}

/**
 * @summary The Leading Root Component Types of Range
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Range: $.ComponentSpec[] = [
    new $.ComponentSpec("startingPosition", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("numberOfRecords", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of Range
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Range: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Range
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Range: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Range: $.ASN1Decoder<Range> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Range
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Range (el: _Element): Range {
    if (!_cached_decoder_for_Range) { _cached_decoder_for_Range = function (el: _Element): Range {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("Range contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "startingPosition";
    sequence[1].name = "numberOfRecords";
    let startingPosition!: INTEGER;
    let numberOfRecords!: INTEGER;
    startingPosition = $._decode_implicit<INTEGER>(() => $._decodeInteger)(sequence[0]);
    numberOfRecords = $._decode_implicit<INTEGER>(() => $._decodeInteger)(sequence[1]);
    return new Range(
        startingPosition,
        numberOfRecords,

    );
}; }
    return _cached_decoder_for_Range(el);
}

let _cached_encoder_for_Range: $.ASN1Encoder<Range> | null = null;

/**
 * @summary Encodes a(n) Range into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Range, encoded as an ASN.1 Element.
 */
export
function _encode_Range (value: Range, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Range) { _cached_encoder_for_Range = function (value: Range, elGetter: $.ASN1Encoder<Range>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.startingPosition, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.numberOfRecords, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_Range(value, elGetter);
}


/* eslint-enable */
