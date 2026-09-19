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
import { Values_Item, _decode_Values_Item, _encode_Values_Item } from "../DEV/Values-Item.ta.mjs";
// export { Values_Item, _decode_Values_Item, _encode_Values_Item } from "../DEV/Values-Item.ta.mjs";


/**
 * @summary Values
 * @description
 *
 * Returned (agreed) device-object VTE-parameter values during
 * negotiation. Each member is a VTE-unique device-name plus that
 * device's values. ISO/IEC 9040:1997 §16, §23; ISO/IEC 9041-1:1997
 * §12.5.3.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Values  ::=  SET OF SEQUENCE {
 *     name    PrintableString,
 *     values  ParameterValues
 * }
 * ```
 */
export
type Values = Values_Item[]; // SetOfType

let _cached_decoder_for_Values: $.ASN1Decoder<Values> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Values
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Values (el: _Element): Values {
    if (!_cached_decoder_for_Values) { _cached_decoder_for_Values = $._decodeSetOf<Values_Item>(() => _decode_Values_Item); }
    return _cached_decoder_for_Values(el);
}

let _cached_encoder_for_Values: $.ASN1Encoder<Values> | null = null;

/**
 * @summary Encodes a(n) Values into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Values, encoded as an ASN.1 Element.
 */
export
function _encode_Values (value: Values, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Values) { _cached_encoder_for_Values = $._encodeSetOf<Values_Item>(() => _encode_Values_Item, $.BER); }
    return _cached_encoder_for_Values(value, elGetter);
}


/* eslint-enable */
