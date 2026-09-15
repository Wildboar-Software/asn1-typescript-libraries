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
import { Integer4, _decode_Integer4, _encode_Integer4 } from "../Core-INAP-CS1-DataTypes/Integer4.ta.mjs";
// export { Integer4, _decode_Integer4, _encode_Integer4 } from "../Core-INAP-CS1-DataTypes/Integer4.ta.mjs";


/**
 * @summary ServiceKey
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceKey      ::=  Integer4
 * ```
 */
export
type ServiceKey = Integer4; // DefinedType

let _cached_decoder_for_ServiceKey: $.ASN1Decoder<ServiceKey> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ServiceKey
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ServiceKey (el: _Element): ServiceKey {
    if (!_cached_decoder_for_ServiceKey) { _cached_decoder_for_ServiceKey = _decode_Integer4; }
    return _cached_decoder_for_ServiceKey(el);
}

let _cached_encoder_for_ServiceKey: $.ASN1Encoder<ServiceKey> | null = null;

/**
 * @summary Encodes a(n) ServiceKey into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServiceKey, encoded as an ASN.1 Element.
 */
export
function _encode_ServiceKey (value: ServiceKey, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ServiceKey) { _cached_encoder_for_ServiceKey = _encode_Integer4; }
    return _cached_encoder_for_ServiceKey(value, elGetter);
}


/* eslint-enable */
