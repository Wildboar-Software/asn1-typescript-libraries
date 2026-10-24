/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MSISDN, _decode_MSISDN, _encode_MSISDN } from "../TS33128Payloads/MSISDN.ta.mjs";
// export { MSISDN, _decode_MSISDN, _encode_MSISDN } from "../TS33128Payloads/MSISDN.ta.mjs";
import { NAI, _decode_NAI, _encode_NAI } from "../TS33128Payloads/NAI.ta.mjs";
// export { NAI, _decode_NAI, _encode_NAI } from "../TS33128Payloads/NAI.ta.mjs";
import { SCSASID, _decode_SCSASID, _encode_SCSASID } from "../TS33128Payloads/SCSASID.ta.mjs";
// export { SCSASID, _decode_SCSASID, _encode_SCSASID } from "../TS33128Payloads/SCSASID.ta.mjs";
import { SBIType, _decode_SBIType, _encode_SBIType } from "../TS33128Payloads/SBIType.ta.mjs";
// export { SBIType, _decode_SBIType, _encode_SBIType } from "../TS33128Payloads/SBIType.ta.mjs";
import { AForASSessionWithQoSResponseCode, _decode_AForASSessionWithQoSResponseCode, _encode_AForASSessionWithQoSResponseCode, _enum_for_AForASSessionWithQoSResponseCode } from "../TS33128Payloads/AForASSessionWithQoSResponseCode.ta.mjs";
// export { AForASSessionWithQoSResponseCode, _enum_for_AForASSessionWithQoSResponseCode, AForASSessionWithQoSResponseCode_oK200 /* IMPORTED_LONG_ENUMERATION_ITEM */, oK200 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AForASSessionWithQoSResponseCode_created201 /* IMPORTED_LONG_ENUMERATION_ITEM */, created201 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AForASSessionWithQoSResponseCode_noContent204 /* IMPORTED_LONG_ENUMERATION_ITEM */, noContent204 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AForASSessionWithQoSResponseCode_temporaryRedirect307 /* IMPORTED_LONG_ENUMERATION_ITEM */, temporaryRedirect307 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AForASSessionWithQoSResponseCode_permanentRedirect308 /* IMPORTED_LONG_ENUMERATION_ITEM */, permanentRedirect308 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AForASSessionWithQoSResponseCode_badRequest400 /* IMPORTED_LONG_ENUMERATION_ITEM */, badRequest400 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AForASSessionWithQoSResponseCode_unauthorized401 /* IMPORTED_LONG_ENUMERATION_ITEM */, unauthorized401 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AForASSessionWithQoSResponseCode_forbidden403 /* IMPORTED_LONG_ENUMERATION_ITEM */, forbidden403 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AForASSessionWithQoSResponseCode_notFound404 /* IMPORTED_LONG_ENUMERATION_ITEM */, notFound404 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AForASSessionWithQoSResponseCode_notAcceptable406 /* IMPORTED_LONG_ENUMERATION_ITEM */, notAcceptable406 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AForASSessionWithQoSResponseCode_lengthRequired411 /* IMPORTED_LONG_ENUMERATION_ITEM */, lengthRequired411 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AForASSessionWithQoSResponseCode_unsupportedMediaType415 /* IMPORTED_LONG_ENUMERATION_ITEM */, unsupportedMediaType415 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AForASSessionWithQoSResponseCode_tooManyRequests429 /* IMPORTED_LONG_ENUMERATION_ITEM */, tooManyRequests429 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AForASSessionWithQoSResponseCode_internalServerError500 /* IMPORTED_LONG_ENUMERATION_ITEM */, internalServerError500 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AForASSessionWithQoSResponseCode_serviceUnavailable503 /* IMPORTED_LONG_ENUMERATION_ITEM */, serviceUnavailable503 /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AForASSessionWithQoSResponseCode, _encode_AForASSessionWithQoSResponseCode } from "../TS33128Payloads/AForASSessionWithQoSResponseCode.ta.mjs";


/**
 * @summary SCEFASSessionWithQoSNotification
 * @description
 * 
 * The IRI-POI in the SCEF shall generate an xIRI containing a
 * SCEFASSessionWithQoSNotification record when the IRI-POI present in the SCEF
 * detects that the SCEF has notified the SCS/AS about changes in the
 * transmission resource status of the AS session.
 *
 * Accordingly, the IRI-POI in the SCEF generates the xIRI when any of the
 * following events is detected (see TS 29.122 [63] clause 5.14):
 *
 * - SCEF receives a Status information Response in response to Status
 *   information Request (POST) sent to SCS/AS to notify changes in the
 *   transmission resource status of an AS session associated with the target
 *   UE.
 *
 * NOTE: At least one of the MSISDN or External Identifier fields shall be
 * present.
 *
 * Table 7.8.6.2-1 gives the LI_HI2 IRI message type for this record as REPORT.
 *
 * 3GPP TS 33.128, clause 7.8.6.1.3.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SCEFASSessionWithQoSNotification ::= SEQUENCE
 * {
 *     mSISDN                               [1] MSISDN OPTIONAL,
 *     externalIdentifier                   [2] NAI OPTIONAL,
 *     sCSASID                              [3] SCSASID,
 *     userPlaneNotificationData            [4] SBIType,
 *     aSSessionWithQoSResponseCode         [5] AForASSessionWithQoSResponseCode
 * }
 * ```
 * 
 * @class
 */
export
class SCEFASSessionWithQoSNotification {
    /**
     * @summary `mSISDN`.
     * @description
     *
     * MSISDN of the target UE the AS session with required QoS applies to, if
     * available (see NOTE). NOTE: At least one of the MSISDN or External
     * Identifier fields shall be present.
     *
     * 3GPP TS 33.128, clause 7.8.6.1.3.
     *
     * @public
     * @readonly
     */
    readonly mSISDN: OPTIONAL<MSISDN>;
    /**
     * @summary `externalIdentifier`.
     * @description
     *
     * External Identifier of the target UE the AS session with required QoS
     * applies to, if available (see NOTE). NOTE: At least one of the MSISDN or
     * External Identifier fields shall be present.
     *
     * 3GPP TS 33.128, clause 7.8.6.1.3.
     *
     * @public
     * @readonly
     */
    readonly externalIdentifier: OPTIONAL<NAI>;
    /**
     * @summary `sCSASID`.
     * @public
     * @readonly
     */
    readonly sCSASID: SCSASID;
    /**
     * @summary `userPlaneNotificationData`.
     * @description
     *
     * Includes a userPlaneNotificationData resource according to TS 29.122 [63]
     * clause A.14. The SBIReference for this parameter shall be populated with
     * 'TS29122_AsSessionWithQoS.yaml#/components/schemas/
     * UserPlaneNotificationData'.
     *
     * 3GPP TS 33.128, clause 7.8.6.1.3.
     *
     * @public
     * @readonly
     */
    readonly userPlaneNotificationData: SBIType;
    /**
     * @summary `aSSessionWithQoSResponseCode`.
     * @description
     *
     * Identifies the response code returned by SCS/AS associated to the
     * ASSessionWithQoS notification sent by SCEF to SCS/AS.
     *
     * 3GPP TS 33.128, clause 7.8.6.1.3.
     *
     * @public
     * @readonly
     */
    readonly aSSessionWithQoSResponseCode: AForASSessionWithQoSResponseCode;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        mSISDN: OPTIONAL<MSISDN>,
        externalIdentifier: OPTIONAL<NAI>,
        sCSASID: SCSASID,
        userPlaneNotificationData: SBIType,
        aSSessionWithQoSResponseCode: AForASSessionWithQoSResponseCode,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.mSISDN = mSISDN;
        this.externalIdentifier = externalIdentifier;
        this.sCSASID = sCSASID;
        this.userPlaneNotificationData = userPlaneNotificationData;
        this.aSSessionWithQoSResponseCode = aSSessionWithQoSResponseCode;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a SCEFASSessionWithQoSNotification
     * @description
     * 
     * This takes an `object` and converts it to a `SCEFASSessionWithQoSNotification`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SCEFASSessionWithQoSNotification`.
     * @returns {SCEFASSessionWithQoSNotification}
     */
    public static _from_object (_o: { [_K in keyof (SCEFASSessionWithQoSNotification)]: (SCEFASSessionWithQoSNotification)[_K] }): SCEFASSessionWithQoSNotification {
        return new SCEFASSessionWithQoSNotification(_o.mSISDN, _o.externalIdentifier, _o.sCSASID, _o.userPlaneNotificationData, _o.aSSessionWithQoSResponseCode, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `aSSessionWithQoSResponseCode`
         * @public
         * @static
         */

    public static _enum_for_aSSessionWithQoSResponseCode = _enum_for_AForASSessionWithQoSResponseCode;
}

/**
 * @summary The Leading Root Component Types of SCEFASSessionWithQoSNotification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SCEFASSessionWithQoSNotification: $.ComponentSpec[] = [
    new $.ComponentSpec("mSISDN", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("externalIdentifier", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("sCSASID", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("userPlaneNotificationData", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("aSSessionWithQoSResponseCode", false, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of SCEFASSessionWithQoSNotification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SCEFASSessionWithQoSNotification: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SCEFASSessionWithQoSNotification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SCEFASSessionWithQoSNotification: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SCEFASSessionWithQoSNotification: $.ASN1Decoder<SCEFASSessionWithQoSNotification> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SCEFASSessionWithQoSNotification
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SCEFASSessionWithQoSNotification (el: _Element): SCEFASSessionWithQoSNotification {
    if (!_cached_decoder_for_SCEFASSessionWithQoSNotification) { _cached_decoder_for_SCEFASSessionWithQoSNotification = function (el: _Element): SCEFASSessionWithQoSNotification {
    let mSISDN: OPTIONAL<MSISDN>;
    let externalIdentifier: OPTIONAL<NAI>;
    let sCSASID!: SCSASID;
    let userPlaneNotificationData!: SBIType;
    let aSSessionWithQoSResponseCode!: AForASSessionWithQoSResponseCode;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "mSISDN": (_el: _Element): void => { mSISDN = $._decode_implicit<MSISDN>(() => _decode_MSISDN)(_el); },
        "externalIdentifier": (_el: _Element): void => { externalIdentifier = $._decode_implicit<NAI>(() => _decode_NAI)(_el); },
        "sCSASID": (_el: _Element): void => { sCSASID = $._decode_implicit<SCSASID>(() => _decode_SCSASID)(_el); },
        "userPlaneNotificationData": (_el: _Element): void => { userPlaneNotificationData = $._decode_implicit<SBIType>(() => _decode_SBIType)(_el); },
        "aSSessionWithQoSResponseCode": (_el: _Element): void => { aSSessionWithQoSResponseCode = $._decode_implicit<AForASSessionWithQoSResponseCode>(() => _decode_AForASSessionWithQoSResponseCode)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SCEFASSessionWithQoSNotification,
        _extension_additions_list_spec_for_SCEFASSessionWithQoSNotification,
        _root_component_type_list_2_spec_for_SCEFASSessionWithQoSNotification,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new SCEFASSessionWithQoSNotification(
        mSISDN,
        externalIdentifier,
        sCSASID,
        userPlaneNotificationData,
        aSSessionWithQoSResponseCode,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_SCEFASSessionWithQoSNotification(el);
}

let _cached_encoder_for_SCEFASSessionWithQoSNotification: $.ASN1Encoder<SCEFASSessionWithQoSNotification> | null = null;

/**
 * @summary Encodes a(n) SCEFASSessionWithQoSNotification into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SCEFASSessionWithQoSNotification, encoded as an ASN.1 Element.
 */
export
function _encode_SCEFASSessionWithQoSNotification (value: SCEFASSessionWithQoSNotification, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SCEFASSessionWithQoSNotification) { _cached_encoder_for_SCEFASSessionWithQoSNotification = function (value: SCEFASSessionWithQoSNotification, elGetter: $.ASN1Encoder<SCEFASSessionWithQoSNotification>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(5 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.mSISDN !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_MSISDN, $.BER)(value.mSISDN, $.BER);
    }
    if (value.externalIdentifier !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_NAI, $.BER)(value.externalIdentifier, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_SCSASID, $.BER)(value.sCSASID, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_SBIType, $.BER)(value.userPlaneNotificationData, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => _encode_AForASSessionWithQoSResponseCode, $.BER)(value.aSSessionWithQoSResponseCode, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_SCEFASSessionWithQoSNotification(value, elGetter);
}


/* eslint-enable */
