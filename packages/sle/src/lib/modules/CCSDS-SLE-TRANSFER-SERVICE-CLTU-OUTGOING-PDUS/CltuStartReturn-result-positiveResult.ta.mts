/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Time, _decode_Time, _encode_Time } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Time.ta.mjs";
// export { Time, _decode_Time, _encode_Time } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Time.ta.mjs";
import { ConditionalTime, _decode_ConditionalTime, _encode_ConditionalTime } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/ConditionalTime.ta.mjs";
// export { ConditionalTime, _decode_ConditionalTime, _encode_ConditionalTime } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/ConditionalTime.ta.mjs";


/**
 * @summary CltuStartReturn_result_positiveResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CltuStartReturn-result-positiveResult ::= SEQUENCE
 *       {  startRadiationTime         Time
 *       ,  stopRadiationTime          ConditionalTime
 *       }
 * ```
 * 
 * @class
 */
export
class CltuStartReturn_result_positiveResult {
    /**
     * @summary `startRadiationTime`.
     * @public
     * @readonly
     */
    readonly startRadiationTime: Time;
    /**
     * @summary `stopRadiationTime`.
     * @public
     * @readonly
     */
    readonly stopRadiationTime: ConditionalTime;

    constructor (
        startRadiationTime: Time,
        stopRadiationTime: ConditionalTime
    ) {
        this.startRadiationTime = startRadiationTime;
        this.stopRadiationTime = stopRadiationTime;
    }

    /**
     * @summary Restructures an object into a CltuStartReturn_result_positiveResult
     * @description
     * 
     * This takes an `object` and converts it to a `CltuStartReturn_result_positiveResult`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CltuStartReturn_result_positiveResult`.
     * @returns {CltuStartReturn_result_positiveResult}
     */
    public static _from_object (_o: { [_K in keyof (CltuStartReturn_result_positiveResult)]: (CltuStartReturn_result_positiveResult)[_K] }): CltuStartReturn_result_positiveResult {
        return new CltuStartReturn_result_positiveResult(_o.startRadiationTime, _o.stopRadiationTime);
    }


}

/**
 * @summary The Leading Root Component Types of CltuStartReturn_result_positiveResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CltuStartReturn_result_positiveResult: $.ComponentSpec[] = [
    new $.ComponentSpec("startRadiationTime", false, $.hasAnyTag),
    new $.ComponentSpec("stopRadiationTime", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of CltuStartReturn_result_positiveResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CltuStartReturn_result_positiveResult: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CltuStartReturn_result_positiveResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CltuStartReturn_result_positiveResult: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CltuStartReturn_result_positiveResult: $.ASN1Decoder<CltuStartReturn_result_positiveResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CltuStartReturn_result_positiveResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CltuStartReturn_result_positiveResult (el: _Element): CltuStartReturn_result_positiveResult {
    if (!_cached_decoder_for_CltuStartReturn_result_positiveResult) { _cached_decoder_for_CltuStartReturn_result_positiveResult = function (el: _Element): CltuStartReturn_result_positiveResult {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("CltuStartReturn-result-positiveResult contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "startRadiationTime";
    sequence[1].name = "stopRadiationTime";
    let startRadiationTime!: Time;
    let stopRadiationTime!: ConditionalTime;
    startRadiationTime = _decode_Time(sequence[0]);
    stopRadiationTime = _decode_ConditionalTime(sequence[1]);
    return new CltuStartReturn_result_positiveResult(
        startRadiationTime,
        stopRadiationTime,

    );
}; }
    return _cached_decoder_for_CltuStartReturn_result_positiveResult(el);
}

let _cached_encoder_for_CltuStartReturn_result_positiveResult: $.ASN1Encoder<CltuStartReturn_result_positiveResult> | null = null;

/**
 * @summary Encodes a(n) CltuStartReturn_result_positiveResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CltuStartReturn_result_positiveResult, encoded as an ASN.1 Element.
 */
export
function _encode_CltuStartReturn_result_positiveResult (value: CltuStartReturn_result_positiveResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CltuStartReturn_result_positiveResult) { _cached_encoder_for_CltuStartReturn_result_positiveResult = function (value: CltuStartReturn_result_positiveResult, elGetter: $.ASN1Encoder<CltuStartReturn_result_positiveResult>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_Time(value.startRadiationTime, $.BER),
        /* REQUIRED   */ _encode_ConditionalTime(value.stopRadiationTime, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_CltuStartReturn_result_positiveResult(value, elGetter);
}


/* eslint-enable */
