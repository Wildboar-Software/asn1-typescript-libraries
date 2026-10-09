/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TaggedElement, _decode_TaggedElement, _encode_TaggedElement } from "../RecordSyntax-generic/TaggedElement.ta.mjs";


/**
 * @summary GenericRecord
 * @description
 * 
 * GRS-1 retrieval record (ANSI/NISO Z39.50-2003, REC.3, RET.3.2, ASN1.6). The
 * server forms it by applying this record syntax to the abstract database
 * record left after the schema and the element specification.
 * 
 * Select it with record-syntax OID `{Z39-50-recordSyntax grs-1(105)}`
 * (`1.2.840.10003.5.105`), as the preferred record syntax or as the syntax
 * inside `compSpec` (§3.6.3). A Search, or a Present that omits `compSpec`,
 * uses the default schema and an element set name (§3.6.2). `compSpec` is
 * defined only for version 3.
 * 
 * One top-level element is the root of a single tree. Several top-level
 * elements mean the abstract record has no single root: a sequence of trees,
 * which may be a flat list (RET.3.2.1).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GenericRecord  ::=  SEQUENCE OF TaggedElement
 * ```
 */
export
type GenericRecord = TaggedElement[]; // SequenceOfType

let _cached_decoder_for_GenericRecord: $.ASN1Decoder<GenericRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GenericRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GenericRecord (el: _Element): GenericRecord {
    if (!_cached_decoder_for_GenericRecord) { _cached_decoder_for_GenericRecord = $._decodeSequenceOf<TaggedElement>(() => _decode_TaggedElement); }
    return _cached_decoder_for_GenericRecord(el);
}

let _cached_encoder_for_GenericRecord: $.ASN1Encoder<GenericRecord> | null = null;

/**
 * @summary Encodes a(n) GenericRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GenericRecord, encoded as an ASN.1 Element.
 */
export
function _encode_GenericRecord (value: GenericRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GenericRecord) { _cached_encoder_for_GenericRecord = $._encodeSequenceOf<TaggedElement>(() => _encode_TaggedElement, $.BER); }
    return _cached_encoder_for_GenericRecord(value, elGetter);
}


/* eslint-enable */
