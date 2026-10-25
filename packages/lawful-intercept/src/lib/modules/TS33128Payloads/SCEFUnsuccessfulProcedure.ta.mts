/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SCEFFailureCause, _decode_SCEFFailureCause, _encode_SCEFFailureCause, _enum_for_SCEFFailureCause } from "../TS33128Payloads/SCEFFailureCause.ta.mjs";
// export { SCEFFailureCause, _enum_for_SCEFFailureCause, SCEFFailureCause_userUnknown /* IMPORTED_LONG_ENUMERATION_ITEM */, userUnknown /* IMPORTED_SHORT_ENUMERATION_ITEM */, SCEFFailureCause_niddConfigurationNotAvailable /* IMPORTED_LONG_ENUMERATION_ITEM */, niddConfigurationNotAvailable /* IMPORTED_SHORT_ENUMERATION_ITEM */, SCEFFailureCause_invalidEPSBearer /* IMPORTED_LONG_ENUMERATION_ITEM */, invalidEPSBearer /* IMPORTED_SHORT_ENUMERATION_ITEM */, SCEFFailureCause_operationNotAllowed /* IMPORTED_LONG_ENUMERATION_ITEM */, operationNotAllowed /* IMPORTED_SHORT_ENUMERATION_ITEM */, SCEFFailureCause_portNotFree /* IMPORTED_LONG_ENUMERATION_ITEM */, portNotFree /* IMPORTED_SHORT_ENUMERATION_ITEM */, SCEFFailureCause_portNotAssociatedWithSpecifiedApplication /* IMPORTED_LONG_ENUMERATION_ITEM */, portNotAssociatedWithSpecifiedApplication /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_SCEFFailureCause, _encode_SCEFFailureCause } from "../TS33128Payloads/SCEFFailureCause.ta.mjs";
import { type IMSI, _decode_IMSI, _encode_IMSI } from "../TS33128Payloads/IMSI.ta.mjs";
// export { IMSI, _decode_IMSI, _encode_IMSI } from "../TS33128Payloads/IMSI.ta.mjs";
import { type MSISDN, _decode_MSISDN, _encode_MSISDN } from "../TS33128Payloads/MSISDN.ta.mjs";
// export { MSISDN, _decode_MSISDN, _encode_MSISDN } from "../TS33128Payloads/MSISDN.ta.mjs";
import { type NAI, _decode_NAI, _encode_NAI } from "../TS33128Payloads/NAI.ta.mjs";
// export { NAI, _decode_NAI, _encode_NAI } from "../TS33128Payloads/NAI.ta.mjs";
import { type EPSBearerID, _decode_EPSBearerID, _encode_EPSBearerID } from "../TS33128Payloads/EPSBearerID.ta.mjs";
// export { EPSBearerID, _decode_EPSBearerID, _encode_EPSBearerID } from "../TS33128Payloads/EPSBearerID.ta.mjs";
import { type APN, _decode_APN, _encode_APN } from "../TS33128Payloads/APN.ta.mjs";
// export { APN, _decode_APN, _encode_APN } from "../TS33128Payloads/APN.ta.mjs";
import { type RDSPortNumber, _decode_RDSPortNumber, _encode_RDSPortNumber } from "../TS33128Payloads/RDSPortNumber.ta.mjs";
// export { RDSPortNumber, _decode_RDSPortNumber, _encode_RDSPortNumber } from "../TS33128Payloads/RDSPortNumber.ta.mjs";
import { type ApplicationID, _decode_ApplicationID, _encode_ApplicationID } from "../TS33128Payloads/ApplicationID.ta.mjs";
// export { ApplicationID, _decode_ApplicationID, _encode_ApplicationID } from "../TS33128Payloads/ApplicationID.ta.mjs";
import { type SCSASID, _decode_SCSASID, _encode_SCSASID } from "../TS33128Payloads/SCSASID.ta.mjs";
// export { SCSASID, _decode_SCSASID, _encode_SCSASID } from "../TS33128Payloads/SCSASID.ta.mjs";


/**
 * @summary SCEFUnsuccessfulProcedure
 * @description
 * 
 * The IRI-POI in the SCEF/IWK-SCEF shall generate an xIRI containing an
 * SCEFUnsuccessfulProcedure record when the IRI-POI present in the
 * SCEF/IWK-SCEF detects an unsuccessful procedure or error condition for a
 * target UE matching one of the target identifiers provided via LI_X1.
 *
 * Accordingly, the IRI-POI in the SCEF/IWK-SCEF generates the xIRI when any of
 * the following events is detected (see TS 29.128 [62] clause 6.3.3 and TS
 * 24.250 [61] clause 5.4.2.6):
 *
 * - SCEF sends a T6a Connection Management Answer with Experimental-Result AVP
 *   set to DIAMETER_ERROR_USER_UNKNOWN.
 *
 * - SCEF sends a T6a Connection Management Answer with Experimental-Result AVP
 *   set to DIAMETER_ERROR_OPERATION_NOT_ALLOWED when Action AVP of the T6a
 *   Connection Management Request received by the SCEF is not set to
 *   CONNECTION_ESTABLISHMENT, CONNECTION_UPDATE or CONNECTION_ RELEASE.
 *
 * - SCEF sends a T6a Connection Management Answer with Experimental-Result AVP
 *   set to DIAMETER_ERROR_NIDD_CONFIGURATION_NOT_AVAILABLE when Action AVP of
 *   the T6a Connection Management Request received by the SCEF is set to
 *   CONNECTION_ESTABLISHMENT and the NIDD configuration for the target UE does
 *   not exist or fails at SCEF.
 *
 * - SCEF sends a T6a Connection Management Answer with Experimental-Result AVP
 *   set to DIAMETER_ERROR_INVALID_EPS_BEARER when Action AVP of the T6a
 *   Connection Management Request received by the SCEF is set to
 *   CONNECTION_UPDATE or CONNECTION_RELEASE and the EPS Bearer Identity does
 *   not exist.
 *
 * - SCEF returns a RDS MANAGE PORT Response to a UE with a "Status" field set
 *   to "Port not free" in response to a RDS MANAGE PORT command sent by UE with
 *   an "Action" field set to "Reserve port".
 *
 * - SCEF receives a RDS MANAGE PORT Response from a UE with a "Status" field
 *   set to "Port not free" in response to a RDS MANAGE PORT command sent by
 *   SCEF with an "Action" field set to "Reserve port".
 *
 * - SCEF returns a RDS MANAGE PORT Response to a UE with a "Status" field set
 *   to "Port not associated with specified application" in response to a RDS
 *   MANAGE PORT command sent by UE with an "Action" field set to "Release
 *   port".
 *
 * - SCEF receives a RDS MANAGE PORT Response from a UE with a "Status" field
 *   set to "Port not associated with specified application" in response to a
 *   RDS MANAGE PORT command sent by SCEF with an "Action" field set to "Release
 *   port".
 *
 * NOTE: If the APN is not available, the placeholder value ".unknown". shall be
 * used.
 *
 * Table 7.8.2.3-1 gives the LI_HI2 IRI message type for this record as REPORT.
 *
 * 3GPP TS 33.128, clause 7.8.2.1.5.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SCEFUnsuccessfulProcedure ::= SEQUENCE
 * {
 *     failureCause                 [1] SCEFFailureCause,
 *     iMSI                         [2] IMSI OPTIONAL,
 *     mSISDN                       [3] MSISDN OPTIONAL,
 *     externalIdentifier           [4] NAI OPTIONAL,
 *     ePSBearerID                  [5] EPSBearerID,
 *     aPN                          [6] APN,
 *     rDSDestinationPortNumber     [7] RDSPortNumber OPTIONAL,
 *     applicationID                [8] ApplicationID OPTIONAL,
 *     sCSASID                      [9] SCSASID
 * }
 * ```
 * 
 * @class
 */
export
class SCEFUnsuccessfulProcedure {
    /**
     * @summary `failureCause`.
     * @description
     *
     * Cause of unsuccessful procedure.
     *
     * 3GPP TS 33.128, clause 7.8.2.1.5.
     *
     * @public
     * @readonly
     */
    readonly failureCause: SCEFFailureCause;
    /**
     * @summary `iMSI`.
     * @description
     *
     * IMSI associated with the Non-IP PDN Connection of the target UE (e.g. as
     * provided by the MME in the associated Connection Management Request).
     *
     * 3GPP TS 33.128, clause 7.8.2.1.5.
     *
     * @public
     * @readonly
     */
    readonly iMSI: OPTIONAL<IMSI>;
    /**
     * @summary `mSISDN`.
     * @description
     *
     * MSISDN associated with the PDN Connection if available.
     *
     * 3GPP TS 33.128, clause 7.8.2.1.5.
     *
     * @public
     * @readonly
     */
    readonly mSISDN: OPTIONAL<MSISDN>;
    /**
     * @summary `externalIdentifier`.
     * @description
     *
     * External Identifier associated with the PDN Connection if available,
     * defined as NAI in ASN.1.
     *
     * 3GPP TS 33.128, clause 7.8.2.1.5.
     *
     * @public
     * @readonly
     */
    readonly externalIdentifier: OPTIONAL<NAI>;
    /**
     * @summary `ePSBearerID`.
     * @description
     *
     * Identity of the EPS bearer that MME allocated to the Non-IP PDN
     * connection.
     *
     * 3GPP TS 33.128, clause 7.8.2.1.5.
     *
     * @public
     * @readonly
     */
    readonly ePSBearerID: EPSBearerID;
    /**
     * @summary `aPN`.
     * @description
     *
     * Access Point Name associated with the target traffic. Shall be given in
     * dotted-label presentation format as described in TS 23.003 [19] clause
     * 9.1 (see NOTE). NOTE: If the APN is not available, the placeholder value
     * ".unknown". shall be used.
     *
     * 3GPP TS 33.128, clause 7.8.2.1.5.
     *
     * @public
     * @readonly
     */
    readonly aPN: APN;
    /**
     * @summary `rDSDestinationPortNumber`.
     * @public
     * @readonly
     */
    readonly rDSDestinationPortNumber: OPTIONAL<RDSPortNumber>;
    /**
     * @summary `applicationID`.
     * @description
     *
     * Application identifier associated with the RDS port number.
     *
     * 3GPP TS 33.128, clause 7.8.2.1.5.
     *
     * @public
     * @readonly
     */
    readonly applicationID: OPTIONAL<ApplicationID>;
    /**
     * @summary `sCSASID`.
     * @description
     *
     * SCS/AS Identifier. If the SCS/AS Identifier is not available, the
     * placeholder value "Unknown" shall be used.
     *
     * 3GPP TS 33.128, clause 7.8.2.1.5.
     *
     * @public
     * @readonly
     */
    readonly sCSASID: SCSASID;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        failureCause: SCEFFailureCause,
        iMSI: OPTIONAL<IMSI>,
        mSISDN: OPTIONAL<MSISDN>,
        externalIdentifier: OPTIONAL<NAI>,
        ePSBearerID: EPSBearerID,
        aPN: APN,
        rDSDestinationPortNumber: OPTIONAL<RDSPortNumber>,
        applicationID: OPTIONAL<ApplicationID>,
        sCSASID: SCSASID,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.failureCause = failureCause;
        this.iMSI = iMSI;
        this.mSISDN = mSISDN;
        this.externalIdentifier = externalIdentifier;
        this.ePSBearerID = ePSBearerID;
        this.aPN = aPN;
        this.rDSDestinationPortNumber = rDSDestinationPortNumber;
        this.applicationID = applicationID;
        this.sCSASID = sCSASID;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a SCEFUnsuccessfulProcedure
     * @description
     * 
     * This takes an `object` and converts it to a `SCEFUnsuccessfulProcedure`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SCEFUnsuccessfulProcedure`.
     * @returns {SCEFUnsuccessfulProcedure}
     */
    public static _from_object (_o: { [_K in keyof (SCEFUnsuccessfulProcedure)]: (SCEFUnsuccessfulProcedure)[_K] }): SCEFUnsuccessfulProcedure {
        return new SCEFUnsuccessfulProcedure(_o.failureCause, _o.iMSI, _o.mSISDN, _o.externalIdentifier, _o.ePSBearerID, _o.aPN, _o.rDSDestinationPortNumber, _o.applicationID, _o.sCSASID, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `failureCause`
         * @public
         * @static
         */

    public static _enum_for_failureCause = _enum_for_SCEFFailureCause;
}

/**
 * @summary The Leading Root Component Types of SCEFUnsuccessfulProcedure
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SCEFUnsuccessfulProcedure: $.ComponentSpec[] = [
    new $.ComponentSpec("failureCause", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("iMSI", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("mSISDN", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("externalIdentifier", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("ePSBearerID", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("aPN", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("rDSDestinationPortNumber", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("applicationID", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("sCSASID", false, $.hasTag(_TagClass.context, 9))
];

/**
 * @summary The Trailing Root Component Types of SCEFUnsuccessfulProcedure
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SCEFUnsuccessfulProcedure: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SCEFUnsuccessfulProcedure
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SCEFUnsuccessfulProcedure: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SCEFUnsuccessfulProcedure: $.ASN1Decoder<SCEFUnsuccessfulProcedure> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SCEFUnsuccessfulProcedure
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SCEFUnsuccessfulProcedure (el: _Element): SCEFUnsuccessfulProcedure {
    if (!_cached_decoder_for_SCEFUnsuccessfulProcedure) { _cached_decoder_for_SCEFUnsuccessfulProcedure = function (el: _Element): SCEFUnsuccessfulProcedure {
    let failureCause!: SCEFFailureCause;
    let iMSI: OPTIONAL<IMSI>;
    let mSISDN: OPTIONAL<MSISDN>;
    let externalIdentifier: OPTIONAL<NAI>;
    let ePSBearerID!: EPSBearerID;
    let aPN!: APN;
    let rDSDestinationPortNumber: OPTIONAL<RDSPortNumber>;
    let applicationID: OPTIONAL<ApplicationID>;
    let sCSASID!: SCSASID;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "failureCause": (_el: _Element): void => { failureCause = $._decode_implicit<SCEFFailureCause>(() => _decode_SCEFFailureCause)(_el); },
        "iMSI": (_el: _Element): void => { iMSI = $._decode_implicit<IMSI>(() => _decode_IMSI)(_el); },
        "mSISDN": (_el: _Element): void => { mSISDN = $._decode_implicit<MSISDN>(() => _decode_MSISDN)(_el); },
        "externalIdentifier": (_el: _Element): void => { externalIdentifier = $._decode_implicit<NAI>(() => _decode_NAI)(_el); },
        "ePSBearerID": (_el: _Element): void => { ePSBearerID = $._decode_implicit<EPSBearerID>(() => _decode_EPSBearerID)(_el); },
        "aPN": (_el: _Element): void => { aPN = $._decode_implicit<APN>(() => _decode_APN)(_el); },
        "rDSDestinationPortNumber": (_el: _Element): void => { rDSDestinationPortNumber = $._decode_implicit<RDSPortNumber>(() => _decode_RDSPortNumber)(_el); },
        "applicationID": (_el: _Element): void => { applicationID = $._decode_implicit<ApplicationID>(() => _decode_ApplicationID)(_el); },
        "sCSASID": (_el: _Element): void => { sCSASID = $._decode_implicit<SCSASID>(() => _decode_SCSASID)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SCEFUnsuccessfulProcedure,
        _extension_additions_list_spec_for_SCEFUnsuccessfulProcedure,
        _root_component_type_list_2_spec_for_SCEFUnsuccessfulProcedure,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new SCEFUnsuccessfulProcedure(
        failureCause,
        iMSI,
        mSISDN,
        externalIdentifier,
        ePSBearerID,
        aPN,
        rDSDestinationPortNumber,
        applicationID,
        sCSASID,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_SCEFUnsuccessfulProcedure(el);
}

let _cached_encoder_for_SCEFUnsuccessfulProcedure: $.ASN1Encoder<SCEFUnsuccessfulProcedure> | null = null;

/**
 * @summary Encodes a(n) SCEFUnsuccessfulProcedure into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SCEFUnsuccessfulProcedure, encoded as an ASN.1 Element.
 */
export
function _encode_SCEFUnsuccessfulProcedure (value: SCEFUnsuccessfulProcedure, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SCEFUnsuccessfulProcedure) { _cached_encoder_for_SCEFUnsuccessfulProcedure = function (value: SCEFUnsuccessfulProcedure, elGetter: $.ASN1Encoder<SCEFUnsuccessfulProcedure>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(9 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_SCEFFailureCause, $.BER)(value.failureCause, $.BER);
    if (value.iMSI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_IMSI, $.BER)(value.iMSI, $.BER);
    }
    if (value.mSISDN !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_MSISDN, $.BER)(value.mSISDN, $.BER);
    }
    if (value.externalIdentifier !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_NAI, $.BER)(value.externalIdentifier, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => _encode_EPSBearerID, $.BER)(value.ePSBearerID, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => _encode_APN, $.BER)(value.aPN, $.BER);
    if (value.rDSDestinationPortNumber !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => _encode_RDSPortNumber, $.BER)(value.rDSDestinationPortNumber, $.BER);
    }
    if (value.applicationID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => _encode_ApplicationID, $.BER)(value.applicationID, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 9, () => _encode_SCSASID, $.BER)(value.sCSASID, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_SCEFUnsuccessfulProcedure(value, elGetter);
}


/* eslint-enable */
