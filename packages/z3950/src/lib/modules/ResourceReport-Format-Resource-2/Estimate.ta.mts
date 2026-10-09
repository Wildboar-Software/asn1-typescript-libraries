/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { StringOrNumeric, _decode_StringOrNumeric, _encode_StringOrNumeric } from "../Z39-50-APDU-2001/StringOrNumeric.ta.mjs";
// export { StringOrNumeric, _decode_StringOrNumeric, _encode_StringOrNumeric } from "../Z39-50-APDU-2001/StringOrNumeric.ta.mjs";
import { IntUnit, _decode_IntUnit, _encode_IntUnit } from "../Z39-50-APDU-2001/IntUnit.ta.mjs";
// export { IntUnit, _decode_IntUnit, _encode_IntUnit } from "../Z39-50-APDU-2001/IntUnit.ta.mjs";


/**
 * @summary Estimate
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Estimate ::= SEQUENCE {
 *     type    [1] StringOrNumeric,
 *     --Numeric values of 1-16 are the same as used in Resource-1.
 *     --See Z39.50-1995 Appendix 6, RSC.1
 *     value   [2] IMPLICIT IntUnit
 *     -- When expressing currency: unitSystem (of Unit) is 'z3950'
 *     -- (case insensitive), and unitType is 'iso4217-1990' (case insensitive).
 *     -- Unit is currency code from ISO 4217-1990
 * }
 * ```
 * 
 * @class
 */
export
class Estimate {
    /**
     * @summary `type_`.
     * @public
     * @readonly
     */
    readonly type_: StringOrNumeric;
    /**
     * @summary `value`.
     * @public
     * @readonly
     */
    readonly value: IntUnit;

    constructor (
        type_: StringOrNumeric,
        value: IntUnit
    ) {
        this.type_ = type_;
        this.value = value;
    }

    /**
     * @summary Restructures an object into a Estimate
     * @description
     * 
     * This takes an `object` and converts it to a `Estimate`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Estimate`.
     * @returns {Estimate}
     */
    public static _from_object (_o: { [_K in keyof (Estimate)]: (Estimate)[_K] }): Estimate {
        return new Estimate(_o.type_, _o.value);
    }


}

/**
 * @summary The Leading Root Component Types of Estimate
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Estimate: $.ComponentSpec[] = [
    new $.ComponentSpec("type", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("value", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of Estimate
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Estimate: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Estimate
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Estimate: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Estimate: $.ASN1Decoder<Estimate> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Estimate
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Estimate (el: _Element): Estimate {
    if (!_cached_decoder_for_Estimate) { _cached_decoder_for_Estimate = function (el: _Element): Estimate {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("Estimate contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "type";
    sequence[1].name = "value";
    let type_!: StringOrNumeric;
    let value!: IntUnit;
    type_ = $._decode_explicit<StringOrNumeric>(() => _decode_StringOrNumeric)(sequence[0]);
    value = $._decode_implicit<IntUnit>(() => _decode_IntUnit)(sequence[1]);
    return new Estimate(
        type_,
        value,

    );
}; }
    return _cached_decoder_for_Estimate(el);
}

let _cached_encoder_for_Estimate: $.ASN1Encoder<Estimate> | null = null;

/**
 * @summary Encodes a(n) Estimate into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Estimate, encoded as an ASN.1 Element.
 */
export
function _encode_Estimate (value: Estimate, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Estimate) { _cached_encoder_for_Estimate = function (value: Estimate, elGetter: $.ASN1Encoder<Estimate>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_StringOrNumeric, $.BER)(value.type_, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_IntUnit, $.BER)(value.value, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_Estimate(value, elGetter);
}


/* eslint-enable */
