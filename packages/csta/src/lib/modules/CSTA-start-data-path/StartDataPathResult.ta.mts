/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    INTEGER,
    SEQUENCE,
    SET,
    IA5String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { IOCrossRefID, _decode_IOCrossRefID, _encode_IOCrossRefID } from "../CSTA-device-feature-types/IOCrossRefID.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary StartDataPathResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StartDataPathResult ::= SEQUENCE
 * {    ioCrossRefID            IOCrossRefID,
 *     numberOfCharactersToCollect    [0] IMPLICIT INTEGER            OPTIONAL,
 *     terminationCharacter        IA5String(SIZE(1..1))            OPTIONAL,
 *     timeout                [1] IMPLICIT INTEGER            OPTIONAL,
 *     extensions            CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class StartDataPathResult {
    constructor (
        /**
         * @summary `ioCrossRefID`.
         * @public
         * @readonly
         */
        readonly ioCrossRefID: IOCrossRefID,
        /**
         * @summary `numberOfCharactersToCollect`.
         * @public
         * @readonly
         */
        readonly numberOfCharactersToCollect: OPTIONAL<INTEGER>,
        /**
         * @summary `terminationCharacter`.
         * @public
         * @readonly
         */
        readonly terminationCharacter: OPTIONAL<IA5String>,
        /**
         * @summary `timeout`.
         * @public
         * @readonly
         */
        readonly timeout: OPTIONAL<INTEGER>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a StartDataPathResult
     * @description
     * 
     * This takes an `object` and converts it to a `StartDataPathResult`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `StartDataPathResult`.
     * @returns {StartDataPathResult}
     */
    public static _from_object (_o: { [_K in keyof (StartDataPathResult)]: (StartDataPathResult)[_K] }): StartDataPathResult {
        return new StartDataPathResult(_o.ioCrossRefID, _o.numberOfCharactersToCollect, _o.terminationCharacter, _o.timeout, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of StartDataPathResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_StartDataPathResult: $.ComponentSpec[] = [
    new $.ComponentSpec("ioCrossRefID", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("numberOfCharactersToCollect", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("terminationCharacter", true, $.hasTag(_TagClass.universal, 22)),
    new $.ComponentSpec("timeout", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of StartDataPathResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_StartDataPathResult: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of StartDataPathResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_StartDataPathResult: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_StartDataPathResult: $.ASN1Decoder<StartDataPathResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) StartDataPathResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_StartDataPathResult (el: _Element): StartDataPathResult {
    if (!_cached_decoder_for_StartDataPathResult) { _cached_decoder_for_StartDataPathResult = function (el: _Element): StartDataPathResult {
    let ioCrossRefID!: IOCrossRefID;
    let numberOfCharactersToCollect: OPTIONAL<INTEGER>;
    let terminationCharacter: OPTIONAL<IA5String>;
    let timeout: OPTIONAL<INTEGER>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "ioCrossRefID": (_el: _Element): void => { ioCrossRefID = _decode_IOCrossRefID(_el); },
        "numberOfCharactersToCollect": (_el: _Element): void => { numberOfCharactersToCollect = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "terminationCharacter": (_el: _Element): void => { terminationCharacter = $._decodeIA5String(_el); },
        "timeout": (_el: _Element): void => { timeout = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_StartDataPathResult,
        _extension_additions_list_spec_for_StartDataPathResult,
        _root_component_type_list_2_spec_for_StartDataPathResult,
        undefined,
    );
    return new StartDataPathResult(
        ioCrossRefID,
        numberOfCharactersToCollect,
        terminationCharacter,
        timeout,
        extensions
    );
}; }
    return _cached_decoder_for_StartDataPathResult(el);
}

let _cached_encoder_for_StartDataPathResult: $.ASN1Encoder<StartDataPathResult> | null = null;

/**
 * @summary Encodes a(n) StartDataPathResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StartDataPathResult, encoded as an ASN.1 Element.
 */
export
function _encode_StartDataPathResult (value: StartDataPathResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_StartDataPathResult) { _cached_encoder_for_StartDataPathResult = function (value: StartDataPathResult, elGetter: $.ASN1Encoder<StartDataPathResult>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_IOCrossRefID(value.ioCrossRefID, $.BER),
            /* IF_ABSENT  */ ((value.numberOfCharactersToCollect === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.numberOfCharactersToCollect, $.BER)),
            /* IF_ABSENT  */ ((value.terminationCharacter === undefined) ? undefined : $._encodeIA5String(value.terminationCharacter, $.BER)),
            /* IF_ABSENT  */ ((value.timeout === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.timeout, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_StartDataPathResult(value, elGetter);
}


/* eslint-enable */
