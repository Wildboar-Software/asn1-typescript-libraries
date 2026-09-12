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
import { ObjectName, _decode_ObjectName, _encode_ObjectName } from "../ISO-9506-MMS-1/ObjectName.ta.mjs";
// export { ObjectName, _decode_ObjectName, _encode_ObjectName } from "../ISO-9506-MMS-1/ObjectName.ta.mjs";
import { EntryContent, _decode_EntryContent, _encode_EntryContent } from "../ISO-9506-MMS-1/EntryContent.ta.mjs";
// export { EntryContent, _decode_EntryContent, _encode_EntryContent } from "../ISO-9506-MMS-1/EntryContent.ta.mjs";


/**
 * @summary WriteJournal_Request
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * WriteJournal-Request ::= SEQUENCE {
 *    journalName                [0] ObjectName,
 *    listOfJournalEntry         [1] IMPLICIT SEQUENCE OF EntryContent }
 * ```
 * 
 * @class
 */
export
class WriteJournal_Request {
    constructor (
        /**
         * @summary `journalName`.
         * @public
         * @readonly
         */
        readonly journalName: ObjectName,
        /**
         * @summary `listOfJournalEntry`.
         * @public
         * @readonly
         */
        readonly listOfJournalEntry: EntryContent[]
    ) {}

    /**
     * @summary Restructures an object into a WriteJournal_Request
     * @description
     * 
     * This takes an `object` and converts it to a `WriteJournal_Request`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `WriteJournal_Request`.
     * @returns {WriteJournal_Request}
     */
    public static _from_object (_o: { [_K in keyof (WriteJournal_Request)]: (WriteJournal_Request)[_K] }): WriteJournal_Request {
        return new WriteJournal_Request(_o.journalName, _o.listOfJournalEntry);
    }


}

/**
 * @summary The Leading Root Component Types of WriteJournal_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_WriteJournal_Request: $.ComponentSpec[] = [
    new $.ComponentSpec("journalName", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("listOfJournalEntry", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of WriteJournal_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_WriteJournal_Request: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of WriteJournal_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_WriteJournal_Request: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_WriteJournal_Request: $.ASN1Decoder<WriteJournal_Request> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) WriteJournal_Request
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_WriteJournal_Request (el: _Element): WriteJournal_Request {
    if (!_cached_decoder_for_WriteJournal_Request) { _cached_decoder_for_WriteJournal_Request = function (el: _Element): WriteJournal_Request {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("WriteJournal-Request contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "journalName";
    sequence[1].name = "listOfJournalEntry";
    let journalName!: ObjectName;
    let listOfJournalEntry!: EntryContent[];
    journalName = $._decode_explicit<ObjectName>(() => _decode_ObjectName)(sequence[0]);
    listOfJournalEntry = $._decode_implicit<EntryContent[]>(() => $._decodeSequenceOf<EntryContent>(() => _decode_EntryContent))(sequence[1]);
    return new WriteJournal_Request(
        journalName,
        listOfJournalEntry,

    );
}; }
    return _cached_decoder_for_WriteJournal_Request(el);
}

let _cached_encoder_for_WriteJournal_Request: $.ASN1Encoder<WriteJournal_Request> | null = null;

/**
 * @summary Encodes a(n) WriteJournal_Request into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The WriteJournal_Request, encoded as an ASN.1 Element.
 */
export
function _encode_WriteJournal_Request (value: WriteJournal_Request, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_WriteJournal_Request) { _cached_encoder_for_WriteJournal_Request = function (value: WriteJournal_Request, elGetter: $.ASN1Encoder<WriteJournal_Request>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_ObjectName, $.BER)(value.journalName, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<EntryContent>(() => _encode_EntryContent, $.BER), $.BER)(value.listOfJournalEntry, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_WriteJournal_Request(value, elGetter);
}


/* eslint-enable */
