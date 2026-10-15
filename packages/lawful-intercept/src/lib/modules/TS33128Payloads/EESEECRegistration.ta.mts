/* eslint-disable */
import {
    OPTIONAL,
    UTF8String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RegistrationType, _decode_RegistrationType, _encode_RegistrationType, _enum_for_RegistrationType } from "../TS33128Payloads/RegistrationType.ta.mjs";
// export { RegistrationType, _enum_for_RegistrationType, RegistrationType_registration /* IMPORTED_LONG_ENUMERATION_ITEM */, registration /* IMPORTED_SHORT_ENUMERATION_ITEM */, RegistrationType_registrationUpdate /* IMPORTED_LONG_ENUMERATION_ITEM */, registrationUpdate /* IMPORTED_SHORT_ENUMERATION_ITEM */, RegistrationType_deregistration /* IMPORTED_LONG_ENUMERATION_ITEM */, deregistration /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_RegistrationType, _encode_RegistrationType } from "../TS33128Payloads/RegistrationType.ta.mjs";
import { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
// export { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
import { ACProfiles, _decode_ACProfiles, _encode_ACProfiles } from "../TS33128Payloads/ACProfiles.ta.mjs";
// export { ACProfiles, _decode_ACProfiles, _encode_ACProfiles } from "../TS33128Payloads/ACProfiles.ta.mjs";
import { ACRScenarios, _decode_ACRScenarios, _encode_ACRScenarios } from "../TS33128Payloads/ACRScenarios.ta.mjs";
// export { ACRScenarios, _decode_ACRScenarios, _encode_ACRScenarios } from "../TS33128Payloads/ACRScenarios.ta.mjs";
import { Timestamp, _decode_Timestamp, _encode_Timestamp } from "../TS33128Payloads/Timestamp.ta.mjs";
// export { Timestamp, _decode_Timestamp, _encode_Timestamp } from "../TS33128Payloads/Timestamp.ta.mjs";
import { UnfulfilledACProfiles, _decode_UnfulfilledACProfiles, _encode_UnfulfilledACProfiles } from "../TS33128Payloads/UnfulfilledACProfiles.ta.mjs";
// export { UnfulfilledACProfiles, _decode_UnfulfilledACProfiles, _encode_UnfulfilledACProfiles } from "../TS33128Payloads/UnfulfilledACProfiles.ta.mjs";
import { FailureResponse, _decode_FailureResponse, _encode_FailureResponse, _enum_for_FailureResponse } from "../TS33128Payloads/FailureResponse.ta.mjs";
// export { FailureResponse, _enum_for_FailureResponse, FailureResponse_error400 /* IMPORTED_LONG_ENUMERATION_ITEM */, error400 /* IMPORTED_SHORT_ENUMERATION_ITEM */, FailureResponse_error401 /* IMPORTED_LONG_ENUMERATION_ITEM */, error401 /* IMPORTED_SHORT_ENUMERATION_ITEM */, FailureResponse_error403 /* IMPORTED_LONG_ENUMERATION_ITEM */, error403 /* IMPORTED_SHORT_ENUMERATION_ITEM */, FailureResponse_error404 /* IMPORTED_LONG_ENUMERATION_ITEM */, error404 /* IMPORTED_SHORT_ENUMERATION_ITEM */, FailureResponse_error406 /* IMPORTED_LONG_ENUMERATION_ITEM */, error406 /* IMPORTED_SHORT_ENUMERATION_ITEM */, FailureResponse_error411 /* IMPORTED_LONG_ENUMERATION_ITEM */, error411 /* IMPORTED_SHORT_ENUMERATION_ITEM */, FailureResponse_error413 /* IMPORTED_LONG_ENUMERATION_ITEM */, error413 /* IMPORTED_SHORT_ENUMERATION_ITEM */, FailureResponse_error415 /* IMPORTED_LONG_ENUMERATION_ITEM */, error415 /* IMPORTED_SHORT_ENUMERATION_ITEM */, FailureResponse_error429 /* IMPORTED_LONG_ENUMERATION_ITEM */, error429 /* IMPORTED_SHORT_ENUMERATION_ITEM */, FailureResponse_error500 /* IMPORTED_LONG_ENUMERATION_ITEM */, error500 /* IMPORTED_SHORT_ENUMERATION_ITEM */, FailureResponse_error503 /* IMPORTED_LONG_ENUMERATION_ITEM */, error503 /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_FailureResponse, _encode_FailureResponse } from "../TS33128Payloads/FailureResponse.ta.mjs";


/**
 * @summary EESEECRegistration
 * @description
 * 
 * The IRI-POI in the EES shall generate an xIRI containing an
 * EESEECRegistration record when the IRI-POI present in the EES detects that an
 * EEC has registered, updated its registration or deregistered. The IRI-POI
 * present in the EES shall generate the xIRI for the following events:
 *
 * - EES returns Eees_EECRegistration_Request response towards the EEC
 *   confirming the registration of the EEC for the target UE to the EES (as
 *   defined in TS 24.558 [93] clause 5.2.2.2).
 *
 * - EES returns Eees_EECRegistration_Update response towards the EEC confirming
 *   the update of the registration information of the EEC for the target UE at
 *   the EES (as defined in TS 24.558 [93] clause 5.2.2.3).
 *
 * - EES returns Eees_EECRegistration_Deregister response towards the EEC
 *   confirming the deregistration of the EEC for the target UE from a given EES
 *   (as defined in TS 24.558 [93] clause 5.2.2.4).
 *
 * Table 7.14.2.11-1 gives the LI_HI2 IRI message type for this record as
 * REPORT.
 *
 * 3GPP TS 33.128, clause 7.14.2.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EESEECRegistration ::= SEQUENCE
 * {
 *     registrationType         [1] RegistrationType,
 *     eECID                    [2] UTF8String,
 *     gPSI                     [3] GPSI OPTIONAL,
 *     aCProfiles               [4] ACProfiles OPTIONAL,
 *     eECServiceContSupport    [5] ACRScenarios OPTIONAL,
 *     expirationTime           [6] Timestamp OPTIONAL,
 *     eECContextID             [7] UTF8String OPTIONAL,
 *     srcEESID                 [8] UTF8String OPTIONAL,
 *     unfulfilledACProfiles    [9] UnfulfilledACProfiles OPTIONAL,
 *     failureResponse          [10] FailureResponse OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class EESEECRegistration {
    /**
     * @summary `registrationType`.
     * @description
     *
     * Types of registration. Possible values are: "Registration", "Registration
     * Update", "Deregistration".
     *
     * 3GPP TS 33.128, clause 7.14.2.2.
     *
     * @public
     * @readonly
     */
    readonly registrationType: RegistrationType;
    /**
     * @summary `eECID`.
     * @description
     *
     * Unique identifier of the EEC.
     *
     * 3GPP TS 33.128, clause 7.14.2.2.
     *
     * @public
     * @readonly
     */
    readonly eECID: UTF8String;
    /**
     * @summary `gPSI`.
     * @description
     *
     * GPSI of the target UE, if available.
     *
     * 3GPP TS 33.128, clause 7.14.2.2.
     *
     * @public
     * @readonly
     */
    readonly gPSI: OPTIONAL<GPSI>;
    /**
     * @summary `aCProfiles`.
     * @description
     *
     * Profiles of application clients (ACs) for which the EEC provides edge
     * enabling services, if available. See table 7.14.2.2-2.
     *
     * 3GPP TS 33.128, clause 7.14.2.2.
     *
     * @public
     * @readonly
     */
    readonly aCProfiles: OPTIONAL<ACProfiles>;
    /**
     * @summary `eECServiceContSupport`.
     * @description
     *
     * ACR (Application Context Relocation) scenarios supported by the EEC for
     * service continuity if any.
     *
     * 3GPP TS 33.128, clause 7.14.2.2.
     *
     * @public
     * @readonly
     */
    readonly eECServiceContSupport: OPTIONAL<ACRScenarios>;
    /**
     * @summary `expirationTime`.
     * @description
     *
     * Expiration time for the registration. If absent for registration types
     * "Registration" and "Registration Update", registration of EEC never
     * expires.
     *
     * 3GPP TS 33.128, clause 7.14.2.2.
     *
     * @public
     * @readonly
     */
    readonly expirationTime: OPTIONAL<Timestamp>;
    /**
     * @summary `eECContextID`.
     * @description
     *
     * Unique identifier of the EEC context if available.
     *
     * 3GPP TS 33.128, clause 7.14.2.2.
     *
     * @public
     * @readonly
     */
    readonly eECContextID: OPTIONAL<UTF8String>;
    /**
     * @summary `srcEESID`.
     * @description
     *
     * Identifier of the EES providing the EEC context identifier, if available.
     *
     * 3GPP TS 33.128, clause 7.14.2.2.
     *
     * @public
     * @readonly
     */
    readonly srcEESID: OPTIONAL<UTF8String>;
    /**
     * @summary `unfulfilledACProfiles`.
     * @description
     *
     * If requirements indicated in the AC profile(s) cannot be fulfilled for
     * some of the AC profile(s), the EES shall include "unfulfilledAcProfiles"
     * attribute containing the list of ACIDs of such AC Profile(s) and
     * appropriate reasons, if available.
     *
     * 3GPP TS 33.128, clause 7.14.2.2.
     *
     * @public
     * @readonly
     */
    readonly unfulfilledACProfiles: OPTIONAL<UnfulfilledACProfiles>;
    /**
     * @summary `failureResponse`.
     * @description
     *
     * Cause information when the registration, registration update or
     * deregistration has failed, if available.
     *
     * 3GPP TS 33.128, clause 7.14.2.2.
     *
     * @public
     * @readonly
     */
    readonly failureResponse: OPTIONAL<FailureResponse>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        registrationType: RegistrationType,
        eECID: UTF8String,
        gPSI: OPTIONAL<GPSI>,
        aCProfiles: OPTIONAL<ACProfiles>,
        eECServiceContSupport: OPTIONAL<ACRScenarios>,
        expirationTime: OPTIONAL<Timestamp>,
        eECContextID: OPTIONAL<UTF8String>,
        srcEESID: OPTIONAL<UTF8String>,
        unfulfilledACProfiles: OPTIONAL<UnfulfilledACProfiles>,
        failureResponse: OPTIONAL<FailureResponse>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.registrationType = registrationType;
        this.eECID = eECID;
        this.gPSI = gPSI;
        this.aCProfiles = aCProfiles;
        this.eECServiceContSupport = eECServiceContSupport;
        this.expirationTime = expirationTime;
        this.eECContextID = eECContextID;
        this.srcEESID = srcEESID;
        this.unfulfilledACProfiles = unfulfilledACProfiles;
        this.failureResponse = failureResponse;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a EESEECRegistration
     * @description
     * 
     * This takes an `object` and converts it to a `EESEECRegistration`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EESEECRegistration`.
     * @returns {EESEECRegistration}
     */
    public static _from_object (_o: { [_K in keyof (EESEECRegistration)]: (EESEECRegistration)[_K] }): EESEECRegistration {
        return new EESEECRegistration(_o.registrationType, _o.eECID, _o.gPSI, _o.aCProfiles, _o.eECServiceContSupport, _o.expirationTime, _o.eECContextID, _o.srcEESID, _o.unfulfilledACProfiles, _o.failureResponse, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `registrationType`
         * @public
         * @static
         */

    public static _enum_for_registrationType = _enum_for_RegistrationType;        /**
         * @summary The enum used as the type of the component `failureResponse`
         * @public
         * @static
         */

    public static _enum_for_failureResponse = _enum_for_FailureResponse;
}

/**
 * @summary The Leading Root Component Types of EESEECRegistration
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EESEECRegistration: $.ComponentSpec[] = [
    new $.ComponentSpec("registrationType", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("eECID", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("gPSI", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("aCProfiles", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("eECServiceContSupport", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("expirationTime", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("eECContextID", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("srcEESID", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("unfulfilledACProfiles", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("failureResponse", true, $.hasTag(_TagClass.context, 10))
];

/**
 * @summary The Trailing Root Component Types of EESEECRegistration
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EESEECRegistration: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EESEECRegistration
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EESEECRegistration: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EESEECRegistration: $.ASN1Decoder<EESEECRegistration> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EESEECRegistration
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EESEECRegistration (el: _Element): EESEECRegistration {
    if (!_cached_decoder_for_EESEECRegistration) { _cached_decoder_for_EESEECRegistration = function (el: _Element): EESEECRegistration {
    let registrationType!: RegistrationType;
    let eECID!: UTF8String;
    let gPSI: OPTIONAL<GPSI>;
    let aCProfiles: OPTIONAL<ACProfiles>;
    let eECServiceContSupport: OPTIONAL<ACRScenarios>;
    let expirationTime: OPTIONAL<Timestamp>;
    let eECContextID: OPTIONAL<UTF8String>;
    let srcEESID: OPTIONAL<UTF8String>;
    let unfulfilledACProfiles: OPTIONAL<UnfulfilledACProfiles>;
    let failureResponse: OPTIONAL<FailureResponse>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "registrationType": (_el: _Element): void => { registrationType = $._decode_implicit<RegistrationType>(() => _decode_RegistrationType)(_el); },
        "eECID": (_el: _Element): void => { eECID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "gPSI": (_el: _Element): void => { gPSI = $._decode_explicit<GPSI>(() => _decode_GPSI)(_el); },
        "aCProfiles": (_el: _Element): void => { aCProfiles = $._decode_implicit<ACProfiles>(() => _decode_ACProfiles)(_el); },
        "eECServiceContSupport": (_el: _Element): void => { eECServiceContSupport = $._decode_implicit<ACRScenarios>(() => _decode_ACRScenarios)(_el); },
        "expirationTime": (_el: _Element): void => { expirationTime = $._decode_implicit<Timestamp>(() => _decode_Timestamp)(_el); },
        "eECContextID": (_el: _Element): void => { eECContextID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "srcEESID": (_el: _Element): void => { srcEESID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "unfulfilledACProfiles": (_el: _Element): void => { unfulfilledACProfiles = $._decode_implicit<UnfulfilledACProfiles>(() => _decode_UnfulfilledACProfiles)(_el); },
        "failureResponse": (_el: _Element): void => { failureResponse = $._decode_implicit<FailureResponse>(() => _decode_FailureResponse)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EESEECRegistration,
        _extension_additions_list_spec_for_EESEECRegistration,
        _root_component_type_list_2_spec_for_EESEECRegistration,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new EESEECRegistration(
        registrationType,
        eECID,
        gPSI,
        aCProfiles,
        eECServiceContSupport,
        expirationTime,
        eECContextID,
        srcEESID,
        unfulfilledACProfiles,
        failureResponse,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_EESEECRegistration(el);
}

let _cached_encoder_for_EESEECRegistration: $.ASN1Encoder<EESEECRegistration> | null = null;

/**
 * @summary Encodes a(n) EESEECRegistration into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EESEECRegistration, encoded as an ASN.1 Element.
 */
export
function _encode_EESEECRegistration (value: EESEECRegistration, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EESEECRegistration) { _cached_encoder_for_EESEECRegistration = function (value: EESEECRegistration, elGetter: $.ASN1Encoder<EESEECRegistration>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(10 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_RegistrationType, $.BER)(value.registrationType, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeUTF8String, $.BER)(value.eECID, $.BER);
    if (value.gPSI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 3, () => _encode_GPSI, $.BER)(value.gPSI, $.BER);
    }
    if (value.aCProfiles !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_ACProfiles, $.BER)(value.aCProfiles, $.BER);
    }
    if (value.eECServiceContSupport !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_ACRScenarios, $.BER)(value.eECServiceContSupport, $.BER);
    }
    if (value.expirationTime !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_Timestamp, $.BER)(value.expirationTime, $.BER);
    }
    if (value.eECContextID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeUTF8String, $.BER)(value.eECContextID, $.BER);
    }
    if (value.srcEESID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeUTF8String, $.BER)(value.srcEESID, $.BER);
    }
    if (value.unfulfilledACProfiles !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => _encode_UnfulfilledACProfiles, $.BER)(value.unfulfilledACProfiles, $.BER);
    }
    if (value.failureResponse !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => _encode_FailureResponse, $.BER)(value.failureResponse, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_EESEECRegistration(value, elGetter);
}


/* eslint-enable */
