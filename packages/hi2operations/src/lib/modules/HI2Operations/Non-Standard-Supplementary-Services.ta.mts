/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Non_Standard_Supplementary_Services_Item, _decode_Non_Standard_Supplementary_Services_Item, _encode_Non_Standard_Supplementary_Services_Item } from "../HI2Operations/Non-Standard-Supplementary-Services-Item.ta.mjs";
// export { Non_Standard_Supplementary_Services_Item, _decode_Non_Standard_Supplementary_Services_Item, _encode_Non_Standard_Supplementary_Services_Item } from "../HI2Operations/Non-Standard-Supplementary-Services-Item.ta.mjs";


/**
 * @summary Non_Standard_Supplementary_Services
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Non-Standard-Supplementary-Services  ::=  SET SIZE (1..20) OF CHOICE
 * {
 *     simpleIndication        [1] SimpleIndication,
 *     sciData                    [2] SciDataMode,
 *     ...
 * }
 * ```
 */
export
type Non_Standard_Supplementary_Services = Non_Standard_Supplementary_Services_Item[]; // SetOfType

let _cached_decoder_for_Non_Standard_Supplementary_Services: $.ASN1Decoder<Non_Standard_Supplementary_Services> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Non_Standard_Supplementary_Services
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Non_Standard_Supplementary_Services (el: _Element): Non_Standard_Supplementary_Services {
    if (!_cached_decoder_for_Non_Standard_Supplementary_Services) { _cached_decoder_for_Non_Standard_Supplementary_Services = $._decodeSetOf<Non_Standard_Supplementary_Services_Item>(() => _decode_Non_Standard_Supplementary_Services_Item); }
    return _cached_decoder_for_Non_Standard_Supplementary_Services(el);
}

let _cached_encoder_for_Non_Standard_Supplementary_Services: $.ASN1Encoder<Non_Standard_Supplementary_Services> | null = null;

/**
 * @summary Encodes a(n) Non_Standard_Supplementary_Services into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Non_Standard_Supplementary_Services, encoded as an ASN.1 Element.
 */
export
function _encode_Non_Standard_Supplementary_Services (value: Non_Standard_Supplementary_Services, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Non_Standard_Supplementary_Services) { _cached_encoder_for_Non_Standard_Supplementary_Services = $._encodeSetOf<Non_Standard_Supplementary_Services_Item>(() => _encode_Non_Standard_Supplementary_Services_Item, $.BER); }
    return _cached_encoder_for_Non_Standard_Supplementary_Services(value, elGetter);
}


/* eslint-enable */
