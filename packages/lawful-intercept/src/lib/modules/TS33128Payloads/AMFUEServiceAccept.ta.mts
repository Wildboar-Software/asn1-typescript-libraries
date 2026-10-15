/* eslint-disable */
import {
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { UserIdentifiers, _decode_UserIdentifiers, _encode_UserIdentifiers } from "../TS33128Payloads/UserIdentifiers.ta.mjs";
// export { UserIdentifiers, _decode_UserIdentifiers, _encode_UserIdentifiers } from "../TS33128Payloads/UserIdentifiers.ta.mjs";
import { ServiceMessageIdentity, _decode_ServiceMessageIdentity, _encode_ServiceMessageIdentity } from "../TS33128Payloads/ServiceMessageIdentity.ta.mjs";
// export { ServiceMessageIdentity, _decode_ServiceMessageIdentity, _encode_ServiceMessageIdentity } from "../TS33128Payloads/ServiceMessageIdentity.ta.mjs";
import { FiveGTMSI, _decode_FiveGTMSI, _encode_FiveGTMSI } from "../TS33128Payloads/FiveGTMSI.ta.mjs";
// export { FiveGTMSI, _decode_FiveGTMSI, _encode_FiveGTMSI } from "../TS33128Payloads/FiveGTMSI.ta.mjs";
import { FiveGSMRequestType, _decode_FiveGSMRequestType, _encode_FiveGSMRequestType, _enum_for_FiveGSMRequestType } from "../TS33128Payloads/FiveGSMRequestType.ta.mjs";
// export { FiveGSMRequestType, _enum_for_FiveGSMRequestType, FiveGSMRequestType_initialRequest /* IMPORTED_LONG_ENUMERATION_ITEM */, initialRequest /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGSMRequestType_existingPDUSession /* IMPORTED_LONG_ENUMERATION_ITEM */, existingPDUSession /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGSMRequestType_initialEmergencyRequest /* IMPORTED_LONG_ENUMERATION_ITEM */, initialEmergencyRequest /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGSMRequestType_existingEmergencyPDUSession /* IMPORTED_LONG_ENUMERATION_ITEM */, existingEmergencyPDUSession /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGSMRequestType_modificationRequest /* IMPORTED_LONG_ENUMERATION_ITEM */, modificationRequest /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGSMRequestType_reserved /* IMPORTED_LONG_ENUMERATION_ITEM */, reserved /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGSMRequestType_mAPDURequest /* IMPORTED_LONG_ENUMERATION_ITEM */, mAPDURequest /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_FiveGSMRequestType, _encode_FiveGSMRequestType } from "../TS33128Payloads/FiveGSMRequestType.ta.mjs";
import { PagingRestrictionIndicator, _decode_PagingRestrictionIndicator, _encode_PagingRestrictionIndicator } from "../TS33128Payloads/PagingRestrictionIndicator.ta.mjs";
// export { PagingRestrictionIndicator, _decode_PagingRestrictionIndicator, _encode_PagingRestrictionIndicator } from "../TS33128Payloads/PagingRestrictionIndicator.ta.mjs";
import { TAIList, _decode_TAIList, _encode_TAIList } from "../TS33128Payloads/TAIList.ta.mjs";
// export { TAIList, _decode_TAIList, _encode_TAIList } from "../TS33128Payloads/TAIList.ta.mjs";
import { MUSIMUERequestType, _decode_MUSIMUERequestType, _encode_MUSIMUERequestType } from "../TS33128Payloads/MUSIMUERequestType.ta.mjs";
// export { MUSIMUERequestType, _decode_MUSIMUERequestType, _encode_MUSIMUERequestType } from "../TS33128Payloads/MUSIMUERequestType.ta.mjs";


/**
 * @summary AMFUEServiceAccept
 * @description
 * 
 * The IRI-POI in the AMF shall generate an xIRI containing an or
 * AMFUEServiceAccept record when the IRI-POI in present in the AMF detects that
 * the AMF has sent a service accept in response to a service request or control
 * plane service request from the target. Accordingly, the IRI-POI in the AMF
 * generates the xIRI when any of the following events are detected:
 *
 * - AMF sends a SERVICE ACCEPT message to the target in response to a SERVICE
 *   REQUEST message from the target.
 *
 * - AMF sends a SERVICE ACCEPT message to the target in response to a CONTROL
 *   PLANE SERVICE REQUEST message from the target.
 *
 * 3GPP TS 33.128, clause 6.2.2.2.13.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AMFUEServiceAccept ::= SEQUENCE
 * {
 *     userIdentifiers                [1] UserIdentifiers,
 *     serviceMessageIdentity         [2] ServiceMessageIdentity,
 *     serviceType                    [3] OCTET STRING (SIZE(1)) OPTIONAL,
 *     fiveGTMSI                      [4] FiveGTMSI OPTIONAL,
 *     uplinkDataStatus               [5] OCTET STRING (SIZE(2..32)) OPTIONAL,
 *     pDUSessionStatus               [6] OCTET STRING (SIZE(2..32)) OPTIONAL,
 *     -- deprecatedUERequestType was deprecated in r18(18) version6(6) and shall not be reused.
 *     deprecatedUERequestType        [7] FiveGSMRequestType OPTIONAL,
 *     pagingRestriction              [8] PagingRestrictionIndicator OPTIONAL,
 *     forbiddenTAIList               [9] TAIList OPTIONAL,
 *     uERequestType                  [10] MUSIMUERequestType OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class AMFUEServiceAccept {
    /**
     * @summary `userIdentifiers`.
     * @description
     *
     * List of identifiers, including the target identifier, associated with the
     * target UE registration stored in the AMF context. See TS 29.518 [22]
     * clause 6.1.6.2.25.
     *
     * 3GPP TS 33.128, clause 6.2.2.2.13.
     *
     * @public
     * @readonly
     */
    readonly userIdentifiers: UserIdentifiers;
    /**
     * @summary `serviceMessageIdentity`.
     * @description
     *
     * Indicates the type of message sent within the SERVICE ACCEPT from the AMF
     * to the UE. Encoding per TS 24.501 [13] clause 9.7.
     *
     * 3GPP TS 33.128, clause 6.2.2.2.13.
     *
     * @public
     * @readonly
     */
    readonly serviceMessageIdentity: ServiceMessageIdentity;
    /**
     * @summary `serviceType`.
     * @description
     *
     * Indicates the purpose of the service request procedure. Encoded per TS
     * 24.501 [13] clause 9.11.3.50.
     *
     * 3GPP TS 33.128, clause 6.2.2.2.13.
     *
     * @public
     * @readonly
     */
    readonly serviceType: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `fiveGTMSI`.
     * @description
     *
     * TMSI value associated with the target within the AMF context. Include if
     * known. Encoded per 24.501 [13] figure 9.11.3.4.5
     *
     * 3GPP TS 33.128, clause 6.2.2.2.13.
     *
     * @public
     * @readonly
     */
    readonly fiveGTMSI: OPTIONAL<FiveGTMSI>;
    /**
     * @summary `uplinkDataStatus`.
     * @description
     *
     * Indicates if uplink data is pending for the PDU Session modified in the
     * SERVICE REQUEST. See 24.501 [13] clause 9.11.3.57.
     *
     * 3GPP TS 33.128, clause 6.2.2.2.13.
     *
     * @public
     * @readonly
     */
    readonly uplinkDataStatus: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `pDUSessionStatus`.
     * @description
     *
     * Indicates the current status of the PDU Session (active, inactive) for
     * the PDU Session the target has attempted to activate. This parameter is
     * encoded using the format defined in TS 24.501 [13] clause 9.11.3.44.
     *
     * 3GPP TS 33.128, clause 6.2.2.2.13.
     *
     * @public
     * @readonly
     */
    readonly pDUSessionStatus: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `deprecatedUERequestType`.
     * @description
     *
     * No longer used in present version of this specification. Use
     * uERequestType instead.
     *
     * 3GPP TS 33.128, clause 6.2.2.2.13.
     *
     * @public
     * @readonly
     */
    readonly deprecatedUERequestType: OPTIONAL<FiveGSMRequestType>;
    /**
     * @summary `pagingRestriction`.
     * @description
     *
     * Indicates the current paging restriction status for the target as known
     * at the AMF. Encoded per TS 24.501 [13] clause 9.11.3.77.2, omitting the
     * first two octets.
     *
     * 3GPP TS 33.128, clause 6.2.2.2.13.
     *
     * @public
     * @readonly
     */
    readonly pagingRestriction: OPTIONAL<PagingRestrictionIndicator>;
    /**
     * @summary `forbiddenTAIList`.
     * @description
     *
     * Provides a list of tracking areas that the UE is forbidden to use either
     * during roaming or configured via regional service provisioning. See TS
     * 24.501 [13] clause 8.2.17.7 and 8.2.17.8.
     *
     * 3GPP TS 33.128, clause 6.2.2.2.13.
     *
     * @public
     * @readonly
     */
    readonly forbiddenTAIList: OPTIONAL<TAIList>;
    /**
     * @summary `uERequestType`.
     * @description
     *
     * Indicates a MUSIM UE has requested release of NAS signalling or has
     * rejected paging. Include if the UE Request Type IE message (see TS 24.501
     * [18] clause 9.11.3.76) is sent in the SERVICE REQUEST or CONTROL PLANE
     * SERVICE REQUEST. Encoded per UE Request Type as defined in TS 24.301 [51]
     * clause 9.9.3.65 omitting the first two octets.
     *
     * 3GPP TS 33.128, clause 6.2.2.2.13.
     *
     * @public
     * @readonly
     */
    readonly uERequestType: OPTIONAL<MUSIMUERequestType>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        userIdentifiers: UserIdentifiers,
        serviceMessageIdentity: ServiceMessageIdentity,
        serviceType: OPTIONAL<OCTET_STRING>,
        fiveGTMSI: OPTIONAL<FiveGTMSI>,
        uplinkDataStatus: OPTIONAL<OCTET_STRING>,
        pDUSessionStatus: OPTIONAL<OCTET_STRING>,
        deprecatedUERequestType: OPTIONAL<FiveGSMRequestType>,
        pagingRestriction: OPTIONAL<PagingRestrictionIndicator>,
        forbiddenTAIList: OPTIONAL<TAIList>,
        uERequestType: OPTIONAL<MUSIMUERequestType>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.userIdentifiers = userIdentifiers;
        this.serviceMessageIdentity = serviceMessageIdentity;
        this.serviceType = serviceType;
        this.fiveGTMSI = fiveGTMSI;
        this.uplinkDataStatus = uplinkDataStatus;
        this.pDUSessionStatus = pDUSessionStatus;
        this.deprecatedUERequestType = deprecatedUERequestType;
        this.pagingRestriction = pagingRestriction;
        this.forbiddenTAIList = forbiddenTAIList;
        this.uERequestType = uERequestType;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a AMFUEServiceAccept
     * @description
     * 
     * This takes an `object` and converts it to a `AMFUEServiceAccept`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AMFUEServiceAccept`.
     * @returns {AMFUEServiceAccept}
     */
    public static _from_object (_o: { [_K in keyof (AMFUEServiceAccept)]: (AMFUEServiceAccept)[_K] }): AMFUEServiceAccept {
        return new AMFUEServiceAccept(_o.userIdentifiers, _o.serviceMessageIdentity, _o.serviceType, _o.fiveGTMSI, _o.uplinkDataStatus, _o.pDUSessionStatus, _o.deprecatedUERequestType, _o.pagingRestriction, _o.forbiddenTAIList, _o.uERequestType, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `deprecatedUERequestType`
         * @public
         * @static
         */

    public static _enum_for_deprecatedUERequestType = _enum_for_FiveGSMRequestType;
}

/**
 * @summary The Leading Root Component Types of AMFUEServiceAccept
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AMFUEServiceAccept: $.ComponentSpec[] = [
    new $.ComponentSpec("userIdentifiers", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("serviceMessageIdentity", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("serviceType", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("fiveGTMSI", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("uplinkDataStatus", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("pDUSessionStatus", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("deprecatedUERequestType", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("pagingRestriction", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("forbiddenTAIList", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("uERequestType", true, $.hasTag(_TagClass.context, 10))
];

/**
 * @summary The Trailing Root Component Types of AMFUEServiceAccept
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AMFUEServiceAccept: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AMFUEServiceAccept
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AMFUEServiceAccept: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AMFUEServiceAccept: $.ASN1Decoder<AMFUEServiceAccept> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AMFUEServiceAccept
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AMFUEServiceAccept (el: _Element): AMFUEServiceAccept {
    if (!_cached_decoder_for_AMFUEServiceAccept) { _cached_decoder_for_AMFUEServiceAccept = function (el: _Element): AMFUEServiceAccept {
    let userIdentifiers!: UserIdentifiers;
    let serviceMessageIdentity!: ServiceMessageIdentity;
    let serviceType: OPTIONAL<OCTET_STRING>;
    let fiveGTMSI: OPTIONAL<FiveGTMSI>;
    let uplinkDataStatus: OPTIONAL<OCTET_STRING>;
    let pDUSessionStatus: OPTIONAL<OCTET_STRING>;
    let deprecatedUERequestType: OPTIONAL<FiveGSMRequestType>;
    let pagingRestriction: OPTIONAL<PagingRestrictionIndicator>;
    let forbiddenTAIList: OPTIONAL<TAIList>;
    let uERequestType: OPTIONAL<MUSIMUERequestType>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "userIdentifiers": (_el: _Element): void => { userIdentifiers = $._decode_implicit<UserIdentifiers>(() => _decode_UserIdentifiers)(_el); },
        "serviceMessageIdentity": (_el: _Element): void => { serviceMessageIdentity = $._decode_explicit<ServiceMessageIdentity>(() => _decode_ServiceMessageIdentity)(_el); },
        "serviceType": (_el: _Element): void => {
            serviceType = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (serviceType.length < 1 || serviceType.length > 1) {
                throw new ASN1SizeError("AMFUEServiceAccept.serviceType violates SIZE constraint");
            }
        },
        "fiveGTMSI": (_el: _Element): void => { fiveGTMSI = $._decode_implicit<FiveGTMSI>(() => _decode_FiveGTMSI)(_el); },
        "uplinkDataStatus": (_el: _Element): void => {
            uplinkDataStatus = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (uplinkDataStatus.length < 2 || uplinkDataStatus.length > 32) {
                throw new ASN1SizeError("AMFUEServiceAccept.uplinkDataStatus violates SIZE constraint");
            }
        },
        "pDUSessionStatus": (_el: _Element): void => {
            pDUSessionStatus = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (pDUSessionStatus.length < 2 || pDUSessionStatus.length > 32) {
                throw new ASN1SizeError("AMFUEServiceAccept.pDUSessionStatus violates SIZE constraint");
            }
        },
        "deprecatedUERequestType": (_el: _Element): void => { deprecatedUERequestType = $._decode_implicit<FiveGSMRequestType>(() => _decode_FiveGSMRequestType)(_el); },
        "pagingRestriction": (_el: _Element): void => { pagingRestriction = $._decode_implicit<PagingRestrictionIndicator>(() => _decode_PagingRestrictionIndicator)(_el); },
        "forbiddenTAIList": (_el: _Element): void => { forbiddenTAIList = $._decode_implicit<TAIList>(() => _decode_TAIList)(_el); },
        "uERequestType": (_el: _Element): void => { uERequestType = $._decode_implicit<MUSIMUERequestType>(() => _decode_MUSIMUERequestType)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AMFUEServiceAccept,
        _extension_additions_list_spec_for_AMFUEServiceAccept,
        _root_component_type_list_2_spec_for_AMFUEServiceAccept,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new AMFUEServiceAccept(
        userIdentifiers,
        serviceMessageIdentity,
        serviceType,
        fiveGTMSI,
        uplinkDataStatus,
        pDUSessionStatus,
        deprecatedUERequestType,
        pagingRestriction,
        forbiddenTAIList,
        uERequestType,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_AMFUEServiceAccept(el);
}

let _cached_encoder_for_AMFUEServiceAccept: $.ASN1Encoder<AMFUEServiceAccept> | null = null;

/**
 * @summary Encodes a(n) AMFUEServiceAccept into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AMFUEServiceAccept, encoded as an ASN.1 Element.
 */
export
function _encode_AMFUEServiceAccept (value: AMFUEServiceAccept, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AMFUEServiceAccept) { _cached_encoder_for_AMFUEServiceAccept = function (value: AMFUEServiceAccept, elGetter: $.ASN1Encoder<AMFUEServiceAccept>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(10 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_UserIdentifiers, $.BER)(value.userIdentifiers, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_ServiceMessageIdentity, $.BER)(value.serviceMessageIdentity, $.BER);
    if (value.serviceType !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.serviceType, $.BER);
    }
    if (value.fiveGTMSI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_FiveGTMSI, $.BER)(value.fiveGTMSI, $.BER);
    }
    if (value.uplinkDataStatus !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeOctetString, $.BER)(value.uplinkDataStatus, $.BER);
    }
    if (value.pDUSessionStatus !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeOctetString, $.BER)(value.pDUSessionStatus, $.BER);
    }
    if (value.deprecatedUERequestType !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => _encode_FiveGSMRequestType, $.BER)(value.deprecatedUERequestType, $.BER);
    }
    if (value.pagingRestriction !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => _encode_PagingRestrictionIndicator, $.BER)(value.pagingRestriction, $.BER);
    }
    if (value.forbiddenTAIList !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => _encode_TAIList, $.BER)(value.forbiddenTAIList, $.BER);
    }
    if (value.uERequestType !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => _encode_MUSIMUERequestType, $.BER)(value.uERequestType, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_AMFUEServiceAccept(value, elGetter);
}


/* eslint-enable */
