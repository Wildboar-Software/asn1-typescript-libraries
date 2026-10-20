/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
    REAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AoCCostInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AoCCostInformation ::= SEQUENCE {
 *    accumulatedCost   [0] IMPLICIT REAL,
 *    incrementalCost   [1] IMPLICIT REAL,
 *    currencyCode      [2] IMPLICIT INTEGER}
 * ```
 * 
 * @class
 */
export
class AoCCostInformation {
    /**
     * @summary `accumulatedCost`.
     * @public
     * @readonly
     */
    readonly accumulatedCost: REAL;
    /**
     * @summary `incrementalCost`.
     * @public
     * @readonly
     */
    readonly incrementalCost: REAL;
    /**
     * @summary `currencyCode`.
     * @public
     * @readonly
     */
    readonly currencyCode: INTEGER;

    constructor (
        accumulatedCost: REAL,
        incrementalCost: REAL,
        currencyCode: INTEGER
    ) {
        this.accumulatedCost = accumulatedCost;
        this.incrementalCost = incrementalCost;
        this.currencyCode = currencyCode;
    }

    /**
     * @summary Restructures an object into a AoCCostInformation
     * @description
     * 
     * This takes an `object` and converts it to a `AoCCostInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AoCCostInformation`.
     * @returns {AoCCostInformation}
     */
    public static _from_object (_o: { [_K in keyof (AoCCostInformation)]: (AoCCostInformation)[_K] }): AoCCostInformation {
        return new AoCCostInformation(_o.accumulatedCost, _o.incrementalCost, _o.currencyCode);
    }


}

/**
 * @summary The Leading Root Component Types of AoCCostInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AoCCostInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("accumulatedCost", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("incrementalCost", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("currencyCode", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of AoCCostInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AoCCostInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AoCCostInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AoCCostInformation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AoCCostInformation: $.ASN1Decoder<AoCCostInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AoCCostInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AoCCostInformation (el: _Element): AoCCostInformation {
    if (!_cached_decoder_for_AoCCostInformation) { _cached_decoder_for_AoCCostInformation = function (el: _Element): AoCCostInformation {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("AoCCostInformation contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "accumulatedCost";
    sequence[1].name = "incrementalCost";
    sequence[2].name = "currencyCode";
    let accumulatedCost!: REAL;
    let incrementalCost!: REAL;
    let currencyCode!: INTEGER;
    accumulatedCost = $._decode_implicit<REAL>(() => $._decodeReal)(sequence[0]);
    incrementalCost = $._decode_implicit<REAL>(() => $._decodeReal)(sequence[1]);
    currencyCode = $._decode_implicit<INTEGER>(() => $._decodeInteger)(sequence[2]);
    return new AoCCostInformation(
        accumulatedCost,
        incrementalCost,
        currencyCode,

    );
}; }
    return _cached_decoder_for_AoCCostInformation(el);
}

let _cached_encoder_for_AoCCostInformation: $.ASN1Encoder<AoCCostInformation> | null = null;

/**
 * @summary Encodes a(n) AoCCostInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AoCCostInformation, encoded as an ASN.1 Element.
 */
export
function _encode_AoCCostInformation (value: AoCCostInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AoCCostInformation) { _cached_encoder_for_AoCCostInformation = function (value: AoCCostInformation, elGetter: $.ASN1Encoder<AoCCostInformation>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeReal, $.BER)(value.accumulatedCost, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeReal, $.BER)(value.incrementalCost, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.currencyCode, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_AoCCostInformation(value, elGetter);
}


/* eslint-enable */
