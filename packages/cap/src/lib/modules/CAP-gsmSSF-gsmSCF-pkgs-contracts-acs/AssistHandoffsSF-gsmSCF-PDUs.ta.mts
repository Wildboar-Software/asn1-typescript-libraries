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
import { TCMessage, _decode_TCMessage, _encode_TCMessage } from "../TCAPMessages/TCMessage.ta.mjs";



/**
 * @summary AssistHandoffsSF_gsmSCF_PDUs
 * @description
 * 
 * `TCMessage` for the assist-handoff gsmSSF-to-gsmSCF CS dialogue. Invokable
 * and returnable sets are `AssistHandoffssfToScfInvokable` and
 * `AssistHandoffssfToScfReturnable`. Bound set `cAPSpecificBoundSet`. Rel-6
 * uses version8(7) operation definitions. Used by
 * `assistHandoff-gsmSSF-scfAbstractSyntax`.
 * (3GPP TS 29.078 V19.0.0 clause 6.1.2).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AssistHandoffsSF-gsmSCF-PDUs  ::=  TCMessage {{AssistHandoffssfToScfInvokable}, 
 *                         {AssistHandoffssfToScfReturnable}}
 * ```
 */
export
type AssistHandoffsSF_gsmSCF_PDUs = TCMessage; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) AssistHandoffsSF_gsmSCF_PDUs
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_AssistHandoffsSF_gsmSCF_PDUs: $.ASN1Decoder<AssistHandoffsSF_gsmSCF_PDUs> = _decode_TCMessage;

/**
 * @summary Encodes a(n) AssistHandoffsSF_gsmSCF_PDUs into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AssistHandoffsSF_gsmSCF_PDUs, encoded as an ASN.1 Element.
 */
export const _encode_AssistHandoffsSF_gsmSCF_PDUs: $.ASN1Encoder<AssistHandoffsSF_gsmSCF_PDUs> = _encode_TCMessage;


/* eslint-enable */
