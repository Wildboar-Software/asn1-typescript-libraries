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
import { RcfGetParameter_parLatencyLimit_parameterValue, _decode_RcfGetParameter_parLatencyLimit_parameterValue, _encode_RcfGetParameter_parLatencyLimit_parameterValue } from "../CCSDS-SLE-TRANSFER-SERVICE-RCF-STRUCTURES/RcfGetParameter-parLatencyLimit-parameterValue.ta.mjs";



/**
 * @summary RcfGetParameter_parLatencyLimit
 * @description
 *
 * Returned value of latency-limit. For an online mode this is the
 * release-timer duration, in seconds: the timer starts when a record is
 * inserted into an empty transfer buffer, and its expiry releases the buffer.
 * Table 3-11 also describes the parameter as the maximum delay from
 * acquisition of a frame until the PDU containing that frame is delivered. For
 * offline delivery the value is null. Service management sets it.
 *
 * CCSDS 911.2-B-4, sections 3.1.9.1.5 and 3.1.9.2.7, and table 3-11.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RcfGetParameter-parLatencyLimit ::= SEQUENCE
 *     { parameterName                  ParameterName (latencyLimit)
 *     , parameterValue                 CHOICE
 *        { online                  [0]    IntPosShort
 *                                               -- latencyLimit in seconds
 *        ,   offline               [1]    NULL
 *        }
 *     }
 * ```
 * 
 * @class
 */
export
class RcfGetParameter_parLatencyLimit {
    /**
     * @summary `parameterName`.
     * @description
     *
     * Identifies this value as latency-limit (latencyLimit).
     *
     * CCSDS 911.2-B-4, table 3-11.
     * @public
     * @readonly
     */
    readonly parameterName: ParameterName;
    /**
     * @summary `parameterValue`.
     * @description
     *
     * Latency limit for an online mode, in seconds, or null when the delivery
     * mode is offline.
     *
     * CCSDS 911.2-B-4, table 3-11.
     * @public
     * @readonly
     */
    readonly parameterValue: RcfGetParameter_parLatencyLimit_parameterValue;

    constructor (
        parameterName: ParameterName,
        parameterValue: RcfGetParameter_parLatencyLimit_parameterValue
    ) {
        if (parameterName !== ParameterName_latencyLimit) {
            throw new ASN1Error("RcfGetParameter_parLatencyLimit.parameterName violates ParameterName (latencyLimit)");
        }
        this.parameterName = parameterName;
        this.parameterValue = parameterValue;
    }

    /**
     * @summary Restructures an object into a RcfGetParameter_parLatencyLimit
     * @description
     * 
     * This takes an `object` and converts it to a
     * `RcfGetParameter_parLatencyLimit`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RcfGetParameter_parLatencyLimit`.
     * @returns {RcfGetParameter_parLatencyLimit}
     */
    public static _from_object (_o: { [_K in keyof (RcfGetParameter_parLatencyLimit)]: (RcfGetParameter_parLatencyLimit)[_K] }): RcfGetParameter_parLatencyLimit {
        return new RcfGetParameter_parLatencyLimit(_o.parameterName, _o.parameterValue);
    }


}

/**
 * @summary The Leading Root Component Types of RcfGetParameter_parLatencyLimit
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading
 * root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RcfGetParameter_parLatencyLimit: $.ComponentSpec[] = [
    new $.ComponentSpec("parameterName", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("parameterValue", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of RcfGetParameter_parLatencyLimit
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing
 * root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RcfGetParameter_parLatencyLimit: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RcfGetParameter_parLatencyLimit
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension
 * addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RcfGetParameter_parLatencyLimit: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RcfGetParameter_parLatencyLimit: $.ASN1Decoder<RcfGetParameter_parLatencyLimit> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RcfGetParameter_parLatencyLimit
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RcfGetParameter_parLatencyLimit (el: _Element): RcfGetParameter_parLatencyLimit {
    if (!_cached_decoder_for_RcfGetParameter_parLatencyLimit) { _cached_decoder_for_RcfGetParameter_parLatencyLimit = function (el: _Element): RcfGetParameter_parLatencyLimit {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("RcfGetParameter-parLatencyLimit contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "parameterName";
    sequence[1].name = "parameterValue";
    let parameterName!: ParameterName;
    let parameterValue!: RcfGetParameter_parLatencyLimit_parameterValue;
    parameterName = _decode_ParameterName(sequence[0]);
    parameterValue = _decode_RcfGetParameter_parLatencyLimit_parameterValue(sequence[1]);
    return new RcfGetParameter_parLatencyLimit(
        parameterName,
        parameterValue,

    );
}; }
    return _cached_decoder_for_RcfGetParameter_parLatencyLimit(el);
}

let _cached_encoder_for_RcfGetParameter_parLatencyLimit: $.ASN1Encoder<RcfGetParameter_parLatencyLimit> | null = null;

/**
 * @summary Encodes a(n) RcfGetParameter_parLatencyLimit into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RcfGetParameter_parLatencyLimit, encoded as an ASN.1 Element.
 */
export
function _encode_RcfGetParameter_parLatencyLimit (value: RcfGetParameter_parLatencyLimit, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RcfGetParameter_parLatencyLimit) { _cached_encoder_for_RcfGetParameter_parLatencyLimit = function (value: RcfGetParameter_parLatencyLimit, _elGetter: $.ASN1Encoder<RcfGetParameter_parLatencyLimit>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_ParameterName(value.parameterName, $.BER),
        /* REQUIRED   */ _encode_RcfGetParameter_parLatencyLimit_parameterValue(value.parameterValue, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_RcfGetParameter_parLatencyLimit(value, elGetter);
}


/* eslint-enable */
