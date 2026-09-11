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
 * @summary CancelTelephonyTonesArgument
 * @description
 *
 * Service request (ECMA-269 Table 18-6).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CancelTelephonyTonesArgument ::= SEQUENCE
 * {    connectionToStopTone        ConnectionID,
 *     extensions            CSTACommonArguments        OPTIONAL }
 * ```
 * 
 * @class
 */
export
class CancelTelephonyTonesArgument {
    constructor (
        /**
         * @summary `connectionToStopTone`.
         * @description
         *
         * Connection on which tone generation is stopped.
         * @public
         * @readonly
         */
        readonly connectionToStopTone: ConnectionID,
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
     * @summary Restructures an object into a CancelTelephonyTonesArgument
     * @description
     * 
     * This takes an `object` and converts it to a `CancelTelephonyTonesArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CancelTelephonyTonesArgument`.
     * @returns {CancelTelephonyTonesArgument}
     */
    public static _from_object (_o: { [_K in keyof (CancelTelephonyTonesArgument)]: (CancelTelephonyTonesArgument)[_K] }): CancelTelephonyTonesArgument {
        return new CancelTelephonyTonesArgument(_o.connectionToStopTone, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of CancelTelephonyTonesArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CancelTelephonyTonesArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("connectionToStopTone", false, $.hasTag(_TagClass.application, 11)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of CancelTelephonyTonesArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CancelTelephonyTonesArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CancelTelephonyTonesArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CancelTelephonyTonesArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CancelTelephonyTonesArgument: $.ASN1Decoder<CancelTelephonyTonesArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CancelTelephonyTonesArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CancelTelephonyTonesArgument (el: _Element): CancelTelephonyTonesArgument {
    if (!_cached_decoder_for_CancelTelephonyTonesArgument) { _cached_decoder_for_CancelTelephonyTonesArgument = function (el: _Element): CancelTelephonyTonesArgument {
    let connectionToStopTone!: ConnectionID;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "connectionToStopTone": (_el: _Element): void => { connectionToStopTone = _decode_ConnectionID(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CancelTelephonyTonesArgument,
        _extension_additions_list_spec_for_CancelTelephonyTonesArgument,
        _root_component_type_list_2_spec_for_CancelTelephonyTonesArgument,
        undefined,
    );
    return new CancelTelephonyTonesArgument(
        connectionToStopTone,
        extensions
    );
}; }
    return _cached_decoder_for_CancelTelephonyTonesArgument(el);
}

let _cached_encoder_for_CancelTelephonyTonesArgument: $.ASN1Encoder<CancelTelephonyTonesArgument> | null = null;

/**
 * @summary Encodes a(n) CancelTelephonyTonesArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CancelTelephonyTonesArgument, encoded as an ASN.1 Element.
 */
export
function _encode_CancelTelephonyTonesArgument (value: CancelTelephonyTonesArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CancelTelephonyTonesArgument) { _cached_encoder_for_CancelTelephonyTonesArgument = function (value: CancelTelephonyTonesArgument, elGetter: $.ASN1Encoder<CancelTelephonyTonesArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ConnectionID(value.connectionToStopTone, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CancelTelephonyTonesArgument(value, elGetter);
}


/* eslint-enable */
