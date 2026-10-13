/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Credentials, _decode_Credentials, _encode_Credentials } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Credentials.ta.mjs";
// export { Credentials, _decode_Credentials, _encode_Credentials } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Credentials.ta.mjs";
import { FspPacketLastProcessed, _decode_FspPacketLastProcessed, _encode_FspPacketLastProcessed } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/FspPacketLastProcessed.ta.mjs";
// export { FspPacketLastProcessed, _decode_FspPacketLastProcessed, _encode_FspPacketLastProcessed } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/FspPacketLastProcessed.ta.mjs";
import { FspPacketLastOk, _decode_FspPacketLastOk, _encode_FspPacketLastOk } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/FspPacketLastOk.ta.mjs";
// export { FspPacketLastOk, _decode_FspPacketLastOk, _encode_FspPacketLastOk } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/FspPacketLastOk.ta.mjs";
import { FspProductionStatus, _decode_FspProductionStatus, _encode_FspProductionStatus } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/FspProductionStatus.ta.mjs";
// export { FspProductionStatus, FspProductionStatus_configured /* IMPORTED_LONG_NAMED_INTEGER */, configured /* IMPORTED_SHORT_NAMED_INTEGER */, FspProductionStatus_operationalBd /* IMPORTED_LONG_NAMED_INTEGER */, operationalBd /* IMPORTED_SHORT_NAMED_INTEGER */, FspProductionStatus_operationalAdAndBd /* IMPORTED_LONG_NAMED_INTEGER */, operationalAdAndBd /* IMPORTED_SHORT_NAMED_INTEGER */, FspProductionStatus_operationalAdSuspended /* IMPORTED_LONG_NAMED_INTEGER */, operationalAdSuspended /* IMPORTED_SHORT_NAMED_INTEGER */, FspProductionStatus_interrupted /* IMPORTED_LONG_NAMED_INTEGER */, interrupted /* IMPORTED_SHORT_NAMED_INTEGER */, FspProductionStatus_halted /* IMPORTED_LONG_NAMED_INTEGER */, halted /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_FspProductionStatus, _encode_FspProductionStatus } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/FspProductionStatus.ta.mjs";
import { FspPacketCount, _decode_FspPacketCount, _encode_FspPacketCount } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/FspPacketCount.ta.mjs";
// export { FspPacketCount, _decode_FspPacketCount, _encode_FspPacketCount } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/FspPacketCount.ta.mjs";
import { IntUnsignedLong, _decode_IntUnsignedLong, _encode_IntUnsignedLong } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/IntUnsignedLong.ta.mjs";
// export { IntUnsignedLong, _decode_IntUnsignedLong, _encode_IntUnsignedLong } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/IntUnsignedLong.ta.mjs";


/**
 * @summary FspStatusReportInvocation
 * @description
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
     * @public
     * @readonly
     */
    readonly invokerCredentials: Credentials;
    /**
     * @summary `fspPacketLastProcessed`.
     * @public
     * @readonly
     */
    readonly fspPacketLastProcessed: FspPacketLastProcessed;
    /**
     * @summary `fspPacketLastOk`.
     * @public
     * @readonly
     */
    readonly fspPacketLastOk: FspPacketLastOk;
    /**
     * @summary `productionStatus`.
     * @public
     * @readonly
     */
    readonly productionStatus: FspProductionStatus;
    /**
     * @summary `numberOfPacketsReceived`.
     * @public
     * @readonly
     */
    readonly numberOfPacketsReceived: FspPacketCount;
    /**
     * @summary `numberOfPacketsProcessed`.
     * @public
     * @readonly
     */
    readonly numberOfPacketsProcessed: FspPacketCount;
    /**
     * @summary `numberOfPacketsRadiated`.
     * @public
     * @readonly
     */
    readonly numberOfPacketsRadiated: FspPacketCount;
    /**
     * @summary `numberOfPacketsAcknowledged`.
     * @public
     * @readonly
     */
    readonly numberOfPacketsAcknowledged: IntUnsignedLong;
    /**
     * @summary `fspBufferAvailable`.
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
    if (!_cached_encoder_for_FspStatusReportInvocation) { _cached_encoder_for_FspStatusReportInvocation = function (value: FspStatusReportInvocation, elGetter: $.ASN1Encoder<FspStatusReportInvocation>): _Element {
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
