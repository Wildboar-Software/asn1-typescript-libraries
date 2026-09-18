/* eslint-disable */
import {
    OPTIONAL,
    BIT_STRING,
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
 * @summary ParameterValues_defaultCOinitialValue
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ParameterValues-defaultCOinitialValue ::= SEQUENCE {
 *     value [0] IMPLICIT BIT STRING,
 *     mask  [1] IMPLICIT BIT STRING OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ParameterValues_defaultCOinitialValue {
    constructor (
        /**
         * @summary `value`.
         * @public
         * @readonly
         */
        readonly value: BIT_STRING,
        /**
         * @summary `mask`.
         * @public
         * @readonly
         */
        readonly mask: OPTIONAL<BIT_STRING>
    ) {}

    /**
     * @summary Restructures an object into a ParameterValues_defaultCOinitialValue
     * @description
     * 
     * This takes an `object` and converts it to a `ParameterValues_defaultCOinitialValue`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ParameterValues_defaultCOinitialValue`.
     * @returns {ParameterValues_defaultCOinitialValue}
     */
    public static _from_object (_o: { [_K in keyof (ParameterValues_defaultCOinitialValue)]: (ParameterValues_defaultCOinitialValue)[_K] }): ParameterValues_defaultCOinitialValue {
        return new ParameterValues_defaultCOinitialValue(_o.value, _o.mask);
    }


}

/**
 * @summary The Leading Root Component Types of ParameterValues_defaultCOinitialValue
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ParameterValues_defaultCOinitialValue: $.ComponentSpec[] = [
    new $.ComponentSpec("value", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("mask", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of ParameterValues_defaultCOinitialValue
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ParameterValues_defaultCOinitialValue: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ParameterValues_defaultCOinitialValue
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ParameterValues_defaultCOinitialValue: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ParameterValues_defaultCOinitialValue: $.ASN1Decoder<ParameterValues_defaultCOinitialValue> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ParameterValues_defaultCOinitialValue
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ParameterValues_defaultCOinitialValue (el: _Element): ParameterValues_defaultCOinitialValue {
    if (!_cached_decoder_for_ParameterValues_defaultCOinitialValue) { _cached_decoder_for_ParameterValues_defaultCOinitialValue = function (el: _Element): ParameterValues_defaultCOinitialValue {
    let value!: BIT_STRING;
    let mask: OPTIONAL<BIT_STRING>;
    const callbacks: $.DecodingMap = {
        "value": (_el: _Element): void => { value = $._decode_implicit<BIT_STRING>(() => $._decodeBitString)(_el); },
        "mask": (_el: _Element): void => { mask = $._decode_implicit<BIT_STRING>(() => $._decodeBitString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ParameterValues_defaultCOinitialValue,
        _extension_additions_list_spec_for_ParameterValues_defaultCOinitialValue,
        _root_component_type_list_2_spec_for_ParameterValues_defaultCOinitialValue,
        undefined,
    );
    return new ParameterValues_defaultCOinitialValue(
        value,
        mask
    );
}; }
    return _cached_decoder_for_ParameterValues_defaultCOinitialValue(el);
}

let _cached_encoder_for_ParameterValues_defaultCOinitialValue: $.ASN1Encoder<ParameterValues_defaultCOinitialValue> | null = null;

/**
 * @summary Encodes a(n) ParameterValues_defaultCOinitialValue into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ParameterValues_defaultCOinitialValue, encoded as an ASN.1 Element.
 */
export
function _encode_ParameterValues_defaultCOinitialValue (value: ParameterValues_defaultCOinitialValue, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ParameterValues_defaultCOinitialValue) { _cached_encoder_for_ParameterValues_defaultCOinitialValue = function (value: ParameterValues_defaultCOinitialValue): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeBitString, $.BER)(value.value, $.BER),
            /* IF_ABSENT  */ ((value.mask === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeBitString, $.BER)(value.mask, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ParameterValues_defaultCOinitialValue(value, elGetter);
}


/* eslint-enable */
