/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import {
    PendingAgentState,
    _enum_for_PendingAgentState,
    _decode_PendingAgentState,
    _encode_PendingAgentState
} from "../CSTA-device-feature-types/PendingAgentState.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary SetAgentStateResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SetAgentStateResult ::= SEQUENCE
 * {    pendingAgentState        PendingAgentState            OPTIONAL,
 *     extensions             CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class SetAgentStateResult {
    constructor (
        /**
         * @summary `pendingAgentState`.
         * @public
         * @readonly
         */
        readonly pendingAgentState: OPTIONAL<PendingAgentState>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a SetAgentStateResult
     * @description
     * 
     * This takes an `object` and converts it to a `SetAgentStateResult`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SetAgentStateResult`.
     * @returns {SetAgentStateResult}
     */
    public static _from_object (_o: { [_K in keyof (SetAgentStateResult)]: (SetAgentStateResult)[_K] }): SetAgentStateResult {
        return new SetAgentStateResult(_o.pendingAgentState, _o.extensions);
    }

        /**
         * @summary The enum used as the type of the component `pendingAgentState`
         * @public
         * @static
         */

    public static _enum_for_pendingAgentState = _enum_for_PendingAgentState;
}

/**
 * @summary The Leading Root Component Types of SetAgentStateResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SetAgentStateResult: $.ComponentSpec[] = [
    new $.ComponentSpec("pendingAgentState", true, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of SetAgentStateResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SetAgentStateResult: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SetAgentStateResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SetAgentStateResult: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SetAgentStateResult: $.ASN1Decoder<SetAgentStateResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SetAgentStateResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SetAgentStateResult (el: _Element): SetAgentStateResult {
    if (!_cached_decoder_for_SetAgentStateResult) { _cached_decoder_for_SetAgentStateResult = function (el: _Element): SetAgentStateResult {
    let pendingAgentState: OPTIONAL<PendingAgentState>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "pendingAgentState": (_el: _Element): void => { pendingAgentState = _decode_PendingAgentState(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SetAgentStateResult,
        _extension_additions_list_spec_for_SetAgentStateResult,
        _root_component_type_list_2_spec_for_SetAgentStateResult,
        undefined,
    );
    return new SetAgentStateResult(
        pendingAgentState,
        extensions
    );
}; }
    return _cached_decoder_for_SetAgentStateResult(el);
}

let _cached_encoder_for_SetAgentStateResult: $.ASN1Encoder<SetAgentStateResult> | null = null;

/**
 * @summary Encodes a(n) SetAgentStateResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SetAgentStateResult, encoded as an ASN.1 Element.
 */
export
function _encode_SetAgentStateResult (value: SetAgentStateResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SetAgentStateResult) { _cached_encoder_for_SetAgentStateResult = function (value: SetAgentStateResult, elGetter: $.ASN1Encoder<SetAgentStateResult>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.pendingAgentState === undefined) ? undefined : _encode_PendingAgentState(value.pendingAgentState, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SetAgentStateResult(value, elGetter);
}


/* eslint-enable */
