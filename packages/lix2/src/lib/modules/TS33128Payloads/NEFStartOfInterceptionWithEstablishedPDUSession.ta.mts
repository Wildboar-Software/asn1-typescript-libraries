/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SUPI, _decode_SUPI, _encode_SUPI } from "../TS33128Payloads/SUPI.ta.mjs";
// export { SUPI, _decode_SUPI, _encode_SUPI } from "../TS33128Payloads/SUPI.ta.mjs";
import { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
// export { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
import { PDUSessionID, _decode_PDUSessionID, _encode_PDUSessionID } from "../TS33128Payloads/PDUSessionID.ta.mjs";
// export { PDUSessionID, _decode_PDUSessionID, _encode_PDUSessionID } from "../TS33128Payloads/PDUSessionID.ta.mjs";
import { DNN, _decode_DNN, _encode_DNN } from "../TS33128Payloads/DNN.ta.mjs";
// export { DNN, _decode_DNN, _encode_DNN } from "../TS33128Payloads/DNN.ta.mjs";
import { SNSSAI, _decode_SNSSAI, _encode_SNSSAI } from "../TS33128Payloads/SNSSAI.ta.mjs";
// export { SNSSAI, _decode_SNSSAI, _encode_SNSSAI } from "../TS33128Payloads/SNSSAI.ta.mjs";
import { NEFID, _decode_NEFID, _encode_NEFID } from "../TS33128Payloads/NEFID.ta.mjs";
// export { NEFID, _decode_NEFID, _encode_NEFID } from "../TS33128Payloads/NEFID.ta.mjs";
import { RDSSupport, _decode_RDSSupport, _encode_RDSSupport } from "../TS33128Payloads/RDSSupport.ta.mjs";
// export { RDSSupport, _decode_RDSSupport, _encode_RDSSupport } from "../TS33128Payloads/RDSSupport.ta.mjs";
import { SMFID, _decode_SMFID, _encode_SMFID } from "../TS33128Payloads/SMFID.ta.mjs";
// export { SMFID, _decode_SMFID, _encode_SMFID } from "../TS33128Payloads/SMFID.ta.mjs";
import { AFID, _decode_AFID, _encode_AFID } from "../TS33128Payloads/AFID.ta.mjs";
// export { AFID, _decode_AFID, _encode_AFID } from "../TS33128Payloads/AFID.ta.mjs";


/**
 * @summary NEFStartOfInterceptionWithEstablishedPDUSession
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NEFStartOfInterceptionWithEstablishedPDUSession ::= SEQUENCE
 * {
 *     sUPI               [1] SUPI,
 *     gPSI               [2] GPSI,
 *     pDUSessionID       [3] PDUSessionID,
 *     dNN                [4] DNN,
 *     sNSSAI             [5] SNSSAI,
 *     nEFID              [6] NEFID,
 *     rDSSupport         [7] RDSSupport,
 *     sMFID              [8] SMFID,
 *     aFID               [9] AFID
 * }
 * ```
 * 
 * @class
 */
export
class NEFStartOfInterceptionWithEstablishedPDUSession {
    constructor (
        /**
         * @summary `sUPI`.
         * @public
         * @readonly
         */
        readonly sUPI: SUPI,
        /**
         * @summary `gPSI`.
         * @public
         * @readonly
         */
        readonly gPSI: GPSI,
        /**
         * @summary `pDUSessionID`.
         * @public
         * @readonly
         */
        readonly pDUSessionID: PDUSessionID,
        /**
         * @summary `dNN`.
         * @public
         * @readonly
         */
        readonly dNN: DNN,
        /**
         * @summary `sNSSAI`.
         * @public
         * @readonly
         */
        readonly sNSSAI: SNSSAI,
        /**
         * @summary `nEFID`.
         * @public
         * @readonly
         */
        readonly nEFID: NEFID,
        /**
         * @summary `rDSSupport`.
         * @public
         * @readonly
         */
        readonly rDSSupport: RDSSupport,
        /**
         * @summary `sMFID`.
         * @public
         * @readonly
         */
        readonly sMFID: SMFID,
        /**
         * @summary `aFID`.
         * @public
         * @readonly
         */
        readonly aFID: AFID
    ) {}

    /**
     * @summary Restructures an object into a NEFStartOfInterceptionWithEstablishedPDUSession
     * @description
     * 
     * This takes an `object` and converts it to a `NEFStartOfInterceptionWithEstablishedPDUSession`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NEFStartOfInterceptionWithEstablishedPDUSession`.
     * @returns {NEFStartOfInterceptionWithEstablishedPDUSession}
     */
    public static _from_object (_o: { [_K in keyof (NEFStartOfInterceptionWithEstablishedPDUSession)]: (NEFStartOfInterceptionWithEstablishedPDUSession)[_K] }): NEFStartOfInterceptionWithEstablishedPDUSession {
        return new NEFStartOfInterceptionWithEstablishedPDUSession(_o.sUPI, _o.gPSI, _o.pDUSessionID, _o.dNN, _o.sNSSAI, _o.nEFID, _o.rDSSupport, _o.sMFID, _o.aFID);
    }


}

/**
 * @summary The Leading Root Component Types of NEFStartOfInterceptionWithEstablishedPDUSession
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NEFStartOfInterceptionWithEstablishedPDUSession: $.ComponentSpec[] = [
    new $.ComponentSpec("sUPI", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("gPSI", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("pDUSessionID", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("dNN", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("sNSSAI", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("nEFID", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("rDSSupport", false, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("sMFID", false, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("aFID", false, $.hasTag(_TagClass.context, 9))
];

/**
 * @summary The Trailing Root Component Types of NEFStartOfInterceptionWithEstablishedPDUSession
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NEFStartOfInterceptionWithEstablishedPDUSession: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NEFStartOfInterceptionWithEstablishedPDUSession
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NEFStartOfInterceptionWithEstablishedPDUSession: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_NEFStartOfInterceptionWithEstablishedPDUSession: $.ASN1Decoder<NEFStartOfInterceptionWithEstablishedPDUSession> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NEFStartOfInterceptionWithEstablishedPDUSession
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NEFStartOfInterceptionWithEstablishedPDUSession (el: _Element): NEFStartOfInterceptionWithEstablishedPDUSession {
    if (!_cached_decoder_for_NEFStartOfInterceptionWithEstablishedPDUSession) { _cached_decoder_for_NEFStartOfInterceptionWithEstablishedPDUSession = function (el: _Element): NEFStartOfInterceptionWithEstablishedPDUSession {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 9) {
        throw new _ConstructionError("NEFStartOfInterceptionWithEstablishedPDUSession contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "sUPI";
    sequence[1].name = "gPSI";
    sequence[2].name = "pDUSessionID";
    sequence[3].name = "dNN";
    sequence[4].name = "sNSSAI";
    sequence[5].name = "nEFID";
    sequence[6].name = "rDSSupport";
    sequence[7].name = "sMFID";
    sequence[8].name = "aFID";
    let sUPI!: SUPI;
    let gPSI!: GPSI;
    let pDUSessionID!: PDUSessionID;
    let dNN!: DNN;
    let sNSSAI!: SNSSAI;
    let nEFID!: NEFID;
    let rDSSupport!: RDSSupport;
    let sMFID!: SMFID;
    let aFID!: AFID;
    sUPI = $._decode_explicit<SUPI>(() => _decode_SUPI)(sequence[0]);
    gPSI = $._decode_explicit<GPSI>(() => _decode_GPSI)(sequence[1]);
    pDUSessionID = $._decode_implicit<PDUSessionID>(() => _decode_PDUSessionID)(sequence[2]);
    dNN = $._decode_implicit<DNN>(() => _decode_DNN)(sequence[3]);
    sNSSAI = $._decode_implicit<SNSSAI>(() => _decode_SNSSAI)(sequence[4]);
    nEFID = $._decode_implicit<NEFID>(() => _decode_NEFID)(sequence[5]);
    rDSSupport = $._decode_implicit<RDSSupport>(() => _decode_RDSSupport)(sequence[6]);
    sMFID = $._decode_implicit<SMFID>(() => _decode_SMFID)(sequence[7]);
    aFID = $._decode_implicit<AFID>(() => _decode_AFID)(sequence[8]);
    return new NEFStartOfInterceptionWithEstablishedPDUSession(
        sUPI,
        gPSI,
        pDUSessionID,
        dNN,
        sNSSAI,
        nEFID,
        rDSSupport,
        sMFID,
        aFID,

    );
}; }
    return _cached_decoder_for_NEFStartOfInterceptionWithEstablishedPDUSession(el);
}

let _cached_encoder_for_NEFStartOfInterceptionWithEstablishedPDUSession: $.ASN1Encoder<NEFStartOfInterceptionWithEstablishedPDUSession> | null = null;

/**
 * @summary Encodes a(n) NEFStartOfInterceptionWithEstablishedPDUSession into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NEFStartOfInterceptionWithEstablishedPDUSession, encoded as an ASN.1 Element.
 */
export
function _encode_NEFStartOfInterceptionWithEstablishedPDUSession (value: NEFStartOfInterceptionWithEstablishedPDUSession, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NEFStartOfInterceptionWithEstablishedPDUSession) { _cached_encoder_for_NEFStartOfInterceptionWithEstablishedPDUSession = function (value: NEFStartOfInterceptionWithEstablishedPDUSession, elGetter: $.ASN1Encoder<NEFStartOfInterceptionWithEstablishedPDUSession>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_SUPI, $.BER)(value.sUPI, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_GPSI, $.BER)(value.gPSI, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_PDUSessionID, $.BER)(value.pDUSessionID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_DNN, $.BER)(value.dNN, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => _encode_SNSSAI, $.BER)(value.sNSSAI, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => _encode_NEFID, $.BER)(value.nEFID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 7, () => _encode_RDSSupport, $.BER)(value.rDSSupport, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 8, () => _encode_SMFID, $.BER)(value.sMFID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 9, () => _encode_AFID, $.BER)(value.aFID, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_NEFStartOfInterceptionWithEstablishedPDUSession(value, elGetter);
}


/* eslint-enable */
