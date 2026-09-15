/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { DeviceID, _decode_DeviceID, _encode_DeviceID } from "../CSTA-device-identifiers/DeviceID.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary GetAutoAnswerArgument
 * @description
 *
 * Get Auto Answer request (ECMA-269 §22.1.6.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetAutoAnswerArgument ::= SEQUENCE
 * {    device                 DeviceID,
 *     extensions            CSTACommonArguments             OPTIONAL }
 * ```
 * 
 * @class
 */
export
class GetAutoAnswerArgument {
    constructor (
        /**
         * @summary `device`.
         * @description
         *
         * Device whose auto-answer status is queried.
         * @public
         * @readonly
         */
        readonly device: DeviceID,
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
     * @summary Restructures an object into a GetAutoAnswerArgument
     * @description
     * 
     * This takes an `object` and converts it to a `GetAutoAnswerArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GetAutoAnswerArgument`.
     * @returns {GetAutoAnswerArgument}
     */
    public static _from_object (_o: { [_K in keyof (GetAutoAnswerArgument)]: (GetAutoAnswerArgument)[_K] }): GetAutoAnswerArgument {
        return new GetAutoAnswerArgument(_o.device, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of GetAutoAnswerArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GetAutoAnswerArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("device", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of GetAutoAnswerArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GetAutoAnswerArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GetAutoAnswerArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GetAutoAnswerArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GetAutoAnswerArgument: $.ASN1Decoder<GetAutoAnswerArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetAutoAnswerArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetAutoAnswerArgument (el: _Element): GetAutoAnswerArgument {
    if (!_cached_decoder_for_GetAutoAnswerArgument) { _cached_decoder_for_GetAutoAnswerArgument = function (el: _Element): GetAutoAnswerArgument {
    let device!: DeviceID;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "device": (_el: _Element): void => { device = _decode_DeviceID(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GetAutoAnswerArgument,
        _extension_additions_list_spec_for_GetAutoAnswerArgument,
        _root_component_type_list_2_spec_for_GetAutoAnswerArgument,
        undefined,
    );
    return new GetAutoAnswerArgument(
        device,
        extensions
    );
}; }
    return _cached_decoder_for_GetAutoAnswerArgument(el);
}

let _cached_encoder_for_GetAutoAnswerArgument: $.ASN1Encoder<GetAutoAnswerArgument> | null = null;

/**
 * @summary Encodes a(n) GetAutoAnswerArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetAutoAnswerArgument, encoded as an ASN.1 Element.
 */
export
function _encode_GetAutoAnswerArgument (value: GetAutoAnswerArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetAutoAnswerArgument) { _cached_encoder_for_GetAutoAnswerArgument = function (value: GetAutoAnswerArgument, elGetter: $.ASN1Encoder<GetAutoAnswerArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_DeviceID(value.device, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GetAutoAnswerArgument(value, elGetter);
}


/* eslint-enable */
