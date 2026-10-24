/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type INTEGER,
    type OCTET_STRING,
    ASN1OverflowError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary GenericUserValue
 * @description
 *
 * Reserved for further extensions introduced in GSM 03.40 (ECMA-325
 * §E.1.3.1.8). The standard does not define `parameterValue` or
 * `genericUserData`.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-325/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GenericUserValue ::= SEQUENCE {
 *     parameterValue INTEGER (0..255),
 *     genericUserData OCTET STRING
 * }
 * ```
 * 
 * @class
 */
export
class GenericUserValue {
    /**
     * @summary `parameterValue`.
     * @description
     *
     * Integer 0..255. ECMA-325 §E.1.3.1.8 does not define it. The header is
     * reserved for GSM 03.40 extensions.
     * @public
     * @readonly
     */
    readonly parameterValue: INTEGER;
    /**
     * @summary `genericUserData`.
     * @description
     *
     * ECMA-325 §E.1.3.1.8 does not define these octets. The header is reserved
     * for GSM 03.40 extensions.
     * @public
     * @readonly
     */
    readonly genericUserData: OCTET_STRING;

    constructor (
        parameterValue: INTEGER,
        genericUserData: OCTET_STRING
    ) {
        this.parameterValue = parameterValue;
        this.genericUserData = genericUserData;
    
        if ((typeof parameterValue === "bigint" ? (parameterValue < 0n || parameterValue > 255n) : (parameterValue < 0 || parameterValue > 255))) {
            throw new ASN1OverflowError("GenericUserValue.parameterValue violates INTEGER constraint");
        }
    }

    /**
     * @summary Restructures an object into a GenericUserValue
     * @description
     * 
     * This takes an `object` and converts it to a `GenericUserValue`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GenericUserValue`.
     * @returns {GenericUserValue}
     */
    public static _from_object (_o: { [_K in keyof (GenericUserValue)]: (GenericUserValue)[_K] }): GenericUserValue {
        return new GenericUserValue(_o.parameterValue, _o.genericUserData);
    }

}

/**
 * @summary The Leading Root Component Types of GenericUserValue
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GenericUserValue: $.ComponentSpec[] = [
    new $.ComponentSpec("parameterValue", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("genericUserData", false, $.hasTag(_TagClass.universal, 4))
];

/**
 * @summary The Trailing Root Component Types of GenericUserValue
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GenericUserValue: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GenericUserValue
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GenericUserValue: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GenericUserValue: $.ASN1Decoder<GenericUserValue> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GenericUserValue
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GenericUserValue (el: _Element): GenericUserValue {
    if (!_cached_decoder_for_GenericUserValue) { _cached_decoder_for_GenericUserValue = function (el: _Element): GenericUserValue {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("GenericUserValue contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "parameterValue";
    sequence[1].name = "genericUserData";
    const parameterValue: INTEGER = $._decodeInteger(sequence[0]);
    const genericUserData: OCTET_STRING = $._decodeOctetString(sequence[1]);
    return new GenericUserValue(
        parameterValue,
        genericUserData,

    );
}; }
    return _cached_decoder_for_GenericUserValue(el);
}

let _cached_encoder_for_GenericUserValue: $.ASN1Encoder<GenericUserValue> | null = null;

/**
 * @summary Encodes a(n) GenericUserValue into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GenericUserValue, encoded as an ASN.1 Element.
 */
export
function _encode_GenericUserValue (value: GenericUserValue, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GenericUserValue) { _cached_encoder_for_GenericUserValue = function (value: GenericUserValue, _elGetter: $.ASN1Encoder<GenericUserValue>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encodeInteger(value.parameterValue, $.BER),
        /* REQUIRED   */ $._encodeOctetString(value.genericUserData, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_GenericUserValue(value, elGetter);
}

/* eslint-enable */
