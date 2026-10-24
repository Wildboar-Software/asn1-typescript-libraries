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
import { type CharacterData, _decode_CharacterData, _encode_CharacterData } from "../DFRAbstractService/CharacterData.ta.mjs";


/**
 * @summary DfrTitle
 * @description
 *
 * User-specified name of a DFR-Object (`dfr-title`). Path names are sequences
 * of titles. Compared with caseIgnoreStringSyntax. ISO/IEC 10166-1:1991
 * §8.1.4, §9.2.4.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DfrTitle  ::=  CharacterData
 * ```
 */
export
type DfrTitle = CharacterData; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) DfrTitle
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_DfrTitle: $.ASN1Decoder<DfrTitle> = _decode_CharacterData;

/**
 * @summary Encodes a(n) DfrTitle into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DfrTitle, encoded as an ASN.1 Element.
 */
export const _encode_DfrTitle: $.ASN1Encoder<DfrTitle> = _encode_CharacterData;


/* eslint-enable */
