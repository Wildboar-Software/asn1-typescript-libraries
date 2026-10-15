/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SUPI, _decode_SUPI, _encode_SUPI } from "../TS33128Payloads/SUPI.ta.mjs";
// export { SUPI, _decode_SUPI, _encode_SUPI } from "../TS33128Payloads/SUPI.ta.mjs";
import { SUCI, _decode_SUCI, _encode_SUCI } from "../TS33128Payloads/SUCI.ta.mjs";
// export { SUCI, _decode_SUCI, _encode_SUCI } from "../TS33128Payloads/SUCI.ta.mjs";
import { PEI, _decode_PEI, _encode_PEI } from "../TS33128Payloads/PEI.ta.mjs";
// export { PEI, _decode_PEI, _encode_PEI } from "../TS33128Payloads/PEI.ta.mjs";
import { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
// export { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
import { FiveGGUTI, _decode_FiveGGUTI, _encode_FiveGGUTI } from "../TS33128Payloads/FiveGGUTI.ta.mjs";
// export { FiveGGUTI, _decode_FiveGGUTI, _encode_FiveGGUTI } from "../TS33128Payloads/FiveGGUTI.ta.mjs";
import { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
// export { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
import { SMSOverNASIndicator, _decode_SMSOverNASIndicator, _encode_SMSOverNASIndicator, _enum_for_SMSOverNASIndicator } from "../TS33128Payloads/SMSOverNASIndicator.ta.mjs";
// export { SMSOverNASIndicator, _enum_for_SMSOverNASIndicator, SMSOverNASIndicator_sMSOverNASNotAllowed /* IMPORTED_LONG_ENUMERATION_ITEM */, sMSOverNASNotAllowed /* IMPORTED_SHORT_ENUMERATION_ITEM */, SMSOverNASIndicator_sMSOverNASAllowed /* IMPORTED_LONG_ENUMERATION_ITEM */, sMSOverNASAllowed /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_SMSOverNASIndicator, _encode_SMSOverNASIndicator } from "../TS33128Payloads/SMSOverNASIndicator.ta.mjs";
import { EPS5GGUTI, _decode_EPS5GGUTI, _encode_EPS5GGUTI } from "../TS33128Payloads/EPS5GGUTI.ta.mjs";
// export { EPS5GGUTI, _decode_EPS5GGUTI, _encode_EPS5GGUTI } from "../TS33128Payloads/EPS5GGUTI.ta.mjs";
import { UEAreaIndication, _decode_UEAreaIndication, _encode_UEAreaIndication } from "../TS33128Payloads/UEAreaIndication.ta.mjs";
// export { UEAreaIndication, _decode_UEAreaIndication, _encode_UEAreaIndication } from "../TS33128Payloads/UEAreaIndication.ta.mjs";
import { UserIdentifiers, _decode_UserIdentifiers, _encode_UserIdentifiers } from "../TS33128Payloads/UserIdentifiers.ta.mjs";
// export { UserIdentifiers, _decode_UserIdentifiers, _encode_UserIdentifiers } from "../TS33128Payloads/UserIdentifiers.ta.mjs";


/**
 * @summary AMFLocationUpdate
 * @description
 * 
 * The IRI-POI in the AMF shall generate an xIRI containing an AMFLocationUpdate
 * record each time the IRI-POI present in an AMF detects that the target’s UE
 * location is updated due to target UE mobility or as a part of an AMF service
 * procedure and the reporting of location information is not restricted by
 * service scoping. The generation of such separate xIRI is not required if the
 * updated UE location information is obtained as a part of a procedure
 * producing some other xIRIs (e.g. mobility registration). In that case the
 * location information is included into the respective xIRI.
 *
 * The UE mobility events resulting in generation of an AMFLocationUpdate xIRI
 * include the N2 Path Switch Request (Xn based inter NG-RAN handover procedure
 * described in TS 23.502 [4] clause 4.9.1.2) and the N2 Handover Notify (Inter
 * NG-RAN node N2 based handover procedure described in TS 23.502 [4] clause
 * 4.9.1.3).
 *
 * The AMFLocationUpdate xIRI is also generated when the AMF receives an NG-RAN
 * NGAP PDU Session Resource Modify Indication message as a result of Dual
 * Connectivity activation/release for the target UE, as described in TS 37.340
 * [37] clause 10.
 *
 * Optionally, based on operator policy, other NG-RAN NGAP messages that do not
 * generate separate xIRI but carry location information (e.g. RRC INACTIVE
 * TRANSITION REPORT) may trigger the generation of an xIRI AMFLocationUpdate
 * record.
 *
 * Additionally, based on regulatory requirements and operator policy, the
 * location information obtained by AMF from NG-RAN or LMF in the course of some
 * service operation (e.g. emergency services, LCS) may generate xIRI
 * AMFLocationUpdate record. The AMF services providing the location information
 * in these cases include the AMF Location Service (ProvideLocInfo,
 * ProvidePosInfo, NotifiedPosInfo and EventNotify service operations) and the
 * AMF Exposure Service (AmfEventReport with LOCATION_REPORT) (see TS 29.518
 * [22]). Additionally, the AMF Communication Service
 * (Namf_Communication_N1MessageNotify service operation) may be monitored to
 * capture the location information in the scenarios described in TS 23.273 [42]
 * clause 6.3.1. Also, in the case of Mobile Originated LCS service invoked by
 * the target, the location information may be derived from a
 * Nlmf_Location_DetermineLocation Response to AMF (see TS 23.273 [42] clause
 * 6.2).
 *
 * The AMFLocationUpdate record is also used by LARF to deliver location
 * information responses to MDF2, as described in clause 7.3.5.6. The IRI-POI in
 * the AMF shall not generate the AMFLocationUpdate xIRI when the location
 * information is acquired as the result of a LARF request, as described in TS
 * 33.127 [5] clause 7.3.5.2.
 *
 * 3GPP TS 33.128, clause 6.2.2.2.4.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AMFLocationUpdate ::= SEQUENCE
 * {
 *     sUPI                            [1] SUPI,
 *     sUCI                            [2] SUCI OPTIONAL,
 *     pEI                             [3] PEI OPTIONAL,
 *     gPSI                            [4] GPSI OPTIONAL,
 *     gUTI                            [5] FiveGGUTI OPTIONAL,
 *     location                        [6] Location,
 *     deprecatedSMSOverNASIndicator   [7] SMSOverNASIndicator OPTIONAL,
 *     deprecatedOldGUTI               [8] EPS5GGUTI OPTIONAL,
 *     uEAreaIndication                [9] UEAreaIndication OPTIONAL,
 *     additionalUserIdentifiers       [10] UserIdentifiers OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class AMFLocationUpdate {
    /**
     * @summary `sUPI`.
     * @description
     *
     * SUPI associated with the location update (see clause 6.2.2.4).
     *
     * 3GPP TS 33.128, clause 6.2.2.2.4.
     *
     * @public
     * @readonly
     */
    readonly sUPI: SUPI;
    /**
     * @summary `sUCI`.
     * @description
     *
     * SUCI associated with the location update, if available, see TS 24.501
     * [13].
     *
     * 3GPP TS 33.128, clause 6.2.2.2.4.
     *
     * @public
     * @readonly
     */
    readonly sUCI: OPTIONAL<SUCI>;
    /**
     * @summary `pEI`.
     * @description
     *
     * PEI associated with the location update, if available.
     *
     * 3GPP TS 33.128, clause 6.2.2.2.4.
     *
     * @public
     * @readonly
     */
    readonly pEI: OPTIONAL<PEI>;
    /**
     * @summary `gPSI`.
     * @description
     *
     * GPSI associated with the location update, if available as part of the
     * subscription profile.
     *
     * 3GPP TS 33.128, clause 6.2.2.2.4.
     *
     * @public
     * @readonly
     */
    readonly gPSI: OPTIONAL<GPSI>;
    /**
     * @summary `gUTI`.
     * @description
     *
     * 5G-GUTI associated with the location update, if available, see TS 24.501
     * [13].
     *
     * 3GPP TS 33.128, clause 6.2.2.2.4.
     *
     * @public
     * @readonly
     */
    readonly gUTI: OPTIONAL<FiveGGUTI>;
    /**
     * @summary `location`.
     * @description
     *
     * Updated location information determined by the network. Depending on the
     * service or message type from which the location information is extracted,
     * it may be encoded in several forms: 1) as a
     * Location.locationInfo.userLocation parameter in the case the information
     * is obtained from an NGAP message, except the LOCATION REPORT message (see
     * TS 38.413 [23]); 2) as a Location.locationInfo in the case the
     * information is obtained from a ProvideLocInfo (TS 29.518 [22] clause
     * 6.4.6.2.6); 3) as a Location.locationPresenceReport parameter in the case
     * the information is obtained from an AmfEventReport (TS 29.518 [22] clause
     * 6.2.6.2.5) with event type Location-Report or Presence-In-AOI-Report; 4)
     * as a Location.positioningInfo.positionInfo parameter in the case the
     * information is obtained from a ProvidePosInfo (TS 29.518 [22] clause
     * 6.4.6.2.3) or a NotifiedPosInfo (TS 29.518 [22] clause 6.4.6.2.4). If
     * available, other parameters reportable via Location shall be included.
     *
     * 3GPP TS 33.128, clause 6.2.2.2.4.
     *
     * @public
     * @readonly
     */
    readonly location: Location;
    /**
     * @summary `deprecatedSMSOverNASIndicator`.
     * @description
     *
     * No longer used in present version of this specification.
     *
     * 3GPP TS 33.128, clause 6.2.2.2.4.
     *
     * @public
     * @readonly
     */
    readonly deprecatedSMSOverNASIndicator: OPTIONAL<SMSOverNASIndicator>;
    /**
     * @summary `deprecatedOldGUTI`.
     * @description
     *
     * No longer used in present version of this specification.
     *
     * 3GPP TS 33.128, clause 6.2.2.2.4.
     *
     * @public
     * @readonly
     */
    readonly deprecatedOldGUTI: OPTIONAL<EPS5GGUTI>;
    /**
     * @summary `uEAreaIndication`.
     * @description
     *
     * Contains a country, area in a country or international area indication
     * where UE is located, if available. If UE is outside of the area of any
     * known country, i.e. international area, it contains the international
     * area indication without a country. See table 6.2.2.2.2-2 for details on
     * this data type.
     *
     * 3GPP TS 33.128, clause 6.2.2.2.4.
     *
     * @public
     * @readonly
     */
    readonly uEAreaIndication: OPTIONAL<UEAreaIndication>;
    /**
     * @summary `additionalUserIdentifiers`.
     * @description
     *
     * Provides additional user identifiers known at the AMF or stored in AMF
     * context, e.g. additional GPSI.
     *
     * 3GPP TS 33.128, clause 6.2.2.2.4.
     *
     * @public
     * @readonly
     */
    readonly additionalUserIdentifiers: OPTIONAL<UserIdentifiers>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        sUPI: SUPI,
        sUCI: OPTIONAL<SUCI>,
        pEI: OPTIONAL<PEI>,
        gPSI: OPTIONAL<GPSI>,
        gUTI: OPTIONAL<FiveGGUTI>,
        location: Location,
        deprecatedSMSOverNASIndicator: OPTIONAL<SMSOverNASIndicator>,
        deprecatedOldGUTI: OPTIONAL<EPS5GGUTI>,
        uEAreaIndication: OPTIONAL<UEAreaIndication>,
        additionalUserIdentifiers: OPTIONAL<UserIdentifiers>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.sUPI = sUPI;
        this.sUCI = sUCI;
        this.pEI = pEI;
        this.gPSI = gPSI;
        this.gUTI = gUTI;
        this.location = location;
        this.deprecatedSMSOverNASIndicator = deprecatedSMSOverNASIndicator;
        this.deprecatedOldGUTI = deprecatedOldGUTI;
        this.uEAreaIndication = uEAreaIndication;
        this.additionalUserIdentifiers = additionalUserIdentifiers;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a AMFLocationUpdate
     * @description
     * 
     * This takes an `object` and converts it to a `AMFLocationUpdate`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AMFLocationUpdate`.
     * @returns {AMFLocationUpdate}
     */
    public static _from_object (_o: { [_K in keyof (AMFLocationUpdate)]: (AMFLocationUpdate)[_K] }): AMFLocationUpdate {
        return new AMFLocationUpdate(_o.sUPI, _o.sUCI, _o.pEI, _o.gPSI, _o.gUTI, _o.location, _o.deprecatedSMSOverNASIndicator, _o.deprecatedOldGUTI, _o.uEAreaIndication, _o.additionalUserIdentifiers, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `deprecatedSMSOverNASIndicator`
         * @public
         * @static
         */

    public static _enum_for_deprecatedSMSOverNASIndicator = _enum_for_SMSOverNASIndicator;
}

/**
 * @summary The Leading Root Component Types of AMFLocationUpdate
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AMFLocationUpdate: $.ComponentSpec[] = [
    new $.ComponentSpec("sUPI", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("sUCI", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("pEI", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("gPSI", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("gUTI", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("location", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("deprecatedSMSOverNASIndicator", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("deprecatedOldGUTI", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("uEAreaIndication", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("additionalUserIdentifiers", true, $.hasTag(_TagClass.context, 10))
];

/**
 * @summary The Trailing Root Component Types of AMFLocationUpdate
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AMFLocationUpdate: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AMFLocationUpdate
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AMFLocationUpdate: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AMFLocationUpdate: $.ASN1Decoder<AMFLocationUpdate> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AMFLocationUpdate
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AMFLocationUpdate (el: _Element): AMFLocationUpdate {
    if (!_cached_decoder_for_AMFLocationUpdate) { _cached_decoder_for_AMFLocationUpdate = function (el: _Element): AMFLocationUpdate {
    let sUPI!: SUPI;
    let sUCI: OPTIONAL<SUCI>;
    let pEI: OPTIONAL<PEI>;
    let gPSI: OPTIONAL<GPSI>;
    let gUTI: OPTIONAL<FiveGGUTI>;
    let location!: Location;
    let deprecatedSMSOverNASIndicator: OPTIONAL<SMSOverNASIndicator>;
    let deprecatedOldGUTI: OPTIONAL<EPS5GGUTI>;
    let uEAreaIndication: OPTIONAL<UEAreaIndication>;
    let additionalUserIdentifiers: OPTIONAL<UserIdentifiers>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "sUPI": (_el: _Element): void => { sUPI = $._decode_explicit<SUPI>(() => _decode_SUPI)(_el); },
        "sUCI": (_el: _Element): void => { sUCI = $._decode_implicit<SUCI>(() => _decode_SUCI)(_el); },
        "pEI": (_el: _Element): void => { pEI = $._decode_explicit<PEI>(() => _decode_PEI)(_el); },
        "gPSI": (_el: _Element): void => { gPSI = $._decode_explicit<GPSI>(() => _decode_GPSI)(_el); },
        "gUTI": (_el: _Element): void => { gUTI = $._decode_implicit<FiveGGUTI>(() => _decode_FiveGGUTI)(_el); },
        "location": (_el: _Element): void => { location = $._decode_implicit<Location>(() => _decode_Location)(_el); },
        "deprecatedSMSOverNASIndicator": (_el: _Element): void => { deprecatedSMSOverNASIndicator = $._decode_implicit<SMSOverNASIndicator>(() => _decode_SMSOverNASIndicator)(_el); },
        "deprecatedOldGUTI": (_el: _Element): void => { deprecatedOldGUTI = $._decode_explicit<EPS5GGUTI>(() => _decode_EPS5GGUTI)(_el); },
        "uEAreaIndication": (_el: _Element): void => { uEAreaIndication = $._decode_implicit<UEAreaIndication>(() => _decode_UEAreaIndication)(_el); },
        "additionalUserIdentifiers": (_el: _Element): void => { additionalUserIdentifiers = $._decode_implicit<UserIdentifiers>(() => _decode_UserIdentifiers)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AMFLocationUpdate,
        _extension_additions_list_spec_for_AMFLocationUpdate,
        _root_component_type_list_2_spec_for_AMFLocationUpdate,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new AMFLocationUpdate(
        sUPI,
        sUCI,
        pEI,
        gPSI,
        gUTI,
        location,
        deprecatedSMSOverNASIndicator,
        deprecatedOldGUTI,
        uEAreaIndication,
        additionalUserIdentifiers,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_AMFLocationUpdate(el);
}

let _cached_encoder_for_AMFLocationUpdate: $.ASN1Encoder<AMFLocationUpdate> | null = null;

/**
 * @summary Encodes a(n) AMFLocationUpdate into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AMFLocationUpdate, encoded as an ASN.1 Element.
 */
export
function _encode_AMFLocationUpdate (value: AMFLocationUpdate, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AMFLocationUpdate) { _cached_encoder_for_AMFLocationUpdate = function (value: AMFLocationUpdate, elGetter: $.ASN1Encoder<AMFLocationUpdate>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(10 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_SUPI, $.BER)(value.sUPI, $.BER);
    if (value.sUCI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_SUCI, $.BER)(value.sUCI, $.BER);
    }
    if (value.pEI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 3, () => _encode_PEI, $.BER)(value.pEI, $.BER);
    }
    if (value.gPSI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 4, () => _encode_GPSI, $.BER)(value.gPSI, $.BER);
    }
    if (value.gUTI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_FiveGGUTI, $.BER)(value.gUTI, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => _encode_Location, $.BER)(value.location, $.BER);
    if (value.deprecatedSMSOverNASIndicator !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => _encode_SMSOverNASIndicator, $.BER)(value.deprecatedSMSOverNASIndicator, $.BER);
    }
    if (value.deprecatedOldGUTI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 8, () => _encode_EPS5GGUTI, $.BER)(value.deprecatedOldGUTI, $.BER);
    }
    if (value.uEAreaIndication !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => _encode_UEAreaIndication, $.BER)(value.uEAreaIndication, $.BER);
    }
    if (value.additionalUserIdentifiers !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => _encode_UserIdentifiers, $.BER)(value.additionalUserIdentifiers, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_AMFLocationUpdate(value, elGetter);
}


/* eslint-enable */
