/* eslint-disable */
import {
    type INTEGER,
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type Credentials, _decode_Credentials, _encode_Credentials } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Credentials.ta.mjs";
import { type Time, _decode_Time, _encode_Time } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Time.ta.mjs";
import { type AntennaId, _decode_AntennaId, _encode_AntennaId } from "../CCSDS-SLE-TRANSFER-SERVICE-RCF-STRUCTURES/AntennaId.ta.mjs";
import { type RcfTransferDataInvocation_privateAnnotation, _decode_RcfTransferDataInvocation_privateAnnotation, _encode_RcfTransferDataInvocation_privateAnnotation } from "../CCSDS-SLE-TRANSFER-SERVICE-RCF-OUTGOING-PDUS/RcfTransferDataInvocation-privateAnnotation.ta.mjs";
import { type SpaceLinkDataUnit, _decode_SpaceLinkDataUnit, _encode_SpaceLinkDataUnit } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/SpaceLinkDataUnit.ta.mjs";



import { integerInRange } from "../../constraints.mjs";

/**
 * @summary RcfTransferDataInvocation
 * @description
 *
 * The provider delivers one telemetry frame to the user. Unconfirmed, legal
 * only in state 3 (active), and invoked only by the provider. Frames go out in
 * the order they were received on the space link. The provider state stays
 * active. Production admits a RAF frame annotated good: a frame whose
 * Reed-Solomon or LDPC codewords are all valid, or, when neither of those
 * codes is used, whose Frame Error Control Field decodes successfully. A USLP
 * frame is good when it passes the USLP Frame Validation Check Procedure,
 * excluding the checks in subsection 4.3.10.3.4 c) of CCSDS 732.1-B-2, which
 * this service leaves out of production.
 *
 * CCSDS 911.2-B-4, sections 2.4.2 and 3.6.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RcfTransferDataInvocation ::= SEQUENCE
 * {   invokerCredentials              Credentials
 * ,   earthReceiveTime                Time
 * ,   antennaId                       AntennaId
 * ,   dataLinkContinuity              INTEGER (-1 .. 16777215)
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
class RcfTransferDataInvocation {
    /**
     * @summary `invokerCredentials`.
     * @description
     *
     * Credentials that let the user authenticate this invocation when the
     * agreed level is 'all'. When the level is 'bind' or 'none', the value
     * should be 'unused'.
     *
     * CCSDS 911.2-B-4, sections 3.6.2.2 and 3.1.5.
     * @public
     * @readonly
     */
    readonly invokerCredentials: Credentials;
    /**
     * @summary `earthReceiveTime`.
     * @description
     *
     * UTC time at which the leading edge of the first bit of the start sequence
     * immediately preceding this encoded frame was at the phase center of the
     * antenna that acquired the frame. That first bit is the first bit after
     * the Attached Sync Marker. With punctured coding the annotation jitters
     * relative to the start of the frame, and the mission accounts for that
     * jitter. The time uses the CCSDS Day Segmented code, epoch 1958-01-01,
     * 16-bit day segment, at microsecond or picosecond resolution. The user
     * accepts whichever resolution the provider sends. Accuracy is one
     * millisecond or better.
     *
     * CCSDS 911.2-B-4, sections 3.6.2.3 and 3.1.7.
     * @public
     * @readonly
     */
    readonly earthReceiveTime: Time;
    /**
     * @summary `antennaId`.
     * @description
     *
     * Antenna of the SLE Complex that acquired the frame, and the reference
     * point for the Earth Receive Time. The allowable values and their
     * interpretation are agreed by SLE Complex Management and SLE Utilization
     * Management. The value refers to location information supplied outside
     * this service.
     *
     * CCSDS 911.2-B-4, section 3.6.2.4.
     * @public
     * @readonly
     */
    readonly antennaId: AntennaId;
    /**
     * @summary `dataLinkContinuity`.
     * @description
     *
     * How many frames are missing between this frame and the previous frame
     * production delivered on the Master Channel or Virtual Channel selected by
     * RCF-START. Zero means this frame is the direct successor. Minus one means
     * continuity is not reported: this is the first frame after production
     * starts; or the selected channel is a Master Channel of AOS or USLP
     * Transfer Frames, which have no Master Channel frame counter; or the
     * selected channel is a USLP Virtual Channel with a truncated Transfer
     * Frame Primary Header.
     *
     * Otherwise the value is the frame-counter gap. For a TM Master Channel it
     * is (MCFCn − MCFCn−1 − 1) modulo 256. For a TM Virtual Channel it is
     * (VCFCn − VCFCn−1 − 1) modulo 256. For an AOS Virtual Channel it is (VCFCn
     * − VCFCn−1 − 1) modulo 16777216. For a USLP Virtual Channel with a
     * non-truncated header it is (VCFCn − VCFCn−1 − 1) modulo 2 raised to (VC
     * Frame Count Length times 8). A TM gap of 256 frames or more is ambiguous
     * under modulo 256; the Earth Receive Time and the nominal frame rate can
     * usually resolve it. The AOS gap ignores the Virtual Channel Frame Count
     * Cycle field.
     *
     * Annex A limits this integer to −1 .. 16777215. Section 3.6.2.5.2 does not
     * limit the USLP VC Frame Count Length, so a length above 3 octets yields a
     * modulo larger than that upper bound.
     *
     * CCSDS 911.2-B-4, section 3.6.2.5.
     * @public
     * @readonly
     */
    readonly dataLinkContinuity: INTEGER;
    /**
     * @summary `privateAnnotation`.
     * @description
     *
     * Extra annotation associated with this frame. Null means there is none. A
     * non-null value is interpreted under a prior arrangement between SLE
     * Complex Management and SLE Utilization Management. Section 3.6.2.6 does
     * not define the octet contents.
     *
     * CCSDS 911.2-B-4, section 3.6.2.6.
     * @public
     * @readonly
     */
    readonly privateAnnotation: RcfTransferDataInvocation_privateAnnotation;
    /**
     * @summary `data`.
     * @description
     *
     * The telemetry frame taken from the RAF data channel: a TM, AOS, or USLP
     * Transfer Frame. Reed-Solomon check symbols are removed. LDPC parity bits
     * and trailing fill bits are removed. For BCH, the Error Control octet of
     * each codeword is removed, and fill bits in the last BCH codeword are
     * removed. The Attached Sync Marker is omitted. Space Data Link Security
     * protection, when present, is left in the frame for the application that
     * consumes it.
     *
     * CCSDS 911.2-B-4, section 3.6.2.7.
     * @public
     * @readonly
     */
    readonly data: SpaceLinkDataUnit;

    constructor (
        invokerCredentials: Credentials,
        earthReceiveTime: Time,
        antennaId: AntennaId,
        dataLinkContinuity: INTEGER,
        privateAnnotation: RcfTransferDataInvocation_privateAnnotation,
        data: SpaceLinkDataUnit
    ) {
        if (!integerInRange(dataLinkContinuity, -1, 16777215)) {
            throw new ASN1OverflowError("RcfTransferDataInvocation.dataLinkContinuity violates INTEGER (-1..16777215)");
        }
        this.invokerCredentials = invokerCredentials;
        this.earthReceiveTime = earthReceiveTime;
        this.antennaId = antennaId;
        this.dataLinkContinuity = dataLinkContinuity;
        this.privateAnnotation = privateAnnotation;
        this.data = data;
    }

    /**
     * @summary Restructures an object into a RcfTransferDataInvocation
     * @description
     * 
     * This takes an `object` and converts it to a `RcfTransferDataInvocation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RcfTransferDataInvocation`.
     * @returns {RcfTransferDataInvocation}
     */
    public static _from_object (_o: { [_K in keyof (RcfTransferDataInvocation)]: (RcfTransferDataInvocation)[_K] }): RcfTransferDataInvocation {
        return new RcfTransferDataInvocation(_o.invokerCredentials, _o.earthReceiveTime, _o.antennaId, _o.dataLinkContinuity, _o.privateAnnotation, _o.data);
    }


}

/**
 * @summary The Leading Root Component Types of RcfTransferDataInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading
 * root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RcfTransferDataInvocation: $.ComponentSpec[] = [
    new $.ComponentSpec("invokerCredentials", false, $.hasAnyTag),
    new $.ComponentSpec("earthReceiveTime", false, $.hasAnyTag),
    new $.ComponentSpec("antennaId", false, $.hasAnyTag),
    new $.ComponentSpec("dataLinkContinuity", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("privateAnnotation", false, $.hasAnyTag),
    new $.ComponentSpec("data", false, $.hasTag(_TagClass.universal, 4))
];

/**
 * @summary The Trailing Root Component Types of RcfTransferDataInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing
 * root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RcfTransferDataInvocation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RcfTransferDataInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension
 * addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RcfTransferDataInvocation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RcfTransferDataInvocation: $.ASN1Decoder<RcfTransferDataInvocation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RcfTransferDataInvocation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RcfTransferDataInvocation (el: _Element): RcfTransferDataInvocation {
    if (!_cached_decoder_for_RcfTransferDataInvocation) { _cached_decoder_for_RcfTransferDataInvocation = function (el: _Element): RcfTransferDataInvocation {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 6) {
        throw new _ConstructionError("RcfTransferDataInvocation contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "invokerCredentials";
    sequence[1].name = "earthReceiveTime";
    sequence[2].name = "antennaId";
    sequence[3].name = "dataLinkContinuity";
    sequence[4].name = "privateAnnotation";
    sequence[5].name = "data";
    let invokerCredentials!: Credentials;
    let earthReceiveTime!: Time;
    let antennaId!: AntennaId;
    let dataLinkContinuity!: INTEGER;
    let privateAnnotation!: RcfTransferDataInvocation_privateAnnotation;
    let data!: SpaceLinkDataUnit;
    invokerCredentials = _decode_Credentials(sequence[0]);
    earthReceiveTime = _decode_Time(sequence[1]);
    antennaId = _decode_AntennaId(sequence[2]);
    dataLinkContinuity = $._decodeInteger(sequence[3]);
    privateAnnotation = _decode_RcfTransferDataInvocation_privateAnnotation(sequence[4]);
    data = _decode_SpaceLinkDataUnit(sequence[5]);
    return new RcfTransferDataInvocation(
        invokerCredentials,
        earthReceiveTime,
        antennaId,
        dataLinkContinuity,
        privateAnnotation,
        data,

    );
}; }
    return _cached_decoder_for_RcfTransferDataInvocation(el);
}

let _cached_encoder_for_RcfTransferDataInvocation: $.ASN1Encoder<RcfTransferDataInvocation> | null = null;

/**
 * @summary Encodes a(n) RcfTransferDataInvocation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RcfTransferDataInvocation, encoded as an ASN.1 Element.
 */
export
function _encode_RcfTransferDataInvocation (value: RcfTransferDataInvocation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RcfTransferDataInvocation) { _cached_encoder_for_RcfTransferDataInvocation = function (value: RcfTransferDataInvocation, _elGetter: $.ASN1Encoder<RcfTransferDataInvocation>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_Credentials(value.invokerCredentials, $.BER),
        /* REQUIRED   */ _encode_Time(value.earthReceiveTime, $.BER),
        /* REQUIRED   */ _encode_AntennaId(value.antennaId, $.BER),
        /* REQUIRED   */ $._encodeInteger(value.dataLinkContinuity, $.BER),
        /* REQUIRED   */ _encode_RcfTransferDataInvocation_privateAnnotation(value.privateAnnotation, $.BER),
        /* REQUIRED   */ _encode_SpaceLinkDataUnit(value.data, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_RcfTransferDataInvocation(value, elGetter);
}


/* eslint-enable */
