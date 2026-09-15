/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { DcollCrossRefID, _decode_DcollCrossRefID, _encode_DcollCrossRefID } from "../CSTA-data-collection/DcollCrossRefID.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary StartDataCollectionResult
 * @description
 *
 * Returns `dcollCrossRefID` for later Data Collected and control services
 * (ECMA-269 §25.1.5.2.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StartDataCollectionResult ::= SEQUENCE
 * {    dcollCrossRefID            DcollCrossRefID,
 *     extensions             CSTACommonArguments             OPTIONAL }
 * ```
 * 
 * @class
 */
export
class StartDataCollectionResult {
    constructor (
        /**
         * @summary `dcollCrossRefID`.
         * @description
         *
         * Identifier for this collection (ECMA-269 §25.1.5.2.1).
         *
         * @public
         * @readonly
         */
        readonly dcollCrossRefID: DcollCrossRefID,
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
     * @summary Restructures an object into a StartDataCollectionResult
     * @description
     * 
     * This takes an `object` and converts it to a `StartDataCollectionResult`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `StartDataCollectionResult`.
     * @returns {StartDataCollectionResult}
     */
    public static _from_object (_o: { [_K in keyof (StartDataCollectionResult)]: (StartDataCollectionResult)[_K] }): StartDataCollectionResult {
        return new StartDataCollectionResult(_o.dcollCrossRefID, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of StartDataCollectionResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_StartDataCollectionResult: $.ComponentSpec[] = [
    new $.ComponentSpec("dcollCrossRefID", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of StartDataCollectionResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_StartDataCollectionResult: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of StartDataCollectionResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_StartDataCollectionResult: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_StartDataCollectionResult: $.ASN1Decoder<StartDataCollectionResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) StartDataCollectionResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_StartDataCollectionResult (el: _Element): StartDataCollectionResult {
    if (!_cached_decoder_for_StartDataCollectionResult) { _cached_decoder_for_StartDataCollectionResult = function (el: _Element): StartDataCollectionResult {
    let dcollCrossRefID!: DcollCrossRefID;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "dcollCrossRefID": (_el: _Element): void => { dcollCrossRefID = _decode_DcollCrossRefID(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_StartDataCollectionResult,
        _extension_additions_list_spec_for_StartDataCollectionResult,
        _root_component_type_list_2_spec_for_StartDataCollectionResult,
        undefined,
    );
    return new StartDataCollectionResult(
        dcollCrossRefID,
        extensions
    );
}; }
    return _cached_decoder_for_StartDataCollectionResult(el);
}

let _cached_encoder_for_StartDataCollectionResult: $.ASN1Encoder<StartDataCollectionResult> | null = null;

/**
 * @summary Encodes a(n) StartDataCollectionResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StartDataCollectionResult, encoded as an ASN.1 Element.
 */
export
function _encode_StartDataCollectionResult (value: StartDataCollectionResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_StartDataCollectionResult) { _cached_encoder_for_StartDataCollectionResult = function (value: StartDataCollectionResult, elGetter: $.ASN1Encoder<StartDataCollectionResult>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_DcollCrossRefID(value.dcollCrossRefID, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_StartDataCollectionResult(value, elGetter);
}


/* eslint-enable */
