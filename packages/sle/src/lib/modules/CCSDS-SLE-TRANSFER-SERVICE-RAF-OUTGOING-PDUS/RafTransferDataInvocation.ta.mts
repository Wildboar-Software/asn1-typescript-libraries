/* eslint-disable */
import {
    INTEGER,
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Credentials, _decode_Credentials, _encode_Credentials } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Credentials.ta.mjs";
import { Time, _decode_Time, _encode_Time } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Time.ta.mjs";
import { AntennaId, _decode_AntennaId, _encode_AntennaId } from "../CCSDS-SLE-TRANSFER-SERVICE-RAF-STRUCTURES/AntennaId.ta.mjs";
import { FrameQuality, _decode_FrameQuality, _encode_FrameQuality } from "../CCSDS-SLE-TRANSFER-SERVICE-RAF-STRUCTURES/FrameQuality.ta.mjs";
import { RafTransferDataInvocation_privateAnnotation, _decode_RafTransferDataInvocation_privateAnnotation, _encode_RafTransferDataInvocation_privateAnnotation } from "../CCSDS-SLE-TRANSFER-SERVICE-RAF-OUTGOING-PDUS/RafTransferDataInvocation-privateAnnotation.ta.mjs";
import { SpaceLinkDataUnit, _decode_SpaceLinkDataUnit, _encode_SpaceLinkDataUnit } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/SpaceLinkDataUnit.ta.mjs";


function integerInRange (value: number | bigint, min: bigint, max: bigint): boolean {
    const n = typeof value === "bigint" ? value : BigInt(value);
    return n >= min && n <= max;
}

/**
 * @summary RafTransferDataInvocation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RafTransferDataInvocation ::= SEQUENCE
 * {   invokerCredentials              Credentials
 * ,   earthReceiveTime                Time
 * ,   antennaId                       AntennaId
 * ,   dataLinkContinuity              INTEGER (-1 .. 16777215)
 * ,   deliveredFrameQuality           FrameQuality
 * ,   privateAnnotation               CHOICE
 *     {   null                            [0] NULL
 *     ,   notNull                         [1] OCTET STRING (SIZE (1 .. 128))
 *     }
 * ,   data                           SpaceLinkDataUnit
 * }
 * ```
 * 
 * @class
 */
export
class RafTransferDataInvocation {
    /**
     * @summary `invokerCredentials`.
     * @public
     * @readonly
     */
    readonly invokerCredentials: Credentials;
    /**
     * @summary `earthReceiveTime`.
     * @public
     * @readonly
     */
    readonly earthReceiveTime: Time;
    /**
     * @summary `antennaId`.
     * @public
     * @readonly
     */
    readonly antennaId: AntennaId;
    /**
     * @summary `dataLinkContinuity`.
     * @public
     * @readonly
     */
    readonly dataLinkContinuity: INTEGER;
    /**
     * @summary `deliveredFrameQuality`.
     * @public
     * @readonly
     */
    readonly deliveredFrameQuality: FrameQuality;
    /**
     * @summary `privateAnnotation`.
     * @public
     * @readonly
     */
    readonly privateAnnotation: RafTransferDataInvocation_privateAnnotation;
    /**
     * @summary `data`.
     * @public
     * @readonly
     */
    readonly data: SpaceLinkDataUnit;

    constructor (
        invokerCredentials: Credentials,
        earthReceiveTime: Time,
        antennaId: AntennaId,
        dataLinkContinuity: INTEGER,
        deliveredFrameQuality: FrameQuality,
        privateAnnotation: RafTransferDataInvocation_privateAnnotation,
        data: SpaceLinkDataUnit
    ) {
        if (!integerInRange(dataLinkContinuity, -1n, 16777215n)) {
            throw new ASN1OverflowError("RafTransferDataInvocation.dataLinkContinuity violates INTEGER (-1..16777215)");
        }
        this.invokerCredentials = invokerCredentials;
        this.earthReceiveTime = earthReceiveTime;
        this.antennaId = antennaId;
        this.dataLinkContinuity = dataLinkContinuity;
        this.deliveredFrameQuality = deliveredFrameQuality;
        this.privateAnnotation = privateAnnotation;
        this.data = data;
    }

    /**
     * @summary Restructures an object into a RafTransferDataInvocation
     * @description
     * 
     * This takes an `object` and converts it to a `RafTransferDataInvocation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RafTransferDataInvocation`.
     * @returns {RafTransferDataInvocation}
     */
    public static _from_object (_o: { [_K in keyof (RafTransferDataInvocation)]: (RafTransferDataInvocation)[_K] }): RafTransferDataInvocation {
        return new RafTransferDataInvocation(_o.invokerCredentials, _o.earthReceiveTime, _o.antennaId, _o.dataLinkContinuity, _o.deliveredFrameQuality, _o.privateAnnotation, _o.data);
    }


}

/**
 * @summary The Leading Root Component Types of RafTransferDataInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RafTransferDataInvocation: $.ComponentSpec[] = [
    new $.ComponentSpec("invokerCredentials", false, $.hasAnyTag),
    new $.ComponentSpec("earthReceiveTime", false, $.hasAnyTag),
    new $.ComponentSpec("antennaId", false, $.hasAnyTag),
    new $.ComponentSpec("dataLinkContinuity", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("deliveredFrameQuality", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("privateAnnotation", false, $.hasAnyTag),
    new $.ComponentSpec("data", false, $.hasTag(_TagClass.universal, 4))
];

/**
 * @summary The Trailing Root Component Types of RafTransferDataInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RafTransferDataInvocation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RafTransferDataInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RafTransferDataInvocation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RafTransferDataInvocation: $.ASN1Decoder<RafTransferDataInvocation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RafTransferDataInvocation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RafTransferDataInvocation (el: _Element): RafTransferDataInvocation {
    if (!_cached_decoder_for_RafTransferDataInvocation) { _cached_decoder_for_RafTransferDataInvocation = function (el: _Element): RafTransferDataInvocation {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 7) {
        throw new _ConstructionError("RafTransferDataInvocation contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "invokerCredentials";
    sequence[1].name = "earthReceiveTime";
    sequence[2].name = "antennaId";
    sequence[3].name = "dataLinkContinuity";
    sequence[4].name = "deliveredFrameQuality";
    sequence[5].name = "privateAnnotation";
    sequence[6].name = "data";
    let invokerCredentials!: Credentials;
    let earthReceiveTime!: Time;
    let antennaId!: AntennaId;
    let dataLinkContinuity!: INTEGER;
    let deliveredFrameQuality!: FrameQuality;
    let privateAnnotation!: RafTransferDataInvocation_privateAnnotation;
    let data!: SpaceLinkDataUnit;
    invokerCredentials = _decode_Credentials(sequence[0]);
    earthReceiveTime = _decode_Time(sequence[1]);
    antennaId = _decode_AntennaId(sequence[2]);
    dataLinkContinuity = $._decodeInteger(sequence[3]);
    deliveredFrameQuality = _decode_FrameQuality(sequence[4]);
    privateAnnotation = _decode_RafTransferDataInvocation_privateAnnotation(sequence[5]);
    data = _decode_SpaceLinkDataUnit(sequence[6]);
    return new RafTransferDataInvocation(
        invokerCredentials,
        earthReceiveTime,
        antennaId,
        dataLinkContinuity,
        deliveredFrameQuality,
        privateAnnotation,
        data,

    );
}; }
    return _cached_decoder_for_RafTransferDataInvocation(el);
}

let _cached_encoder_for_RafTransferDataInvocation: $.ASN1Encoder<RafTransferDataInvocation> | null = null;

/**
 * @summary Encodes a(n) RafTransferDataInvocation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RafTransferDataInvocation, encoded as an ASN.1 Element.
 */
export
function _encode_RafTransferDataInvocation (value: RafTransferDataInvocation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RafTransferDataInvocation) { _cached_encoder_for_RafTransferDataInvocation = function (value: RafTransferDataInvocation, _elGetter: $.ASN1Encoder<RafTransferDataInvocation>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_Credentials(value.invokerCredentials, $.BER),
        /* REQUIRED   */ _encode_Time(value.earthReceiveTime, $.BER),
        /* REQUIRED   */ _encode_AntennaId(value.antennaId, $.BER),
        /* REQUIRED   */ $._encodeInteger(value.dataLinkContinuity, $.BER),
        /* REQUIRED   */ _encode_FrameQuality(value.deliveredFrameQuality, $.BER),
        /* REQUIRED   */ _encode_RafTransferDataInvocation_privateAnnotation(value.privateAnnotation, $.BER),
        /* REQUIRED   */ _encode_SpaceLinkDataUnit(value.data, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_RafTransferDataInvocation(value, elGetter);
}


/* eslint-enable */
