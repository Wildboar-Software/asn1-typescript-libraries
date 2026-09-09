/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { IORegisterReqID, _decode_IORegisterReqID, _encode_IORegisterReqID } from "../CSTA-device-feature-types/IORegisterReqID.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary IORegisterCancelArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IORegisterCancelArgument ::= SEQUENCE
 * {    ioRegisterReqID            IORegisterReqID,
 *     extensions            CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class IORegisterCancelArgument {
    constructor (
        /**
         * @summary `ioRegisterReqID`.
         * @public
         * @readonly
         */
        readonly ioRegisterReqID: IORegisterReqID,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a IORegisterCancelArgument
     * @description
     * 
     * This takes an `object` and converts it to a `IORegisterCancelArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IORegisterCancelArgument`.
     * @returns {IORegisterCancelArgument}
     */
    public static _from_object (_o: { [_K in keyof (IORegisterCancelArgument)]: (IORegisterCancelArgument)[_K] }): IORegisterCancelArgument {
        return new IORegisterCancelArgument(_o.ioRegisterReqID, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of IORegisterCancelArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IORegisterCancelArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("ioRegisterReqID", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of IORegisterCancelArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IORegisterCancelArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IORegisterCancelArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IORegisterCancelArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_IORegisterCancelArgument: $.ASN1Decoder<IORegisterCancelArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IORegisterCancelArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IORegisterCancelArgument (el: _Element): IORegisterCancelArgument {
    if (!_cached_decoder_for_IORegisterCancelArgument) { _cached_decoder_for_IORegisterCancelArgument = function (el: _Element): IORegisterCancelArgument {
    let ioRegisterReqID!: IORegisterReqID;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "ioRegisterReqID": (_el: _Element): void => { ioRegisterReqID = _decode_IORegisterReqID(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_IORegisterCancelArgument,
        _extension_additions_list_spec_for_IORegisterCancelArgument,
        _root_component_type_list_2_spec_for_IORegisterCancelArgument,
        undefined,
    );
    return new IORegisterCancelArgument(
        ioRegisterReqID,
        extensions
    );
}; }
    return _cached_decoder_for_IORegisterCancelArgument(el);
}

let _cached_encoder_for_IORegisterCancelArgument: $.ASN1Encoder<IORegisterCancelArgument> | null = null;

/**
 * @summary Encodes a(n) IORegisterCancelArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IORegisterCancelArgument, encoded as an ASN.1 Element.
 */
export
function _encode_IORegisterCancelArgument (value: IORegisterCancelArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IORegisterCancelArgument) { _cached_encoder_for_IORegisterCancelArgument = function (value: IORegisterCancelArgument, elGetter: $.ASN1Encoder<IORegisterCancelArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_IORegisterReqID(value.ioRegisterReqID, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_IORegisterCancelArgument(value, elGetter);
}


/* eslint-enable */
