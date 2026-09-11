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
 * @summary RequestSysStatRes
 * @description
 *
 * Positive ack (Table 14-11). Values: ECMA-269 §12.2.28.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RequestSysStatRes ::= SEQUENCE
 * {     systemStatus             SystemStatus,
 *     extensions             CSTACommonArguments         OPTIONAL }
 * ```
 * 
 * @class
 */
export
class RequestSysStatRes {
    constructor (
        /**
         * @summary `systemStatus`.
         * @description
         *
         * Status of the queried function: initializing, enabled, normal,
         * messages lost, disabled, partially disabled, overload
         * imminent/reached/relieved.
         * @public
         * @readonly
         */
        readonly systemStatus: SystemStatus,
        /**
         * @summary `extensions`.
         * @description
         *
         * Optional security (timestamp, sequence, securityInfo) and
         * privateData. ECMA-269 Table 14-11.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a RequestSysStatRes
     * @description
     * 
     * This takes an `object` and converts it to a `RequestSysStatRes`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RequestSysStatRes`.
     * @returns {RequestSysStatRes}
     */
    public static _from_object (_o: { [_K in keyof (RequestSysStatRes)]: (RequestSysStatRes)[_K] }): RequestSysStatRes {
        return new RequestSysStatRes(_o.systemStatus, _o.extensions);
    }

        /**
         * @summary The enum used as the type of the component `systemStatus`
         * @public
         * @static
         */

    public static _enum_for_systemStatus = _enum_for_SystemStatus;
}

/**
 * @summary The Leading Root Component Types of RequestSysStatRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RequestSysStatRes: $.ComponentSpec[] = [
    new $.ComponentSpec("systemStatus", false, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of RequestSysStatRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RequestSysStatRes: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RequestSysStatRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RequestSysStatRes: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RequestSysStatRes: $.ASN1Decoder<RequestSysStatRes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RequestSysStatRes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RequestSysStatRes (el: _Element): RequestSysStatRes {
    if (!_cached_decoder_for_RequestSysStatRes) { _cached_decoder_for_RequestSysStatRes = function (el: _Element): RequestSysStatRes {
    let systemStatus!: SystemStatus;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "systemStatus": (_el: _Element): void => { systemStatus = _decode_SystemStatus(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RequestSysStatRes,
        _extension_additions_list_spec_for_RequestSysStatRes,
        _root_component_type_list_2_spec_for_RequestSysStatRes,
        undefined,
    );
    return new RequestSysStatRes(
        systemStatus,
        extensions
    );
}; }
    return _cached_decoder_for_RequestSysStatRes(el);
}

let _cached_encoder_for_RequestSysStatRes: $.ASN1Encoder<RequestSysStatRes> | null = null;

/**
 * @summary Encodes a(n) RequestSysStatRes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestSysStatRes, encoded as an ASN.1 Element.
 */
export
function _encode_RequestSysStatRes (value: RequestSysStatRes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RequestSysStatRes) { _cached_encoder_for_RequestSysStatRes = function (value: RequestSysStatRes, elGetter: $.ASN1Encoder<RequestSysStatRes>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_SystemStatus(value.systemStatus, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RequestSysStatRes(value, elGetter);
}


/* eslint-enable */
