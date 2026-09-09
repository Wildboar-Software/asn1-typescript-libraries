/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1ConstructionError as _ConstructionError
} from "@wildboar/asn1";
import { CallLinkageData, _decode_CallLinkageData, _encode_CallLinkageData } from "../CSTA-call-control/CallLinkageData.ta.mjs";



/**
 * @summary CallLinkageDataList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallLinkageDataList ::= SEQUENCE
 * {     newCallLinkageData                 CallLinkageData,
 *     oldCallLinkageData                 CallLinkageData }
 * ```
 * 
 * @class
 */
export
class CallLinkageDataList {
    constructor (
        /**
         * @summary `newCallLinkageData`.
         * @public
         * @readonly
         */
        readonly newCallLinkageData: CallLinkageData,
        /**
         * @summary `oldCallLinkageData`.
         * @public
         * @readonly
         */
        readonly oldCallLinkageData: CallLinkageData
    ) {}

    /**
     * @summary Restructures an object into a CallLinkageDataList
     * @description
     * 
     * This takes an `object` and converts it to a `CallLinkageDataList`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CallLinkageDataList`.
     * @returns {CallLinkageDataList}
     */
    public static _from_object (_o: { [_K in keyof (CallLinkageDataList)]: (CallLinkageDataList)[_K] }): CallLinkageDataList {
        return new CallLinkageDataList(_o.newCallLinkageData, _o.oldCallLinkageData);
    }


}

/**
 * @summary The Leading Root Component Types of CallLinkageDataList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CallLinkageDataList: $.ComponentSpec[] = [
    new $.ComponentSpec("newCallLinkageData", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("oldCallLinkageData", false, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of CallLinkageDataList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CallLinkageDataList: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CallLinkageDataList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CallLinkageDataList: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CallLinkageDataList: $.ASN1Decoder<CallLinkageDataList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CallLinkageDataList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CallLinkageDataList (el: _Element): CallLinkageDataList {
    if (!_cached_decoder_for_CallLinkageDataList) { _cached_decoder_for_CallLinkageDataList = function (el: _Element): CallLinkageDataList {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("CallLinkageDataList contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "newCallLinkageData";
    sequence[1].name = "oldCallLinkageData";
    let newCallLinkageData!: CallLinkageData;
    let oldCallLinkageData!: CallLinkageData;
    newCallLinkageData = _decode_CallLinkageData(sequence[0]);
    oldCallLinkageData = _decode_CallLinkageData(sequence[1]);
    return new CallLinkageDataList(
        newCallLinkageData,
        oldCallLinkageData,

    );
}; }
    return _cached_decoder_for_CallLinkageDataList(el);
}

let _cached_encoder_for_CallLinkageDataList: $.ASN1Encoder<CallLinkageDataList> | null = null;

/**
 * @summary Encodes a(n) CallLinkageDataList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallLinkageDataList, encoded as an ASN.1 Element.
 */
export
function _encode_CallLinkageDataList (value: CallLinkageDataList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CallLinkageDataList) { _cached_encoder_for_CallLinkageDataList = function (value: CallLinkageDataList, elGetter: $.ASN1Encoder<CallLinkageDataList>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_CallLinkageData(value.newCallLinkageData, $.BER),
            /* REQUIRED   */ _encode_CallLinkageData(value.oldCallLinkageData, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CallLinkageDataList(value, elGetter);
}


/* eslint-enable */
