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
import { GvcId, _decode_GvcId, _encode_GvcId } from "../CCSDS-SLE-TRANSFER-SERVICE-RCF-STRUCTURES/GvcId.ta.mjs";


/**
 * @summary RcfStartInvocation
 * @description
 *
 * The user invokes RCF-START, only in state 2 (ready), to begin delivery of
 * telemetry frames from one Master Channel or one Virtual Channel. On a
 * positive return the provider enters state 3 (active) and delivers, in
 * space-link order, frames whose Earth Receive Time lies in the requested
 * interval and whose spacecraft identifier and Virtual Channel identifier
 * match the requested global VCID. An online instance delivers frames acquired
 * during its space link session. An offline instance delivers available frames
 * that meet the criteria regardless of which space link session acquired them.
 * The user changes the interval or the channel by invoking RCF-STOP and then
 * another RCF-START.
 *
 * CCSDS 911.2-B-4, sections 2.1, 2.6.4.2, 2.7, 3.4, and 1.6.1.8.4.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RcfStartInvocation ::= SEQUENCE
 * {   invokerCredentials               Credentials
 * ,   invokeId                         InvokeId
 * ,   startTime                        ConditionalTime
 * ,   stopTime                         ConditionalTime
 * ,   requestedGvcid                   GvcId
 * }
 * ```
 * 
 * @class
 */
export
class RcfStartInvocation {
    /**
     * @summary `invokerCredentials`.
     * @description
     *
     * Credentials that let the provider authenticate this invocation when the
     * agreed level is 'all'. When the level is 'bind' or 'none', the value
     * should be 'unused'.
     *
     * CCSDS 911.2-B-4, sections 3.4.2.2 and 3.1.5.
     * @public
     * @readonly
     */
    readonly invokerCredentials: Credentials;
    /**
     * @summary `invokeId`.
     * @description
     *
     * User-supplied integer. The provider returns it unchanged so the user can
     * match the return to this invocation. A value that still belongs to an
     * invocation awaiting confirmation in this service instance is rejected
     * with duplicate Invoke-ID.
     *
     * CCSDS 911.2-B-4, sections 3.1.6 and 3.4.2.4.
     * @public
     * @readonly
     */
    readonly invokeId: InvokeId;
    /**
     * @summary `startTime`.
     * @description
     *
     * Earliest Earth Receive Time of a frame to deliver, or null. A known time
     * selects frames whose Earth Receive Time is equal to or later than this
     * time. In an online mode, null starts with the next frame acquired from
     * the space link, and a known time must fall inside the service instance
     * provision period. In offline mode the time is required. The time must be
     * earlier than stop-time. If it is earlier than every frame still buffered,
     * delivery begins with the earliest frame available. If an offline interval
     * contains no frames, the provider delivers only the end-of-data
     * notification.
     *
     * CCSDS 911.2-B-4, sections 3.4.2.5, 3.1.9.2.16, and 3.1.9.3.10.
     * @public
     * @readonly
     */
    readonly startTime: ConditionalTime;
    /**
     * @summary `stopTime`.
     * @description
     *
     * Last Earth Receive Time to deliver, or null. Delivery ceases when the
     * next frame that would be delivered has an Earth Receive Time later than
     * this time. In an online mode, null continues until RCF-STOP or the
     * association ends, and a known time must be earlier than or equal to the
     * end of the service instance provision period. In offline mode the time is
     * required, and that time plus the offline processing latency must be
     * earlier than the current time. Offline delivery covers frames already
     * acquired when RCF-START is invoked. The latency is the delay after
     * acquisition before a frame can be retrieved offline, and is negotiated by
     * service management.
     *
     * CCSDS 911.2-B-4, section 3.4.2.6.
     * @public
     * @readonly
     */
    readonly stopTime: ConditionalTime;
    /**
     * @summary `requestedGvcid`.
     * @description
     *
     * Master Channel or Virtual Channel to deliver: Transfer Frame Version
     * Number, spacecraft identifier, and either a Virtual Channel identifier or
     * the master-channel selection. The channel must be one permitted for this
     * service instance. The physical channel is the RAF data channel named by
     * the service package.
     *
     * CCSDS 911.2-B-4, sections 3.4.2.7 and 1.6.1.8.4.
     * @public
     * @readonly
     */
    readonly requestedGvcid: GvcId;

    constructor (
        invokerCredentials: Credentials,
        invokeId: InvokeId,
        startTime: ConditionalTime,
        stopTime: ConditionalTime,
        requestedGvcid: GvcId
    ) {
        this.invokerCredentials = invokerCredentials;
        this.invokeId = invokeId;
        this.startTime = startTime;
        this.stopTime = stopTime;
        this.requestedGvcid = requestedGvcid;
    }

    /**
     * @summary Restructures an object into a RcfStartInvocation
     * @description
     * 
     * This takes an `object` and converts it to a `RcfStartInvocation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RcfStartInvocation`.
     * @returns {RcfStartInvocation}
     */
    public static _from_object (_o: { [_K in keyof (RcfStartInvocation)]: (RcfStartInvocation)[_K] }): RcfStartInvocation {
        return new RcfStartInvocation(_o.invokerCredentials, _o.invokeId, _o.startTime, _o.stopTime, _o.requestedGvcid);
    }


}

/**
 * @summary The Leading Root Component Types of RcfStartInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading
 * root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RcfStartInvocation: $.ComponentSpec[] = [
    new $.ComponentSpec("invokerCredentials", false, $.hasAnyTag),
    new $.ComponentSpec("invokeId", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("startTime", false, $.hasAnyTag),
    new $.ComponentSpec("stopTime", false, $.hasAnyTag),
    new $.ComponentSpec("requestedGvcid", false, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of RcfStartInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing
 * root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RcfStartInvocation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RcfStartInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension
 * addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RcfStartInvocation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RcfStartInvocation: $.ASN1Decoder<RcfStartInvocation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RcfStartInvocation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RcfStartInvocation (el: _Element): RcfStartInvocation {
    if (!_cached_decoder_for_RcfStartInvocation) { _cached_decoder_for_RcfStartInvocation = function (el: _Element): RcfStartInvocation {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 5) {
        throw new _ConstructionError("RcfStartInvocation contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "invokerCredentials";
    sequence[1].name = "invokeId";
    sequence[2].name = "startTime";
    sequence[3].name = "stopTime";
    sequence[4].name = "requestedGvcid";
    let invokerCredentials!: Credentials;
    let invokeId!: InvokeId;
    let startTime!: ConditionalTime;
    let stopTime!: ConditionalTime;
    let requestedGvcid!: GvcId;
    invokerCredentials = _decode_Credentials(sequence[0]);
    invokeId = _decode_InvokeId(sequence[1]);
    startTime = _decode_ConditionalTime(sequence[2]);
    stopTime = _decode_ConditionalTime(sequence[3]);
    requestedGvcid = _decode_GvcId(sequence[4]);
    return new RcfStartInvocation(
        invokerCredentials,
        invokeId,
        startTime,
        stopTime,
        requestedGvcid,

    );
}; }
    return _cached_decoder_for_RcfStartInvocation(el);
}

let _cached_encoder_for_RcfStartInvocation: $.ASN1Encoder<RcfStartInvocation> | null = null;

/**
 * @summary Encodes a(n) RcfStartInvocation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RcfStartInvocation, encoded as an ASN.1 Element.
 */
export
function _encode_RcfStartInvocation (value: RcfStartInvocation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RcfStartInvocation) { _cached_encoder_for_RcfStartInvocation = function (value: RcfStartInvocation, _elGetter: $.ASN1Encoder<RcfStartInvocation>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_Credentials(value.invokerCredentials, $.BER),
        /* REQUIRED   */ _encode_InvokeId(value.invokeId, $.BER),
        /* REQUIRED   */ _encode_ConditionalTime(value.startTime, $.BER),
        /* REQUIRED   */ _encode_ConditionalTime(value.stopTime, $.BER),
        /* REQUIRED   */ _encode_GvcId(value.requestedGvcid, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_RcfStartInvocation(value, elGetter);
}


/* eslint-enable */
