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
 * @summary RocfGetParameter_parBufferSize
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RocfGetParameter-parBufferSize ::= SEQUENCE
 *    {  parameterName                 ParameterName (bufferSize)
 *    ,  parameterValue                IntPosShort
 *                                     -- bufferSize in number of invocations
 *                                     -- that can be held in buffer
 *    }
 * ```
 * 
 * @class
 */
export
class RocfGetParameter_parBufferSize {
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
            throw new ASN1Error("RocfGetParameter_parBufferSize.parameterName violates ParameterName (bufferSize)");
        }
        this.parameterName = parameterName;
        this.parameterValue = parameterValue;
    }

    /**
     * @summary Restructures an object into a RocfGetParameter_parBufferSize
     * @description
     * 
     * This takes an `object` and converts it to a `RocfGetParameter_parBufferSize`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RocfGetParameter_parBufferSize`.
     * @returns {RocfGetParameter_parBufferSize}
     */
    public static _from_object (_o: { [_K in keyof (RocfGetParameter_parBufferSize)]: (RocfGetParameter_parBufferSize)[_K] }): RocfGetParameter_parBufferSize {
        return new RocfGetParameter_parBufferSize(_o.parameterName, _o.parameterValue);
    }


}

/**
 * @summary The Leading Root Component Types of RocfGetParameter_parBufferSize
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RocfGetParameter_parBufferSize: $.ComponentSpec[] = [
    new $.ComponentSpec("parameterName", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("parameterValue", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of RocfGetParameter_parBufferSize
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RocfGetParameter_parBufferSize: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RocfGetParameter_parBufferSize
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RocfGetParameter_parBufferSize: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RocfGetParameter_parBufferSize: $.ASN1Decoder<RocfGetParameter_parBufferSize> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RocfGetParameter_parBufferSize
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RocfGetParameter_parBufferSize (el: _Element): RocfGetParameter_parBufferSize {
    if (!_cached_decoder_for_RocfGetParameter_parBufferSize) { _cached_decoder_for_RocfGetParameter_parBufferSize = function (el: _Element): RocfGetParameter_parBufferSize {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("RocfGetParameter-parBufferSize contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "parameterName";
    sequence[1].name = "parameterValue";
    let parameterName!: ParameterName;
    let parameterValue!: IntPosShort;
    parameterName = _decode_ParameterName(sequence[0]);
    parameterValue = _decode_IntPosShort(sequence[1]);
    return new RocfGetParameter_parBufferSize(
        parameterName,
        parameterValue,

    );
}; }
    return _cached_decoder_for_RocfGetParameter_parBufferSize(el);
}

let _cached_encoder_for_RocfGetParameter_parBufferSize: $.ASN1Encoder<RocfGetParameter_parBufferSize> | null = null;

/**
 * @summary Encodes a(n) RocfGetParameter_parBufferSize into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RocfGetParameter_parBufferSize, encoded as an ASN.1 Element.
 */
export
function _encode_RocfGetParameter_parBufferSize (value: RocfGetParameter_parBufferSize, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RocfGetParameter_parBufferSize) { _cached_encoder_for_RocfGetParameter_parBufferSize = function (value: RocfGetParameter_parBufferSize, _elGetter: $.ASN1Encoder<RocfGetParameter_parBufferSize>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_ParameterName(value.parameterName, $.BER),
        /* REQUIRED   */ _encode_IntPosShort(value.parameterValue, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_RocfGetParameter_parBufferSize(value, elGetter);
}


/* eslint-enable */
