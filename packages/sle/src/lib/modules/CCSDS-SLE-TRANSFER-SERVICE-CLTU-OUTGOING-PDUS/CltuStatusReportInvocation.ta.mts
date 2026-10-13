/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Credentials, _decode_Credentials, _encode_Credentials } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Credentials.ta.mjs";
// export { Credentials, _decode_Credentials, _encode_Credentials } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Credentials.ta.mjs";
import { CltuLastProcessed, _decode_CltuLastProcessed, _encode_CltuLastProcessed } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-STRUCTURES/CltuLastProcessed.ta.mjs";
// export { CltuLastProcessed, _decode_CltuLastProcessed, _encode_CltuLastProcessed } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-STRUCTURES/CltuLastProcessed.ta.mjs";
import { CltuLastOk, _decode_CltuLastOk, _encode_CltuLastOk } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-STRUCTURES/CltuLastOk.ta.mjs";
// export { CltuLastOk, _decode_CltuLastOk, _encode_CltuLastOk } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-STRUCTURES/CltuLastOk.ta.mjs";
import { ProductionStatus, _decode_ProductionStatus, _encode_ProductionStatus } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-STRUCTURES/ProductionStatus.ta.mjs";
// export { ProductionStatus, ProductionStatus_operational /* IMPORTED_LONG_NAMED_INTEGER */, operational /* IMPORTED_SHORT_NAMED_INTEGER */, ProductionStatus_configured /* IMPORTED_LONG_NAMED_INTEGER */, configured /* IMPORTED_SHORT_NAMED_INTEGER */, ProductionStatus_interrupted /* IMPORTED_LONG_NAMED_INTEGER */, interrupted /* IMPORTED_SHORT_NAMED_INTEGER */, ProductionStatus_halted /* IMPORTED_LONG_NAMED_INTEGER */, halted /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ProductionStatus, _encode_ProductionStatus } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-STRUCTURES/ProductionStatus.ta.mjs";
import { UplinkStatus, _decode_UplinkStatus, _encode_UplinkStatus } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-STRUCTURES/UplinkStatus.ta.mjs";
// export { UplinkStatus, UplinkStatus_uplinkStatusNotAvailable /* IMPORTED_LONG_NAMED_INTEGER */, uplinkStatusNotAvailable /* IMPORTED_SHORT_NAMED_INTEGER */, UplinkStatus_noRfAvailable /* IMPORTED_LONG_NAMED_INTEGER */, noRfAvailable /* IMPORTED_SHORT_NAMED_INTEGER */, UplinkStatus_noBitLock /* IMPORTED_LONG_NAMED_INTEGER */, noBitLock /* IMPORTED_SHORT_NAMED_INTEGER */, UplinkStatus_nominal /* IMPORTED_LONG_NAMED_INTEGER */, nominal /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_UplinkStatus, _encode_UplinkStatus } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-STRUCTURES/UplinkStatus.ta.mjs";
import { NumberOfCltusReceived, _decode_NumberOfCltusReceived, _encode_NumberOfCltusReceived } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-STRUCTURES/NumberOfCltusReceived.ta.mjs";
// export { NumberOfCltusReceived, _decode_NumberOfCltusReceived, _encode_NumberOfCltusReceived } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-STRUCTURES/NumberOfCltusReceived.ta.mjs";
import { NumberOfCltusProcessed, _decode_NumberOfCltusProcessed, _encode_NumberOfCltusProcessed } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-STRUCTURES/NumberOfCltusProcessed.ta.mjs";
// export { NumberOfCltusProcessed, _decode_NumberOfCltusProcessed, _encode_NumberOfCltusProcessed } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-STRUCTURES/NumberOfCltusProcessed.ta.mjs";
import { NumberOfCltusRadiated, _decode_NumberOfCltusRadiated, _encode_NumberOfCltusRadiated } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-STRUCTURES/NumberOfCltusRadiated.ta.mjs";
// export { NumberOfCltusRadiated, _decode_NumberOfCltusRadiated, _encode_NumberOfCltusRadiated } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-STRUCTURES/NumberOfCltusRadiated.ta.mjs";
import { BufferSize, _decode_BufferSize, _encode_BufferSize } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-STRUCTURES/BufferSize.ta.mjs";
// export { BufferSize, _decode_BufferSize, _encode_BufferSize } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-STRUCTURES/BufferSize.ta.mjs";


/**
 * @summary CltuStatusReportInvocation
 * @description
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
     * @public
     * @readonly
     */
    readonly invokerCredentials: Credentials;
    /**
     * @summary `cltuLastProcessed`.
     * @public
     * @readonly
     */
    readonly cltuLastProcessed: CltuLastProcessed;
    /**
     * @summary `cltuLastOk`.
     * @public
     * @readonly
     */
    readonly cltuLastOk: CltuLastOk;
    /**
     * @summary `cltuProductionStatus`.
     * @public
     * @readonly
     */
    readonly cltuProductionStatus: ProductionStatus;
    /**
     * @summary `uplinkStatus`.
     * @public
     * @readonly
     */
    readonly uplinkStatus: UplinkStatus;
    /**
     * @summary `numberOfCltusReceived`.
     * @public
     * @readonly
     */
    readonly numberOfCltusReceived: NumberOfCltusReceived;
    /**
     * @summary `numberOfCltusProcessed`.
     * @public
     * @readonly
     */
    readonly numberOfCltusProcessed: NumberOfCltusProcessed;
    /**
     * @summary `numberOfCltusRadiated`.
     * @public
     * @readonly
     */
    readonly numberOfCltusRadiated: NumberOfCltusRadiated;
    /**
     * @summary `cltuBufferAvailable`.
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
    if (!_cached_encoder_for_CltuStatusReportInvocation) { _cached_encoder_for_CltuStatusReportInvocation = function (value: CltuStatusReportInvocation, elGetter: $.ASN1Encoder<CltuStatusReportInvocation>): _Element {
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
