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

import { CallLinkageData, _decode_CallLinkageData, _encode_CallLinkageData } from "../CSTA-call-control/CallLinkageData.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary ParkCallResult
 * @description
 *
 * Positive acknowledgement for Park Call (ECMA-269 §17.1.21 /
 * ECMA-285 §15.1.21). May return the queued connection at the
 * park-to device.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ParkCallResult ::= SEQUENCE
 * {     parkedTo             ConnectionID                 OPTIONAL,
 *     callLinkageData         [1] IMPLICIT CallLinkageData         OPTIONAL,
 *     extensions             CSTACommonArguments             OPTIONAL }
 * ```
 * 
 * @class
 */
export
class ParkCallResult {
    constructor (
        /**
         * @summary `parkedTo`.
         * @description
         *
         * Optional. Connection at the park-to device (Queued).
         *
         * @public
         * @readonly
         */
        readonly parkedTo: OPTIONAL<ConnectionID>,
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
     * @summary Restructures an object into a ParkCallResult
     * @description
     * 
     * This takes an `object` and converts it to a `ParkCallResult`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ParkCallResult`.
     * @returns {ParkCallResult}
     */
    public static _from_object (_o: { [_K in keyof (ParkCallResult)]: (ParkCallResult)[_K] }): ParkCallResult {
        return new ParkCallResult(_o.parkedTo, _o.callLinkageData, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of ParkCallResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ParkCallResult: $.ComponentSpec[] = [
    new $.ComponentSpec("parkedTo", true, $.hasTag(_TagClass.application, 11)),
    new $.ComponentSpec("callLinkageData", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of ParkCallResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ParkCallResult: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ParkCallResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ParkCallResult: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ParkCallResult: $.ASN1Decoder<ParkCallResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ParkCallResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ParkCallResult (el: _Element): ParkCallResult {
    if (!_cached_decoder_for_ParkCallResult) { _cached_decoder_for_ParkCallResult = function (el: _Element): ParkCallResult {
    let parkedTo: OPTIONAL<ConnectionID>;
    let callLinkageData: OPTIONAL<CallLinkageData>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "parkedTo": (_el: _Element): void => { parkedTo = _decode_ConnectionID(_el); },
        "callLinkageData": (_el: _Element): void => { callLinkageData = $._decode_implicit<CallLinkageData>(() => _decode_CallLinkageData)(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ParkCallResult,
        _extension_additions_list_spec_for_ParkCallResult,
        _root_component_type_list_2_spec_for_ParkCallResult,
        undefined,
    );
    return new ParkCallResult(
        parkedTo,
        callLinkageData,
        extensions
    );
}; }
    return _cached_decoder_for_ParkCallResult(el);
}

let _cached_encoder_for_ParkCallResult: $.ASN1Encoder<ParkCallResult> | null = null;

/**
 * @summary Encodes a(n) ParkCallResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ParkCallResult, encoded as an ASN.1 Element.
 */
export
function _encode_ParkCallResult (value: ParkCallResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ParkCallResult) { _cached_encoder_for_ParkCallResult = function (value: ParkCallResult, elGetter: $.ASN1Encoder<ParkCallResult>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.parkedTo === undefined) ? undefined : _encode_ConnectionID(value.parkedTo, $.BER)),
            /* IF_ABSENT  */ ((value.callLinkageData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_CallLinkageData, $.BER)(value.callLinkageData, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ParkCallResult(value, elGetter);
}


/* eslint-enable */
