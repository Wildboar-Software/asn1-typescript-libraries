/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Error
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ParameterName, _decode_ParameterName, _encode_ParameterName,
    ParameterName_returnTimeoutPeriod
} from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/ParameterName.ta.mjs";
import { TimeoutPeriod, _decode_TimeoutPeriod, _encode_TimeoutPeriod } from "../CCSDS-SLE-TRANSFER-SERVICE-ROCF-STRUCTURES/TimeoutPeriod.ta.mjs";


function integerIsOneOf (value: number | bigint, allowed: readonly bigint[]): boolean {
    const n = typeof value === "bigint" ? value : BigInt(value);
    return allowed.includes(n);
}

/**
 * @summary RocfGetParameter_parReturnTimeout
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RocfGetParameter-parReturnTimeout ::= SEQUENCE
 *    {  parameterName                 ParameterName (returnTimeoutPeriod)
 *    ,  parameterValue                TimeoutPeriod
 *    }
 * ```
 * 
 * @class
 */
export
class RocfGetParameter_parReturnTimeout {
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
    readonly parameterValue: TimeoutPeriod;

    constructor (
        parameterName: ParameterName,
        parameterValue: TimeoutPeriod
    ) {
        if (!integerIsOneOf(parameterName, [BigInt(ParameterName_returnTimeoutPeriod)])) {
            throw new ASN1Error("RocfGetParameter_parReturnTimeout.parameterName violates ParameterName (returnTimeoutPeriod)");
        }
        this.parameterName = parameterName;
        this.parameterValue = parameterValue;
    }

    /**
     * @summary Restructures an object into a RocfGetParameter_parReturnTimeout
     * @description
     * 
     * This takes an `object` and converts it to a `RocfGetParameter_parReturnTimeout`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RocfGetParameter_parReturnTimeout`.
     * @returns {RocfGetParameter_parReturnTimeout}
     */
    public static _from_object (_o: { [_K in keyof (RocfGetParameter_parReturnTimeout)]: (RocfGetParameter_parReturnTimeout)[_K] }): RocfGetParameter_parReturnTimeout {
        return new RocfGetParameter_parReturnTimeout(_o.parameterName, _o.parameterValue);
    }


}

/**
 * @summary The Leading Root Component Types of RocfGetParameter_parReturnTimeout
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RocfGetParameter_parReturnTimeout: $.ComponentSpec[] = [
    new $.ComponentSpec("parameterName", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("parameterValue", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of RocfGetParameter_parReturnTimeout
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RocfGetParameter_parReturnTimeout: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RocfGetParameter_parReturnTimeout
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RocfGetParameter_parReturnTimeout: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RocfGetParameter_parReturnTimeout: $.ASN1Decoder<RocfGetParameter_parReturnTimeout> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RocfGetParameter_parReturnTimeout
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RocfGetParameter_parReturnTimeout (el: _Element): RocfGetParameter_parReturnTimeout {
    if (!_cached_decoder_for_RocfGetParameter_parReturnTimeout) { _cached_decoder_for_RocfGetParameter_parReturnTimeout = function (el: _Element): RocfGetParameter_parReturnTimeout {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("RocfGetParameter-parReturnTimeout contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "parameterName";
    sequence[1].name = "parameterValue";
    let parameterName!: ParameterName;
    let parameterValue!: TimeoutPeriod;
    parameterName = _decode_ParameterName(sequence[0]);
    parameterValue = _decode_TimeoutPeriod(sequence[1]);
    return new RocfGetParameter_parReturnTimeout(
        parameterName,
        parameterValue,

    );
}; }
    return _cached_decoder_for_RocfGetParameter_parReturnTimeout(el);
}

let _cached_encoder_for_RocfGetParameter_parReturnTimeout: $.ASN1Encoder<RocfGetParameter_parReturnTimeout> | null = null;

/**
 * @summary Encodes a(n) RocfGetParameter_parReturnTimeout into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RocfGetParameter_parReturnTimeout, encoded as an ASN.1 Element.
 */
export
function _encode_RocfGetParameter_parReturnTimeout (value: RocfGetParameter_parReturnTimeout, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RocfGetParameter_parReturnTimeout) { _cached_encoder_for_RocfGetParameter_parReturnTimeout = function (value: RocfGetParameter_parReturnTimeout, _elGetter: $.ASN1Encoder<RocfGetParameter_parReturnTimeout>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_ParameterName(value.parameterName, $.BER),
        /* REQUIRED   */ _encode_TimeoutPeriod(value.parameterValue, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_RocfGetParameter_parReturnTimeout(value, elGetter);
}


/* eslint-enable */
