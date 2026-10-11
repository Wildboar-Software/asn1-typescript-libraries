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

let _cached_decoder_for_DfrReferenceContent: $.ASN1Decoder<DfrReferenceContent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DfrReferenceContent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DfrReferenceContent (el: _Element): DfrReferenceContent {
    if (!_cached_decoder_for_DfrReferenceContent) { _cached_decoder_for_DfrReferenceContent = _decode_DOR; }
    return _cached_decoder_for_DfrReferenceContent(el);
}

let _cached_encoder_for_DfrReferenceContent: $.ASN1Encoder<DfrReferenceContent> | null = null;

/**
 * @summary Encodes a(n) DfrReferenceContent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DfrReferenceContent, encoded as an ASN.1 Element.
 */
export
function _encode_DfrReferenceContent (value: DfrReferenceContent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DfrReferenceContent) { _cached_encoder_for_DfrReferenceContent = _encode_DOR; }
    return _cached_encoder_for_DfrReferenceContent(value, elGetter);
}


/* eslint-enable */
