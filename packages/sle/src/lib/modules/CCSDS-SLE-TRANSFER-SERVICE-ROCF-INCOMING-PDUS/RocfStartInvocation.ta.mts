/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type Credentials, _decode_Credentials, _encode_Credentials } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Credentials.ta.mjs";
import { type InvokeId, _decode_InvokeId, _encode_InvokeId } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/InvokeId.ta.mjs";
import { type ConditionalTime, _decode_ConditionalTime, _encode_ConditionalTime } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/ConditionalTime.ta.mjs";
import { GvcId, _decode_GvcId, _encode_GvcId } from "../CCSDS-SLE-TRANSFER-SERVICE-ROCF-STRUCTURES/GvcId.ta.mjs";
import { type ControlWordType, _decode_ControlWordType, _encode_ControlWordType } from "../CCSDS-SLE-TRANSFER-SERVICE-ROCF-STRUCTURES/ControlWordType.ta.mjs";
import { type UpdateMode, _decode_UpdateMode, _encode_UpdateMode } from "../CCSDS-SLE-TRANSFER-SERVICE-ROCF-STRUCTURES/UpdateMode.ta.mjs";


/**
 * @summary RocfStartInvocation
 * @description
 * 
 * The user invokes ROCF-START, only in state 2 (ready), to request delivery of
 * operational control fields. On a positive return the provider enters state 3
 * (active) and delivers, in the order the frames were received, every OCF that
 * meets the criteria in these parameters. ROCF-STOP returns the provider to
 * state 2. A further START can select a new interval or channel. The operation
 * is confirmed and non-blocking.
 *
 * Annex A carries the conditional tc-vcid parameter of table 3-4 on the clcw
 * alternative of controlWordType.
 *
 * CCSDS 911.5-B-4, sections 2.6.4.2, 3.4.1, 3.4.3, and A2.6.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RocfStartInvocation ::= SEQUENCE
 * {  invokerCredentials            Credentials
 * ,  invokeId                      InvokeId
 * ,  startTime                     ConditionalTime
 * ,  stopTime                      ConditionalTime
 * ,  requestedGvcid                GvcId
 * ,  controlWordType               ControlWordType
 * ,  updateMode                    UpdateMode
 * }
 * ```
 * 
 * @class
 */
export
class RocfStartInvocation {
    /**
     * @summary `invokerCredentials`.
     * @description
     * 
     * Credentials the provider uses to authenticate this invocation. When the
     * agreed authentication level does not cover the invocation, the value is
     * unused. The octet layout is the bilaterally agreed algorithm, which this
     * specification leaves unspecified. CCSDS 911.5-B-4, sections 3.1.5 and
     * 3.4.2.2.
     * @public
     * @readonly
     */
    readonly invokerCredentials: Credentials;
    /**
     * @summary `invokeId`.
     * @description
     * 
     * Integer chosen by the invoker. The performer returns it unchanged so the
     * return can be matched to this invocation. A value that duplicates an
     * invoke-ID still awaiting confirmation in this service instance is
     * rejected. CCSDS 911.5-B-4, sections 3.1.6 and 3.4.2.4.
     * @public
     * @readonly
     */
    readonly invokeId: InvokeId;
    /**
     * @summary `startTime`.
     * @description
     * 
     * Earliest Earth Receive Time of an OCF to deliver, or null when the user
     * sets no start bound. Times are UTC. Online, a null start begins with the
     * OCF from the next frame acquired on the space link, and a specified start
     * must lie inside the service instance provision period. Online delivery
     * stays within the space link session of this instance. Offline, a null
     * start is rejected as missing time value, and OCFs from any session that
     * meet the criteria are eligible. In complete online delivery, OCFs and
     * notifications older than start-time are removed from the online buffer.
     * If start-time is earlier than every OCF still held in the complete-online
     * or offline buffer, delivery begins with the earliest OCF still held. The
     * start must be earlier than the stop time.
     *
     * CCSDS 911.5-B-4, sections 3.1.7.1, 3.4.2.5, 3.1.9.2.16, and 3.1.9.3.10.
     * @public
     * @readonly
     */
    readonly startTime: ConditionalTime;
    /**
     * @summary `stopTime`.
     * @description
     * 
     * Latest Earth Receive Time to include, or null when the user sets no stop
     * bound. Delivery ceases when the next candidate OCF has a later ERT.
     * Online, a null stop continues until ROCF-STOP or the association ends,
     * and a specified stop must be earlier than or equal to the end of the
     * provision period. Offline, a null stop is rejected as missing time value,
     * and stop-time plus the offline processing latency must be earlier than
     * the current time. Offline retrieval applies to frames already acquired
     * when START is invoked. The stop must be later than the start time.
     *
     * CCSDS 911.5-B-4, sections 3.4.2.6 and 3.1.9.3.
     * @public
     * @readonly
     */
    readonly stopTime: ConditionalTime;
    /**
     * @summary `requestedGvcid`.
     * @description
     * 
     * Master Channel or Virtual Channel from which OCFs are extracted. The
     * value must belong to the permitted global-VCID set for this instance. One
     * instance permits one Master Channel, one Virtual Channel, or one Master
     * Channel together with a set of its Virtual Channels. When that set names
     * a Master Channel and names no Virtual Channel of that Master Channel, a
     * Virtual Channel request for it is invalid. The physical channel is the
     * RAF data channel of the service package.
     *
     * CCSDS 911.5-B-4, sections 2.1, 2.7, and 3.4.2.7.
     * @public
     * @readonly
     */
    readonly requestedGvcid: GvcId;
    /**
     * @summary `controlWordType`.
     * @description
     * 
     * Which reports inside the extracted OCF are delivered. allControlWords
     * delivers every OCF from the selected channel. clcw delivers OCFs whose
     * control word type is 0, a CLCW, and carries the telecommand VC of section
     * 3.4.2.9. notClcw delivers OCFs whose control word type is 1; section
     * 3.4.2.8 says this is the setting used to obtain Frame Security Reports.
     * The selected type must be one service management permits for the
     * instance.
     *
     * CCSDS 911.5-B-4, sections 3.4.2.8, 3.4.2.9, 1.6.1.9.4, and 3.1.3.2.
     * @public
     * @readonly
     */
    readonly controlWordType: ControlWordType;
    /**
     * @summary `updateMode`.
     * @description
     * 
     * continuous inserts a transfer-data record for every OCF that meets the
     * start time, stop time, global VCID, control word type, and telecommand VC
     * criteria. changeBased inserts a record when the OCF contents differ from
     * the previous OCF with the same telecommand VC already placed in the
     * transfer buffer, or when no such OCF has been delivered since this START.
     * Section 3.4.2.10 states that comparison in terms of tc-vcid and gives no
     * separate rule for control words that are not CLCWs. The mode must be in
     * the permitted update-mode set.
     *
     * CCSDS 911.5-B-4, sections 3.4.2.10 and 3.4.2.12.
     * @public
     * @readonly
     */
    readonly updateMode: UpdateMode;

    constructor (
        invokerCredentials: Credentials,
        invokeId: InvokeId,
        startTime: ConditionalTime,
        stopTime: ConditionalTime,
        requestedGvcid: GvcId,
        controlWordType: ControlWordType,
        updateMode: UpdateMode
    ) {
        this.invokerCredentials = invokerCredentials;
        this.invokeId = invokeId;
        this.startTime = startTime;
        this.stopTime = stopTime;
        this.requestedGvcid = requestedGvcid;
        this.controlWordType = controlWordType;
        this.updateMode = updateMode;
    }

    /**
     * @summary Restructures an object into a RocfStartInvocation
     * @description
     * 
     * This takes an `object` and converts it to a `RocfStartInvocation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RocfStartInvocation`.
     * @returns {RocfStartInvocation}
     */
    public static _from_object (_o: { [_K in keyof (RocfStartInvocation)]: (RocfStartInvocation)[_K] }): RocfStartInvocation {
        return new RocfStartInvocation(_o.invokerCredentials, _o.invokeId, _o.startTime, _o.stopTime, _o.requestedGvcid, _o.controlWordType, _o.updateMode);
    }


}

/**
 * @summary The Leading Root Component Types of RocfStartInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RocfStartInvocation: $.ComponentSpec[] = [
    new $.ComponentSpec("invokerCredentials", false, $.hasAnyTag),
    new $.ComponentSpec("invokeId", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("startTime", false, $.hasAnyTag),
    new $.ComponentSpec("stopTime", false, $.hasAnyTag),
    new $.ComponentSpec("requestedGvcid", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("controlWordType", false, $.hasAnyTag),
    new $.ComponentSpec("updateMode", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of RocfStartInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RocfStartInvocation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RocfStartInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RocfStartInvocation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RocfStartInvocation: $.ASN1Decoder<RocfStartInvocation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RocfStartInvocation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RocfStartInvocation (el: _Element): RocfStartInvocation {
    if (!_cached_decoder_for_RocfStartInvocation) { _cached_decoder_for_RocfStartInvocation = function (el: _Element): RocfStartInvocation {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 7) {
        throw new _ConstructionError("RocfStartInvocation contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "invokerCredentials";
    sequence[1].name = "invokeId";
    sequence[2].name = "startTime";
    sequence[3].name = "stopTime";
    sequence[4].name = "requestedGvcid";
    sequence[5].name = "controlWordType";
    sequence[6].name = "updateMode";
    let invokerCredentials!: Credentials;
    let invokeId!: InvokeId;
    let startTime!: ConditionalTime;
    let stopTime!: ConditionalTime;
    let requestedGvcid!: GvcId;
    let controlWordType!: ControlWordType;
    let updateMode!: UpdateMode;
    invokerCredentials = _decode_Credentials(sequence[0]);
    invokeId = _decode_InvokeId(sequence[1]);
    startTime = _decode_ConditionalTime(sequence[2]);
    stopTime = _decode_ConditionalTime(sequence[3]);
    requestedGvcid = _decode_GvcId(sequence[4]);
    controlWordType = _decode_ControlWordType(sequence[5]);
    updateMode = _decode_UpdateMode(sequence[6]);
    return new RocfStartInvocation(
        invokerCredentials,
        invokeId,
        startTime,
        stopTime,
        requestedGvcid,
        controlWordType,
        updateMode,

    );
}; }
    return _cached_decoder_for_RocfStartInvocation(el);
}

let _cached_encoder_for_RocfStartInvocation: $.ASN1Encoder<RocfStartInvocation> | null = null;

/**
 * @summary Encodes a(n) RocfStartInvocation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RocfStartInvocation, encoded as an ASN.1 Element.
 */
export
function _encode_RocfStartInvocation (value: RocfStartInvocation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RocfStartInvocation) { _cached_encoder_for_RocfStartInvocation = function (value: RocfStartInvocation, _elGetter: $.ASN1Encoder<RocfStartInvocation>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_Credentials(value.invokerCredentials, $.BER),
        /* REQUIRED   */ _encode_InvokeId(value.invokeId, $.BER),
        /* REQUIRED   */ _encode_ConditionalTime(value.startTime, $.BER),
        /* REQUIRED   */ _encode_ConditionalTime(value.stopTime, $.BER),
        /* REQUIRED   */ _encode_GvcId(value.requestedGvcid, $.BER),
        /* REQUIRED   */ _encode_ControlWordType(value.controlWordType, $.BER),
        /* REQUIRED   */ _encode_UpdateMode(value.updateMode, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_RocfStartInvocation(value, elGetter);
}


/* eslint-enable */
