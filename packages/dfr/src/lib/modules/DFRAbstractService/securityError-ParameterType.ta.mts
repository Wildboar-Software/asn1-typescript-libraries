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
import { SecurityProblem, _enum_for_SecurityProblem, SecurityProblem_inappropriate_authentication /* IMPORTED_LONG_ENUMERATION_ITEM */, inappropriate_authentication /* IMPORTED_SHORT_ENUMERATION_ITEM */, SecurityProblem_invalid_creds /* IMPORTED_LONG_ENUMERATION_ITEM */, invalid_creds /* IMPORTED_SHORT_ENUMERATION_ITEM */, SecurityProblem_invalid_privilege /* IMPORTED_LONG_ENUMERATION_ITEM */, invalid_privilege /* IMPORTED_SHORT_ENUMERATION_ITEM */, SecurityProblem_invalid_pac /* IMPORTED_LONG_ENUMERATION_ITEM */, invalid_pac /* IMPORTED_SHORT_ENUMERATION_ITEM */, SecurityProblem_already_active /* IMPORTED_LONG_ENUMERATION_ITEM */, already_active /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_SecurityProblem, _encode_SecurityProblem } from "../DFRAbstractService/SecurityProblem.ta.mjs";
// export { SecurityProblem, _enum_for_SecurityProblem, SecurityProblem_inappropriate_authentication /* IMPORTED_LONG_ENUMERATION_ITEM */, inappropriate_authentication /* IMPORTED_SHORT_ENUMERATION_ITEM */, SecurityProblem_invalid_creds /* IMPORTED_LONG_ENUMERATION_ITEM */, invalid_creds /* IMPORTED_SHORT_ENUMERATION_ITEM */, SecurityProblem_invalid_privilege /* IMPORTED_LONG_ENUMERATION_ITEM */, invalid_privilege /* IMPORTED_SHORT_ENUMERATION_ITEM */, SecurityProblem_invalid_pac /* IMPORTED_LONG_ENUMERATION_ITEM */, invalid_pac /* IMPORTED_SHORT_ENUMERATION_ITEM */, SecurityProblem_already_active /* IMPORTED_LONG_ENUMERATION_ITEM */, already_active /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_SecurityProblem, _encode_SecurityProblem } from "../DFRAbstractService/SecurityProblem.ta.mjs";


/**
 * @summary securityError_ParameterType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * securityError-ParameterType ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class securityError_ParameterType {
    constructor (
        /**
         * @summary `problem`.
         * @public
         * @readonly
         */
        readonly problem: SecurityProblem
    ) {}

    /**
     * @summary Restructures an object into a securityError_ParameterType
     * @description
     * 
     * This takes an `object` and converts it to a `securityError_ParameterType`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `securityError_ParameterType`.
     * @returns {securityError_ParameterType}
     */
    public static _from_object (_o: { [_K in keyof (securityError_ParameterType)]: (securityError_ParameterType)[_K] }): securityError_ParameterType {
        return new securityError_ParameterType(_o.problem);
    }

        /**
         * @summary The enum used as the type of the component `problem`
         * @public
         * @static
         */

    public static _enum_for_problem = _enum_for_SecurityProblem;
}

/**
 * @summary The Leading Root Component Types of securityError_ParameterType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_securityError_ParameterType: $.ComponentSpec[] = [
    new $.ComponentSpec("problem", false, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of securityError_ParameterType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_securityError_ParameterType: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of securityError_ParameterType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_securityError_ParameterType: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_securityError_ParameterType: $.ASN1Decoder<securityError_ParameterType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) securityError_ParameterType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_securityError_ParameterType (el: _Element): securityError_ParameterType {
    if (!_cached_decoder_for_securityError_ParameterType) { _cached_decoder_for_securityError_ParameterType = function (el: _Element): securityError_ParameterType {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("securityError-ParameterType contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "problem";
    let problem!: SecurityProblem;
    problem = $._decode_implicit<SecurityProblem>(() => _decode_SecurityProblem)(sequence[0]);
    return new securityError_ParameterType(
        problem,

    );
}; }
    return _cached_decoder_for_securityError_ParameterType(el);
}

let _cached_encoder_for_securityError_ParameterType: $.ASN1Encoder<securityError_ParameterType> | null = null;

/**
 * @summary Encodes a(n) securityError_ParameterType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The securityError_ParameterType, encoded as an ASN.1 Element.
 */
export
function _encode_securityError_ParameterType (value: securityError_ParameterType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_securityError_ParameterType) { _cached_encoder_for_securityError_ParameterType = function (value: securityError_ParameterType, elGetter: $.ASN1Encoder<securityError_ParameterType>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_SecurityProblem, $.BER)(value.problem, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_securityError_ParameterType(value, elGetter);
}


/* eslint-enable */
