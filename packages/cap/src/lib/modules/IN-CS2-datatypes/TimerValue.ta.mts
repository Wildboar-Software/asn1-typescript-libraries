/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Integer4, _decode_Integer4, _encode_Integer4 } from "../IN-CS2-datatypes/Integer4.ta.mjs";


/**
 * @summary TimerValue
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TimerValue  ::=  Integer4
 * ```
 */
export
type TimerValue = Integer4; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) TimerValue
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_TimerValue: $.ASN1Decoder<TimerValue> = _decode_Integer4;

/**
 * @summary Encodes a(n) TimerValue into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TimerValue, encoded as an ASN.1 Element.
 */
export const _encode_TimerValue: $.ASN1Encoder<TimerValue> = _encode_Integer4;


/* eslint-enable */
