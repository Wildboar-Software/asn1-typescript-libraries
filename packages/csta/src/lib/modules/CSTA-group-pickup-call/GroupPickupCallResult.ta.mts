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
 * @summary GroupPickupCallResult
 * @description
 *
 * Positive acknowledgement for Group Pickup Call (ECMA-269
 * §17.1.14 / ECMA-285 §15.1.14). May return the destination
 * device's connection in the selected call.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GroupPickupCallResult ::= SEQUENCE
 * {     pickedCall             ConnectionID             OPTIONAL,
 *     pickedCallInfo             ConnectionInformation         OPTIONAL,
 *     callLinkageData         [1] IMPLICIT CallLinkageData     OPTIONAL,
 *     extensions             CSTACommonArguments         OPTIONAL }
 * ```
 * 
 * @class
 */
export
class GroupPickupCallResult {
    constructor (
        /**
         * @summary `pickedCall`.
         * @description
         *
         * Optional. Destination device's connection in the picked
         * call (Connected).
         *
         * @public
         * @readonly
         */
        readonly pickedCall: OPTIONAL<ConnectionID>,
        /**
         * @summary `pickedCallInfo`.
         * @description
         *
         * Optional connection information for `pickedCall`
         * (§12.2.8).
         *
         * @public
         * @readonly
         */
        readonly pickedCallInfo: OPTIONAL<ConnectionInformation>,
        /**
         * @summary `callLinkageData`.
         * @description
         *
         * Optional call-linkage identifiers (§12.2.5).
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
     * @summary Restructures an object into a GroupPickupCallResult
     * @description
     * 
     * This takes an `object` and converts it to a `GroupPickupCallResult`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GroupPickupCallResult`.
     * @returns {GroupPickupCallResult}
     */
    public static _from_object (_o: { [_K in keyof (GroupPickupCallResult)]: (GroupPickupCallResult)[_K] }): GroupPickupCallResult {
        return new GroupPickupCallResult(_o.pickedCall, _o.pickedCallInfo, _o.callLinkageData, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of GroupPickupCallResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GroupPickupCallResult: $.ComponentSpec[] = [
    new $.ComponentSpec("pickedCall", true, $.hasTag(_TagClass.application, 11)),
    new $.ComponentSpec("pickedCallInfo", true, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("callLinkageData", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of GroupPickupCallResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GroupPickupCallResult: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GroupPickupCallResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GroupPickupCallResult: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GroupPickupCallResult: $.ASN1Decoder<GroupPickupCallResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GroupPickupCallResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GroupPickupCallResult (el: _Element): GroupPickupCallResult {
    if (!_cached_decoder_for_GroupPickupCallResult) { _cached_decoder_for_GroupPickupCallResult = function (el: _Element): GroupPickupCallResult {
    let pickedCall: OPTIONAL<ConnectionID>;
    let pickedCallInfo: OPTIONAL<ConnectionInformation>;
    let callLinkageData: OPTIONAL<CallLinkageData>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "pickedCall": (_el: _Element): void => { pickedCall = _decode_ConnectionID(_el); },
        "pickedCallInfo": (_el: _Element): void => { pickedCallInfo = _decode_ConnectionInformation(_el); },
        "callLinkageData": (_el: _Element): void => { callLinkageData = $._decode_implicit<CallLinkageData>(() => _decode_CallLinkageData)(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GroupPickupCallResult,
        _extension_additions_list_spec_for_GroupPickupCallResult,
        _root_component_type_list_2_spec_for_GroupPickupCallResult,
        undefined,
    );
    return new GroupPickupCallResult(
        pickedCall,
        pickedCallInfo,
        callLinkageData,
        extensions
    );
}; }
    return _cached_decoder_for_GroupPickupCallResult(el);
}

let _cached_encoder_for_GroupPickupCallResult: $.ASN1Encoder<GroupPickupCallResult> | null = null;

/**
 * @summary Encodes a(n) GroupPickupCallResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GroupPickupCallResult, encoded as an ASN.1 Element.
 */
export
function _encode_GroupPickupCallResult (value: GroupPickupCallResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GroupPickupCallResult) { _cached_encoder_for_GroupPickupCallResult = function (value: GroupPickupCallResult, elGetter: $.ASN1Encoder<GroupPickupCallResult>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.pickedCall === undefined) ? undefined : _encode_ConnectionID(value.pickedCall, $.BER)),
            /* IF_ABSENT  */ ((value.pickedCallInfo === undefined) ? undefined : _encode_ConnectionInformation(value.pickedCallInfo, $.BER)),
            /* IF_ABSENT  */ ((value.callLinkageData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_CallLinkageData, $.BER)(value.callLinkageData, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GroupPickupCallResult(value, elGetter);
}


/* eslint-enable */
