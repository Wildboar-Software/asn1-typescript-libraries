/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MessageInfo, _decode_MessageInfo, _encode_MessageInfo } from "../SS-MCM-Operations-asn1-97/MessageInfo.ta.mjs";

/**
 * @summary AllMsgInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AllMsgInfo ::= SEQUENCE {
 *     newMsgInfo MessageInfo,
 *     retrievedMsgInfo MessageInfo
 * }
 * ```
 * 
 * @class
 */
export
class AllMsgInfo {
    /**
     * @summary `newMsgInfo`.
     * @public
     * @readonly
     */
    readonly newMsgInfo: MessageInfo;
    /**
     * @summary `retrievedMsgInfo`.
     * @public
     * @readonly
     */
    readonly retrievedMsgInfo: MessageInfo;

    constructor (
        newMsgInfo: MessageInfo,
        retrievedMsgInfo: MessageInfo
    ) {
        this.newMsgInfo = newMsgInfo;
        this.retrievedMsgInfo = retrievedMsgInfo;
    }

    /**
     * @summary Restructures an object into a AllMsgInfo
     * @description
     * 
     * This takes an `object` and converts it to a `AllMsgInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AllMsgInfo`.
     * @returns {AllMsgInfo}
     */
    public static _from_object (_o: { [_K in keyof (AllMsgInfo)]: (AllMsgInfo)[_K] }): AllMsgInfo {
        return new AllMsgInfo(_o.newMsgInfo, _o.retrievedMsgInfo);
    }

}

/**
 * @summary The Leading Root Component Types of AllMsgInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AllMsgInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("newMsgInfo", false, $.hasAnyTag),
    new $.ComponentSpec("retrievedMsgInfo", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of AllMsgInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AllMsgInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AllMsgInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AllMsgInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AllMsgInfo: $.ASN1Decoder<AllMsgInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AllMsgInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AllMsgInfo (el: _Element): AllMsgInfo {
    if (!_cached_decoder_for_AllMsgInfo) { _cached_decoder_for_AllMsgInfo = function (el: _Element): AllMsgInfo {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("AllMsgInfo contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "newMsgInfo";
    sequence[1].name = "retrievedMsgInfo";
    const newMsgInfo: MessageInfo = _decode_MessageInfo(sequence[0]);
    const retrievedMsgInfo: MessageInfo = _decode_MessageInfo(sequence[1]);
    return new AllMsgInfo(
        newMsgInfo,
        retrievedMsgInfo,

    );
}; }
    return _cached_decoder_for_AllMsgInfo(el);
}

let _cached_encoder_for_AllMsgInfo: $.ASN1Encoder<AllMsgInfo> | null = null;

/**
 * @summary Encodes a(n) AllMsgInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AllMsgInfo, encoded as an ASN.1 Element.
 */
export
function _encode_AllMsgInfo (value: AllMsgInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AllMsgInfo) { _cached_encoder_for_AllMsgInfo = function (value: AllMsgInfo, _elGetter: $.ASN1Encoder<AllMsgInfo>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_MessageInfo(value.newMsgInfo, $.BER),
        /* REQUIRED   */ _encode_MessageInfo(value.retrievedMsgInfo, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_AllMsgInfo(value, elGetter);
}

/* eslint-enable */
