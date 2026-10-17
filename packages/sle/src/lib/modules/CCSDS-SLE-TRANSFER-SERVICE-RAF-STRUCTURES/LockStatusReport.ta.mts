/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Time, _decode_Time, _encode_Time } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Time.ta.mjs";
import { CarrierLockStatus, _decode_CarrierLockStatus, _encode_CarrierLockStatus } from "../CCSDS-SLE-TRANSFER-SERVICE-RAF-STRUCTURES/CarrierLockStatus.ta.mjs";
import { LockStatus, _decode_LockStatus, _encode_LockStatus } from "../CCSDS-SLE-TRANSFER-SERVICE-RAF-STRUCTURES/LockStatus.ta.mjs";
import { SymbolLockStatus, _decode_SymbolLockStatus, _encode_SymbolLockStatus } from "../CCSDS-SLE-TRANSFER-SERVICE-RAF-STRUCTURES/SymbolLockStatus.ta.mjs";


/**
 * @summary LockStatusReport
 * @description
 * 
 * Value carried with a `lossFrameSync` notification: the time the frame
 * synchronizer left lock, plus the carrier, subcarrier, and symbol lock
 * indications current at the notification. Those lock indications are typically
 * integrated over a measurement interval and can reflect a slightly earlier
 * time.
 * 
 * CCSDS 911.1-B-5, section 3.7.2.4.2.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LockStatusReport ::= SEQUENCE
 * {   time                              Time
 * ,   carrierLockStatus                 CarrierLockStatus
 * ,   subcarrierLockStatus              LockStatus
 * ,   symbolSyncLockStatus              SymbolLockStatus
 * }
 * ```
 * 
 * @class
 */
export
class LockStatusReport {
    /**
     * @summary `time`.
     * @description
     * UTC time at which the frame synchronizer transitioned from in-lock to
     * out-of-lock. CCSDS 911.1-B-5, section 3.7.2.4.2.
     * @public
     * @readonly
     */
    readonly time: Time;
    /**
     * @summary `carrierLockStatus`.
     * @description
     * Carrier demodulation lock at the notification: in-lock, out-of-lock, or
     * unknown. CCSDS 911.1-B-5, section 3.7.2.4.2.
     * @public
     * @readonly
     */
    readonly carrierLockStatus: CarrierLockStatus;
    /**
     * @summary `subcarrierLockStatus`.
     * @description
     * Subcarrier demodulation lock at the notification: in-lock, out-of-lock,
     * not in use, or unknown. CCSDS 911.1-B-5, section 3.7.2.4.2.
     * @public
     * @readonly
     */
    readonly subcarrierLockStatus: LockStatus;
    /**
     * @summary `symbolSyncLockStatus`.
     * @description
     * Symbol synchronization lock at the notification: in-lock, out-of-lock, or
     * unknown. CCSDS 911.1-B-5, section 3.7.2.4.2.
     * @public
     * @readonly
     */
    readonly symbolSyncLockStatus: SymbolLockStatus;

    constructor (
        time: Time,
        carrierLockStatus: CarrierLockStatus,
        subcarrierLockStatus: LockStatus,
        symbolSyncLockStatus: SymbolLockStatus
    ) {
        this.time = time;
        this.carrierLockStatus = carrierLockStatus;
        this.subcarrierLockStatus = subcarrierLockStatus;
        this.symbolSyncLockStatus = symbolSyncLockStatus;
    }

    /**
     * @summary Restructures an object into a LockStatusReport
     * @description
     * 
     * This takes an `object` and converts it to a `LockStatusReport`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LockStatusReport`.
     * @returns {LockStatusReport}
     */
    public static _from_object (_o: { [_K in keyof (LockStatusReport)]: (LockStatusReport)[_K] }): LockStatusReport {
        return new LockStatusReport(_o.time, _o.carrierLockStatus, _o.subcarrierLockStatus, _o.symbolSyncLockStatus);
    }


}

/**
 * @summary The Leading Root Component Types of LockStatusReport
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_LockStatusReport: $.ComponentSpec[] = [
    new $.ComponentSpec("time", false, $.hasAnyTag),
    new $.ComponentSpec("carrierLockStatus", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("subcarrierLockStatus", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("symbolSyncLockStatus", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of LockStatusReport
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_LockStatusReport: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of LockStatusReport
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_LockStatusReport: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_LockStatusReport: $.ASN1Decoder<LockStatusReport> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LockStatusReport
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LockStatusReport (el: _Element): LockStatusReport {
    if (!_cached_decoder_for_LockStatusReport) { _cached_decoder_for_LockStatusReport = function (el: _Element): LockStatusReport {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 4) {
        throw new _ConstructionError("LockStatusReport contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "time";
    sequence[1].name = "carrierLockStatus";
    sequence[2].name = "subcarrierLockStatus";
    sequence[3].name = "symbolSyncLockStatus";
    let time!: Time;
    let carrierLockStatus!: CarrierLockStatus;
    let subcarrierLockStatus!: LockStatus;
    let symbolSyncLockStatus!: SymbolLockStatus;
    time = _decode_Time(sequence[0]);
    carrierLockStatus = _decode_CarrierLockStatus(sequence[1]);
    subcarrierLockStatus = _decode_LockStatus(sequence[2]);
    symbolSyncLockStatus = _decode_SymbolLockStatus(sequence[3]);
    return new LockStatusReport(
        time,
        carrierLockStatus,
        subcarrierLockStatus,
        symbolSyncLockStatus,

    );
}; }
    return _cached_decoder_for_LockStatusReport(el);
}

let _cached_encoder_for_LockStatusReport: $.ASN1Encoder<LockStatusReport> | null = null;

/**
 * @summary Encodes a(n) LockStatusReport into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LockStatusReport, encoded as an ASN.1 Element.
 */
export
function _encode_LockStatusReport (value: LockStatusReport, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LockStatusReport) { _cached_encoder_for_LockStatusReport = function (value: LockStatusReport, _elGetter: $.ASN1Encoder<LockStatusReport>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_Time(value.time, $.BER),
        /* REQUIRED   */ _encode_CarrierLockStatus(value.carrierLockStatus, $.BER),
        /* REQUIRED   */ _encode_LockStatus(value.subcarrierLockStatus, $.BER),
        /* REQUIRED   */ _encode_SymbolLockStatus(value.symbolSyncLockStatus, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_LockStatusReport(value, elGetter);
}


/* eslint-enable */
