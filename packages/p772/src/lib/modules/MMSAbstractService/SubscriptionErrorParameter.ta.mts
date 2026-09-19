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
import { SubscriptionProblem, _enum_for_SubscriptionProblem, SubscriptionProblem_mms_eos_not_subcribed /* IMPORTED_LONG_ENUMERATION_ITEM */, mms_eos_not_subcribed /* IMPORTED_SHORT_ENUMERATION_ITEM */, SubscriptionProblem_mts_eos_not_subcribed /* IMPORTED_LONG_ENUMERATION_ITEM */, mts_eos_not_subcribed /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_SubscriptionProblem, _encode_SubscriptionProblem } from "../MMSAbstractService/SubscriptionProblem.ta.mjs";
// export { SubscriptionProblem, _enum_for_SubscriptionProblem, SubscriptionProblem_mms_eos_not_subcribed /* IMPORTED_LONG_ENUMERATION_ITEM */, mms_eos_not_subcribed /* IMPORTED_SHORT_ENUMERATION_ITEM */, SubscriptionProblem_mts_eos_not_subcribed /* IMPORTED_LONG_ENUMERATION_ITEM */, mts_eos_not_subcribed /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_SubscriptionProblem, _encode_SubscriptionProblem } from "../MMSAbstractService/SubscriptionProblem.ta.mjs";


/**
 * @summary SubscriptionErrorParameter
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SubscriptionErrorParameter ::= SET {problem  [0]  SubscriptionProblem}
 * ```
 * 
 * @class
 */
export
class SubscriptionErrorParameter {
    constructor (
        /**
         * @summary `problem`.
         * @public
         * @readonly
         */
        readonly problem: SubscriptionProblem
    ) {}

    /**
     * @summary Restructures an object into a SubscriptionErrorParameter
     * @description
     * 
     * This takes an `object` and converts it to a `SubscriptionErrorParameter`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SubscriptionErrorParameter`.
     * @returns {SubscriptionErrorParameter}
     */
    public static _from_object (_o: { [_K in keyof (SubscriptionErrorParameter)]: (SubscriptionErrorParameter)[_K] }): SubscriptionErrorParameter {
        return new SubscriptionErrorParameter(_o.problem);
    }

        /**
         * @summary The enum used as the type of the component `problem`
         * @public
         * @static
         */

    public static _enum_for_problem = _enum_for_SubscriptionProblem;
}

/**
 * @summary The Leading Root Component Types of SubscriptionErrorParameter
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SubscriptionErrorParameter: $.ComponentSpec[] = [
    new $.ComponentSpec("problem", false, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of SubscriptionErrorParameter
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SubscriptionErrorParameter: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SubscriptionErrorParameter
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SubscriptionErrorParameter: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SubscriptionErrorParameter: $.ASN1Decoder<SubscriptionErrorParameter> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SubscriptionErrorParameter
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SubscriptionErrorParameter (el: _Element): SubscriptionErrorParameter {
    if (!_cached_decoder_for_SubscriptionErrorParameter) { _cached_decoder_for_SubscriptionErrorParameter = function (el: _Element): SubscriptionErrorParameter {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let problem!: SubscriptionProblem;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "problem": (_el: _Element): void => { problem = $._decode_implicit<SubscriptionProblem>(() => _decode_SubscriptionProblem)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_SubscriptionErrorParameter,
        _extension_additions_list_spec_for_SubscriptionErrorParameter,
        _root_component_type_list_2_spec_for_SubscriptionErrorParameter,
        undefined,
    );
    return new SubscriptionErrorParameter( /* SET_CONSTRUCTOR_CALL */
        problem
    );
}; }
    return _cached_decoder_for_SubscriptionErrorParameter(el);
}

let _cached_encoder_for_SubscriptionErrorParameter: $.ASN1Encoder<SubscriptionErrorParameter> | null = null;

/**
 * @summary Encodes a(n) SubscriptionErrorParameter into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubscriptionErrorParameter, encoded as an ASN.1 Element.
 */
export
function _encode_SubscriptionErrorParameter (value: SubscriptionErrorParameter, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SubscriptionErrorParameter) { _cached_encoder_for_SubscriptionErrorParameter = function (value: SubscriptionErrorParameter, elGetter: $.ASN1Encoder<SubscriptionErrorParameter>): _Element {
    return $._encodeSet(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_SubscriptionProblem, $.BER)(value.problem, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SubscriptionErrorParameter(value, elGetter);
}


/* eslint-enable */
