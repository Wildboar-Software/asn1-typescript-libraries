/* eslint-disable */
import {
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type RCSIdentity, _decode_RCSIdentity, _encode_RCSIdentity } from "../TS33128Payloads/RCSIdentity.ta.mjs";
// export { RCSIdentity, _decode_RCSIdentity, _encode_RCSIdentity } from "../TS33128Payloads/RCSIdentity.ta.mjs";
import { RCSRegistrationType, _decode_RCSRegistrationType, _encode_RCSRegistrationType, _enum_for_RCSRegistrationType } from "../TS33128Payloads/RCSRegistrationType.ta.mjs";
// export { RCSRegistrationType, _enum_for_RCSRegistrationType, RCSRegistrationType_registration /* IMPORTED_LONG_ENUMERATION_ITEM */, registration /* IMPORTED_SHORT_ENUMERATION_ITEM */, RCSRegistrationType_reRegistration /* IMPORTED_LONG_ENUMERATION_ITEM */, reRegistration /* IMPORTED_SHORT_ENUMERATION_ITEM */, RCSRegistrationType_uEDeregistration /* IMPORTED_LONG_ENUMERATION_ITEM */, uEDeregistration /* IMPORTED_SHORT_ENUMERATION_ITEM */, RCSRegistrationType_networkDeregistration /* IMPORTED_LONG_ENUMERATION_ITEM */, networkDeregistration /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_RCSRegistrationType, _encode_RCSRegistrationType } from "../TS33128Payloads/RCSRegistrationType.ta.mjs";
import { type IMSPayload, _decode_IMSPayload, _encode_IMSPayload } from "../TS33128Payloads/IMSPayload.ta.mjs";
// export { IMSPayload, _decode_IMSPayload, _encode_IMSPayload } from "../TS33128Payloads/IMSPayload.ta.mjs";
import { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
// export { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";


/**
 * @summary RCSRegistration
 * @description
 * 
 * The xIRI containing an RCSRegistration record shall be generated when the
 * IRI-POI in the S-CSCF or in an RCS Server detects that an RCS target matching
 * one of the RCS identifiers, provided via LI_X1 has registered, reregistered
 * or deregistered for RCS services. Accordingly, the IRI-POI in the RCS Server
 * generates the xIRI when the following event is detected:
 *
 * - When the IRI-POI is located in the S-CSCF:
 *
 * - If the S-CSCF uses third-party registrations to notify the RCS Server when
 *   a UE registers, when the S-CSCF receives a 200 OK from the RCS Server in
 *   response to a third-party SIP REGISTER request registering, reregistering
 *   or deregistering a target with the RCS Server.
 *
 * - If the S-CSCF is the NF responsible for handling RCS Registrations:
 *
 * - When the S-CSCF sends a 200 OK to a target in response to a SIP REGISTER
 *   request that includes any of the service feature tags listed in GSMA RCC.07
 *   [78] clause 2.4.3, clause 2.4.4 or clause 2.4.4.1 table 3.
 *
 * - When the S-CSCF sends a 200 OK to a target in response to a SIP REGISTER
 *   request for deregistration when the service features supported by the
 *   target include any of the service features listed in GSMA RCC.07 [78]
 *   clause 2.4.3, clause 2.4.4 or clause 2.4.4.1 table 3.
 *
 * - When the IRI-POI is located in the RCS Server:
 *
 * - When the RCS Server sends a 200 OK to a target in response to a SIP
 *   REGISTER request that includes any of the service feature tags listed in
 *   GSMA RCC.07 [78] clause 2.4.3, clause 2.4.4 or clause 2.4.4.1 table 3.
 *
 * - When the RCS Server sends a 200 OK to a target in response to a SIP
 *   REGISTER request for deregistration when the service features supported by
 *   the target include any of the service features listed in GSMA RCC.07 [78]
 *   clause 2.4.3, clause 2.4.4 or clause 2.4.4.1 table 3.
 *
 * - When the RCS server sends a 200 OK to the S-CSCF in response to a SIP
 *   NOTIFY request for a target with an Event header field with a value set to
 *   "reg" as specified in TS 24.229 [74] clauses 5.1.1.3 and 5.1.1.7.
 *
 * Table 7.13.4-1 gives the LI_HI2 IRI message type for this record as REPORT.
 *
 * 3GPP TS 33.128, clause 7.13.3.2.1.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RCSRegistration ::= SEQUENCE
 * {
 *     rCSTargetIdentities              [1] SEQUENCE SIZE (1..MAX) OF RCSIdentity,
 *     rCSRegistrationType              [2] RCSRegistrationType,
 *     rCSRegistrationUpdateRequest     [3] IMSPayload,
 *     rCSRegistrationUpdateResponse    [4] IMSPayload,
 *     location                         [5] Location OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class RCSRegistration {
    /**
     * @summary `rCSTargetIdentities`.
     * @description
     *
     * RCS target identities. All identities associated to the target known at
     * the POI shall be included.
     *
     * 3GPP TS 33.128, clause 7.13.3.2.1.
     *
     * @public
     * @readonly
     */
    readonly rCSTargetIdentities: RCSIdentity[];
    /**
     * @summary `rCSRegistrationType`.
     * @description
     *
     * RCS Registration type, i.e. Registration, Reregistration and
     * Deregistration.
     *
     * 3GPP TS 33.128, clause 7.13.3.2.1.
     *
     * @public
     * @readonly
     */
    readonly rCSRegistrationType: RCSRegistrationType;
    /**
     * @summary `rCSRegistrationUpdateRequest`.
     * @description
     *
     * SIP REGISTER request related to target IMS Registration, Reregistration
     * or Deregistration.
     *
     * 3GPP TS 33.128, clause 7.13.3.2.1.
     *
     * @public
     * @readonly
     */
    readonly rCSRegistrationUpdateRequest: IMSPayload;
    /**
     * @summary `rCSRegistrationUpdateResponse`.
     * @description
     *
     * SIP REGISTER response related to target IMS Registration, Reregistration
     * or Deregistration.
     *
     * 3GPP TS 33.128, clause 7.13.3.2.1.
     *
     * @public
     * @readonly
     */
    readonly rCSRegistrationUpdateResponse: IMSPayload;
    /**
     * @summary `location`.
     * @description
     *
     * Shall include the target’s location when available according to the
     * location reporting type provisioned for the task.
     *
     * 3GPP TS 33.128, clause 7.13.3.2.1.
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
        rCSTargetIdentities: RCSIdentity[],
        rCSRegistrationType: RCSRegistrationType,
        rCSRegistrationUpdateRequest: IMSPayload,
        rCSRegistrationUpdateResponse: IMSPayload,
        location?: OPTIONAL<Location>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.rCSTargetIdentities = rCSTargetIdentities;
        this.rCSRegistrationType = rCSRegistrationType;
        this.rCSRegistrationUpdateRequest = rCSRegistrationUpdateRequest;
        this.rCSRegistrationUpdateResponse = rCSRegistrationUpdateResponse;
        this.location = location;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a RCSRegistration
     * @description
     * 
     * This takes an `object` and converts it to a `RCSRegistration`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RCSRegistration`.
     * @returns {RCSRegistration}
     */
    public static _from_object (_o: { [_K in keyof (RCSRegistration)]: (RCSRegistration)[_K] }): RCSRegistration {
        return new RCSRegistration(_o.rCSTargetIdentities, _o.rCSRegistrationType, _o.rCSRegistrationUpdateRequest, _o.rCSRegistrationUpdateResponse, _o.location, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `rCSRegistrationType`
         * @public
         * @static
         */

    public static _enum_for_rCSRegistrationType = _enum_for_RCSRegistrationType;
}

/**
 * @summary The Leading Root Component Types of RCSRegistration
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RCSRegistration: $.ComponentSpec[] = [
    new $.ComponentSpec("rCSTargetIdentities", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("rCSRegistrationType", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("rCSRegistrationUpdateRequest", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("rCSRegistrationUpdateResponse", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("location", true, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of RCSRegistration
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RCSRegistration: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RCSRegistration
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RCSRegistration: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RCSRegistration: $.ASN1Decoder<RCSRegistration> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RCSRegistration
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RCSRegistration (el: _Element): RCSRegistration {
    if (!_cached_decoder_for_RCSRegistration) { _cached_decoder_for_RCSRegistration = function (el: _Element): RCSRegistration {
    let rCSTargetIdentities!: RCSIdentity[];
    let rCSRegistrationType!: RCSRegistrationType;
    let rCSRegistrationUpdateRequest!: IMSPayload;
    let rCSRegistrationUpdateResponse!: IMSPayload;
    let location: OPTIONAL<Location>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "rCSTargetIdentities": (_el: _Element): void => {
            rCSTargetIdentities = $._decode_implicit<RCSIdentity[]>(() => $._decodeSequenceOf<RCSIdentity>(() => _decode_RCSIdentity))(_el);
            if (rCSTargetIdentities.length < 1) {
                throw new ASN1SizeError("RCSRegistration.rCSTargetIdentities violates SIZE constraint");
            }
        },
        "rCSRegistrationType": (_el: _Element): void => { rCSRegistrationType = $._decode_implicit<RCSRegistrationType>(() => _decode_RCSRegistrationType)(_el); },
        "rCSRegistrationUpdateRequest": (_el: _Element): void => { rCSRegistrationUpdateRequest = $._decode_explicit<IMSPayload>(() => _decode_IMSPayload)(_el); },
        "rCSRegistrationUpdateResponse": (_el: _Element): void => { rCSRegistrationUpdateResponse = $._decode_explicit<IMSPayload>(() => _decode_IMSPayload)(_el); },
        "location": (_el: _Element): void => { location = $._decode_implicit<Location>(() => _decode_Location)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RCSRegistration,
        _extension_additions_list_spec_for_RCSRegistration,
        _root_component_type_list_2_spec_for_RCSRegistration,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new RCSRegistration(
        rCSTargetIdentities,
        rCSRegistrationType,
        rCSRegistrationUpdateRequest,
        rCSRegistrationUpdateResponse,
        location,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_RCSRegistration(el);
}

let _cached_encoder_for_RCSRegistration: $.ASN1Encoder<RCSRegistration> | null = null;

/**
 * @summary Encodes a(n) RCSRegistration into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RCSRegistration, encoded as an ASN.1 Element.
 */
export
function _encode_RCSRegistration (value: RCSRegistration, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RCSRegistration) { _cached_encoder_for_RCSRegistration = function (value: RCSRegistration, elGetter: $.ASN1Encoder<RCSRegistration>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(5 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<RCSIdentity>(() => _encode_RCSIdentity, $.BER), $.BER)(value.rCSTargetIdentities, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_RCSRegistrationType, $.BER)(value.rCSRegistrationType, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 3, () => _encode_IMSPayload, $.BER)(value.rCSRegistrationUpdateRequest, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 4, () => _encode_IMSPayload, $.BER)(value.rCSRegistrationUpdateResponse, $.BER);
    if (value.location !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_Location, $.BER)(value.location, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_RCSRegistration(value, elGetter);
}


/* eslint-enable */
