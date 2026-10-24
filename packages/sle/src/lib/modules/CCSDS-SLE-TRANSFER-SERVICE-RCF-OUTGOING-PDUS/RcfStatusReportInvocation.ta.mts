/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Credentials, _decode_Credentials, _encode_Credentials } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Credentials.ta.mjs";
import { IntUnsignedLong, _decode_IntUnsignedLong, _encode_IntUnsignedLong } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/IntUnsignedLong.ta.mjs";
import { FrameSyncLockStatus, _decode_FrameSyncLockStatus, _encode_FrameSyncLockStatus } from "../CCSDS-SLE-TRANSFER-SERVICE-RCF-STRUCTURES/FrameSyncLockStatus.ta.mjs";
import { SymbolLockStatus, _decode_SymbolLockStatus, _encode_SymbolLockStatus } from "../CCSDS-SLE-TRANSFER-SERVICE-RCF-STRUCTURES/SymbolLockStatus.ta.mjs";
import { LockStatus, _decode_LockStatus, _encode_LockStatus } from "../CCSDS-SLE-TRANSFER-SERVICE-RCF-STRUCTURES/LockStatus.ta.mjs";
import { CarrierLockStatus, _decode_CarrierLockStatus, _encode_CarrierLockStatus } from "../CCSDS-SLE-TRANSFER-SERVICE-RCF-STRUCTURES/CarrierLockStatus.ta.mjs";
import { RcfProductionStatus, _decode_RcfProductionStatus, _encode_RcfProductionStatus } from "../CCSDS-SLE-TRANSFER-SERVICE-RCF-STRUCTURES/RcfProductionStatus.ta.mjs";


/**
 * @summary RcfStatusReportInvocation
 * @description
 *
 * The provider sends a status report. Unconfirmed, legal in state 2 (ready)
 * and state 3 (active), and sent only as requested by
 * RCF-SCHEDULE-STATUS-REPORT. That request is rejected for an offline
 * instance. The provider state stays unchanged. The counts and status
 * accumulate for the whole service instance provision period and remain
 * available to a later association.
 *
 * CCSDS 911.2-B-4, sections 3.8.1, 3.9, and 2.6.4.4.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RcfStatusReportInvocation ::= SEQUENCE
 * {   invokerCredentials                 Credentials
 * ,   deliveredFrameNumber               IntUnsignedLong
 * ,   frameSyncLockStatus                FrameSyncLockStatus
 * ,   symbolSyncLockStatus               SymbolLockStatus
 * ,   subcarrierLockStatus               LockStatus
 * ,   carrierLockStatus                  CarrierLockStatus
 * ,   productionStatus                   RcfProductionStatus
 * }
 * ```
 * 
 * @class
 */
export
class RcfStatusReportInvocation {
    /**
     * @summary `invokerCredentials`.
     * @description
     *
     * Credentials that let the user authenticate this invocation when the
     * agreed level is 'all'. When the level is 'bind' or 'none', the value
     * should be 'unused'.
     *
     * CCSDS 911.2-B-4, sections 3.9.2.2 and 3.1.5.
     * @public
     * @readonly
     */
    readonly invokerCredentials: Credentials;
    /**
     * @summary `deliveredFrameNumber`.
     * @description
     *
     * Total telemetry frames with the requested global VCID that have been
     * delivered to the user since the start of the service instance provision
     * period. Section 3.9.2.3 equates this with the number of frames an
     * instance using that same global VCID would deliver while active.
     *
     * CCSDS 911.2-B-4, section 3.9.2.3.
     * @public
     * @readonly
     */
    readonly deliveredFrameNumber: IntUnsignedLong;
    /**
     * @summary `frameSyncLockStatus`.
     * @description
     *
     * Current lock of the frame synchronization process. Section 3.9.2.4 lists
     * in-lock, out-of-lock, and unknown.
     *
     * CCSDS 911.2-B-4, section 3.9.2.4.
     * @public
     * @readonly
     */
    readonly frameSyncLockStatus: FrameSyncLockStatus;
    /**
     * @summary `symbolSyncLockStatus`.
     * @description
     *
     * Current lock of the symbol (or bit) synchronization process. Section
     * 3.9.2.5 lists in-lock, out-of-lock, and unknown.
     *
     * CCSDS 911.2-B-4, section 3.9.2.5.
     * @public
     * @readonly
     */
    readonly symbolSyncLockStatus: SymbolLockStatus;
    /**
     * @summary `subcarrierLockStatus`.
     * @description
     *
     * Current lock of the subcarrier demodulation process. Section 3.9.2.6
     * lists in-lock, out-of-lock, and unknown. Annex A types this field as
     * LockStatus, which also names notInUse. Section 3.7.2.4.2 lists not-in-use
     * for subcarrier demodulation on a loss-of-frame-sync notification. CCSDS
     * 911.2-B-4 does not reconcile section 3.9.2.6 with Annex A.
     *
     * CCSDS 911.2-B-4, sections 3.9.2.6 and 3.7.2.4.2.
     * @public
     * @readonly
     */
    readonly subcarrierLockStatus: LockStatus;
    /**
     * @summary `carrierLockStatus`.
     * @description
     *
     * Current lock of the carrier demodulation process. Section 3.9.2.7 lists
     * in-lock, out-of-lock, not-in-use, and unknown. Annex A types this field
     * as CarrierLockStatus, whose names are inLock, outOfLock, and unknown.
     * Section 3.7.2.4.2 lists those three values for carrier demodulation.
     * CCSDS 911.2-B-4 does not reconcile section 3.9.2.7 with Annex A.
     *
     * CCSDS 911.2-B-4, sections 3.9.2.7 and 3.7.2.4.2.
     * @public
     * @readonly
     */
    readonly carrierLockStatus: CarrierLockStatus;
    /**
     * @summary `productionStatus`.
     * @description
     *
     * Current RCF production status: running, halted, or interrupted.
     *
     * CCSDS 911.2-B-4, sections 3.9.2.8 and 3.7.2.4.3.
     * @public
     * @readonly
     */
    readonly productionStatus: RcfProductionStatus;

    constructor (
        invokerCredentials: Credentials,
        deliveredFrameNumber: IntUnsignedLong,
        frameSyncLockStatus: FrameSyncLockStatus,
        symbolSyncLockStatus: SymbolLockStatus,
        subcarrierLockStatus: LockStatus,
        carrierLockStatus: CarrierLockStatus,
        productionStatus: RcfProductionStatus
    ) {
        this.invokerCredentials = invokerCredentials;
        this.deliveredFrameNumber = deliveredFrameNumber;
        this.frameSyncLockStatus = frameSyncLockStatus;
        this.symbolSyncLockStatus = symbolSyncLockStatus;
        this.subcarrierLockStatus = subcarrierLockStatus;
        this.carrierLockStatus = carrierLockStatus;
        this.productionStatus = productionStatus;
    }

    /**
     * @summary Restructures an object into a RcfStatusReportInvocation
     * @description
     * 
     * This takes an `object` and converts it to a `RcfStatusReportInvocation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RcfStatusReportInvocation`.
     * @returns {RcfStatusReportInvocation}
     */
    public static _from_object (_o: { [_K in keyof (RcfStatusReportInvocation)]: (RcfStatusReportInvocation)[_K] }): RcfStatusReportInvocation {
        return new RcfStatusReportInvocation(_o.invokerCredentials, _o.deliveredFrameNumber, _o.frameSyncLockStatus, _o.symbolSyncLockStatus, _o.subcarrierLockStatus, _o.carrierLockStatus, _o.productionStatus);
    }


}

/**
 * @summary The Leading Root Component Types of RcfStatusReportInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading
 * root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RcfStatusReportInvocation: $.ComponentSpec[] = [
    new $.ComponentSpec("invokerCredentials", false, $.hasAnyTag),
    new $.ComponentSpec("deliveredFrameNumber", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("frameSyncLockStatus", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("symbolSyncLockStatus", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("subcarrierLockStatus", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("carrierLockStatus", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("productionStatus", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of RcfStatusReportInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing
 * root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RcfStatusReportInvocation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RcfStatusReportInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension
 * addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RcfStatusReportInvocation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RcfStatusReportInvocation: $.ASN1Decoder<RcfStatusReportInvocation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RcfStatusReportInvocation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RcfStatusReportInvocation (el: _Element): RcfStatusReportInvocation {
    if (!_cached_decoder_for_RcfStatusReportInvocation) { _cached_decoder_for_RcfStatusReportInvocation = function (el: _Element): RcfStatusReportInvocation {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 7) {
        throw new _ConstructionError("RcfStatusReportInvocation contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "invokerCredentials";
    sequence[1].name = "deliveredFrameNumber";
    sequence[2].name = "frameSyncLockStatus";
    sequence[3].name = "symbolSyncLockStatus";
    sequence[4].name = "subcarrierLockStatus";
    sequence[5].name = "carrierLockStatus";
    sequence[6].name = "productionStatus";
    let invokerCredentials!: Credentials;
    let deliveredFrameNumber!: IntUnsignedLong;
    let frameSyncLockStatus!: FrameSyncLockStatus;
    let symbolSyncLockStatus!: SymbolLockStatus;
    let subcarrierLockStatus!: LockStatus;
    let carrierLockStatus!: CarrierLockStatus;
    let productionStatus!: RcfProductionStatus;
    invokerCredentials = _decode_Credentials(sequence[0]);
    deliveredFrameNumber = _decode_IntUnsignedLong(sequence[1]);
    frameSyncLockStatus = _decode_FrameSyncLockStatus(sequence[2]);
    symbolSyncLockStatus = _decode_SymbolLockStatus(sequence[3]);
    subcarrierLockStatus = _decode_LockStatus(sequence[4]);
    carrierLockStatus = _decode_CarrierLockStatus(sequence[5]);
    productionStatus = _decode_RcfProductionStatus(sequence[6]);
    return new RcfStatusReportInvocation(
        invokerCredentials,
        deliveredFrameNumber,
        frameSyncLockStatus,
        symbolSyncLockStatus,
        subcarrierLockStatus,
        carrierLockStatus,
        productionStatus,

    );
}; }
    return _cached_decoder_for_RcfStatusReportInvocation(el);
}

let _cached_encoder_for_RcfStatusReportInvocation: $.ASN1Encoder<RcfStatusReportInvocation> | null = null;

/**
 * @summary Encodes a(n) RcfStatusReportInvocation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RcfStatusReportInvocation, encoded as an ASN.1 Element.
 */
export
function _encode_RcfStatusReportInvocation (value: RcfStatusReportInvocation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RcfStatusReportInvocation) { _cached_encoder_for_RcfStatusReportInvocation = function (value: RcfStatusReportInvocation, _elGetter: $.ASN1Encoder<RcfStatusReportInvocation>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_Credentials(value.invokerCredentials, $.BER),
        /* REQUIRED   */ _encode_IntUnsignedLong(value.deliveredFrameNumber, $.BER),
        /* REQUIRED   */ _encode_FrameSyncLockStatus(value.frameSyncLockStatus, $.BER),
        /* REQUIRED   */ _encode_SymbolLockStatus(value.symbolSyncLockStatus, $.BER),
        /* REQUIRED   */ _encode_LockStatus(value.subcarrierLockStatus, $.BER),
        /* REQUIRED   */ _encode_CarrierLockStatus(value.carrierLockStatus, $.BER),
        /* REQUIRED   */ _encode_RcfProductionStatus(value.productionStatus, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_RcfStatusReportInvocation(value, elGetter);
}


/* eslint-enable */
