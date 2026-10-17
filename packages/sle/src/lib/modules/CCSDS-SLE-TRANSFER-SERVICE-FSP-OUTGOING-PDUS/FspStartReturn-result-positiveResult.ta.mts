/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Time, _decode_Time, _encode_Time } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Time.ta.mjs";
import { ConditionalTime, _decode_ConditionalTime, _encode_ConditionalTime } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/ConditionalTime.ta.mjs";


/**
 * @summary FspStartReturn_result_positiveResult
 * @description
 * 
 * Production window returned when FSP-START succeeds. Returned only for a
 * positive result.
 * 
 * CCSDS 912.3-B-3, sections 3.4.2.6 and 3.4.2.7.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FspStartReturn-result-positiveResult ::= SEQUENCE
 *       {  startProductionTime     Time
 *       ,  stopProductionTime      ConditionalTime
 *       }
 * ```
 * 
 * @class
 */
export
class FspStartReturn_result_positiveResult {
    /**
     * @summary `startProductionTime`.
     * @description
     * When production status is not yet operational, the estimated time at
     * which the provider can start processing buffered Space Packets, taken
     * from the production schedule with allowance for later production steps
     * and the uplink acquisition sequence. When production status is
     * operational and the provider is ready, the time at which production
     * status became operational. On a later FSP-START in the same instance, the
     * latest time the provider became ready, which is the most recent change of
     * production status to operational.
     * 
     * CCSDS 912.3-B-3, section 3.4.2.6.
     * @public
     * @readonly
     */
    readonly startProductionTime: Time;
    /**
     * @summary `stopProductionTime`.
     * @description
     * Estimated time at which the provider will stop service production. The
     * estimate may fall after the end of the service instance provision period.
     * When the provider has no estimate, the value is `null`.
     * 
     * CCSDS 912.3-B-3, section 3.4.2.7.
     * @public
     * @readonly
     */
    readonly stopProductionTime: ConditionalTime;

    constructor (
        startProductionTime: Time,
        stopProductionTime: ConditionalTime
    ) {
        this.startProductionTime = startProductionTime;
        this.stopProductionTime = stopProductionTime;
    }

    /**
     * @summary Restructures an object into a FspStartReturn_result_positiveResult
     * @description
     * 
     * This takes an `object` and converts it to a `FspStartReturn_result_positiveResult`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FspStartReturn_result_positiveResult`.
     * @returns {FspStartReturn_result_positiveResult}
     */
    public static _from_object (_o: { [_K in keyof (FspStartReturn_result_positiveResult)]: (FspStartReturn_result_positiveResult)[_K] }): FspStartReturn_result_positiveResult {
        return new FspStartReturn_result_positiveResult(_o.startProductionTime, _o.stopProductionTime);
    }


}

/**
 * @summary The Leading Root Component Types of FspStartReturn_result_positiveResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FspStartReturn_result_positiveResult: $.ComponentSpec[] = [
    new $.ComponentSpec("startProductionTime", false, $.hasAnyTag),
    new $.ComponentSpec("stopProductionTime", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of FspStartReturn_result_positiveResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FspStartReturn_result_positiveResult: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FspStartReturn_result_positiveResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FspStartReturn_result_positiveResult: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FspStartReturn_result_positiveResult: $.ASN1Decoder<FspStartReturn_result_positiveResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FspStartReturn_result_positiveResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FspStartReturn_result_positiveResult (el: _Element): FspStartReturn_result_positiveResult {
    if (!_cached_decoder_for_FspStartReturn_result_positiveResult) { _cached_decoder_for_FspStartReturn_result_positiveResult = function (el: _Element): FspStartReturn_result_positiveResult {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("FspStartReturn-result-positiveResult contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "startProductionTime";
    sequence[1].name = "stopProductionTime";
    let startProductionTime!: Time;
    let stopProductionTime!: ConditionalTime;
    startProductionTime = _decode_Time(sequence[0]);
    stopProductionTime = _decode_ConditionalTime(sequence[1]);
    return new FspStartReturn_result_positiveResult(
        startProductionTime,
        stopProductionTime,

    );
}; }
    return _cached_decoder_for_FspStartReturn_result_positiveResult(el);
}

let _cached_encoder_for_FspStartReturn_result_positiveResult: $.ASN1Encoder<FspStartReturn_result_positiveResult> | null = null;

/**
 * @summary Encodes a(n) FspStartReturn_result_positiveResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FspStartReturn_result_positiveResult, encoded as an ASN.1 Element.
 */
export
function _encode_FspStartReturn_result_positiveResult (value: FspStartReturn_result_positiveResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FspStartReturn_result_positiveResult) { _cached_encoder_for_FspStartReturn_result_positiveResult = function (value: FspStartReturn_result_positiveResult, _elGetter: $.ASN1Encoder<FspStartReturn_result_positiveResult>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_Time(value.startProductionTime, $.BER),
        /* REQUIRED   */ _encode_ConditionalTime(value.stopProductionTime, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_FspStartReturn_result_positiveResult(value, elGetter);
}


/* eslint-enable */
