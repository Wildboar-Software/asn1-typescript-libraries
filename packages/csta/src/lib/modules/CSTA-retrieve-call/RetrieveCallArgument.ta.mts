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
 * @summary RetrieveCallArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RetrieveCallArgument ::= SEQUENCE
 * {     callToBeRetrieved         ConnectionID,
 *     extensions             CSTACommonArguments         OPTIONAL }
 * ```
 * 
 * @class
 */
export
class RetrieveCallArgument {
    constructor (
        /**
         * @summary `callToBeRetrieved`.
         * @public
         * @readonly
         */
        readonly callToBeRetrieved: ConnectionID,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a RetrieveCallArgument
     * @description
     * 
     * This takes an `object` and converts it to a `RetrieveCallArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RetrieveCallArgument`.
     * @returns {RetrieveCallArgument}
     */
    public static _from_object (_o: { [_K in keyof (RetrieveCallArgument)]: (RetrieveCallArgument)[_K] }): RetrieveCallArgument {
        return new RetrieveCallArgument(_o.callToBeRetrieved, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of RetrieveCallArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RetrieveCallArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("callToBeRetrieved", false, $.hasTag(_TagClass.application, 11)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of RetrieveCallArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RetrieveCallArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RetrieveCallArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RetrieveCallArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RetrieveCallArgument: $.ASN1Decoder<RetrieveCallArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RetrieveCallArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RetrieveCallArgument (el: _Element): RetrieveCallArgument {
    if (!_cached_decoder_for_RetrieveCallArgument) { _cached_decoder_for_RetrieveCallArgument = function (el: _Element): RetrieveCallArgument {
    let callToBeRetrieved!: ConnectionID;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "callToBeRetrieved": (_el: _Element): void => { callToBeRetrieved = _decode_ConnectionID(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RetrieveCallArgument,
        _extension_additions_list_spec_for_RetrieveCallArgument,
        _root_component_type_list_2_spec_for_RetrieveCallArgument,
        undefined,
    );
    return new RetrieveCallArgument(
        callToBeRetrieved,
        extensions
    );
}; }
    return _cached_decoder_for_RetrieveCallArgument(el);
}

let _cached_encoder_for_RetrieveCallArgument: $.ASN1Encoder<RetrieveCallArgument> | null = null;

/**
 * @summary Encodes a(n) RetrieveCallArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RetrieveCallArgument, encoded as an ASN.1 Element.
 */
export
function _encode_RetrieveCallArgument (value: RetrieveCallArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RetrieveCallArgument) { _cached_encoder_for_RetrieveCallArgument = function (value: RetrieveCallArgument, elGetter: $.ASN1Encoder<RetrieveCallArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ConnectionID(value.callToBeRetrieved, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RetrieveCallArgument(value, elGetter);
}


/* eslint-enable */
