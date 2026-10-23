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
import { type Cause, _decode_Cause, _encode_Cause } from "../CAP-datatypes/Cause.ta.mjs";



/**
 * @summary AllCallSegments
 * @description
 * 
 * Cause for releasing all call segments. gsmSSF may use it for tones to the
 * parties or the cause in the release message. Default decimal 31 (normal
 * unspecified). (3GPP TS 29.078 V19.0.0 clause 11.26.1.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AllCallSegments  ::=  Cause {bound}
 * ```
 */
export
type AllCallSegments = Cause; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) AllCallSegments
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_AllCallSegments: $.ASN1Decoder<AllCallSegments> = _decode_Cause;

/**
 * @summary Encodes a(n) AllCallSegments into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AllCallSegments, encoded as an ASN.1 Element.
 */
export const _encode_AllCallSegments: (value: AllCallSegments, elGetter: $.ASN1Encoder<any>) => _Element = _encode_Cause;


/* eslint-enable */
