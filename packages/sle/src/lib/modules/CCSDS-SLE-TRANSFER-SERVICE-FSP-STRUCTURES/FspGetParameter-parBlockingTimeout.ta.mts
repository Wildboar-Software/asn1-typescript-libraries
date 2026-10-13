/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Error
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ParameterName, _decode_ParameterName, _encode_ParameterName,
    ParameterName_blockingTimeoutPeriod
} from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/ParameterName.ta.mjs";
import { FspGetParameter_parBlockingTimeout_parameterValue, _decode_FspGetParameter_parBlockingTimeout_parameterValue, _encode_FspGetParameter_parBlockingTimeout_parameterValue } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/FspGetParameter-parBlockingTimeout-parameterValue.ta.mjs";


function integerIsOneOf (value: number | bigint, allowed: readonly bigint[]): boolean {
    const n = typeof value === "bigint" ? value : BigInt(value);
    return allowed.includes(n);
}

/**
 * @summary FspGetParameter_parBlockingTimeout
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FspGetParameter-parBlockingTimeout ::= SEQUENCE
 *    {  parameterName        ParameterName(blockingTimeoutPeriod)
 *    ,  parameterValue       CHOICE
 *       {  blockingOff       [0]   NULL
 *       ,  blockingOn        [1]   BlockingTimeoutPeriod
 *       }
 *    }
 * ```
 * 
 * @class
 */
export
class FspGetParameter_parBlockingTimeout {
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
    readonly parameterValue: FspGetParameter_parBlockingTimeout_parameterValue;

    constructor (
        parameterName: ParameterName,
        parameterValue: FspGetParameter_parBlockingTimeout_parameterValue
    ) {
        if (!integerIsOneOf(parameterName, [BigInt(ParameterName_blockingTimeoutPeriod)])) {
            throw new ASN1Error("FspGetParameter_parBlockingTimeout.parameterName violates ParameterName (blockingTimeoutPeriod)");
        }
        this.parameterName = parameterName;
        this.parameterValue = parameterValue;
    }

    /**
     * @summary Restructures an object into a FspGetParameter_parBlockingTimeout
     * @description
     * 
     * This takes an `object` and converts it to a `FspGetParameter_parBlockingTimeout`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FspGetParameter_parBlockingTimeout`.
     * @returns {FspGetParameter_parBlockingTimeout}
     */
    public static _from_object (_o: { [_K in keyof (FspGetParameter_parBlockingTimeout)]: (FspGetParameter_parBlockingTimeout)[_K] }): FspGetParameter_parBlockingTimeout {
        return new FspGetParameter_parBlockingTimeout(_o.parameterName, _o.parameterValue);
    }


}

/**
 * @summary The Leading Root Component Types of FspGetParameter_parBlockingTimeout
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FspGetParameter_parBlockingTimeout: $.ComponentSpec[] = [
    new $.ComponentSpec("parameterName", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("parameterValue", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of FspGetParameter_parBlockingTimeout
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FspGetParameter_parBlockingTimeout: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FspGetParameter_parBlockingTimeout
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FspGetParameter_parBlockingTimeout: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FspGetParameter_parBlockingTimeout: $.ASN1Decoder<FspGetParameter_parBlockingTimeout> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FspGetParameter_parBlockingTimeout
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FspGetParameter_parBlockingTimeout (el: _Element): FspGetParameter_parBlockingTimeout {
    if (!_cached_decoder_for_FspGetParameter_parBlockingTimeout) { _cached_decoder_for_FspGetParameter_parBlockingTimeout = function (el: _Element): FspGetParameter_parBlockingTimeout {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("FspGetParameter-parBlockingTimeout contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "parameterName";
    sequence[1].name = "parameterValue";
    let parameterName!: ParameterName;
    let parameterValue!: FspGetParameter_parBlockingTimeout_parameterValue;
    parameterName = _decode_ParameterName(sequence[0]);
    parameterValue = _decode_FspGetParameter_parBlockingTimeout_parameterValue(sequence[1]);
    return new FspGetParameter_parBlockingTimeout(
        parameterName,
        parameterValue,

    );
}; }
    return _cached_decoder_for_FspGetParameter_parBlockingTimeout(el);
}

let _cached_encoder_for_FspGetParameter_parBlockingTimeout: $.ASN1Encoder<FspGetParameter_parBlockingTimeout> | null = null;

/**
 * @summary Encodes a(n) FspGetParameter_parBlockingTimeout into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FspGetParameter_parBlockingTimeout, encoded as an ASN.1 Element.
 */
export
function _encode_FspGetParameter_parBlockingTimeout (value: FspGetParameter_parBlockingTimeout, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FspGetParameter_parBlockingTimeout) { _cached_encoder_for_FspGetParameter_parBlockingTimeout = function (value: FspGetParameter_parBlockingTimeout, _elGetter: $.ASN1Encoder<FspGetParameter_parBlockingTimeout>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_ParameterName(value.parameterName, $.BER),
        /* REQUIRED   */ _encode_FspGetParameter_parBlockingTimeout_parameterValue(value.parameterValue, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_FspGetParameter_parBlockingTimeout(value, elGetter);
}


/* eslint-enable */
