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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { Attribute, _decode_Attribute, _encode_Attribute } from "@wildboar/cmip/src/lib/modules/CMIP-1/Attribute.ta.mjs";
/**
 * @summary MonitoredAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MonitoredAttributes  ::=  SET OF Attribute
 * ```
 */
export
type MonitoredAttributes = Attribute[]; // SetOfType

let _cached_decoder_for_MonitoredAttributes: $.ASN1Decoder<MonitoredAttributes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MonitoredAttributes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MonitoredAttributes} The decoded data structure.
 */
export
function _decode_MonitoredAttributes (el: _Element) {
    if (!_cached_decoder_for_MonitoredAttributes) { _cached_decoder_for_MonitoredAttributes = $._decodeSetOf<Attribute>(() => _decode_Attribute); }
    return _cached_decoder_for_MonitoredAttributes(el);
}

let _cached_encoder_for_MonitoredAttributes: $.ASN1Encoder<MonitoredAttributes> | null = null;

/**
 * @summary Encodes a(n) MonitoredAttributes into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MonitoredAttributes, encoded as an ASN.1 Element.
 */
export
function _encode_MonitoredAttributes (value: MonitoredAttributes, elGetter: $.ASN1Encoder<MonitoredAttributes>) {
    if (!_cached_encoder_for_MonitoredAttributes) { _cached_encoder_for_MonitoredAttributes = $._encodeSetOf<Attribute>(() => _encode_Attribute, $.BER); }
    return _cached_encoder_for_MonitoredAttributes(value, elGetter);
}


/* eslint-enable */
