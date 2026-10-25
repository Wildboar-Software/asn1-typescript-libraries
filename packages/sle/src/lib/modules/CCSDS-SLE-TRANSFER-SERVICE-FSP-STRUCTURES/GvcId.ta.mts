/* eslint-disable */
import {
    type INTEGER,
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type GvcId_vcId, _decode_GvcId_vcId, _encode_GvcId_vcId } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/GvcId-vcId.ta.mjs";



import { integerInRange } from "../../constraints.mjs";

/**
 * @summary GvcId
 * @description
 * 
 * Global virtual-channel identification of a Master Channel or a Virtual
 * Channel that can carry the CLCW used for forward-link RF and bit-lock status.
 * Annex A says PTM and AOS frames are supported. For AOS the spacecraft
 * identifier is 0 to 255 (8 bits). For PTM it is 0 to 1023 (10 bits). The
 * permissible spacecraft-identifier range depends on the version number. This
 * issue does not expand the abbreviations PTM and AOS.
 * 
 * CCSDS 912.3-B-3, annex A2.5 and section 3.10.2.5 (table 3-11).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GvcId ::= SEQUENCE
 * {  spacecraftId      INTEGER (0 .. 1023)
 * ,  versionNumber     INTEGER (0 .. 3)
 * ,  vcId              CHOICE
 *    {  masterChannel           [0]   NULL
 *       ,  virtualChannel       [1]   VcId
 *    }
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
     * Spacecraft identifier. Annex A allows 0 through 1023 and says the
     * permissible range depends on `versionNumber`: 0 to 255 for AOS and 0 to
     * 1023 for PTM.
     * 
     * CCSDS 912.3-B-3, annex A2.5.
     * @public
     * @readonly
     */
    readonly spacecraftId: INTEGER;
    /**
     * @summary `versionNumber`.
     * @description
     * Transfer-frame version that selects the spacecraft-identifier width.
     * Annex A allows 0 through 3 and says AOS uses an 8-bit spacecraft
     * identifier and PTM a 10-bit identifier. This issue does not state which
     * version number is AOS or PTM.
     * 
     * CCSDS 912.3-B-3, annex A2.5.
     * @public
     * @readonly
     */
    readonly versionNumber: INTEGER;
    /**
     * @summary `vcId`.
     * @description
     * Master Channel, or a Virtual Channel on that spacecraft and version.
     * Table 3-11 says the CLCW global VCID is the Master or Virtual Channel
     * that carries the CLCW used for forward-link lock status.
     * 
     * CCSDS 912.3-B-3, annex A2.5 and section 3.10.2.5 (table 3-11).
     * @public
     * @readonly
     */
    readonly vcId: GvcId_vcId;

    constructor (
        spacecraftId: INTEGER,
        versionNumber: INTEGER,
        vcId: GvcId_vcId
    ) {
        if (!integerInRange(spacecraftId, 0, 1023)) {
            throw new ASN1OverflowError("GvcId.spacecraftId violates INTEGER (0..1023)");
        }
        if (!integerInRange(versionNumber, 0, 3)) {
            throw new ASN1OverflowError("GvcId.versionNumber violates INTEGER (0..3)");
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
