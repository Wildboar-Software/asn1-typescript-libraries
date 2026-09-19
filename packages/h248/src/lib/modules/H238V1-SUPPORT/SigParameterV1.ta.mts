/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SigParamValueV1, _decode_SigParamValueV1, _encode_SigParamValueV1 } from "../H238V1-SUPPORT/SigParamValueV1.ta.mjs";
// export { SigParamValueV1, _decode_SigParamValueV1, _encode_SigParamValueV1 } from "../H238V1-SUPPORT/SigParamValueV1.ta.mjs";


/**
 * @summary SigParameterV1
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SigParameterV1 ::= SEQUENCE
 *     {
 *         sigParameterName    [0] SigParameterName,
 *         value                [1] SigParamValueV1
 * --        value                [1] ValueV1
 *         
 *     }
 * ```
 * 
 * @class
 */
export
class SigParameterV1 {
    constructor (
        /**
         * @summary `sigParameterName`.
         * @public
         * @readonly
         */
        readonly sigParameterName: SigParameterName,
        /**
         * @summary `value`.
         * @public
         * @readonly
         */
        readonly value: SigParamValueV1
    ) {}

    /**
     * @summary Restructures an object into a SigParameterV1
     * @description
     * 
     * This takes an `object` and converts it to a `SigParameterV1`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SigParameterV1`.
     * @returns {SigParameterV1}
     */
    public static _from_object (_o: { [_K in keyof (SigParameterV1)]: (SigParameterV1)[_K] }): SigParameterV1 {
        return new SigParameterV1(_o.sigParameterName, _o.value);
    }


}

/**
 * @summary The Leading Root Component Types of SigParameterV1
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SigParameterV1: $.ComponentSpec[] = [
    /* FIXME: sigParameterName COULD_NOT_RESOLVE_TYPE_DEF */,
    new $.ComponentSpec("value", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of SigParameterV1
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SigParameterV1: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SigParameterV1
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SigParameterV1: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SigParameterV1: $.ASN1Decoder<SigParameterV1> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SigParameterV1
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SigParameterV1 (el: _Element): SigParameterV1 {
    if (!_cached_decoder_for_SigParameterV1) { _cached_decoder_for_SigParameterV1 = function (el: _Element): SigParameterV1 {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("SigParameterV1 contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "sigParameterName";
    sequence[1].name = "value";
    let sigParameterName!: SigParameterName;
    let value!: SigParamValueV1;
    sigParameterName = $._decode_implicit<SigParameterName>(() => _decode_SigParameterName)(sequence[0]);
    value = $._decode_implicit<SigParamValueV1>(() => _decode_SigParamValueV1)(sequence[1]);
    return new SigParameterV1(
        sigParameterName,
        value,

    );
}; }
    return _cached_decoder_for_SigParameterV1(el);
}

let _cached_encoder_for_SigParameterV1: $.ASN1Encoder<SigParameterV1> | null = null;

/**
 * @summary Encodes a(n) SigParameterV1 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SigParameterV1, encoded as an ASN.1 Element.
 */
export
function _encode_SigParameterV1 (value: SigParameterV1, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SigParameterV1) { _cached_encoder_for_SigParameterV1 = function (value: SigParameterV1, elGetter: $.ASN1Encoder<SigParameterV1>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_SigParameterName, $.BER)(value.sigParameterName, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_SigParamValueV1, $.BER)(value.value, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SigParameterV1(value, elGetter);
}


/* eslint-enable */
