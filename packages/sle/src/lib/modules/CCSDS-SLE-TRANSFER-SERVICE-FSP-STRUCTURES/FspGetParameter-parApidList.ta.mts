/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Error
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ParameterName, _decode_ParameterName, _encode_ParameterName,
    ParameterName_apidList
} from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/ParameterName.ta.mjs";
// export { ParameterName, ParameterName_acquisitionSequenceLength /* IMPORTED_LONG_NAMED_INTEGER */, acquisitionSequenceLength /* IMPORTED_SHORT_NAMED_INTEGER */, ParameterName_apidList /* IMPORTED_LONG_NAMED_INTEGER */, apidList /* IMPORTED_SHORT_NAMED_INTEGER */, ParameterName_bitLockRequired /* IMPORTED_LONG_NAMED_INTEGER */, bitLockRequired /* IMPORTED_SHORT_NAMED_INTEGER */, ParameterName_blockingTimeoutPeriod /* IMPORTED_LONG_NAMED_INTEGER */, blockingTimeoutPeriod /* IMPORTED_SHORT_NAMED_INTEGER */, ParameterName_blockingUsage /* IMPORTED_LONG_NAMED_INTEGER */, blockingUsage /* IMPORTED_SHORT_NAMED_INTEGER */, ParameterName_bufferSize /* IMPORTED_LONG_NAMED_INTEGER */, bufferSize /* IMPORTED_SHORT_NAMED_INTEGER */, ParameterName_clcwGlobalVcId /* IMPORTED_LONG_NAMED_INTEGER */, clcwGlobalVcId /* IMPORTED_SHORT_NAMED_INTEGER */, ParameterName_clcwPhysicalChannel /* IMPORTED_LONG_NAMED_INTEGER */, clcwPhysicalChannel /* IMPORTED_SHORT_NAMED_INTEGER */, ParameterName_copCntrFramesRepetition /* IMPORTED_LONG_NAMED_INTEGER */, copCntrFramesRepetition /* IMPORTED_SHORT_NAMED_INTEGER */, ParameterName_deliveryMode /* IMPORTED_LONG_NAMED_INTEGER */, deliveryMode /* IMPORTED_SHORT_NAMED_INTEGER */, ParameterName_directiveInvocation /* IMPORTED_LONG_NAMED_INTEGER */, directiveInvocation /* IMPORTED_SHORT_NAMED_INTEGER */, ParameterName_directiveInvocationOnline /* IMPORTED_LONG_NAMED_INTEGER */, directiveInvocationOnline /* IMPORTED_SHORT_NAMED_INTEGER */, ParameterName_expectedDirectiveIdentification /* IMPORTED_LONG_NAMED_INTEGER */, expectedDirectiveIdentification /* IMPORTED_SHORT_NAMED_INTEGER */, ParameterName_expectedEventInvocationIdentification /* IMPORTED_LONG_NAMED_INTEGER */, expectedEventInvocationIdentification /* IMPORTED_SHORT_NAMED_INTEGER */, ParameterName_expectedSlduIdentification /* IMPORTED_LONG_NAMED_INTEGER */, expectedSlduIdentification /* IMPORTED_SHORT_NAMED_INTEGER */, ParameterName_fopSlidingWindow /* IMPORTED_LONG_NAMED_INTEGER */, fopSlidingWindow /* IMPORTED_SHORT_NAMED_INTEGER */, ParameterName_fopState /* IMPORTED_LONG_NAMED_INTEGER */, fopState /* IMPORTED_SHORT_NAMED_INTEGER */, ParameterName_latencyLimit /* IMPORTED_LONG_NAMED_INTEGER */, latencyLimit /* IMPORTED_SHORT_NAMED_INTEGER */, ParameterName_mapList /* IMPORTED_LONG_NAMED_INTEGER */, mapList /* IMPORTED_SHORT_NAMED_INTEGER */, ParameterName_mapMuxControl /* IMPORTED_LONG_NAMED_INTEGER */, mapMuxControl /* IMPORTED_SHORT_NAMED_INTEGER */, ParameterName_mapMuxScheme /* IMPORTED_LONG_NAMED_INTEGER */, mapMuxScheme /* IMPORTED_SHORT_NAMED_INTEGER */, ParameterName_maximumFrameLength /* IMPORTED_LONG_NAMED_INTEGER */, maximumFrameLength /* IMPORTED_SHORT_NAMED_INTEGER */, ParameterName_maximumPacketLength /* IMPORTED_LONG_NAMED_INTEGER */, maximumPacketLength /* IMPORTED_SHORT_NAMED_INTEGER */, ParameterName_maximumSlduLength /* IMPORTED_LONG_NAMED_INTEGER */, maximumSlduLength /* IMPORTED_SHORT_NAMED_INTEGER */, ParameterName_minimumDelayTime /* IMPORTED_LONG_NAMED_INTEGER */, minimumDelayTime /* IMPORTED_SHORT_NAMED_INTEGER */, ParameterName_minReportingCycle /* IMPORTED_LONG_NAMED_INTEGER */, minReportingCycle /* IMPORTED_SHORT_NAMED_INTEGER */, ParameterName_modulationFrequency /* IMPORTED_LONG_NAMED_INTEGER */, modulationFrequency /* IMPORTED_SHORT_NAMED_INTEGER */, ParameterName_modulationIndex /* IMPORTED_LONG_NAMED_INTEGER */, modulationIndex /* IMPORTED_SHORT_NAMED_INTEGER */, ParameterName_notificationMode /* IMPORTED_LONG_NAMED_INTEGER */, notificationMode /* IMPORTED_SHORT_NAMED_INTEGER */, ParameterName_permittedControlWordTypeSet /* IMPORTED_LONG_NAMED_INTEGER */, permittedControlWordTypeSet /* IMPORTED_SHORT_NAMED_INTEGER */, ParameterName_permittedFrameQuality /* IMPORTED_LONG_NAMED_INTEGER */, permittedFrameQuality /* IMPORTED_SHORT_NAMED_INTEGER */, ParameterName_permittedGvcidSet /* IMPORTED_LONG_NAMED_INTEGER */, permittedGvcidSet /* IMPORTED_SHORT_NAMED_INTEGER */, ParameterName_permittedTcVcidSet /* IMPORTED_LONG_NAMED_INTEGER */, permittedTcVcidSet /* IMPORTED_SHORT_NAMED_INTEGER */, ParameterName_permittedTransmissionMode /* IMPORTED_LONG_NAMED_INTEGER */, permittedTransmissionMode /* IMPORTED_SHORT_NAMED_INTEGER */, ParameterName_permittedUpdateModeSet /* IMPORTED_LONG_NAMED_INTEGER */, permittedUpdateModeSet /* IMPORTED_SHORT_NAMED_INTEGER */, ParameterName_plop1IdleSequenceLength /* IMPORTED_LONG_NAMED_INTEGER */, plop1IdleSequenceLength /* IMPORTED_SHORT_NAMED_INTEGER */, ParameterName_plopInEffect /* IMPORTED_LONG_NAMED_INTEGER */, plopInEffect /* IMPORTED_SHORT_NAMED_INTEGER */, ParameterName_protocolAbortMode /* IMPORTED_LONG_NAMED_INTEGER */, protocolAbortMode /* IMPORTED_SHORT_NAMED_INTEGER */, ParameterName_reportingCycle /* IMPORTED_LONG_NAMED_INTEGER */, reportingCycle /* IMPORTED_SHORT_NAMED_INTEGER */, ParameterName_requestedControlWordType /* IMPORTED_LONG_NAMED_INTEGER */, requestedControlWordType /* IMPORTED_SHORT_NAMED_INTEGER */, ParameterName_requestedFrameQuality /* IMPORTED_LONG_NAMED_INTEGER */, requestedFrameQuality /* IMPORTED_SHORT_NAMED_INTEGER */, ParameterName_requestedGvcid /* IMPORTED_LONG_NAMED_INTEGER */, requestedGvcid /* IMPORTED_SHORT_NAMED_INTEGER */, ParameterName_requestedTcVcid /* IMPORTED_LONG_NAMED_INTEGER */, requestedTcVcid /* IMPORTED_SHORT_NAMED_INTEGER */, ParameterName_requestedUpdateMode /* IMPORTED_LONG_NAMED_INTEGER */, requestedUpdateMode /* IMPORTED_SHORT_NAMED_INTEGER */, ParameterName_returnTimeoutPeriod /* IMPORTED_LONG_NAMED_INTEGER */, returnTimeoutPeriod /* IMPORTED_SHORT_NAMED_INTEGER */, ParameterName_rfAvailable /* IMPORTED_LONG_NAMED_INTEGER */, rfAvailable /* IMPORTED_SHORT_NAMED_INTEGER */, ParameterName_rfAvailableRequired /* IMPORTED_LONG_NAMED_INTEGER */, rfAvailableRequired /* IMPORTED_SHORT_NAMED_INTEGER */, ParameterName_segmentHeader /* IMPORTED_LONG_NAMED_INTEGER */, segmentHeader /* IMPORTED_SHORT_NAMED_INTEGER */, ParameterName_sequCntrFramesRepetition /* IMPORTED_LONG_NAMED_INTEGER */, sequCntrFramesRepetition /* IMPORTED_SHORT_NAMED_INTEGER */, ParameterName_subcarrierToBitRateRatio /* IMPORTED_LONG_NAMED_INTEGER */, subcarrierToBitRateRatio /* IMPORTED_SHORT_NAMED_INTEGER */, ParameterName_throwEventOperation /* IMPORTED_LONG_NAMED_INTEGER */, throwEventOperation /* IMPORTED_SHORT_NAMED_INTEGER */, ParameterName_timeoutType /* IMPORTED_LONG_NAMED_INTEGER */, timeoutType /* IMPORTED_SHORT_NAMED_INTEGER */, ParameterName_timerInitial /* IMPORTED_LONG_NAMED_INTEGER */, timerInitial /* IMPORTED_SHORT_NAMED_INTEGER */, ParameterName_transmissionLimit /* IMPORTED_LONG_NAMED_INTEGER */, transmissionLimit /* IMPORTED_SHORT_NAMED_INTEGER */, ParameterName_transmitterFrameSequenceNumber /* IMPORTED_LONG_NAMED_INTEGER */, transmitterFrameSequenceNumber /* IMPORTED_SHORT_NAMED_INTEGER */, ParameterName_vcMuxControl /* IMPORTED_LONG_NAMED_INTEGER */, vcMuxControl /* IMPORTED_SHORT_NAMED_INTEGER */, ParameterName_vcMuxScheme /* IMPORTED_LONG_NAMED_INTEGER */, vcMuxScheme /* IMPORTED_SHORT_NAMED_INTEGER */, ParameterName_virtualChannel /* IMPORTED_LONG_NAMED_INTEGER */, virtualChannel /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ParameterName, _encode_ParameterName } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/ParameterName.ta.mjs";
import { ApidList, _decode_ApidList, _encode_ApidList } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/ApidList.ta.mjs";
// export { ApidList, _decode_ApidList, _encode_ApidList } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/ApidList.ta.mjs";


function integerIsOneOf (value: number | bigint, allowed: readonly bigint[]): boolean {
    const n = typeof value === "bigint" ? value : BigInt(value);
    return allowed.includes(n);
}

/**
 * @summary FspGetParameter_parApidList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FspGetParameter-parApidList ::= SEQUENCE
 *    {  parameterName     ParameterName (apidList)
 *    ,  parameterValue    ApidList
 *    }
 * ```
 * 
 * @class
 */
export
class FspGetParameter_parApidList {
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
    readonly parameterValue: ApidList;

    constructor (
        parameterName: ParameterName,
        parameterValue: ApidList
    ) {
        if (!integerIsOneOf(parameterName, [BigInt(ParameterName_apidList)])) {
            throw new ASN1Error("FspGetParameter_parApidList.parameterName violates ParameterName (apidList)");
        }
        this.parameterName = parameterName;
        this.parameterValue = parameterValue;
    }

    /**
     * @summary Restructures an object into a FspGetParameter_parApidList
     * @description
     * 
     * This takes an `object` and converts it to a `FspGetParameter_parApidList`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FspGetParameter_parApidList`.
     * @returns {FspGetParameter_parApidList}
     */
    public static _from_object (_o: { [_K in keyof (FspGetParameter_parApidList)]: (FspGetParameter_parApidList)[_K] }): FspGetParameter_parApidList {
        return new FspGetParameter_parApidList(_o.parameterName, _o.parameterValue);
    }


}

/**
 * @summary The Leading Root Component Types of FspGetParameter_parApidList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FspGetParameter_parApidList: $.ComponentSpec[] = [
    new $.ComponentSpec("parameterName", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("parameterValue", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of FspGetParameter_parApidList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FspGetParameter_parApidList: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FspGetParameter_parApidList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FspGetParameter_parApidList: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FspGetParameter_parApidList: $.ASN1Decoder<FspGetParameter_parApidList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FspGetParameter_parApidList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FspGetParameter_parApidList (el: _Element): FspGetParameter_parApidList {
    if (!_cached_decoder_for_FspGetParameter_parApidList) { _cached_decoder_for_FspGetParameter_parApidList = function (el: _Element): FspGetParameter_parApidList {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("FspGetParameter-parApidList contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "parameterName";
    sequence[1].name = "parameterValue";
    let parameterName!: ParameterName;
    let parameterValue!: ApidList;
    parameterName = _decode_ParameterName(sequence[0]);
    parameterValue = _decode_ApidList(sequence[1]);
    return new FspGetParameter_parApidList(
        parameterName,
        parameterValue,

    );
}; }
    return _cached_decoder_for_FspGetParameter_parApidList(el);
}

let _cached_encoder_for_FspGetParameter_parApidList: $.ASN1Encoder<FspGetParameter_parApidList> | null = null;

/**
 * @summary Encodes a(n) FspGetParameter_parApidList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FspGetParameter_parApidList, encoded as an ASN.1 Element.
 */
export
function _encode_FspGetParameter_parApidList (value: FspGetParameter_parApidList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FspGetParameter_parApidList) { _cached_encoder_for_FspGetParameter_parApidList = function (value: FspGetParameter_parApidList, elGetter: $.ASN1Encoder<FspGetParameter_parApidList>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_ParameterName(value.parameterName, $.BER),
        /* REQUIRED   */ _encode_ApidList(value.parameterValue, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_FspGetParameter_parApidList(value, elGetter);
}


/* eslint-enable */
