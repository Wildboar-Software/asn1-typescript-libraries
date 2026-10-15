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



import { integerInRange } from "../../constraints.mjs";

/**
 * @summary RafTransferDataInvocation
 * @description
 * 
 * Unconfirmed delivery of one telemetry frame from one space link physical
 * channel. A telemetry frame is a TM, AOS, or USLP Transfer Frame. Valid only
 * in state 3 (active), and invoked only by the provider. The provider state
 * stays unchanged. The underlying communications service is required to
 * transfer the invocation in sequence, completely, without duplication, and
 * with congestion and disruption indications.
 * 
 * CCSDS 911.1-B-5, sections 3.6, 2.1, 1.6.1.8.14, and 1.3.1.
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
     * @description
     * Information with which the user authenticates this invocation. When the
     * agreed level is `all`, every RAF invocation and return except
     * RAF-PEER-ABORT is authenticated; `bind` authenticates only RAF-BIND;
     * `none` leaves every invocation and return unauthenticated. When
     * this invocation is unauthenticated, the value should be `unused`.
     * CCSDS 911.1-B-5, sections
     * 3.6.2.2 and 3.1.5.
     * @public
     * @readonly
     */
    readonly invokerCredentials: Credentials;
    /**
     * @summary `earthReceiveTime`.
     * @description
     * UTC at the phase center of the antenna that acquired the frame. Section
     * 3.6.2.3 states two reference events: the leading edge of the first bit of
     * the Attached Sync Marker that immediately preceded this encoded or
     * uncoded frame, and the leading edge of the first bit of the start
     * sequence that immediately preceded this encoded frame. The book states
     * both and does not assign them to particular frame types.
     * 
     * The time uses the CCSDS Day Segmented time code (CCSDS 301.0-B-4) with
     * epoch 1958-01-01 and a 16-bit day segment, at microsecond or picosecond
     * resolution. The user is expected to accept either resolution. The
     * annotation is accurate to within one millisecond. Punctured coding makes
     * the symbol-to-bit relationship vary with the puncture pattern, which
     * jitters this time relative to the start of the frame.
     * 
     * CCSDS 911.1-B-5, sections 3.6.2.3 and 3.1.7, and annex C table C-2.
     * @public
     * @readonly
     */
    readonly earthReceiveTime: Time;
    /**
     * @summary `antennaId`.
     * @description
     * Which antenna of the SLE Complex acquired this frame. It identifies the
     * physical location used as the reference point for `earthReceiveTime`.
     * Allowable values and their interpretation are agreed by SLE Complex
     * Management and SLE Utilization Management. The value refers to location
     * information supplied outside this service.
     * 
     * CCSDS 911.1-B-5, section 3.6.2.4.
     * @public
     * @readonly
     */
    readonly antennaId: AntennaId;
    /**
     * @summary `dataLinkContinuity`.
     * @description
     * How this frame follows the previous frame on the space link selected by
     * RAF-START, as estimated by RAF production. Production forms the estimate
     * without evaluating Transfer Frame headers. `-1` means this is the first
     * frame after production starts. `0` means this frame is the direct
     * successor of the last frame acquired from the space link. A positive
     * value estimates how many frames were missed; `1` may be used when no
     * better estimate is available.
     * 
     * The requested frame quality can still make this frame skip frames that
     * were acquired and then withheld from this user.
     * 
     * CCSDS 911.1-B-5, section 3.6.2.5.
     * @public
     * @readonly
     */
    readonly dataLinkContinuity: INTEGER;
    /**
     * @summary `deliveredFrameQuality`.
     * @description
     * Result of Reed-Solomon or LDPC decoding, Frame Error Control Field
     * evaluation, or the USLP Frame Validation Check Procedure in CCSDS
     * 732.1-B-2 subsection 4.3.10.3. Subsection 4.3.10.3.4 c) is outside RAF
     * production. `undetermined` is delivered only when RAF-START requested
     * `allFrames`. The AOS Header Frame Error Control field is disregarded;
     * the annotation covers the complete Transfer Frame.
     * 
     * CCSDS 911.1-B-5, sections 3.6.2.6 and 2.4.2.
     * @public
     * @readonly
     */
    readonly deliveredFrameQuality: FrameQuality;
    /**
     * @summary `privateAnnotation`.
     * @description
     * Extra annotation associated with this frame, or null when there is none.
     * A non-null value requires a prior arrangement between SLE Complex
     * Management and SLE Utilization Management on its contents and
     * interpretation. The book does not define those contents.
     * 
     * CCSDS 911.1-B-5, section 3.6.2.7.
     * @public
     * @readonly
     */
    readonly privateAnnotation: RafTransferDataInvocation_privateAnnotation;
    /**
     * @summary `data`.
     * @description
     * The telemetry frame acquired for this user. The octet string starts at
     * the first bit after the Attached Sync Marker.
     * 
     * When quality is `good`, the value is a TM, AOS, or USLP Transfer Frame
     * with coding overhead removed: Reed-Solomon check symbols; LDPC parity
     * bits and trailing fill bits; or, for BCH, the Error Control octet of each
     * codeword and any fill bits in the last codeword.
     * 
     * When quality is `erred` and the frame is neither Reed-Solomon nor BCH
     * encoded (convolutional, turbo, LDPC, CCSDS 131.2-B-2, CCSDS 131.3-B-2, or
     * uncoded), the value is the decoding result, or the frame as acquired when
     * it is uncoded, and has the same length as a `good` frame.
     * 
     * When quality is `erred` and the frame is Reed-Solomon encoded, the value
     * is the unmodified candidate codeblock presented at the Reed-Solomon
     * decoder input. When quality is `erred` and the frame is BCH encoded, the
     * value is the decoding result with fill bits still present, so the length
     * can differ from a successfully decoded frame.
     * 
     * When quality is `undetermined`, the value is a candidate identified
     * during frame synchronization whose coding is unknown or unsupported. Its
     * length is implementation dependent and may be a frame or codeblock in the
     * symbol or bit domain.
     * 
     * Space Data Link Security protection of parts of the frame is transparent
     * here, and Security Header and Security Trailer processing is left to
     * applications that consume the frame. Section 3.6.2.8 note 3 names the RCF
     * service in that statement.
     * 
     * CCSDS 911.1-B-5, section 3.6.2.8 and 2.4.1.
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
        if (!integerInRange(dataLinkContinuity, -1, 16777215)) {
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
