/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { SysStatRegisterID, _decode_SysStatRegisterID, _encode_SysStatRegisterID } from "../CSTA-device-feature-types/SysStatRegisterID.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary RequestSysStatArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RequestSysStatArg ::= SEQUENCE
 * {     sysStatRegisterID         SysStatRegisterID         OPTIONAL,
 *     extensions             CSTACommonArguments         OPTIONAL }
 * ```
 * 
 * @class
 */
export
class RequestSysStatArg {
    constructor (
        /**
         * @summary `sysStatRegisterID`.
         * @public
         * @readonly
         */
        readonly sysStatRegisterID: OPTIONAL<SysStatRegisterID>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a RequestSysStatArg
     * @description
     * 
     * This takes an `object` and converts it to a `RequestSysStatArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RequestSysStatArg`.
     * @returns {RequestSysStatArg}
     */
    public static _from_object (_o: { [_K in keyof (RequestSysStatArg)]: (RequestSysStatArg)[_K] }): RequestSysStatArg {
        return new RequestSysStatArg(_o.sysStatRegisterID, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of RequestSysStatArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RequestSysStatArg: $.ComponentSpec[] = [
    new $.ComponentSpec("sysStatRegisterID", true, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of RequestSysStatArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RequestSysStatArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RequestSysStatArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RequestSysStatArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RequestSysStatArg: $.ASN1Decoder<RequestSysStatArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RequestSysStatArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RequestSysStatArg (el: _Element): RequestSysStatArg {
    if (!_cached_decoder_for_RequestSysStatArg) { _cached_decoder_for_RequestSysStatArg = function (el: _Element): RequestSysStatArg {
    let sysStatRegisterID: OPTIONAL<SysStatRegisterID>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "sysStatRegisterID": (_el: _Element): void => { sysStatRegisterID = _decode_SysStatRegisterID(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RequestSysStatArg,
        _extension_additions_list_spec_for_RequestSysStatArg,
        _root_component_type_list_2_spec_for_RequestSysStatArg,
        undefined,
    );
    return new RequestSysStatArg(
        sysStatRegisterID,
        extensions
    );
}; }
    return _cached_decoder_for_RequestSysStatArg(el);
}

let _cached_encoder_for_RequestSysStatArg: $.ASN1Encoder<RequestSysStatArg> | null = null;

/**
 * @summary Encodes a(n) RequestSysStatArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestSysStatArg, encoded as an ASN.1 Element.
 */
export
function _encode_RequestSysStatArg (value: RequestSysStatArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RequestSysStatArg) { _cached_encoder_for_RequestSysStatArg = function (value: RequestSysStatArg, elGetter: $.ASN1Encoder<RequestSysStatArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.sysStatRegisterID === undefined) ? undefined : _encode_SysStatRegisterID(value.sysStatRegisterID, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RequestSysStatArg(value, elGetter);
}


/* eslint-enable */
