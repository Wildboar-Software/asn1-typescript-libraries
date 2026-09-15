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

import { ConnectionInformation, _decode_ConnectionInformation, _encode_ConnectionInformation } from "../CSTA-media-services/ConnectionInformation.ta.mjs";

import { CallLinkageData, _decode_CallLinkageData, _encode_CallLinkageData } from "../CSTA-call-control/CallLinkageData.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary MakePredictiveCallResult
 * @description
 *
 * Positive acknowledgement for Make Predictive Call
 * (ECMA-269 §17.1.20 / ECMA-285 §15.1.20). The ConnectionID
 * is often the NID toward an external called party (FR 3).
 * Validation failure yields no ConnectionIDs (FR 5).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MakePredictiveCallResult ::= SEQUENCE
 * {     initiatedCall             ConnectionID,
 *     initiatedCallInfo         ConnectionInformation                 OPTIONAL,
 *     callLinkageData         [1] IMPLICIT CallLinkageData             OPTIONAL,
 *     extensions             CSTACommonArguments                 OPTIONAL }
 * ```
 * 
 * @class
 */
export
class MakePredictiveCallResult {
    constructor (
        /**
         * @summary `initiatedCall`.
         * @description
         *
         * Mandatory. Initial connection of the called device
         * (CallID of the new call plus that device). For an
         * external called party this is often the NID (FR 3).
         *
         * @public
         * @readonly
         */
        readonly initiatedCall: ConnectionID,
        /**
         * @summary `initiatedCallInfo`.
         * @description
         *
         * Optional connection information. Omitted values are
         * switching-function specific (§12.2.8).
         *
         * @public
         * @readonly
         */
        readonly initiatedCallInfo: OPTIONAL<ConnectionInformation>,
        /**
         * @summary `callLinkageData`.
         * @description
         *
         * Optional global call data and thread data
         * (§12.2.5).
         *
         * @public
         * @readonly
         */
        readonly callLinkageData: OPTIONAL<CallLinkageData>,
        /**
         * @summary `extensions`.
         * @description
         *
         * Optional `CSTACommonArguments` carrying the security
         * and privateData parameters from the ECMA-269 service
         * table.
         *
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a MakePredictiveCallResult
     * @description
     * 
     * This takes an `object` and converts it to a `MakePredictiveCallResult`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MakePredictiveCallResult`.
     * @returns {MakePredictiveCallResult}
     */
    public static _from_object (_o: { [_K in keyof (MakePredictiveCallResult)]: (MakePredictiveCallResult)[_K] }): MakePredictiveCallResult {
        return new MakePredictiveCallResult(_o.initiatedCall, _o.initiatedCallInfo, _o.callLinkageData, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of MakePredictiveCallResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MakePredictiveCallResult: $.ComponentSpec[] = [
    new $.ComponentSpec("initiatedCall", false, $.hasTag(_TagClass.application, 11)),
    new $.ComponentSpec("initiatedCallInfo", true, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("callLinkageData", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of MakePredictiveCallResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MakePredictiveCallResult: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MakePredictiveCallResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MakePredictiveCallResult: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MakePredictiveCallResult: $.ASN1Decoder<MakePredictiveCallResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MakePredictiveCallResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MakePredictiveCallResult (el: _Element): MakePredictiveCallResult {
    if (!_cached_decoder_for_MakePredictiveCallResult) { _cached_decoder_for_MakePredictiveCallResult = function (el: _Element): MakePredictiveCallResult {
    let initiatedCall!: ConnectionID;
    let initiatedCallInfo: OPTIONAL<ConnectionInformation>;
    let callLinkageData: OPTIONAL<CallLinkageData>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "initiatedCall": (_el: _Element): void => { initiatedCall = _decode_ConnectionID(_el); },
        "initiatedCallInfo": (_el: _Element): void => { initiatedCallInfo = _decode_ConnectionInformation(_el); },
        "callLinkageData": (_el: _Element): void => { callLinkageData = $._decode_implicit<CallLinkageData>(() => _decode_CallLinkageData)(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MakePredictiveCallResult,
        _extension_additions_list_spec_for_MakePredictiveCallResult,
        _root_component_type_list_2_spec_for_MakePredictiveCallResult,
        undefined,
    );
    return new MakePredictiveCallResult(
        initiatedCall,
        initiatedCallInfo,
        callLinkageData,
        extensions
    );
}; }
    return _cached_decoder_for_MakePredictiveCallResult(el);
}

let _cached_encoder_for_MakePredictiveCallResult: $.ASN1Encoder<MakePredictiveCallResult> | null = null;

/**
 * @summary Encodes a(n) MakePredictiveCallResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MakePredictiveCallResult, encoded as an ASN.1 Element.
 */
export
function _encode_MakePredictiveCallResult (value: MakePredictiveCallResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MakePredictiveCallResult) { _cached_encoder_for_MakePredictiveCallResult = function (value: MakePredictiveCallResult, elGetter: $.ASN1Encoder<MakePredictiveCallResult>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ConnectionID(value.initiatedCall, $.BER),
            /* IF_ABSENT  */ ((value.initiatedCallInfo === undefined) ? undefined : _encode_ConnectionInformation(value.initiatedCallInfo, $.BER)),
            /* IF_ABSENT  */ ((value.callLinkageData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_CallLinkageData, $.BER)(value.callLinkageData, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_MakePredictiveCallResult(value, elGetter);
}


/* eslint-enable */
