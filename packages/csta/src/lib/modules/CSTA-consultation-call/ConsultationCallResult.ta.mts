/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { ConnectionID, _decode_ConnectionID, _encode_ConnectionID } from "../CSTA-call-connection-identifiers/ConnectionID.ta.mjs";

import { MediaCallCharacteristics, _decode_MediaCallCharacteristics, _encode_MediaCallCharacteristics } from "../CSTA-media-services/MediaCallCharacteristics.ta.mjs";

import { ConnectionInformation, _decode_ConnectionInformation, _encode_ConnectionInformation } from "../CSTA-media-services/ConnectionInformation.ta.mjs";

import { CallLinkageData, _decode_CallLinkageData, _encode_CallLinkageData } from "../CSTA-call-control/CallLinkageData.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary ConsultationCallResult
 * @description
 *
 * Positive acknowledgement for Consultation Call (ECMA-269
 * §17.1.10 / ECMA-285 §15.1.10). Returns the consulting device's
 * connection in the new call. For digital data, may contain
 * adjusted media/connection values (FR 8).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConsultationCallResult ::= SEQUENCE
 * {     initiatedCall             ConnectionID,
 *     mediaCallCharacteristics     [0] IMPLICIT MediaCallCharacteristics         OPTIONAL,
 *     initiatedCallInfo         [1] IMPLICIT ConnectionInformation         OPTIONAL,
 *     callLinkageData         [2] IMPLICIT CallLinkageData             OPTIONAL,
 *     extensions             CSTACommonArguments                 OPTIONAL }
 * ```
 * 
 * @class
 */
export
class ConsultationCallResult {
    constructor (
        /**
         * @summary `initiatedCall`.
         * @description
         *
         * Mandatory. Consulting device's connection in the new
         * consultation call.
         *
         * @public
         * @readonly
         */
        readonly initiatedCall: ConnectionID,
        /**
         * @summary `mediaCallCharacteristics`.
         * @description
         *
         * Optional. Media characteristics actually used; may be
         * adjusted from the request (FR 8, §12.2.20).
         *
         * @public
         * @readonly
         */
        readonly mediaCallCharacteristics: OPTIONAL<MediaCallCharacteristics>,
        /**
         * @summary `initiatedCallInfo`.
         * @description
         *
         * Optional connection information for `initiatedCall`
         * (§12.2.8).
         *
         * @public
         * @readonly
         */
        readonly initiatedCallInfo: OPTIONAL<ConnectionInformation>,
        /**
         * @summary `callLinkageData`.
         * @description
         *
         * Optional call-linkage identifiers for the consultation
         * call (§12.2.5).
         *
         * @public
         * @readonly
         */
        readonly callLinkageData: OPTIONAL<CallLinkageData>,
        /**
         * @summary `extensions`.
         * @description
         *
         * Optional `CSTACommonArguments` carrying the security and
         * privateData parameters from the ECMA-269 service table.
         *
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a ConsultationCallResult
     * @description
     * 
     * This takes an `object` and converts it to a `ConsultationCallResult`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ConsultationCallResult`.
     * @returns {ConsultationCallResult}
     */
    public static _from_object (_o: { [_K in keyof (ConsultationCallResult)]: (ConsultationCallResult)[_K] }): ConsultationCallResult {
        return new ConsultationCallResult(_o.initiatedCall, _o.mediaCallCharacteristics, _o.initiatedCallInfo, _o.callLinkageData, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of ConsultationCallResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ConsultationCallResult: $.ComponentSpec[] = [
    new $.ComponentSpec("initiatedCall", false, $.hasTag(_TagClass.application, 11)),
    new $.ComponentSpec("mediaCallCharacteristics", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("initiatedCallInfo", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("callLinkageData", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of ConsultationCallResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ConsultationCallResult: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ConsultationCallResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ConsultationCallResult: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ConsultationCallResult: $.ASN1Decoder<ConsultationCallResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ConsultationCallResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ConsultationCallResult (el: _Element): ConsultationCallResult {
    if (!_cached_decoder_for_ConsultationCallResult) { _cached_decoder_for_ConsultationCallResult = function (el: _Element): ConsultationCallResult {
    let initiatedCall!: ConnectionID;
    let mediaCallCharacteristics: OPTIONAL<MediaCallCharacteristics>;
    let initiatedCallInfo: OPTIONAL<ConnectionInformation>;
    let callLinkageData: OPTIONAL<CallLinkageData>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "initiatedCall": (_el: _Element): void => { initiatedCall = _decode_ConnectionID(_el); },
        "mediaCallCharacteristics": (_el: _Element): void => { mediaCallCharacteristics = $._decode_implicit<MediaCallCharacteristics>(() => _decode_MediaCallCharacteristics)(_el); },
        "initiatedCallInfo": (_el: _Element): void => { initiatedCallInfo = $._decode_implicit<ConnectionInformation>(() => _decode_ConnectionInformation)(_el); },
        "callLinkageData": (_el: _Element): void => { callLinkageData = $._decode_implicit<CallLinkageData>(() => _decode_CallLinkageData)(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ConsultationCallResult,
        _extension_additions_list_spec_for_ConsultationCallResult,
        _root_component_type_list_2_spec_for_ConsultationCallResult,
        undefined,
    );
    return new ConsultationCallResult(
        initiatedCall,
        mediaCallCharacteristics,
        initiatedCallInfo,
        callLinkageData,
        extensions
    );
}; }
    return _cached_decoder_for_ConsultationCallResult(el);
}

let _cached_encoder_for_ConsultationCallResult: $.ASN1Encoder<ConsultationCallResult> | null = null;

/**
 * @summary Encodes a(n) ConsultationCallResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConsultationCallResult, encoded as an ASN.1 Element.
 */
export
function _encode_ConsultationCallResult (value: ConsultationCallResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ConsultationCallResult) { _cached_encoder_for_ConsultationCallResult = function (value: ConsultationCallResult, elGetter: $.ASN1Encoder<ConsultationCallResult>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ConnectionID(value.initiatedCall, $.BER),
            /* IF_ABSENT  */ ((value.mediaCallCharacteristics === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_MediaCallCharacteristics, $.BER)(value.mediaCallCharacteristics, $.BER)),
            /* IF_ABSENT  */ ((value.initiatedCallInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_ConnectionInformation, $.BER)(value.initiatedCallInfo, $.BER)),
            /* IF_ABSENT  */ ((value.callLinkageData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_CallLinkageData, $.BER)(value.callLinkageData, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ConsultationCallResult(value, elGetter);
}


/* eslint-enable */
