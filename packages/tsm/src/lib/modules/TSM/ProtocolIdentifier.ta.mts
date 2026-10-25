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
import { type UINT8, _decode_UINT8, _encode_UINT8 } from "../TSM/UINT8.ta.mjs";



/**
 * @summary ProtocolIdentifier
 * @description
 *
 * `UINT8` that distinguishes TSM records from other record-layer
 * protocols. Annex A does not assign a numeric value. ITU-T Rec.
 * X.1084 (05/2008) §10.3.1, Annex A.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProtocolIdentifier     ::=     UINT8
 * ```
 */
export
type ProtocolIdentifier = UINT8; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) ProtocolIdentifier
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_ProtocolIdentifier: $.ASN1Decoder<ProtocolIdentifier> = _decode_UINT8;

/**
 * @summary Encodes a(n) ProtocolIdentifier into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProtocolIdentifier, encoded as an ASN.1 Element.
 */
export const _encode_ProtocolIdentifier: $.ASN1Encoder<ProtocolIdentifier> = _encode_UINT8;


/* eslint-enable */
