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
import { DirectoryEntry, _decode_DirectoryEntry, _encode_DirectoryEntry } from "../ISO-9506-MMS-1A/DirectoryEntry.ta.mjs";
// export { DirectoryEntry, _decode_DirectoryEntry, _encode_DirectoryEntry } from "../ISO-9506-MMS-1A/DirectoryEntry.ta.mjs";


/**
 * @summary FileDirectory_Response
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FileDirectory-Response ::= SEQUENCE {
 *     listOfDirectoryEntry   [0] SEQUENCE OF DirectoryEntry,
 *     moreFollows            [1] IMPLICIT BOOLEAN DEFAULT FALSE
 * }
 * ```
 * 
 * @class
 */
export
class FileDirectory_Response {
    constructor (
        /**
         * @summary `listOfDirectoryEntry`.
         * @public
         * @readonly
         */
        readonly listOfDirectoryEntry: DirectoryEntry[],
        /**
         * @summary `moreFollows`.
         * @public
         * @readonly
         */
        readonly moreFollows: OPTIONAL<BOOLEAN>
    ) {}

    /**
     * @summary Restructures an object into a FileDirectory_Response
     * @description
     * 
     * This takes an `object` and converts it to a `FileDirectory_Response`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FileDirectory_Response`.
     * @returns {FileDirectory_Response}
     */
    public static _from_object (_o: { [_K in keyof (FileDirectory_Response)]: (FileDirectory_Response)[_K] }): FileDirectory_Response {
        return new FileDirectory_Response(_o.listOfDirectoryEntry, _o.moreFollows);
    }

    /**
     * @summary Getter that returns the default value for `moreFollows`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_moreFollows () { return false; }
}

/**
 * @summary The Leading Root Component Types of FileDirectory_Response
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FileDirectory_Response: $.ComponentSpec[] = [
    new $.ComponentSpec("listOfDirectoryEntry", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("moreFollows", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of FileDirectory_Response
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FileDirectory_Response: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FileDirectory_Response
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FileDirectory_Response: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FileDirectory_Response: $.ASN1Decoder<FileDirectory_Response> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FileDirectory_Response
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FileDirectory_Response (el: _Element): FileDirectory_Response {
    if (!_cached_decoder_for_FileDirectory_Response) { _cached_decoder_for_FileDirectory_Response = function (el: _Element): FileDirectory_Response {
    let listOfDirectoryEntry!: DirectoryEntry[];
    let moreFollows: OPTIONAL<BOOLEAN> = FileDirectory_Response._default_value_for_moreFollows;
    const callbacks: $.DecodingMap = {
        "listOfDirectoryEntry": (_el: _Element): void => { listOfDirectoryEntry = $._decode_explicit<DirectoryEntry[]>(() => $._decodeSequenceOf<DirectoryEntry>(() => _decode_DirectoryEntry))(_el); },
        "moreFollows": (_el: _Element): void => { moreFollows = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_FileDirectory_Response,
        _extension_additions_list_spec_for_FileDirectory_Response,
        _root_component_type_list_2_spec_for_FileDirectory_Response,
        undefined,
    );
    return new FileDirectory_Response(
        listOfDirectoryEntry,
        moreFollows
    );
}; }
    return _cached_decoder_for_FileDirectory_Response(el);
}

let _cached_encoder_for_FileDirectory_Response: $.ASN1Encoder<FileDirectory_Response> | null = null;

/**
 * @summary Encodes a(n) FileDirectory_Response into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FileDirectory_Response, encoded as an ASN.1 Element.
 */
export
function _encode_FileDirectory_Response (value: FileDirectory_Response, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FileDirectory_Response) { _cached_encoder_for_FileDirectory_Response = function (value: FileDirectory_Response, elGetter: $.ASN1Encoder<FileDirectory_Response>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => $._encodeSequenceOf<DirectoryEntry>(() => _encode_DirectoryEntry, $.BER), $.BER)(value.listOfDirectoryEntry, $.BER),
            /* IF_DEFAULT */ (value.moreFollows === undefined || $.deepEq(value.moreFollows, FileDirectory_Response._default_value_for_moreFollows) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeBoolean, $.BER)(value.moreFollows, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_FileDirectory_Response(value, elGetter);
}


/* eslint-enable */
