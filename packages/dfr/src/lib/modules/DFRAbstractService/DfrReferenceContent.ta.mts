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
import { DOR, _decode_DOR, _encode_DOR } from "../DOR-definition/DOR.ta.mjs";


/**
 * @summary DfrReferenceContent
 * @description
 *
 * DOR identifying the referent. `token` is absent. `data-object-type` is a
 * `DfrObjectClassID` (document, root-group, proper-group, or
 * search-result-list — not a reference). Component semantics are ISO/IEC
 * 10031-2; DFR usage is ISO/IEC 10166-1:1991 §6.3.3.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DfrReferenceContent  ::=  DOR
 * ```
 */
export
type DfrReferenceContent = DOR; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) DfrReferenceContent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_DfrReferenceContent: $.ASN1Decoder<DfrReferenceContent> = _decode_DOR;

/**
 * @summary Encodes a(n) DfrReferenceContent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DfrReferenceContent, encoded as an ASN.1 Element.
 */
export const _encode_DfrReferenceContent: $.ASN1Encoder<DfrReferenceContent> = _encode_DOR;


/* eslint-enable */
