/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ESMCause, _decode_ESMCause, _encode_ESMCause } from "../TS33128Payloads/ESMCause.ta.mjs";
// export { ESMCause, _decode_ESMCause, _encode_ESMCause } from "../TS33128Payloads/ESMCause.ta.mjs";
import { Initiator, _decode_Initiator, _encode_Initiator, _enum_for_Initiator } from "../TS33128Payloads/Initiator.ta.mjs";
// export { Initiator, _enum_for_Initiator, Initiator_uE /* IMPORTED_LONG_ENUMERATION_ITEM */, uE /* IMPORTED_SHORT_ENUMERATION_ITEM */, Initiator_network /* IMPORTED_LONG_ENUMERATION_ITEM */, network /* IMPORTED_SHORT_ENUMERATION_ITEM */, Initiator_unknown /* IMPORTED_LONG_ENUMERATION_ITEM */, unknown /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Initiator, _encode_Initiator } from "../TS33128Payloads/Initiator.ta.mjs";
import { EPSSubscriberIDs, _decode_EPSSubscriberIDs, _encode_EPSSubscriberIDs } from "../TS33128Payloads/EPSSubscriberIDs.ta.mjs";
// export { EPSSubscriberIDs, _decode_EPSSubscriberIDs, _encode_EPSSubscriberIDs } from "../TS33128Payloads/EPSSubscriberIDs.ta.mjs";
import { IMSIUnauthenticatedIndication, _decode_IMSIUnauthenticatedIndication, _encode_IMSIUnauthenticatedIndication } from "../TS33128Payloads/IMSIUnauthenticatedIndication.ta.mjs";
// export { IMSIUnauthenticatedIndication, _decode_IMSIUnauthenticatedIndication, _encode_IMSIUnauthenticatedIndication } from "../TS33128Payloads/IMSIUnauthenticatedIndication.ta.mjs";
import { EPSPDNFailedProcedure, _decode_EPSPDNFailedProcedure, _encode_EPSPDNFailedProcedure } from "../TS33128Payloads/EPSPDNFailedProcedure.ta.mjs";
// export { EPSPDNFailedProcedure, _decode_EPSPDNFailedProcedure, _encode_EPSPDNFailedProcedure } from "../TS33128Payloads/EPSPDNFailedProcedure.ta.mjs";


/**
 * @summary EPSPDNUnsuccessfulProcedure
 * @description
 * 
 * The IRI-POI in the SMF+PGW-C shall generate an xIRI containing an
 * SMFStartOfInterceptionWithEstablishedMAPDUSession record (see clause
 * 6.2.3.2.7) when the IRI-POI present in the SMF+PGW-C detects that an MA PDU
 * Session or PDN Connection associated to an MA PDU Session has already been
 * established for the target UE when interception starts. The IRI-POI present
 * in the SMF+PGW-C shall generate the xIRI for the following events:
 *
 * - The SMF+PGW-C has an existing PDN Connection associated to an MA PDU
 *   Session in the target UE context of the SMF+PGW-C (see TS 23.401 [50]
 *   clause 5.7.4).
 *
 * - The SMF+PGW-C has an existing MA PDU Session context or SM Context for the
 *   target UE (see TS 29.502 [16] clause 5.2.2.2 and clause 5.2.2.7).
 *
 * When the SMFStartOfInterceptionWithEstablishedMAPDUSession record (see clause
 * 6.2.3.2.7) is used to report an existing PDN Connection:
 *
 * - The ePSStartOfInterceptionWithEstablishedPDNConnection field shall be
 *   populated with the information in table 6.3.3.2.5-1.
 *
 * - If there is no SUPI associated to the SM context for the target UE, the
 *   SUPI field of the SMFStartOfInterceptionWithEstablishedMAPDUSession record
 *   shall be populated with the value of the IMSI from the target UE context.
 *
 * - If there is no PDU Session ID associated to the context for the PDN
 *   connection, the pDUSessionID field of the
 *   SMFStartOfInterceptionWithEstablishedMAPDUSession record shall be populated
 *   with the EBI of the default bearer for the PDN Connection.
 *
 * - If there is no 5G UP tunnel present in the context associated to the PDN
 *   Connection, the gTPTunnelID field of the
 *   SMFStartOfInterceptionWithEstablishedMAPDUSession record shall be populated
 *   with the F-TEID for the PGW S5 or S8 interface for the default bearer of
 *   the PDN Connection.
 *
 * 6.3.3.2.10 EPS PDN unsuccessful procedure or SMF unsuccessful procedure in
 * interworked EPS/5GS
 *
 * In the case of standalone EPS, the IRI-POI in the SGW/PGW shall generate an
 * xIRI containing an ePSPDNUnsuccessfulProcedure record when the IRI-POI
 * present in the SGW/PGW detects an unsuccessful procedure or error condition
 * for a UE matching one of the target identifiers provided via LI_X1.
 *
 * In the case of interworked EPS/5GS, the IRI-POI in the SMF+PGW-C shall
 * generate an xIRI containing an SMFUnsuccessfulProcedure record (see clause
 * 6.2.3.2.6) when the IRI-POI present in the SMF+PGW-C detects that an
 * unsuccessful procedure or error condition for a UE matching one of the target
 * identifiers provided via LI_X1.single-access PDU Session or PDN Connection
 * has already been established for the target UE when interception starts. The
 * IRI-POI present in the SMF+PGW-C shall generate the xIRI for the following
 * events:
 *
 * - SMF sends a PDU SESSION ESTABLISHMENT REJECT message to the target UE.
 *
 * - SMF sends a PDU SESSION MODIFICATION REJECT message to the target UE.
 *
 * - SMF sends a PDU SESSION RELEASE REJECT message to the target UE.
 *
 * - SMF receives a PDU SESSION MODIFICATION COMMAND REJECT message from the
 *   target UE.
 *
 * - An ongoing SM procedure is aborted at the SMF, due to e.g. a 5GSM STATUS
 *   message sent from or received by the SMF.
 *
 * When the SMFUnsuccessfulProcedure record (see clause 6.2.3.2.6) is used to
 * report an unsuccessful EPS PDN related procedure:
 *
 * - The ePSPDNUnsuccessfulProcedure field shall be populated with the
 *   information in table 6.3.3.2.10-1.
 *
 * - If there is no SUPI associated to the SM context for the target UE, the
 *   SUPI field of the SMFStartOfInterceptionWithEstablishedPDUSession record
 *   shall be populated with the value of the IMSI from the target UE context.
 *
 * - If there is no PDU Session ID associated to the context for the PDN
 *   connection, the pDUSessionID field of the SMFUnsuccessfulProcedure record
 *   shall be populated with the EBI of the default bearer for the PDN
 *   Connection.
 *
 * - If there is no 5G UP tunnel present in the context associated to the PDN
 *   Connection, the gTPTunnelID field of the
 *   SMFStartOfInterceptionWithEstablishedPDUSession record shall be populated
 *   with the F-TEID for the PGW S5 or S8 interface for the default bearer of
 *   the PDN Connection.
 *
 * Table 6.3.3.4.2-1 gives the LI_HI2 IRI message type for this record as
 * REPORT.
 *
 * 3GPP TS 33.128, clause 6.3.3.2.10.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSPDNUnsuccessfulProcedure ::= SEQUENCE
 * {
 *     failureCause        [1] ESMCause,
 *     initiator           [2] Initiator,
 *     ePSSubscriberIDs    [3] EPSSubscriberIDs,
 *     iMSIUnauthenticated [4] IMSIUnauthenticatedIndication OPTIONAL,
 *     failedProcedure     [5] EPSPDNFailedProcedure
 * }
 * ```
 * 
 * @class
 */
export
class EPSPDNUnsuccessfulProcedure {
    /**
     * @summary `failureCause`.
     * @description
     *
     * Provides the value of the ESM cause, see TS 24.301 [50] clause 9.9.4.4.
     * Sent as an integer cause value (see TS 29.274 [87] table 8.4-1). In case
     * the procedure is aborted due to a ESM STATUS message, the ESM cause is
     * the one included in the ESM status message.
     *
     * 3GPP TS 33.128, clause 6.3.3.2.10.
     *
     * @public
     * @readonly
     */
    readonly failureCause: ESMCause;
    /**
     * @summary `initiator`.
     * @description
     *
     * Specifies whether the network (SGW) or the UE is initiating the rejection
     * or indicating the failure.
     *
     * 3GPP TS 33.128, clause 6.3.3.2.10.
     *
     * @public
     * @readonly
     */
    readonly initiator: Initiator;
    /**
     * @summary `ePSSubscriberIDs`.
     * @description
     *
     * EPS Subscriber Identities associated with the PDN connection (e.g. as
     * provided by the MME or SGW in the associated Create Session Request or as
     * associated with the PDN connection in the context known at the NF). The
     * IMSI shall be present except for unauthenticated emergency sessions.
     *
     * 3GPP TS 33.128, clause 6.3.3.2.10.
     *
     * @public
     * @readonly
     */
    readonly ePSSubscriberIDs: EPSSubscriberIDs;
    /**
     * @summary `iMSIUnauthenticated`.
     * @description
     *
     * Shall be present if an IMSI is present in the ePSSubscriberIDs and set to
     * "true" if the IMSI has not been authenticated, or "false" if it has been
     * authenticated.
     *
     * 3GPP TS 33.128, clause 6.3.3.2.10.
     *
     * @public
     * @readonly
     */
    readonly iMSIUnauthenticated: OPTIONAL<IMSIUnauthenticatedIndication>;
    /**
     * @summary `failedProcedure`.
     * @description
     *
     * Contains the record corresponding to the failed procedure. See table
     * 6.3.3.2.10-2.
     *
     * 3GPP TS 33.128, clause 6.3.3.2.10.
     *
     * @public
     * @readonly
     */
    readonly failedProcedure: EPSPDNFailedProcedure;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        failureCause: ESMCause,
        initiator: Initiator,
        ePSSubscriberIDs: EPSSubscriberIDs,
        iMSIUnauthenticated: OPTIONAL<IMSIUnauthenticatedIndication>,
        failedProcedure: EPSPDNFailedProcedure,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.failureCause = failureCause;
        this.initiator = initiator;
        this.ePSSubscriberIDs = ePSSubscriberIDs;
        this.iMSIUnauthenticated = iMSIUnauthenticated;
        this.failedProcedure = failedProcedure;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a EPSPDNUnsuccessfulProcedure
     * @description
     * 
     * This takes an `object` and converts it to a `EPSPDNUnsuccessfulProcedure`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EPSPDNUnsuccessfulProcedure`.
     * @returns {EPSPDNUnsuccessfulProcedure}
     */
    public static _from_object (_o: { [_K in keyof (EPSPDNUnsuccessfulProcedure)]: (EPSPDNUnsuccessfulProcedure)[_K] }): EPSPDNUnsuccessfulProcedure {
        return new EPSPDNUnsuccessfulProcedure(_o.failureCause, _o.initiator, _o.ePSSubscriberIDs, _o.iMSIUnauthenticated, _o.failedProcedure, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `initiator`
         * @public
         * @static
         */

    public static _enum_for_initiator = _enum_for_Initiator;
}

/**
 * @summary The Leading Root Component Types of EPSPDNUnsuccessfulProcedure
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EPSPDNUnsuccessfulProcedure: $.ComponentSpec[] = [
    new $.ComponentSpec("failureCause", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("initiator", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("ePSSubscriberIDs", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("iMSIUnauthenticated", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("failedProcedure", false, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of EPSPDNUnsuccessfulProcedure
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EPSPDNUnsuccessfulProcedure: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EPSPDNUnsuccessfulProcedure
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EPSPDNUnsuccessfulProcedure: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EPSPDNUnsuccessfulProcedure: $.ASN1Decoder<EPSPDNUnsuccessfulProcedure> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EPSPDNUnsuccessfulProcedure
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EPSPDNUnsuccessfulProcedure (el: _Element): EPSPDNUnsuccessfulProcedure {
    if (!_cached_decoder_for_EPSPDNUnsuccessfulProcedure) { _cached_decoder_for_EPSPDNUnsuccessfulProcedure = function (el: _Element): EPSPDNUnsuccessfulProcedure {
    let failureCause!: ESMCause;
    let initiator!: Initiator;
    let ePSSubscriberIDs!: EPSSubscriberIDs;
    let iMSIUnauthenticated: OPTIONAL<IMSIUnauthenticatedIndication>;
    let failedProcedure!: EPSPDNFailedProcedure;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "failureCause": (_el: _Element): void => { failureCause = $._decode_implicit<ESMCause>(() => _decode_ESMCause)(_el); },
        "initiator": (_el: _Element): void => { initiator = $._decode_implicit<Initiator>(() => _decode_Initiator)(_el); },
        "ePSSubscriberIDs": (_el: _Element): void => { ePSSubscriberIDs = $._decode_implicit<EPSSubscriberIDs>(() => _decode_EPSSubscriberIDs)(_el); },
        "iMSIUnauthenticated": (_el: _Element): void => { iMSIUnauthenticated = $._decode_implicit<IMSIUnauthenticatedIndication>(() => _decode_IMSIUnauthenticatedIndication)(_el); },
        "failedProcedure": (_el: _Element): void => { failedProcedure = $._decode_explicit<EPSPDNFailedProcedure>(() => _decode_EPSPDNFailedProcedure)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EPSPDNUnsuccessfulProcedure,
        _extension_additions_list_spec_for_EPSPDNUnsuccessfulProcedure,
        _root_component_type_list_2_spec_for_EPSPDNUnsuccessfulProcedure,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new EPSPDNUnsuccessfulProcedure(
        failureCause,
        initiator,
        ePSSubscriberIDs,
        iMSIUnauthenticated,
        failedProcedure,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_EPSPDNUnsuccessfulProcedure(el);
}

let _cached_encoder_for_EPSPDNUnsuccessfulProcedure: $.ASN1Encoder<EPSPDNUnsuccessfulProcedure> | null = null;

/**
 * @summary Encodes a(n) EPSPDNUnsuccessfulProcedure into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EPSPDNUnsuccessfulProcedure, encoded as an ASN.1 Element.
 */
export
function _encode_EPSPDNUnsuccessfulProcedure (value: EPSPDNUnsuccessfulProcedure, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EPSPDNUnsuccessfulProcedure) { _cached_encoder_for_EPSPDNUnsuccessfulProcedure = function (value: EPSPDNUnsuccessfulProcedure, elGetter: $.ASN1Encoder<EPSPDNUnsuccessfulProcedure>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(5 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_ESMCause, $.BER)(value.failureCause, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_Initiator, $.BER)(value.initiator, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_EPSSubscriberIDs, $.BER)(value.ePSSubscriberIDs, $.BER);
    if (value.iMSIUnauthenticated !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_IMSIUnauthenticatedIndication, $.BER)(value.iMSIUnauthenticated, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 5, () => _encode_EPSPDNFailedProcedure, $.BER)(value.failedProcedure, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_EPSPDNUnsuccessfulProcedure(value, elGetter);
}


/* eslint-enable */
