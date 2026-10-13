/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Error
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ParameterName, _decode_ParameterName, _encode_ParameterName,
    ParameterName_bufferSize
} from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/ParameterName.ta.mjs";
import { IntPosShort, _decode_IntPosShort, _encode_IntPosShort } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/IntPosShort.ta.mjs";


function integerIsOneOf (value: number | bigint, allowed: readonly bigint[]): boolean {
    const n = typeof value === "bigint" ? value : BigInt(value);
    return allowed.includes(n);
}

/**
 * @summary RafGetParameter_parBufferSize
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RafGetParameter-parBufferSize ::= SEQUENCE
 *     {   parameterName                ParameterName (bufferSize)
 *     ,   parameterValue               IntPosShort
 *                                      -- bufferSize in number of invocations
 *                                      -- that can be held in buffer
 *     }
 * ```
 * 
 * @class
 */
export
class RafGetParameter_parBufferSize {
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
    readonly parameterValue: IntPosShort;

    constructor (
        parameterName: ParameterName,
        parameterValue: IntPosShort
    ) {
        if (!integerIsOneOf(parameterName, [BigInt(ParameterName_bufferSize)])) {
            throw new ASN1Error("RafGetParameter_parBufferSize.parameterName violates ParameterName (bufferSize)");
        }
        this.parameterName = parameterName;
        this.parameterValue = parameterValue;
    }

    /**
     * @summary Restructures an object into a RafGetParameter_parBufferSize
     * @description
     * 
     * This takes an `object` and converts it to a `RafGetParameter_parBufferSize`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RafGetParameter_parBufferSize`.
     * @returns {RafGetParameter_parBufferSize}
     */
    public static _from_object (_o: { [_K in keyof (RafGetParameter_parBufferSize)]: (RafGetParameter_parBufferSize)[_K] }): RafGetParameter_parBufferSize {
        return new RafGetParameter_parBufferSize(_o.parameterName, _o.parameterValue);
    }


}

/**
 * @summary The Leading Root Component Types of RafGetParameter_parBufferSize
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RafGetParameter_parBufferSize: $.ComponentSpec[] = [
    new $.ComponentSpec("parameterName", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("parameterValue", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of RafGetParameter_parBufferSize
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RafGetParameter_parBufferSize: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RafGetParameter_parBufferSize
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RafGetParameter_parBufferSize: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RafGetParameter_parBufferSize: $.ASN1Decoder<RafGetParameter_parBufferSize> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RafGetParameter_parBufferSize
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RafGetParameter_parBufferSize (el: _Element): RafGetParameter_parBufferSize {
    if (!_cached_decoder_for_RafGetParameter_parBufferSize) { _cached_decoder_for_RafGetParameter_parBufferSize = function (el: _Element): RafGetParameter_parBufferSize {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("RafGetParameter-parBufferSize contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "parameterName";
    sequence[1].name = "parameterValue";
    let parameterName!: ParameterName;
    let parameterValue!: IntPosShort;
    parameterName = _decode_ParameterName(sequence[0]);
    parameterValue = _decode_IntPosShort(sequence[1]);
    return new RafGetParameter_parBufferSize(
        parameterName,
        parameterValue,

    );
}; }
    return _cached_decoder_for_RafGetParameter_parBufferSize(el);
}

let _cached_encoder_for_RafGetParameter_parBufferSize: $.ASN1Encoder<RafGetParameter_parBufferSize> | null = null;

/**
 * @summary Encodes a(n) RafGetParameter_parBufferSize into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RafGetParameter_parBufferSize, encoded as an ASN.1 Element.
 */
export
function _encode_RafGetParameter_parBufferSize (value: RafGetParameter_parBufferSize, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RafGetParameter_parBufferSize) { _cached_encoder_for_RafGetParameter_parBufferSize = function (value: RafGetParameter_parBufferSize, _elGetter: $.ASN1Encoder<RafGetParameter_parBufferSize>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_ParameterName(value.parameterName, $.BER),
        /* REQUIRED   */ _encode_IntPosShort(value.parameterValue, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_RafGetParameter_parBufferSize(value, elGetter);
}


/* eslint-enable */
