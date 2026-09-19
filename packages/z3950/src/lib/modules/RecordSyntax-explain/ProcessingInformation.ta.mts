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
import { CommonInfo, _decode_CommonInfo, _encode_CommonInfo } from "../RecordSyntax-explain/CommonInfo.ta.mjs";
// export { CommonInfo, _decode_CommonInfo, _encode_CommonInfo } from "../RecordSyntax-explain/CommonInfo.ta.mjs";
import { ProcessingInformation_processingContext, ProcessingInformation_processingContext_access /* IMPORTED_LONG_NAMED_INTEGER */, access /* IMPORTED_SHORT_NAMED_INTEGER */, ProcessingInformation_processingContext_search /* IMPORTED_LONG_NAMED_INTEGER */, search /* IMPORTED_SHORT_NAMED_INTEGER */, ProcessingInformation_processingContext_retrieval /* IMPORTED_LONG_NAMED_INTEGER */, retrieval /* IMPORTED_SHORT_NAMED_INTEGER */, ProcessingInformation_processingContext_record_presentation /* IMPORTED_LONG_NAMED_INTEGER */, record_presentation /* IMPORTED_SHORT_NAMED_INTEGER */, ProcessingInformation_processingContext_record_handling /* IMPORTED_LONG_NAMED_INTEGER */, record_handling /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ProcessingInformation_processingContext, _encode_ProcessingInformation_processingContext } from "../RecordSyntax-explain/ProcessingInformation-processingContext.ta.mjs";
// export { ProcessingInformation_processingContext, ProcessingInformation_processingContext_access /* IMPORTED_LONG_NAMED_INTEGER */, access /* IMPORTED_SHORT_NAMED_INTEGER */, ProcessingInformation_processingContext_search /* IMPORTED_LONG_NAMED_INTEGER */, search /* IMPORTED_SHORT_NAMED_INTEGER */, ProcessingInformation_processingContext_retrieval /* IMPORTED_LONG_NAMED_INTEGER */, retrieval /* IMPORTED_SHORT_NAMED_INTEGER */, ProcessingInformation_processingContext_record_presentation /* IMPORTED_LONG_NAMED_INTEGER */, record_presentation /* IMPORTED_SHORT_NAMED_INTEGER */, ProcessingInformation_processingContext_record_handling /* IMPORTED_LONG_NAMED_INTEGER */, record_handling /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ProcessingInformation_processingContext, _encode_ProcessingInformation_processingContext } from "../RecordSyntax-explain/ProcessingInformation-processingContext.ta.mjs";
import { HumanString, _decode_HumanString, _encode_HumanString } from "../RecordSyntax-explain/HumanString.ta.mjs";
// export { HumanString, _decode_HumanString, _encode_HumanString } from "../RecordSyntax-explain/HumanString.ta.mjs";


/**
 * @summary ProcessingInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProcessingInformation ::= SEQUENCE{
 *   commonInfo          [0]   IMPLICIT CommonInfo OPTIONAL,
 *      -- Key elements follow:
 *   databaseName        [1] IMPLICIT DatabaseName,
 *   processingContext   [2] IMPLICIT INTEGER {
 *                                 access                 (0),    
 *                                    -- e.g. choosing databases
 *                                 search                 (1),      
 *                                    -- e.g. "search strategies" or search forms 
 *                                 retrieval              (2),    
 *                                    -- e.g. recommended element combinations 
 *                                 record-presentation    (3),   
 *                                    -- display of retrieved records
 *                                 record-handling        (4)          
 *                                    -- handling (e.g. saving) of retrieved
 *                                    -- records
 *                                                 },
 *   name                [3] IMPLICIT InternationalString,
 *   oid                 [4] IMPLICIT OBJECT IDENTIFIER,
 *                              -- So origin can retreive brief record and
 *                              -- determine if it can handle 'instructions' when
 *                              -- retrieving the full record.
 *      -- No non-key brief elements
 *      -- Non-brief elements follow:
 *   description         [5] IMPLICIT HumanString OPTIONAL,
 *                             -- use element set name 'description' 
 *                             -- to retrieve all except instructions.
 *   instructions        [6] IMPLICIT EXTERNAL OPTIONAL -- mandatory in full record
 *                             }
 * ```
 * 
 * @class
 */
export
class ProcessingInformation {
    constructor (
        /**
         * @summary `commonInfo`.
         * @public
         * @readonly
         */
        readonly commonInfo: OPTIONAL<CommonInfo>,
        /**
         * @summary `databaseName`.
         * @public
         * @readonly
         */
        readonly databaseName: DatabaseName,
        /**
         * @summary `processingContext`.
         * @public
         * @readonly
         */
        readonly processingContext: ProcessingInformation_processingContext,
        /**
         * @summary `name`.
         * @public
         * @readonly
         */
        readonly name: InternationalString,
        /**
         * @summary `oid`.
         * @public
         * @readonly
         */
        readonly oid: OBJECT_IDENTIFIER,
        /**
         * @summary `description`.
         * @public
         * @readonly
         */
        readonly description: OPTIONAL<HumanString>,
        /**
         * @summary `instructions`.
         * @public
         * @readonly
         */
        readonly instructions: OPTIONAL<EXTERNAL>
    ) {}

    /**
     * @summary Restructures an object into a ProcessingInformation
     * @description
     * 
     * This takes an `object` and converts it to a `ProcessingInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ProcessingInformation`.
     * @returns {ProcessingInformation}
     */
    public static _from_object (_o: { [_K in keyof (ProcessingInformation)]: (ProcessingInformation)[_K] }): ProcessingInformation {
        return new ProcessingInformation(_o.commonInfo, _o.databaseName, _o.processingContext, _o.name, _o.oid, _o.description, _o.instructions);
    }


}

/**
 * @summary The Leading Root Component Types of ProcessingInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ProcessingInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("commonInfo", true, $.hasTag(_TagClass.context, 0)),
    /* FIXME: databaseName COULD_NOT_RESOLVE_TYPE_DEF */,
    new $.ComponentSpec("processingContext", false, $.hasTag(_TagClass.context, 2)),
    /* FIXME: name COULD_NOT_RESOLVE_TYPE_DEF */,
    new $.ComponentSpec("oid", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("description", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("instructions", true, $.hasTag(_TagClass.context, 6))
];

/**
 * @summary The Trailing Root Component Types of ProcessingInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ProcessingInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ProcessingInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ProcessingInformation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ProcessingInformation: $.ASN1Decoder<ProcessingInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProcessingInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ProcessingInformation (el: _Element): ProcessingInformation {
    if (!_cached_decoder_for_ProcessingInformation) { _cached_decoder_for_ProcessingInformation = function (el: _Element): ProcessingInformation {
    let commonInfo: OPTIONAL<CommonInfo>;
    let databaseName!: DatabaseName;
    let processingContext!: ProcessingInformation_processingContext;
    let name!: InternationalString;
    let oid!: OBJECT_IDENTIFIER;
    let description: OPTIONAL<HumanString>;
    let instructions: OPTIONAL<EXTERNAL>;
    const callbacks: $.DecodingMap = {
        "commonInfo": (_el: _Element): void => { commonInfo = $._decode_implicit<CommonInfo>(() => _decode_CommonInfo)(_el); },
        "databaseName": (_el: _Element): void => { databaseName = $._decode_implicit<DatabaseName>(() => _decode_DatabaseName)(_el); },
        "processingContext": (_el: _Element): void => { processingContext = $._decode_implicit<ProcessingInformation_processingContext>(() => _decode_ProcessingInformation_processingContext)(_el); },
        "name": (_el: _Element): void => { name = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "oid": (_el: _Element): void => { oid = $._decode_implicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier)(_el); },
        "description": (_el: _Element): void => { description = $._decode_implicit<HumanString>(() => _decode_HumanString)(_el); },
        "instructions": (_el: _Element): void => { instructions = $._decode_implicit<EXTERNAL>(() => $._decodeExternal)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ProcessingInformation,
        _extension_additions_list_spec_for_ProcessingInformation,
        _root_component_type_list_2_spec_for_ProcessingInformation,
        undefined,
    );
    return new ProcessingInformation(
        commonInfo,
        databaseName,
        processingContext,
        name,
        oid,
        description,
        instructions
    );
}; }
    return _cached_decoder_for_ProcessingInformation(el);
}

let _cached_encoder_for_ProcessingInformation: $.ASN1Encoder<ProcessingInformation> | null = null;

/**
 * @summary Encodes a(n) ProcessingInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProcessingInformation, encoded as an ASN.1 Element.
 */
export
function _encode_ProcessingInformation (value: ProcessingInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ProcessingInformation) { _cached_encoder_for_ProcessingInformation = function (value: ProcessingInformation, elGetter: $.ASN1Encoder<ProcessingInformation>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.commonInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_CommonInfo, $.BER)(value.commonInfo, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_DatabaseName, $.BER)(value.databaseName, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_ProcessingInformation_processingContext, $.BER)(value.processingContext, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_InternationalString, $.BER)(value.name, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => $._encodeObjectIdentifier, $.BER)(value.oid, $.BER),
            /* IF_ABSENT  */ ((value.description === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_HumanString, $.BER)(value.description, $.BER)),
            /* IF_ABSENT  */ ((value.instructions === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => $._encodeExternal, $.BER)(value.instructions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ProcessingInformation(value, elGetter);
}


/* eslint-enable */
