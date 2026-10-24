/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Credentials, _decode_Credentials, _encode_Credentials } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Credentials.ta.mjs";
import { CltuLastProcessed, _decode_CltuLastProcessed, _encode_CltuLastProcessed } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-STRUCTURES/CltuLastProcessed.ta.mjs";
import { CltuLastOk, _decode_CltuLastOk, _encode_CltuLastOk } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-STRUCTURES/CltuLastOk.ta.mjs";
import { ProductionStatus, _decode_ProductionStatus, _encode_ProductionStatus } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-STRUCTURES/ProductionStatus.ta.mjs";
import { UplinkStatus, _decode_UplinkStatus, _encode_UplinkStatus } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-STRUCTURES/UplinkStatus.ta.mjs";
import { NumberOfCltusReceived, _decode_NumberOfCltusReceived, _encode_NumberOfCltusReceived } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-STRUCTURES/NumberOfCltusReceived.ta.mjs";
import { NumberOfCltusProcessed, _decode_NumberOfCltusProcessed, _encode_NumberOfCltusProcessed } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-STRUCTURES/NumberOfCltusProcessed.ta.mjs";
import { NumberOfCltusRadiated, _decode_NumberOfCltusRadiated, _encode_NumberOfCltusRadiated } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-STRUCTURES/NumberOfCltusRadiated.ta.mjs";
import { BufferSize, _decode_BufferSize, _encode_BufferSize } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-STRUCTURES/BufferSize.ta.mjs";


/**
 * @summary CltuStatusReportInvocation
 * @description
 * 
 * Unconfirmed provider status report. Sent only as requested by
 * CLTU-SCHEDULE-STATUS-REPORT: once for immediately, and at the requested
 * interval for periodically. Valid in state 2 (ready) and state 3 (active).
 * After CLTU-BIND, periodic reporting is off. Counts cover the whole service
 * instance provision period and survive release, abort, and protocol abort.
 * Section 3.9 lists cltu-status, radiation-start-time, and radiation-stop-time
 * separately; Annex A carries them inside cltuLastProcessed and cltuLastOk. The
 * provider state stays unchanged. CCSDS 912.1-B-5, sections 3.9, 3.8, 3.1.11,
 * and 2.6.4.4.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CltuStatusReportInvocation ::= SEQUENCE
 * {  invokerCredentials            Credentials
 * ,  cltuLastProcessed             CltuLastProcessed
 * ,  cltuLastOk                    CltuLastOk
 * ,  cltuProductionStatus          ProductionStatus
 * ,  uplinkStatus                  UplinkStatus
 * ,  numberOfCltusReceived         NumberOfCltusReceived
 * ,  numberOfCltusProcessed        NumberOfCltusProcessed
 * ,  numberOfCltusRadiated         NumberOfCltusRadiated
 * ,  cltuBufferAvailable           BufferSize
 * }
 * ```
 * 
 * @class
 */
export
class CltuStatusReportInvocation {
    /**
     * @summary `invokerCredentials`.
     * @description
     *
     * Credentials that let the user authenticate this provider invocation when
     * the agreed authentication level requires it. Set this to unused when
     * authentication is not required. CCSDS 912.1-B-5, section 3.1.5.
     * @public
     * @readonly
     */
    readonly invokerCredentials: Credentials;
    /**
     * @summary `cltuLastProcessed`.
     * @description
     *
     * The CLTU most recently processed or attempted in this service instance,
     * or noCltuProcessed when none have been attempted (section 3.9.2.3).
     * cltu-status and radiation-start-time are inside the cltuProcessed
     * alternative.
     * @public
     * @readonly
     */
    readonly cltuLastProcessed: CltuLastProcessed;
    /**
     * @summary `cltuLastOk`.
     * @description
     *
     * The CLTU most recently radiated completely, or noCltuOk when none have
     * completed (section 3.9.2.4). radiation-stop-time is inside the cltuOk
     * alternative.
     * @public
     * @readonly
     */
    readonly cltuLastOk: CltuLastOk;
    /**
     * @summary `cltuProductionStatus`.
     * @description
     *
     * Current production-status. operational here means the process is
     * configured, has completed the acquisition sequence, and can radiate
     * CLTUs. CCSDS 912.1-B-5, section 3.9.2.8.
     * @public
     * @readonly
     */
    readonly cltuProductionStatus: ProductionStatus;
    /**
     * @summary `uplinkStatus`.
     * @description
     *
     * Forward-link state from the CLCW in the return telemetry. CCSDS
     * 912.1-B-5, section 3.9.2.9.
     * @public
     * @readonly
     */
    readonly uplinkStatus: UplinkStatus;
    /**
     * @summary `numberOfCltusReceived`.
     * @description
     *
     * CLTUs received, checked successfully, and buffered during this service
     * instance. Zero when none have been received. Rejected CLTUs are omitted.
     * CCSDS 912.1-B-5, section 3.9.2.10.
     * @public
     * @readonly
     */
    readonly numberOfCltusReceived: NumberOfCltusReceived;
    /**
     * @summary `numberOfCltusProcessed`.
     * @description
     *
     * CLTUs the provider attempted to radiate during this service instance:
     * radiated, expired, aborted, and a CLTU currently being radiated. Zero
     * when none have been processed. CCSDS 912.1-B-5, section 3.9.2.11.
     * @public
     * @readonly
     */
    readonly numberOfCltusProcessed: NumberOfCltusProcessed;
    /**
     * @summary `numberOfCltusRadiated`.
     * @description
     *
     * CLTUs radiated completely during this service instance. A CLTU still
     * being radiated is omitted. Zero when none have been radiated. CCSDS
     * 912.1-B-5, section 3.9.2.12.
     * @public
     * @readonly
     */
    readonly numberOfCltusRadiated: NumberOfCltusRadiated;
    /**
     * @summary `cltuBufferAvailable`.
     * @description
     *
     * Octets still available for buffering complete CLTUs. A CLTU is removed
     * from this count when the provider starts to process it. CCSDS 912.1-B-5,
     * section 3.9.2.13.
     * @public
     * @readonly
     */
    readonly cltuBufferAvailable: BufferSize;

    constructor (
        invokerCredentials: Credentials,
        cltuLastProcessed: CltuLastProcessed,
        cltuLastOk: CltuLastOk,
        cltuProductionStatus: ProductionStatus,
        uplinkStatus: UplinkStatus,
        numberOfCltusReceived: NumberOfCltusReceived,
        numberOfCltusProcessed: NumberOfCltusProcessed,
        numberOfCltusRadiated: NumberOfCltusRadiated,
        cltuBufferAvailable: BufferSize
    ) {
        this.invokerCredentials = invokerCredentials;
        this.cltuLastProcessed = cltuLastProcessed;
        this.cltuLastOk = cltuLastOk;
        this.cltuProductionStatus = cltuProductionStatus;
        this.uplinkStatus = uplinkStatus;
        this.numberOfCltusReceived = numberOfCltusReceived;
        this.numberOfCltusProcessed = numberOfCltusProcessed;
        this.numberOfCltusRadiated = numberOfCltusRadiated;
        this.cltuBufferAvailable = cltuBufferAvailable;
    }

    /**
     * @summary Restructures an object into a CltuStatusReportInvocation
     * @description
     * 
     * This takes an `object` and converts it to a `CltuStatusReportInvocation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CltuStatusReportInvocation`.
     * @returns {CltuStatusReportInvocation}
     */
    public static _from_object (_o: { [_K in keyof (CltuStatusReportInvocation)]: (CltuStatusReportInvocation)[_K] }): CltuStatusReportInvocation {
        return new CltuStatusReportInvocation(_o.invokerCredentials, _o.cltuLastProcessed, _o.cltuLastOk, _o.cltuProductionStatus, _o.uplinkStatus, _o.numberOfCltusReceived, _o.numberOfCltusProcessed, _o.numberOfCltusRadiated, _o.cltuBufferAvailable);
    }


}

/**
 * @summary The Leading Root Component Types of CltuStatusReportInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CltuStatusReportInvocation: $.ComponentSpec[] = [
    new $.ComponentSpec("invokerCredentials", false, $.hasAnyTag),
    new $.ComponentSpec("cltuLastProcessed", false, $.hasAnyTag),
    new $.ComponentSpec("cltuLastOk", false, $.hasAnyTag),
    new $.ComponentSpec("cltuProductionStatus", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("uplinkStatus", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("numberOfCltusReceived", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("numberOfCltusProcessed", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("numberOfCltusRadiated", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("cltuBufferAvailable", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of CltuStatusReportInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CltuStatusReportInvocation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CltuStatusReportInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CltuStatusReportInvocation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CltuStatusReportInvocation: $.ASN1Decoder<CltuStatusReportInvocation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CltuStatusReportInvocation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CltuStatusReportInvocation (el: _Element): CltuStatusReportInvocation {
    if (!_cached_decoder_for_CltuStatusReportInvocation) { _cached_decoder_for_CltuStatusReportInvocation = function (el: _Element): CltuStatusReportInvocation {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 9) {
        throw new _ConstructionError("CltuStatusReportInvocation contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "invokerCredentials";
    sequence[1].name = "cltuLastProcessed";
    sequence[2].name = "cltuLastOk";
    sequence[3].name = "cltuProductionStatus";
    sequence[4].name = "uplinkStatus";
    sequence[5].name = "numberOfCltusReceived";
    sequence[6].name = "numberOfCltusProcessed";
    sequence[7].name = "numberOfCltusRadiated";
    sequence[8].name = "cltuBufferAvailable";
    let invokerCredentials!: Credentials;
    let cltuLastProcessed!: CltuLastProcessed;
    let cltuLastOk!: CltuLastOk;
    let cltuProductionStatus!: ProductionStatus;
    let uplinkStatus!: UplinkStatus;
    let numberOfCltusReceived!: NumberOfCltusReceived;
    let numberOfCltusProcessed!: NumberOfCltusProcessed;
    let numberOfCltusRadiated!: NumberOfCltusRadiated;
    let cltuBufferAvailable!: BufferSize;
    invokerCredentials = _decode_Credentials(sequence[0]);
    cltuLastProcessed = _decode_CltuLastProcessed(sequence[1]);
    cltuLastOk = _decode_CltuLastOk(sequence[2]);
    cltuProductionStatus = _decode_ProductionStatus(sequence[3]);
    uplinkStatus = _decode_UplinkStatus(sequence[4]);
    numberOfCltusReceived = _decode_NumberOfCltusReceived(sequence[5]);
    numberOfCltusProcessed = _decode_NumberOfCltusProcessed(sequence[6]);
    numberOfCltusRadiated = _decode_NumberOfCltusRadiated(sequence[7]);
    cltuBufferAvailable = _decode_BufferSize(sequence[8]);
    return new CltuStatusReportInvocation(
        invokerCredentials,
        cltuLastProcessed,
        cltuLastOk,
        cltuProductionStatus,
        uplinkStatus,
        numberOfCltusReceived,
        numberOfCltusProcessed,
        numberOfCltusRadiated,
        cltuBufferAvailable,

    );
}; }
    return _cached_decoder_for_CltuStatusReportInvocation(el);
}

let _cached_encoder_for_CltuStatusReportInvocation: $.ASN1Encoder<CltuStatusReportInvocation> | null = null;

/**
 * @summary Encodes a(n) CltuStatusReportInvocation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CltuStatusReportInvocation, encoded as an ASN.1 Element.
 */
export
function _encode_CltuStatusReportInvocation (value: CltuStatusReportInvocation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CltuStatusReportInvocation) { _cached_encoder_for_CltuStatusReportInvocation = function (value: CltuStatusReportInvocation, _elGetter: $.ASN1Encoder<CltuStatusReportInvocation>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_Credentials(value.invokerCredentials, $.BER),
        /* REQUIRED   */ _encode_CltuLastProcessed(value.cltuLastProcessed, $.BER),
        /* REQUIRED   */ _encode_CltuLastOk(value.cltuLastOk, $.BER),
        /* REQUIRED   */ _encode_ProductionStatus(value.cltuProductionStatus, $.BER),
        /* REQUIRED   */ _encode_UplinkStatus(value.uplinkStatus, $.BER),
        /* REQUIRED   */ _encode_NumberOfCltusReceived(value.numberOfCltusReceived, $.BER),
        /* REQUIRED   */ _encode_NumberOfCltusProcessed(value.numberOfCltusProcessed, $.BER),
        /* REQUIRED   */ _encode_NumberOfCltusRadiated(value.numberOfCltusRadiated, $.BER),
        /* REQUIRED   */ _encode_BufferSize(value.cltuBufferAvailable, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_CltuStatusReportInvocation(value, elGetter);
}


/* eslint-enable */
