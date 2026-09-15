/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { EscapeRegisterID, _decode_EscapeRegisterID, _encode_EscapeRegisterID } from "../CSTA-escape-types/EscapeRegisterID.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary EscapeRegisterAbortArgument
 * @description
 *
 * Registration that was aborted (ECMA-269 §29.1.2.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EscapeRegisterAbortArgument ::= SEQUENCE 
 * {    escapeRegisterID        EscapeRegisterID,
 *     extensions            CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class EscapeRegisterAbortArgument {
    constructor (
        /**
         * @summary `escapeRegisterID`.
         * @description
         *
         * Escape registration that was aborted (ECMA-269 §29.1.2.1).
         *
         * @public
         * @readonly
         */
        readonly escapeRegisterID: EscapeRegisterID,
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
     * @summary Restructures an object into a EscapeRegisterAbortArgument
     * @description
     * 
     * This takes an `object` and converts it to a `EscapeRegisterAbortArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EscapeRegisterAbortArgument`.
     * @returns {EscapeRegisterAbortArgument}
     */
    public static _from_object (_o: { [_K in keyof (EscapeRegisterAbortArgument)]: (EscapeRegisterAbortArgument)[_K] }): EscapeRegisterAbortArgument {
        return new EscapeRegisterAbortArgument(_o.escapeRegisterID, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of EscapeRegisterAbortArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EscapeRegisterAbortArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("escapeRegisterID", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of EscapeRegisterAbortArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EscapeRegisterAbortArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EscapeRegisterAbortArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EscapeRegisterAbortArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EscapeRegisterAbortArgument: $.ASN1Decoder<EscapeRegisterAbortArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EscapeRegisterAbortArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EscapeRegisterAbortArgument (el: _Element): EscapeRegisterAbortArgument {
    if (!_cached_decoder_for_EscapeRegisterAbortArgument) { _cached_decoder_for_EscapeRegisterAbortArgument = function (el: _Element): EscapeRegisterAbortArgument {
    let escapeRegisterID!: EscapeRegisterID;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "escapeRegisterID": (_el: _Element): void => { escapeRegisterID = _decode_EscapeRegisterID(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EscapeRegisterAbortArgument,
        _extension_additions_list_spec_for_EscapeRegisterAbortArgument,
        _root_component_type_list_2_spec_for_EscapeRegisterAbortArgument,
        undefined,
    );
    return new EscapeRegisterAbortArgument(
        escapeRegisterID,
        extensions
    );
}; }
    return _cached_decoder_for_EscapeRegisterAbortArgument(el);
}

let _cached_encoder_for_EscapeRegisterAbortArgument: $.ASN1Encoder<EscapeRegisterAbortArgument> | null = null;

/**
 * @summary Encodes a(n) EscapeRegisterAbortArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EscapeRegisterAbortArgument, encoded as an ASN.1 Element.
 */
export
function _encode_EscapeRegisterAbortArgument (value: EscapeRegisterAbortArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EscapeRegisterAbortArgument) { _cached_encoder_for_EscapeRegisterAbortArgument = function (value: EscapeRegisterAbortArgument, elGetter: $.ASN1Encoder<EscapeRegisterAbortArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_EscapeRegisterID(value.escapeRegisterID, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EscapeRegisterAbortArgument(value, elGetter);
}


/* eslint-enable */
