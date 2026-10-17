/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Credentials, _decode_Credentials, _encode_Credentials } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Credentials.ta.mjs";
import { InvokeId, _decode_InvokeId, _encode_InvokeId } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/InvokeId.ta.mjs";
import { PacketIdentification, _decode_PacketIdentification, _encode_PacketIdentification } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/PacketIdentification.ta.mjs";
import { ProductionTime, _decode_ProductionTime, _encode_ProductionTime } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/ProductionTime.ta.mjs";
import { Duration, _decode_Duration, _encode_Duration } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Duration.ta.mjs";
import { TransmissionMode, _decode_TransmissionMode, _encode_TransmissionMode } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/TransmissionMode.ta.mjs";
import { Map, _decode_Map, _encode_Map } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/Map.ta.mjs";
import { BlockingUsage, _decode_BlockingUsage, _encode_BlockingUsage } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/BlockingUsage.ta.mjs";
import { SlduStatusNotification, _decode_SlduStatusNotification, _encode_SlduStatusNotification } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/SlduStatusNotification.ta.mjs";
import { FspData, _decode_FspData, _encode_FspData } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/FspData.ta.mjs";


/**
 * @summary FspTransferDataInvocation
 * @description
 * 
 * User invocation of FSP-TRANSFER-DATA, transferring one Space Packet. Valid
 * only in state 3 (active). On a positive return the provider queues the Packet
 * and processes queued Packets in the order received, using the production-time
 * and delay parameters. A negative return leaves the Packet unqueued and the
 * provider in state 3.
 * 
 * CCSDS 912.3-B-3, sections 3.6.1 and 3.6.3.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FspTransferDataInvocation ::= SEQUENCE
 * {  invokerCredentials            Credentials
 * ,  invokeId                      InvokeId
 * ,  packetIdentification          PacketIdentification
 * ,  earliestProductionTime        ProductionTime
 * ,  latestProductionTime          ProductionTime
 * ,  delayTime                     Duration
 * ,  transmissionMode              TransmissionMode
 * ,  map                           Map
 * ,  blocking                      BlockingUsage
 * ,  processingStartedNotification SlduStatusNotification
 * ,  radiatedNotification          SlduStatusNotification
 * ,  acknowledgedNotification      SlduStatusNotification
 * ,  fspData                       FspData
 * }
 * ```
 * 
 * @class
 */
export
class FspTransferDataInvocation {
    /**
     * @summary `invokerCredentials`.
     * @description
     * Information with which the performer authenticates this invocation. When
     * the agreed level is `all`, every FSP invocation and return except
     * FSP-PEER-ABORT is authenticated; `bind` authenticates only FSP-BIND;
     * `none` leaves every invocation and return unauthenticated. When this
     * invocation is unauthenticated, the value should be `unused`.
     * 
     * CCSDS 912.3-B-3, sections 3.1.5.1, 3.1.5.4, and 3.1.5.5.
     * @public
     * @readonly
     */
    readonly invokerCredentials: Credentials;
    /**
     * @summary `invokeId`.
     * @description
     * Invoker-chosen integer, returned unchanged, that pairs this return with
     * its invocation. An invoke-ID that still has an outstanding return in the
     * same service instance is rejected with `duplicateInvokeId`.
     * 
     * CCSDS 912.3-B-3, sections 3.1.6.4 and 3.1.6.5.
     * @public
     * @readonly
     */
    readonly invokeId: InvokeId;
    /**
     * @summary `packetIdentification`.
     * @description
     * Monotonic sequence number of this Space Packet. The first accepted
     * invocation after a successful FSP-START uses the
     * `firstPacketIdentification` of that FSP-START. Each later accepted
     * invocation increments it. The provider assumes the range is large enough
     * that two Packets buffered or in process for one service instance do not
     * share a value.
     * 
     * CCSDS 912.3-B-3, section 3.6.2.5.
     * @public
     * @readonly
     */
    readonly packetIdentification: PacketIdentification;
    /**
     * @summary `earliestProductionTime`.
     * @description
     * Earliest time the provider may start processing this Packet, or
     * unspecified (`null`). An unspecified value lets processing begin
     * immediately when production status is operational and the requested
     * transmission mode is available, or when `latestProductionTime` is also
     * unspecified. A specified time is at or after the earliest production time
     * of every preceding Packet. Time values use UTC and the CCSDS day
     * segmented time code, epoch 1958-01-01, with a 16-bit day segment, at a
     * resolution of microseconds or picoseconds, and are precise and accurate
     * to at least 0.1 second.
     * 
     * CCSDS 912.3-B-3, sections 3.6.2.6, 3.1.7, and B3.3.
     * @public
     * @readonly
     */
    readonly earliestProductionTime: ProductionTime;
    /**
     * @summary `latestProductionTime`.
     * @description
     * Latest time at which the provider may start processing this Packet, or
     * unspecified (`null`). Unspecified means the Packet is processed while the
     * instance stays in state 3 and production is not halted. If the time
     * passes before the Packet leaves the packets queue, the `slduExpired`
     * exception occurs and the Packet is not processed. A specified time is at
     * or after the latest production time of every preceding Packet. Setting it
     * equal to `earliestProductionTime` generally causes `lateSldu`, because
     * processing steps such as blocking consume time before the latest time is
     * checked. Once the Packet has been multiplexed into a TC frame, this value
     * no longer affects that frame or its CLTU. When the time is specified, the
     * provider defers processing while production status is `interrupted` or
     * the required transmission mode is unavailable, until recovery or until
     * this time would expire.
     * 
     * CCSDS 912.3-B-3, sections 3.6.2.7 and B3.
     * @public
     * @readonly
     */
    readonly latestProductionTime: ProductionTime;
    /**
     * @summary `delayTime`.
     * @description
     * Minimum radiation delay, in microseconds, between the CLTU or CLTUs
     * bearing this Space Packet and the next CLTU. The delay also applies when
     * COP-1 retransmits the frame. It is measured from the trailing edge of the
     * last radiated bit of the last CLTU that encapsulates any part of this
     * Packet to the leading edge of the first bit of the next CLTU, and it
     * applies whichever VC carries that next frame. Zero allows the next CLTU
     * to be radiated immediately. When several Packets are blocked into one
     * frame, the maximum delay among them is applied. The Forward TC Space Link
     * Processing functional group rejects values outside its configured range,
     * which yields a negative return with `invalidDelayTime`.
     * 
     * CCSDS 912.3-B-3, section 3.6.2.8. Annex A states that `Duration` is
     * expressed in microseconds.
     * @public
     * @readonly
     */
    readonly delayTime: Duration;
    /**
     * @summary `transmissionMode`.
     * @description
     * How this Space Packet is transmitted. `sequenceControlled` is AD mode:
     * high probability of complete delivery, with no duplication and no
     * delivery out of sequence. `expedited` is BD mode: delivery in the
     * specified sequence, without a guarantee of complete delivery.
     * `sequenceControlledUnblock` unblocks AD mode and then transmits this
     * Packet in AD mode. AD mode is blocked when a
     * `packetTransmissionModeMismatch` notification is sent. Further
     * sequence-controlled invocations are rejected until an accepted invocation
     * carries `sequenceControlledUnblock`. An unblock request is accepted only
     * while AD mode is blocked; accepting it unblocks AD mode. AD Packets are
     * then accepted again even if the current transmission-mode capability
     * still cannot carry them, which can raise another mismatch and block AD
     * mode again.
     * 
     * CCSDS 912.3-B-3, sections 3.6.2.9 and 3.1.8.1.5.
     * @public
     * @readonly
     */
    readonly transmissionMode: TransmissionMode;
    /**
     * @summary `map`.
     * @description
     * Multiplexer Access Point used to transmit the Space Packet in `fspData`.
     * When the instance generates no Segment Headers, the value is `none`.
     * Segment Headers are generated when Packets may exceed the user-data zone
     * of the maximum frame, or when MAP addressing is used on the telecommand
     * VC. If the MAP multiplexing scheme is `pollingVector` and this MAP is
     * permitted for the instance but is absent from the polling vector, the
     * Packet is queued and left unprocessed until the scheme is changed so that
     * the MAP is processed.
     * 
     * CCSDS 912.3-B-3, sections 3.6.2.10 and B3.10. MAP is a term of CCSDS
     * 232.0-B-3, cited in section 1.6.1.4.
     * @public
     * @readonly
     */
    readonly map: Map;
    /**
     * @summary `blocking`.
     * @description
     * Whether this Space Packet may share a TC frame with other Packets.
     * Section 3.6.2.11 uses the values `yes` and `no`. `yes` may merge the
     * Packet with other Packets on the same MAP, depending on which Packets are
     * available and how much of the frame remains. `no` places the Packet in a
     * frame that carries that Packet only. Annex A types the parameter as
     * `BlockingUsage`, whose named values are `permitted` and `notPermitted`.
     * Section 3.6.2.11 and annex A do not state which named value is `yes`.
     * When service management sets blocking-usage to `notPermitted`, the
     * provider ignores this parameter and each frame encapsulates at most one
     * Space Packet.
     * 
     * CCSDS 912.3-B-3, sections 3.6.2.11 and 3.10.2.5 (table 3-11), and annex
     * A2.5.
     * @public
     * @readonly
     */
    readonly blocking: BlockingUsage;
    /**
     * @summary `processingStartedNotification`.
     * @description
     * Whether the provider invokes FSP-ASYNC-NOTIFY when the Packet is
     * forwarded from the packets queue to the segments queue.
     * `produceNotification` requests that notification;
     * `doNotProduceNotification` suppresses it.
     * 
     * CCSDS 912.3-B-3, section 3.6.2.12.
     * @public
     * @readonly
     */
    readonly processingStartedNotification: SlduStatusNotification;
    /**
     * @summary `radiatedNotification`.
     * @description
     * Whether the provider invokes FSP-ASYNC-NOTIFY when radiation of the Space
     * Packet completes. `produceNotification` requests that notification;
     * `doNotProduceNotification` suppresses it.
     * 
     * CCSDS 912.3-B-3, section 3.6.2.13. Radiated is defined in section
     * 1.6.1.8.11.
     * @public
     * @readonly
     */
    readonly radiatedNotification: SlduStatusNotification;
    /**
     * @summary `acknowledgedNotification`.
     * @description
     * Whether the provider invokes FSP-ASYNC-NOTIFY when transfer of the Space
     * Packet completes, which is when every Segment has been acknowledged by
     * the spacecraft in the CLCW. `produceNotification` is allowed only when
     * `transmissionMode` is sequence-controlled. `doNotProduceNotification`
     * suppresses the notification. Requesting a notification for expedited
     * transmission is rejected with `invalidNotificationRequest`.
     * 
     * CCSDS 912.3-B-3, sections 3.6.2.14 and 3.6.2.18.1.
     * @public
     * @readonly
     */
    readonly acknowledgedNotification: SlduStatusNotification;
    /**
     * @summary `fspData`.
     * @description
     * The Space Packet to transfer to the space element. The Packet version
     * must be one CCSDS supports and that this service instance specifies. The
     * Packet Type must specify telecommand. The Application Process Identifier
     * must be one specified for this instance, unless `apidList` is `any`. The
     * Packet must not exceed the maximum Packet Data Length of the instance.
     * 
     * CCSDS 912.3-B-3, sections 3.6.2.15 and 3.6.2.18.1. Space Packet and APID
     * are terms of CCSDS 133.0-B-1, cited in section 1.6.1.6.
     * @public
     * @readonly
     */
    readonly fspData: FspData;

    constructor (
        invokerCredentials: Credentials,
        invokeId: InvokeId,
        packetIdentification: PacketIdentification,
        earliestProductionTime: ProductionTime,
        latestProductionTime: ProductionTime,
        delayTime: Duration,
        transmissionMode: TransmissionMode,
        map: Map,
        blocking: BlockingUsage,
        processingStartedNotification: SlduStatusNotification,
        radiatedNotification: SlduStatusNotification,
        acknowledgedNotification: SlduStatusNotification,
        fspData: FspData
    ) {
        this.invokerCredentials = invokerCredentials;
        this.invokeId = invokeId;
        this.packetIdentification = packetIdentification;
        this.earliestProductionTime = earliestProductionTime;
        this.latestProductionTime = latestProductionTime;
        this.delayTime = delayTime;
        this.transmissionMode = transmissionMode;
        this.map = map;
        this.blocking = blocking;
        this.processingStartedNotification = processingStartedNotification;
        this.radiatedNotification = radiatedNotification;
        this.acknowledgedNotification = acknowledgedNotification;
        this.fspData = fspData;
    }

    /**
     * @summary Restructures an object into a FspTransferDataInvocation
     * @description
     * 
     * This takes an `object` and converts it to a `FspTransferDataInvocation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FspTransferDataInvocation`.
     * @returns {FspTransferDataInvocation}
     */
    public static _from_object (_o: { [_K in keyof (FspTransferDataInvocation)]: (FspTransferDataInvocation)[_K] }): FspTransferDataInvocation {
        return new FspTransferDataInvocation(_o.invokerCredentials, _o.invokeId, _o.packetIdentification, _o.earliestProductionTime, _o.latestProductionTime, _o.delayTime, _o.transmissionMode, _o.map, _o.blocking, _o.processingStartedNotification, _o.radiatedNotification, _o.acknowledgedNotification, _o.fspData);
    }


}

/**
 * @summary The Leading Root Component Types of FspTransferDataInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FspTransferDataInvocation: $.ComponentSpec[] = [
    new $.ComponentSpec("invokerCredentials", false, $.hasAnyTag),
    new $.ComponentSpec("invokeId", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("packetIdentification", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("earliestProductionTime", false, $.hasAnyTag),
    new $.ComponentSpec("latestProductionTime", false, $.hasAnyTag),
    new $.ComponentSpec("delayTime", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("transmissionMode", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("map", false, $.hasAnyTag),
    new $.ComponentSpec("blocking", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("processingStartedNotification", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("radiatedNotification", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("acknowledgedNotification", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("fspData", false, $.hasTag(_TagClass.universal, 4))
];

/**
 * @summary The Trailing Root Component Types of FspTransferDataInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FspTransferDataInvocation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FspTransferDataInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FspTransferDataInvocation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FspTransferDataInvocation: $.ASN1Decoder<FspTransferDataInvocation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FspTransferDataInvocation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FspTransferDataInvocation (el: _Element): FspTransferDataInvocation {
    if (!_cached_decoder_for_FspTransferDataInvocation) { _cached_decoder_for_FspTransferDataInvocation = function (el: _Element): FspTransferDataInvocation {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 13) {
        throw new _ConstructionError("FspTransferDataInvocation contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "invokerCredentials";
    sequence[1].name = "invokeId";
    sequence[2].name = "packetIdentification";
    sequence[3].name = "earliestProductionTime";
    sequence[4].name = "latestProductionTime";
    sequence[5].name = "delayTime";
    sequence[6].name = "transmissionMode";
    sequence[7].name = "map";
    sequence[8].name = "blocking";
    sequence[9].name = "processingStartedNotification";
    sequence[10].name = "radiatedNotification";
    sequence[11].name = "acknowledgedNotification";
    sequence[12].name = "fspData";
    let invokerCredentials!: Credentials;
    let invokeId!: InvokeId;
    let packetIdentification!: PacketIdentification;
    let earliestProductionTime!: ProductionTime;
    let latestProductionTime!: ProductionTime;
    let delayTime!: Duration;
    let transmissionMode!: TransmissionMode;
    let map!: Map;
    let blocking!: BlockingUsage;
    let processingStartedNotification!: SlduStatusNotification;
    let radiatedNotification!: SlduStatusNotification;
    let acknowledgedNotification!: SlduStatusNotification;
    let fspData!: FspData;
    invokerCredentials = _decode_Credentials(sequence[0]);
    invokeId = _decode_InvokeId(sequence[1]);
    packetIdentification = _decode_PacketIdentification(sequence[2]);
    earliestProductionTime = _decode_ProductionTime(sequence[3]);
    latestProductionTime = _decode_ProductionTime(sequence[4]);
    delayTime = _decode_Duration(sequence[5]);
    transmissionMode = _decode_TransmissionMode(sequence[6]);
    map = _decode_Map(sequence[7]);
    blocking = _decode_BlockingUsage(sequence[8]);
    processingStartedNotification = _decode_SlduStatusNotification(sequence[9]);
    radiatedNotification = _decode_SlduStatusNotification(sequence[10]);
    acknowledgedNotification = _decode_SlduStatusNotification(sequence[11]);
    fspData = _decode_FspData(sequence[12]);
    return new FspTransferDataInvocation(
        invokerCredentials,
        invokeId,
        packetIdentification,
        earliestProductionTime,
        latestProductionTime,
        delayTime,
        transmissionMode,
        map,
        blocking,
        processingStartedNotification,
        radiatedNotification,
        acknowledgedNotification,
        fspData,

    );
}; }
    return _cached_decoder_for_FspTransferDataInvocation(el);
}

let _cached_encoder_for_FspTransferDataInvocation: $.ASN1Encoder<FspTransferDataInvocation> | null = null;

/**
 * @summary Encodes a(n) FspTransferDataInvocation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FspTransferDataInvocation, encoded as an ASN.1 Element.
 */
export
function _encode_FspTransferDataInvocation (value: FspTransferDataInvocation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FspTransferDataInvocation) { _cached_encoder_for_FspTransferDataInvocation = function (value: FspTransferDataInvocation, _elGetter: $.ASN1Encoder<FspTransferDataInvocation>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_Credentials(value.invokerCredentials, $.BER),
        /* REQUIRED   */ _encode_InvokeId(value.invokeId, $.BER),
        /* REQUIRED   */ _encode_PacketIdentification(value.packetIdentification, $.BER),
        /* REQUIRED   */ _encode_ProductionTime(value.earliestProductionTime, $.BER),
        /* REQUIRED   */ _encode_ProductionTime(value.latestProductionTime, $.BER),
        /* REQUIRED   */ _encode_Duration(value.delayTime, $.BER),
        /* REQUIRED   */ _encode_TransmissionMode(value.transmissionMode, $.BER),
        /* REQUIRED   */ _encode_Map(value.map, $.BER),
        /* REQUIRED   */ _encode_BlockingUsage(value.blocking, $.BER),
        /* REQUIRED   */ _encode_SlduStatusNotification(value.processingStartedNotification, $.BER),
        /* REQUIRED   */ _encode_SlduStatusNotification(value.radiatedNotification, $.BER),
        /* REQUIRED   */ _encode_SlduStatusNotification(value.acknowledgedNotification, $.BER),
        /* REQUIRED   */ _encode_FspData(value.fspData, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_FspTransferDataInvocation(value, elGetter);
}


/* eslint-enable */
