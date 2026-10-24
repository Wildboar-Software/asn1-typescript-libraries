/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CounterID, _decode_CounterID, _encode_CounterID } from "../IN-SSF-SCF-datatypes/CounterID.ta.mjs";
// export { CounterID, _decode_CounterID, _encode_CounterID } from "../IN-SSF-SCF-datatypes/CounterID.ta.mjs";
import { Integer4, _decode_Integer4, _encode_Integer4 } from "../IN-common-datatypes/Integer4.ta.mjs";
// export { Integer4, _decode_Integer4, _encode_Integer4 } from "../IN-common-datatypes/Integer4.ta.mjs";


/**
 * @summary CounterAndValue
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CounterAndValue ::= SEQUENCE {
 *   counterID     [0]  CounterID,
 *   counterValue  [1]  Integer4
 * }
 * ```
 * 
 * @class
 */
export
class CounterAndValue {
    /**
     * @summary `counterID`.
     * @public
     * @readonly
     */
    readonly counterID: CounterID;
    /**
     * @summary `counterValue`.
     * @public
     * @readonly
     */
    readonly counterValue: Integer4;

    constructor (
        counterID: CounterID,
        counterValue: Integer4
    ) {
        this.counterID = counterID;
        this.counterValue = counterValue;
    }

    /**
     * @summary Restructures an object into a CounterAndValue
     * @description
     * 
     * This takes an `object` and converts it to a `CounterAndValue`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CounterAndValue`.
     * @returns {CounterAndValue}
     */
    public static _from_object (_o: { [_K in keyof (CounterAndValue)]: (CounterAndValue)[_K] }): CounterAndValue {
        return new CounterAndValue(_o.counterID, _o.counterValue);
    }


}

/**
 * @summary The Leading Root Component Types of CounterAndValue
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CounterAndValue: $.ComponentSpec[] = [
    new $.ComponentSpec("counterID", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("counterValue", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of CounterAndValue
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CounterAndValue: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CounterAndValue
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CounterAndValue: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CounterAndValue: $.ASN1Decoder<CounterAndValue> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CounterAndValue
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CounterAndValue (el: _Element): CounterAndValue {
    if (!_cached_decoder_for_CounterAndValue) { _cached_decoder_for_CounterAndValue = function (el: _Element): CounterAndValue {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("CounterAndValue contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "counterID";
    sequence[1].name = "counterValue";
    const counterID: CounterID = $._decode_implicit<CounterID>(() => _decode_CounterID)(sequence[0]);
    const counterValue: Integer4 = $._decode_implicit<Integer4>(() => _decode_Integer4)(sequence[1]);
    return new CounterAndValue(
        counterID,
        counterValue,

    );
}; }
    return _cached_decoder_for_CounterAndValue(el);
}

let _cached_encoder_for_CounterAndValue: $.ASN1Encoder<CounterAndValue> | null = null;

/**
 * @summary Encodes a(n) CounterAndValue into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CounterAndValue, encoded as an ASN.1 Element.
 */
export
function _encode_CounterAndValue (value: CounterAndValue, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CounterAndValue) { _cached_encoder_for_CounterAndValue = function (value: CounterAndValue, elGetter: $.ASN1Encoder<CounterAndValue>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_CounterID, $.BER)(value.counterID, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_Integer4, $.BER)(value.counterValue, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_CounterAndValue(value, elGetter);
}


/* eslint-enable */
