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

import { ConnectionList, _decode_ConnectionList, _encode_ConnectionList } from "../CSTA-connection-states/ConnectionList.ta.mjs";

import { ConnectionInformation, _decode_ConnectionInformation, _encode_ConnectionInformation } from "../CSTA-media-services/ConnectionInformation.ta.mjs";

import { CallLinkageDataList, _decode_CallLinkageDataList, _encode_CallLinkageDataList } from "../CSTA-call-control/CallLinkageDataList.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary TransferCallResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TransferCallResult ::= SEQUENCE
 * {    transferredCall         ConnectionID,
 *     connections             [0] IMPLICIT ConnectionList         OPTIONAL,
 *     transferredCallInfo         [1] IMPLICIT ConnectionInformation     OPTIONAL,
 *     callLinkageDataList        [2] IMPLICIT CallLinkageDataList    OPTIONAL,
 *     extensions             CSTACommonArguments             OPTIONAL }
 * ```
 * 
 * @class
 */
export
class TransferCallResult {
    constructor (
        /**
         * @summary `transferredCall`.
         * @public
         * @readonly
         */
        readonly transferredCall: ConnectionID,
        /**
         * @summary `connections`.
         * @public
         * @readonly
         */
        readonly connections: OPTIONAL<ConnectionList>,
        /**
         * @summary `transferredCallInfo`.
         * @public
         * @readonly
         */
        readonly transferredCallInfo: OPTIONAL<ConnectionInformation>,
        /**
         * @summary `callLinkageDataList`.
         * @public
         * @readonly
         */
        readonly callLinkageDataList: OPTIONAL<CallLinkageDataList>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a TransferCallResult
     * @description
     * 
     * This takes an `object` and converts it to a `TransferCallResult`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TransferCallResult`.
     * @returns {TransferCallResult}
     */
    public static _from_object (_o: { [_K in keyof (TransferCallResult)]: (TransferCallResult)[_K] }): TransferCallResult {
        return new TransferCallResult(_o.transferredCall, _o.connections, _o.transferredCallInfo, _o.callLinkageDataList, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of TransferCallResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TransferCallResult: $.ComponentSpec[] = [
    new $.ComponentSpec("transferredCall", false, $.hasTag(_TagClass.application, 11)),
    new $.ComponentSpec("connections", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("transferredCallInfo", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("callLinkageDataList", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of TransferCallResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TransferCallResult: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TransferCallResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TransferCallResult: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TransferCallResult: $.ASN1Decoder<TransferCallResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TransferCallResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TransferCallResult (el: _Element): TransferCallResult {
    if (!_cached_decoder_for_TransferCallResult) { _cached_decoder_for_TransferCallResult = function (el: _Element): TransferCallResult {
    let transferredCall!: ConnectionID;
    let connections: OPTIONAL<ConnectionList>;
    let transferredCallInfo: OPTIONAL<ConnectionInformation>;
    let callLinkageDataList: OPTIONAL<CallLinkageDataList>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "transferredCall": (_el: _Element): void => { transferredCall = _decode_ConnectionID(_el); },
        "connections": (_el: _Element): void => { connections = $._decode_implicit<ConnectionList>(() => _decode_ConnectionList)(_el); },
        "transferredCallInfo": (_el: _Element): void => { transferredCallInfo = $._decode_implicit<ConnectionInformation>(() => _decode_ConnectionInformation)(_el); },
        "callLinkageDataList": (_el: _Element): void => { callLinkageDataList = $._decode_implicit<CallLinkageDataList>(() => _decode_CallLinkageDataList)(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TransferCallResult,
        _extension_additions_list_spec_for_TransferCallResult,
        _root_component_type_list_2_spec_for_TransferCallResult,
        undefined,
    );
    return new TransferCallResult(
        transferredCall,
        connections,
        transferredCallInfo,
        callLinkageDataList,
        extensions
    );
}; }
    return _cached_decoder_for_TransferCallResult(el);
}

let _cached_encoder_for_TransferCallResult: $.ASN1Encoder<TransferCallResult> | null = null;

/**
 * @summary Encodes a(n) TransferCallResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TransferCallResult, encoded as an ASN.1 Element.
 */
export
function _encode_TransferCallResult (value: TransferCallResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TransferCallResult) { _cached_encoder_for_TransferCallResult = function (value: TransferCallResult, elGetter: $.ASN1Encoder<TransferCallResult>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ConnectionID(value.transferredCall, $.BER),
            /* IF_ABSENT  */ ((value.connections === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_ConnectionList, $.BER)(value.connections, $.BER)),
            /* IF_ABSENT  */ ((value.transferredCallInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_ConnectionInformation, $.BER)(value.transferredCallInfo, $.BER)),
            /* IF_ABSENT  */ ((value.callLinkageDataList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_CallLinkageDataList, $.BER)(value.callLinkageDataList, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TransferCallResult(value, elGetter);
}


/* eslint-enable */
