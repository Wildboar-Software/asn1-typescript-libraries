/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SUPI, _decode_SUPI, _encode_SUPI } from "../TS33128Payloads/SUPI.ta.mjs";
// export { SUPI, _decode_SUPI, _encode_SUPI } from "../TS33128Payloads/SUPI.ta.mjs";
import { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
// export { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
import { PEI, _decode_PEI, _encode_PEI } from "../TS33128Payloads/PEI.ta.mjs";
// export { PEI, _decode_PEI, _encode_PEI } from "../TS33128Payloads/PEI.ta.mjs";
import { PDUSessionID, _decode_PDUSessionID, _encode_PDUSessionID } from "../TS33128Payloads/PDUSessionID.ta.mjs";
// export { PDUSessionID, _decode_PDUSessionID, _encode_PDUSessionID } from "../TS33128Payloads/PDUSessionID.ta.mjs";
import { RemoteUEContext, _decode_RemoteUEContext, _encode_RemoteUEContext } from "../TS33128Payloads/RemoteUEContext.ta.mjs";
// export { RemoteUEContext, _decode_RemoteUEContext, _encode_RemoteUEContext } from "../TS33128Payloads/RemoteUEContext.ta.mjs";
import { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
// export { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";


/**
 * @summary SMFProSeRemoteUEReport
 * @description
 * 
 * The IRI-POI in the SMF shall generate an xIRI containing an
 * SMFProSeRemoteUEReport record when the IRI-POI present in the SMF detects
 * that a target 5G ProSe Remote UE has connected to a 5G ProSe layer-3
 * UE-to-network Relay UE or disconnected from a 5G ProSe layer-3 UE-to-network
 * Relay UE. The IRI-POI present in the SMF shall generate the xIRI for the
 * following events:
 *
 * - For a non-roaming scenario, the SMF (or for a roaming scenario, V-SMF in
 *   the VPLMN for HR or SMF in the VPLMN for LBO) returns a
 *   Nsmf_PDUSession_UpdateSMContext Response in response to a
 *   Nsmf_PDUSession_UpdateSMContext Request received from the AMF including the
 *   n1SmMsg parameter containing the N1 NAS message Remote UE Report related to
 *   a target 5G ProSe Remote UE.
 *
 * Table 6.2.3.7-1 gives the LI_HI2 IRI message type for this record as REPORT.
 *
 * 3GPP TS 33.128, clause 6.2.3.2.9.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMFProSeRemoteUEReport ::= SEQUENCE
 * {
 *     sUPI                        [1] SUPI,
 *     gPSI                        [2] GPSI OPTIONAL,
 *     pEI                         [3] PEI OPTIONAL,
 *     pDUSessionID                [4] PDUSessionID,
 *     remoteUEContextConnected    [5] RemoteUEContext OPTIONAL,
 *     remoteUEContextDisconnected [6] RemoteUEContext OPTIONAL,
 *     location                    [7] Location OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class SMFProSeRemoteUEReport {
    /**
     * @summary `sUPI`.
     * @description
     *
     * Identifies the SUPI of the target 5G ProSe Remote UE connected to or
     * disconnected from a 5G ProSe layer-3 UE-to-network Relay.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.9.
     *
     * @public
     * @readonly
     */
    readonly sUPI: SUPI;
    /**
     * @summary `gPSI`.
     * @description
     *
     * Identifies the GPSI of the target 5G ProSe Remote UE connected to or
     * disconnected from a 5G ProSe layer-3 UE-to-network Relay.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.9.
     *
     * @public
     * @readonly
     */
    readonly gPSI: OPTIONAL<GPSI>;
    /**
     * @summary `pEI`.
     * @description
     *
     * Identifies the PEI of the target 5G ProSe Remote UE connected to or
     * disconnected from a 5G ProSe layer-3 UE-to-network Relay.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.9.
     *
     * @public
     * @readonly
     */
    readonly pEI: OPTIONAL<PEI>;
    /**
     * @summary `pDUSessionID`.
     * @description
     *
     * PDU session of the 5G ProSe layer-3 UE-to-network Relay used by the
     * target 5G ProSe Remote UE connected to the 5G ProSe layer-3 UE-to-network
     * Relay UE or disconnected from the 5G ProSe layer-3 UE-to-network Relay
     * UE.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.9.
     *
     * @public
     * @readonly
     */
    readonly pDUSessionID: PDUSessionID;
    /**
     * @summary `remoteUEContextConnected`.
     * @description
     *
     * Provides newly connected target 5G ProSe Remote UE information. Shall
     * contain the target remote UE context octets if sent in the Remote UE
     * Report message. Defined in TS 24.501 [13] clause 9.11.4.29.2.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.9.
     *
     * @public
     * @readonly
     */
    readonly remoteUEContextConnected: OPTIONAL<RemoteUEContext>;
    /**
     * @summary `remoteUEContextDisconnected`.
     * @description
     *
     * Provides disconnected target 5G ProSe Remote UE information. Shall
     * contain the target remote UE context octets if sent in the Remote UE
     * Report message. Defined in TS 24.501 [13] clause 9.11.4.29.2.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.9.
     *
     * @public
     * @readonly
     */
    readonly remoteUEContextDisconnected: OPTIONAL<RemoteUEContext>;
    /**
     * @summary `location`.
     * @description
     *
     * Location of the target 5G ProSe Remote UE if available. Shall be encoded
     * using the Location.locationInfo.userLocation parameter. If available,
     * other parameters reportable via Location shall be included.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.9.
     *
     * @public
     * @readonly
     */
    readonly location: OPTIONAL<Location>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        sUPI: SUPI,
        gPSI: OPTIONAL<GPSI>,
        pEI: OPTIONAL<PEI>,
        pDUSessionID: PDUSessionID,
        remoteUEContextConnected?: OPTIONAL<RemoteUEContext>,
        remoteUEContextDisconnected?: OPTIONAL<RemoteUEContext>,
        location?: OPTIONAL<Location>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.sUPI = sUPI;
        this.gPSI = gPSI;
        this.pEI = pEI;
        this.pDUSessionID = pDUSessionID;
        this.remoteUEContextConnected = remoteUEContextConnected;
        this.remoteUEContextDisconnected = remoteUEContextDisconnected;
        this.location = location;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a SMFProSeRemoteUEReport
     * @description
     * 
     * This takes an `object` and converts it to a `SMFProSeRemoteUEReport`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SMFProSeRemoteUEReport`.
     * @returns {SMFProSeRemoteUEReport}
     */
    public static _from_object (_o: { [_K in keyof (SMFProSeRemoteUEReport)]: (SMFProSeRemoteUEReport)[_K] }): SMFProSeRemoteUEReport {
        return new SMFProSeRemoteUEReport(_o.sUPI, _o.gPSI, _o.pEI, _o.pDUSessionID, _o.remoteUEContextConnected, _o.remoteUEContextDisconnected, _o.location, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of SMFProSeRemoteUEReport
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SMFProSeRemoteUEReport: $.ComponentSpec[] = [
    new $.ComponentSpec("sUPI", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("gPSI", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("pEI", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("pDUSessionID", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("remoteUEContextConnected", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("remoteUEContextDisconnected", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("location", true, $.hasTag(_TagClass.context, 7))
];

/**
 * @summary The Trailing Root Component Types of SMFProSeRemoteUEReport
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SMFProSeRemoteUEReport: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SMFProSeRemoteUEReport
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SMFProSeRemoteUEReport: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SMFProSeRemoteUEReport: $.ASN1Decoder<SMFProSeRemoteUEReport> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SMFProSeRemoteUEReport
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SMFProSeRemoteUEReport (el: _Element): SMFProSeRemoteUEReport {
    if (!_cached_decoder_for_SMFProSeRemoteUEReport) { _cached_decoder_for_SMFProSeRemoteUEReport = function (el: _Element): SMFProSeRemoteUEReport {
    let sUPI!: SUPI;
    let gPSI: OPTIONAL<GPSI>;
    let pEI: OPTIONAL<PEI>;
    let pDUSessionID!: PDUSessionID;
    let remoteUEContextConnected: OPTIONAL<RemoteUEContext>;
    let remoteUEContextDisconnected: OPTIONAL<RemoteUEContext>;
    let location: OPTIONAL<Location>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "sUPI": (_el: _Element): void => { sUPI = $._decode_explicit<SUPI>(() => _decode_SUPI)(_el); },
        "gPSI": (_el: _Element): void => { gPSI = $._decode_explicit<GPSI>(() => _decode_GPSI)(_el); },
        "pEI": (_el: _Element): void => { pEI = $._decode_explicit<PEI>(() => _decode_PEI)(_el); },
        "pDUSessionID": (_el: _Element): void => { pDUSessionID = $._decode_implicit<PDUSessionID>(() => _decode_PDUSessionID)(_el); },
        "remoteUEContextConnected": (_el: _Element): void => { remoteUEContextConnected = $._decode_implicit<RemoteUEContext>(() => _decode_RemoteUEContext)(_el); },
        "remoteUEContextDisconnected": (_el: _Element): void => { remoteUEContextDisconnected = $._decode_implicit<RemoteUEContext>(() => _decode_RemoteUEContext)(_el); },
        "location": (_el: _Element): void => { location = $._decode_implicit<Location>(() => _decode_Location)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SMFProSeRemoteUEReport,
        _extension_additions_list_spec_for_SMFProSeRemoteUEReport,
        _root_component_type_list_2_spec_for_SMFProSeRemoteUEReport,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new SMFProSeRemoteUEReport(
        sUPI,
        gPSI,
        pEI,
        pDUSessionID,
        remoteUEContextConnected,
        remoteUEContextDisconnected,
        location,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_SMFProSeRemoteUEReport(el);
}

let _cached_encoder_for_SMFProSeRemoteUEReport: $.ASN1Encoder<SMFProSeRemoteUEReport> | null = null;

/**
 * @summary Encodes a(n) SMFProSeRemoteUEReport into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SMFProSeRemoteUEReport, encoded as an ASN.1 Element.
 */
export
function _encode_SMFProSeRemoteUEReport (value: SMFProSeRemoteUEReport, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SMFProSeRemoteUEReport) { _cached_encoder_for_SMFProSeRemoteUEReport = function (value: SMFProSeRemoteUEReport, elGetter: $.ASN1Encoder<SMFProSeRemoteUEReport>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(7 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_SUPI, $.BER)(value.sUPI, $.BER);
    if (value.gPSI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 2, () => _encode_GPSI, $.BER)(value.gPSI, $.BER);
    }
    if (value.pEI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 3, () => _encode_PEI, $.BER)(value.pEI, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_PDUSessionID, $.BER)(value.pDUSessionID, $.BER);
    if (value.remoteUEContextConnected !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_RemoteUEContext, $.BER)(value.remoteUEContextConnected, $.BER);
    }
    if (value.remoteUEContextDisconnected !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_RemoteUEContext, $.BER)(value.remoteUEContextDisconnected, $.BER);
    }
    if (value.location !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => _encode_Location, $.BER)(value.location, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_SMFProSeRemoteUEReport(value, elGetter);
}


/* eslint-enable */
