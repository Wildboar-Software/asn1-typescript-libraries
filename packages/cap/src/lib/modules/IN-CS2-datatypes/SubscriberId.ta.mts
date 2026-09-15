/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { GenericNumber, _decode_GenericNumber, _encode_GenericNumber } from "../IN-CS2-datatypes/GenericNumber.ta.mjs";
// export { GenericNumber, _decode_GenericNumber, _encode_GenericNumber } from "../IN-CS2-datatypes/GenericNumber.ta.mjs";


/**
 * @summary SubscriberId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SubscriberId{PARAMETERS-BOUND:bound}  ::= 
 *   GenericNumber{bound}
 * ```
 */
export
type SubscriberId = GenericNumber; // DefinedType

let _cached_decoder_for_SubscriberId: $.ASN1Decoder<SubscriberId> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SubscriberId
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SubscriberId (el: _Element): SubscriberId {
    if (!_cached_decoder_for_SubscriberId) { _cached_decoder_for_SubscriberId = _decode_GenericNumber; }
    return _cached_decoder_for_SubscriberId(el);
}

let _cached_encoder_for_SubscriberId: $.ASN1Encoder<SubscriberId> | null = null;

/**
 * @summary Encodes a(n) SubscriberId into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubscriberId, encoded as an ASN.1 Element.
 */
export
function _encode_SubscriberId (value: SubscriberId, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SubscriberId) { _cached_encoder_for_SubscriberId = _encode_GenericNumber; }
    return _cached_encoder_for_SubscriberId(value, elGetter);
}


/* eslint-enable */
