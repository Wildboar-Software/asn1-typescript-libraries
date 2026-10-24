/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type Credentials, _decode_Credentials, _encode_Credentials } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Credentials.ta.mjs";
import { type InvokeId, _decode_InvokeId, _encode_InvokeId } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/InvokeId.ta.mjs";
import { type PacketIdentification, _decode_PacketIdentification, _encode_PacketIdentification } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/PacketIdentification.ta.mjs";
import { type BufferSize, _decode_BufferSize, _encode_BufferSize } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/BufferSize.ta.mjs";
import { type FspTransferDataReturn_result, _decode_FspTransferDataReturn_result, _encode_FspTransferDataReturn_result } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-OUTGOING-PDUS/FspTransferDataReturn-result.ta.mjs";


/**
 * @summary FspTransferDataReturn
 * @description
 * 
 * Provider return from FSP-TRANSFER-DATA. A positive result means the Packet
 * will be queued until processing is due. A negative result means the Packet
 * has not been queued. The provider remains in state 3 (active) either way.
 * 
 * CCSDS 912.3-B-3, sections 3.6.2.17 and 3.6.3.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FspTransferDataReturn ::= SEQUENCE
 * {  performerCredentials          Credentials
 * ,  invokeId                      InvokeId
 * ,  expectedPacketIdentification  PacketIdentification
 * ,  packetBufferAvailable         BufferSize
 * ,  result                        CHOICE
 *    {  positiveResult          [0]   NULL
 *    ,  negativeResult          [1]   DiagnosticFspTransferData
 *    }
 * }
 * ```
 * 
 * @class
 */
export
class FspTransferDataReturn {
    /**
     * @summary `performerCredentials`.
     * @description
     * Information with which the invoker authenticates this return. When the
     * agreed level is `all`, every FSP invocation and return except
     * FSP-PEER-ABORT is authenticated. When this return is unauthenticated, the
     * value should be `unused`.
     * 
     * CCSDS 912.3-B-3, sections 3.1.5.1, 3.1.5.4, and 3.1.5.5.
     * @public
     * @readonly
     */
    readonly performerCredentials: Credentials;
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
     * @summary `expectedPacketIdentification`.
     * @description
     * Packet identification the provider expects on the next FSP-TRANSFER-DATA.
     * If this invocation is accepted, the value is one greater than the
     * identification in the invocation. If it is rejected, the value is the
     * identification the provider expected: the FSP-START
     * `firstPacketIdentification` for the first transfer after that start,
     * otherwise one greater than the last accepted identification. The same
     * rule applies when the diagnostic is `duplicatePacketIdentification`.
     * 
     * CCSDS 912.3-B-3, section 3.6.2.5.2.
     * @public
     * @readonly
     */
    readonly expectedPacketIdentification: PacketIdentification;
    /**
     * @summary `packetBufferAvailable`.
     * @description
     * Remaining number of octets available to this service instance for
     * buffering Space Packets in the request queue. Annex A constrains the
     * value to 7 through 66560 and comments that the minimum Telecommand size
     * is 7 octets and the maximum is 64K octets plus overhead. Section 3.6.2.16
     * does not restate that range.
     * 
     * CCSDS 912.3-B-3, section 3.6.2.16 and annex A2.5.
     * @public
     * @readonly
     */
    readonly packetBufferAvailable: BufferSize;
    /**
     * @summary `result`.
     * @description
     * Outcome of FSP-TRANSFER-DATA. `positiveResult` means the Packet will be
     * queued. `negativeResult` means it was not queued and carries a
     * `DiagnosticFspTransferData`.
     * 
     * CCSDS 912.3-B-3, section 3.6.2.17.
     * @public
     * @readonly
     */
    readonly result: FspTransferDataReturn_result;

    constructor (
        performerCredentials: Credentials,
        invokeId: InvokeId,
        expectedPacketIdentification: PacketIdentification,
        packetBufferAvailable: BufferSize,
        result: FspTransferDataReturn_result
    ) {
        this.performerCredentials = performerCredentials;
        this.invokeId = invokeId;
        this.expectedPacketIdentification = expectedPacketIdentification;
        this.packetBufferAvailable = packetBufferAvailable;
        this.result = result;
    }

    /**
     * @summary Restructures an object into a FspTransferDataReturn
     * @description
     * 
     * This takes an `object` and converts it to a `FspTransferDataReturn`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FspTransferDataReturn`.
     * @returns {FspTransferDataReturn}
     */
    public static _from_object (_o: { [_K in keyof (FspTransferDataReturn)]: (FspTransferDataReturn)[_K] }): FspTransferDataReturn {
        return new FspTransferDataReturn(_o.performerCredentials, _o.invokeId, _o.expectedPacketIdentification, _o.packetBufferAvailable, _o.result);
    }


}

/**
 * @summary The Leading Root Component Types of FspTransferDataReturn
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FspTransferDataReturn: $.ComponentSpec[] = [
    new $.ComponentSpec("performerCredentials", false, $.hasAnyTag),
    new $.ComponentSpec("invokeId", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("expectedPacketIdentification", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("packetBufferAvailable", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("result", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of FspTransferDataReturn
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FspTransferDataReturn: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FspTransferDataReturn
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FspTransferDataReturn: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FspTransferDataReturn: $.ASN1Decoder<FspTransferDataReturn> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FspTransferDataReturn
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FspTransferDataReturn (el: _Element): FspTransferDataReturn {
    if (!_cached_decoder_for_FspTransferDataReturn) { _cached_decoder_for_FspTransferDataReturn = function (el: _Element): FspTransferDataReturn {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 5) {
        throw new _ConstructionError("FspTransferDataReturn contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "performerCredentials";
    sequence[1].name = "invokeId";
    sequence[2].name = "expectedPacketIdentification";
    sequence[3].name = "packetBufferAvailable";
    sequence[4].name = "result";
    let performerCredentials!: Credentials;
    let invokeId!: InvokeId;
    let expectedPacketIdentification!: PacketIdentification;
    let packetBufferAvailable!: BufferSize;
    let result!: FspTransferDataReturn_result;
    performerCredentials = _decode_Credentials(sequence[0]);
    invokeId = _decode_InvokeId(sequence[1]);
    expectedPacketIdentification = _decode_PacketIdentification(sequence[2]);
    packetBufferAvailable = _decode_BufferSize(sequence[3]);
    result = _decode_FspTransferDataReturn_result(sequence[4]);
    return new FspTransferDataReturn(
        performerCredentials,
        invokeId,
        expectedPacketIdentification,
        packetBufferAvailable,
        result,

    );
}; }
    return _cached_decoder_for_FspTransferDataReturn(el);
}

let _cached_encoder_for_FspTransferDataReturn: $.ASN1Encoder<FspTransferDataReturn> | null = null;

/**
 * @summary Encodes a(n) FspTransferDataReturn into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FspTransferDataReturn, encoded as an ASN.1 Element.
 */
export
function _encode_FspTransferDataReturn (value: FspTransferDataReturn, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FspTransferDataReturn) { _cached_encoder_for_FspTransferDataReturn = function (value: FspTransferDataReturn, _elGetter: $.ASN1Encoder<FspTransferDataReturn>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_Credentials(value.performerCredentials, $.BER),
        /* REQUIRED   */ _encode_InvokeId(value.invokeId, $.BER),
        /* REQUIRED   */ _encode_PacketIdentification(value.expectedPacketIdentification, $.BER),
        /* REQUIRED   */ _encode_BufferSize(value.packetBufferAvailable, $.BER),
        /* REQUIRED   */ _encode_FspTransferDataReturn_result(value.result, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_FspTransferDataReturn(value, elGetter);
}


/* eslint-enable */
