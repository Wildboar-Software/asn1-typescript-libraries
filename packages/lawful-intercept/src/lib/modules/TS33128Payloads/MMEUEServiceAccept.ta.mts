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
import { TMSI, _decode_TMSI, _encode_TMSI } from "../TS33128Payloads/TMSI.ta.mjs";
// export { TMSI, _decode_TMSI, _encode_TMSI } from "../TS33128Payloads/TMSI.ta.mjs";
import { MUSIMUERequestType, _decode_MUSIMUERequestType, _encode_MUSIMUERequestType } from "../TS33128Payloads/MUSIMUERequestType.ta.mjs";
// export { MUSIMUERequestType, _decode_MUSIMUERequestType, _encode_MUSIMUERequestType } from "../TS33128Payloads/MUSIMUERequestType.ta.mjs";
import { PagingRestrictionIndicator, _decode_PagingRestrictionIndicator, _encode_PagingRestrictionIndicator } from "../TS33128Payloads/PagingRestrictionIndicator.ta.mjs";
// export { PagingRestrictionIndicator, _decode_PagingRestrictionIndicator, _encode_PagingRestrictionIndicator } from "../TS33128Payloads/PagingRestrictionIndicator.ta.mjs";


/**
 * @summary MMEUEServiceAccept
 * @description
 * 
 * The IRI-POI in the MME shall generate an xIRI containing an
 * MMEUEServiceAccept record when the IRI-POI in present in the MME detects that
 * the MME considers a service request procedure initiated by the target to be
 * completed successfully (see TS 24.301 [51] clause 5.6.1.4).
 *
 * 3GPP TS 33.128, clause 6.3.2.2.11.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMEUEServiceAccept ::= SEQUENCE
 * {
 *     userIdentifiers          [1] UserIdentifiers,
 *     serviceType              [2] OCTET STRING (SIZE(1)) OPTIONAL,
 *     mTMSI                    [3] TMSI OPTIONAL,
 *     cSFBResponse             [4] OCTET STRING (SIZE (1)) OPTIONAL,
 *     uEEPSBearerContextStatus [5] OCTET STRING (SIZE(2)) OPTIONAL,
 *     uERequestType            [6] MUSIMUERequestType OPTIONAL,
 *     pagingRestriction        [7] PagingRestrictionIndicator OPTIONAL,
 *     controlPlaneServiceType  [8] OCTET STRING (SIZE(1)) OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class MMEUEServiceAccept {
    /**
     * @summary `userIdentifiers`.
     * @description
     *
     * List of identifiers, including the target identifier, associated with the
     * target UE registration stored in the MME context. See TS 23.401 [50]
     * clause 5.7.2.
     *
     * 3GPP TS 33.128, clause 6.3.2.2.11.
     *
     * @public
     * @readonly
     */
    readonly userIdentifiers: UserIdentifiers;
    /**
     * @summary `serviceType`.
     * @description
     *
     * Indicates the purpose of the service request procedure. Encoded per TS
     * 24.301 [51] clause 9.9.3.27.
     *
     * 3GPP TS 33.128, clause 6.3.2.2.11.
     *
     * @public
     * @readonly
     */
    readonly serviceType: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `mTMSI`.
     * @description
     *
     * TMSI value associated with the target within the MME context. Shall be
     * included if known. Encoded per TS 24.501 [13] figure 9.11.3.4.5.
     *
     * 3GPP TS 33.128, clause 6.3.2.2.11.
     *
     * @public
     * @readonly
     */
    readonly mTMSI: OPTIONAL<TMSI>;
    /**
     * @summary `cSFBResponse`.
     * @description
     *
     * Indicates whether the target UE accepted circuit switched fallback. Shall
     * be present if the CSFB response IE was present in the request that
     * triggered the procedure reported by the xIRI (see TS 24.301 [51] clause
     * 9.9.3.5).
     *
     * 3GPP TS 33.128, clause 6.3.2.2.11.
     *
     * @public
     * @readonly
     */
    readonly cSFBResponse: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `uEEPSBearerContextStatus`.
     * @description
     *
     * Indicates the state of each EPS bearer context at the target UE. Shall be
     * present if the EPS bearer context status IE was present in the request
     * that triggered the procedure reported by the xIRI (see TS 24.301 [51]
     * clauses 8.2.15 and 8.2.33). Encoded per TS 24.301 [51] clause 9.9.2.1
     * omitting the first two octets.
     *
     * 3GPP TS 33.128, clause 6.3.2.2.11.
     *
     * @public
     * @readonly
     */
    readonly uEEPSBearerContextStatus: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `uERequestType`.
     * @description
     *
     * Indicates the type of request sent by the UE. Shall be present if the UE
     * request type indication IE was present in the request that initiated the
     * procedure being reported by the xIRI. Encoded per TS 24.301 [51] clause
     * 9.9.3.65.
     *
     * 3GPP TS 33.128, clause 6.3.2.2.11.
     *
     * @public
     * @readonly
     */
    readonly uERequestType: OPTIONAL<MUSIMUERequestType>;
    /**
     * @summary `pagingRestriction`.
     * @description
     *
     * Indicates the current paging restriction status for the target as known
     * at the MME. Shall be present if the Paging restriction IE was present in
     * the request that initiated the procedure being reported by the xIRI.
     * Encoded per TS 24.301 [51] clause 9.9.3.66 omitting the first two octets.
     *
     * 3GPP TS 33.128, clause 6.3.2.2.11.
     *
     * @public
     * @readonly
     */
    readonly pagingRestriction: OPTIONAL<PagingRestrictionIndicator>;
    /**
     * @summary `controlPlaneServiceType`.
     * @description
     *
     * Indicates the purpose of the control plane service request procedure.
     * Shall be present if the request that initiated the procedure being
     * reported by the xIRI was a Control Plane Service Request. Encoded per TS
     * 24.301 [51] clause 9.9.3.47.
     *
     * 3GPP TS 33.128, clause 6.3.2.2.11.
     *
     * @public
     * @readonly
     */
    readonly controlPlaneServiceType: OPTIONAL<OCTET_STRING>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        userIdentifiers: UserIdentifiers,
        serviceType: OPTIONAL<OCTET_STRING>,
        mTMSI: OPTIONAL<TMSI>,
        cSFBResponse: OPTIONAL<OCTET_STRING>,
        uEEPSBearerContextStatus: OPTIONAL<OCTET_STRING>,
        uERequestType: OPTIONAL<MUSIMUERequestType>,
        pagingRestriction: OPTIONAL<PagingRestrictionIndicator>,
        controlPlaneServiceType: OPTIONAL<OCTET_STRING>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.userIdentifiers = userIdentifiers;
        this.serviceType = serviceType;
        this.mTMSI = mTMSI;
        this.cSFBResponse = cSFBResponse;
        this.uEEPSBearerContextStatus = uEEPSBearerContextStatus;
        this.uERequestType = uERequestType;
        this.pagingRestriction = pagingRestriction;
        this.controlPlaneServiceType = controlPlaneServiceType;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a MMEUEServiceAccept
     * @description
     * 
     * This takes an `object` and converts it to a `MMEUEServiceAccept`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MMEUEServiceAccept`.
     * @returns {MMEUEServiceAccept}
     */
    public static _from_object (_o: { [_K in keyof (MMEUEServiceAccept)]: (MMEUEServiceAccept)[_K] }): MMEUEServiceAccept {
        return new MMEUEServiceAccept(_o.userIdentifiers, _o.serviceType, _o.mTMSI, _o.cSFBResponse, _o.uEEPSBearerContextStatus, _o.uERequestType, _o.pagingRestriction, _o.controlPlaneServiceType, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of MMEUEServiceAccept
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MMEUEServiceAccept: $.ComponentSpec[] = [
    new $.ComponentSpec("userIdentifiers", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("serviceType", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("mTMSI", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("cSFBResponse", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("uEEPSBearerContextStatus", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("uERequestType", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("pagingRestriction", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("controlPlaneServiceType", true, $.hasTag(_TagClass.context, 8))
];

/**
 * @summary The Trailing Root Component Types of MMEUEServiceAccept
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MMEUEServiceAccept: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MMEUEServiceAccept
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MMEUEServiceAccept: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MMEUEServiceAccept: $.ASN1Decoder<MMEUEServiceAccept> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMEUEServiceAccept
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMEUEServiceAccept (el: _Element): MMEUEServiceAccept {
    if (!_cached_decoder_for_MMEUEServiceAccept) { _cached_decoder_for_MMEUEServiceAccept = function (el: _Element): MMEUEServiceAccept {
    let userIdentifiers!: UserIdentifiers;
    let serviceType: OPTIONAL<OCTET_STRING>;
    let mTMSI: OPTIONAL<TMSI>;
    let cSFBResponse: OPTIONAL<OCTET_STRING>;
    let uEEPSBearerContextStatus: OPTIONAL<OCTET_STRING>;
    let uERequestType: OPTIONAL<MUSIMUERequestType>;
    let pagingRestriction: OPTIONAL<PagingRestrictionIndicator>;
    let controlPlaneServiceType: OPTIONAL<OCTET_STRING>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "userIdentifiers": (_el: _Element): void => { userIdentifiers = $._decode_implicit<UserIdentifiers>(() => _decode_UserIdentifiers)(_el); },
        "serviceType": (_el: _Element): void => {
            serviceType = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (serviceType.length < 1 || serviceType.length > 1) {
                throw new ASN1SizeError("MMEUEServiceAccept.serviceType violates SIZE constraint");
            }
        },
        "mTMSI": (_el: _Element): void => { mTMSI = $._decode_implicit<TMSI>(() => _decode_TMSI)(_el); },
        "cSFBResponse": (_el: _Element): void => {
            cSFBResponse = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (cSFBResponse.length < 1 || cSFBResponse.length > 1) {
                throw new ASN1SizeError("MMEUEServiceAccept.cSFBResponse violates SIZE constraint");
            }
        },
        "uEEPSBearerContextStatus": (_el: _Element): void => {
            uEEPSBearerContextStatus = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (uEEPSBearerContextStatus.length < 2 || uEEPSBearerContextStatus.length > 2) {
                throw new ASN1SizeError("MMEUEServiceAccept.uEEPSBearerContextStatus violates SIZE constraint");
            }
        },
        "uERequestType": (_el: _Element): void => { uERequestType = $._decode_implicit<MUSIMUERequestType>(() => _decode_MUSIMUERequestType)(_el); },
        "pagingRestriction": (_el: _Element): void => { pagingRestriction = $._decode_implicit<PagingRestrictionIndicator>(() => _decode_PagingRestrictionIndicator)(_el); },
        "controlPlaneServiceType": (_el: _Element): void => {
            controlPlaneServiceType = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (controlPlaneServiceType.length < 1 || controlPlaneServiceType.length > 1) {
                throw new ASN1SizeError("MMEUEServiceAccept.controlPlaneServiceType violates SIZE constraint");
            }
        }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MMEUEServiceAccept,
        _extension_additions_list_spec_for_MMEUEServiceAccept,
        _root_component_type_list_2_spec_for_MMEUEServiceAccept,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new MMEUEServiceAccept(
        userIdentifiers,
        serviceType,
        mTMSI,
        cSFBResponse,
        uEEPSBearerContextStatus,
        uERequestType,
        pagingRestriction,
        controlPlaneServiceType,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_MMEUEServiceAccept(el);
}

let _cached_encoder_for_MMEUEServiceAccept: $.ASN1Encoder<MMEUEServiceAccept> | null = null;

/**
 * @summary Encodes a(n) MMEUEServiceAccept into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMEUEServiceAccept, encoded as an ASN.1 Element.
 */
export
function _encode_MMEUEServiceAccept (value: MMEUEServiceAccept, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMEUEServiceAccept) { _cached_encoder_for_MMEUEServiceAccept = function (value: MMEUEServiceAccept, elGetter: $.ASN1Encoder<MMEUEServiceAccept>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(8 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_UserIdentifiers, $.BER)(value.userIdentifiers, $.BER);
    if (value.serviceType !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.serviceType, $.BER);
    }
    if (value.mTMSI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_TMSI, $.BER)(value.mTMSI, $.BER);
    }
    if (value.cSFBResponse !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)(value.cSFBResponse, $.BER);
    }
    if (value.uEEPSBearerContextStatus !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeOctetString, $.BER)(value.uEEPSBearerContextStatus, $.BER);
    }
    if (value.uERequestType !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_MUSIMUERequestType, $.BER)(value.uERequestType, $.BER);
    }
    if (value.pagingRestriction !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => _encode_PagingRestrictionIndicator, $.BER)(value.pagingRestriction, $.BER);
    }
    if (value.controlPlaneServiceType !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeOctetString, $.BER)(value.controlPlaneServiceType, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_MMEUEServiceAccept(value, elGetter);
}


/* eslint-enable */
