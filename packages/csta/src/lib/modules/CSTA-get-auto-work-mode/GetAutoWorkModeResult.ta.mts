/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary GetAutoWorkModeResult
 * @description
 *
 * Positive ack (ECMA-269 §22.1.7.2.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetAutoWorkModeResult ::= SEQUENCE
 * {    autoWorkOn            BOOLEAN,
 *     autoWorkInterval        INTEGER                    OPTIONAL,
 *     extensions            CSTACommonArguments             OPTIONAL }
 * ```
 * 
 * @class
 */
export
class GetAutoWorkModeResult {
    constructor (
        /**
         * @summary `autoWorkOn`.
         * @description
         *
         * FALSE = off; TRUE = on.
         * @public
         * @readonly
         */
        readonly autoWorkOn: BOOLEAN,
        /**
         * @summary `autoWorkInterval`.
         * @description
         *
         * Seconds in WorkingAfterCall. 0: do not auto-exit; change state
         * manually or via Set Agent State.
         * @public
         * @readonly
         */
        readonly autoWorkInterval: OPTIONAL<INTEGER>,
        /**
         * @summary `extensions`.
         * @description
         *
         * Optional security (timestamp, sequence, securityInfo) and
         * privateData.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a GetAutoWorkModeResult
     * @description
     * 
     * This takes an `object` and converts it to a `GetAutoWorkModeResult`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GetAutoWorkModeResult`.
     * @returns {GetAutoWorkModeResult}
     */
    public static _from_object (_o: { [_K in keyof (GetAutoWorkModeResult)]: (GetAutoWorkModeResult)[_K] }): GetAutoWorkModeResult {
        return new GetAutoWorkModeResult(_o.autoWorkOn, _o.autoWorkInterval, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of GetAutoWorkModeResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GetAutoWorkModeResult: $.ComponentSpec[] = [
    new $.ComponentSpec("autoWorkOn", false, $.hasTag(_TagClass.universal, 1)),
    new $.ComponentSpec("autoWorkInterval", true, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of GetAutoWorkModeResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GetAutoWorkModeResult: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GetAutoWorkModeResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GetAutoWorkModeResult: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GetAutoWorkModeResult: $.ASN1Decoder<GetAutoWorkModeResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetAutoWorkModeResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetAutoWorkModeResult (el: _Element): GetAutoWorkModeResult {
    if (!_cached_decoder_for_GetAutoWorkModeResult) { _cached_decoder_for_GetAutoWorkModeResult = function (el: _Element): GetAutoWorkModeResult {
    let autoWorkOn!: BOOLEAN;
    let autoWorkInterval: OPTIONAL<INTEGER>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "autoWorkOn": (_el: _Element): void => { autoWorkOn = $._decodeBoolean(_el); },
        "autoWorkInterval": (_el: _Element): void => { autoWorkInterval = $._decodeInteger(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GetAutoWorkModeResult,
        _extension_additions_list_spec_for_GetAutoWorkModeResult,
        _root_component_type_list_2_spec_for_GetAutoWorkModeResult,
        undefined,
    );
    return new GetAutoWorkModeResult(
        autoWorkOn,
        autoWorkInterval,
        extensions
    );
}; }
    return _cached_decoder_for_GetAutoWorkModeResult(el);
}

let _cached_encoder_for_GetAutoWorkModeResult: $.ASN1Encoder<GetAutoWorkModeResult> | null = null;

/**
 * @summary Encodes a(n) GetAutoWorkModeResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetAutoWorkModeResult, encoded as an ASN.1 Element.
 */
export
function _encode_GetAutoWorkModeResult (value: GetAutoWorkModeResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetAutoWorkModeResult) { _cached_encoder_for_GetAutoWorkModeResult = function (value: GetAutoWorkModeResult, elGetter: $.ASN1Encoder<GetAutoWorkModeResult>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeBoolean(value.autoWorkOn, $.BER),
            /* IF_ABSENT  */ ((value.autoWorkInterval === undefined) ? undefined : $._encodeInteger(value.autoWorkInterval, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GetAutoWorkModeResult(value, elGetter);
}


/* eslint-enable */
