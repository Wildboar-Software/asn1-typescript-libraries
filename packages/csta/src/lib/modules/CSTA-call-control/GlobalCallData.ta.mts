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
import { GlobalCallLinkageID, _decode_GlobalCallLinkageID, _encode_GlobalCallLinkageID } from "../CSTA-call-control/GlobalCallLinkageID.ta.mjs";

import { TimeInfo, _decode_TimeInfo, _encode_TimeInfo } from "../CSTA-security/TimeInfo.ta.mjs";



/**
 * @summary GlobalCallData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GlobalCallData ::= SEQUENCE 
 * {    globalCallSwitchingSubDomainName        IA5String (SIZE(1..64))        OPTIONAL, 
 *     globalCallLinkageID                GlobalCallLinkageID, 
 *     callLinkageIDTimestamp                TimeInfo            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class GlobalCallData {
    constructor (
        /**
         * @summary `globalCallSwitchingSubDomainName`.
         * @public
         * @readonly
         */
        readonly globalCallSwitchingSubDomainName: OPTIONAL<IA5String>,
        /**
         * @summary `globalCallLinkageID`.
         * @public
         * @readonly
         */
        readonly globalCallLinkageID: GlobalCallLinkageID,
        /**
         * @summary `callLinkageIDTimestamp`.
         * @public
         * @readonly
         */
        readonly callLinkageIDTimestamp: OPTIONAL<TimeInfo>
    ) {}

    /**
     * @summary Restructures an object into a GlobalCallData
     * @description
     * 
     * This takes an `object` and converts it to a `GlobalCallData`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GlobalCallData`.
     * @returns {GlobalCallData}
     */
    public static _from_object (_o: { [_K in keyof (GlobalCallData)]: (GlobalCallData)[_K] }): GlobalCallData {
        return new GlobalCallData(_o.globalCallSwitchingSubDomainName, _o.globalCallLinkageID, _o.callLinkageIDTimestamp);
    }


}

/**
 * @summary The Leading Root Component Types of GlobalCallData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GlobalCallData: $.ComponentSpec[] = [
    new $.ComponentSpec("globalCallSwitchingSubDomainName", true, $.hasTag(_TagClass.universal, 22)),
    new $.ComponentSpec("globalCallLinkageID", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("callLinkageIDTimestamp", true, $.hasTag(_TagClass.universal, 24))
];

/**
 * @summary The Trailing Root Component Types of GlobalCallData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GlobalCallData: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GlobalCallData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GlobalCallData: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GlobalCallData: $.ASN1Decoder<GlobalCallData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GlobalCallData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GlobalCallData (el: _Element): GlobalCallData {
    if (!_cached_decoder_for_GlobalCallData) { _cached_decoder_for_GlobalCallData = function (el: _Element): GlobalCallData {
    let globalCallSwitchingSubDomainName: OPTIONAL<IA5String>;
    let globalCallLinkageID!: GlobalCallLinkageID;
    let callLinkageIDTimestamp: OPTIONAL<TimeInfo>;
    const callbacks: $.DecodingMap = {
        "globalCallSwitchingSubDomainName": (_el: _Element): void => { globalCallSwitchingSubDomainName = $._decodeIA5String(_el); },
        "globalCallLinkageID": (_el: _Element): void => { globalCallLinkageID = _decode_GlobalCallLinkageID(_el); },
        "callLinkageIDTimestamp": (_el: _Element): void => { callLinkageIDTimestamp = _decode_TimeInfo(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GlobalCallData,
        _extension_additions_list_spec_for_GlobalCallData,
        _root_component_type_list_2_spec_for_GlobalCallData,
        undefined,
    );
    return new GlobalCallData(
        globalCallSwitchingSubDomainName,
        globalCallLinkageID,
        callLinkageIDTimestamp
    );
}; }
    return _cached_decoder_for_GlobalCallData(el);
}

let _cached_encoder_for_GlobalCallData: $.ASN1Encoder<GlobalCallData> | null = null;

/**
 * @summary Encodes a(n) GlobalCallData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GlobalCallData, encoded as an ASN.1 Element.
 */
export
function _encode_GlobalCallData (value: GlobalCallData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GlobalCallData) { _cached_encoder_for_GlobalCallData = function (value: GlobalCallData, elGetter: $.ASN1Encoder<GlobalCallData>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.globalCallSwitchingSubDomainName === undefined) ? undefined : $._encodeIA5String(value.globalCallSwitchingSubDomainName, $.BER)),
            /* REQUIRED   */ _encode_GlobalCallLinkageID(value.globalCallLinkageID, $.BER),
            /* IF_ABSENT  */ ((value.callLinkageIDTimestamp === undefined) ? undefined : _encode_TimeInfo(value.callLinkageIDTimestamp, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GlobalCallData(value, elGetter);
}


/* eslint-enable */
