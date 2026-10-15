/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Credentials, _decode_Credentials, _encode_Credentials } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Credentials.ta.mjs";
import { FspPacketLastProcessed, _decode_FspPacketLastProcessed, _encode_FspPacketLastProcessed } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/FspPacketLastProcessed.ta.mjs";
import { FspPacketLastOk, _decode_FspPacketLastOk, _encode_FspPacketLastOk } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/FspPacketLastOk.ta.mjs";
import { FspProductionStatus, _decode_FspProductionStatus, _encode_FspProductionStatus } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/FspProductionStatus.ta.mjs";
import { FspPacketCount, _decode_FspPacketCount, _encode_FspPacketCount } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/FspPacketCount.ta.mjs";
import { IntUnsignedLong, _decode_IntUnsignedLong, _encode_IntUnsignedLong } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/IntUnsignedLong.ta.mjs";


/**
 * @summary FspStatusReportInvocation
 * @description
 * 
 * Provider invocation of FSP-STATUS-REPORT, an unconfirmed operation. Valid in
 * states 2 (ready) and 3 (active). Reports are sent according to the user's
 * FSP-SCHEDULE-STATUS-REPORT requests. The provider remains in its original
 * state.
 * 
 * CCSDS 912.3-B-3, sections 3.9.1 and 3.9.3.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FspStatusReportInvocation ::= SEQUENCE
 * {  invokerCredentials            Credentials
 * ,  fspPacketLastProcessed        FspPacketLastProcessed
 * ,  fspPacketLastOk               FspPacketLastOk
 * ,  productionStatus              FspProductionStatus
 * ,  numberOfPacketsReceived       FspPacketCount
 * ,  numberOfPacketsProcessed      FspPacketCount
 * ,  numberOfPacketsRadiated       FspPacketCount
 * ,  numberOfPacketsAcknowledged   IntUnsignedLong
 * ,  fspBufferAvailable            IntUnsignedLong
 * }
 * ```
 * 
 * @class
 */
export
class FspStatusReportInvocation {
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
     * @summary `fspPacketLastProcessed`.
     * @description
     * Identification of the Space Packet of this service instance that most
     * recently started to be processed, whether or not processing succeeded, or
     * `null` if none has. The value survives release or abort of the
     * association. Section 3.9.2.3 says processing starts when the Packet moves
     * from the requests queue to a packets queue. Section 3.7.2.9, for the same
     * parameter on FSP-ASYNC-NOTIFY, says processing starts when it moves from
     * a packets queue to a segments queue.
     * 
     * CCSDS 912.3-B-3, sections 3.9.2.3 and 3.7.2.9.
     * @public
     * @readonly
     */
    readonly fspPacketLastProcessed: FspPacketLastProcessed;
    /**
     * @summary `fspPacketLastOk`.
     * @description
     * Identification of the last Space Packet of this service instance that was
     * successfully processed, or `null` if none has. The value survives release
     * or abort of the association.
     * 
     * CCSDS 912.3-B-3, section 3.9.2.6.
     * @public
     * @readonly
     */
    readonly fspPacketLastOk: FspPacketLastOk;
    /**
     * @summary `productionStatus`.
     * @description
     * Current status of the production process. The operational value has
     * sub-states BD, AD and BD, and AD suspended.
     * 
     * CCSDS 912.3-B-3, section 3.9.2.8 and annex C.
     * @public
     * @readonly
     */
    readonly productionStatus: FspProductionStatus;
    /**
     * @summary `numberOfPacketsReceived`.
     * @description
     * Number of Space Packets received during this service instance, with
     * separate counts for AD and BD. Only Packets that are checked successfully
     * and buffered are counted. The count is zero when none have been received.
     * Statistics cover the service instance provision period.
     * 
     * CCSDS 912.3-B-3, sections 3.9.2.9 and 3.1.11.
     * @public
     * @readonly
     */
    readonly numberOfPacketsReceived: FspPacketCount;
    /**
     * @summary `numberOfPacketsProcessed`.
     * @description
     * Number of Space Packets the provider attempted to process during this
     * service instance, with separate counts for AD and BD. The count includes
     * Packets that were acknowledged, Packets that radiated successfully and
     * are not yet acknowledged, Packets that aborted, and Packets currently
     * being processed. The count is zero when none have been processed.
     * 
     * CCSDS 912.3-B-3, section 3.9.2.10.
     * @public
     * @readonly
     */
    readonly numberOfPacketsProcessed: FspPacketCount;
    /**
     * @summary `numberOfPacketsRadiated`.
     * @description
     * Number of Space Packets successfully radiated during this service
     * instance, with separate counts for AD and BD. A Packet still being
     * radiated is excluded. For a given Packet only the first radiation is
     * counted; COP-1 retransmission of frames does not update the count. The
     * count is zero when none have been radiated.
     * 
     * CCSDS 912.3-B-3, section 3.9.2.11.
     * @public
     * @readonly
     */
    readonly numberOfPacketsRadiated: FspPacketCount;
    /**
     * @summary `numberOfPacketsAcknowledged`.
     * @description
     * Applies only to sequence-controlled transmission. Section 3.9.2.12.1
     * defines it as the number of Space Packets that during this service
     * instance were successfully transferred to the space element, as
     * determined by evaluation of CLCWs. Section 3.9.2.12.2 says that if Space
     * Packets have been acknowledged, this parameter shall be set to zero.
     * 
     * CCSDS 912.3-B-3, section 3.9.2.12.
     * @public
     * @readonly
     */
    readonly numberOfPacketsAcknowledged: IntUnsignedLong;
    /**
     * @summary `fspBufferAvailable`.
     * @description
     * Number of octets still available in this service instance's request
     * queue. Once the provider starts to process a Space Packet, that Packet is
     * treated as removed from the buffer.
     * 
     * CCSDS 912.3-B-3, section 3.9.2.13 and annex B.
     * @public
     * @readonly
     */
    readonly fspBufferAvailable: IntUnsignedLong;

    constructor (
        invokerCredentials: Credentials,
        fspPacketLastProcessed: FspPacketLastProcessed,
        fspPacketLastOk: FspPacketLastOk,
        productionStatus: FspProductionStatus,
        numberOfPacketsReceived: FspPacketCount,
        numberOfPacketsProcessed: FspPacketCount,
        numberOfPacketsRadiated: FspPacketCount,
        numberOfPacketsAcknowledged: IntUnsignedLong,
        fspBufferAvailable: IntUnsignedLong
    ) {
        this.invokerCredentials = invokerCredentials;
        this.fspPacketLastProcessed = fspPacketLastProcessed;
        this.fspPacketLastOk = fspPacketLastOk;
        this.productionStatus = productionStatus;
        this.numberOfPacketsReceived = numberOfPacketsReceived;
        this.numberOfPacketsProcessed = numberOfPacketsProcessed;
        this.numberOfPacketsRadiated = numberOfPacketsRadiated;
        this.numberOfPacketsAcknowledged = numberOfPacketsAcknowledged;
        this.fspBufferAvailable = fspBufferAvailable;
    }

    /**
     * @summary Restructures an object into a FspStatusReportInvocation
     * @description
     * 
     * This takes an `object` and converts it to a `FspStatusReportInvocation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FspStatusReportInvocation`.
     * @returns {FspStatusReportInvocation}
     */
    public static _from_object (_o: { [_K in keyof (FspStatusReportInvocation)]: (FspStatusReportInvocation)[_K] }): FspStatusReportInvocation {
        return new FspStatusReportInvocation(_o.invokerCredentials, _o.fspPacketLastProcessed, _o.fspPacketLastOk, _o.productionStatus, _o.numberOfPacketsReceived, _o.numberOfPacketsProcessed, _o.numberOfPacketsRadiated, _o.numberOfPacketsAcknowledged, _o.fspBufferAvailable);
    }


}

/**
 * @summary The Leading Root Component Types of FspStatusReportInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FspStatusReportInvocation: $.ComponentSpec[] = [
    new $.ComponentSpec("invokerCredentials", false, $.hasAnyTag),
    new $.ComponentSpec("fspPacketLastProcessed", false, $.hasAnyTag),
    new $.ComponentSpec("fspPacketLastOk", false, $.hasAnyTag),
    new $.ComponentSpec("productionStatus", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("numberOfPacketsReceived", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("numberOfPacketsProcessed", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("numberOfPacketsRadiated", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("numberOfPacketsAcknowledged", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("fspBufferAvailable", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of FspStatusReportInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FspStatusReportInvocation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FspStatusReportInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FspStatusReportInvocation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FspStatusReportInvocation: $.ASN1Decoder<FspStatusReportInvocation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FspStatusReportInvocation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FspStatusReportInvocation (el: _Element): FspStatusReportInvocation {
    if (!_cached_decoder_for_FspStatusReportInvocation) { _cached_decoder_for_FspStatusReportInvocation = function (el: _Element): FspStatusReportInvocation {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 9) {
        throw new _ConstructionError("FspStatusReportInvocation contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "invokerCredentials";
    sequence[1].name = "fspPacketLastProcessed";
    sequence[2].name = "fspPacketLastOk";
    sequence[3].name = "productionStatus";
    sequence[4].name = "numberOfPacketsReceived";
    sequence[5].name = "numberOfPacketsProcessed";
    sequence[6].name = "numberOfPacketsRadiated";
    sequence[7].name = "numberOfPacketsAcknowledged";
    sequence[8].name = "fspBufferAvailable";
    let invokerCredentials!: Credentials;
    let fspPacketLastProcessed!: FspPacketLastProcessed;
    let fspPacketLastOk!: FspPacketLastOk;
    let productionStatus!: FspProductionStatus;
    let numberOfPacketsReceived!: FspPacketCount;
    let numberOfPacketsProcessed!: FspPacketCount;
    let numberOfPacketsRadiated!: FspPacketCount;
    let numberOfPacketsAcknowledged!: IntUnsignedLong;
    let fspBufferAvailable!: IntUnsignedLong;
    invokerCredentials = _decode_Credentials(sequence[0]);
    fspPacketLastProcessed = _decode_FspPacketLastProcessed(sequence[1]);
    fspPacketLastOk = _decode_FspPacketLastOk(sequence[2]);
    productionStatus = _decode_FspProductionStatus(sequence[3]);
    numberOfPacketsReceived = _decode_FspPacketCount(sequence[4]);
    numberOfPacketsProcessed = _decode_FspPacketCount(sequence[5]);
    numberOfPacketsRadiated = _decode_FspPacketCount(sequence[6]);
    numberOfPacketsAcknowledged = _decode_IntUnsignedLong(sequence[7]);
    fspBufferAvailable = _decode_IntUnsignedLong(sequence[8]);
    return new FspStatusReportInvocation(
        invokerCredentials,
        fspPacketLastProcessed,
        fspPacketLastOk,
        productionStatus,
        numberOfPacketsReceived,
        numberOfPacketsProcessed,
        numberOfPacketsRadiated,
        numberOfPacketsAcknowledged,
        fspBufferAvailable,

    );
}; }
    return _cached_decoder_for_FspStatusReportInvocation(el);
}

let _cached_encoder_for_FspStatusReportInvocation: $.ASN1Encoder<FspStatusReportInvocation> | null = null;

/**
 * @summary Encodes a(n) FspStatusReportInvocation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FspStatusReportInvocation, encoded as an ASN.1 Element.
 */
export
function _encode_FspStatusReportInvocation (value: FspStatusReportInvocation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FspStatusReportInvocation) { _cached_encoder_for_FspStatusReportInvocation = function (value: FspStatusReportInvocation, _elGetter: $.ASN1Encoder<FspStatusReportInvocation>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_Credentials(value.invokerCredentials, $.BER),
        /* REQUIRED   */ _encode_FspPacketLastProcessed(value.fspPacketLastProcessed, $.BER),
        /* REQUIRED   */ _encode_FspPacketLastOk(value.fspPacketLastOk, $.BER),
        /* REQUIRED   */ _encode_FspProductionStatus(value.productionStatus, $.BER),
        /* REQUIRED   */ _encode_FspPacketCount(value.numberOfPacketsReceived, $.BER),
        /* REQUIRED   */ _encode_FspPacketCount(value.numberOfPacketsProcessed, $.BER),
        /* REQUIRED   */ _encode_FspPacketCount(value.numberOfPacketsRadiated, $.BER),
        /* REQUIRED   */ _encode_IntUnsignedLong(value.numberOfPacketsAcknowledged, $.BER),
        /* REQUIRED   */ _encode_IntUnsignedLong(value.fspBufferAvailable, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_FspStatusReportInvocation(value, elGetter);
}


/* eslint-enable */
