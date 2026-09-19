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
import { HumanString, _decode_HumanString, _encode_HumanString } from "../RecordSyntax-explain/HumanString.ta.mjs";
// export { HumanString, _decode_HumanString, _encode_HumanString } from "../RecordSyntax-explain/HumanString.ta.mjs";
import { PerElementDetails, _decode_PerElementDetails, _encode_PerElementDetails } from "../RecordSyntax-explain/PerElementDetails.ta.mjs";
// export { PerElementDetails, _decode_PerElementDetails, _encode_PerElementDetails } from "../RecordSyntax-explain/PerElementDetails.ta.mjs";


/**
 * @summary RetrievalRecordDetails
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RetrievalRecordDetails ::= SEQUENCE {
 *   commonInfo          [0] IMPLICIT CommonInfo OPTIONAL,
 *      -- Key elements follow:
 *   databaseName        [1] IMPLICIT DatabaseName,
 *   schema              [2] IMPLICIT OBJECT IDENTIFIER,
 *   recordSyntax        [3] IMPLICIT OBJECT IDENTIFIER,
 *      -- Non-brief elements follow:
 *   description         [4] IMPLICIT HumanString OPTIONAL,
 *   detailsPerElement   [5] IMPLICIT SEQUENCE OF PerElementDetails OPTIONAL
 *                              -- mandatory in full record
 *                   }
 * ```
 * 
 * @class
 */
export
class RetrievalRecordDetails {
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
         * @summary `schema`.
         * @public
         * @readonly
         */
        readonly schema: OBJECT_IDENTIFIER,
        /**
         * @summary `recordSyntax`.
         * @public
         * @readonly
         */
        readonly recordSyntax: OBJECT_IDENTIFIER,
        /**
         * @summary `description`.
         * @public
         * @readonly
         */
        readonly description: OPTIONAL<HumanString>,
        /**
         * @summary `detailsPerElement`.
         * @public
         * @readonly
         */
        readonly detailsPerElement: OPTIONAL<PerElementDetails[]>
    ) {}

    /**
     * @summary Restructures an object into a RetrievalRecordDetails
     * @description
     * 
     * This takes an `object` and converts it to a `RetrievalRecordDetails`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RetrievalRecordDetails`.
     * @returns {RetrievalRecordDetails}
     */
    public static _from_object (_o: { [_K in keyof (RetrievalRecordDetails)]: (RetrievalRecordDetails)[_K] }): RetrievalRecordDetails {
        return new RetrievalRecordDetails(_o.commonInfo, _o.databaseName, _o.schema, _o.recordSyntax, _o.description, _o.detailsPerElement);
    }


}

/**
 * @summary The Leading Root Component Types of RetrievalRecordDetails
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RetrievalRecordDetails: $.ComponentSpec[] = [
    new $.ComponentSpec("commonInfo", true, $.hasTag(_TagClass.context, 0)),
    /* FIXME: databaseName COULD_NOT_RESOLVE_TYPE_DEF */,
    new $.ComponentSpec("schema", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("recordSyntax", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("description", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("detailsPerElement", true, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of RetrievalRecordDetails
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RetrievalRecordDetails: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RetrievalRecordDetails
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RetrievalRecordDetails: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RetrievalRecordDetails: $.ASN1Decoder<RetrievalRecordDetails> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RetrievalRecordDetails
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RetrievalRecordDetails (el: _Element): RetrievalRecordDetails {
    if (!_cached_decoder_for_RetrievalRecordDetails) { _cached_decoder_for_RetrievalRecordDetails = function (el: _Element): RetrievalRecordDetails {
    let commonInfo: OPTIONAL<CommonInfo>;
    let databaseName!: DatabaseName;
    let schema!: OBJECT_IDENTIFIER;
    let recordSyntax!: OBJECT_IDENTIFIER;
    let description: OPTIONAL<HumanString>;
    let detailsPerElement: OPTIONAL<PerElementDetails[]>;
    const callbacks: $.DecodingMap = {
        "commonInfo": (_el: _Element): void => { commonInfo = $._decode_implicit<CommonInfo>(() => _decode_CommonInfo)(_el); },
        "databaseName": (_el: _Element): void => { databaseName = $._decode_implicit<DatabaseName>(() => _decode_DatabaseName)(_el); },
        "schema": (_el: _Element): void => { schema = $._decode_implicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier)(_el); },
        "recordSyntax": (_el: _Element): void => { recordSyntax = $._decode_implicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier)(_el); },
        "description": (_el: _Element): void => { description = $._decode_implicit<HumanString>(() => _decode_HumanString)(_el); },
        "detailsPerElement": (_el: _Element): void => { detailsPerElement = $._decode_implicit<PerElementDetails[]>(() => $._decodeSequenceOf<PerElementDetails>(() => _decode_PerElementDetails))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RetrievalRecordDetails,
        _extension_additions_list_spec_for_RetrievalRecordDetails,
        _root_component_type_list_2_spec_for_RetrievalRecordDetails,
        undefined,
    );
    return new RetrievalRecordDetails(
        commonInfo,
        databaseName,
        schema,
        recordSyntax,
        description,
        detailsPerElement
    );
}; }
    return _cached_decoder_for_RetrievalRecordDetails(el);
}

let _cached_encoder_for_RetrievalRecordDetails: $.ASN1Encoder<RetrievalRecordDetails> | null = null;

/**
 * @summary Encodes a(n) RetrievalRecordDetails into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RetrievalRecordDetails, encoded as an ASN.1 Element.
 */
export
function _encode_RetrievalRecordDetails (value: RetrievalRecordDetails, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RetrievalRecordDetails) { _cached_encoder_for_RetrievalRecordDetails = function (value: RetrievalRecordDetails, elGetter: $.ASN1Encoder<RetrievalRecordDetails>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.commonInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_CommonInfo, $.BER)(value.commonInfo, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_DatabaseName, $.BER)(value.databaseName, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeObjectIdentifier, $.BER)(value.schema, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeObjectIdentifier, $.BER)(value.recordSyntax, $.BER),
            /* IF_ABSENT  */ ((value.description === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_HumanString, $.BER)(value.description, $.BER)),
            /* IF_ABSENT  */ ((value.detailsPerElement === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => $._encodeSequenceOf<PerElementDetails>(() => _encode_PerElementDetails, $.BER), $.BER)(value.detailsPerElement, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RetrievalRecordDetails(value, elGetter);
}


/* eslint-enable */
