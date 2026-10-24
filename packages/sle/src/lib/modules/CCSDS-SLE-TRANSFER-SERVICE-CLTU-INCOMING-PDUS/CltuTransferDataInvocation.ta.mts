/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Credentials, _decode_Credentials, _encode_Credentials } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Credentials.ta.mjs";
import { InvokeId, _decode_InvokeId, _encode_InvokeId } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/InvokeId.ta.mjs";
import { CltuIdentification, _decode_CltuIdentification, _encode_CltuIdentification } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-STRUCTURES/CltuIdentification.ta.mjs";
import { ConditionalTime, _decode_ConditionalTime, _encode_ConditionalTime } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/ConditionalTime.ta.mjs";
import { Duration, _decode_Duration, _encode_Duration } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Duration.ta.mjs";
import { SlduStatusNotification, _decode_SlduStatusNotification, _encode_SlduStatusNotification } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/SlduStatusNotification.ta.mjs";
import { CltuData, _decode_CltuData, _encode_CltuData } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-STRUCTURES/CltuData.ta.mjs";


/**
 * @summary CltuTransferDataInvocation
 * @description
 * 
 * User transfer of one CLTU for radiation. Valid only in state 3 (active).
 * Confirmed and non-blocking. A positive result buffers the CLTU until it is
 * due; CLTUs are processed in the order received, subject to the radiation
 * window and delay-time. A negative result leaves the CLTU out of the buffer.
 * The provider state stays active. The buffer exists to keep radiation steady
 * across variable ground latency, and every transfer falls inside the scheduled
 * service instance provision period. Section 3 names earliest-radiation-time,
 * latest-radiation-time, report, and data; Annex A uses
 * earliestTransmissionTime, latestTransmissionTime, slduRadiationNotification,
 * and cltuData. CCSDS 912.1-B-5, sections 3.6, 2.6.4.6, and 3.1.8.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CltuTransferDataInvocation ::= SEQUENCE
 * {  invokerCredentials            Credentials
 * ,  invokeId                      InvokeId
 * ,  cltuIdentification            CltuIdentification
 * ,  earliestTransmissionTime      ConditionalTime
 * ,  latestTransmissionTime        ConditionalTime
 * ,  delayTime                     Duration
 * ,  slduRadiationNotification     SlduStatusNotification
 * ,  cltuData                      CltuData
 * }
 * ```
 * 
 * @class
 */
export
class CltuTransferDataInvocation {
    /**
     * @summary `invokerCredentials`.
     * @description
     *
     * Credentials that let the performer authenticate this invocation when the
     * agreed authentication level requires it. Set this to unused when
     * authentication is not required. CCSDS 912.1-B-5, section 3.1.5.
     * @public
     * @readonly
     */
    readonly invokerCredentials: Credentials;
    /**
     * @summary `invokeId`.
     * @description
     *
     * Invoker-supplied integer. The performer returns it unchanged so the
     * return can be matched to this invocation. Reusing a value that still has
     * a return outstanding is rejected with diagnostic duplicate invoke id.
     * CCSDS 912.1-B-5, section 3.1.6.
     * @public
     * @readonly
     */
    readonly invokeId: InvokeId;
    /**
     * @summary `cltuIdentification`.
     * @description
     *
     * Monotonic sequence number of this CLTU. The first invocation after a
     * successful CLTU-START uses that START's first-cltu-identification. Each
     * later accepted invocation uses the cltu-identification from the previous
     * positive return. Any other value yields diagnostic out of sequence. The
     * supported range is assumed large enough that two CLTUs in the buffer do
     * not share a value. CCSDS 912.1-B-5, section 3.6.2.5.
     * @public
     * @readonly
     */
    readonly cltuIdentification: CltuIdentification;
    /**
     * @summary `earliestTransmissionTime`.
     * @description
     *
     * Earliest time the leading edge of the first bit of this CLTU may start
     * radiation (section 3.6.2.6, earliest-radiation-time). The undefined
     * alternative is the section 3 value null: processing starts once the
     * previous CLTU's delay-time has elapsed and production-status is
     * operational. A specified time may delay the PLOP-1 acquisition sequence
     * so the CLTU itself waits. Times are UTC CDS with epoch 1958-01-01, to at
     * least 0.1 s. CCSDS 912.1-B-5, sections 3.6.2.6 and 3.1.7.
     * @public
     * @readonly
     */
    readonly earliestTransmissionTime: ConditionalTime;
    /**
     * @summary `latestTransmissionTime`.
     * @description
     *
     * Latest time the leading edge of the first bit may start radiation
     * (section 3.6.2.7, latest-radiation-time). undefined means null: the
     * provider may radiate while the service instance is in state 3 (active)
     * and production-status is configured, operational, or interrupted. A
     * specified time defers an interrupted CLTU until production is operational
     * again or the time expires, in which case the CLTU is discarded. Equal to
     * earliest-radiation-time means radiate at that instant. If radiation has
     * not begun by this time the provider notifies sldu expired and drops the
     * CLTU. CCSDS 912.1-B-5, sections 3.6.2.7 and 3.1.7.
     * @public
     * @readonly
     */
    readonly latestTransmissionTime: ConditionalTime;
    /**
     * @summary `delayTime`.
     * @description
     *
     * Minimum radiation delay, in microseconds, between this CLTU and the next.
     * Measured from the trailing edge of the last radiated bit of the CLTU, or
     * of the PLOP-1 trailing idle sequence when that sequence is used. Under
     * PLOP-1 the carrier stays unmodulated by CLTU data until this delay
     * expires, the next CLTU is ready, or the session ends. Under PLOP-2 the
     * idle sequence continues for the same interval. A value below
     * minimum-delay-time yields diagnostic invalid delay time. CCSDS 912.1-B-5,
     * section 3.6.2.8.
     * @public
     * @readonly
     */
    readonly delayTime: Duration;
    /**
     * @summary `slduRadiationNotification`.
     * @description
     *
     * Whether the provider invokes CLTU-ASYNC-NOTIFY when radiation of this
     * CLTU completes (section 3.6.2.9, report). produceNotification is produce
     * report. doNotProduceNotification is do not produce report. The cltu
     * radiated notification is sent only for produce report. CCSDS 912.1-B-5,
     * sections 3.6.2.9 and 3.7.2.3.
     * @public
     * @readonly
     */
    readonly slduRadiationNotification: SlduStatusNotification;
    /**
     * @summary `cltuData`.
     * @description
     *
     * The CLTU to radiate. Space Data Link Security protection, when used, is
     * already inside the CLTU; this service neither inspects nor adds that
     * header and trailer. A CLTU that fails the checks in the service
     * agreement, including a length above maximum-cltu-length, yields
     * diagnostic CLTU error. CCSDS 912.1-B-5, sections 3.6.2.10 and 3.6.2.13.
     * @public
     * @readonly
     */
    readonly cltuData: CltuData;

    constructor (
        invokerCredentials: Credentials,
        invokeId: InvokeId,
        cltuIdentification: CltuIdentification,
        earliestTransmissionTime: ConditionalTime,
        latestTransmissionTime: ConditionalTime,
        delayTime: Duration,
        slduRadiationNotification: SlduStatusNotification,
        cltuData: CltuData
    ) {
        this.invokerCredentials = invokerCredentials;
        this.invokeId = invokeId;
        this.cltuIdentification = cltuIdentification;
        this.earliestTransmissionTime = earliestTransmissionTime;
        this.latestTransmissionTime = latestTransmissionTime;
        this.delayTime = delayTime;
        this.slduRadiationNotification = slduRadiationNotification;
        this.cltuData = cltuData;
    }

    /**
     * @summary Restructures an object into a CltuTransferDataInvocation
     * @description
     * 
     * This takes an `object` and converts it to a `CltuTransferDataInvocation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CltuTransferDataInvocation`.
     * @returns {CltuTransferDataInvocation}
     */
    public static _from_object (_o: { [_K in keyof (CltuTransferDataInvocation)]: (CltuTransferDataInvocation)[_K] }): CltuTransferDataInvocation {
        return new CltuTransferDataInvocation(_o.invokerCredentials, _o.invokeId, _o.cltuIdentification, _o.earliestTransmissionTime, _o.latestTransmissionTime, _o.delayTime, _o.slduRadiationNotification, _o.cltuData);
    }


}

/**
 * @summary The Leading Root Component Types of CltuTransferDataInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CltuTransferDataInvocation: $.ComponentSpec[] = [
    new $.ComponentSpec("invokerCredentials", false, $.hasAnyTag),
    new $.ComponentSpec("invokeId", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("cltuIdentification", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("earliestTransmissionTime", false, $.hasAnyTag),
    new $.ComponentSpec("latestTransmissionTime", false, $.hasAnyTag),
    new $.ComponentSpec("delayTime", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("slduRadiationNotification", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("cltuData", false, $.hasTag(_TagClass.universal, 4))
];

/**
 * @summary The Trailing Root Component Types of CltuTransferDataInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CltuTransferDataInvocation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CltuTransferDataInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CltuTransferDataInvocation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CltuTransferDataInvocation: $.ASN1Decoder<CltuTransferDataInvocation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CltuTransferDataInvocation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CltuTransferDataInvocation (el: _Element): CltuTransferDataInvocation {
    if (!_cached_decoder_for_CltuTransferDataInvocation) { _cached_decoder_for_CltuTransferDataInvocation = function (el: _Element): CltuTransferDataInvocation {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 8) {
        throw new _ConstructionError("CltuTransferDataInvocation contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "invokerCredentials";
    sequence[1].name = "invokeId";
    sequence[2].name = "cltuIdentification";
    sequence[3].name = "earliestTransmissionTime";
    sequence[4].name = "latestTransmissionTime";
    sequence[5].name = "delayTime";
    sequence[6].name = "slduRadiationNotification";
    sequence[7].name = "cltuData";
    let invokerCredentials!: Credentials;
    let invokeId!: InvokeId;
    let cltuIdentification!: CltuIdentification;
    let earliestTransmissionTime!: ConditionalTime;
    let latestTransmissionTime!: ConditionalTime;
    let delayTime!: Duration;
    let slduRadiationNotification!: SlduStatusNotification;
    let cltuData!: CltuData;
    invokerCredentials = _decode_Credentials(sequence[0]);
    invokeId = _decode_InvokeId(sequence[1]);
    cltuIdentification = _decode_CltuIdentification(sequence[2]);
    earliestTransmissionTime = _decode_ConditionalTime(sequence[3]);
    latestTransmissionTime = _decode_ConditionalTime(sequence[4]);
    delayTime = _decode_Duration(sequence[5]);
    slduRadiationNotification = _decode_SlduStatusNotification(sequence[6]);
    cltuData = _decode_CltuData(sequence[7]);
    return new CltuTransferDataInvocation(
        invokerCredentials,
        invokeId,
        cltuIdentification,
        earliestTransmissionTime,
        latestTransmissionTime,
        delayTime,
        slduRadiationNotification,
        cltuData,

    );
}; }
    return _cached_decoder_for_CltuTransferDataInvocation(el);
}

let _cached_encoder_for_CltuTransferDataInvocation: $.ASN1Encoder<CltuTransferDataInvocation> | null = null;

/**
 * @summary Encodes a(n) CltuTransferDataInvocation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CltuTransferDataInvocation, encoded as an ASN.1 Element.
 */
export
function _encode_CltuTransferDataInvocation (value: CltuTransferDataInvocation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CltuTransferDataInvocation) { _cached_encoder_for_CltuTransferDataInvocation = function (value: CltuTransferDataInvocation, _elGetter: $.ASN1Encoder<CltuTransferDataInvocation>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_Credentials(value.invokerCredentials, $.BER),
        /* REQUIRED   */ _encode_InvokeId(value.invokeId, $.BER),
        /* REQUIRED   */ _encode_CltuIdentification(value.cltuIdentification, $.BER),
        /* REQUIRED   */ _encode_ConditionalTime(value.earliestTransmissionTime, $.BER),
        /* REQUIRED   */ _encode_ConditionalTime(value.latestTransmissionTime, $.BER),
        /* REQUIRED   */ _encode_Duration(value.delayTime, $.BER),
        /* REQUIRED   */ _encode_SlduStatusNotification(value.slduRadiationNotification, $.BER),
        /* REQUIRED   */ _encode_CltuData(value.cltuData, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_CltuTransferDataInvocation(value, elGetter);
}


/* eslint-enable */
