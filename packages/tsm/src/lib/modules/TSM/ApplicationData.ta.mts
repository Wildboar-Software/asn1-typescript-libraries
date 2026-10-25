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
import { type Opaque, _decode_Opaque, _encode_Opaque } from "../TSM/Opaque.ta.mjs";



/**
 * @summary ApplicationData
 * @description
 *
 * Record-layer application payload (`Opaque`). After the handshake,
 * biometric transportation data for the negotiated model is carried
 * here (clause 11; transfer encodings in Appendices I–II). ITU-T Rec.
 * X.1084 (05/2008) §10, §10.3.1, Annex A.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ApplicationData  ::=     Opaque
 * ```
 */
export
type ApplicationData = Opaque; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) ApplicationData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_ApplicationData: $.ASN1Decoder<ApplicationData> = _decode_Opaque;

/**
 * @summary Encodes a(n) ApplicationData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ApplicationData, encoded as an ASN.1 Element.
 */
export const _encode_ApplicationData: $.ASN1Encoder<ApplicationData> = _encode_Opaque;


/* eslint-enable */
