/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Credentials, _decode_Credentials, _encode_Credentials } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Credentials.ta.mjs";
import { InvokeId, _decode_InvokeId, _encode_InvokeId } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/InvokeId.ta.mjs";
import { ConditionalTime, _decode_ConditionalTime, _encode_ConditionalTime } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/ConditionalTime.ta.mjs";
import { RequestedFrameQuality, _decode_RequestedFrameQuality, _encode_RequestedFrameQuality } from "../CCSDS-SLE-TRANSFER-SERVICE-RAF-STRUCTURES/RequestedFrameQuality.ta.mjs";


/**
 * @summary RafStartInvocation
 * @description
 * 
 * User invocation of RAF-START. Valid only in state 2 (ready). On a positive
 * return the provider enters state 3 (active) and delivers frames that meet the
 * start time, stop time, and requested frame quality, in the order they were
 * received on the space link. Changing the time bounds later is an RAF-STOP
 * followed by another RAF-START.
 * 
 * CCSDS 911.1-B-5, sections 3.4, 2.6.4.2, and 1.6.1.8.4.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RafStartInvocation ::= SEQUENCE
 * {   invokerCredentials                Credentials
 * ,   invokeId                          InvokeId
 * ,   startTime                         ConditionalTime
 * ,   stopTime                          ConditionalTime
 * ,   requestedFrameQuality             RequestedFrameQuality
 * }
 * ```
 * 
 * @class
 */
export
class RafStartInvocation {
    /**
     * @summary `invokerCredentials`.
     * @description
     * Information with which the provider authenticates this invocation. When
     * the agreed level is `all`, every RAF invocation and return except
     * RAF-PEER-ABORT is authenticated; `bind` authenticates only RAF-BIND;
     * `none` leaves every invocation and return unauthenticated. When
     * this invocation is unauthenticated, the value should be `unused`.
     * CCSDS 911.1-B-5, sections
     * 3.4.2.2 and 3.1.5.
     * @public
     * @readonly
     */
    readonly invokerCredentials: Credentials;
    /**
     * @summary `invokeId`.
     * @description
     * Invoker-chosen integer, returned unchanged, that pairs this return with
     * its invocation. A value that still has an outstanding return in the same
     * service instance is rejected with diagnostic `duplicate Invoke-ID`. CCSDS
     * 911.1-B-5, sections 3.4.2.4 and 3.1.6.
     * @public
     * @readonly
     */
    readonly invokeId: InvokeId;
    /**
     * @summary `startTime`.
     * @description
     * Earliest Earth Receive Time to deliver, or `undefined` for the null start
     * time in section 3. Frames with an earlier ERT are withheld. Online, null
     * starts at the next frame acquired from the space link, and only frames
     * from this instance's space link session are eligible. Offline, a null
     * start time is rejected with `missingTimeValue`, and frames are taken from
     * the offline buffer regardless of which session acquired them.
     * 
     * Online validity: at or after the service-instance provision period start,
     * before the provision period end, and earlier than `stopTime`. In complete
     * online and offline delivery, a start time earlier than every frame still
     * held begins delivery at the earliest frame still held.
     * 
     * CCSDS 911.1-B-5, sections 3.4.2.5, 3.4.2.9, 3.1.9.2.16, and 3.1.9.3.10.
     * @public
     * @readonly
     */
    readonly startTime: ConditionalTime;
    /**
     * @summary `stopTime`.
     * @description
     * Delivery ceases when the next candidate frame has an ERT later than this
     * time. `undefined` is the null stop time. Online, null means delivery
     * continues until RAF-STOP or the association is released or aborted, and
     * only frames from this instance's space link session are eligible.
     * Offline, null is rejected with `missingTimeValue`.
     * 
     * The time must be later than `startTime`. Online, a known stop time must
     * be at or before the provision period end. Offline, the stop time plus the
     * offline processing latency must be earlier than the current time, and
     * only frames already acquired when RAF-START is invoked are available.
     * 
     * CCSDS 911.1-B-5, sections 3.4.2.6 and 3.1.9.3.
     * @public
     * @readonly
     */
    readonly stopTime: ConditionalTime;
    /**
     * @summary `requestedFrameQuality`.
     * @description
     * Which frames to deliver, by delivered-frame-quality. `goodFramesOnly`
     * delivers frames annotated `good`. `erredFrameOnly` delivers frames
     * annotated `erred`. `allFrames` delivers every frame, which is the only
     * setting that includes `undetermined`. The Transfer Frame type follows the
     * physical channel selected by service management.
     * 
     * CCSDS 911.1-B-5, sections 3.4.2.7 and 3.6.2.6.
     * @public
     * @readonly
     */
    readonly requestedFrameQuality: RequestedFrameQuality;

    constructor (
        invokerCredentials: Credentials,
        invokeId: InvokeId,
        startTime: ConditionalTime,
        stopTime: ConditionalTime,
        requestedFrameQuality: RequestedFrameQuality
    ) {
        this.invokerCredentials = invokerCredentials;
        this.invokeId = invokeId;
        this.startTime = startTime;
        this.stopTime = stopTime;
        this.requestedFrameQuality = requestedFrameQuality;
    }

    /**
     * @summary Restructures an object into a RafStartInvocation
     * @description
     * 
     * This takes an `object` and converts it to a `RafStartInvocation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RafStartInvocation`.
     * @returns {RafStartInvocation}
     */
    public static _from_object (_o: { [_K in keyof (RafStartInvocation)]: (RafStartInvocation)[_K] }): RafStartInvocation {
        return new RafStartInvocation(_o.invokerCredentials, _o.invokeId, _o.startTime, _o.stopTime, _o.requestedFrameQuality);
    }


}

/**
 * @summary The Leading Root Component Types of RafStartInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RafStartInvocation: $.ComponentSpec[] = [
    new $.ComponentSpec("invokerCredentials", false, $.hasAnyTag),
    new $.ComponentSpec("invokeId", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("startTime", false, $.hasAnyTag),
    new $.ComponentSpec("stopTime", false, $.hasAnyTag),
    new $.ComponentSpec("requestedFrameQuality", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of RafStartInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RafStartInvocation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RafStartInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RafStartInvocation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RafStartInvocation: $.ASN1Decoder<RafStartInvocation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RafStartInvocation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RafStartInvocation (el: _Element): RafStartInvocation {
    if (!_cached_decoder_for_RafStartInvocation) { _cached_decoder_for_RafStartInvocation = function (el: _Element): RafStartInvocation {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 5) {
        throw new _ConstructionError("RafStartInvocation contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "invokerCredentials";
    sequence[1].name = "invokeId";
    sequence[2].name = "startTime";
    sequence[3].name = "stopTime";
    sequence[4].name = "requestedFrameQuality";
    let invokerCredentials!: Credentials;
    let invokeId!: InvokeId;
    let startTime!: ConditionalTime;
    let stopTime!: ConditionalTime;
    let requestedFrameQuality!: RequestedFrameQuality;
    invokerCredentials = _decode_Credentials(sequence[0]);
    invokeId = _decode_InvokeId(sequence[1]);
    startTime = _decode_ConditionalTime(sequence[2]);
    stopTime = _decode_ConditionalTime(sequence[3]);
    requestedFrameQuality = _decode_RequestedFrameQuality(sequence[4]);
    return new RafStartInvocation(
        invokerCredentials,
        invokeId,
        startTime,
        stopTime,
        requestedFrameQuality,

    );
}; }
    return _cached_decoder_for_RafStartInvocation(el);
}

let _cached_encoder_for_RafStartInvocation: $.ASN1Encoder<RafStartInvocation> | null = null;

/**
 * @summary Encodes a(n) RafStartInvocation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RafStartInvocation, encoded as an ASN.1 Element.
 */
export
function _encode_RafStartInvocation (value: RafStartInvocation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RafStartInvocation) { _cached_encoder_for_RafStartInvocation = function (value: RafStartInvocation, _elGetter: $.ASN1Encoder<RafStartInvocation>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_Credentials(value.invokerCredentials, $.BER),
        /* REQUIRED   */ _encode_InvokeId(value.invokeId, $.BER),
        /* REQUIRED   */ _encode_ConditionalTime(value.startTime, $.BER),
        /* REQUIRED   */ _encode_ConditionalTime(value.stopTime, $.BER),
        /* REQUIRED   */ _encode_RequestedFrameQuality(value.requestedFrameQuality, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_RafStartInvocation(value, elGetter);
}


/* eslint-enable */
