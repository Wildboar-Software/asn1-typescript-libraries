/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Error
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_ParameterName, _encode_ParameterName, ParameterName,
    ParameterName_plopInEffect
} from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/ParameterName.ta.mjs";
import { _decode_CltuGetParameter_parPlopInEffect_parameterValue, _encode_CltuGetParameter_parPlopInEffect_parameterValue, CltuGetParameter_parPlopInEffect_parameterValue } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-STRUCTURES/CltuGetParameter-parPlopInEffect-parameterValue.ta.mjs";


function integerIsOneOf (value: number | bigint, allowed: readonly bigint[]): boolean {
    const n = typeof value === "bigint" ? value : BigInt(value);
    return allowed.includes(n);
}

/**
 * @summary CltuGetParameter_parPlopInEffect
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CltuGetParameter-parPlopInEffect ::= SEQUENCE
 *    {  parameterName                    ParameterName (plopInEffect)
 *    ,  parameterValue                   INTEGER
 *       {  plop1                                  (0)
 *       ,  plop2                                  (1)
 *       }
 *    }
 * ```
 * 
 * @class
 */
export
class CltuGetParameter_parPlopInEffect {
    /**
     * @summary `parameterName`.
     * @public
     * @readonly
     */
    readonly parameterName: ParameterName;
    /**
     * @summary `parameterValue`.
     * @public
     * @readonly
     */
    readonly parameterValue: CltuGetParameter_parPlopInEffect_parameterValue;

    constructor (
        parameterName: ParameterName,
        parameterValue: CltuGetParameter_parPlopInEffect_parameterValue
    ) {
        if (!integerIsOneOf(parameterName, [BigInt(ParameterName_plopInEffect)])) {
            throw new ASN1Error("CltuGetParameter_parPlopInEffect.parameterName violates ParameterName (plopInEffect)");
        }
        this.parameterName = parameterName;
        this.parameterValue = parameterValue;
    }

    /**
     * @summary Restructures an object into a CltuGetParameter_parPlopInEffect
     * @description
     * 
     * This takes an `object` and converts it to a `CltuGetParameter_parPlopInEffect`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CltuGetParameter_parPlopInEffect`.
     * @returns {CltuGetParameter_parPlopInEffect}
     */
    public static _from_object (_o: { [_K in keyof (CltuGetParameter_parPlopInEffect)]: (CltuGetParameter_parPlopInEffect)[_K] }): CltuGetParameter_parPlopInEffect {
        return new CltuGetParameter_parPlopInEffect(_o.parameterName, _o.parameterValue);
    }


}

/**
 * @summary The Leading Root Component Types of CltuGetParameter_parPlopInEffect
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CltuGetParameter_parPlopInEffect: $.ComponentSpec[] = [
    new $.ComponentSpec("parameterName", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("parameterValue", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of CltuGetParameter_parPlopInEffect
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CltuGetParameter_parPlopInEffect: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CltuGetParameter_parPlopInEffect
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CltuGetParameter_parPlopInEffect: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CltuGetParameter_parPlopInEffect: $.ASN1Decoder<CltuGetParameter_parPlopInEffect> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CltuGetParameter_parPlopInEffect
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CltuGetParameter_parPlopInEffect (el: _Element): CltuGetParameter_parPlopInEffect {
    if (!_cached_decoder_for_CltuGetParameter_parPlopInEffect) { _cached_decoder_for_CltuGetParameter_parPlopInEffect = function (el: _Element): CltuGetParameter_parPlopInEffect {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("CltuGetParameter-parPlopInEffect contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "parameterName";
    sequence[1].name = "parameterValue";
    let parameterName!: ParameterName;
    let parameterValue!: CltuGetParameter_parPlopInEffect_parameterValue;
    parameterName = _decode_ParameterName(sequence[0]);
    parameterValue = _decode_CltuGetParameter_parPlopInEffect_parameterValue(sequence[1]);
    return new CltuGetParameter_parPlopInEffect(
        parameterName,
        parameterValue,

    );
}; }
    return _cached_decoder_for_CltuGetParameter_parPlopInEffect(el);
}

let _cached_encoder_for_CltuGetParameter_parPlopInEffect: $.ASN1Encoder<CltuGetParameter_parPlopInEffect> | null = null;

/**
 * @summary Encodes a(n) CltuGetParameter_parPlopInEffect into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CltuGetParameter_parPlopInEffect, encoded as an ASN.1 Element.
 */
export
function _encode_CltuGetParameter_parPlopInEffect (value: CltuGetParameter_parPlopInEffect, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CltuGetParameter_parPlopInEffect) { _cached_encoder_for_CltuGetParameter_parPlopInEffect = function (value: CltuGetParameter_parPlopInEffect, elGetter: $.ASN1Encoder<CltuGetParameter_parPlopInEffect>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_ParameterName(value.parameterName, $.BER),
        /* REQUIRED   */ _encode_CltuGetParameter_parPlopInEffect_parameterValue(value.parameterValue, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_CltuGetParameter_parPlopInEffect(value, elGetter);
}


/* eslint-enable */
