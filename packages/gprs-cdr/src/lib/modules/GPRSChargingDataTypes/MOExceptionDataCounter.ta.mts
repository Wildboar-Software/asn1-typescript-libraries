/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
    OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MOExceptionDataCounter
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MOExceptionDataCounter ::= SEQUENCE {
 *    counterValue       [0] IMPLICIT INTEGER,
 *    counterTimestamp   [1] IMPLICIT OCTET STRING ( SIZE( 9 ) )}
 * ```
 * 
 * @class
 */
export
class MOExceptionDataCounter {
    /**
     * @summary `counterValue`.
     * @public
     * @readonly
     */
    readonly counterValue: INTEGER;
    /**
     * @summary `counterTimestamp`.
     * @public
     * @readonly
     */
    readonly counterTimestamp: OCTET_STRING;

    constructor (
        counterValue: INTEGER,
        counterTimestamp: OCTET_STRING
    ) {
        this.counterValue = counterValue;
        this.counterTimestamp = counterTimestamp;
    
        if ((this.counterTimestamp.length !== 9)) {
            throw new ASN1SizeError("MOExceptionDataCounter.counterTimestamp violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a MOExceptionDataCounter
     * @description
     * 
     * This takes an `object` and converts it to a `MOExceptionDataCounter`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MOExceptionDataCounter`.
     * @returns {MOExceptionDataCounter}
     */
    public static _from_object (_o: { [_K in keyof (MOExceptionDataCounter)]: (MOExceptionDataCounter)[_K] }): MOExceptionDataCounter {
        return new MOExceptionDataCounter(_o.counterValue, _o.counterTimestamp);
    }


}

/**
 * @summary The Leading Root Component Types of MOExceptionDataCounter
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MOExceptionDataCounter: $.ComponentSpec[] = [
    new $.ComponentSpec("counterValue", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("counterTimestamp", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of MOExceptionDataCounter
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MOExceptionDataCounter: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MOExceptionDataCounter
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MOExceptionDataCounter: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MOExceptionDataCounter: $.ASN1Decoder<MOExceptionDataCounter> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MOExceptionDataCounter
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MOExceptionDataCounter (el: _Element): MOExceptionDataCounter {
    if (!_cached_decoder_for_MOExceptionDataCounter) { _cached_decoder_for_MOExceptionDataCounter = function (el: _Element): MOExceptionDataCounter {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("MOExceptionDataCounter contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "counterValue";
    sequence[1].name = "counterTimestamp";
    let counterValue!: INTEGER;
    let counterTimestamp!: OCTET_STRING;
    counterValue = $._decode_implicit<INTEGER>(() => $._decodeInteger)(sequence[0]);
    counterTimestamp = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(sequence[1]);
    return new MOExceptionDataCounter(
        counterValue,
        counterTimestamp,

    );
}; }
    return _cached_decoder_for_MOExceptionDataCounter(el);
}

let _cached_encoder_for_MOExceptionDataCounter: $.ASN1Encoder<MOExceptionDataCounter> | null = null;

/**
 * @summary Encodes a(n) MOExceptionDataCounter into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MOExceptionDataCounter, encoded as an ASN.1 Element.
 */
export
function _encode_MOExceptionDataCounter (value: MOExceptionDataCounter, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MOExceptionDataCounter) { _cached_encoder_for_MOExceptionDataCounter = function (value: MOExceptionDataCounter, _elGetter: $.ASN1Encoder<MOExceptionDataCounter>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.counterValue, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.counterTimestamp, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_MOExceptionDataCounter(value, elGetter);
}


/* eslint-enable */
