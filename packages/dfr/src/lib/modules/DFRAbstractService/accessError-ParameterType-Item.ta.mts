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
import { AccessProblem, _enum_for_AccessProblem, AccessProblem_inappropriate_object_class /* IMPORTED_LONG_ENUMERATION_ITEM */, inappropriate_object_class /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessProblem_reserved_by_a_user /* IMPORTED_LONG_ENUMERATION_ITEM */, reserved_by_a_user /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessProblem_externally_located_object /* IMPORTED_LONG_ENUMERATION_ITEM */, externally_located_object /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AccessProblem, _encode_AccessProblem } from "../DFRAbstractService/AccessProblem.ta.mjs";
// export { AccessProblem, _enum_for_AccessProblem, AccessProblem_inappropriate_object_class /* IMPORTED_LONG_ENUMERATION_ITEM */, inappropriate_object_class /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessProblem_reserved_by_a_user /* IMPORTED_LONG_ENUMERATION_ITEM */, reserved_by_a_user /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessProblem_externally_located_object /* IMPORTED_LONG_ENUMERATION_ITEM */, externally_located_object /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AccessProblem, _encode_AccessProblem } from "../DFRAbstractService/AccessProblem.ta.mjs";


/**
 * @summary accessError_ParameterType_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * accessError-ParameterType-Item ::= SEQUENCE {
 *         entry       [0] DfrEntryName,
 *         problem     [1] AccessProblem
 *     }
 * ```
 * 
 * @class
 */
export
class accessError_ParameterType_Item {
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
        readonly problem: AccessProblem
    ) {}

    /**
     * @summary Restructures an object into a accessError_ParameterType_Item
     * @description
     * 
     * This takes an `object` and converts it to a `accessError_ParameterType_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `accessError_ParameterType_Item`.
     * @returns {accessError_ParameterType_Item}
     */
    public static _from_object (_o: { [_K in keyof (accessError_ParameterType_Item)]: (accessError_ParameterType_Item)[_K] }): accessError_ParameterType_Item {
        return new accessError_ParameterType_Item(_o.entry, _o.problem);
    }

        /**
         * @summary The enum used as the type of the component `problem`
         * @public
         * @static
         */

    public static _enum_for_problem = _enum_for_AccessProblem;
}

/**
 * @summary The Leading Root Component Types of accessError_ParameterType_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_accessError_ParameterType_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("entry", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("problem", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of accessError_ParameterType_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_accessError_ParameterType_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of accessError_ParameterType_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_accessError_ParameterType_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_accessError_ParameterType_Item: $.ASN1Decoder<accessError_ParameterType_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) accessError_ParameterType_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_accessError_ParameterType_Item (el: _Element): accessError_ParameterType_Item {
    if (!_cached_decoder_for_accessError_ParameterType_Item) { _cached_decoder_for_accessError_ParameterType_Item = function (el: _Element): accessError_ParameterType_Item {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("accessError-ParameterType-Item contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "entry";
    sequence[1].name = "problem";
    let entry!: DfrEntryName;
    let problem!: AccessProblem;
    entry = $._decode_explicit<DfrEntryName>(() => _decode_DfrEntryName)(sequence[0]);
    problem = $._decode_implicit<AccessProblem>(() => _decode_AccessProblem)(sequence[1]);
    return new accessError_ParameterType_Item(
        entry,
        problem,

    );
}; }
    return _cached_decoder_for_accessError_ParameterType_Item(el);
}

let _cached_encoder_for_accessError_ParameterType_Item: $.ASN1Encoder<accessError_ParameterType_Item> | null = null;

/**
 * @summary Encodes a(n) accessError_ParameterType_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The accessError_ParameterType_Item, encoded as an ASN.1 Element.
 */
export
function _encode_accessError_ParameterType_Item (value: accessError_ParameterType_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_accessError_ParameterType_Item) { _cached_encoder_for_accessError_ParameterType_Item = function (value: accessError_ParameterType_Item, elGetter: $.ASN1Encoder<accessError_ParameterType_Item>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_DfrEntryName, $.BER)(value.entry, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_AccessProblem, $.BER)(value.problem, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_accessError_ParameterType_Item(value, elGetter);
}


/* eslint-enable */
