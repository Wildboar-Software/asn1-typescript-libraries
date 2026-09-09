/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    IA5String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { ThreadLinkageID, _decode_ThreadLinkageID, _encode_ThreadLinkageID } from "../CSTA-call-control/ThreadLinkageID.ta.mjs";

import { TimeInfo, _decode_TimeInfo, _encode_TimeInfo } from "../CSTA-security/TimeInfo.ta.mjs";



/**
 * @summary ThreadData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ThreadData ::= SEQUENCE
 * {     threadSwitchingSubDomainName             IA5String (SIZE(1..64))     OPTIONAL,
 *     threadLinkageID                 ThreadLinkageID,
 *     threadIDTimeStamp                 TimeInfo             OPTIONAL }
 * ```
 * 
 * @class
 */
export
class ThreadData {
    constructor (
        /**
         * @summary `threadSwitchingSubDomainName`.
         * @public
         * @readonly
         */
        readonly threadSwitchingSubDomainName: OPTIONAL<IA5String>,
        /**
         * @summary `threadLinkageID`.
         * @public
         * @readonly
         */
        readonly threadLinkageID: ThreadLinkageID,
        /**
         * @summary `threadIDTimeStamp`.
         * @public
         * @readonly
         */
        readonly threadIDTimeStamp: OPTIONAL<TimeInfo>
    ) {}

    /**
     * @summary Restructures an object into a ThreadData
     * @description
     * 
     * This takes an `object` and converts it to a `ThreadData`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ThreadData`.
     * @returns {ThreadData}
     */
    public static _from_object (_o: { [_K in keyof (ThreadData)]: (ThreadData)[_K] }): ThreadData {
        return new ThreadData(_o.threadSwitchingSubDomainName, _o.threadLinkageID, _o.threadIDTimeStamp);
    }


}

/**
 * @summary The Leading Root Component Types of ThreadData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ThreadData: $.ComponentSpec[] = [
    new $.ComponentSpec("threadSwitchingSubDomainName", true, $.hasTag(_TagClass.universal, 22)),
    new $.ComponentSpec("threadLinkageID", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("threadIDTimeStamp", true, $.hasTag(_TagClass.universal, 24))
];

/**
 * @summary The Trailing Root Component Types of ThreadData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ThreadData: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ThreadData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ThreadData: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ThreadData: $.ASN1Decoder<ThreadData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ThreadData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ThreadData (el: _Element): ThreadData {
    if (!_cached_decoder_for_ThreadData) { _cached_decoder_for_ThreadData = function (el: _Element): ThreadData {
    let threadSwitchingSubDomainName: OPTIONAL<IA5String>;
    let threadLinkageID!: ThreadLinkageID;
    let threadIDTimeStamp: OPTIONAL<TimeInfo>;
    const callbacks: $.DecodingMap = {
        "threadSwitchingSubDomainName": (_el: _Element): void => { threadSwitchingSubDomainName = $._decodeIA5String(_el); },
        "threadLinkageID": (_el: _Element): void => { threadLinkageID = _decode_ThreadLinkageID(_el); },
        "threadIDTimeStamp": (_el: _Element): void => { threadIDTimeStamp = _decode_TimeInfo(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ThreadData,
        _extension_additions_list_spec_for_ThreadData,
        _root_component_type_list_2_spec_for_ThreadData,
        undefined,
    );
    return new ThreadData(
        threadSwitchingSubDomainName,
        threadLinkageID,
        threadIDTimeStamp
    );
}; }
    return _cached_decoder_for_ThreadData(el);
}

let _cached_encoder_for_ThreadData: $.ASN1Encoder<ThreadData> | null = null;

/**
 * @summary Encodes a(n) ThreadData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ThreadData, encoded as an ASN.1 Element.
 */
export
function _encode_ThreadData (value: ThreadData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ThreadData) { _cached_encoder_for_ThreadData = function (value: ThreadData, elGetter: $.ASN1Encoder<ThreadData>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.threadSwitchingSubDomainName === undefined) ? undefined : $._encodeIA5String(value.threadSwitchingSubDomainName, $.BER)),
            /* REQUIRED   */ _encode_ThreadLinkageID(value.threadLinkageID, $.BER),
            /* IF_ABSENT  */ ((value.threadIDTimeStamp === undefined) ? undefined : _encode_TimeInfo(value.threadIDTimeStamp, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ThreadData(value, elGetter);
}


/* eslint-enable */
