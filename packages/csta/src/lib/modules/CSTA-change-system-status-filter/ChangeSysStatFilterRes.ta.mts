/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import {
    SystemStatus,
    _enum_for_SystemStatus,
    _decode_SystemStatus,
    _encode_SystemStatus
} from "../CSTA-device-feature-types/SystemStatus.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary ChangeSysStatFilterRes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChangeSysStatFilterRes ::= SEQUENCE
 * {     actualStatusFilter         SystemStatus,
 *     extensions             CSTACommonArguments         OPTIONAL }
 * ```
 * 
 * @class
 */
export
class ChangeSysStatFilterRes {
    constructor (
        /**
         * @summary `actualStatusFilter`.
         * @public
         * @readonly
         */
        readonly actualStatusFilter: SystemStatus,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a ChangeSysStatFilterRes
     * @description
     * 
     * This takes an `object` and converts it to a `ChangeSysStatFilterRes`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ChangeSysStatFilterRes`.
     * @returns {ChangeSysStatFilterRes}
     */
    public static _from_object (_o: { [_K in keyof (ChangeSysStatFilterRes)]: (ChangeSysStatFilterRes)[_K] }): ChangeSysStatFilterRes {
        return new ChangeSysStatFilterRes(_o.actualStatusFilter, _o.extensions);
    }

        /**
         * @summary The enum used as the type of the component `actualStatusFilter`
         * @public
         * @static
         */

    public static _enum_for_actualStatusFilter = _enum_for_SystemStatus;
}

/**
 * @summary The Leading Root Component Types of ChangeSysStatFilterRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ChangeSysStatFilterRes: $.ComponentSpec[] = [
    new $.ComponentSpec("actualStatusFilter", false, $.hasTag(_TagClass.universal, 3)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of ChangeSysStatFilterRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ChangeSysStatFilterRes: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ChangeSysStatFilterRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ChangeSysStatFilterRes: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ChangeSysStatFilterRes: $.ASN1Decoder<ChangeSysStatFilterRes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ChangeSysStatFilterRes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ChangeSysStatFilterRes (el: _Element): ChangeSysStatFilterRes {
    if (!_cached_decoder_for_ChangeSysStatFilterRes) { _cached_decoder_for_ChangeSysStatFilterRes = function (el: _Element): ChangeSysStatFilterRes {
    let actualStatusFilter!: SystemStatus;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "actualStatusFilter": (_el: _Element): void => { actualStatusFilter = _decode_SystemStatus(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ChangeSysStatFilterRes,
        _extension_additions_list_spec_for_ChangeSysStatFilterRes,
        _root_component_type_list_2_spec_for_ChangeSysStatFilterRes,
        undefined,
    );
    return new ChangeSysStatFilterRes(
        actualStatusFilter,
        extensions
    );
}; }
    return _cached_decoder_for_ChangeSysStatFilterRes(el);
}

let _cached_encoder_for_ChangeSysStatFilterRes: $.ASN1Encoder<ChangeSysStatFilterRes> | null = null;

/**
 * @summary Encodes a(n) ChangeSysStatFilterRes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ChangeSysStatFilterRes, encoded as an ASN.1 Element.
 */
export
function _encode_ChangeSysStatFilterRes (value: ChangeSysStatFilterRes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ChangeSysStatFilterRes) { _cached_encoder_for_ChangeSysStatFilterRes = function (value: ChangeSysStatFilterRes, elGetter: $.ASN1Encoder<ChangeSysStatFilterRes>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_SystemStatus(value.actualStatusFilter, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ChangeSysStatFilterRes(value, elGetter);
}


/* eslint-enable */
