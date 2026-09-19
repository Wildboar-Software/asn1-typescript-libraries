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
import { PEI, _decode_PEI, _encode_PEI } from "../TS33128Payloads/PEI.ta.mjs";
// export { PEI, _decode_PEI, _encode_PEI } from "../TS33128Payloads/PEI.ta.mjs";
import { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
// export { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
import { PDUSessionID, _decode_PDUSessionID, _encode_PDUSessionID } from "../TS33128Payloads/PDUSessionID.ta.mjs";
// export { PDUSessionID, _decode_PDUSessionID, _encode_PDUSessionID } from "../TS33128Payloads/PDUSessionID.ta.mjs";
import { Timestamp, _decode_Timestamp, _encode_Timestamp } from "../TS33128Payloads/Timestamp.ta.mjs";
// export { Timestamp, _decode_Timestamp, _encode_Timestamp } from "../TS33128Payloads/Timestamp.ta.mjs";
import { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
// export { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
import { SMFErrorCodes, _decode_SMFErrorCodes, _encode_SMFErrorCodes } from "../TS33128Payloads/SMFErrorCodes.ta.mjs";
// export { SMFErrorCodes, _decode_SMFErrorCodes, _encode_SMFErrorCodes } from "../TS33128Payloads/SMFErrorCodes.ta.mjs";
import { EPS5GSComboInfo, _decode_EPS5GSComboInfo, _encode_EPS5GSComboInfo } from "../TS33128Payloads/EPS5GSComboInfo.ta.mjs";
// export { EPS5GSComboInfo, _decode_EPS5GSComboInfo, _encode_EPS5GSComboInfo } from "../TS33128Payloads/EPS5GSComboInfo.ta.mjs";
import { NGAPCauseInt, _decode_NGAPCauseInt, _encode_NGAPCauseInt } from "../TS33128Payloads/NGAPCauseInt.ta.mjs";
// export { NGAPCauseInt, _decode_NGAPCauseInt, _encode_NGAPCauseInt } from "../TS33128Payloads/NGAPCauseInt.ta.mjs";
import { FiveGMMCause, _decode_FiveGMMCause, _encode_FiveGMMCause } from "../TS33128Payloads/FiveGMMCause.ta.mjs";
// export { FiveGMMCause, _decode_FiveGMMCause, _encode_FiveGMMCause } from "../TS33128Payloads/FiveGMMCause.ta.mjs";
import { PCCRuleIDSet, _decode_PCCRuleIDSet, _encode_PCCRuleIDSet } from "../TS33128Payloads/PCCRuleIDSet.ta.mjs";
// export { PCCRuleIDSet, _decode_PCCRuleIDSet, _encode_PCCRuleIDSet } from "../TS33128Payloads/PCCRuleIDSet.ta.mjs";
import { EPSPDNConnectionRelease, _decode_EPSPDNConnectionRelease, _encode_EPSPDNConnectionRelease } from "../TS33128Payloads/EPSPDNConnectionRelease.ta.mjs";
// export { EPSPDNConnectionRelease, _decode_EPSPDNConnectionRelease, _encode_EPSPDNConnectionRelease } from "../TS33128Payloads/EPSPDNConnectionRelease.ta.mjs";


/**
 * @summary SMFPDUSessionRelease
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMFPDUSessionRelease ::= SEQUENCE
 * {
 *     sUPI                        [1] SUPI,
 *     pEI                         [2] PEI OPTIONAL,
 *     gPSI                        [3] GPSI OPTIONAL,
 *     pDUSessionID                [4] PDUSessionID,
 *     timeOfFirstPacket           [5] Timestamp OPTIONAL,
 *     timeOfLastPacket            [6] Timestamp OPTIONAL,
 *     uplinkVolume                [7] INTEGER OPTIONAL,
 *     downlinkVolume              [8] INTEGER OPTIONAL,
 *     location                    [9] Location OPTIONAL,
 *     cause                       [10] SMFErrorCodes OPTIONAL,
 *     ePS5GSComboInfo             [11] EPS5GSComboInfo OPTIONAL,
 *     nGAPCause                   [12] NGAPCauseInt OPTIONAL,
 *     fiveGMMCause                [13] FiveGMMCause OPTIONAL,
 *     pCCRuleIDs                  [14] PCCRuleIDSet OPTIONAL,
 *     ePSPDNConnectionRelease     [15] EPSPDNConnectionRelease OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class SMFPDUSessionRelease {
    constructor (
        /**
         * @summary `sUPI`.
         * @public
         * @readonly
         */
        readonly sUPI: SUPI,
        /**
         * @summary `pEI`.
         * @public
         * @readonly
         */
        readonly pEI: OPTIONAL<PEI>,
        /**
         * @summary `gPSI`.
         * @public
         * @readonly
         */
        readonly gPSI: OPTIONAL<GPSI>,
        /**
         * @summary `pDUSessionID`.
         * @public
         * @readonly
         */
        readonly pDUSessionID: PDUSessionID,
        /**
         * @summary `timeOfFirstPacket`.
         * @public
         * @readonly
         */
        readonly timeOfFirstPacket: OPTIONAL<Timestamp>,
        /**
         * @summary `timeOfLastPacket`.
         * @public
         * @readonly
         */
        readonly timeOfLastPacket: OPTIONAL<Timestamp>,
        /**
         * @summary `uplinkVolume`.
         * @public
         * @readonly
         */
        readonly uplinkVolume: OPTIONAL<INTEGER>,
        /**
         * @summary `downlinkVolume`.
         * @public
         * @readonly
         */
        readonly downlinkVolume: OPTIONAL<INTEGER>,
        /**
         * @summary `location`.
         * @public
         * @readonly
         */
        readonly location: OPTIONAL<Location>,
        /**
         * @summary `cause`.
         * @public
         * @readonly
         */
        readonly cause: OPTIONAL<SMFErrorCodes>,
        /**
         * @summary `ePS5GSComboInfo`.
         * @public
         * @readonly
         */
        readonly ePS5GSComboInfo: OPTIONAL<EPS5GSComboInfo>,
        /**
         * @summary `nGAPCause`.
         * @public
         * @readonly
         */
        readonly nGAPCause: OPTIONAL<NGAPCauseInt>,
        /**
         * @summary `fiveGMMCause`.
         * @public
         * @readonly
         */
        readonly fiveGMMCause: OPTIONAL<FiveGMMCause>,
        /**
         * @summary `pCCRuleIDs`.
         * @public
         * @readonly
         */
        readonly pCCRuleIDs: OPTIONAL<PCCRuleIDSet>,
        /**
         * @summary `ePSPDNConnectionRelease`.
         * @public
         * @readonly
         */
        readonly ePSPDNConnectionRelease: OPTIONAL<EPSPDNConnectionRelease>
    ) {}

    /**
     * @summary Restructures an object into a SMFPDUSessionRelease
     * @description
     * 
     * This takes an `object` and converts it to a `SMFPDUSessionRelease`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SMFPDUSessionRelease`.
     * @returns {SMFPDUSessionRelease}
     */
    public static _from_object (_o: { [_K in keyof (SMFPDUSessionRelease)]: (SMFPDUSessionRelease)[_K] }): SMFPDUSessionRelease {
        return new SMFPDUSessionRelease(_o.sUPI, _o.pEI, _o.gPSI, _o.pDUSessionID, _o.timeOfFirstPacket, _o.timeOfLastPacket, _o.uplinkVolume, _o.downlinkVolume, _o.location, _o.cause, _o.ePS5GSComboInfo, _o.nGAPCause, _o.fiveGMMCause, _o.pCCRuleIDs, _o.ePSPDNConnectionRelease);
    }


}

/**
 * @summary The Leading Root Component Types of SMFPDUSessionRelease
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SMFPDUSessionRelease: $.ComponentSpec[] = [
    new $.ComponentSpec("sUPI", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("pEI", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("gPSI", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("pDUSessionID", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("timeOfFirstPacket", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("timeOfLastPacket", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("uplinkVolume", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("downlinkVolume", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("location", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("cause", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("ePS5GSComboInfo", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("nGAPCause", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("fiveGMMCause", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("pCCRuleIDs", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("ePSPDNConnectionRelease", true, $.hasTag(_TagClass.context, 15))
];

/**
 * @summary The Trailing Root Component Types of SMFPDUSessionRelease
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SMFPDUSessionRelease: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SMFPDUSessionRelease
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SMFPDUSessionRelease: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SMFPDUSessionRelease: $.ASN1Decoder<SMFPDUSessionRelease> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SMFPDUSessionRelease
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SMFPDUSessionRelease (el: _Element): SMFPDUSessionRelease {
    if (!_cached_decoder_for_SMFPDUSessionRelease) { _cached_decoder_for_SMFPDUSessionRelease = function (el: _Element): SMFPDUSessionRelease {
    let sUPI!: SUPI;
    let pEI: OPTIONAL<PEI>;
    let gPSI: OPTIONAL<GPSI>;
    let pDUSessionID!: PDUSessionID;
    let timeOfFirstPacket: OPTIONAL<Timestamp>;
    let timeOfLastPacket: OPTIONAL<Timestamp>;
    let uplinkVolume: OPTIONAL<INTEGER>;
    let downlinkVolume: OPTIONAL<INTEGER>;
    let location: OPTIONAL<Location>;
    let cause: OPTIONAL<SMFErrorCodes>;
    let ePS5GSComboInfo: OPTIONAL<EPS5GSComboInfo>;
    let nGAPCause: OPTIONAL<NGAPCauseInt>;
    let fiveGMMCause: OPTIONAL<FiveGMMCause>;
    let pCCRuleIDs: OPTIONAL<PCCRuleIDSet>;
    let ePSPDNConnectionRelease: OPTIONAL<EPSPDNConnectionRelease>;
    const callbacks: $.DecodingMap = {
        "sUPI": (_el: _Element): void => { sUPI = $._decode_explicit<SUPI>(() => _decode_SUPI)(_el); },
        "pEI": (_el: _Element): void => { pEI = $._decode_explicit<PEI>(() => _decode_PEI)(_el); },
        "gPSI": (_el: _Element): void => { gPSI = $._decode_explicit<GPSI>(() => _decode_GPSI)(_el); },
        "pDUSessionID": (_el: _Element): void => { pDUSessionID = $._decode_implicit<PDUSessionID>(() => _decode_PDUSessionID)(_el); },
        "timeOfFirstPacket": (_el: _Element): void => { timeOfFirstPacket = $._decode_implicit<Timestamp>(() => _decode_Timestamp)(_el); },
        "timeOfLastPacket": (_el: _Element): void => { timeOfLastPacket = $._decode_implicit<Timestamp>(() => _decode_Timestamp)(_el); },
        "uplinkVolume": (_el: _Element): void => { uplinkVolume = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "downlinkVolume": (_el: _Element): void => { downlinkVolume = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "location": (_el: _Element): void => { location = $._decode_implicit<Location>(() => _decode_Location)(_el); },
        "cause": (_el: _Element): void => { cause = $._decode_implicit<SMFErrorCodes>(() => _decode_SMFErrorCodes)(_el); },
        "ePS5GSComboInfo": (_el: _Element): void => { ePS5GSComboInfo = $._decode_implicit<EPS5GSComboInfo>(() => _decode_EPS5GSComboInfo)(_el); },
        "nGAPCause": (_el: _Element): void => { nGAPCause = $._decode_implicit<NGAPCauseInt>(() => _decode_NGAPCauseInt)(_el); },
        "fiveGMMCause": (_el: _Element): void => { fiveGMMCause = $._decode_implicit<FiveGMMCause>(() => _decode_FiveGMMCause)(_el); },
        "pCCRuleIDs": (_el: _Element): void => { pCCRuleIDs = $._decode_implicit<PCCRuleIDSet>(() => _decode_PCCRuleIDSet)(_el); },
        "ePSPDNConnectionRelease": (_el: _Element): void => { ePSPDNConnectionRelease = $._decode_implicit<EPSPDNConnectionRelease>(() => _decode_EPSPDNConnectionRelease)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SMFPDUSessionRelease,
        _extension_additions_list_spec_for_SMFPDUSessionRelease,
        _root_component_type_list_2_spec_for_SMFPDUSessionRelease,
        undefined,
    );
    return new SMFPDUSessionRelease(
        sUPI,
        pEI,
        gPSI,
        pDUSessionID,
        timeOfFirstPacket,
        timeOfLastPacket,
        uplinkVolume,
        downlinkVolume,
        location,
        cause,
        ePS5GSComboInfo,
        nGAPCause,
        fiveGMMCause,
        pCCRuleIDs,
        ePSPDNConnectionRelease
    );
}; }
    return _cached_decoder_for_SMFPDUSessionRelease(el);
}

let _cached_encoder_for_SMFPDUSessionRelease: $.ASN1Encoder<SMFPDUSessionRelease> | null = null;

/**
 * @summary Encodes a(n) SMFPDUSessionRelease into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SMFPDUSessionRelease, encoded as an ASN.1 Element.
 */
export
function _encode_SMFPDUSessionRelease (value: SMFPDUSessionRelease, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SMFPDUSessionRelease) { _cached_encoder_for_SMFPDUSessionRelease = function (value: SMFPDUSessionRelease, elGetter: $.ASN1Encoder<SMFPDUSessionRelease>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_SUPI, $.BER)(value.sUPI, $.BER),
            /* IF_ABSENT  */ ((value.pEI === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => _encode_PEI, $.BER)(value.pEI, $.BER)),
            /* IF_ABSENT  */ ((value.gPSI === undefined) ? undefined : $._encode_explicit(_TagClass.context, 3, () => _encode_GPSI, $.BER)(value.gPSI, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_PDUSessionID, $.BER)(value.pDUSessionID, $.BER),
            /* IF_ABSENT  */ ((value.timeOfFirstPacket === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_Timestamp, $.BER)(value.timeOfFirstPacket, $.BER)),
            /* IF_ABSENT  */ ((value.timeOfLastPacket === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_Timestamp, $.BER)(value.timeOfLastPacket, $.BER)),
            /* IF_ABSENT  */ ((value.uplinkVolume === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => $._encodeInteger, $.BER)(value.uplinkVolume, $.BER)),
            /* IF_ABSENT  */ ((value.downlinkVolume === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => $._encodeInteger, $.BER)(value.downlinkVolume, $.BER)),
            /* IF_ABSENT  */ ((value.location === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_Location, $.BER)(value.location, $.BER)),
            /* IF_ABSENT  */ ((value.cause === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_SMFErrorCodes, $.BER)(value.cause, $.BER)),
            /* IF_ABSENT  */ ((value.ePS5GSComboInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => _encode_EPS5GSComboInfo, $.BER)(value.ePS5GSComboInfo, $.BER)),
            /* IF_ABSENT  */ ((value.nGAPCause === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => _encode_NGAPCauseInt, $.BER)(value.nGAPCause, $.BER)),
            /* IF_ABSENT  */ ((value.fiveGMMCause === undefined) ? undefined : $._encode_implicit(_TagClass.context, 13, () => _encode_FiveGMMCause, $.BER)(value.fiveGMMCause, $.BER)),
            /* IF_ABSENT  */ ((value.pCCRuleIDs === undefined) ? undefined : $._encode_implicit(_TagClass.context, 14, () => _encode_PCCRuleIDSet, $.BER)(value.pCCRuleIDs, $.BER)),
            /* IF_ABSENT  */ ((value.ePSPDNConnectionRelease === undefined) ? undefined : $._encode_implicit(_TagClass.context, 15, () => _encode_EPSPDNConnectionRelease, $.BER)(value.ePSPDNConnectionRelease, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SMFPDUSessionRelease(value, elGetter);
}


/* eslint-enable */
