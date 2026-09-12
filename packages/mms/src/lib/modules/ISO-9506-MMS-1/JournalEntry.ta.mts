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
import { ApplicationReference, _decode_ApplicationReference, _encode_ApplicationReference } from "../MMS-Environment-1/ApplicationReference.ta.mjs";
// export { ApplicationReference, _decode_ApplicationReference, _encode_ApplicationReference } from "../MMS-Environment-1/ApplicationReference.ta.mjs";
import { EntryContent, _decode_EntryContent, _encode_EntryContent } from "../ISO-9506-MMS-1/EntryContent.ta.mjs";
// export { EntryContent, _decode_EntryContent, _encode_EntryContent } from "../ISO-9506-MMS-1/EntryContent.ta.mjs";


/**
 * @summary JournalEntry
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * JournalEntry ::= SEQUENCE {
 *    entryIdentifier            [0] IMPLICIT OCTET STRING,
 *    originatingApplication     [1] ApplicationReference,
 *    entryContent               [2] IMPLICIT EntryContent }
 * ```
 * 
 * @class
 */
export
class JournalEntry {
    constructor (
        /**
         * @summary `entryIdentifier`.
         * @public
         * @readonly
         */
        readonly entryIdentifier: OCTET_STRING,
        /**
         * @summary `originatingApplication`.
         * @public
         * @readonly
         */
        readonly originatingApplication: ApplicationReference,
        /**
         * @summary `entryContent`.
         * @public
         * @readonly
         */
        readonly entryContent: EntryContent
    ) {}

    /**
     * @summary Restructures an object into a JournalEntry
     * @description
     * 
     * This takes an `object` and converts it to a `JournalEntry`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `JournalEntry`.
     * @returns {JournalEntry}
     */
    public static _from_object (_o: { [_K in keyof (JournalEntry)]: (JournalEntry)[_K] }): JournalEntry {
        return new JournalEntry(_o.entryIdentifier, _o.originatingApplication, _o.entryContent);
    }


}

/**
 * @summary The Leading Root Component Types of JournalEntry
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_JournalEntry: $.ComponentSpec[] = [
    new $.ComponentSpec("entryIdentifier", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("originatingApplication", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("entryContent", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of JournalEntry
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_JournalEntry: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of JournalEntry
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_JournalEntry: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_JournalEntry: $.ASN1Decoder<JournalEntry> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) JournalEntry
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_JournalEntry (el: _Element): JournalEntry {
    if (!_cached_decoder_for_JournalEntry) { _cached_decoder_for_JournalEntry = function (el: _Element): JournalEntry {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("JournalEntry contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "entryIdentifier";
    sequence[1].name = "originatingApplication";
    sequence[2].name = "entryContent";
    let entryIdentifier!: OCTET_STRING;
    let originatingApplication!: ApplicationReference;
    let entryContent!: EntryContent;
    entryIdentifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(sequence[0]);
    originatingApplication = $._decode_explicit<ApplicationReference>(() => _decode_ApplicationReference)(sequence[1]);
    entryContent = $._decode_implicit<EntryContent>(() => _decode_EntryContent)(sequence[2]);
    return new JournalEntry(
        entryIdentifier,
        originatingApplication,
        entryContent,

    );
}; }
    return _cached_decoder_for_JournalEntry(el);
}

let _cached_encoder_for_JournalEntry: $.ASN1Encoder<JournalEntry> | null = null;

/**
 * @summary Encodes a(n) JournalEntry into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The JournalEntry, encoded as an ASN.1 Element.
 */
export
function _encode_JournalEntry (value: JournalEntry, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_JournalEntry) { _cached_encoder_for_JournalEntry = function (value: JournalEntry, elGetter: $.ASN1Encoder<JournalEntry>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER)(value.entryIdentifier, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_ApplicationReference, $.BER)(value.originatingApplication, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_EntryContent, $.BER)(value.entryContent, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_JournalEntry(value, elGetter);
}


/* eslint-enable */
