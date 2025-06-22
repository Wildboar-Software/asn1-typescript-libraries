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
} from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Time24
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Time24 ::= SEQUENCE {hour    INTEGER(0..23),
 *                      minute  INTEGER(0..59)
 * }
 * ```
 * 
 * @class
 */
export
class Time24 {
    constructor (
        /**
         * @summary `hour`.
         * @public
         * @readonly
         */
        readonly hour: INTEGER,
        /**
         * @summary `minute`.
         * @public
         * @readonly
         */
        readonly minute: INTEGER
    ) {}

    /**
     * @summary Restructures an object into a Time24
     * @description
     * 
     * This takes an `object` and converts it to a `Time24`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Time24`.
     * @returns {Time24}
     */
    public static _from_object (_o: { [_K in keyof (Time24)]: (Time24)[_K] }): Time24 {
        return new Time24(_o.hour, _o.minute);
    }


}

/**
 * @summary The Leading Root Component Types of Time24
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Time24: $.ComponentSpec[] = [
    new $.ComponentSpec("hour", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("minute", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of Time24
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Time24: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Time24
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Time24: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Time24: $.ASN1Decoder<Time24> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Time24
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Time24} The decoded data structure.
 */
export
function _decode_Time24 (el: _Element) {
    if (!_cached_decoder_for_Time24) { _cached_decoder_for_Time24 = function (el: _Element): Time24 {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("Time24 contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "hour";
    sequence[1].name = "minute";
    let hour!: INTEGER;
    let minute!: INTEGER;
    hour = $._decodeInteger(sequence[0]);
    minute = $._decodeInteger(sequence[1]);
    return new Time24(
        hour,
        minute,

    );
}; }
    return _cached_decoder_for_Time24(el);
}

let _cached_encoder_for_Time24: $.ASN1Encoder<Time24> | null = null;

/**
 * @summary Encodes a(n) Time24 into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Time24, encoded as an ASN.1 Element.
 */
export
function _encode_Time24 (value: Time24, elGetter: $.ASN1Encoder<Time24>) {
    if (!_cached_encoder_for_Time24) { _cached_encoder_for_Time24 = function (value: Time24): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeInteger(value.hour, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.minute, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Time24(value, elGetter);
}


/* eslint-enable */
