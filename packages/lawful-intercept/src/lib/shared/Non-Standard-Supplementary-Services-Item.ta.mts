/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type SimpleIndication, _decode_SimpleIndication, _encode_SimpleIndication } from "./SimpleIndication.ta.mjs";
// export { SimpleIndication, _enum_for_SimpleIndication, SimpleIndication_call_Waiting_Indication /* IMPORTED_LONG_ENUMERATION_ITEM */, call_Waiting_Indication /* IMPORTED_SHORT_ENUMERATION_ITEM */, SimpleIndication_add_conf_Indication /* IMPORTED_LONG_ENUMERATION_ITEM */, add_conf_Indication /* IMPORTED_SHORT_ENUMERATION_ITEM */, SimpleIndication_call_on_hold_Indication /* IMPORTED_LONG_ENUMERATION_ITEM */, call_on_hold_Indication /* IMPORTED_SHORT_ENUMERATION_ITEM */, SimpleIndication_retrieve_Indication /* IMPORTED_LONG_ENUMERATION_ITEM */, retrieve_Indication /* IMPORTED_SHORT_ENUMERATION_ITEM */, SimpleIndication_suspend_Indication /* IMPORTED_LONG_ENUMERATION_ITEM */, suspend_Indication /* IMPORTED_SHORT_ENUMERATION_ITEM */, SimpleIndication_resume_Indication /* IMPORTED_LONG_ENUMERATION_ITEM */, resume_Indication /* IMPORTED_SHORT_ENUMERATION_ITEM */, SimpleIndication_answer_Indication /* IMPORTED_LONG_ENUMERATION_ITEM */, answer_Indication /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_SimpleIndication, _encode_SimpleIndication } from "./SimpleIndication.ta.mjs";
import { type SciDataMode, _decode_SciDataMode, _encode_SciDataMode } from "./SciDataMode.ta.mjs";
// export { SciDataMode, _decode_SciDataMode, _encode_SciDataMode } from "./SciDataMode.ta.mjs";


/**
 * @summary Non_Standard_Supplementary_Services_Item
 * @description
 *
 * One non-standard supplementary-service item: a call-event indication, or
 * subscriber-controlled-input octets. The call-event values are defined by
 * their module comments (table A.3.3). Subscriber-controlled input is
 * specified in clause A.5.5; that clause does not define the octet layout.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), table A.3.3, clause A.5.5, annex D,
 * clause D.5.
 *
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * Deduplicated from the `HI2Operations` and `TETRA-HI2Operations`
 * modules, which assign this type identically.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Non-Standard-Supplementary-Services-Item ::= CHOICE {
 *     simpleIndication        [1] SimpleIndication,
 *     sciData                    [2] SciDataMode,
 *     ...
 * }
 * ```
 */
export
type Non_Standard_Supplementary_Services_Item =
    { simpleIndication: SimpleIndication } /* CHOICE_ALT_ROOT */
    | { sciData: SciDataMode } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_Non_Standard_Supplementary_Services_Item: $.ASN1Decoder<Non_Standard_Supplementary_Services_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Non_Standard_Supplementary_Services_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Non_Standard_Supplementary_Services_Item (el: _Element): Non_Standard_Supplementary_Services_Item {
    if (!_cached_decoder_for_Non_Standard_Supplementary_Services_Item) { _cached_decoder_for_Non_Standard_Supplementary_Services_Item = $._decode_extensible_choice<Non_Standard_Supplementary_Services_Item>({
    "CONTEXT 1": [ "simpleIndication", $._decode_implicit<SimpleIndication>(() => _decode_SimpleIndication) ],
    "CONTEXT 2": [ "sciData", $._decode_implicit<SciDataMode>(() => _decode_SciDataMode) ]
}); }
    return _cached_decoder_for_Non_Standard_Supplementary_Services_Item(el);
}

let _cached_encoder_for_Non_Standard_Supplementary_Services_Item: $.ASN1Encoder<Non_Standard_Supplementary_Services_Item> | null = null;

/**
 * @summary Encodes a(n) Non_Standard_Supplementary_Services_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Non_Standard_Supplementary_Services_Item, encoded as an ASN.1 Element.
 */
export
function _encode_Non_Standard_Supplementary_Services_Item (value: Non_Standard_Supplementary_Services_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Non_Standard_Supplementary_Services_Item) { _cached_encoder_for_Non_Standard_Supplementary_Services_Item = $._encode_choice<Non_Standard_Supplementary_Services_Item>({
    "simpleIndication": $._encode_implicit(_TagClass.context, 1, () => _encode_SimpleIndication, $.BER),
    "sciData": $._encode_implicit(_TagClass.context, 2, () => _encode_SciDataMode, $.BER),
}, $.BER); }
    return _cached_encoder_for_Non_Standard_Supplementary_Services_Item(value, elGetter);
}


/* eslint-enable */
