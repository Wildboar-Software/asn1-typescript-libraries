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
import { AttributeCombinations, _decode_AttributeCombinations, _encode_AttributeCombinations } from "../RecordSyntax-explain/AttributeCombinations.ta.mjs";
// export { AttributeCombinations, _decode_AttributeCombinations, _encode_AttributeCombinations } from "../RecordSyntax-explain/AttributeCombinations.ta.mjs";
import { TermListDetails_scanInfo, _decode_TermListDetails_scanInfo, _encode_TermListDetails_scanInfo } from "../RecordSyntax-explain/TermListDetails-scanInfo.ta.mjs";
// export { TermListDetails_scanInfo, _decode_TermListDetails_scanInfo, _encode_TermListDetails_scanInfo } from "../RecordSyntax-explain/TermListDetails-scanInfo.ta.mjs";


/**
 * @summary TermListDetails
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TermListDetails ::= SEQUENCE{  -- one for each termList in TermListInfo
 *   commonInfo       [0] IMPLICIT CommonInfo OPTIONAL,
 *      -- Key elements follow:
 *   termListName     [1] IMPLICIT InternationalString,
 *      -- Non-key elements (all non-brief) follow:
 *   description      [2] IMPLICIT HumanString OPTIONAL,
 *   attributes       [3] IMPLICIT AttributeCombinations OPTIONAL,
 *                           -- Pattern for attributes that hit this list.
 *                           -- Mandatory in full record
 *   scanInfo         [4] IMPLICIT SEQUENCE {
 *                           maxStepSize        [0] IMPLICIT INTEGER OPTIONAL,
 *                           collatingSequence  [1] IMPLICIT HumanString OPTIONAL,
 *                           increasing         [2] IMPLICIT BOOLEAN OPTIONAL}
 *                                                         OPTIONAL,
 *                             -- Occurs only if list is scanable. 
 *                             -- If list is scanable and if scanInfo is omitted, 
 *                             -- target doesn't consider these important.
 *   estNumberTerms   [5] IMPLICIT INTEGER OPTIONAL,
 *   sampleTerms      [6] IMPLICIT SEQUENCE OF Term OPTIONAL}
 * ```
 * 
 * @class
 */
export
class TermListDetails {
    constructor (
        /**
         * @summary `commonInfo`.
         * @public
         * @readonly
         */
        readonly commonInfo: OPTIONAL<CommonInfo>,
        /**
         * @summary `termListName`.
         * @public
         * @readonly
         */
        readonly termListName: InternationalString,
        /**
         * @summary `description`.
         * @public
         * @readonly
         */
        readonly description: OPTIONAL<HumanString>,
        /**
         * @summary `attributes`.
         * @public
         * @readonly
         */
        readonly attributes: OPTIONAL<AttributeCombinations>,
        /**
         * @summary `scanInfo`.
         * @public
         * @readonly
         */
        readonly scanInfo: OPTIONAL<TermListDetails_scanInfo>,
        /**
         * @summary `estNumberTerms`.
         * @public
         * @readonly
         */
        readonly estNumberTerms: OPTIONAL<INTEGER>,
        /**
         * @summary `sampleTerms`.
         * @public
         * @readonly
         */
        readonly sampleTerms: OPTIONAL<Term[]>
    ) {}

    /**
     * @summary Restructures an object into a TermListDetails
     * @description
     * 
     * This takes an `object` and converts it to a `TermListDetails`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TermListDetails`.
     * @returns {TermListDetails}
     */
    public static _from_object (_o: { [_K in keyof (TermListDetails)]: (TermListDetails)[_K] }): TermListDetails {
        return new TermListDetails(_o.commonInfo, _o.termListName, _o.description, _o.attributes, _o.scanInfo, _o.estNumberTerms, _o.sampleTerms);
    }


}

/**
 * @summary The Leading Root Component Types of TermListDetails
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TermListDetails: $.ComponentSpec[] = [
    new $.ComponentSpec("commonInfo", true, $.hasTag(_TagClass.context, 0)),
    /* FIXME: termListName COULD_NOT_RESOLVE_TYPE_DEF */,
    new $.ComponentSpec("description", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("attributes", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("scanInfo", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("estNumberTerms", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("sampleTerms", true, $.hasTag(_TagClass.context, 6))
];

/**
 * @summary The Trailing Root Component Types of TermListDetails
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TermListDetails: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TermListDetails
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TermListDetails: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TermListDetails: $.ASN1Decoder<TermListDetails> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TermListDetails
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TermListDetails (el: _Element): TermListDetails {
    if (!_cached_decoder_for_TermListDetails) { _cached_decoder_for_TermListDetails = function (el: _Element): TermListDetails {
    let commonInfo: OPTIONAL<CommonInfo>;
    let termListName!: InternationalString;
    let description: OPTIONAL<HumanString>;
    let attributes: OPTIONAL<AttributeCombinations>;
    let scanInfo: OPTIONAL<TermListDetails_scanInfo>;
    let estNumberTerms: OPTIONAL<INTEGER>;
    let sampleTerms: OPTIONAL<Term[]>;
    const callbacks: $.DecodingMap = {
        "commonInfo": (_el: _Element): void => { commonInfo = $._decode_implicit<CommonInfo>(() => _decode_CommonInfo)(_el); },
        "termListName": (_el: _Element): void => { termListName = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "description": (_el: _Element): void => { description = $._decode_implicit<HumanString>(() => _decode_HumanString)(_el); },
        "attributes": (_el: _Element): void => { attributes = $._decode_implicit<AttributeCombinations>(() => _decode_AttributeCombinations)(_el); },
        "scanInfo": (_el: _Element): void => { scanInfo = $._decode_implicit<TermListDetails_scanInfo>(() => _decode_TermListDetails_scanInfo)(_el); },
        "estNumberTerms": (_el: _Element): void => { estNumberTerms = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "sampleTerms": (_el: _Element): void => { sampleTerms = $._decode_implicit<Term[]>(() => $._decodeSequenceOf<Term>(() => _decode_Term))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TermListDetails,
        _extension_additions_list_spec_for_TermListDetails,
        _root_component_type_list_2_spec_for_TermListDetails,
        undefined,
    );
    return new TermListDetails(
        commonInfo,
        termListName,
        description,
        attributes,
        scanInfo,
        estNumberTerms,
        sampleTerms
    );
}; }
    return _cached_decoder_for_TermListDetails(el);
}

let _cached_encoder_for_TermListDetails: $.ASN1Encoder<TermListDetails> | null = null;

/**
 * @summary Encodes a(n) TermListDetails into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TermListDetails, encoded as an ASN.1 Element.
 */
export
function _encode_TermListDetails (value: TermListDetails, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TermListDetails) { _cached_encoder_for_TermListDetails = function (value: TermListDetails, elGetter: $.ASN1Encoder<TermListDetails>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.commonInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_CommonInfo, $.BER)(value.commonInfo, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_InternationalString, $.BER)(value.termListName, $.BER),
            /* IF_ABSENT  */ ((value.description === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_HumanString, $.BER)(value.description, $.BER)),
            /* IF_ABSENT  */ ((value.attributes === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_AttributeCombinations, $.BER)(value.attributes, $.BER)),
            /* IF_ABSENT  */ ((value.scanInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_TermListDetails_scanInfo, $.BER)(value.scanInfo, $.BER)),
            /* IF_ABSENT  */ ((value.estNumberTerms === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => $._encodeInteger, $.BER)(value.estNumberTerms, $.BER)),
            /* IF_ABSENT  */ ((value.sampleTerms === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => $._encodeSequenceOf<Term>(() => _encode_Term, $.BER), $.BER)(value.sampleTerms, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TermListDetails(value, elGetter);
}


/* eslint-enable */
