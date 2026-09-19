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
 * @summary ElementSetDetails
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ElementSetDetails ::= SEQUENCE {
 *    -- ElementSetDetails describes the way that database records are mapped to
 *    -- record elements. This mapping may be different for each combination of
 *    -- database name and element set. The database record description is a
 *    -- schema, which may be private to the target. The schema's abstract
 *    -- record structure and tag sets provide the vocabulary for discussing
 *    -- record content; their presence in the Explain database does not imply
 *    -- support for complex retrieval specification.
 *   commonInfo          [0]   IMPLICIT CommonInfo OPTIONAL,
 *      -- Key elements follow:
 *   databaseName        [1] IMPLICIT DatabaseName,
 *   elementSetName      [2] IMPLICIT ElementSetName,
 *   recordSyntax        [3] IMPLICIT OBJECT IDENTIFIER,
 *      -- Non-key Brief elements follow:
 *   schema              [4] IMPLICIT OBJECT IDENTIFIER,
 *      -- Non-brief elements follow:
 *   description         [5] IMPLICIT HumanString OPTIONAL,
 *   detailsPerElement   [6] IMPLICIT SEQUENCE OF PerElementDetails OPTIONAL 
 *                              -- mandatory in full record
 *                      }
 * ```
 * 
 * @class
 */
export
class ElementSetDetails {
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
         * @summary `elementSetName`.
         * @public
         * @readonly
         */
        readonly elementSetName: ElementSetName,
        /**
         * @summary `recordSyntax`.
         * @public
         * @readonly
         */
        readonly recordSyntax: OBJECT_IDENTIFIER,
        /**
         * @summary `schema`.
         * @public
         * @readonly
         */
        readonly schema: OBJECT_IDENTIFIER,
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
     * @summary Restructures an object into a ElementSetDetails
     * @description
     * 
     * This takes an `object` and converts it to a `ElementSetDetails`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ElementSetDetails`.
     * @returns {ElementSetDetails}
     */
    public static _from_object (_o: { [_K in keyof (ElementSetDetails)]: (ElementSetDetails)[_K] }): ElementSetDetails {
        return new ElementSetDetails(_o.commonInfo, _o.databaseName, _o.elementSetName, _o.recordSyntax, _o.schema, _o.description, _o.detailsPerElement);
    }


}

/**
 * @summary The Leading Root Component Types of ElementSetDetails
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ElementSetDetails: $.ComponentSpec[] = [
    new $.ComponentSpec("commonInfo", true, $.hasTag(_TagClass.context, 0)),
    /* FIXME: databaseName COULD_NOT_RESOLVE_TYPE_DEF */,
    /* FIXME: elementSetName COULD_NOT_RESOLVE_TYPE_DEF */,
    new $.ComponentSpec("recordSyntax", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("schema", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("description", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("detailsPerElement", true, $.hasTag(_TagClass.context, 6))
];

/**
 * @summary The Trailing Root Component Types of ElementSetDetails
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ElementSetDetails: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ElementSetDetails
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ElementSetDetails: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ElementSetDetails: $.ASN1Decoder<ElementSetDetails> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ElementSetDetails
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ElementSetDetails (el: _Element): ElementSetDetails {
    if (!_cached_decoder_for_ElementSetDetails) { _cached_decoder_for_ElementSetDetails = function (el: _Element): ElementSetDetails {
    let commonInfo: OPTIONAL<CommonInfo>;
    let databaseName!: DatabaseName;
    let elementSetName!: ElementSetName;
    let recordSyntax!: OBJECT_IDENTIFIER;
    let schema!: OBJECT_IDENTIFIER;
    let description: OPTIONAL<HumanString>;
    let detailsPerElement: OPTIONAL<PerElementDetails[]>;
    const callbacks: $.DecodingMap = {
        "commonInfo": (_el: _Element): void => { commonInfo = $._decode_implicit<CommonInfo>(() => _decode_CommonInfo)(_el); },
        "databaseName": (_el: _Element): void => { databaseName = $._decode_implicit<DatabaseName>(() => _decode_DatabaseName)(_el); },
        "elementSetName": (_el: _Element): void => { elementSetName = $._decode_implicit<ElementSetName>(() => _decode_ElementSetName)(_el); },
        "recordSyntax": (_el: _Element): void => { recordSyntax = $._decode_implicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier)(_el); },
        "schema": (_el: _Element): void => { schema = $._decode_implicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier)(_el); },
        "description": (_el: _Element): void => { description = $._decode_implicit<HumanString>(() => _decode_HumanString)(_el); },
        "detailsPerElement": (_el: _Element): void => { detailsPerElement = $._decode_implicit<PerElementDetails[]>(() => $._decodeSequenceOf<PerElementDetails>(() => _decode_PerElementDetails))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ElementSetDetails,
        _extension_additions_list_spec_for_ElementSetDetails,
        _root_component_type_list_2_spec_for_ElementSetDetails,
        undefined,
    );
    return new ElementSetDetails(
        commonInfo,
        databaseName,
        elementSetName,
        recordSyntax,
        schema,
        description,
        detailsPerElement
    );
}; }
    return _cached_decoder_for_ElementSetDetails(el);
}

let _cached_encoder_for_ElementSetDetails: $.ASN1Encoder<ElementSetDetails> | null = null;

/**
 * @summary Encodes a(n) ElementSetDetails into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ElementSetDetails, encoded as an ASN.1 Element.
 */
export
function _encode_ElementSetDetails (value: ElementSetDetails, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ElementSetDetails) { _cached_encoder_for_ElementSetDetails = function (value: ElementSetDetails, elGetter: $.ASN1Encoder<ElementSetDetails>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.commonInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_CommonInfo, $.BER)(value.commonInfo, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_DatabaseName, $.BER)(value.databaseName, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_ElementSetName, $.BER)(value.elementSetName, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeObjectIdentifier, $.BER)(value.recordSyntax, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => $._encodeObjectIdentifier, $.BER)(value.schema, $.BER),
            /* IF_ABSENT  */ ((value.description === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_HumanString, $.BER)(value.description, $.BER)),
            /* IF_ABSENT  */ ((value.detailsPerElement === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => $._encodeSequenceOf<PerElementDetails>(() => _encode_PerElementDetails, $.BER), $.BER)(value.detailsPerElement, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ElementSetDetails(value, elGetter);
}


/* eslint-enable */
