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

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary CamponCallArgument
 * @description
 *
 * Service request for Camp On Call (ECMA-269 §17.1.6 / ECMA-285
 * §15.1.6). Names the calling connection of the call waiting for
 * a busy destination. Only one camp-on may be active per
 * calling/called pair (FR 1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CamponCallArgument ::= SEQUENCE
 * {     camponConnection         ConnectionID,
 *     extensions             CSTACommonArguments         OPTIONAL }
 * ```
 * 
 * @class
 */
export
class CamponCallArgument {
    constructor (
        /**
         * @summary `camponConnection`.
         * @description
         *
         * Mandatory. Calling device's connection (Connected). The
         * called side is typically a Call-ID-only connection in
         * Fail (§6.7.2).
         *
         * @public
         * @readonly
         */
        readonly camponConnection: ConnectionID,
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
     * @summary Restructures an object into a CamponCallArgument
     * @description
     * 
     * This takes an `object` and converts it to a `CamponCallArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CamponCallArgument`.
     * @returns {CamponCallArgument}
     */
    public static _from_object (_o: { [_K in keyof (CamponCallArgument)]: (CamponCallArgument)[_K] }): CamponCallArgument {
        return new CamponCallArgument(_o.camponConnection, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of CamponCallArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CamponCallArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("camponConnection", false, $.hasTag(_TagClass.application, 11)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of CamponCallArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CamponCallArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CamponCallArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CamponCallArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CamponCallArgument: $.ASN1Decoder<CamponCallArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CamponCallArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CamponCallArgument (el: _Element): CamponCallArgument {
    if (!_cached_decoder_for_CamponCallArgument) { _cached_decoder_for_CamponCallArgument = function (el: _Element): CamponCallArgument {
    let camponConnection!: ConnectionID;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "camponConnection": (_el: _Element): void => { camponConnection = _decode_ConnectionID(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CamponCallArgument,
        _extension_additions_list_spec_for_CamponCallArgument,
        _root_component_type_list_2_spec_for_CamponCallArgument,
        undefined,
    );
    return new CamponCallArgument(
        camponConnection,
        extensions
    );
}; }
    return _cached_decoder_for_CamponCallArgument(el);
}

let _cached_encoder_for_CamponCallArgument: $.ASN1Encoder<CamponCallArgument> | null = null;

/**
 * @summary Encodes a(n) CamponCallArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CamponCallArgument, encoded as an ASN.1 Element.
 */
export
function _encode_CamponCallArgument (value: CamponCallArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CamponCallArgument) { _cached_encoder_for_CamponCallArgument = function (value: CamponCallArgument, elGetter: $.ASN1Encoder<CamponCallArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ConnectionID(value.camponConnection, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CamponCallArgument(value, elGetter);
}


/* eslint-enable */
