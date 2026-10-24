/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type SUPI, _decode_SUPI, _encode_SUPI } from "../TS33128Payloads/SUPI.ta.mjs";
// export { SUPI, _decode_SUPI, _encode_SUPI } from "../TS33128Payloads/SUPI.ta.mjs";
import { type GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
// export { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
import { type PDUSessionID, _decode_PDUSessionID, _encode_PDUSessionID } from "../TS33128Payloads/PDUSessionID.ta.mjs";
// export { PDUSessionID, _decode_PDUSessionID, _encode_PDUSessionID } from "../TS33128Payloads/PDUSessionID.ta.mjs";
import { SNSSAI, _decode_SNSSAI, _encode_SNSSAI } from "../TS33128Payloads/SNSSAI.ta.mjs";
// export { SNSSAI, _decode_SNSSAI, _encode_SNSSAI } from "../TS33128Payloads/SNSSAI.ta.mjs";
import { type NEFID, _decode_NEFID, _encode_NEFID } from "../TS33128Payloads/NEFID.ta.mjs";
// export { NEFID, _decode_NEFID, _encode_NEFID } from "../TS33128Payloads/NEFID.ta.mjs";
import { type DNN, _decode_DNN, _encode_DNN } from "../TS33128Payloads/DNN.ta.mjs";
// export { DNN, _decode_DNN, _encode_DNN } from "../TS33128Payloads/DNN.ta.mjs";
import { type RDSSupport, _decode_RDSSupport, _encode_RDSSupport } from "../TS33128Payloads/RDSSupport.ta.mjs";
// export { RDSSupport, _decode_RDSSupport, _encode_RDSSupport } from "../TS33128Payloads/RDSSupport.ta.mjs";
import { type SMFID, _decode_SMFID, _encode_SMFID } from "../TS33128Payloads/SMFID.ta.mjs";
// export { SMFID, _decode_SMFID, _encode_SMFID } from "../TS33128Payloads/SMFID.ta.mjs";
import { type AFID, _decode_AFID, _encode_AFID } from "../TS33128Payloads/AFID.ta.mjs";
// export { AFID, _decode_AFID, _encode_AFID } from "../TS33128Payloads/AFID.ta.mjs";


/**
 * @summary NEFPDUSessionEstablishment
 * @description
 * 
 * The IRI-POI in the NEF shall generate an xIRI containing an
 * NEFPDUSessionEstablishment record when the IRI-POI present in the NEF detects
 * that an unstructured PDU session using NEF has been established for the
 * target UE. The IRI-POI present in the NEF shall generate the xIRI for the
 * following event:
 *
 * - NEF returns Nnef_SMContext_Create Response towards the SMF confirming the
 *   establishment of the unstructured PDU session to the NEF for the target UE
 *   (as defined in TS 29.541 [57] clause 5.2.2.2) and connection to the AF is
 *   established.
 *
 * Table 7.7.2.3-1 gives the LI_HI2 IRI message type for this record as BEGIN.
 *
 * 3GPP TS 33.128, clause 7.7.2.1.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NEFPDUSessionEstablishment ::= SEQUENCE
 * {
 *     sUPI                  [1] SUPI,
 *     gPSI                  [2] GPSI,
 *     pDUSessionID          [3] PDUSessionID,
 *     sNSSAI                [4] SNSSAI,
 *     nEFID                 [5] NEFID,
 *     dNN                   [6] DNN,
 *     rDSSupport            [7] RDSSupport,
 *     sMFID                 [8] SMFID,
 *     aFID                  [9] AFID
 * }
 * ```
 * 
 * @class
 */
export
class NEFPDUSessionEstablishment {
    /**
     * @summary `sUPI`.
     * @description
     *
     * SUPI associated with the PDU session (e.g. as provided by the SMF in the
     * associated Nnef_SMContext_Create Request).
     *
     * 3GPP TS 33.128, clause 7.7.2.1.2.
     *
     * @public
     * @readonly
     */
    readonly sUPI: SUPI;
    /**
     * @summary `gPSI`.
     * @description
     *
     * GPSI associated with the PDU session.
     *
     * 3GPP TS 33.128, clause 7.7.2.1.2.
     *
     * @public
     * @readonly
     */
    readonly gPSI: GPSI;
    /**
     * @summary `pDUSessionID`.
     * @description
     *
     * PDU Session ID.
     *
     * 3GPP TS 33.128, clause 7.7.2.1.2.
     *
     * @public
     * @readonly
     */
    readonly pDUSessionID: PDUSessionID;
    /**
     * @summary `sNSSAI`.
     * @description
     *
     * Slice identifier associated with the PDU session.
     *
     * 3GPP TS 33.128, clause 7.7.2.1.2.
     *
     * @public
     * @readonly
     */
    readonly sNSSAI: SNSSAI;
    /**
     * @summary `nEFID`.
     * @description
     *
     * NEF identity handling the PDU session.
     *
     * 3GPP TS 33.128, clause 7.7.2.1.2.
     *
     * @public
     * @readonly
     */
    readonly nEFID: NEFID;
    /**
     * @summary `dNN`.
     * @description
     *
     * Data Network Name associated with the target traffic. Shall be given in
     * dotted-label presentation format as described in TS 23.003 [19] clause
     * 9.1.
     *
     * 3GPP TS 33.128, clause 7.7.2.1.2.
     *
     * @public
     * @readonly
     */
    readonly dNN: DNN;
    /**
     * @summary `rDSSupport`.
     * @description
     *
     * True if Reliable Data Service is supported in the PDU session, otherwise
     * False.
     *
     * 3GPP TS 33.128, clause 7.7.2.1.2.
     *
     * @public
     * @readonly
     */
    readonly rDSSupport: RDSSupport;
    /**
     * @summary `sMFID`.
     * @description
     *
     * Identifier of the SMF associated with the target UE for that that PDU
     * Session.
     *
     * 3GPP TS 33.128, clause 7.7.2.1.2.
     *
     * @public
     * @readonly
     */
    readonly sMFID: SMFID;
    /**
     * @summary `aFID`.
     * @description
     *
     * Identifier of the AF.
     *
     * 3GPP TS 33.128, clause 7.7.2.1.2.
     *
     * @public
     * @readonly
     */
    readonly aFID: AFID;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        sUPI: SUPI,
        gPSI: GPSI,
        pDUSessionID: PDUSessionID,
        sNSSAI: SNSSAI,
        nEFID: NEFID,
        dNN: DNN,
        rDSSupport: RDSSupport,
        sMFID: SMFID,
        aFID: AFID,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.sUPI = sUPI;
        this.gPSI = gPSI;
        this.pDUSessionID = pDUSessionID;
        this.sNSSAI = sNSSAI;
        this.nEFID = nEFID;
        this.dNN = dNN;
        this.rDSSupport = rDSSupport;
        this.sMFID = sMFID;
        this.aFID = aFID;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a NEFPDUSessionEstablishment
     * @description
     * 
     * This takes an `object` and converts it to a `NEFPDUSessionEstablishment`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NEFPDUSessionEstablishment`.
     * @returns {NEFPDUSessionEstablishment}
     */
    public static _from_object (_o: { [_K in keyof (NEFPDUSessionEstablishment)]: (NEFPDUSessionEstablishment)[_K] }): NEFPDUSessionEstablishment {
        return new NEFPDUSessionEstablishment(_o.sUPI, _o.gPSI, _o.pDUSessionID, _o.sNSSAI, _o.nEFID, _o.dNN, _o.rDSSupport, _o.sMFID, _o.aFID, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of NEFPDUSessionEstablishment
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NEFPDUSessionEstablishment: $.ComponentSpec[] = [
    new $.ComponentSpec("sUPI", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("gPSI", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("pDUSessionID", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("sNSSAI", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("nEFID", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("dNN", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("rDSSupport", false, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("sMFID", false, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("aFID", false, $.hasTag(_TagClass.context, 9))
];

/**
 * @summary The Trailing Root Component Types of NEFPDUSessionEstablishment
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NEFPDUSessionEstablishment: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NEFPDUSessionEstablishment
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NEFPDUSessionEstablishment: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_NEFPDUSessionEstablishment: $.ASN1Decoder<NEFPDUSessionEstablishment> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NEFPDUSessionEstablishment
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NEFPDUSessionEstablishment (el: _Element): NEFPDUSessionEstablishment {
    if (!_cached_decoder_for_NEFPDUSessionEstablishment) { _cached_decoder_for_NEFPDUSessionEstablishment = function (el: _Element): NEFPDUSessionEstablishment {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 9) {
        throw new _ConstructionError("NEFPDUSessionEstablishment contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "sUPI";
    sequence[1].name = "gPSI";
    sequence[2].name = "pDUSessionID";
    sequence[3].name = "sNSSAI";
    sequence[4].name = "nEFID";
    sequence[5].name = "dNN";
    sequence[6].name = "rDSSupport";
    sequence[7].name = "sMFID";
    sequence[8].name = "aFID";
    let sUPI!: SUPI;
    let gPSI!: GPSI;
    let pDUSessionID!: PDUSessionID;
    let sNSSAI!: SNSSAI;
    let nEFID!: NEFID;
    let dNN!: DNN;
    let rDSSupport!: RDSSupport;
    let sMFID!: SMFID;
    let aFID!: AFID;
    sUPI = $._decode_explicit<SUPI>(() => _decode_SUPI)(sequence[0]);
    gPSI = $._decode_explicit<GPSI>(() => _decode_GPSI)(sequence[1]);
    pDUSessionID = $._decode_implicit<PDUSessionID>(() => _decode_PDUSessionID)(sequence[2]);
    sNSSAI = $._decode_implicit<SNSSAI>(() => _decode_SNSSAI)(sequence[3]);
    nEFID = $._decode_implicit<NEFID>(() => _decode_NEFID)(sequence[4]);
    dNN = $._decode_implicit<DNN>(() => _decode_DNN)(sequence[5]);
    rDSSupport = $._decode_implicit<RDSSupport>(() => _decode_RDSSupport)(sequence[6]);
    sMFID = $._decode_implicit<SMFID>(() => _decode_SMFID)(sequence[7]);
    aFID = $._decode_implicit<AFID>(() => _decode_AFID)(sequence[8]);
    return new NEFPDUSessionEstablishment(
        sUPI,
        gPSI,
        pDUSessionID,
        sNSSAI,
        nEFID,
        dNN,
        rDSSupport,
        sMFID,
        aFID,
        sequence.slice(9),
    );
}; }
    return _cached_decoder_for_NEFPDUSessionEstablishment(el);
}

let _cached_encoder_for_NEFPDUSessionEstablishment: $.ASN1Encoder<NEFPDUSessionEstablishment> | null = null;

/**
 * @summary Encodes a(n) NEFPDUSessionEstablishment into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NEFPDUSessionEstablishment, encoded as an ASN.1 Element.
 */
export
function _encode_NEFPDUSessionEstablishment (value: NEFPDUSessionEstablishment, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NEFPDUSessionEstablishment) { _cached_encoder_for_NEFPDUSessionEstablishment = function (value: NEFPDUSessionEstablishment, elGetter: $.ASN1Encoder<NEFPDUSessionEstablishment>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(9 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_SUPI, $.BER)(value.sUPI, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_GPSI, $.BER)(value.gPSI, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_PDUSessionID, $.BER)(value.pDUSessionID, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_SNSSAI, $.BER)(value.sNSSAI, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => _encode_NEFID, $.BER)(value.nEFID, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => _encode_DNN, $.BER)(value.dNN, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 7, () => _encode_RDSSupport, $.BER)(value.rDSSupport, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 8, () => _encode_SMFID, $.BER)(value.sMFID, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 9, () => _encode_AFID, $.BER)(value.aFID, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_NEFPDUSessionEstablishment(value, elGetter);
}


/* eslint-enable */
