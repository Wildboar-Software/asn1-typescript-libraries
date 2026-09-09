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
 * @summary ReconnectCallArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReconnectCallArgument ::= SEQUENCE
 * {     activeCall             ConnectionID,
 *     heldCall             ConnectionID,
 *     extensions             CSTACommonArguments         OPTIONAL }
 * ```
 * 
 * @class
 */
export
class ReconnectCallArgument {
    constructor (
        /**
         * @summary `activeCall`.
         * @public
         * @readonly
         */
        readonly activeCall: ConnectionID,
        /**
         * @summary `heldCall`.
         * @public
         * @readonly
         */
        readonly heldCall: ConnectionID,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a ReconnectCallArgument
     * @description
     * 
     * This takes an `object` and converts it to a `ReconnectCallArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ReconnectCallArgument`.
     * @returns {ReconnectCallArgument}
     */
    public static _from_object (_o: { [_K in keyof (ReconnectCallArgument)]: (ReconnectCallArgument)[_K] }): ReconnectCallArgument {
        return new ReconnectCallArgument(_o.activeCall, _o.heldCall, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of ReconnectCallArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ReconnectCallArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("activeCall", false, $.hasTag(_TagClass.application, 11)),
    new $.ComponentSpec("heldCall", false, $.hasTag(_TagClass.application, 11)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of ReconnectCallArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ReconnectCallArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ReconnectCallArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ReconnectCallArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ReconnectCallArgument: $.ASN1Decoder<ReconnectCallArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReconnectCallArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReconnectCallArgument (el: _Element): ReconnectCallArgument {
    if (!_cached_decoder_for_ReconnectCallArgument) { _cached_decoder_for_ReconnectCallArgument = function (el: _Element): ReconnectCallArgument {
    let activeCall!: ConnectionID;
    let heldCall!: ConnectionID;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "activeCall": (_el: _Element): void => { activeCall = _decode_ConnectionID(_el); },
        "heldCall": (_el: _Element): void => { heldCall = _decode_ConnectionID(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ReconnectCallArgument,
        _extension_additions_list_spec_for_ReconnectCallArgument,
        _root_component_type_list_2_spec_for_ReconnectCallArgument,
        undefined,
    );
    return new ReconnectCallArgument(
        activeCall,
        heldCall,
        extensions
    );
}; }
    return _cached_decoder_for_ReconnectCallArgument(el);
}

let _cached_encoder_for_ReconnectCallArgument: $.ASN1Encoder<ReconnectCallArgument> | null = null;

/**
 * @summary Encodes a(n) ReconnectCallArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReconnectCallArgument, encoded as an ASN.1 Element.
 */
export
function _encode_ReconnectCallArgument (value: ReconnectCallArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReconnectCallArgument) { _cached_encoder_for_ReconnectCallArgument = function (value: ReconnectCallArgument, elGetter: $.ASN1Encoder<ReconnectCallArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ConnectionID(value.activeCall, $.BER),
            /* REQUIRED   */ _encode_ConnectionID(value.heldCall, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ReconnectCallArgument(value, elGetter);
}


/* eslint-enable */
