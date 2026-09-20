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
import { AssignmentIdent, _decode_AssignmentIdent, _encode_AssignmentIdent } from "../CDS/AssignmentIdent.ta.mjs";


/**
 * @summary CompoundEmphasisIdent
 * @description
 *
 * Invite flags for the DO-emphasis assignment list. ISO/IEC
 * 9040:1997 §18.2.6; ISO/IEC 9041-1:1997 §12.3.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CompoundEmphasisIdent  ::=  SEQUENCE OF AssignmentIdent
 * ```
 */
export
type CompoundEmphasisIdent = AssignmentIdent[]; // SequenceOfType

let _cached_decoder_for_CompoundEmphasisIdent: $.ASN1Decoder<CompoundEmphasisIdent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CompoundEmphasisIdent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CompoundEmphasisIdent (el: _Element): CompoundEmphasisIdent {
    if (!_cached_decoder_for_CompoundEmphasisIdent) { _cached_decoder_for_CompoundEmphasisIdent = $._decodeSequenceOf<AssignmentIdent>(() => _decode_AssignmentIdent); }
    return _cached_decoder_for_CompoundEmphasisIdent(el);
}

let _cached_encoder_for_CompoundEmphasisIdent: $.ASN1Encoder<CompoundEmphasisIdent> | null = null;

/**
 * @summary Encodes a(n) CompoundEmphasisIdent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CompoundEmphasisIdent, encoded as an ASN.1 Element.
 */
export
function _encode_CompoundEmphasisIdent (value: CompoundEmphasisIdent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CompoundEmphasisIdent) { _cached_encoder_for_CompoundEmphasisIdent = $._encodeSequenceOf<AssignmentIdent>(() => _encode_AssignmentIdent, $.BER); }
    return _cached_encoder_for_CompoundEmphasisIdent(value, elGetter);
}


/* eslint-enable */
