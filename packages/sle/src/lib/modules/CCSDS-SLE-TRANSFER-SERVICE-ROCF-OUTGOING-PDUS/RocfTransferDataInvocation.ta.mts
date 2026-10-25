/* eslint-disable */
import {
    type INTEGER,
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type Credentials, _decode_Credentials, _encode_Credentials } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Credentials.ta.mjs";
import { type Time, _decode_Time, _encode_Time } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Time.ta.mjs";
import { type AntennaId, _decode_AntennaId, _encode_AntennaId } from "../CCSDS-SLE-TRANSFER-SERVICE-ROCF-STRUCTURES/AntennaId.ta.mjs";
import { type RocfTransferDataInvocation_privateAnnotation, _decode_RocfTransferDataInvocation_privateAnnotation, _encode_RocfTransferDataInvocation_privateAnnotation } from "../CCSDS-SLE-TRANSFER-SERVICE-ROCF-OUTGOING-PDUS/RocfTransferDataInvocation-privateAnnotation.ta.mjs";
import { type SpaceLinkDataUnit, _decode_SpaceLinkDataUnit, _encode_SpaceLinkDataUnit } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/SpaceLinkDataUnit.ta.mjs";



import { integerInRange } from "../../constraints.mjs";

/**
 * @summary RocfTransferDataInvocation
 * @description
 * 
 * Provider delivery of one operational control field extracted from a
 * telemetry frame of good frame quality. Unconfirmed, invoked only by the
 * provider, and valid only in state 3 (active). The OCF must meet the
 * ROCF-START delivery criteria. Online, the record is buffered (transfer
 * buffer, and for complete online the online OCF buffer first). Offline, it is
 * taken from the offline OCF buffer. The provider state stays unchanged.
 *
 * CCSDS 911.5-B-4, sections 2.4.1, 3.1.9, 3.6, and 1.6.1.9.4.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RocfTransferDataInvocation ::= SEQUENCE
 * {  invokerCredentials            Credentials
 * ,  earthReceiveTime              Time
 * ,  antennaId                     AntennaId
 * ,  dataLinkContinuity            INTEGER (-1 .. 16777215)
 * ,  privateAnnotation             CHOICE
 *    {  null                    [0]   NULL
 *    ,  notNull                 [1]   OCTET STRING (SIZE (1 .. 128))
 *    }
 * ,  data                          SpaceLinkDataUnit
 * }
 * ```
 * 
 * @class
 */
export
class RocfTransferDataInvocation {
    /**
     * @summary `invokerCredentials`.
     * @description
     * 
     * Credentials the user uses to authenticate this provider invocation. When
     * the agreed authentication level does not cover the invocation, the value
     * is unused. The octet layout is the bilaterally agreed algorithm, which
     * this specification leaves unspecified. CCSDS 911.5-B-4, sections 3.1.5
     * and 3.6.2.2.
     * @public
     * @readonly
     */
    readonly invokerCredentials: Credentials;
    /**
     * @summary `earthReceiveTime`.
     * @description
     * 
     * UTC time at which the leading edge of the first bit of the start sequence
     * immediately preceding this encoded frame was presented at the phase
     * center of the antenna that acquired the frame. The first bit of the frame
     * is the first bit following the Attached Sync Marker. The tag uses the
     * CCSDS Day Segmented time code with epoch 1958-01-01 and a 16-bit day
     * segment, at microsecond or picosecond resolution. The user is expected to
     * accept either resolution. Accuracy is one millisecond or better.
     * Punctured coding makes the number of symbols per information bit depend
     * on the puncture pattern; missions that use it account for the resulting
     * jitter relative to the start of the frame.
     *
     * CCSDS 911.5-B-4, sections 3.1.7 and 3.6.2.3.
     * @public
     * @readonly
     */
    readonly earthReceiveTime: Time;
    /**
     * @summary `antennaId`.
     * @description
     * 
     * Antenna of the SLE Complex that acquired the frame containing this OCF.
     * It identifies the physical point to which earthReceiveTime refers.
     * Management agrees the allowed values and their meaning. The value refers
     * to location data supplied outside this service.
     *
     * CCSDS 911.5-B-4, section 3.6.2.4.
     * @public
     * @readonly
     */
    readonly antennaId: AntennaId;
    /**
     * @summary `dataLinkContinuity`.
     * @description
     * 
     * How this frame follows the previous frame on the Master Channel or
     * Virtual Channel selected by ROCF-START. The value -1 means this is the
     * first frame after production started, or the selected channel is an AOS
     * or USLP Master Channel (those frames have no Master Channel frame
     * counter), or the selected channel is a USLP Virtual Channel with a
     * Truncated Transfer Frame Primary Header. Any other value is the count of
     * missing frames: for a TM Master Channel, (MCFCn - MCFCn-1 - 1) modulo
     * 256; for a TM Virtual Channel, (VCFCn - VCFCn-1 - 1) modulo 256; for an
     * AOS Virtual Channel, (VCFCn - VCFCn-1 - 1) modulo 16777216; for a USLP
     * Virtual Channel with a non-truncated header, (VCFCn - VCFCn-1 - 1) modulo
     * 2 raised to (VC Frame Count Length times 8). A zero count means the frame
     * was the immediate successor. When START delivers only a subset of the
     * channel's OCFs, a gap is indicated on the first OCF after a discontinuity
     * on the channel. On USLP the OCF may be present on some frames and absent
     * on others, so successive OCF frame counts can show a gap when every frame
     * was acquired. A TM gap of 256 frames or more is ambiguous under modulo
     * 256; ERT and the nominal frame rate can resolve it. The AOS count ignores
     * the Virtual Channel Frame Count Cycle field. Annex A limits this integer
     * to -1..16777215. Section 3.6.2.5.2 does not say how a larger USLP gap is
     * represented.
     *
     * CCSDS 911.5-B-4, section 3.6.2.5 and annex A2.7.
     * @public
     * @readonly
     */
    readonly dataLinkContinuity: INTEGER;
    /**
     * @summary `privateAnnotation`.
     * @description
     * 
     * Extra annotation for the frame. null means there is none. A non-null
     * value is 1 to 128 octets whose contents are a prior arrangement between
     * SLE Complex Management and SLE Utilization Management. This specification
     * does not define those contents.
     *
     * CCSDS 911.5-B-4, section 3.6.2.6.
     * @public
     * @readonly
     */
    readonly privateAnnotation: RocfTransferDataInvocation_privateAnnotation;
    /**
     * @summary `data`.
     * @description
     * 
     * The operational control field extracted from the telemetry frame. The OCF
     * is the frame OCF of a TM, AOS, or USLP Transfer Frame. The usual payload
     * is a Communications Link Control Word (control word type 0). Control word
     * type 1 is the setting used to obtain a Frame Security Report. This
     * specification does not define the octet layout of the OCF.
     *
     * CCSDS 911.5-B-4, sections 1.6.1.9.9, 2.8.3, 3.4.2.8, and 3.6.2.7.
     * @public
     * @readonly
     */
    readonly data: SpaceLinkDataUnit;

    constructor (
        invokerCredentials: Credentials,
        earthReceiveTime: Time,
        antennaId: AntennaId,
        dataLinkContinuity: INTEGER,
        privateAnnotation: RocfTransferDataInvocation_privateAnnotation,
        data: SpaceLinkDataUnit
    ) {
        if (!integerInRange(dataLinkContinuity, -1, 16777215)) {
            throw new ASN1OverflowError("RocfTransferDataInvocation.dataLinkContinuity violates INTEGER (-1..16777215)");
        }
        this.invokerCredentials = invokerCredentials;
        this.earthReceiveTime = earthReceiveTime;
        this.antennaId = antennaId;
        this.dataLinkContinuity = dataLinkContinuity;
        this.privateAnnotation = privateAnnotation;
        this.data = data;
    }

    /**
     * @summary Restructures an object into a RocfTransferDataInvocation
     * @description
     * 
     * This takes an `object` and converts it to a `RocfTransferDataInvocation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RocfTransferDataInvocation`.
     * @returns {RocfTransferDataInvocation}
     */
    public static _from_object (_o: { [_K in keyof (RocfTransferDataInvocation)]: (RocfTransferDataInvocation)[_K] }): RocfTransferDataInvocation {
        return new RocfTransferDataInvocation(_o.invokerCredentials, _o.earthReceiveTime, _o.antennaId, _o.dataLinkContinuity, _o.privateAnnotation, _o.data);
    }


}

/**
 * @summary The Leading Root Component Types of RocfTransferDataInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RocfTransferDataInvocation: $.ComponentSpec[] = [
    new $.ComponentSpec("invokerCredentials", false, $.hasAnyTag),
    new $.ComponentSpec("earthReceiveTime", false, $.hasAnyTag),
    new $.ComponentSpec("antennaId", false, $.hasAnyTag),
    new $.ComponentSpec("dataLinkContinuity", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("privateAnnotation", false, $.hasAnyTag),
    new $.ComponentSpec("data", false, $.hasTag(_TagClass.universal, 4))
];

/**
 * @summary The Trailing Root Component Types of RocfTransferDataInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RocfTransferDataInvocation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RocfTransferDataInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RocfTransferDataInvocation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RocfTransferDataInvocation: $.ASN1Decoder<RocfTransferDataInvocation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RocfTransferDataInvocation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RocfTransferDataInvocation (el: _Element): RocfTransferDataInvocation {
    if (!_cached_decoder_for_RocfTransferDataInvocation) { _cached_decoder_for_RocfTransferDataInvocation = function (el: _Element): RocfTransferDataInvocation {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 6) {
        throw new _ConstructionError("RocfTransferDataInvocation contained only " + sequence.length.toString() + " elements.");
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
    let privateAnnotation!: RocfTransferDataInvocation_privateAnnotation;
    let data!: SpaceLinkDataUnit;
    invokerCredentials = _decode_Credentials(sequence[0]);
    earthReceiveTime = _decode_Time(sequence[1]);
    antennaId = _decode_AntennaId(sequence[2]);
    dataLinkContinuity = $._decodeInteger(sequence[3]);
    privateAnnotation = _decode_RocfTransferDataInvocation_privateAnnotation(sequence[4]);
    data = _decode_SpaceLinkDataUnit(sequence[5]);
    return new RocfTransferDataInvocation(
        invokerCredentials,
        earthReceiveTime,
        antennaId,
        dataLinkContinuity,
        privateAnnotation,
        data,

    );
}; }
    return _cached_decoder_for_RocfTransferDataInvocation(el);
}

let _cached_encoder_for_RocfTransferDataInvocation: $.ASN1Encoder<RocfTransferDataInvocation> | null = null;

/**
 * @summary Encodes a(n) RocfTransferDataInvocation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RocfTransferDataInvocation, encoded as an ASN.1 Element.
 */
export
function _encode_RocfTransferDataInvocation (value: RocfTransferDataInvocation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RocfTransferDataInvocation) { _cached_encoder_for_RocfTransferDataInvocation = function (value: RocfTransferDataInvocation, _elGetter: $.ASN1Encoder<RocfTransferDataInvocation>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_Credentials(value.invokerCredentials, $.BER),
        /* REQUIRED   */ _encode_Time(value.earthReceiveTime, $.BER),
        /* REQUIRED   */ _encode_AntennaId(value.antennaId, $.BER),
        /* REQUIRED   */ $._encodeInteger(value.dataLinkContinuity, $.BER),
        /* REQUIRED   */ _encode_RocfTransferDataInvocation_privateAnnotation(value.privateAnnotation, $.BER),
        /* REQUIRED   */ _encode_SpaceLinkDataUnit(value.data, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_RocfTransferDataInvocation(value, elGetter);
}


/* eslint-enable */
