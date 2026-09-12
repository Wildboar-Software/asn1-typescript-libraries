/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
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
import { EntryContent_entryForm_data, _decode_EntryContent_entryForm_data, _encode_EntryContent_entryForm_data } from "../ISO-9506-MMS-1/EntryContent-entryForm-data.ta.mjs";
// export { EntryContent_entryForm_data, _decode_EntryContent_entryForm_data, _encode_EntryContent_entryForm_data } from "../ISO-9506-MMS-1/EntryContent-entryForm-data.ta.mjs";
import { MMSString, _decode_MMSString, _encode_MMSString } from "../ISO-9506-MMS-1/MMSString.ta.mjs";
// export { MMSString, _decode_MMSString, _encode_MMSString } from "../ISO-9506-MMS-1/MMSString.ta.mjs";


/**
 * @summary EntryContent_entryForm
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EntryContent-entryForm ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type EntryContent_entryForm =
    { data: EntryContent_entryForm_data } /* CHOICE_ALT_ROOT */
    | { annotation: MMSString } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_EntryContent_entryForm: $.ASN1Decoder<EntryContent_entryForm> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EntryContent_entryForm
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EntryContent_entryForm (el: _Element): EntryContent_entryForm {
    if (!_cached_decoder_for_EntryContent_entryForm) { _cached_decoder_for_EntryContent_entryForm = $._decode_inextensible_choice<EntryContent_entryForm>({
    "CONTEXT 2": [ "data", $._decode_implicit<EntryContent_entryForm_data>(() => _decode_EntryContent_entryForm_data) ],
    "CONTEXT 3": [ "annotation", $._decode_explicit<MMSString>(() => _decode_MMSString) ]
}); }
    return _cached_decoder_for_EntryContent_entryForm(el);
}

let _cached_encoder_for_EntryContent_entryForm: $.ASN1Encoder<EntryContent_entryForm> | null = null;

/**
 * @summary Encodes a(n) EntryContent_entryForm into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EntryContent_entryForm, encoded as an ASN.1 Element.
 */
export
function _encode_EntryContent_entryForm (value: EntryContent_entryForm, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EntryContent_entryForm) { _cached_encoder_for_EntryContent_entryForm = $._encode_choice<EntryContent_entryForm>({
    "data": $._encode_implicit(_TagClass.context, 2, () => _encode_EntryContent_entryForm_data, $.BER),
    "annotation": $._encode_explicit(_TagClass.context, 3, () => _encode_MMSString, $.BER),
}, $.BER); }
    return _cached_encoder_for_EntryContent_entryForm(value, elGetter);
}


/* eslint-enable */
