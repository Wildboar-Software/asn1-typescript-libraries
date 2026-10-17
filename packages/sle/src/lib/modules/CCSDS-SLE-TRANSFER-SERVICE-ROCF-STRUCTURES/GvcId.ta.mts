/* eslint-disable */
import {
    INTEGER,
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1OverflowError,
    ASN1Error
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { GvcId_vcId, _decode_GvcId_vcId, _encode_GvcId_vcId } from "../CCSDS-SLE-TRANSFER-SERVICE-ROCF-STRUCTURES/GvcId-vcId.ta.mjs";




import { integerInRange, integerIsOneOf } from "../../constraints.mjs";

/**
 * @summary GvcId
 * @description
 * 
 * Global virtual channel identifier of the telemetry Master Channel or Virtual
 * Channel that supplies OCFs. It carries the transfer frame version, the
 * spacecraft identifier, and either the Master Channel or one Virtual Channel.
 * SCID and VCID are defined by the version: TM in reference [3], AOS in
 * reference [6], USLP in reference [10]. The physical channel is the RAF data
 * channel of the service package. At publication the valid version numbers
 * were binary 00 (TM version 1), binary 01 (AOS version 2), and binary 1100
 * (USLP version 4).
 *
 * CCSDS 911.5-B-4, sections 1.6.1.9.8, 1.6.1.9.20, and 3.4.2.7.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GvcId ::= SEQUENCE
 * {  spacecraftId      INTEGER (0 .. 65535)
 * -- Value range for TM Transfer Frames: (0 .. 1023)
 * -- Value range for AOS Transfer Frames: (0 .. 255)
 * -- Value range for USLP Transfer Frames: (0 .. 65535)
 * ,  versionNumber     INTEGER (0 | 1 | 12)
 * -- Value for TM (Version 1) Transfer Frames: 0 ('00'B)
 * -- Value for AOS (Version 2) Transfer Frames: 1 ('01'B)
 * -- Value for USLP (Version 4) Transfer Frames: 12 ('1100'B)
 * ,   vcId             CHOICE
 *     {  masterChannel          [0]   NULL
 *     ,  virtualChannel         [1]   VcId
 *     }
 * }
 * ```
 * 
 * @class
 */
export
class GvcId {
    /**
     * @summary `spacecraftId`.
     * @description
     * 
     * Spacecraft identifier of the Master Channel. It must be a CCSDS SCID for
     * the transfer frame version. The annex A comment limits TM to 0..1023, AOS
     * to 0..255, and USLP to 0..65535. The INTEGER itself allows 0..65535.
     *
     * CCSDS 911.5-B-4, section 3.4.2.7.3 and annex A2.5.
     * @public
     * @readonly
     */
    readonly spacecraftId: INTEGER;
    /**
     * @summary `versionNumber`.
     * @description
     * 
     * Transfer Frame Version Number. 0 is TM version 1 (binary 00). 1 is AOS
     * version 2 (binary 01). 12 is USLP version 4 (binary 1100). Section
     * 3.4.2.7.2 requires a valid CCSDS TFVN and, at publication, lists those
     * three.
     *
     * CCSDS 911.5-B-4, sections 1.6.1.9.18 and 3.4.2.7.2.
     * @public
     * @readonly
     */
    readonly versionNumber: INTEGER;
    /**
     * @summary `vcId`.
     * @description
     * 
     * masterChannel selects the Master Channel identified by the version and
     * spacecraft identifier. That is the VCID value 'any' in section 3.4.2.7.4.
     * virtualChannel selects that Virtual Channel.
     *
     * CCSDS 911.5-B-4, section 3.4.2.7.4.
     * @public
     * @readonly
     */
    readonly vcId: GvcId_vcId;

    constructor (
        spacecraftId: INTEGER,
        versionNumber: INTEGER,
        vcId: GvcId_vcId
    ) {
        if (!integerInRange(spacecraftId, 0, 65535)) {
            throw new ASN1OverflowError("GvcId.spacecraftId violates INTEGER (0..65535)");
        }
        if (!integerIsOneOf(versionNumber, [0n, 1n, 12n])) {
            throw new ASN1Error("GvcId.versionNumber violates INTEGER (0 | 1 | 12)");
        }
        this.spacecraftId = spacecraftId;
        this.versionNumber = versionNumber;
        this.vcId = vcId;
    }

    /**
     * @summary Restructures an object into a GvcId
     * @description
     * 
     * This takes an `object` and converts it to a `GvcId`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GvcId`.
     * @returns {GvcId}
     */
    public static _from_object (_o: { [_K in keyof (GvcId)]: (GvcId)[_K] }): GvcId {
        return new GvcId(_o.spacecraftId, _o.versionNumber, _o.vcId);
    }


}

/**
 * @summary The Leading Root Component Types of GvcId
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GvcId: $.ComponentSpec[] = [
    new $.ComponentSpec("spacecraftId", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("versionNumber", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("vcId", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of GvcId
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GvcId: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GvcId
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GvcId: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GvcId: $.ASN1Decoder<GvcId> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GvcId
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GvcId (el: _Element): GvcId {
    if (!_cached_decoder_for_GvcId) { _cached_decoder_for_GvcId = function (el: _Element): GvcId {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("GvcId contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "spacecraftId";
    sequence[1].name = "versionNumber";
    sequence[2].name = "vcId";
    let spacecraftId!: INTEGER;
    let versionNumber!: INTEGER;
    let vcId!: GvcId_vcId;
    spacecraftId = $._decodeInteger(sequence[0]);
    versionNumber = $._decodeInteger(sequence[1]);
    vcId = _decode_GvcId_vcId(sequence[2]);
    return new GvcId(
        spacecraftId,
        versionNumber,
        vcId,

    );
}; }
    return _cached_decoder_for_GvcId(el);
}

let _cached_encoder_for_GvcId: $.ASN1Encoder<GvcId> | null = null;

/**
 * @summary Encodes a(n) GvcId into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GvcId, encoded as an ASN.1 Element.
 */
export
function _encode_GvcId (value: GvcId, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GvcId) { _cached_encoder_for_GvcId = function (value: GvcId, _elGetter: $.ASN1Encoder<GvcId>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encodeInteger(value.spacecraftId, $.BER),
        /* REQUIRED   */ $._encodeInteger(value.versionNumber, $.BER),
        /* REQUIRED   */ _encode_GvcId_vcId(value.vcId, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_GvcId(value, elGetter);
}


/* eslint-enable */
