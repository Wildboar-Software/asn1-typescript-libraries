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
 * @summary SystemRegisterCancelArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SystemRegisterCancelArgument ::= SEQUENCE
 * {     sysStatRegisterID         SysStatRegisterID,
 *     extensions             CSTACommonArguments         OPTIONAL }
 * ```
 * 
 * @class
 */
export
class SystemRegisterCancelArgument {
    constructor (
        /**
         * @summary `sysStatRegisterID`.
         * @public
         * @readonly
         */
        readonly sysStatRegisterID: SysStatRegisterID,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a SystemRegisterCancelArgument
     * @description
     * 
     * This takes an `object` and converts it to a `SystemRegisterCancelArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SystemRegisterCancelArgument`.
     * @returns {SystemRegisterCancelArgument}
     */
    public static _from_object (_o: { [_K in keyof (SystemRegisterCancelArgument)]: (SystemRegisterCancelArgument)[_K] }): SystemRegisterCancelArgument {
        return new SystemRegisterCancelArgument(_o.sysStatRegisterID, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of SystemRegisterCancelArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SystemRegisterCancelArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("sysStatRegisterID", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of SystemRegisterCancelArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SystemRegisterCancelArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SystemRegisterCancelArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SystemRegisterCancelArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SystemRegisterCancelArgument: $.ASN1Decoder<SystemRegisterCancelArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SystemRegisterCancelArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SystemRegisterCancelArgument (el: _Element): SystemRegisterCancelArgument {
    if (!_cached_decoder_for_SystemRegisterCancelArgument) { _cached_decoder_for_SystemRegisterCancelArgument = function (el: _Element): SystemRegisterCancelArgument {
    let sysStatRegisterID!: SysStatRegisterID;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "sysStatRegisterID": (_el: _Element): void => { sysStatRegisterID = _decode_SysStatRegisterID(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SystemRegisterCancelArgument,
        _extension_additions_list_spec_for_SystemRegisterCancelArgument,
        _root_component_type_list_2_spec_for_SystemRegisterCancelArgument,
        undefined,
    );
    return new SystemRegisterCancelArgument(
        sysStatRegisterID,
        extensions
    );
}; }
    return _cached_decoder_for_SystemRegisterCancelArgument(el);
}

let _cached_encoder_for_SystemRegisterCancelArgument: $.ASN1Encoder<SystemRegisterCancelArgument> | null = null;

/**
 * @summary Encodes a(n) SystemRegisterCancelArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SystemRegisterCancelArgument, encoded as an ASN.1 Element.
 */
export
function _encode_SystemRegisterCancelArgument (value: SystemRegisterCancelArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SystemRegisterCancelArgument) { _cached_encoder_for_SystemRegisterCancelArgument = function (value: SystemRegisterCancelArgument, elGetter: $.ASN1Encoder<SystemRegisterCancelArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_SysStatRegisterID(value.sysStatRegisterID, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SystemRegisterCancelArgument(value, elGetter);
}


/* eslint-enable */
