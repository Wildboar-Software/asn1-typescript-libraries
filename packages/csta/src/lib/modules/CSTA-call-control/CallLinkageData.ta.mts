/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { GlobalCallData, _decode_GlobalCallData, _encode_GlobalCallData } from "../CSTA-call-control/GlobalCallData.ta.mjs";

import { ThreadData, _decode_ThreadData, _encode_ThreadData } from "../CSTA-call-control/ThreadData.ta.mjs";



/**
 * @summary CallLinkageData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallLinkageData ::= SEQUENCE
 * {     globalCallData                     GlobalCallData,
 *     threadData                     ThreadData                      OPTIONAL }
 * ```
 * 
 * @class
 */
export
class CallLinkageData {
    constructor (
        /**
         * @summary `globalCallData`.
         * @public
         * @readonly
         */
        readonly globalCallData: GlobalCallData,
        /**
         * @summary `threadData`.
         * @public
         * @readonly
         */
        readonly threadData: OPTIONAL<ThreadData>
    ) {}

    /**
     * @summary Restructures an object into a CallLinkageData
     * @description
     * 
     * This takes an `object` and converts it to a `CallLinkageData`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CallLinkageData`.
     * @returns {CallLinkageData}
     */
    public static _from_object (_o: { [_K in keyof (CallLinkageData)]: (CallLinkageData)[_K] }): CallLinkageData {
        return new CallLinkageData(_o.globalCallData, _o.threadData);
    }


}

/**
 * @summary The Leading Root Component Types of CallLinkageData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CallLinkageData: $.ComponentSpec[] = [
    new $.ComponentSpec("globalCallData", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("threadData", true, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of CallLinkageData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CallLinkageData: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CallLinkageData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CallLinkageData: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CallLinkageData: $.ASN1Decoder<CallLinkageData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CallLinkageData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CallLinkageData (el: _Element): CallLinkageData {
    if (!_cached_decoder_for_CallLinkageData) { _cached_decoder_for_CallLinkageData = function (el: _Element): CallLinkageData {
    let globalCallData!: GlobalCallData;
    let threadData: OPTIONAL<ThreadData>;
    const callbacks: $.DecodingMap = {
        "globalCallData": (_el: _Element): void => { globalCallData = _decode_GlobalCallData(_el); },
        "threadData": (_el: _Element): void => { threadData = _decode_ThreadData(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CallLinkageData,
        _extension_additions_list_spec_for_CallLinkageData,
        _root_component_type_list_2_spec_for_CallLinkageData,
        undefined,
    );
    return new CallLinkageData(
        globalCallData,
        threadData
    );
}; }
    return _cached_decoder_for_CallLinkageData(el);
}

let _cached_encoder_for_CallLinkageData: $.ASN1Encoder<CallLinkageData> | null = null;

/**
 * @summary Encodes a(n) CallLinkageData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallLinkageData, encoded as an ASN.1 Element.
 */
export
function _encode_CallLinkageData (value: CallLinkageData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CallLinkageData) { _cached_encoder_for_CallLinkageData = function (value: CallLinkageData, elGetter: $.ASN1Encoder<CallLinkageData>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_GlobalCallData(value.globalCallData, $.BER),
            /* IF_ABSENT  */ ((value.threadData === undefined) ? undefined : _encode_ThreadData(value.threadData, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CallLinkageData(value, elGetter);
}


/* eslint-enable */
