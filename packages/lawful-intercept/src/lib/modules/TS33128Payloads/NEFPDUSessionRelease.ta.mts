/* eslint-disable */
import {
    type INTEGER,
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SUPI, _decode_SUPI, _encode_SUPI } from "../TS33128Payloads/SUPI.ta.mjs";
// export { SUPI, _decode_SUPI, _encode_SUPI } from "../TS33128Payloads/SUPI.ta.mjs";
import { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
// export { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
import { PDUSessionID, _decode_PDUSessionID, _encode_PDUSessionID } from "../TS33128Payloads/PDUSessionID.ta.mjs";
// export { PDUSessionID, _decode_PDUSessionID, _encode_PDUSessionID } from "../TS33128Payloads/PDUSessionID.ta.mjs";
import { Timestamp, _decode_Timestamp, _encode_Timestamp } from "../TS33128Payloads/Timestamp.ta.mjs";
// export { Timestamp, _decode_Timestamp, _encode_Timestamp } from "../TS33128Payloads/Timestamp.ta.mjs";
import { NEFReleaseCause, _decode_NEFReleaseCause, _encode_NEFReleaseCause, _enum_for_NEFReleaseCause } from "../TS33128Payloads/NEFReleaseCause.ta.mjs";
// export { NEFReleaseCause, _enum_for_NEFReleaseCause, NEFReleaseCause_sMFRelease /* IMPORTED_LONG_ENUMERATION_ITEM */, sMFRelease /* IMPORTED_SHORT_ENUMERATION_ITEM */, NEFReleaseCause_dNRelease /* IMPORTED_LONG_ENUMERATION_ITEM */, dNRelease /* IMPORTED_SHORT_ENUMERATION_ITEM */, NEFReleaseCause_uDMRelease /* IMPORTED_LONG_ENUMERATION_ITEM */, uDMRelease /* IMPORTED_SHORT_ENUMERATION_ITEM */, NEFReleaseCause_cHFRelease /* IMPORTED_LONG_ENUMERATION_ITEM */, cHFRelease /* IMPORTED_SHORT_ENUMERATION_ITEM */, NEFReleaseCause_localConfigurationPolicy /* IMPORTED_LONG_ENUMERATION_ITEM */, localConfigurationPolicy /* IMPORTED_SHORT_ENUMERATION_ITEM */, NEFReleaseCause_unknownCause /* IMPORTED_LONG_ENUMERATION_ITEM */, unknownCause /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_NEFReleaseCause, _encode_NEFReleaseCause } from "../TS33128Payloads/NEFReleaseCause.ta.mjs";


/**
 * @summary NEFPDUSessionRelease
 * @description
 * 
 * The IRI-POI in the NEF shall generate an xIRI containing an
 * NEFPDUSessionRelease record when the IRI-POI present in the NEF detects that
 * an unstructured PDU session using NEF related to the target UE needs to be
 * released. The IRI-POI present in the NEF shall generate the xIRI for the
 * following events:
 *
 * - NEF notifies the SMF that the SMF-NEF Connection for NIDD via NEF is no
 *   longer valid using Nnef_SMContext_DeleteNotify service operation when NEF
 *   receives a notification from the UDM that the NIDD authorization has ended.
 *   NEF releases the SM Context for NIDD on NEF as described in TS 29.541 [57]
 *   clause 5.2.2.4. This corresponds to NEF Initiated SMF-NEF Connection
 *   Release procedure.
 *
 * - NEF returns Nnef_SMContext_Delete Response towards SMF confirming release
 *   of the SMF-NEF session for the target UE. In this scenario, SMF releases
 *   the SM Context for NIDD on NEF as specified in TS 29.541 [57] clause
 *   5.2.2.3).
 *
 * Table 7.7.2.3-1 gives the LI_HI2 IRI message type for this record as END.
 *
 * 3GPP TS 33.128, clause 7.7.2.1.4.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NEFPDUSessionRelease ::= SEQUENCE
 * {
 *     sUPI                   [1] SUPI,
 *     gPSI                   [2] GPSI,
 *     pDUSessionID           [3] PDUSessionID,
 *     timeOfFirstPacket      [4] Timestamp OPTIONAL,
 *     timeOfLastPacket       [5] Timestamp OPTIONAL,
 *     uplinkVolume           [6] INTEGER OPTIONAL,
 *     downlinkVolume         [7] INTEGER OPTIONAL,
 *     releaseCause           [8] NEFReleaseCause
 * }
 * ```
 * 
 * @class
 */
export
class NEFPDUSessionRelease {
    /**
     * @summary `sUPI`.
     * @description
     *
     * SUPI associated with the PDU session.
     *
     * 3GPP TS 33.128, clause 7.7.2.1.4.
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
     * 3GPP TS 33.128, clause 7.7.2.1.4.
     *
     * @public
     * @readonly
     */
    readonly gPSI: GPSI;
    /**
     * @summary `pDUSessionID`.
     * @description
     *
     * PDU Session ID as assigned by the AMF.
     *
     * 3GPP TS 33.128, clause 7.7.2.1.4.
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
     * 3GPP TS 33.128, clause 7.7.2.1.4.
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
     * 3GPP TS 33.128, clause 7.7.2.1.4.
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
     * 3GPP TS 33.128, clause 7.7.2.1.4.
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
     * 3GPP TS 33.128, clause 7.7.2.1.4.
     *
     * @public
     * @readonly
     */
    readonly downlinkVolume: OPTIONAL<INTEGER>;
    /**
     * @summary `releaseCause`.
     * @description
     *
     * Cause of PDU Session Release.
     *
     * 3GPP TS 33.128, clause 7.7.2.1.4.
     *
     * @public
     * @readonly
     */
    readonly releaseCause: NEFReleaseCause;
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
        timeOfFirstPacket: OPTIONAL<Timestamp>,
        timeOfLastPacket: OPTIONAL<Timestamp>,
        uplinkVolume: OPTIONAL<INTEGER>,
        downlinkVolume: OPTIONAL<INTEGER>,
        releaseCause: NEFReleaseCause,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.sUPI = sUPI;
        this.gPSI = gPSI;
        this.pDUSessionID = pDUSessionID;
        this.timeOfFirstPacket = timeOfFirstPacket;
        this.timeOfLastPacket = timeOfLastPacket;
        this.uplinkVolume = uplinkVolume;
        this.downlinkVolume = downlinkVolume;
        this.releaseCause = releaseCause;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a NEFPDUSessionRelease
     * @description
     * 
     * This takes an `object` and converts it to a `NEFPDUSessionRelease`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NEFPDUSessionRelease`.
     * @returns {NEFPDUSessionRelease}
     */
    public static _from_object (_o: { [_K in keyof (NEFPDUSessionRelease)]: (NEFPDUSessionRelease)[_K] }): NEFPDUSessionRelease {
        return new NEFPDUSessionRelease(_o.sUPI, _o.gPSI, _o.pDUSessionID, _o.timeOfFirstPacket, _o.timeOfLastPacket, _o.uplinkVolume, _o.downlinkVolume, _o.releaseCause, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `releaseCause`
         * @public
         * @static
         */

    public static _enum_for_releaseCause = _enum_for_NEFReleaseCause;
}

/**
 * @summary The Leading Root Component Types of NEFPDUSessionRelease
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NEFPDUSessionRelease: $.ComponentSpec[] = [
    new $.ComponentSpec("sUPI", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("gPSI", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("pDUSessionID", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("timeOfFirstPacket", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("timeOfLastPacket", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("uplinkVolume", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("downlinkVolume", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("releaseCause", false, $.hasTag(_TagClass.context, 8))
];

/**
 * @summary The Trailing Root Component Types of NEFPDUSessionRelease
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NEFPDUSessionRelease: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NEFPDUSessionRelease
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NEFPDUSessionRelease: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_NEFPDUSessionRelease: $.ASN1Decoder<NEFPDUSessionRelease> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NEFPDUSessionRelease
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NEFPDUSessionRelease (el: _Element): NEFPDUSessionRelease {
    if (!_cached_decoder_for_NEFPDUSessionRelease) { _cached_decoder_for_NEFPDUSessionRelease = function (el: _Element): NEFPDUSessionRelease {
    let sUPI!: SUPI;
    let gPSI!: GPSI;
    let pDUSessionID!: PDUSessionID;
    let timeOfFirstPacket: OPTIONAL<Timestamp>;
    let timeOfLastPacket: OPTIONAL<Timestamp>;
    let uplinkVolume: OPTIONAL<INTEGER>;
    let downlinkVolume: OPTIONAL<INTEGER>;
    let releaseCause!: NEFReleaseCause;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "sUPI": (_el: _Element): void => { sUPI = $._decode_explicit<SUPI>(() => _decode_SUPI)(_el); },
        "gPSI": (_el: _Element): void => { gPSI = $._decode_explicit<GPSI>(() => _decode_GPSI)(_el); },
        "pDUSessionID": (_el: _Element): void => { pDUSessionID = $._decode_implicit<PDUSessionID>(() => _decode_PDUSessionID)(_el); },
        "timeOfFirstPacket": (_el: _Element): void => { timeOfFirstPacket = $._decode_implicit<Timestamp>(() => _decode_Timestamp)(_el); },
        "timeOfLastPacket": (_el: _Element): void => { timeOfLastPacket = $._decode_implicit<Timestamp>(() => _decode_Timestamp)(_el); },
        "uplinkVolume": (_el: _Element): void => { uplinkVolume = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "downlinkVolume": (_el: _Element): void => { downlinkVolume = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "releaseCause": (_el: _Element): void => { releaseCause = $._decode_implicit<NEFReleaseCause>(() => _decode_NEFReleaseCause)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_NEFPDUSessionRelease,
        _extension_additions_list_spec_for_NEFPDUSessionRelease,
        _root_component_type_list_2_spec_for_NEFPDUSessionRelease,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new NEFPDUSessionRelease(
        sUPI,
        gPSI,
        pDUSessionID,
        timeOfFirstPacket,
        timeOfLastPacket,
        uplinkVolume,
        downlinkVolume,
        releaseCause,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_NEFPDUSessionRelease(el);
}

let _cached_encoder_for_NEFPDUSessionRelease: $.ASN1Encoder<NEFPDUSessionRelease> | null = null;

/**
 * @summary Encodes a(n) NEFPDUSessionRelease into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NEFPDUSessionRelease, encoded as an ASN.1 Element.
 */
export
function _encode_NEFPDUSessionRelease (value: NEFPDUSessionRelease, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NEFPDUSessionRelease) { _cached_encoder_for_NEFPDUSessionRelease = function (value: NEFPDUSessionRelease, elGetter: $.ASN1Encoder<NEFPDUSessionRelease>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(8 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_SUPI, $.BER)(value.sUPI, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_GPSI, $.BER)(value.gPSI, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_PDUSessionID, $.BER)(value.pDUSessionID, $.BER);
    if (value.timeOfFirstPacket !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_Timestamp, $.BER)(value.timeOfFirstPacket, $.BER);
    }
    if (value.timeOfLastPacket !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_Timestamp, $.BER)(value.timeOfLastPacket, $.BER);
    }
    if (value.uplinkVolume !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeInteger, $.BER)(value.uplinkVolume, $.BER);
    }
    if (value.downlinkVolume !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeInteger, $.BER)(value.downlinkVolume, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 8, () => _encode_NEFReleaseCause, $.BER)(value.releaseCause, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_NEFPDUSessionRelease(value, elGetter);
}


/* eslint-enable */
