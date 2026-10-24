/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IMSI, _decode_IMSI, _encode_IMSI } from "../TS33128Payloads/IMSI.ta.mjs";
// export { IMSI, _decode_IMSI, _encode_IMSI } from "../TS33128Payloads/IMSI.ta.mjs";
import { IMEI, _decode_IMEI, _encode_IMEI } from "../TS33128Payloads/IMEI.ta.mjs";
// export { IMEI, _decode_IMEI, _encode_IMEI } from "../TS33128Payloads/IMEI.ta.mjs";
import { EPSBearerID, _decode_EPSBearerID, _encode_EPSBearerID } from "../TS33128Payloads/EPSBearerID.ta.mjs";
// export { EPSBearerID, _decode_EPSBearerID, _encode_EPSBearerID } from "../TS33128Payloads/EPSBearerID.ta.mjs";
import { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
// export { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
import { APN, _decode_APN, _encode_APN } from "../TS33128Payloads/APN.ta.mjs";
// export { APN, _decode_APN, _encode_APN } from "../TS33128Payloads/APN.ta.mjs";
import { IPAddress, _decode_IPAddress, _encode_IPAddress } from "../TS33128Payloads/IPAddress.ta.mjs";
// export { IPAddress, _decode_IPAddress, _encode_IPAddress } from "../TS33128Payloads/IPAddress.ta.mjs";
import { S8HRMessageCause, _decode_S8HRMessageCause, _encode_S8HRMessageCause, _enum_for_S8HRMessageCause } from "../TS33128Payloads/S8HRMessageCause.ta.mjs";
// export { S8HRMessageCause, _enum_for_S8HRMessageCause, S8HRMessageCause_bearerActivated /* IMPORTED_LONG_ENUMERATION_ITEM */, bearerActivated /* IMPORTED_SHORT_ENUMERATION_ITEM */, S8HRMessageCause_bearerModified /* IMPORTED_LONG_ENUMERATION_ITEM */, bearerModified /* IMPORTED_SHORT_ENUMERATION_ITEM */, S8HRMessageCause_bearerDeleted /* IMPORTED_LONG_ENUMERATION_ITEM */, bearerDeleted /* IMPORTED_SHORT_ENUMERATION_ITEM */, S8HRMessageCause_pDNDisconnected /* IMPORTED_LONG_ENUMERATION_ITEM */, pDNDisconnected /* IMPORTED_SHORT_ENUMERATION_ITEM */, S8HRMessageCause_updatedLocationAvailable /* IMPORTED_LONG_ENUMERATION_ITEM */, updatedLocationAvailable /* IMPORTED_SHORT_ENUMERATION_ITEM */, S8HRMessageCause_sGWChanged /* IMPORTED_LONG_ENUMERATION_ITEM */, sGWChanged /* IMPORTED_SHORT_ENUMERATION_ITEM */, S8HRMessageCause_other /* IMPORTED_LONG_ENUMERATION_ITEM */, other /* IMPORTED_SHORT_ENUMERATION_ITEM */, S8HRMessageCause_hRLIEnabled /* IMPORTED_LONG_ENUMERATION_ITEM */, hRLIEnabled /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_S8HRMessageCause, _encode_S8HRMessageCause } from "../TS33128Payloads/S8HRMessageCause.ta.mjs";


/**
 * @summary S8HRBearerInfo
 * @description
 * 
 * The BBIFF-C present in the SGW-C and BBIFF present in the SGW shall generate
 * the following xIRI for the purpose of S8HR LI when the prior conditions
 * defined in clause 7.10.3.3.1 are met:
 *
 * - S8HRBearerInfo.
 *
 * The main purpose of the xIRI is to report the UE location and the SGW/SGW-C
 * identity to the LMISF-IRI. This xIRI is generated for the following scenarios
 * that apply to all inbound roaming UEs with home-routed roaming and using IMS
 * services:
 *
 * - PDN connection is established with the creation of a default bearer for IMS
 *   signalling.
 *
 * - Dedicated bearer is activated for the for IMS media.
 *
 * - Dedicated bearer is updated for IMS media.
 *
 * - Dedicated bearer is deactivated for IMS media.
 *
 * - PDN is disconnected.
 *
 * - SGW-C/SGW relocation.
 *
 * - New UE location due to UE requested or network initiated service request.
 *
 * - New UE location due to hand-over situations including 5GS to EPS handover.
 *
 * - New UE location due to tracking area updates or routing area updates.
 *
 * - HR LI is enabled with an established PDN connection with the creation of a
 *   default bearer.
 *
 * In case the BBIFF-C was provisioned for a specific APN, the xIRI shall be
 * generated only when the provisioned APN is involved.
 *
 * The exact trigger for the xIRI is subject to implementation, however, the
 * following can be used as a general guidance observing the prior conditions
 * listed in clause 7.10.3.3.1:
 *
 * - SGW-C/SGW receives a Create Session Response from the PGW-C/PGW and
 *   forwards the same to the MME as a part of PDN connection establishment
 *   procedures that creates the default bearer used for IMS signalling or as a
 *   part of the handover procedures that results in the SGW-C/SGW relocation or
 *   5GS to EPS relocation.
 *
 * - SGW-C/SGW receives a Create Session Response from the MME and forwards the
 *   same to the PGW-C/PGW as a part of dedicated bearer activation procedure on
 *   a PDN connection used for IMS media.
 *
 * - SGW-C/SGW receives an Update Bearer Response from MME and forwards the same
 *   to the PGW-C/PGW as a part of bearer update procedures with or without the
 *   bearer update QoS.
 *
 * - SGW-C/SGW receives a Delete Bearer Response from MME and forwards the same
 *   to the PGW-C/PGW as a part of bearer deactivation procedure.
 *
 * - SGW-C/SGW receives a Delete Session Request from the MME and forwards the
 *   same to the PGW-C/PGW as a part of PDN disconnection procedures. The
 *   procedures potentially have the last known UE location.
 *
 * - SGW-C/SGW receives a Create Session Request from the MME and sends a Modify
 *   Bearer Request to the PGW-C/PGW as a part of tracking area/routing area
 *   update procedures with a change of SGW-C/SGW. The procedures potentially
 *   have a new UE location.
 *
 * - SGW-C/SGW receives a Modify Bearer Request from the MME and sends the same
 *   to the PGW-C/PGW as a part of Service Request handling procedures, or
 *   hand-over procedures, or tracking area/routing area update procedures
 *   without a change in the SGW-C/SGW. The procedures potentially have a new UE
 *   location.
 *
 * - When an ActivateTask is received from the LIPF over LI_X1 (see clause
 *   7.10.3.2.2) to enable the HR LI, the BBIFF-C/BBIFF present in the SGW-C/SGW
 *   detects that a PDN connection with a default bearer used for IMS services
 *   is already established for an inbound roaming UE with home-routed roaming.
 *
 * - NOTE: The sending of xIRI for each already established PDN connection may
 *   result in a significant number of xIRI messages from the BBIFF-C/BBIFF to
 *   the LMISF-IRI.
 *
 * The details of the xIRI S8HRBearerInfo record is defined in table
 * 7.10.3.3.3-1 below.
 *
 * 3GPP TS 33.128, clause 7.10.3.3.3.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * S8HRBearerInfo ::= SEQUENCE
 * {
 *     iMSI                            [1] IMSI,
 *     iMEI                            [2] IMEI OPTIONAL,
 *     bearerID                        [3] EPSBearerID,
 *     linkedBearerID                  [4] EPSBearerID OPTIONAL,
 *     location                        [5] Location OPTIONAL,
 *     aPN                             [6] APN OPTIONAL,
 *     sGWIPAddress                    [7] IPAddress OPTIONAL,
 *     messageCause                    [8] S8HRMessageCause
 * }
 * ```
 * 
 * @class
 */
export
class S8HRBearerInfo {
    /**
     * @summary `iMSI`.
     * @description
     *
     * IMSI associated with the PDN connection on which a bearer is created.
     *
     * 3GPP TS 33.128, clause 7.10.3.3.3.
     *
     * @public
     * @readonly
     */
    readonly iMSI: IMSI;
    /**
     * @summary `iMEI`.
     * @description
     *
     * IMEI associated with the PDN connection on which a bearer is created, if
     * available.
     *
     * 3GPP TS 33.128, clause 7.10.3.3.3.
     *
     * @public
     * @readonly
     */
    readonly iMEI: OPTIONAL<IMEI>;
    /**
     * @summary `bearerID`.
     * @description
     *
     * The identity of the EPS bearer.
     *
     * 3GPP TS 33.128, clause 7.10.3.3.3.
     *
     * @public
     * @readonly
     */
    readonly bearerID: EPSBearerID;
    /**
     * @summary `linkedBearerID`.
     * @description
     *
     * The identity of the default bearer when the bearerID is for dedicated
     * bearer.
     *
     * 3GPP TS 33.128, clause 7.10.3.3.3.
     *
     * @public
     * @readonly
     */
    readonly linkedBearerID: OPTIONAL<EPSBearerID>;
    /**
     * @summary `location`.
     * @description
     *
     * Location information provided by the MME.
     *
     * 3GPP TS 33.128, clause 7.10.3.3.3.
     *
     * @public
     * @readonly
     */
    readonly location: OPTIONAL<Location>;
    /**
     * @summary `aPN`.
     * @description
     *
     * Packet Data Network to which the connection is being made, as defined in
     * TS 23.003[19] clause 9A and described in TS 23.401 [50] clause 4.3.2.2.
     * Applicable for PDN connection establishment. Shall be given in
     * dotted-label presentation format as described in TS 23.003 [19] clause
     * 9.1.
     *
     * 3GPP TS 33.128, clause 7.10.3.3.3.
     *
     * @public
     * @readonly
     */
    readonly aPN: OPTIONAL<APN>;
    /**
     * @summary `sGWIPAddress`.
     * @description
     *
     * IP Address of the SGW-C or SGW as applicable and when available.
     *
     * 3GPP TS 33.128, clause 7.10.3.3.3.
     *
     * @public
     * @readonly
     */
    readonly sGWIPAddress: OPTIONAL<IPAddress>;
    /**
     * @summary `messageCause`.
     * @description
     *
     * Included to indicate why the xIRI is generated (see table 7.10.3.3.3-2).
     *
     * 3GPP TS 33.128, clause 7.10.3.3.3.
     *
     * @public
     * @readonly
     */
    readonly messageCause: S8HRMessageCause;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        iMSI: IMSI,
        iMEI: OPTIONAL<IMEI>,
        bearerID: EPSBearerID,
        linkedBearerID: OPTIONAL<EPSBearerID>,
        location: OPTIONAL<Location>,
        aPN: OPTIONAL<APN>,
        sGWIPAddress: OPTIONAL<IPAddress>,
        messageCause: S8HRMessageCause,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.iMSI = iMSI;
        this.iMEI = iMEI;
        this.bearerID = bearerID;
        this.linkedBearerID = linkedBearerID;
        this.location = location;
        this.aPN = aPN;
        this.sGWIPAddress = sGWIPAddress;
        this.messageCause = messageCause;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a S8HRBearerInfo
     * @description
     * 
     * This takes an `object` and converts it to a `S8HRBearerInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `S8HRBearerInfo`.
     * @returns {S8HRBearerInfo}
     */
    public static _from_object (_o: { [_K in keyof (S8HRBearerInfo)]: (S8HRBearerInfo)[_K] }): S8HRBearerInfo {
        return new S8HRBearerInfo(_o.iMSI, _o.iMEI, _o.bearerID, _o.linkedBearerID, _o.location, _o.aPN, _o.sGWIPAddress, _o.messageCause, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `messageCause`
         * @public
         * @static
         */

    public static _enum_for_messageCause = _enum_for_S8HRMessageCause;
}

/**
 * @summary The Leading Root Component Types of S8HRBearerInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_S8HRBearerInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("iMSI", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("iMEI", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("bearerID", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("linkedBearerID", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("location", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("aPN", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("sGWIPAddress", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("messageCause", false, $.hasTag(_TagClass.context, 8))
];

/**
 * @summary The Trailing Root Component Types of S8HRBearerInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_S8HRBearerInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of S8HRBearerInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_S8HRBearerInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_S8HRBearerInfo: $.ASN1Decoder<S8HRBearerInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) S8HRBearerInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_S8HRBearerInfo (el: _Element): S8HRBearerInfo {
    if (!_cached_decoder_for_S8HRBearerInfo) { _cached_decoder_for_S8HRBearerInfo = function (el: _Element): S8HRBearerInfo {
    let iMSI!: IMSI;
    let iMEI: OPTIONAL<IMEI>;
    let bearerID!: EPSBearerID;
    let linkedBearerID: OPTIONAL<EPSBearerID>;
    let location: OPTIONAL<Location>;
    let aPN: OPTIONAL<APN>;
    let sGWIPAddress: OPTIONAL<IPAddress>;
    let messageCause!: S8HRMessageCause;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "iMSI": (_el: _Element): void => { iMSI = $._decode_implicit<IMSI>(() => _decode_IMSI)(_el); },
        "iMEI": (_el: _Element): void => { iMEI = $._decode_implicit<IMEI>(() => _decode_IMEI)(_el); },
        "bearerID": (_el: _Element): void => { bearerID = $._decode_implicit<EPSBearerID>(() => _decode_EPSBearerID)(_el); },
        "linkedBearerID": (_el: _Element): void => { linkedBearerID = $._decode_implicit<EPSBearerID>(() => _decode_EPSBearerID)(_el); },
        "location": (_el: _Element): void => { location = $._decode_implicit<Location>(() => _decode_Location)(_el); },
        "aPN": (_el: _Element): void => { aPN = $._decode_implicit<APN>(() => _decode_APN)(_el); },
        "sGWIPAddress": (_el: _Element): void => { sGWIPAddress = $._decode_explicit<IPAddress>(() => _decode_IPAddress)(_el); },
        "messageCause": (_el: _Element): void => { messageCause = $._decode_implicit<S8HRMessageCause>(() => _decode_S8HRMessageCause)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_S8HRBearerInfo,
        _extension_additions_list_spec_for_S8HRBearerInfo,
        _root_component_type_list_2_spec_for_S8HRBearerInfo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new S8HRBearerInfo(
        iMSI,
        iMEI,
        bearerID,
        linkedBearerID,
        location,
        aPN,
        sGWIPAddress,
        messageCause,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_S8HRBearerInfo(el);
}

let _cached_encoder_for_S8HRBearerInfo: $.ASN1Encoder<S8HRBearerInfo> | null = null;

/**
 * @summary Encodes a(n) S8HRBearerInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The S8HRBearerInfo, encoded as an ASN.1 Element.
 */
export
function _encode_S8HRBearerInfo (value: S8HRBearerInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_S8HRBearerInfo) { _cached_encoder_for_S8HRBearerInfo = function (value: S8HRBearerInfo, elGetter: $.ASN1Encoder<S8HRBearerInfo>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(8 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_IMSI, $.BER)(value.iMSI, $.BER);
    if (value.iMEI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_IMEI, $.BER)(value.iMEI, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_EPSBearerID, $.BER)(value.bearerID, $.BER);
    if (value.linkedBearerID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_EPSBearerID, $.BER)(value.linkedBearerID, $.BER);
    }
    if (value.location !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_Location, $.BER)(value.location, $.BER);
    }
    if (value.aPN !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_APN, $.BER)(value.aPN, $.BER);
    }
    if (value.sGWIPAddress !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 7, () => _encode_IPAddress, $.BER)(value.sGWIPAddress, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 8, () => _encode_S8HRMessageCause, $.BER)(value.messageCause, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_S8HRBearerInfo(value, elGetter);
}


/* eslint-enable */
