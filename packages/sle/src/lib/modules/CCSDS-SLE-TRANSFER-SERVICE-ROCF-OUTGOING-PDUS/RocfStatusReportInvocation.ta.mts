/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Credentials, _decode_Credentials, _encode_Credentials } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Credentials.ta.mjs";
// export { Credentials, _decode_Credentials, _encode_Credentials } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Credentials.ta.mjs";
import { IntUnsignedLong, _decode_IntUnsignedLong, _encode_IntUnsignedLong } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/IntUnsignedLong.ta.mjs";
// export { IntUnsignedLong, _decode_IntUnsignedLong, _encode_IntUnsignedLong } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/IntUnsignedLong.ta.mjs";
import { FrameSyncLockStatus, _decode_FrameSyncLockStatus, _encode_FrameSyncLockStatus } from "../CCSDS-SLE-TRANSFER-SERVICE-ROCF-STRUCTURES/FrameSyncLockStatus.ta.mjs";
// export { FrameSyncLockStatus, _decode_FrameSyncLockStatus, _encode_FrameSyncLockStatus } from "../CCSDS-SLE-TRANSFER-SERVICE-ROCF-STRUCTURES/FrameSyncLockStatus.ta.mjs";
import { SymbolLockStatus, _decode_SymbolLockStatus, _encode_SymbolLockStatus } from "../CCSDS-SLE-TRANSFER-SERVICE-ROCF-STRUCTURES/SymbolLockStatus.ta.mjs";
// export { SymbolLockStatus, _decode_SymbolLockStatus, _encode_SymbolLockStatus } from "../CCSDS-SLE-TRANSFER-SERVICE-ROCF-STRUCTURES/SymbolLockStatus.ta.mjs";
import { LockStatus, _decode_LockStatus, _encode_LockStatus } from "../CCSDS-SLE-TRANSFER-SERVICE-ROCF-STRUCTURES/LockStatus.ta.mjs";
// export { LockStatus, LockStatus_inLock /* IMPORTED_LONG_NAMED_INTEGER */, inLock /* IMPORTED_SHORT_NAMED_INTEGER */, LockStatus_outOfLock /* IMPORTED_LONG_NAMED_INTEGER */, outOfLock /* IMPORTED_SHORT_NAMED_INTEGER */, LockStatus_notInUse /* IMPORTED_LONG_NAMED_INTEGER */, notInUse /* IMPORTED_SHORT_NAMED_INTEGER */, LockStatus_unknown /* IMPORTED_LONG_NAMED_INTEGER */, unknown /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_LockStatus, _encode_LockStatus } from "../CCSDS-SLE-TRANSFER-SERVICE-ROCF-STRUCTURES/LockStatus.ta.mjs";
import { CarrierLockStatus, _decode_CarrierLockStatus, _encode_CarrierLockStatus } from "../CCSDS-SLE-TRANSFER-SERVICE-ROCF-STRUCTURES/CarrierLockStatus.ta.mjs";
// export { CarrierLockStatus, _decode_CarrierLockStatus, _encode_CarrierLockStatus } from "../CCSDS-SLE-TRANSFER-SERVICE-ROCF-STRUCTURES/CarrierLockStatus.ta.mjs";
import { RocfProductionStatus, _decode_RocfProductionStatus, _encode_RocfProductionStatus } from "../CCSDS-SLE-TRANSFER-SERVICE-ROCF-STRUCTURES/RocfProductionStatus.ta.mjs";
// export { RocfProductionStatus, RocfProductionStatus_running /* IMPORTED_LONG_NAMED_INTEGER */, running /* IMPORTED_SHORT_NAMED_INTEGER */, RocfProductionStatus_interrupted /* IMPORTED_LONG_NAMED_INTEGER */, interrupted /* IMPORTED_SHORT_NAMED_INTEGER */, RocfProductionStatus_halted /* IMPORTED_LONG_NAMED_INTEGER */, halted /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_RocfProductionStatus, _encode_RocfProductionStatus } from "../CCSDS-SLE-TRANSFER-SERVICE-ROCF-STRUCTURES/RocfProductionStatus.ta.mjs";


/**
 * @summary RocfStatusReportInvocation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RocfStatusReportInvocation ::= SEQUENCE
 * {  invokerCredentials            Credentials
 * ,  processedFrameNumber          IntUnsignedLong
 * ,  deliveredOcfsNumber           IntUnsignedLong
 * ,  frameSyncLockStatus           FrameSyncLockStatus
 * ,  symbolSyncLockStatus          SymbolLockStatus
 * ,  subcarrierLockStatus          LockStatus
 * ,  carrierLockStatus             CarrierLockStatus
 * ,  productionStatus              RocfProductionStatus
 * }
 * ```
 * 
 * @class
 */
export
class RocfStatusReportInvocation {
    /**
     * @summary `invokerCredentials`.
     * @public
     * @readonly
     */
    readonly invokerCredentials: Credentials;
    /**
     * @summary `processedFrameNumber`.
     * @public
     * @readonly
     */
    readonly processedFrameNumber: IntUnsignedLong;
    /**
     * @summary `deliveredOcfsNumber`.
     * @public
     * @readonly
     */
    readonly deliveredOcfsNumber: IntUnsignedLong;
    /**
     * @summary `frameSyncLockStatus`.
     * @public
     * @readonly
     */
    readonly frameSyncLockStatus: FrameSyncLockStatus;
    /**
     * @summary `symbolSyncLockStatus`.
     * @public
     * @readonly
     */
    readonly symbolSyncLockStatus: SymbolLockStatus;
    /**
     * @summary `subcarrierLockStatus`.
     * @public
     * @readonly
     */
    readonly subcarrierLockStatus: LockStatus;
    /**
     * @summary `carrierLockStatus`.
     * @public
     * @readonly
     */
    readonly carrierLockStatus: CarrierLockStatus;
    /**
     * @summary `productionStatus`.
     * @public
     * @readonly
     */
    readonly productionStatus: RocfProductionStatus;

    constructor (
        invokerCredentials: Credentials,
        processedFrameNumber: IntUnsignedLong,
        deliveredOcfsNumber: IntUnsignedLong,
        frameSyncLockStatus: FrameSyncLockStatus,
        symbolSyncLockStatus: SymbolLockStatus,
        subcarrierLockStatus: LockStatus,
        carrierLockStatus: CarrierLockStatus,
        productionStatus: RocfProductionStatus
    ) {
        this.invokerCredentials = invokerCredentials;
        this.processedFrameNumber = processedFrameNumber;
        this.deliveredOcfsNumber = deliveredOcfsNumber;
        this.frameSyncLockStatus = frameSyncLockStatus;
        this.symbolSyncLockStatus = symbolSyncLockStatus;
        this.subcarrierLockStatus = subcarrierLockStatus;
        this.carrierLockStatus = carrierLockStatus;
        this.productionStatus = productionStatus;
    }

    /**
     * @summary Restructures an object into a RocfStatusReportInvocation
     * @description
     * 
     * This takes an `object` and converts it to a `RocfStatusReportInvocation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RocfStatusReportInvocation`.
     * @returns {RocfStatusReportInvocation}
     */
    public static _from_object (_o: { [_K in keyof (RocfStatusReportInvocation)]: (RocfStatusReportInvocation)[_K] }): RocfStatusReportInvocation {
        return new RocfStatusReportInvocation(_o.invokerCredentials, _o.processedFrameNumber, _o.deliveredOcfsNumber, _o.frameSyncLockStatus, _o.symbolSyncLockStatus, _o.subcarrierLockStatus, _o.carrierLockStatus, _o.productionStatus);
    }


}

/**
 * @summary The Leading Root Component Types of RocfStatusReportInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RocfStatusReportInvocation: $.ComponentSpec[] = [
    new $.ComponentSpec("invokerCredentials", false, $.hasAnyTag),
    new $.ComponentSpec("processedFrameNumber", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("deliveredOcfsNumber", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("frameSyncLockStatus", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("symbolSyncLockStatus", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("subcarrierLockStatus", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("carrierLockStatus", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("productionStatus", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of RocfStatusReportInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RocfStatusReportInvocation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RocfStatusReportInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RocfStatusReportInvocation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RocfStatusReportInvocation: $.ASN1Decoder<RocfStatusReportInvocation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RocfStatusReportInvocation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RocfStatusReportInvocation (el: _Element): RocfStatusReportInvocation {
    if (!_cached_decoder_for_RocfStatusReportInvocation) { _cached_decoder_for_RocfStatusReportInvocation = function (el: _Element): RocfStatusReportInvocation {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 8) {
        throw new _ConstructionError("RocfStatusReportInvocation contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "invokerCredentials";
    sequence[1].name = "processedFrameNumber";
    sequence[2].name = "deliveredOcfsNumber";
    sequence[3].name = "frameSyncLockStatus";
    sequence[4].name = "symbolSyncLockStatus";
    sequence[5].name = "subcarrierLockStatus";
    sequence[6].name = "carrierLockStatus";
    sequence[7].name = "productionStatus";
    let invokerCredentials!: Credentials;
    let processedFrameNumber!: IntUnsignedLong;
    let deliveredOcfsNumber!: IntUnsignedLong;
    let frameSyncLockStatus!: FrameSyncLockStatus;
    let symbolSyncLockStatus!: SymbolLockStatus;
    let subcarrierLockStatus!: LockStatus;
    let carrierLockStatus!: CarrierLockStatus;
    let productionStatus!: RocfProductionStatus;
    invokerCredentials = _decode_Credentials(sequence[0]);
    processedFrameNumber = _decode_IntUnsignedLong(sequence[1]);
    deliveredOcfsNumber = _decode_IntUnsignedLong(sequence[2]);
    frameSyncLockStatus = _decode_FrameSyncLockStatus(sequence[3]);
    symbolSyncLockStatus = _decode_SymbolLockStatus(sequence[4]);
    subcarrierLockStatus = _decode_LockStatus(sequence[5]);
    carrierLockStatus = _decode_CarrierLockStatus(sequence[6]);
    productionStatus = _decode_RocfProductionStatus(sequence[7]);
    return new RocfStatusReportInvocation(
        invokerCredentials,
        processedFrameNumber,
        deliveredOcfsNumber,
        frameSyncLockStatus,
        symbolSyncLockStatus,
        subcarrierLockStatus,
        carrierLockStatus,
        productionStatus,

    );
}; }
    return _cached_decoder_for_RocfStatusReportInvocation(el);
}

let _cached_encoder_for_RocfStatusReportInvocation: $.ASN1Encoder<RocfStatusReportInvocation> | null = null;

/**
 * @summary Encodes a(n) RocfStatusReportInvocation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RocfStatusReportInvocation, encoded as an ASN.1 Element.
 */
export
function _encode_RocfStatusReportInvocation (value: RocfStatusReportInvocation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RocfStatusReportInvocation) { _cached_encoder_for_RocfStatusReportInvocation = function (value: RocfStatusReportInvocation, elGetter: $.ASN1Encoder<RocfStatusReportInvocation>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_Credentials(value.invokerCredentials, $.BER),
        /* REQUIRED   */ _encode_IntUnsignedLong(value.processedFrameNumber, $.BER),
        /* REQUIRED   */ _encode_IntUnsignedLong(value.deliveredOcfsNumber, $.BER),
        /* REQUIRED   */ _encode_FrameSyncLockStatus(value.frameSyncLockStatus, $.BER),
        /* REQUIRED   */ _encode_SymbolLockStatus(value.symbolSyncLockStatus, $.BER),
        /* REQUIRED   */ _encode_LockStatus(value.subcarrierLockStatus, $.BER),
        /* REQUIRED   */ _encode_CarrierLockStatus(value.carrierLockStatus, $.BER),
        /* REQUIRED   */ _encode_RocfProductionStatus(value.productionStatus, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_RocfStatusReportInvocation(value, elGetter);
}


/* eslint-enable */
