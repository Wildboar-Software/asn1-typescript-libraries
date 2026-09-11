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
 * @summary JoinCallResult
 * @description
 *
 * Positive acknowledgement for Join Call (ECMA-269 §17.1.17 /
 * ECMA-285 §15.1.17). Returns the joining device's connection in
 * the conference (CallID inherited from `activeCall`).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * JoinCallResult ::= SEQUENCE
 * {     conferencedCall         ConnectionID,
 *     conferencedCallInfo         ConnectionInformation             OPTIONAL,
 *     callLinkageDataList        [1] IMPLICIT CallLinkageDataList    OPTIONAL,
 *     extensions             CSTACommonArguments             OPTIONAL }
 * ```
 * 
 * @class
 */
export
class JoinCallResult {
    constructor (
        /**
         * @summary `conferencedCall`.
         * @description
         *
         * Mandatory. Joining device's connection in the resulting
         * conference.
         *
         * @public
         * @readonly
         */
        readonly conferencedCall: ConnectionID,
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
     * @summary Restructures an object into a JoinCallResult
     * @description
     * 
     * This takes an `object` and converts it to a `JoinCallResult`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `JoinCallResult`.
     * @returns {JoinCallResult}
     */
    public static _from_object (_o: { [_K in keyof (JoinCallResult)]: (JoinCallResult)[_K] }): JoinCallResult {
        return new JoinCallResult(_o.conferencedCall, _o.conferencedCallInfo, _o.callLinkageDataList, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of JoinCallResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_JoinCallResult: $.ComponentSpec[] = [
    new $.ComponentSpec("conferencedCall", false, $.hasTag(_TagClass.application, 11)),
    new $.ComponentSpec("conferencedCallInfo", true, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("callLinkageDataList", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of JoinCallResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_JoinCallResult: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of JoinCallResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_JoinCallResult: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_JoinCallResult: $.ASN1Decoder<JoinCallResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) JoinCallResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_JoinCallResult (el: _Element): JoinCallResult {
    if (!_cached_decoder_for_JoinCallResult) { _cached_decoder_for_JoinCallResult = function (el: _Element): JoinCallResult {
    let conferencedCall!: ConnectionID;
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
        _root_component_type_list_1_spec_for_JoinCallResult,
        _extension_additions_list_spec_for_JoinCallResult,
        _root_component_type_list_2_spec_for_JoinCallResult,
        undefined,
    );
    return new JoinCallResult(
        conferencedCall,
        conferencedCallInfo,
        callLinkageDataList,
        extensions
    );
}; }
    return _cached_decoder_for_JoinCallResult(el);
}

let _cached_encoder_for_JoinCallResult: $.ASN1Encoder<JoinCallResult> | null = null;

/**
 * @summary Encodes a(n) JoinCallResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The JoinCallResult, encoded as an ASN.1 Element.
 */
export
function _encode_JoinCallResult (value: JoinCallResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_JoinCallResult) { _cached_encoder_for_JoinCallResult = function (value: JoinCallResult, elGetter: $.ASN1Encoder<JoinCallResult>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ConnectionID(value.conferencedCall, $.BER),
            /* IF_ABSENT  */ ((value.conferencedCallInfo === undefined) ? undefined : _encode_ConnectionInformation(value.conferencedCallInfo, $.BER)),
            /* IF_ABSENT  */ ((value.callLinkageDataList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_CallLinkageDataList, $.BER)(value.callLinkageDataList, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_JoinCallResult(value, elGetter);
}


/* eslint-enable */
