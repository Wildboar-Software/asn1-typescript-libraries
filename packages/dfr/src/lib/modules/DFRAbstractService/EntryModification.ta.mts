/* eslint-disable */
import {
    NULL,
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
import { Attribute, _decode_Attribute, _encode_Attribute } from "../InformationFramework/Attribute.ta.mjs";
import { AttributeType, _decode_AttributeType, _encode_AttributeType } from "../InformationFramework/AttributeType.ta.mjs";
import { EntryModification_copy_attributes_from, _decode_EntryModification_copy_attributes_from, _encode_EntryModification_copy_attributes_from } from "../DFRAbstractService/EntryModification-copy-attributes-from.ta.mjs";
import { EntryModification_add_values_from, _decode_EntryModification_add_values_from, _encode_EntryModification_add_values_from } from "../DFRAbstractService/EntryModification-add-values-from.ta.mjs";
import { DfrObjectContent, _decode_DfrObjectContent, _encode_DfrObjectContent } from "../DFRAbstractService/DfrObjectContent.ta.mjs";
import { SourceEntry, _decode_SourceEntry, _encode_SourceEntry } from "../DFRAbstractService/SourceEntry.ta.mjs";


/**
 * @summary EntryModification
 * @description
 *
 * One step of an ordered update: put/remove/copy a whole attribute, add/remove
 * values of a multi-valued attribute, or put/remove/copy content. Content of a
 * search-result-list must not be modified this way (use Search). Source and
 * sink object classes must match when copying content. ISO/IEC 10166-1:1991
 * §8.1.5.5.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EntryModification  ::=  CHOICE {
 *     put-attribute           [0] Attribute,
 *     remove-attribute        [1] AttributeType,
 *     copy-attributes-from    [2] SEQUENCE {
 *         source                  [0] SourceEntry,
 *         -- as default all copyable attributes
 *         attribute-selection     [1] SET OF AttributeType OPTIONAL
 *     },
 *     add-values              [3] Attribute,
 *     remove-values           [4] Attribute,
 *     add-values-from         [5] SEQUENCE {
 *         source                  [0] SourceEntry,
 *         -- as default all multivalued attributes
 *         attribute-selection     [1] SET OF AttributeType OPTIONAL
 *     },
 *     put-content             [6] DfrObjectContent,
 *     remove-content          [7] NULL,
 *     copy-content-from       [8] SourceEntry
 * }
 * ```
 */
export
type EntryModification =
    { put_attribute: Attribute } /* CHOICE_ALT_ROOT */
    | { remove_attribute: AttributeType } /* CHOICE_ALT_ROOT */
    | { copy_attributes_from: EntryModification_copy_attributes_from } /* CHOICE_ALT_ROOT */
    | { add_values: Attribute } /* CHOICE_ALT_ROOT */
    | { remove_values: Attribute } /* CHOICE_ALT_ROOT */
    | { add_values_from: EntryModification_add_values_from } /* CHOICE_ALT_ROOT */
    | { put_content: DfrObjectContent } /* CHOICE_ALT_ROOT */
    | { remove_content: NULL } /* CHOICE_ALT_ROOT */
    | { copy_content_from: SourceEntry } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_EntryModification: $.ASN1Decoder<EntryModification> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EntryModification
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EntryModification (el: _Element): EntryModification {
    if (!_cached_decoder_for_EntryModification) { _cached_decoder_for_EntryModification = $._decode_inextensible_choice<EntryModification>({
    "CONTEXT 0": [ "put_attribute", $._decode_implicit<Attribute>(() => _decode_Attribute) ],
    "CONTEXT 1": [ "remove_attribute", $._decode_implicit<AttributeType>(() => _decode_AttributeType) ],
    "CONTEXT 2": [ "copy_attributes_from", $._decode_implicit<EntryModification_copy_attributes_from>(() => _decode_EntryModification_copy_attributes_from) ],
    "CONTEXT 3": [ "add_values", $._decode_implicit<Attribute>(() => _decode_Attribute) ],
    "CONTEXT 4": [ "remove_values", $._decode_implicit<Attribute>(() => _decode_Attribute) ],
    "CONTEXT 5": [ "add_values_from", $._decode_implicit<EntryModification_add_values_from>(() => _decode_EntryModification_add_values_from) ],
    "CONTEXT 6": [ "put_content", $._decode_explicit<DfrObjectContent>(() => _decode_DfrObjectContent) ],
    "CONTEXT 7": [ "remove_content", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 8": [ "copy_content_from", $._decode_explicit<SourceEntry>(() => _decode_SourceEntry) ]
}); }
    return _cached_decoder_for_EntryModification(el);
}

let _cached_encoder_for_EntryModification: $.ASN1Encoder<EntryModification> | null = null;

/**
 * @summary Encodes a(n) EntryModification into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EntryModification, encoded as an ASN.1 Element.
 */
export
function _encode_EntryModification (value: EntryModification, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EntryModification) { _cached_encoder_for_EntryModification = $._encode_choice<EntryModification>({
    "put_attribute": $._encode_implicit(_TagClass.context, 0, () => _encode_Attribute, $.BER),
    "remove_attribute": $._encode_implicit(_TagClass.context, 1, () => _encode_AttributeType, $.BER),
    "copy_attributes_from": $._encode_implicit(_TagClass.context, 2, () => _encode_EntryModification_copy_attributes_from, $.BER),
    "add_values": $._encode_implicit(_TagClass.context, 3, () => _encode_Attribute, $.BER),
    "remove_values": $._encode_implicit(_TagClass.context, 4, () => _encode_Attribute, $.BER),
    "add_values_from": $._encode_implicit(_TagClass.context, 5, () => _encode_EntryModification_add_values_from, $.BER),
    "put_content": $._encode_explicit(_TagClass.context, 6, () => _encode_DfrObjectContent, $.BER),
    "remove_content": $._encode_implicit(_TagClass.context, 7, () => $._encodeNull, $.BER),
    "copy_content_from": $._encode_explicit(_TagClass.context, 8, () => _encode_SourceEntry, $.BER),
}, $.BER); }
    return _cached_encoder_for_EntryModification(value, elGetter);
}


/* eslint-enable */
