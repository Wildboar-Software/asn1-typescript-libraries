/* eslint-disable */
import {
    INTEGER,
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PacketIdentificationList, _decode_PacketIdentificationList, _encode_PacketIdentificationList } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/PacketIdentificationList.ta.mjs";


function integerInRange (value: number | bigint, min: bigint, max: bigint): boolean {
    const n = typeof value === "bigint" ? value : BigInt(value);
    return n >= min && n <= max;
}

/**
 * @summary PacketRadiatedInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PacketRadiatedInfo ::= SEQUENCE
 * {  packetIdentificationList         PacketIdentificationList
 * ,  frameSequenceNumber              INTEGER (0 .. 255)
 * }
 * ```
 * 
 * @class
 */
export
class PacketRadiatedInfo {
    /**
     * @summary `packetIdentificationList`.
     * @public
     * @readonly
     */
    readonly packetIdentificationList: PacketIdentificationList;
    /**
     * @summary `frameSequenceNumber`.
     * @public
     * @readonly
     */
    readonly frameSequenceNumber: INTEGER;

    constructor (
        packetIdentificationList: PacketIdentificationList,
        frameSequenceNumber: INTEGER
    ) {
        if (!integerInRange(frameSequenceNumber, 0n, 255n)) {
            throw new ASN1OverflowError("PacketRadiatedInfo.frameSequenceNumber violates INTEGER (0..255)");
        }
        this.packetIdentificationList = packetIdentificationList;
        this.frameSequenceNumber = frameSequenceNumber;
    }

    /**
     * @summary Restructures an object into a PacketRadiatedInfo
     * @description
     * 
     * This takes an `object` and converts it to a `PacketRadiatedInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PacketRadiatedInfo`.
     * @returns {PacketRadiatedInfo}
     */
    public static _from_object (_o: { [_K in keyof (PacketRadiatedInfo)]: (PacketRadiatedInfo)[_K] }): PacketRadiatedInfo {
        return new PacketRadiatedInfo(_o.packetIdentificationList, _o.frameSequenceNumber);
    }


}

/**
 * @summary The Leading Root Component Types of PacketRadiatedInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PacketRadiatedInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("packetIdentificationList", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("frameSequenceNumber", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of PacketRadiatedInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PacketRadiatedInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PacketRadiatedInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PacketRadiatedInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PacketRadiatedInfo: $.ASN1Decoder<PacketRadiatedInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PacketRadiatedInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PacketRadiatedInfo (el: _Element): PacketRadiatedInfo {
    if (!_cached_decoder_for_PacketRadiatedInfo) { _cached_decoder_for_PacketRadiatedInfo = function (el: _Element): PacketRadiatedInfo {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("PacketRadiatedInfo contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "packetIdentificationList";
    sequence[1].name = "frameSequenceNumber";
    let packetIdentificationList!: PacketIdentificationList;
    let frameSequenceNumber!: INTEGER;
    packetIdentificationList = _decode_PacketIdentificationList(sequence[0]);
    frameSequenceNumber = $._decodeInteger(sequence[1]);
    return new PacketRadiatedInfo(
        packetIdentificationList,
        frameSequenceNumber,

    );
}; }
    return _cached_decoder_for_PacketRadiatedInfo(el);
}

let _cached_encoder_for_PacketRadiatedInfo: $.ASN1Encoder<PacketRadiatedInfo> | null = null;

/**
 * @summary Encodes a(n) PacketRadiatedInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PacketRadiatedInfo, encoded as an ASN.1 Element.
 */
export
function _encode_PacketRadiatedInfo (value: PacketRadiatedInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PacketRadiatedInfo) { _cached_encoder_for_PacketRadiatedInfo = function (value: PacketRadiatedInfo, _elGetter: $.ASN1Encoder<PacketRadiatedInfo>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_PacketIdentificationList(value.packetIdentificationList, $.BER),
        /* REQUIRED   */ $._encodeInteger(value.frameSequenceNumber, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_PacketRadiatedInfo(value, elGetter);
}


/* eslint-enable */
