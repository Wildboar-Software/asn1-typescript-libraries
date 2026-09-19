/* eslint-disable */
import {
    INTEGER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
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
import { NGAPCauseInt, _decode_NGAPCauseInt, _encode_NGAPCauseInt } from "../TS33128Payloads/NGAPCauseInt.ta.mjs";
// export { NGAPCauseInt, _decode_NGAPCauseInt, _encode_NGAPCauseInt } from "../TS33128Payloads/NGAPCauseInt.ta.mjs";
import { FiveGMMCause, _decode_FiveGMMCause, _encode_FiveGMMCause } from "../TS33128Payloads/FiveGMMCause.ta.mjs";
// export { FiveGMMCause, _decode_FiveGMMCause, _encode_FiveGMMCause } from "../TS33128Payloads/FiveGMMCause.ta.mjs";
import { PCCRuleIDSet, _decode_PCCRuleIDSet, _encode_PCCRuleIDSet } from "../TS33128Payloads/PCCRuleIDSet.ta.mjs";
// export { PCCRuleIDSet, _decode_PCCRuleIDSet, _encode_PCCRuleIDSet } from "../TS33128Payloads/PCCRuleIDSet.ta.mjs";
import { EPSPDNConnectionRelease, _decode_EPSPDNConnectionRelease, _encode_EPSPDNConnectionRelease } from "../TS33128Payloads/EPSPDNConnectionRelease.ta.mjs";
// export { EPSPDNConnectionRelease, _decode_EPSPDNConnectionRelease, _encode_EPSPDNConnectionRelease } from "../TS33128Payloads/EPSPDNConnectionRelease.ta.mjs";


/**
 * @summary SMFMAPDUSessionRelease
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMFMAPDUSessionRelease ::= SEQUENCE
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
 *     nGAPCause                   [11] NGAPCauseInt OPTIONAL,
 *     fiveGMMCause                [12] FiveGMMCause OPTIONAL,
 *     pCCRuleIDs                  [13] PCCRuleIDSet OPTIONAL,
 *     ePSPDNConnectionRelease     [14] EPSPDNConnectionRelease OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class SMFMAPDUSessionRelease {
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
     * @summary Restructures an object into a SMFMAPDUSessionRelease
     * @description
     * 
     * This takes an `object` and converts it to a `SMFMAPDUSessionRelease`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SMFMAPDUSessionRelease`.
     * @returns {SMFMAPDUSessionRelease}
     */
    public static _from_object (_o: { [_K in keyof (SMFMAPDUSessionRelease)]: (SMFMAPDUSessionRelease)[_K] }): SMFMAPDUSessionRelease {
        return new SMFMAPDUSessionRelease(_o.sUPI, _o.pEI, _o.gPSI, _o.pDUSessionID, _o.timeOfFirstPacket, _o.timeOfLastPacket, _o.uplinkVolume, _o.downlinkVolume, _o.location, _o.cause, _o.nGAPCause, _o.fiveGMMCause, _o.pCCRuleIDs, _o.ePSPDNConnectionRelease);
    }


}

/**
 * @summary The Leading Root Component Types of SMFMAPDUSessionRelease
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SMFMAPDUSessionRelease: $.ComponentSpec[] = [
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
    new $.ComponentSpec("nGAPCause", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("fiveGMMCause", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("pCCRuleIDs", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("ePSPDNConnectionRelease", true, $.hasTag(_TagClass.context, 14))
];

/**
 * @summary The Trailing Root Component Types of SMFMAPDUSessionRelease
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SMFMAPDUSessionRelease: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SMFMAPDUSessionRelease
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SMFMAPDUSessionRelease: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SMFMAPDUSessionRelease: $.ASN1Decoder<SMFMAPDUSessionRelease> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SMFMAPDUSessionRelease
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SMFMAPDUSessionRelease (el: _Element): SMFMAPDUSessionRelease {
    if (!_cached_decoder_for_SMFMAPDUSessionRelease) { _cached_decoder_for_SMFMAPDUSessionRelease = function (el: _Element): SMFMAPDUSessionRelease {
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
        "nGAPCause": (_el: _Element): void => { nGAPCause = $._decode_implicit<NGAPCauseInt>(() => _decode_NGAPCauseInt)(_el); },
        "fiveGMMCause": (_el: _Element): void => { fiveGMMCause = $._decode_implicit<FiveGMMCause>(() => _decode_FiveGMMCause)(_el); },
        "pCCRuleIDs": (_el: _Element): void => { pCCRuleIDs = $._decode_implicit<PCCRuleIDSet>(() => _decode_PCCRuleIDSet)(_el); },
        "ePSPDNConnectionRelease": (_el: _Element): void => { ePSPDNConnectionRelease = $._decode_implicit<EPSPDNConnectionRelease>(() => _decode_EPSPDNConnectionRelease)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SMFMAPDUSessionRelease,
        _extension_additions_list_spec_for_SMFMAPDUSessionRelease,
        _root_component_type_list_2_spec_for_SMFMAPDUSessionRelease,
        undefined,
    );
    return new SMFMAPDUSessionRelease(
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
        nGAPCause,
        fiveGMMCause,
        pCCRuleIDs,
        ePSPDNConnectionRelease
    );
}; }
    return _cached_decoder_for_SMFMAPDUSessionRelease(el);
}

let _cached_encoder_for_SMFMAPDUSessionRelease: $.ASN1Encoder<SMFMAPDUSessionRelease> | null = null;

/**
 * @summary Encodes a(n) SMFMAPDUSessionRelease into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SMFMAPDUSessionRelease, encoded as an ASN.1 Element.
 */
export
function _encode_SMFMAPDUSessionRelease (value: SMFMAPDUSessionRelease, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SMFMAPDUSessionRelease) { _cached_encoder_for_SMFMAPDUSessionRelease = function (value: SMFMAPDUSessionRelease, elGetter: $.ASN1Encoder<SMFMAPDUSessionRelease>): _Element {
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
            /* IF_ABSENT  */ ((value.nGAPCause === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => _encode_NGAPCauseInt, $.BER)(value.nGAPCause, $.BER)),
            /* IF_ABSENT  */ ((value.fiveGMMCause === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => _encode_FiveGMMCause, $.BER)(value.fiveGMMCause, $.BER)),
            /* IF_ABSENT  */ ((value.pCCRuleIDs === undefined) ? undefined : $._encode_implicit(_TagClass.context, 13, () => _encode_PCCRuleIDSet, $.BER)(value.pCCRuleIDs, $.BER)),
            /* IF_ABSENT  */ ((value.ePSPDNConnectionRelease === undefined) ? undefined : $._encode_implicit(_TagClass.context, 14, () => _encode_EPSPDNConnectionRelease, $.BER)(value.ePSPDNConnectionRelease, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SMFMAPDUSessionRelease(value, elGetter);
}


/* eslint-enable */
