/* eslint-disable */
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    EscalationList_Item,
    _decode_EscalationList_Item,
    _encode_EscalationList_Item,
} from "../X790ASN1Module/EscalationList-Item.ta.mjs";



/**
 * @summary EscalationList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EscalationList  ::= 
 *   SET OF
 *     SEQUENCE {state          RequestState,
 *               escTime        EscalationTime,
 *               -- supplied by agent
 *               requestPerson  [0]  PersonReach,
 *               level          [1]  OrgLevel OPTIONAL,
 *               escPerson      [2]  PersonReach OPTIONAL,
 *               ...}
 * ```
 */
export
type EscalationList = EscalationList_Item[]; // SetOfType

let _cached_decoder_for_EscalationList: $.ASN1Decoder<EscalationList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EscalationList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EscalationList (el: _Element): EscalationList {
    if (!_cached_decoder_for_EscalationList) { _cached_decoder_for_EscalationList = $._decodeSetOf<EscalationList_Item>(() => _decode_EscalationList_Item); }
    return _cached_decoder_for_EscalationList(el);
}

let _cached_encoder_for_EscalationList: $.ASN1Encoder<EscalationList> | null = null;

/**
 * @summary Encodes a(n) EscalationList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EscalationList, encoded as an ASN.1 Element.
 */
export
function _encode_EscalationList (value: EscalationList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EscalationList) { _cached_encoder_for_EscalationList = $._encodeSetOf<EscalationList_Item>(() => _encode_EscalationList_Item, $.BER); }
    return _cached_encoder_for_EscalationList(value, elGetter);
}


/* eslint-enable */
