/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { UserIdentifiers, _decode_UserIdentifiers, _encode_UserIdentifiers } from "../TS33128Payloads/UserIdentifiers.ta.mjs";
// export { UserIdentifiers, _decode_UserIdentifiers, _encode_UserIdentifiers } from "../TS33128Payloads/UserIdentifiers.ta.mjs";
import { EPSHandoverType, _decode_EPSHandoverType, _encode_EPSHandoverType } from "../TS33128Payloads/EPSHandoverType.ta.mjs";
// export { EPSHandoverType, _decode_EPSHandoverType, _encode_EPSHandoverType } from "../TS33128Payloads/EPSHandoverType.ta.mjs";
import { EPSRANCause, _decode_EPSRANCause, _encode_EPSRANCause } from "../TS33128Payloads/EPSRANCause.ta.mjs";
// export { EPSRANCause, _decode_EPSRANCause, _encode_EPSRANCause } from "../TS33128Payloads/EPSRANCause.ta.mjs";
import { RANSourceToTargetContainer, _decode_RANSourceToTargetContainer, _encode_RANSourceToTargetContainer } from "../TS33128Payloads/RANSourceToTargetContainer.ta.mjs";
// export { RANSourceToTargetContainer, _decode_RANSourceToTargetContainer, _encode_RANSourceToTargetContainer } from "../TS33128Payloads/RANSourceToTargetContainer.ta.mjs";
import { EPSCSGInfo, _decode_EPSCSGInfo, _encode_EPSCSGInfo } from "../TS33128Payloads/EPSCSGInfo.ta.mjs";
// export { EPSCSGInfo, _decode_EPSCSGInfo, _encode_EPSCSGInfo } from "../TS33128Payloads/EPSCSGInfo.ta.mjs";
import { RANTargetToSourceContainer, _decode_RANTargetToSourceContainer, _encode_RANTargetToSourceContainer } from "../TS33128Payloads/RANTargetToSourceContainer.ta.mjs";
// export { RANTargetToSourceContainer, _decode_RANTargetToSourceContainer, _encode_RANTargetToSourceContainer } from "../TS33128Payloads/RANTargetToSourceContainer.ta.mjs";
import { CSGID, _decode_CSGID, _encode_CSGID } from "../TS33128Payloads/CSGID.ta.mjs";
// export { CSGID, _decode_CSGID, _encode_CSGID } from "../TS33128Payloads/CSGID.ta.mjs";
import { EPSRANUEContext, _decode_EPSRANUEContext, _encode_EPSRANUEContext } from "../TS33128Payloads/EPSRANUEContext.ta.mjs";
// export { EPSRANUEContext, _decode_EPSRANUEContext, _encode_EPSRANUEContext } from "../TS33128Payloads/EPSRANUEContext.ta.mjs";


/**
 * @summary EPSRANHandoverRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSRANHandoverRequest ::= SEQUENCE
 * {
 *     userIdentifiers         [1] UserIdentifiers,
 *     handoverType            [2] EPSHandoverType,
 *     handoverCause           [3] EPSRANCause,
 *     sourceToTargetContainer [4] RANSourceToTargetContainer,
 *     cSGInfo                 [5] EPSCSGInfo OPTIONAL,
 *     targetToSourceContainer [6] RANTargetToSourceContainer,
 *     admittedCSGID           [7] CSGID OPTIONAL,
 *     ePSRANUEContext         [8] EPSRANUEContext
 * }
 * ```
 * 
 * @class
 */
export
class EPSRANHandoverRequest {
    constructor (
        /**
         * @summary `userIdentifiers`.
         * @public
         * @readonly
         */
        readonly userIdentifiers: UserIdentifiers,
        /**
         * @summary `handoverType`.
         * @public
         * @readonly
         */
        readonly handoverType: EPSHandoverType,
        /**
         * @summary `handoverCause`.
         * @public
         * @readonly
         */
        readonly handoverCause: EPSRANCause,
        /**
         * @summary `sourceToTargetContainer`.
         * @public
         * @readonly
         */
        readonly sourceToTargetContainer: RANSourceToTargetContainer,
        /**
         * @summary `cSGInfo`.
         * @public
         * @readonly
         */
        readonly cSGInfo: OPTIONAL<EPSCSGInfo>,
        /**
         * @summary `targetToSourceContainer`.
         * @public
         * @readonly
         */
        readonly targetToSourceContainer: RANTargetToSourceContainer,
        /**
         * @summary `admittedCSGID`.
         * @public
         * @readonly
         */
        readonly admittedCSGID: OPTIONAL<CSGID>,
        /**
         * @summary `ePSRANUEContext`.
         * @public
         * @readonly
         */
        readonly ePSRANUEContext: EPSRANUEContext
    ) {}

    /**
     * @summary Restructures an object into a EPSRANHandoverRequest
     * @description
     * 
     * This takes an `object` and converts it to a `EPSRANHandoverRequest`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EPSRANHandoverRequest`.
     * @returns {EPSRANHandoverRequest}
     */
    public static _from_object (_o: { [_K in keyof (EPSRANHandoverRequest)]: (EPSRANHandoverRequest)[_K] }): EPSRANHandoverRequest {
        return new EPSRANHandoverRequest(_o.userIdentifiers, _o.handoverType, _o.handoverCause, _o.sourceToTargetContainer, _o.cSGInfo, _o.targetToSourceContainer, _o.admittedCSGID, _o.ePSRANUEContext);
    }


}

/**
 * @summary The Leading Root Component Types of EPSRANHandoverRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EPSRANHandoverRequest: $.ComponentSpec[] = [
    new $.ComponentSpec("userIdentifiers", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("handoverType", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("handoverCause", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("sourceToTargetContainer", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("cSGInfo", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("targetToSourceContainer", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("admittedCSGID", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("ePSRANUEContext", false, $.hasTag(_TagClass.context, 8))
];

/**
 * @summary The Trailing Root Component Types of EPSRANHandoverRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EPSRANHandoverRequest: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EPSRANHandoverRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EPSRANHandoverRequest: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EPSRANHandoverRequest: $.ASN1Decoder<EPSRANHandoverRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EPSRANHandoverRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EPSRANHandoverRequest (el: _Element): EPSRANHandoverRequest {
    if (!_cached_decoder_for_EPSRANHandoverRequest) { _cached_decoder_for_EPSRANHandoverRequest = function (el: _Element): EPSRANHandoverRequest {
    let userIdentifiers!: UserIdentifiers;
    let handoverType!: EPSHandoverType;
    let handoverCause!: EPSRANCause;
    let sourceToTargetContainer!: RANSourceToTargetContainer;
    let cSGInfo: OPTIONAL<EPSCSGInfo>;
    let targetToSourceContainer!: RANTargetToSourceContainer;
    let admittedCSGID: OPTIONAL<CSGID>;
    let ePSRANUEContext!: EPSRANUEContext;
    const callbacks: $.DecodingMap = {
        "userIdentifiers": (_el: _Element): void => { userIdentifiers = $._decode_implicit<UserIdentifiers>(() => _decode_UserIdentifiers)(_el); },
        "handoverType": (_el: _Element): void => { handoverType = $._decode_implicit<EPSHandoverType>(() => _decode_EPSHandoverType)(_el); },
        "handoverCause": (_el: _Element): void => { handoverCause = $._decode_implicit<EPSRANCause>(() => _decode_EPSRANCause)(_el); },
        "sourceToTargetContainer": (_el: _Element): void => { sourceToTargetContainer = $._decode_implicit<RANSourceToTargetContainer>(() => _decode_RANSourceToTargetContainer)(_el); },
        "cSGInfo": (_el: _Element): void => { cSGInfo = $._decode_implicit<EPSCSGInfo>(() => _decode_EPSCSGInfo)(_el); },
        "targetToSourceContainer": (_el: _Element): void => { targetToSourceContainer = $._decode_implicit<RANTargetToSourceContainer>(() => _decode_RANTargetToSourceContainer)(_el); },
        "admittedCSGID": (_el: _Element): void => { admittedCSGID = $._decode_implicit<CSGID>(() => _decode_CSGID)(_el); },
        "ePSRANUEContext": (_el: _Element): void => { ePSRANUEContext = $._decode_implicit<EPSRANUEContext>(() => _decode_EPSRANUEContext)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EPSRANHandoverRequest,
        _extension_additions_list_spec_for_EPSRANHandoverRequest,
        _root_component_type_list_2_spec_for_EPSRANHandoverRequest,
        undefined,
    );
    return new EPSRANHandoverRequest(
        userIdentifiers,
        handoverType,
        handoverCause,
        sourceToTargetContainer,
        cSGInfo,
        targetToSourceContainer,
        admittedCSGID,
        ePSRANUEContext
    );
}; }
    return _cached_decoder_for_EPSRANHandoverRequest(el);
}

let _cached_encoder_for_EPSRANHandoverRequest: $.ASN1Encoder<EPSRANHandoverRequest> | null = null;

/**
 * @summary Encodes a(n) EPSRANHandoverRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EPSRANHandoverRequest, encoded as an ASN.1 Element.
 */
export
function _encode_EPSRANHandoverRequest (value: EPSRANHandoverRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EPSRANHandoverRequest) { _cached_encoder_for_EPSRANHandoverRequest = function (value: EPSRANHandoverRequest, elGetter: $.ASN1Encoder<EPSRANHandoverRequest>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_UserIdentifiers, $.BER)(value.userIdentifiers, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_EPSHandoverType, $.BER)(value.handoverType, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_EPSRANCause, $.BER)(value.handoverCause, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_RANSourceToTargetContainer, $.BER)(value.sourceToTargetContainer, $.BER),
            /* IF_ABSENT  */ ((value.cSGInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_EPSCSGInfo, $.BER)(value.cSGInfo, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => _encode_RANTargetToSourceContainer, $.BER)(value.targetToSourceContainer, $.BER),
            /* IF_ABSENT  */ ((value.admittedCSGID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_CSGID, $.BER)(value.admittedCSGID, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 8, () => _encode_EPSRANUEContext, $.BER)(value.ePSRANUEContext, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EPSRANHandoverRequest(value, elGetter);
}


/* eslint-enable */
