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
import { TCMessage, _decode_TCMessage, _encode_TCMessage } from "../TCAPMessages/TCMessage.ta.mjs";



/**
 * @summary GenericSCF_gsmSSF_PDUs
 * @description
 * 
 * `TCMessage` for the gsmSCF-to-gsmSSF generic CS dialogue. Invokable and
 * returnable sets are `ScfToSsfGenericInvokable` and
 * `ScfToSsfGenericReturnable`. Bound set `cAPSpecificBoundSet`. Rel-6 uses
 * version8(7) operation definitions. Used by `scf-gsmSSFGenericAbstractSyntax`.
 * (3GPP TS 29.078 V19.0.0 clause 6.1.2).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GenericSCF-gsmSSF-PDUs  ::=  TCMessage {{ScfToSsfGenericInvokable},
 *                      {ScfToSsfGenericReturnable}}
 * ```
 */
export
type GenericSCF_gsmSSF_PDUs = TCMessage; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) GenericSCF_gsmSSF_PDUs
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_GenericSCF_gsmSSF_PDUs: $.ASN1Decoder<GenericSCF_gsmSSF_PDUs> = _decode_TCMessage;

/**
 * @summary Encodes a(n) GenericSCF_gsmSSF_PDUs into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GenericSCF_gsmSSF_PDUs, encoded as an ASN.1 Element.
 */
export const _encode_GenericSCF_gsmSSF_PDUs: $.ASN1Encoder<GenericSCF_gsmSSF_PDUs> = _encode_TCMessage;


/* eslint-enable */
