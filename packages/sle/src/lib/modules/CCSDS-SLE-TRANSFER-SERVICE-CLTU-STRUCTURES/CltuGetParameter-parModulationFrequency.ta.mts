/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Error
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ParameterName, _decode_ParameterName, _encode_ParameterName,
    ParameterName_modulationFrequency
} from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/ParameterName.ta.mjs";
import { ModulationFrequency, _decode_ModulationFrequency, _encode_ModulationFrequency } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-STRUCTURES/ModulationFrequency.ta.mjs";


function integerIsOneOf (value: number | bigint, allowed: readonly bigint[]): boolean {
    const n = typeof value === "bigint" ? value : BigInt(value);
    return allowed.includes(n);
}

/**
 * @summary CltuGetParameter_parModulationFrequency
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CltuGetParameter-parModulationFrequency ::= SEQUENCE
 *    {  parameterName                    ParameterName (modulationFrequency)
 *    ,  parameterValue                   ModulationFrequency
 *    }
 * ```
 * 
 * @class
 */
export
class CltuGetParameter_parModulationFrequency {
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
    readonly parameterValue: ModulationFrequency;

    constructor (
        parameterName: ParameterName,
        parameterValue: ModulationFrequency
    ) {
        if (!integerIsOneOf(parameterName, [BigInt(ParameterName_modulationFrequency)])) {
            throw new ASN1Error("CltuGetParameter_parModulationFrequency.parameterName violates ParameterName (modulationFrequency)");
        }
        this.parameterName = parameterName;
        this.parameterValue = parameterValue;
    }

    /**
     * @summary Restructures an object into a CltuGetParameter_parModulationFrequency
     * @description
     * 
     * This takes an `object` and converts it to a `CltuGetParameter_parModulationFrequency`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CltuGetParameter_parModulationFrequency`.
     * @returns {CltuGetParameter_parModulationFrequency}
     */
    public static _from_object (_o: { [_K in keyof (CltuGetParameter_parModulationFrequency)]: (CltuGetParameter_parModulationFrequency)[_K] }): CltuGetParameter_parModulationFrequency {
        return new CltuGetParameter_parModulationFrequency(_o.parameterName, _o.parameterValue);
    }


}

/**
 * @summary The Leading Root Component Types of CltuGetParameter_parModulationFrequency
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CltuGetParameter_parModulationFrequency: $.ComponentSpec[] = [
    new $.ComponentSpec("parameterName", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("parameterValue", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of CltuGetParameter_parModulationFrequency
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CltuGetParameter_parModulationFrequency: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CltuGetParameter_parModulationFrequency
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CltuGetParameter_parModulationFrequency: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CltuGetParameter_parModulationFrequency: $.ASN1Decoder<CltuGetParameter_parModulationFrequency> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CltuGetParameter_parModulationFrequency
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CltuGetParameter_parModulationFrequency (el: _Element): CltuGetParameter_parModulationFrequency {
    if (!_cached_decoder_for_CltuGetParameter_parModulationFrequency) { _cached_decoder_for_CltuGetParameter_parModulationFrequency = function (el: _Element): CltuGetParameter_parModulationFrequency {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("CltuGetParameter-parModulationFrequency contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "parameterName";
    sequence[1].name = "parameterValue";
    let parameterName!: ParameterName;
    let parameterValue!: ModulationFrequency;
    parameterName = _decode_ParameterName(sequence[0]);
    parameterValue = _decode_ModulationFrequency(sequence[1]);
    return new CltuGetParameter_parModulationFrequency(
        parameterName,
        parameterValue,

    );
}; }
    return _cached_decoder_for_CltuGetParameter_parModulationFrequency(el);
}

let _cached_encoder_for_CltuGetParameter_parModulationFrequency: $.ASN1Encoder<CltuGetParameter_parModulationFrequency> | null = null;

/**
 * @summary Encodes a(n) CltuGetParameter_parModulationFrequency into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CltuGetParameter_parModulationFrequency, encoded as an ASN.1 Element.
 */
export
function _encode_CltuGetParameter_parModulationFrequency (value: CltuGetParameter_parModulationFrequency, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CltuGetParameter_parModulationFrequency) { _cached_encoder_for_CltuGetParameter_parModulationFrequency = function (value: CltuGetParameter_parModulationFrequency, elGetter: $.ASN1Encoder<CltuGetParameter_parModulationFrequency>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_ParameterName(value.parameterName, $.BER),
        /* REQUIRED   */ _encode_ModulationFrequency(value.parameterValue, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_CltuGetParameter_parModulationFrequency(value, elGetter);
}


/* eslint-enable */
