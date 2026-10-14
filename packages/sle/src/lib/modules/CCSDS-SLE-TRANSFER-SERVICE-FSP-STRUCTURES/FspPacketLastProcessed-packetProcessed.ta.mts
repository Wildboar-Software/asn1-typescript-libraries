/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PacketIdentification, _decode_PacketIdentification, _encode_PacketIdentification } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/PacketIdentification.ta.mjs";
import { Time, _decode_Time, _encode_Time } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Time.ta.mjs";
import { FspPacketStatus, _decode_FspPacketStatus, _encode_FspPacketStatus } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/FspPacketStatus.ta.mjs";


/**
 * @summary FspPacketLastProcessed_packetProcessed
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FspPacketLastProcessed-packetProcessed ::= SEQUENCE
 *    {  packetIdentification    PacketIdentification
 *    ,  processingStartTime     Time
 *    ,  packetStatus            FspPacketStatus
 *    }
 * ```
 * 
 * @class
 */
export
class FspPacketLastProcessed_packetProcessed {
    /**
     * @summary `packetIdentification`.
     * @public
     * @readonly
     */
    readonly packetIdentification: PacketIdentification;
    /**
     * @summary `processingStartTime`.
     * @public
     * @readonly
     */
    readonly processingStartTime: Time;
    /**
     * @summary `packetStatus`.
     * @public
     * @readonly
     */
    readonly packetStatus: FspPacketStatus;

    constructor (
        packetIdentification: PacketIdentification,
        processingStartTime: Time,
        packetStatus: FspPacketStatus
    ) {
        this.packetIdentification = packetIdentification;
        this.processingStartTime = processingStartTime;
        this.packetStatus = packetStatus;
    }

    /**
     * @summary Restructures an object into a FspPacketLastProcessed_packetProcessed
     * @description
     * 
     * This takes an `object` and converts it to a `FspPacketLastProcessed_packetProcessed`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FspPacketLastProcessed_packetProcessed`.
     * @returns {FspPacketLastProcessed_packetProcessed}
     */
    public static _from_object (_o: { [_K in keyof (FspPacketLastProcessed_packetProcessed)]: (FspPacketLastProcessed_packetProcessed)[_K] }): FspPacketLastProcessed_packetProcessed {
        return new FspPacketLastProcessed_packetProcessed(_o.packetIdentification, _o.processingStartTime, _o.packetStatus);
    }


}

/**
 * @summary The Leading Root Component Types of FspPacketLastProcessed_packetProcessed
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FspPacketLastProcessed_packetProcessed: $.ComponentSpec[] = [
    new $.ComponentSpec("packetIdentification", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("processingStartTime", false, $.hasAnyTag),
    new $.ComponentSpec("packetStatus", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of FspPacketLastProcessed_packetProcessed
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FspPacketLastProcessed_packetProcessed: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FspPacketLastProcessed_packetProcessed
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FspPacketLastProcessed_packetProcessed: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FspPacketLastProcessed_packetProcessed: $.ASN1Decoder<FspPacketLastProcessed_packetProcessed> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FspPacketLastProcessed_packetProcessed
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FspPacketLastProcessed_packetProcessed (el: _Element): FspPacketLastProcessed_packetProcessed {
    if (!_cached_decoder_for_FspPacketLastProcessed_packetProcessed) { _cached_decoder_for_FspPacketLastProcessed_packetProcessed = function (el: _Element): FspPacketLastProcessed_packetProcessed {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("FspPacketLastProcessed-packetProcessed contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "packetIdentification";
    sequence[1].name = "processingStartTime";
    sequence[2].name = "packetStatus";
    let packetIdentification!: PacketIdentification;
    let processingStartTime!: Time;
    let packetStatus!: FspPacketStatus;
    packetIdentification = _decode_PacketIdentification(sequence[0]);
    processingStartTime = _decode_Time(sequence[1]);
    packetStatus = _decode_FspPacketStatus(sequence[2]);
    return new FspPacketLastProcessed_packetProcessed(
        packetIdentification,
        processingStartTime,
        packetStatus,

    );
}; }
    return _cached_decoder_for_FspPacketLastProcessed_packetProcessed(el);
}

let _cached_encoder_for_FspPacketLastProcessed_packetProcessed: $.ASN1Encoder<FspPacketLastProcessed_packetProcessed> | null = null;

/**
 * @summary Encodes a(n) FspPacketLastProcessed_packetProcessed into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FspPacketLastProcessed_packetProcessed, encoded as an ASN.1 Element.
 */
export
function _encode_FspPacketLastProcessed_packetProcessed (value: FspPacketLastProcessed_packetProcessed, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FspPacketLastProcessed_packetProcessed) { _cached_encoder_for_FspPacketLastProcessed_packetProcessed = function (value: FspPacketLastProcessed_packetProcessed, _elGetter: $.ASN1Encoder<FspPacketLastProcessed_packetProcessed>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_PacketIdentification(value.packetIdentification, $.BER),
        /* REQUIRED   */ _encode_Time(value.processingStartTime, $.BER),
        /* REQUIRED   */ _encode_FspPacketStatus(value.packetStatus, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_FspPacketLastProcessed_packetProcessed(value, elGetter);
}


/* eslint-enable */
