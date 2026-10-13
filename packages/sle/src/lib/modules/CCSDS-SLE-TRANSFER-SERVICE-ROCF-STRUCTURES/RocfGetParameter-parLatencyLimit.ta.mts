/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Error
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ParameterName, _decode_ParameterName, _encode_ParameterName,
    ParameterName_latencyLimit
} from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/ParameterName.ta.mjs";
import { RocfGetParameter_parLatencyLimit_parameterValue, _decode_RocfGetParameter_parLatencyLimit_parameterValue, _encode_RocfGetParameter_parLatencyLimit_parameterValue } from "../CCSDS-SLE-TRANSFER-SERVICE-ROCF-STRUCTURES/RocfGetParameter-parLatencyLimit-parameterValue.ta.mjs";


function integerIsOneOf (value: number | bigint, allowed: readonly bigint[]): boolean {
    const n = typeof value === "bigint" ? value : BigInt(value);
    return allowed.includes(n);
}

/**
 * @summary RocfGetParameter_parLatencyLimit
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RocfGetParameter-parLatencyLimit ::= SEQUENCE
 *    {  parameterName                 ParameterName (latencyLimit)
 *    ,  parameterValue                CHOICE
 *       {  online                  [0]   IntPosShort
 *                                     -- latencyLimit in seconds
 *       ,  offline                 [1]   NULL
 *       }
 *    }
 * ```
 * 
 * @class
 */
export
class RocfGetParameter_parLatencyLimit {
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
    readonly parameterValue: RocfGetParameter_parLatencyLimit_parameterValue;

    constructor (
        parameterName: ParameterName,
        parameterValue: RocfGetParameter_parLatencyLimit_parameterValue
    ) {
        if (!integerIsOneOf(parameterName, [BigInt(ParameterName_latencyLimit)])) {
            throw new ASN1Error("RocfGetParameter_parLatencyLimit.parameterName violates ParameterName (latencyLimit)");
        }
        this.parameterName = parameterName;
        this.parameterValue = parameterValue;
    }

    /**
     * @summary Restructures an object into a RocfGetParameter_parLatencyLimit
     * @description
     * 
     * This takes an `object` and converts it to a `RocfGetParameter_parLatencyLimit`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RocfGetParameter_parLatencyLimit`.
     * @returns {RocfGetParameter_parLatencyLimit}
     */
    public static _from_object (_o: { [_K in keyof (RocfGetParameter_parLatencyLimit)]: (RocfGetParameter_parLatencyLimit)[_K] }): RocfGetParameter_parLatencyLimit {
        return new RocfGetParameter_parLatencyLimit(_o.parameterName, _o.parameterValue);
    }


}

/**
 * @summary The Leading Root Component Types of RocfGetParameter_parLatencyLimit
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RocfGetParameter_parLatencyLimit: $.ComponentSpec[] = [
    new $.ComponentSpec("parameterName", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("parameterValue", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of RocfGetParameter_parLatencyLimit
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RocfGetParameter_parLatencyLimit: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RocfGetParameter_parLatencyLimit
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RocfGetParameter_parLatencyLimit: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RocfGetParameter_parLatencyLimit: $.ASN1Decoder<RocfGetParameter_parLatencyLimit> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RocfGetParameter_parLatencyLimit
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RocfGetParameter_parLatencyLimit (el: _Element): RocfGetParameter_parLatencyLimit {
    if (!_cached_decoder_for_RocfGetParameter_parLatencyLimit) { _cached_decoder_for_RocfGetParameter_parLatencyLimit = function (el: _Element): RocfGetParameter_parLatencyLimit {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("RocfGetParameter-parLatencyLimit contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "parameterName";
    sequence[1].name = "parameterValue";
    let parameterName!: ParameterName;
    let parameterValue!: RocfGetParameter_parLatencyLimit_parameterValue;
    parameterName = _decode_ParameterName(sequence[0]);
    parameterValue = _decode_RocfGetParameter_parLatencyLimit_parameterValue(sequence[1]);
    return new RocfGetParameter_parLatencyLimit(
        parameterName,
        parameterValue,

    );
}; }
    return _cached_decoder_for_RocfGetParameter_parLatencyLimit(el);
}

let _cached_encoder_for_RocfGetParameter_parLatencyLimit: $.ASN1Encoder<RocfGetParameter_parLatencyLimit> | null = null;

/**
 * @summary Encodes a(n) RocfGetParameter_parLatencyLimit into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RocfGetParameter_parLatencyLimit, encoded as an ASN.1 Element.
 */
export
function _encode_RocfGetParameter_parLatencyLimit (value: RocfGetParameter_parLatencyLimit, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RocfGetParameter_parLatencyLimit) { _cached_encoder_for_RocfGetParameter_parLatencyLimit = function (value: RocfGetParameter_parLatencyLimit, elGetter: $.ASN1Encoder<RocfGetParameter_parLatencyLimit>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_ParameterName(value.parameterName, $.BER),
        /* REQUIRED   */ _encode_RocfGetParameter_parLatencyLimit_parameterValue(value.parameterValue, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_RocfGetParameter_parLatencyLimit(value, elGetter);
}


/* eslint-enable */
