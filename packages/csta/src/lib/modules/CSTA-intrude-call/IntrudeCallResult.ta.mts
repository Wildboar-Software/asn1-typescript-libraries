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

import { CallLinkageDataList, _decode_CallLinkageDataList, _encode_CallLinkageDataList } from "../CSTA-call-control/CallLinkageDataList.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary IntrudeCallResult
 * @description
 *
 * Positive acknowledgement for Intrude Call (ECMA-269 §17.1.16 /
 * ECMA-285 §15.1.16). May return the resulting conference
 * connection and old-to-new linkage when CallIDs change
 * (§12.3.9 FR 8).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IntrudeCallResult ::= SEQUENCE
 * {     conferencedCall         ConnectionID                 OPTIONAL,
 *     conferencedCallInfo         ConnectionInformation             OPTIONAL,
 *     callLinkageDataList        [1] IMPLICIT CallLinkageDataList    OPTIONAL,
 *     extensions             CSTACommonArguments             OPTIONAL }
 * ```
 * 
 * @class
 */
export
class IntrudeCallResult {
    constructor (
        /**
         * @summary `conferencedCall`.
         * @description
         *
         * Optional. Intruding device's connection in the resulting
         * conference (when one is formed).
         *
         * @public
         * @readonly
         */
        readonly conferencedCall: OPTIONAL<ConnectionID>,
        /**
         * @summary `conferencedCallInfo`.
         * @description
         *
         * Optional connection information for `conferencedCall`
         * (§12.2.8).
         *
         * @public
         * @readonly
         */
        readonly conferencedCallInfo: OPTIONAL<ConnectionInformation>,
        /**
         * @summary `callLinkageDataList`.
         * @description
         *
         * Optional call-linkage data pairing old and new call
         * identities (§12.2.5, §12.3.9 FR 8).
         *
         * @public
         * @readonly
         */
        readonly callLinkageDataList: OPTIONAL<CallLinkageDataList>,
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
     * @summary Restructures an object into a IntrudeCallResult
     * @description
     * 
     * This takes an `object` and converts it to a `IntrudeCallResult`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IntrudeCallResult`.
     * @returns {IntrudeCallResult}
     */
    public static _from_object (_o: { [_K in keyof (IntrudeCallResult)]: (IntrudeCallResult)[_K] }): IntrudeCallResult {
        return new IntrudeCallResult(_o.conferencedCall, _o.conferencedCallInfo, _o.callLinkageDataList, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of IntrudeCallResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IntrudeCallResult: $.ComponentSpec[] = [
    new $.ComponentSpec("conferencedCall", true, $.hasTag(_TagClass.application, 11)),
    new $.ComponentSpec("conferencedCallInfo", true, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("callLinkageDataList", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of IntrudeCallResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IntrudeCallResult: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IntrudeCallResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IntrudeCallResult: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_IntrudeCallResult: $.ASN1Decoder<IntrudeCallResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IntrudeCallResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IntrudeCallResult (el: _Element): IntrudeCallResult {
    if (!_cached_decoder_for_IntrudeCallResult) { _cached_decoder_for_IntrudeCallResult = function (el: _Element): IntrudeCallResult {
    let conferencedCall: OPTIONAL<ConnectionID>;
    let conferencedCallInfo: OPTIONAL<ConnectionInformation>;
    let callLinkageDataList: OPTIONAL<CallLinkageDataList>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "conferencedCall": (_el: _Element): void => { conferencedCall = _decode_ConnectionID(_el); },
        "conferencedCallInfo": (_el: _Element): void => { conferencedCallInfo = _decode_ConnectionInformation(_el); },
        "callLinkageDataList": (_el: _Element): void => { callLinkageDataList = $._decode_implicit<CallLinkageDataList>(() => _decode_CallLinkageDataList)(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_IntrudeCallResult,
        _extension_additions_list_spec_for_IntrudeCallResult,
        _root_component_type_list_2_spec_for_IntrudeCallResult,
        undefined,
    );
    return new IntrudeCallResult(
        conferencedCall,
        conferencedCallInfo,
        callLinkageDataList,
        extensions
    );
}; }
    return _cached_decoder_for_IntrudeCallResult(el);
}

let _cached_encoder_for_IntrudeCallResult: $.ASN1Encoder<IntrudeCallResult> | null = null;

/**
 * @summary Encodes a(n) IntrudeCallResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IntrudeCallResult, encoded as an ASN.1 Element.
 */
export
function _encode_IntrudeCallResult (value: IntrudeCallResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IntrudeCallResult) { _cached_encoder_for_IntrudeCallResult = function (value: IntrudeCallResult, elGetter: $.ASN1Encoder<IntrudeCallResult>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.conferencedCall === undefined) ? undefined : _encode_ConnectionID(value.conferencedCall, $.BER)),
            /* IF_ABSENT  */ ((value.conferencedCallInfo === undefined) ? undefined : _encode_ConnectionInformation(value.conferencedCallInfo, $.BER)),
            /* IF_ABSENT  */ ((value.callLinkageDataList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_CallLinkageDataList, $.BER)(value.callLinkageDataList, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_IntrudeCallResult(value, elGetter);
}


/* eslint-enable */
