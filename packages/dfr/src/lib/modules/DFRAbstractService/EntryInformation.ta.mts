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
import { DfrEntryAttributes, _decode_DfrEntryAttributes, _encode_DfrEntryAttributes } from "../DFRAbstractService/DfrEntryAttributes.ta.mjs";
import { DfrEntry, _decode_DfrEntry, _encode_DfrEntry } from "../DFRAbstractService/DfrEntry.ta.mjs";
import { DfrObjectContent, _decode_DfrObjectContent, _encode_DfrObjectContent } from "../DFRAbstractService/DfrObjectContent.ta.mjs";
import { DOR, _decode_DOR, _encode_DOR } from "../DOR-definition/DOR.ta.mjs";
import { EntryInformation_attr_and_dor_to_content, _decode_EntryInformation_attr_and_dor_to_content, _encode_EntryInformation_attr_and_dor_to_content } from "../DFRAbstractService/EntryInformation-attr-and-dor-to-content.ta.mjs";
import { EntryInformation_attr_and_dor_to_entire_object, _decode_EntryInformation_attr_and_dor_to_entire_object, _encode_EntryInformation_attr_and_dor_to_entire_object } from "../DFRAbstractService/EntryInformation-attr-and-dor-to-entire-object.ta.mjs";


/**
 * @summary EntryInformation
 * @description
 *
 * Read-back payload matching the selection. Present in a result iff selection
 * was specified. `attributes-and-content` is a `DfrEntry` (ISO/IEC
 * 10166-1:1991/Cor.1:1994 §8.1.5). DOR alternatives are for
 * produce-operations. ISO/IEC 10166-1:1991 §8.1.5.6.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EntryInformation  ::=  CHOICE {
 *     attributes-only                 [0] DfrEntryAttributes,
 *     attributes-and-content          [1] DfrEntry,
 *     content-only                    [2] DfrObjectContent,
 *     dor-to-attr-only                [3] DOR,
 *     attr-and-dor-to-content         [4] SEQUENCE {
 *         attributes              [0] DfrEntryAttributes,
 *         dor-to-content          [1] DOR
 *     },
 *     dor-to-content-only             [5] DOR,
 *     dor-to-entire-object            [6] DOR,
 *     attr-and-dor-to-entire-object   [7] SEQUENCE {
 *         attributes              [0] DfrEntryAttributes,
 *         dor-to-entire-object    [1] DOR
 *     }
 * }
 * ```
 */
export
type EntryInformation =
    { attributes_only: DfrEntryAttributes } /* CHOICE_ALT_ROOT */
    | { attributes_and_content: DfrEntry } /* CHOICE_ALT_ROOT */
    | { content_only: DfrObjectContent } /* CHOICE_ALT_ROOT */
    | { dor_to_attr_only: DOR } /* CHOICE_ALT_ROOT */
    | { attr_and_dor_to_content: EntryInformation_attr_and_dor_to_content } /* CHOICE_ALT_ROOT */
    | { dor_to_content_only: DOR } /* CHOICE_ALT_ROOT */
    | { dor_to_entire_object: DOR } /* CHOICE_ALT_ROOT */
    | { attr_and_dor_to_entire_object: EntryInformation_attr_and_dor_to_entire_object } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_EntryInformation: $.ASN1Decoder<EntryInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EntryInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EntryInformation (el: _Element): EntryInformation {
    if (!_cached_decoder_for_EntryInformation) { _cached_decoder_for_EntryInformation = $._decode_inextensible_choice<EntryInformation>({
    "CONTEXT 0": [ "attributes_only", $._decode_implicit<DfrEntryAttributes>(() => _decode_DfrEntryAttributes) ],
    "CONTEXT 1": [ "attributes_and_content", $._decode_implicit<DfrEntry>(() => _decode_DfrEntry) ],
    "CONTEXT 2": [ "content_only", $._decode_explicit<DfrObjectContent>(() => _decode_DfrObjectContent) ],
    "CONTEXT 3": [ "dor_to_attr_only", $._decode_implicit<DOR>(() => _decode_DOR) ],
    "CONTEXT 4": [ "attr_and_dor_to_content", $._decode_implicit<EntryInformation_attr_and_dor_to_content>(() => _decode_EntryInformation_attr_and_dor_to_content) ],
    "CONTEXT 5": [ "dor_to_content_only", $._decode_implicit<DOR>(() => _decode_DOR) ],
    "CONTEXT 6": [ "dor_to_entire_object", $._decode_implicit<DOR>(() => _decode_DOR) ],
    "CONTEXT 7": [ "attr_and_dor_to_entire_object", $._decode_implicit<EntryInformation_attr_and_dor_to_entire_object>(() => _decode_EntryInformation_attr_and_dor_to_entire_object) ]
}); }
    return _cached_decoder_for_EntryInformation(el);
}

let _cached_encoder_for_EntryInformation: $.ASN1Encoder<EntryInformation> | null = null;

/**
 * @summary Encodes a(n) EntryInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EntryInformation, encoded as an ASN.1 Element.
 */
export
function _encode_EntryInformation (value: EntryInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EntryInformation) { _cached_encoder_for_EntryInformation = $._encode_choice<EntryInformation>({
    "attributes_only": $._encode_implicit(_TagClass.context, 0, () => _encode_DfrEntryAttributes, $.BER),
    "attributes_and_content": $._encode_implicit(_TagClass.context, 1, () => _encode_DfrEntry, $.BER),
    "content_only": $._encode_explicit(_TagClass.context, 2, () => _encode_DfrObjectContent, $.BER),
    "dor_to_attr_only": $._encode_implicit(_TagClass.context, 3, () => _encode_DOR, $.BER),
    "attr_and_dor_to_content": $._encode_implicit(_TagClass.context, 4, () => _encode_EntryInformation_attr_and_dor_to_content, $.BER),
    "dor_to_content_only": $._encode_implicit(_TagClass.context, 5, () => _encode_DOR, $.BER),
    "dor_to_entire_object": $._encode_implicit(_TagClass.context, 6, () => _encode_DOR, $.BER),
    "attr_and_dor_to_entire_object": $._encode_implicit(_TagClass.context, 7, () => _encode_EntryInformation_attr_and_dor_to_entire_object, $.BER),
}, $.BER); }
    return _cached_encoder_for_EntryInformation(value, elGetter);
}


/* eslint-enable */
