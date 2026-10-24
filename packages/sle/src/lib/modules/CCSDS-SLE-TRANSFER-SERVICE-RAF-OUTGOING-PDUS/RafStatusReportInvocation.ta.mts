/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Credentials, _decode_Credentials, _encode_Credentials } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Credentials.ta.mjs";
import { IntUnsignedLong, _decode_IntUnsignedLong, _encode_IntUnsignedLong } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/IntUnsignedLong.ta.mjs";
import { FrameSyncLockStatus, _decode_FrameSyncLockStatus, _encode_FrameSyncLockStatus } from "../CCSDS-SLE-TRANSFER-SERVICE-RAF-STRUCTURES/FrameSyncLockStatus.ta.mjs";
import { SymbolLockStatus, _decode_SymbolLockStatus, _encode_SymbolLockStatus } from "../CCSDS-SLE-TRANSFER-SERVICE-RAF-STRUCTURES/SymbolLockStatus.ta.mjs";
import { LockStatus, _decode_LockStatus, _encode_LockStatus } from "../CCSDS-SLE-TRANSFER-SERVICE-RAF-STRUCTURES/LockStatus.ta.mjs";
import { CarrierLockStatus, _decode_CarrierLockStatus, _encode_CarrierLockStatus } from "../CCSDS-SLE-TRANSFER-SERVICE-RAF-STRUCTURES/CarrierLockStatus.ta.mjs";
import { RafProductionStatus, _decode_RafProductionStatus, _encode_RafProductionStatus } from "../CCSDS-SLE-TRANSFER-SERVICE-RAF-STRUCTURES/RafProductionStatus.ta.mjs";


/**
 * @summary RafStatusReportInvocation
 * @description
 * 
 * Unconfirmed status report from the provider. Sent only as requested by
 * RAF-SCHEDULE-STATUS-REPORT. Valid in states 2 (ready) and 3 (active).
 * Periodic reporting is off after every successful RAF-BIND. The frame counts
 * accumulate for the whole service-instance provision period and are kept
 * across an abort.
 * 
 * CCSDS 911.1-B-5, sections 3.9, 3.8.1.4, 2.6.4.4, and 3.11.3.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RafStatusReportInvocation ::= SEQUENCE
 * {   invokerCredentials                 Credentials
 * ,   errorFreeFrameNumber               IntUnsignedLong
 * ,   deliveredFrameNumber               IntUnsignedLong
 * ,   frameSyncLockStatus                FrameSyncLockStatus
 * ,   symbolSyncLockStatus               SymbolLockStatus
 * ,   subcarrierLockStatus               LockStatus
 * ,   carrierLockStatus                  CarrierLockStatus
 * ,   productionStatus                   RafProductionStatus
 * }
 * ```
 * 
 * @class
 */
export
class RafStatusReportInvocation {
    /**
     * @summary `invokerCredentials`.
     * @description
     * Information with which the user authenticates this invocation. When the
     * agreed level is `all`, every RAF invocation and return except
     * RAF-PEER-ABORT is authenticated; `bind` authenticates only RAF-BIND;
     * `none` leaves every invocation and return unauthenticated. When
     * this invocation is unauthenticated, the value should be `unused`.
     * CCSDS 911.1-B-5, sections
     * 3.9.2.2 and 3.1.5.
     * @public
     * @readonly
     */
    readonly invokerCredentials: Credentials;
    /**
     * @summary `errorFreeFrameNumber`.
     * @description
     * Count of telemetry frames annotated `good` and delivered to this user
     * since the start of the service-instance provision period. CCSDS
     * 911.1-B-5, section 3.9.2.3.
     * @public
     * @readonly
     */
    readonly errorFreeFrameNumber: IntUnsignedLong;
    /**
     * @summary `deliveredFrameNumber`.
     * @description
     * Count of telemetry frames delivered to this user since the start of the
     * service-instance provision period. CCSDS 911.1-B-5, section 3.9.2.4.
     * @public
     * @readonly
     */
    readonly deliveredFrameNumber: IntUnsignedLong;
    /**
     * @summary `frameSyncLockStatus`.
     * @description
     * Current lock of the frame synchronization process: in-lock, out-of-lock,
     * or unknown. CCSDS 911.1-B-5, section 3.9.2.5.
     * @public
     * @readonly
     */
    readonly frameSyncLockStatus: FrameSyncLockStatus;
    /**
     * @summary `symbolSyncLockStatus`.
     * @description
     * Current lock of the symbol (or bit) synchronization process: in-lock,
     * out-of-lock, or unknown. CCSDS 911.1-B-5, section 3.9.2.6.
     * @public
     * @readonly
     */
    readonly symbolSyncLockStatus: SymbolLockStatus;
    /**
     * @summary `subcarrierLockStatus`.
     * @description
     * Current lock of subcarrier demodulation: in-lock, out-of-lock, not in
     * use, or unknown. CCSDS 911.1-B-5, section 3.9.2.7.
     * @public
     * @readonly
     */
    readonly subcarrierLockStatus: LockStatus;
    /**
     * @summary `carrierLockStatus`.
     * @description
     * Current lock of carrier demodulation: in-lock, out-of-lock, or unknown.
     * CCSDS 911.1-B-5, section 3.9.2.8.
     * @public
     * @readonly
     */
    readonly carrierLockStatus: CarrierLockStatus;
    /**
     * @summary `productionStatus`.
     * @description
     * Current RAF production status: `running`, `halted`, or `interrupted`.
     * CCSDS 911.1-B-5, sections 3.9.2.9 and 3.7.2.4.3.
     * @public
     * @readonly
     */
    readonly productionStatus: RafProductionStatus;

    constructor (
        invokerCredentials: Credentials,
        errorFreeFrameNumber: IntUnsignedLong,
        deliveredFrameNumber: IntUnsignedLong,
        frameSyncLockStatus: FrameSyncLockStatus,
        symbolSyncLockStatus: SymbolLockStatus,
        subcarrierLockStatus: LockStatus,
        carrierLockStatus: CarrierLockStatus,
        productionStatus: RafProductionStatus
    ) {
        this.invokerCredentials = invokerCredentials;
        this.errorFreeFrameNumber = errorFreeFrameNumber;
        this.deliveredFrameNumber = deliveredFrameNumber;
        this.frameSyncLockStatus = frameSyncLockStatus;
        this.symbolSyncLockStatus = symbolSyncLockStatus;
        this.subcarrierLockStatus = subcarrierLockStatus;
        this.carrierLockStatus = carrierLockStatus;
        this.productionStatus = productionStatus;
    }

    /**
     * @summary Restructures an object into a RafStatusReportInvocation
     * @description
     * 
     * This takes an `object` and converts it to a `RafStatusReportInvocation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RafStatusReportInvocation`.
     * @returns {RafStatusReportInvocation}
     */
    public static _from_object (_o: { [_K in keyof (RafStatusReportInvocation)]: (RafStatusReportInvocation)[_K] }): RafStatusReportInvocation {
        return new RafStatusReportInvocation(_o.invokerCredentials, _o.errorFreeFrameNumber, _o.deliveredFrameNumber, _o.frameSyncLockStatus, _o.symbolSyncLockStatus, _o.subcarrierLockStatus, _o.carrierLockStatus, _o.productionStatus);
    }


}

/**
 * @summary The Leading Root Component Types of RafStatusReportInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RafStatusReportInvocation: $.ComponentSpec[] = [
    new $.ComponentSpec("invokerCredentials", false, $.hasAnyTag),
    new $.ComponentSpec("errorFreeFrameNumber", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("deliveredFrameNumber", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("frameSyncLockStatus", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("symbolSyncLockStatus", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("subcarrierLockStatus", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("carrierLockStatus", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("productionStatus", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of RafStatusReportInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RafStatusReportInvocation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RafStatusReportInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RafStatusReportInvocation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RafStatusReportInvocation: $.ASN1Decoder<RafStatusReportInvocation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RafStatusReportInvocation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RafStatusReportInvocation (el: _Element): RafStatusReportInvocation {
    if (!_cached_decoder_for_RafStatusReportInvocation) { _cached_decoder_for_RafStatusReportInvocation = function (el: _Element): RafStatusReportInvocation {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 8) {
        throw new _ConstructionError("RafStatusReportInvocation contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "invokerCredentials";
    sequence[1].name = "errorFreeFrameNumber";
    sequence[2].name = "deliveredFrameNumber";
    sequence[3].name = "frameSyncLockStatus";
    sequence[4].name = "symbolSyncLockStatus";
    sequence[5].name = "subcarrierLockStatus";
    sequence[6].name = "carrierLockStatus";
    sequence[7].name = "productionStatus";
    let invokerCredentials!: Credentials;
    let errorFreeFrameNumber!: IntUnsignedLong;
    let deliveredFrameNumber!: IntUnsignedLong;
    let frameSyncLockStatus!: FrameSyncLockStatus;
    let symbolSyncLockStatus!: SymbolLockStatus;
    let subcarrierLockStatus!: LockStatus;
    let carrierLockStatus!: CarrierLockStatus;
    let productionStatus!: RafProductionStatus;
    invokerCredentials = _decode_Credentials(sequence[0]);
    errorFreeFrameNumber = _decode_IntUnsignedLong(sequence[1]);
    deliveredFrameNumber = _decode_IntUnsignedLong(sequence[2]);
    frameSyncLockStatus = _decode_FrameSyncLockStatus(sequence[3]);
    symbolSyncLockStatus = _decode_SymbolLockStatus(sequence[4]);
    subcarrierLockStatus = _decode_LockStatus(sequence[5]);
    carrierLockStatus = _decode_CarrierLockStatus(sequence[6]);
    productionStatus = _decode_RafProductionStatus(sequence[7]);
    return new RafStatusReportInvocation(
        invokerCredentials,
        errorFreeFrameNumber,
        deliveredFrameNumber,
        frameSyncLockStatus,
        symbolSyncLockStatus,
        subcarrierLockStatus,
        carrierLockStatus,
        productionStatus,

    );
}; }
    return _cached_decoder_for_RafStatusReportInvocation(el);
}

let _cached_encoder_for_RafStatusReportInvocation: $.ASN1Encoder<RafStatusReportInvocation> | null = null;

/**
 * @summary Encodes a(n) RafStatusReportInvocation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RafStatusReportInvocation, encoded as an ASN.1 Element.
 */
export
function _encode_RafStatusReportInvocation (value: RafStatusReportInvocation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RafStatusReportInvocation) { _cached_encoder_for_RafStatusReportInvocation = function (value: RafStatusReportInvocation, _elGetter: $.ASN1Encoder<RafStatusReportInvocation>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_Credentials(value.invokerCredentials, $.BER),
        /* REQUIRED   */ _encode_IntUnsignedLong(value.errorFreeFrameNumber, $.BER),
        /* REQUIRED   */ _encode_IntUnsignedLong(value.deliveredFrameNumber, $.BER),
        /* REQUIRED   */ _encode_FrameSyncLockStatus(value.frameSyncLockStatus, $.BER),
        /* REQUIRED   */ _encode_SymbolLockStatus(value.symbolSyncLockStatus, $.BER),
        /* REQUIRED   */ _encode_LockStatus(value.subcarrierLockStatus, $.BER),
        /* REQUIRED   */ _encode_CarrierLockStatus(value.carrierLockStatus, $.BER),
        /* REQUIRED   */ _encode_RafProductionStatus(value.productionStatus, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_RafStatusReportInvocation(value, elGetter);
}


/* eslint-enable */
