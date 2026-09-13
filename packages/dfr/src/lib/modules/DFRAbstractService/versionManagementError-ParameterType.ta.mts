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
import { DfrEntryName, _decode_DfrEntryName, _encode_DfrEntryName } from "../DFRAbstractService/DfrEntryName.ta.mjs";
// export { DfrEntryName, _decode_DfrEntryName, _encode_DfrEntryName } from "../DFRAbstractService/DfrEntryName.ta.mjs";
import { VersionManagementProblem, _enum_for_VersionManagementProblem, VersionManagementProblem_inappropriate_object_class /* IMPORTED_LONG_ENUMERATION_ITEM */, inappropriate_object_class /* IMPORTED_SHORT_ENUMERATION_ITEM */, VersionManagementProblem_belongs_to_another_conceptual_document /* IMPORTED_LONG_ENUMERATION_ITEM */, belongs_to_another_conceptual_document /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_VersionManagementProblem, _encode_VersionManagementProblem } from "../DFRAbstractService/VersionManagementProblem.ta.mjs";
// export { VersionManagementProblem, _enum_for_VersionManagementProblem, VersionManagementProblem_inappropriate_object_class /* IMPORTED_LONG_ENUMERATION_ITEM */, inappropriate_object_class /* IMPORTED_SHORT_ENUMERATION_ITEM */, VersionManagementProblem_belongs_to_another_conceptual_document /* IMPORTED_LONG_ENUMERATION_ITEM */, belongs_to_another_conceptual_document /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_VersionManagementProblem, _encode_VersionManagementProblem } from "../DFRAbstractService/VersionManagementProblem.ta.mjs";


/**
 * @summary versionManagementError_ParameterType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * versionManagementError-ParameterType ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class versionManagementError_ParameterType {
    constructor (
        /**
         * @summary `entry`.
         * @public
         * @readonly
         */
        readonly entry: DfrEntryName,
        /**
         * @summary `problem`.
         * @public
         * @readonly
         */
        readonly problem: VersionManagementProblem
    ) {}

    /**
     * @summary Restructures an object into a versionManagementError_ParameterType
     * @description
     * 
     * This takes an `object` and converts it to a `versionManagementError_ParameterType`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `versionManagementError_ParameterType`.
     * @returns {versionManagementError_ParameterType}
     */
    public static _from_object (_o: { [_K in keyof (versionManagementError_ParameterType)]: (versionManagementError_ParameterType)[_K] }): versionManagementError_ParameterType {
        return new versionManagementError_ParameterType(_o.entry, _o.problem);
    }

        /**
         * @summary The enum used as the type of the component `problem`
         * @public
         * @static
         */

    public static _enum_for_problem = _enum_for_VersionManagementProblem;
}

/**
 * @summary The Leading Root Component Types of versionManagementError_ParameterType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_versionManagementError_ParameterType: $.ComponentSpec[] = [
    new $.ComponentSpec("entry", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("problem", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of versionManagementError_ParameterType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_versionManagementError_ParameterType: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of versionManagementError_ParameterType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_versionManagementError_ParameterType: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_versionManagementError_ParameterType: $.ASN1Decoder<versionManagementError_ParameterType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) versionManagementError_ParameterType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_versionManagementError_ParameterType (el: _Element): versionManagementError_ParameterType {
    if (!_cached_decoder_for_versionManagementError_ParameterType) { _cached_decoder_for_versionManagementError_ParameterType = function (el: _Element): versionManagementError_ParameterType {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("versionManagementError-ParameterType contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "entry";
    sequence[1].name = "problem";
    let entry!: DfrEntryName;
    let problem!: VersionManagementProblem;
    entry = $._decode_explicit<DfrEntryName>(() => _decode_DfrEntryName)(sequence[0]);
    problem = $._decode_implicit<VersionManagementProblem>(() => _decode_VersionManagementProblem)(sequence[1]);
    return new versionManagementError_ParameterType(
        entry,
        problem,

    );
}; }
    return _cached_decoder_for_versionManagementError_ParameterType(el);
}

let _cached_encoder_for_versionManagementError_ParameterType: $.ASN1Encoder<versionManagementError_ParameterType> | null = null;

/**
 * @summary Encodes a(n) versionManagementError_ParameterType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The versionManagementError_ParameterType, encoded as an ASN.1 Element.
 */
export
function _encode_versionManagementError_ParameterType (value: versionManagementError_ParameterType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_versionManagementError_ParameterType) { _cached_encoder_for_versionManagementError_ParameterType = function (value: versionManagementError_ParameterType, elGetter: $.ASN1Encoder<versionManagementError_ParameterType>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_DfrEntryName, $.BER)(value.entry, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_VersionManagementProblem, $.BER)(value.problem, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_versionManagementError_ParameterType(value, elGetter);
}


/* eslint-enable */
