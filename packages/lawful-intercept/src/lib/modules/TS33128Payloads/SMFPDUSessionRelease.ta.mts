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
import { AlternativeNSSAIList, _decode_AlternativeNSSAIList, _encode_AlternativeNSSAIList } from "../TS33128Payloads/AlternativeNSSAIList.ta.mjs";
// export { AlternativeNSSAIList, _decode_AlternativeNSSAIList, _encode_AlternativeNSSAIList } from "../TS33128Payloads/AlternativeNSSAIList.ta.mjs";


/**
 * @summary SMFPDUSessionRelease
 * @description
 * 
 * The IRI-POI in the SMF shall generate an xIRI containing an
 * SMFPDUSessionRelease record when the IRI-POI present in the SMF detects that
 * a single-access PDU session has been released. The IRI-POI present in the SMF
 * shall generate the xIRI for the following events:
 *
 * - For a non-roaming scenario, the SMF (or for a roaming scenario, V-SMF in
 *   the VPLMN for HR or SMF in the VPLMN for LBO), receives the N1 NAS message
 *   (via AMF) PDU SESSION RELEASE COMPLETE from the UE and the 5GSM state
 *   within the SMF is changed to PDU SESSION INACTIVE (see TS 24.501 [13]
 *   clauses 6.1.3.3 and 6.4.3). This applies to the following two cases:
 *
 * - UE initiated PDU session release (see TS 23.502 [4] clause 4.3.4.2).
 *
 * - Network initiated PDU session release (see TS 23.502 [4] clause 4.3.4.2).
 *
 * - For a non-roaming scenario, the SMF (or for a roaming scenario, V-SMF in
 *   the VPLMN for HR or SMF in the VPLMN for LBO), receives the N1 NAS message
 *   (via AMF) STATUS from the UE with the cause values listed in TS 24.501 [13]
 *   clause 6.5.3 and the 5GSM state within the SMF is changed to PDU SESSION
 *   INACTIVE. One of the cases where this applies is of UE finding that the PDU
 *   session ID received in a PDU SESSION MODIFICATION COMMAND is invalid.
 *
 * - For a non-roaming scenario, the SMF (or for a roaming scenario, the V-SMF
 *   in the VPLMN for HR or SMF in the VPLMN for LBO) sends the
 *   Nsmf_PDUSession_ReleaseSMContext Response to the AMF (see TS 29.502 [16]
 *   clause 5.2.2.4). This applies to the case where the PDU session is released
 *   without any N1 or N2 messages (e.g. AMF initiates the PDU session release
 *   when it finds that the PDU session is no longer associated with the UE, see
 *   TS 23.502 [4] clause 4.2.2.4).
 *
 * - For a non-roaming scenario, the SMF (or for a roaming scenarios, V-SMF in
 *   the VPLMN for HR or SMF in the VPLMN for LBO) sends
 *   Nsmf_PDUSession_SMContextStatusNotify (see TS 29.502 [16] clause 6.1.6.2.8)
 *   with RELEASED in the ResourceStatus IE (see TS 29.502 [16] clause
 *   6.1.6.3.1) to the AMF. This applies to the case where PDU session release
 *   is neither initiated by a NAS message nor by
 *   Nsmf_PDUSessionReleaseSMContext Request message (see TS 29.502 [16] clause
 *   5.2.2.5).
 *
 * - For a home-routed roaming scenario, the SMF in the HPLMN (i.e. H-SMF)
 *   receives the N16: Nsmf_PDU_Session_Update Response message with
 *   n1SmInfoFromUe IE containing the PDU SESSION RELEASE COMPLETE (see TS
 *   29.502 [16] clauses 5.2.1, 5.2.2.8, 5.2.3, and 6.1.6.4) from the V-SMF.
 *   This applies to the following three cases:
 *
 * - UE initiated PDU session release (see TS 23.502 [4] clause 4.3.4.3).
 *
 * - Network (VPLMN) initiated PDU session release (see TS 23.502 [4] clause
 *   4.3.4.3).
 *
 * - Network (HPLMN) initiated PDU session release (see TS 23.502 [4] clause
 *   4.3.4.3).
 *
 * - For a home-routed roaming scenario, H-SMF in the HPLMN sends the
 *   Nsmf_PDUSession_Release Response to the V-SMF (see TS 29.502 [16] clause
 *   5.2.2.9). This applies to the case where the PDU session is released
 *   without any N1 or N2 messages (e.g. AMF in the VPLMN initiates the PDU
 *   session release when it finds that the PDU session is no longer associated
 *   with the UE, see TS 23.502 [4] clause 4.3.4.3).
 *
 * - For a home-routed roaming scenario, H-SMF in the HPLMN sends a
 *   Nsmf_PDUSession_StatusNotify (see TS 29.502, clause 6.1.6.2.17) with
 *   RELEASED in the ResourceStatus IE (see TS 29.502 [16] clause 6.1.6.3.1) to
 *   the V-SMF. This applies to the case where PDU session release is neither
 *   initiated by a NAS message nor by Nsmf_PDUSessionRelease Request message
 *   (see TS 29.502 [16] clause 5.2.2.9).
 *
 * Table 6.2.3.7-1 gives the LI_HI2 IRI message type for this record as END.
 *
 * 3GPP TS 33.128, clause 6.2.3.2.4.
 * https://www.3gpp.org/DynaReport/33128.htm
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
 *     ePSPDNConnectionRelease     [15] EPSPDNConnectionRelease OPTIONAL,
 *     alternativeNSSAI            [16] AlternativeNSSAIList OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class SMFPDUSessionRelease {
    /**
     * @summary `sUPI`.
     * @description
     *
     * SUPI associated with the PDU session.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.4.
     *
     * @public
     * @readonly
     */
    readonly sUPI: SUPI;
    /**
     * @summary `pEI`.
     * @description
     *
     * PEI associated with the PDU session if available.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.4.
     *
     * @public
     * @readonly
     */
    readonly pEI: OPTIONAL<PEI>;
    /**
     * @summary `gPSI`.
     * @description
     *
     * GPSI associated with the PDU session if available.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.4.
     *
     * @public
     * @readonly
     */
    readonly gPSI: OPTIONAL<GPSI>;
    /**
     * @summary `pDUSessionID`.
     * @description
     *
     * PDU Session ID as assigned by the AMF.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.4.
     *
     * @public
     * @readonly
     */
    readonly pDUSessionID: PDUSessionID;
    /**
     * @summary `timeOfFirstPacket`.
     * @description
     *
     * Time of first packet for the PDU session.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.4.
     *
     * @public
     * @readonly
     */
    readonly timeOfFirstPacket: OPTIONAL<Timestamp>;
    /**
     * @summary `timeOfLastPacket`.
     * @description
     *
     * Time of last packet for the PDU session.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.4.
     *
     * @public
     * @readonly
     */
    readonly timeOfLastPacket: OPTIONAL<Timestamp>;
    /**
     * @summary `uplinkVolume`.
     * @description
     *
     * Number of uplink octets for the PDU session.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.4.
     *
     * @public
     * @readonly
     */
    readonly uplinkVolume: OPTIONAL<INTEGER>;
    /**
     * @summary `downlinkVolume`.
     * @description
     *
     * Number of downlink octets for the PDU session.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.4.
     *
     * @public
     * @readonly
     */
    readonly downlinkVolume: OPTIONAL<INTEGER>;
    /**
     * @summary `location`.
     * @description
     *
     * Location information, if available.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.4.
     *
     * @public
     * @readonly
     */
    readonly location: OPTIONAL<Location>;
    /**
     * @summary `cause`.
     * @description
     *
     * Indicates the NF Service Consumer cause for the requested PDU session
     * release (see TS 29.502 [16] clause 6.1.6.3.8 for enumerated cause
     * information). Include if known.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.4.
     *
     * @public
     * @readonly
     */
    readonly cause: OPTIONAL<SMFErrorCodes>;
    /**
     * @summary `ePS5GSComboInfo`.
     * @description
     *
     * Provides detailed information about PDN Connections associated with the
     * reported PDU Session. This parameter may include the additional IEs in
     * table 6.2.3.2.2-2, when available.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.4.
     *
     * @public
     * @readonly
     */
    readonly ePS5GSComboInfo: OPTIONAL<EPS5GSComboInfo>;
    /**
     * @summary `nGAPCause`.
     * @description
     *
     * Indicates the NGAP cause for the requested SM context release (see TS
     * 29.502 [16] clause 6.1.6.2.6). Shall be derived as described in TS 29.571
     * [17] clause 5.4.4.12.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.4.
     *
     * @public
     * @readonly
     */
    readonly nGAPCause: OPTIONAL<NGAPCauseInt>;
    /**
     * @summary `fiveGMMCause`.
     * @description
     *
     * Indicates the 5GMM cause for a PDU Session released due to any 5GMM
     * failure (see 29.502 [16] clause 6.1.6.2.6). Shall be sent as an integer
     * derived as described in TS 29.571 [17] clause 5.4.2.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.4.
     *
     * @public
     * @readonly
     */
    readonly fiveGMMCause: OPTIONAL<FiveGMMCause>;
    /**
     * @summary `pCCRuleIDs`.
     * @description
     *
     * PCC rule IDs of the PCC rules related to traffic influence that are
     * associated to the PDU session and active at the time the PDU session is
     * released.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.4.
     *
     * @public
     * @readonly
     */
    readonly pCCRuleIDs: OPTIONAL<PCCRuleIDSet>;
    /**
     * @summary `ePSPDNConnectionRelease`.
     * @description
     *
     * Provides details about PDN Connections when the SMFPDUSessionRelease xIRI
     * message is used to report PDN Connection Release. See table 6.3.3.2.4-1
     * and clause 6.3.3.2.4.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.4.
     *
     * @public
     * @readonly
     */
    readonly ePSPDNConnectionRelease: OPTIONAL<EPSPDNConnectionRelease>;
    /**
     * @summary `alternativeNSSAI`.
     * @description
     *
     * Provides a list of mapping information between the S-NSSAI to be replaced
     * and the alternative S-NSSAI. Shall be included if present in the PDU
     * SESSION RELEASE COMMAND. See TS 24.501 [13] clause 9.11.3.97.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.4.
     *
     * @public
     * @readonly
     */
    readonly alternativeNSSAI: OPTIONAL<AlternativeNSSAIList>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        sUPI: SUPI,
        pEI: OPTIONAL<PEI>,
        gPSI: OPTIONAL<GPSI>,
        pDUSessionID: PDUSessionID,
        timeOfFirstPacket?: OPTIONAL<Timestamp>,
        timeOfLastPacket?: OPTIONAL<Timestamp>,
        uplinkVolume?: OPTIONAL<INTEGER>,
        downlinkVolume?: OPTIONAL<INTEGER>,
        location?: OPTIONAL<Location>,
        cause?: OPTIONAL<SMFErrorCodes>,
        ePS5GSComboInfo?: OPTIONAL<EPS5GSComboInfo>,
        nGAPCause?: OPTIONAL<NGAPCauseInt>,
        fiveGMMCause?: OPTIONAL<FiveGMMCause>,
        pCCRuleIDs?: OPTIONAL<PCCRuleIDSet>,
        ePSPDNConnectionRelease?: OPTIONAL<EPSPDNConnectionRelease>,
        alternativeNSSAI?: OPTIONAL<AlternativeNSSAIList>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.sUPI = sUPI;
        this.pEI = pEI;
        this.gPSI = gPSI;
        this.pDUSessionID = pDUSessionID;
        this.timeOfFirstPacket = timeOfFirstPacket;
        this.timeOfLastPacket = timeOfLastPacket;
        this.uplinkVolume = uplinkVolume;
        this.downlinkVolume = downlinkVolume;
        this.location = location;
        this.cause = cause;
        this.ePS5GSComboInfo = ePS5GSComboInfo;
        this.nGAPCause = nGAPCause;
        this.fiveGMMCause = fiveGMMCause;
        this.pCCRuleIDs = pCCRuleIDs;
        this.ePSPDNConnectionRelease = ePSPDNConnectionRelease;
        this.alternativeNSSAI = alternativeNSSAI;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

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
        return new SMFPDUSessionRelease(_o.sUPI, _o.pEI, _o.gPSI, _o.pDUSessionID, _o.timeOfFirstPacket, _o.timeOfLastPacket, _o.uplinkVolume, _o.downlinkVolume, _o.location, _o.cause, _o.ePS5GSComboInfo, _o.nGAPCause, _o.fiveGMMCause, _o.pCCRuleIDs, _o.ePSPDNConnectionRelease, _o.alternativeNSSAI, _o._unrecognizedExtensionsList);
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
    new $.ComponentSpec("ePSPDNConnectionRelease", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("alternativeNSSAI", true, $.hasTag(_TagClass.context, 16))
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
    let alternativeNSSAI: OPTIONAL<AlternativeNSSAIList>;
    const _unrecognizedExtensionsList: _Element[] = [];
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
        "ePSPDNConnectionRelease": (_el: _Element): void => { ePSPDNConnectionRelease = $._decode_implicit<EPSPDNConnectionRelease>(() => _decode_EPSPDNConnectionRelease)(_el); },
        "alternativeNSSAI": (_el: _Element): void => { alternativeNSSAI = $._decode_implicit<AlternativeNSSAIList>(() => _decode_AlternativeNSSAIList)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SMFPDUSessionRelease,
        _extension_additions_list_spec_for_SMFPDUSessionRelease,
        _root_component_type_list_2_spec_for_SMFPDUSessionRelease,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
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
        ePSPDNConnectionRelease,
        alternativeNSSAI,
        _unrecognizedExtensionsList
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
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(16 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_SUPI, $.BER)(value.sUPI, $.BER);
    if (value.pEI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 2, () => _encode_PEI, $.BER)(value.pEI, $.BER);
    }
    if (value.gPSI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 3, () => _encode_GPSI, $.BER)(value.gPSI, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_PDUSessionID, $.BER)(value.pDUSessionID, $.BER);
    if (value.timeOfFirstPacket !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_Timestamp, $.BER)(value.timeOfFirstPacket, $.BER);
    }
    if (value.timeOfLastPacket !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_Timestamp, $.BER)(value.timeOfLastPacket, $.BER);
    }
    if (value.uplinkVolume !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeInteger, $.BER)(value.uplinkVolume, $.BER);
    }
    if (value.downlinkVolume !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeInteger, $.BER)(value.downlinkVolume, $.BER);
    }
    if (value.location !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => _encode_Location, $.BER)(value.location, $.BER);
    }
    if (value.cause !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => _encode_SMFErrorCodes, $.BER)(value.cause, $.BER);
    }
    if (value.ePS5GSComboInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => _encode_EPS5GSComboInfo, $.BER)(value.ePS5GSComboInfo, $.BER);
    }
    if (value.nGAPCause !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => _encode_NGAPCauseInt, $.BER)(value.nGAPCause, $.BER);
    }
    if (value.fiveGMMCause !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => _encode_FiveGMMCause, $.BER)(value.fiveGMMCause, $.BER);
    }
    if (value.pCCRuleIDs !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 14, () => _encode_PCCRuleIDSet, $.BER)(value.pCCRuleIDs, $.BER);
    }
    if (value.ePSPDNConnectionRelease !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 15, () => _encode_EPSPDNConnectionRelease, $.BER)(value.ePSPDNConnectionRelease, $.BER);
    }
    if (value.alternativeNSSAI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 16, () => _encode_AlternativeNSSAIList, $.BER)(value.alternativeNSSAI, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_SMFPDUSessionRelease(value, elGetter);
}


/* eslint-enable */
