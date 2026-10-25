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
 * @summary ClientKeyExchange
 * @description
 *
 * TLS ClientKeyExchange as opaque `SIZE(0..65535)` (RSA premaster or
 * DH public). Structured `PreMasterSecret` /
 * `ClientDiffieHellmanPublic` are defined separately. ITU-T Rec.
 * X.1084 (05/2008) Annex A.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ClientKeyExchange     ::=     Opaque(SIZE(0..65535))
 * ```
 */
export
type ClientKeyExchange = Opaque; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) ClientKeyExchange
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_ClientKeyExchange: $.ASN1Decoder<ClientKeyExchange> = _decode_Opaque;

/**
 * @summary Encodes a(n) ClientKeyExchange into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ClientKeyExchange, encoded as an ASN.1 Element.
 */
export const _encode_ClientKeyExchange: $.ASN1Encoder<ClientKeyExchange> = _encode_Opaque;


/* eslint-enable */
