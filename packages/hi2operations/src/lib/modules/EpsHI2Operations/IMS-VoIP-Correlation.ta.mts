/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IMS_VoIP_Correlation_Item, _decode_IMS_VoIP_Correlation_Item, _encode_IMS_VoIP_Correlation_Item } from "../EpsHI2Operations/IMS-VoIP-Correlation-Item.ta.mjs";
// export { IMS_VoIP_Correlation_Item, _decode_IMS_VoIP_Correlation_Item, _encode_IMS_VoIP_Correlation_Item } from "../EpsHI2Operations/IMS-VoIP-Correlation-Item.ta.mjs";


/**
 * @summary IMS_VoIP_Correlation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IMS-VoIP-Correlation  ::=  SET OF SEQUENCE {
 *  ims-iri [0] IRI-to-IRI-Correlation,
 *  ims-cc [1] IRI-to-CC-Correlation OPTIONAL
 * }
 * ```
 */
export
type IMS_VoIP_Correlation = IMS_VoIP_Correlation_Item[]; // SetOfType

let _cached_decoder_for_IMS_VoIP_Correlation: $.ASN1Decoder<IMS_VoIP_Correlation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IMS_VoIP_Correlation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IMS_VoIP_Correlation (el: _Element): IMS_VoIP_Correlation {
    if (!_cached_decoder_for_IMS_VoIP_Correlation) { _cached_decoder_for_IMS_VoIP_Correlation = $._decodeSetOf<IMS_VoIP_Correlation_Item>(() => _decode_IMS_VoIP_Correlation_Item); }
    return _cached_decoder_for_IMS_VoIP_Correlation(el);
}

let _cached_encoder_for_IMS_VoIP_Correlation: $.ASN1Encoder<IMS_VoIP_Correlation> | null = null;

/**
 * @summary Encodes a(n) IMS_VoIP_Correlation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IMS_VoIP_Correlation, encoded as an ASN.1 Element.
 */
export
function _encode_IMS_VoIP_Correlation (value: IMS_VoIP_Correlation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IMS_VoIP_Correlation) { _cached_encoder_for_IMS_VoIP_Correlation = $._encodeSetOf<IMS_VoIP_Correlation_Item>(() => _encode_IMS_VoIP_Correlation_Item, $.BER); }
    return _cached_encoder_for_IMS_VoIP_Correlation(value, elGetter);
}


/* eslint-enable */
