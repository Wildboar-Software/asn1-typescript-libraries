/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type PacketIdentification, _decode_PacketIdentification, _encode_PacketIdentification } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/PacketIdentification.ta.mjs";
import { type Time, _decode_Time, _encode_Time } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Time.ta.mjs";


/**
 * @summary FspPacketLastOk_packetOk
 * @description
 * 
 * Identification and completion time of the Packet that most recently completed
 * processing successfully. Present when at least one Packet of this instance
 * has been successfully processed.
 * 
 * CCSDS 912.3-B-3, sections 3.7.2.12, 3.7.2.13, 3.9.2.6, and 3.9.2.7.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FspPacketLastOk-packetOk ::= SEQUENCE
 *    {  packetIdentification    PacketIdentification
 *    ,  processingStopTime      Time
 *    }
 * ```
 * 
 * @class
 */
export
class FspPacketLastOk_packetOk {
    /**
     * @summary `packetIdentification`.
     * @description
     * Identification of the Space Packet of this instance that most recently
     * completed processing successfully.
     * 
     * CCSDS 912.3-B-3, sections 3.7.2.12 and 3.9.2.6.
     * @public
     * @readonly
     */
    readonly packetIdentification: PacketIdentification;
    /**
     * @summary `processingStopTime`.
     * @description
     * Time at which processing of the identified Packet completed. For
     * expedited (BD) transmission this is the time radiation completed. For
     * sequence-controlled (AD) transmission this is the time the last component
     * was acknowledged by a received CLCW.
     * 
     * CCSDS 912.3-B-3, sections 3.7.2.13 and 3.9.2.7.
     * @public
     * @readonly
     */
    readonly processingStopTime: Time;

    constructor (
        packetIdentification: PacketIdentification,
        processingStopTime: Time
    ) {
        this.packetIdentification = packetIdentification;
        this.processingStopTime = processingStopTime;
    }

    /**
     * @summary Restructures an object into a FspPacketLastOk_packetOk
     * @description
     * 
     * This takes an `object` and converts it to a `FspPacketLastOk_packetOk`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FspPacketLastOk_packetOk`.
     * @returns {FspPacketLastOk_packetOk}
     */
    public static _from_object (_o: { [_K in keyof (FspPacketLastOk_packetOk)]: (FspPacketLastOk_packetOk)[_K] }): FspPacketLastOk_packetOk {
        return new FspPacketLastOk_packetOk(_o.packetIdentification, _o.processingStopTime);
    }


}

/**
 * @summary The Leading Root Component Types of FspPacketLastOk_packetOk
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FspPacketLastOk_packetOk: $.ComponentSpec[] = [
    new $.ComponentSpec("packetIdentification", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("processingStopTime", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of FspPacketLastOk_packetOk
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FspPacketLastOk_packetOk: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FspPacketLastOk_packetOk
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FspPacketLastOk_packetOk: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FspPacketLastOk_packetOk: $.ASN1Decoder<FspPacketLastOk_packetOk> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FspPacketLastOk_packetOk
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FspPacketLastOk_packetOk (el: _Element): FspPacketLastOk_packetOk {
    if (!_cached_decoder_for_FspPacketLastOk_packetOk) { _cached_decoder_for_FspPacketLastOk_packetOk = function (el: _Element): FspPacketLastOk_packetOk {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("FspPacketLastOk-packetOk contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "packetIdentification";
    sequence[1].name = "processingStopTime";
    let packetIdentification!: PacketIdentification;
    let processingStopTime!: Time;
    packetIdentification = _decode_PacketIdentification(sequence[0]);
    processingStopTime = _decode_Time(sequence[1]);
    return new FspPacketLastOk_packetOk(
        packetIdentification,
        processingStopTime,

    );
}; }
    return _cached_decoder_for_FspPacketLastOk_packetOk(el);
}

let _cached_encoder_for_FspPacketLastOk_packetOk: $.ASN1Encoder<FspPacketLastOk_packetOk> | null = null;

/**
 * @summary Encodes a(n) FspPacketLastOk_packetOk into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FspPacketLastOk_packetOk, encoded as an ASN.1 Element.
 */
export
function _encode_FspPacketLastOk_packetOk (value: FspPacketLastOk_packetOk, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FspPacketLastOk_packetOk) { _cached_encoder_for_FspPacketLastOk_packetOk = function (value: FspPacketLastOk_packetOk, _elGetter: $.ASN1Encoder<FspPacketLastOk_packetOk>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_PacketIdentification(value.packetIdentification, $.BER),
        /* REQUIRED   */ _encode_Time(value.processingStopTime, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_FspPacketLastOk_packetOk(value, elGetter);
}


/* eslint-enable */
