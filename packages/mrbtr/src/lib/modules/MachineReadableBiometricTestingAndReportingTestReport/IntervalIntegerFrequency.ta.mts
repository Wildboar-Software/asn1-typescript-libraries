/* eslint-disable */
import {
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
 * @summary IntervalIntegerFrequency
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IntervalIntegerFrequency ::= SEQUENCE {
 *     lowerLimit  INTEGER,
 *     upperLimit  INTEGER,
 *     frequency   INTEGER
 * }
 * ```
 * 
 * @class
 */
export
class IntervalIntegerFrequency {
    constructor (
        /**
         * @summary `lowerLimit`.
         * @public
         * @readonly
         */
        readonly lowerLimit: INTEGER,
        /**
         * @summary `upperLimit`.
         * @public
         * @readonly
         */
        readonly upperLimit: INTEGER,
        /**
         * @summary `frequency`.
         * @public
         * @readonly
         */
        readonly frequency: INTEGER
    ) {}

    /**
     * @summary Restructures an object into a IntervalIntegerFrequency
     * @description
     * 
     * This takes an `object` and converts it to a `IntervalIntegerFrequency`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IntervalIntegerFrequency`.
     * @returns {IntervalIntegerFrequency}
     */
    public static _from_object (_o: { [_K in keyof (IntervalIntegerFrequency)]: (IntervalIntegerFrequency)[_K] }): IntervalIntegerFrequency {
        return new IntervalIntegerFrequency(_o.lowerLimit, _o.upperLimit, _o.frequency);
    }


}

/**
 * @summary The Leading Root Component Types of IntervalIntegerFrequency
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IntervalIntegerFrequency: $.ComponentSpec[] = [
    new $.ComponentSpec("lowerLimit", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("upperLimit", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("frequency", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of IntervalIntegerFrequency
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IntervalIntegerFrequency: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IntervalIntegerFrequency
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IntervalIntegerFrequency: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_IntervalIntegerFrequency: $.ASN1Decoder<IntervalIntegerFrequency> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IntervalIntegerFrequency
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IntervalIntegerFrequency (el: _Element): IntervalIntegerFrequency {
    if (!_cached_decoder_for_IntervalIntegerFrequency) { _cached_decoder_for_IntervalIntegerFrequency = function (el: _Element): IntervalIntegerFrequency {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("IntervalIntegerFrequency contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "lowerLimit";
    sequence[1].name = "upperLimit";
    sequence[2].name = "frequency";
    let lowerLimit!: INTEGER;
    let upperLimit!: INTEGER;
    let frequency!: INTEGER;
    lowerLimit = $._decodeInteger(sequence[0]);
    upperLimit = $._decodeInteger(sequence[1]);
    frequency = $._decodeInteger(sequence[2]);
    return new IntervalIntegerFrequency(
        lowerLimit,
        upperLimit,
        frequency,

    );
}; }
    return _cached_decoder_for_IntervalIntegerFrequency(el);
}

let _cached_encoder_for_IntervalIntegerFrequency: $.ASN1Encoder<IntervalIntegerFrequency> | null = null;

/**
 * @summary Encodes a(n) IntervalIntegerFrequency into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IntervalIntegerFrequency, encoded as an ASN.1 Element.
 */
export
function _encode_IntervalIntegerFrequency (value: IntervalIntegerFrequency, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IntervalIntegerFrequency) { _cached_encoder_for_IntervalIntegerFrequency = function (value: IntervalIntegerFrequency): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED  */ $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.lowerLimit, $.BER),
            /* REQUIRED  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.upperLimit, $.BER),
            /* REQUIRED  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.frequency, $.BER),
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_IntervalIntegerFrequency(value, elGetter);
}


/* eslint-enable */
