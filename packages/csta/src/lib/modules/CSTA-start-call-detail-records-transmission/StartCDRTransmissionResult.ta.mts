/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { CDRCrossRefID, _decode_CDRCrossRefID, _encode_CDRCrossRefID } from "../CSTA-call-detail-record/CDRCrossRefID.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary StartCDRTransmissionResult
 * @description
 *
 * Returns `cdrCrossRefID` for later CDR services (ECMA-269 §27.1.4.2.1 / FR 1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StartCDRTransmissionResult ::= SEQUENCE
 * {    cdrCrossRefID            CDRCrossRefID,           --corrected 06/2001
 *     extensions            CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class StartCDRTransmissionResult {
    constructor (
        /**
         * @summary `cdrCrossRefID`.
         * @description
         *
         * Identifier for this CDR transmission (ECMA-269 §27.1.4.2.1).
         *
         * @public
         * @readonly
         */
        readonly cdrCrossRefID: CDRCrossRefID,
        /**
         * @summary `extensions`.
         * @description
         *
         * CSTACommonArguments carrying the service-table security and
         * privateData parameters.
         *
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a StartCDRTransmissionResult
     * @description
     * 
     * This takes an `object` and converts it to a `StartCDRTransmissionResult`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `StartCDRTransmissionResult`.
     * @returns {StartCDRTransmissionResult}
     */
    public static _from_object (_o: { [_K in keyof (StartCDRTransmissionResult)]: (StartCDRTransmissionResult)[_K] }): StartCDRTransmissionResult {
        return new StartCDRTransmissionResult(_o.cdrCrossRefID, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of StartCDRTransmissionResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_StartCDRTransmissionResult: $.ComponentSpec[] = [
    new $.ComponentSpec("cdrCrossRefID", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of StartCDRTransmissionResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_StartCDRTransmissionResult: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of StartCDRTransmissionResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_StartCDRTransmissionResult: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_StartCDRTransmissionResult: $.ASN1Decoder<StartCDRTransmissionResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) StartCDRTransmissionResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_StartCDRTransmissionResult (el: _Element): StartCDRTransmissionResult {
    if (!_cached_decoder_for_StartCDRTransmissionResult) { _cached_decoder_for_StartCDRTransmissionResult = function (el: _Element): StartCDRTransmissionResult {
    let cdrCrossRefID!: CDRCrossRefID;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "cdrCrossRefID": (_el: _Element): void => { cdrCrossRefID = _decode_CDRCrossRefID(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_StartCDRTransmissionResult,
        _extension_additions_list_spec_for_StartCDRTransmissionResult,
        _root_component_type_list_2_spec_for_StartCDRTransmissionResult,
        undefined,
    );
    return new StartCDRTransmissionResult(
        cdrCrossRefID,
        extensions
    );
}; }
    return _cached_decoder_for_StartCDRTransmissionResult(el);
}

let _cached_encoder_for_StartCDRTransmissionResult: $.ASN1Encoder<StartCDRTransmissionResult> | null = null;

/**
 * @summary Encodes a(n) StartCDRTransmissionResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StartCDRTransmissionResult, encoded as an ASN.1 Element.
 */
export
function _encode_StartCDRTransmissionResult (value: StartCDRTransmissionResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_StartCDRTransmissionResult) { _cached_encoder_for_StartCDRTransmissionResult = function (value: StartCDRTransmissionResult, elGetter: $.ASN1Encoder<StartCDRTransmissionResult>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_CDRCrossRefID(value.cdrCrossRefID, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_StartCDRTransmissionResult(value, elGetter);
}


/* eslint-enable */
