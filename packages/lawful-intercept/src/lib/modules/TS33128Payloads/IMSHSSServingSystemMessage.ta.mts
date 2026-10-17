/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IMSI, _decode_IMSI, _encode_IMSI } from "../TS33128Payloads/IMSI.ta.mjs";
// export { IMSI, _decode_IMSI, _encode_IMSI } from "../TS33128Payloads/IMSI.ta.mjs";
import { PLMNID, _decode_PLMNID, _encode_PLMNID } from "../TS33128Payloads/PLMNID.ta.mjs";
// export { PLMNID, _decode_PLMNID, _encode_PLMNID } from "../TS33128Payloads/PLMNID.ta.mjs";
import { AuthorizationRequest, _decode_AuthorizationRequest, _encode_AuthorizationRequest } from "../TS33128Payloads/AuthorizationRequest.ta.mjs";
// export { AuthorizationRequest, _decode_AuthorizationRequest, _encode_AuthorizationRequest } from "../TS33128Payloads/AuthorizationRequest.ta.mjs";
import { RoamingIndicator, _decode_RoamingIndicator, _encode_RoamingIndicator } from "../TS33128Payloads/RoamingIndicator.ta.mjs";
// export { RoamingIndicator, _decode_RoamingIndicator, _encode_RoamingIndicator } from "../TS33128Payloads/RoamingIndicator.ta.mjs";
import { SBIType, _decode_SBIType, _encode_SBIType } from "../TS33128Payloads/SBIType.ta.mjs";
// export { SBIType, _decode_SBIType, _encode_SBIType } from "../TS33128Payloads/SBIType.ta.mjs";


/**
 * @summary IMSHSSServingSystemMessage
 * @description
 * 
 * The IRI-POI in the IMS-HSS shall generate an xIRI containing the
 * IMSHSSServingSystemMessage record when it detects the following events:
 *
 * - When the IMS-HSS receives the Roaming Status Update from the UDM as part of
 *   the Nhss_UEContextManagement_RoamingStatusUpdate service operation (see TS
 *   29.563 [100] clause 5.4.2.4).
 *
 * The IMSHSSServingSystem xIRI is also generated when the IMSHSS deregisters
 * the target due to a Nhss_ims UECM_DeregistrationRequest or updates the
 * roaming status of the target based on a Nhss_imsUECM_AuthorizationRequest
 * which includes a visitedNetworkIdentifier.
 *
 * 3GPP TS 33.128, clause 7.2.4.3.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IMSHSSServingSystemMessage ::= SEQUENCE
 * {
 *     iMSI                     [1] IMSI,
 *     oldPLMNID                [2] PLMNID,
 *     authorizationRequest     [3] AuthorizationRequest,
 *     roamingIndicator         [4] RoamingIndicator,
 *     deregistrationData       [5] SBIType OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class IMSHSSServingSystemMessage {
    /**
     * @summary `iMSI`.
     * @description
     *
     * IMSI associated with the target UE, See TS 29.563 [100] clause 6.3.6.2.5.
     *
     * 3GPP TS 33.128, clause 7.2.4.3.2.
     *
     * @public
     * @readonly
     */
    readonly iMSI: IMSI;
    /**
     * @summary `oldPLMNID`.
     * @description
     *
     * Includes the old PLMN for which the UE was previously registered.
     *
     * 3GPP TS 33.128, clause 7.2.4.3.2.
     *
     * @public
     * @readonly
     */
    readonly oldPLMNID: PLMNID;
    /**
     * @summary `authorizationRequest`.
     * @description
     *
     * Provides information related to the targets authorization to the IMS-HSS
     * when attempting to register via a visited network. See TS 29.562 [101]
     * clause 6.1.6.2.2.
     *
     * 3GPP TS 33.128, clause 7.2.4.3.2.
     *
     * @public
     * @readonly
     */
    readonly authorizationRequest: AuthorizationRequest;
    /**
     * @summary `roamingIndicator`.
     * @description
     *
     * Indicates if the serving PLMNID is different than the HPLMN or EHPLMN.
     *
     * 3GPP TS 33.128, clause 7.2.4.3.2.
     *
     * @public
     * @readonly
     */
    readonly roamingIndicator: RoamingIndicator;
    /**
     * @summary `deregistrationData`.
     * @description
     *
     * Includes information related to the deregistering target. Include if UECM
     * service operation is triggered by deregistration. Encoded according to TS
     * 29.562 [101] clause 6.1.6.2.13 (schema definition reference
     * TS29562_Nhss_ims_UECM.yaml).
     *
     * 3GPP TS 33.128, clause 7.2.4.3.2.
     *
     * @public
     * @readonly
     */
    readonly deregistrationData: OPTIONAL<SBIType>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        iMSI: IMSI,
        oldPLMNID: PLMNID,
        authorizationRequest: AuthorizationRequest,
        roamingIndicator: RoamingIndicator,
        deregistrationData: OPTIONAL<SBIType>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.iMSI = iMSI;
        this.oldPLMNID = oldPLMNID;
        this.authorizationRequest = authorizationRequest;
        this.roamingIndicator = roamingIndicator;
        this.deregistrationData = deregistrationData;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a IMSHSSServingSystemMessage
     * @description
     * 
     * This takes an `object` and converts it to a `IMSHSSServingSystemMessage`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IMSHSSServingSystemMessage`.
     * @returns {IMSHSSServingSystemMessage}
     */
    public static _from_object (_o: { [_K in keyof (IMSHSSServingSystemMessage)]: (IMSHSSServingSystemMessage)[_K] }): IMSHSSServingSystemMessage {
        return new IMSHSSServingSystemMessage(_o.iMSI, _o.oldPLMNID, _o.authorizationRequest, _o.roamingIndicator, _o.deregistrationData, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of IMSHSSServingSystemMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IMSHSSServingSystemMessage: $.ComponentSpec[] = [
    new $.ComponentSpec("iMSI", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("oldPLMNID", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("authorizationRequest", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("roamingIndicator", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("deregistrationData", true, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of IMSHSSServingSystemMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IMSHSSServingSystemMessage: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IMSHSSServingSystemMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IMSHSSServingSystemMessage: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_IMSHSSServingSystemMessage: $.ASN1Decoder<IMSHSSServingSystemMessage> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IMSHSSServingSystemMessage
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IMSHSSServingSystemMessage (el: _Element): IMSHSSServingSystemMessage {
    if (!_cached_decoder_for_IMSHSSServingSystemMessage) { _cached_decoder_for_IMSHSSServingSystemMessage = function (el: _Element): IMSHSSServingSystemMessage {
    let iMSI!: IMSI;
    let oldPLMNID!: PLMNID;
    let authorizationRequest!: AuthorizationRequest;
    let roamingIndicator!: RoamingIndicator;
    let deregistrationData: OPTIONAL<SBIType>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "iMSI": (_el: _Element): void => { iMSI = $._decode_implicit<IMSI>(() => _decode_IMSI)(_el); },
        "oldPLMNID": (_el: _Element): void => { oldPLMNID = $._decode_implicit<PLMNID>(() => _decode_PLMNID)(_el); },
        "authorizationRequest": (_el: _Element): void => { authorizationRequest = $._decode_implicit<AuthorizationRequest>(() => _decode_AuthorizationRequest)(_el); },
        "roamingIndicator": (_el: _Element): void => { roamingIndicator = $._decode_implicit<RoamingIndicator>(() => _decode_RoamingIndicator)(_el); },
        "deregistrationData": (_el: _Element): void => { deregistrationData = $._decode_implicit<SBIType>(() => _decode_SBIType)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_IMSHSSServingSystemMessage,
        _extension_additions_list_spec_for_IMSHSSServingSystemMessage,
        _root_component_type_list_2_spec_for_IMSHSSServingSystemMessage,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new IMSHSSServingSystemMessage(
        iMSI,
        oldPLMNID,
        authorizationRequest,
        roamingIndicator,
        deregistrationData,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_IMSHSSServingSystemMessage(el);
}

let _cached_encoder_for_IMSHSSServingSystemMessage: $.ASN1Encoder<IMSHSSServingSystemMessage> | null = null;

/**
 * @summary Encodes a(n) IMSHSSServingSystemMessage into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IMSHSSServingSystemMessage, encoded as an ASN.1 Element.
 */
export
function _encode_IMSHSSServingSystemMessage (value: IMSHSSServingSystemMessage, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IMSHSSServingSystemMessage) { _cached_encoder_for_IMSHSSServingSystemMessage = function (value: IMSHSSServingSystemMessage, elGetter: $.ASN1Encoder<IMSHSSServingSystemMessage>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(5 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_IMSI, $.BER)(value.iMSI, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_PLMNID, $.BER)(value.oldPLMNID, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_AuthorizationRequest, $.BER)(value.authorizationRequest, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_RoamingIndicator, $.BER)(value.roamingIndicator, $.BER);
    if (value.deregistrationData !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_SBIType, $.BER)(value.deregistrationData, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_IMSHSSServingSystemMessage(value, elGetter);
}


/* eslint-enable */
