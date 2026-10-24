/* eslint-disable */
import {
    type BIT_STRING,
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TLIIdType, _decode_TLIIdType, _encode_TLIIdType } from "../EN301040/TLIIdType.ta.mjs";
// export { TLIIdType, _decode_TLIIdType, _encode_TLIIdType } from "../EN301040/TLIIdType.ta.mjs";


/**
 * @summary TTRAFFICind
 * @description
 * 
 * `T_TRAFFIC_ind` carries one TETRA air-interface traffic packet of the target
 * to the mediation function. Circuit mode only. No response is expected. The
 * flow is carried in the body of a CC-Record across HI3. Packets are discrete
 * and may be TETRA-encoded speech.
 *
 * Clause 4.3.3 requires real-time content as a verbatim bit stream:
 * air-interface encryption, scrambling, and channel coding are removed,
 * application encryption is removed where the keys and algorithms are
 * available, and the SwMI does not transcode speech. Clause 6.7 sends the
 * target's native TETRA content and each co-target's content on separate links.
 * Clause 4.3.4 requires content of calls the target originates or receives, of
 * multi-party calls in which the target is believed to be taking part, and of
 * broadcast calls to a population of which the target is believed to be a
 * member.
 *
 * Annex E requires ITU-T Recommendation X.680 and the Basic Encoding Rules
 * (ITU-T Recommendation X.690), plus the data-definition rules in annex D of
 * TS 101 671. The module has no extension markers; interceptVersion in the
 * module object identifier is incremented when the published module changes.
 * Clause 1 leaves encoding towards the LEMF to the handover interface that is
 * adopted.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 5.2.2.2.3, clause 6.7.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TTRAFFICind ::= SEQUENCE {
 *     tLIInstanceid                    TLIIdType,
 *     trafficPacket                    BIT STRING
 * }
 * ```
 * 
 * @class
 */
export
class TTRAFFICind {
    /**
     * @summary `tLIInstanceid`.
     * @description
     *
     * 16-bit interception tag. It identifies the LEA, the target, the network
     * operator or service provider, and the warrant reference. It is allocated
     * in `LIACTIVATEconf` when activation succeeds and then copied onto later
     * flows so those flows correlate with that provision (clause 4.3.2,
     * clause 6.1). One LI interface instance serves one target (clause 4.7).
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 5.2.2.2.3.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     *
     * @public
     * @readonly
     */
    readonly tLIInstanceid: TLIIdType;
    /**
     * @summary `trafficPacket`.
     * @description
     *
     * One circuit-mode air-interface traffic packet from the target, in native
     * TETRA form, which may be TETRA speech.
     * `TARGETCOMMSMONITORind.targetcommsid` identifies the logical circuit.
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 5.2.2.2.3, clause 4.3.3.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     *
     * @public
     * @readonly
     */
    readonly trafficPacket: BIT_STRING;

    constructor (
        tLIInstanceid: TLIIdType,
        trafficPacket: BIT_STRING
    ) {
        this.tLIInstanceid = tLIInstanceid;
        this.trafficPacket = trafficPacket;
    }

    /**
     * @summary Restructures an object into a TTRAFFICind
     * @description
     * 
     * This takes an `object` and converts it to a `TTRAFFICind`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TTRAFFICind`.
     * @returns {TTRAFFICind}
     */
    public static _from_object (_o: { [_K in keyof (TTRAFFICind)]: (TTRAFFICind)[_K] }): TTRAFFICind {
        return new TTRAFFICind(_o.tLIInstanceid, _o.trafficPacket);
    }


}

/**
 * @summary The Leading Root Component Types of TTRAFFICind
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TTRAFFICind: $.ComponentSpec[] = [
    new $.ComponentSpec("tLIInstanceid", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("trafficPacket", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of TTRAFFICind
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TTRAFFICind: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TTRAFFICind
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TTRAFFICind: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TTRAFFICind: $.ASN1Decoder<TTRAFFICind> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TTRAFFICind
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TTRAFFICind (el: _Element): TTRAFFICind {
    if (!_cached_decoder_for_TTRAFFICind) { _cached_decoder_for_TTRAFFICind = function (el: _Element): TTRAFFICind {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("TTRAFFICind contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "tLIInstanceid";
    sequence[1].name = "trafficPacket";
    let tLIInstanceid!: TLIIdType;
    let trafficPacket!: BIT_STRING;
    tLIInstanceid = _decode_TLIIdType(sequence[0]);
    trafficPacket = $._decodeBitString(sequence[1]);
    return new TTRAFFICind(
        tLIInstanceid,
        trafficPacket,

    );
}; }
    return _cached_decoder_for_TTRAFFICind(el);
}

let _cached_encoder_for_TTRAFFICind: $.ASN1Encoder<TTRAFFICind> | null = null;

/**
 * @summary Encodes a(n) TTRAFFICind into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TTRAFFICind, encoded as an ASN.1 Element.
 */
export
function _encode_TTRAFFICind (value: TTRAFFICind, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TTRAFFICind) { _cached_encoder_for_TTRAFFICind = function (value: TTRAFFICind, elGetter: $.ASN1Encoder<TTRAFFICind>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_TLIIdType, $.BER)(value.tLIInstanceid, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeBitString, $.BER)(value.trafficPacket, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_TTRAFFICind(value, elGetter);
}


/* eslint-enable */
