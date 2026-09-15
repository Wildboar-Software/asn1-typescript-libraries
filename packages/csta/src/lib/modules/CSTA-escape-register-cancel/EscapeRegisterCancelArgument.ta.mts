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
 * @summary EscapeRegisterCancelArgument
 * @description
 *
 * Registration to cancel (ECMA-269 §29.1.3.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EscapeRegisterCancelArgument ::= SEQUENCE 
 * {    escapeRegisterID        EscapeRegisterID,
 *     extensions            CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class EscapeRegisterCancelArgument {
    constructor (
        /**
         * @summary `escapeRegisterID`.
         * @description
         *
         * Escape registration to cancel (ECMA-269 §29.1.3.1).
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
     * @summary Restructures an object into a EscapeRegisterCancelArgument
     * @description
     * 
     * This takes an `object` and converts it to a `EscapeRegisterCancelArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EscapeRegisterCancelArgument`.
     * @returns {EscapeRegisterCancelArgument}
     */
    public static _from_object (_o: { [_K in keyof (EscapeRegisterCancelArgument)]: (EscapeRegisterCancelArgument)[_K] }): EscapeRegisterCancelArgument {
        return new EscapeRegisterCancelArgument(_o.escapeRegisterID, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of EscapeRegisterCancelArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EscapeRegisterCancelArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("escapeRegisterID", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of EscapeRegisterCancelArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EscapeRegisterCancelArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EscapeRegisterCancelArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EscapeRegisterCancelArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EscapeRegisterCancelArgument: $.ASN1Decoder<EscapeRegisterCancelArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EscapeRegisterCancelArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EscapeRegisterCancelArgument (el: _Element): EscapeRegisterCancelArgument {
    if (!_cached_decoder_for_EscapeRegisterCancelArgument) { _cached_decoder_for_EscapeRegisterCancelArgument = function (el: _Element): EscapeRegisterCancelArgument {
    let escapeRegisterID!: EscapeRegisterID;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "escapeRegisterID": (_el: _Element): void => { escapeRegisterID = _decode_EscapeRegisterID(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EscapeRegisterCancelArgument,
        _extension_additions_list_spec_for_EscapeRegisterCancelArgument,
        _root_component_type_list_2_spec_for_EscapeRegisterCancelArgument,
        undefined,
    );
    return new EscapeRegisterCancelArgument(
        escapeRegisterID,
        extensions
    );
}; }
    return _cached_decoder_for_EscapeRegisterCancelArgument(el);
}

let _cached_encoder_for_EscapeRegisterCancelArgument: $.ASN1Encoder<EscapeRegisterCancelArgument> | null = null;

/**
 * @summary Encodes a(n) EscapeRegisterCancelArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EscapeRegisterCancelArgument, encoded as an ASN.1 Element.
 */
export
function _encode_EscapeRegisterCancelArgument (value: EscapeRegisterCancelArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EscapeRegisterCancelArgument) { _cached_encoder_for_EscapeRegisterCancelArgument = function (value: EscapeRegisterCancelArgument, elGetter: $.ASN1Encoder<EscapeRegisterCancelArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_EscapeRegisterID(value.escapeRegisterID, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EscapeRegisterCancelArgument(value, elGetter);
}


/* eslint-enable */
