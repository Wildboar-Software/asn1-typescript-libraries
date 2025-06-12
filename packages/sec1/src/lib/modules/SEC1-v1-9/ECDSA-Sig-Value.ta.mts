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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { ECDSA_Sig_Value_y, _decode_ECDSA_Sig_Value_y, _encode_ECDSA_Sig_Value_y } from "../SEC1-v1-9/ECDSA-Sig-Value-y.ta.mjs";
export { ECDSA_Sig_Value_y, _decode_ECDSA_Sig_Value_y, _encode_ECDSA_Sig_Value_y } from "../SEC1-v1-9/ECDSA-Sig-Value-y.ta.mjs";


/* START_OF_SYMBOL_DEFINITION ECDSA_Sig_Value */
/**
 * @summary ECDSA_Sig_Value
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ECDSA-Sig-Value ::= SEQUENCE {
 *     r INTEGER,
 *     s INTEGER,
 *     a INTEGER OPTIONAL,
 *     y CHOICE { b BOOLEAN, f FieldElement } OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ECDSA_Sig_Value {
    constructor (
        /**
         * @summary `r`.
         * @public
         * @readonly
         */
        readonly r: INTEGER,
        /**
         * @summary `s`.
         * @public
         * @readonly
         */
        readonly s: INTEGER,
        /**
         * @summary `a`.
         * @public
         * @readonly
         */
        readonly a: OPTIONAL<INTEGER>,
        /**
         * @summary `y`.
         * @public
         * @readonly
         */
        readonly y: OPTIONAL<ECDSA_Sig_Value_y>
    ) {}

    /**
     * @summary Restructures an object into a ECDSA_Sig_Value
     * @description
     * 
     * This takes an `object` and converts it to a `ECDSA_Sig_Value`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ECDSA_Sig_Value`.
     * @returns {ECDSA_Sig_Value}
     */
    public static _from_object (_o: { [_K in keyof (ECDSA_Sig_Value)]: (ECDSA_Sig_Value)[_K] }): ECDSA_Sig_Value {
        return new ECDSA_Sig_Value(_o.r, _o.s, _o.a, _o.y);
    }


}
/* END_OF_SYMBOL_DEFINITION ECDSA_Sig_Value */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ECDSA_Sig_Value */
/**
 * @summary The Leading Root Component Types of ECDSA_Sig_Value
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ECDSA_Sig_Value: $.ComponentSpec[] = [
    new $.ComponentSpec("r", false, $.hasTag(_TagClass.universal, 2), undefined, undefined),
    new $.ComponentSpec("s", false, $.hasTag(_TagClass.universal, 2), undefined, undefined),
    new $.ComponentSpec("a", true, $.hasTag(_TagClass.universal, 2), undefined, undefined),
    new $.ComponentSpec("y", true, $.hasAnyTag, undefined, undefined)
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ECDSA_Sig_Value */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ECDSA_Sig_Value */
/**
 * @summary The Trailing Root Component Types of ECDSA_Sig_Value
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ECDSA_Sig_Value: $.ComponentSpec[] = [
    
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ECDSA_Sig_Value */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ECDSA_Sig_Value */
/**
 * @summary The Extension Addition Component Types of ECDSA_Sig_Value
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ECDSA_Sig_Value: $.ComponentSpec[] = [
    
];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ECDSA_Sig_Value */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ECDSA_Sig_Value */
let _cached_decoder_for_ECDSA_Sig_Value: $.ASN1Decoder<ECDSA_Sig_Value> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ECDSA_Sig_Value */

/* START_OF_SYMBOL_DEFINITION _decode_ECDSA_Sig_Value */
/**
 * @summary Decodes an ASN.1 element into a(n) ECDSA_Sig_Value
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ECDSA_Sig_Value} The decoded data structure.
 */
export
function _decode_ECDSA_Sig_Value (el: _Element) {
    if (!_cached_decoder_for_ECDSA_Sig_Value) { _cached_decoder_for_ECDSA_Sig_Value = function (el: _Element): ECDSA_Sig_Value {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let r!: INTEGER;
    let s!: INTEGER;
    let a: OPTIONAL<INTEGER>;
    let y: OPTIONAL<ECDSA_Sig_Value_y>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "r": (_el: _Element): void => { r = $._decodeInteger(_el); },
        "s": (_el: _Element): void => { s = $._decodeInteger(_el); },
        "a": (_el: _Element): void => { a = $._decodeInteger(_el); },
        "y": (_el: _Element): void => { y = _decode_ECDSA_Sig_Value_y(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ECDSA_Sig_Value,
        _extension_additions_list_spec_for_ECDSA_Sig_Value,
        _root_component_type_list_2_spec_for_ECDSA_Sig_Value,
        undefined,
    );
    return new ECDSA_Sig_Value( /* SEQUENCE_CONSTRUCTOR_CALL */
        r,
        s,
        a,
        y
    );
}; }
    return _cached_decoder_for_ECDSA_Sig_Value(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ECDSA_Sig_Value */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ECDSA_Sig_Value */
let _cached_encoder_for_ECDSA_Sig_Value: $.ASN1Encoder<ECDSA_Sig_Value> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ECDSA_Sig_Value */

/* START_OF_SYMBOL_DEFINITION _encode_ECDSA_Sig_Value */
/**
 * @summary Encodes a(n) ECDSA_Sig_Value into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ECDSA_Sig_Value, encoded as an ASN.1 Element.
 */
export
function _encode_ECDSA_Sig_Value (value: ECDSA_Sig_Value, elGetter: $.ASN1Encoder<ECDSA_Sig_Value>) {
    if (!_cached_encoder_for_ECDSA_Sig_Value) { _cached_encoder_for_ECDSA_Sig_Value = function (value: ECDSA_Sig_Value, elGetter: $.ASN1Encoder<ECDSA_Sig_Value>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeInteger(value.r, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.s, $.BER),
            /* IF_ABSENT  */ ((value.a === undefined) ? undefined : $._encodeInteger(value.a, $.BER)),
            /* IF_ABSENT  */ ((value.y === undefined) ? undefined : _encode_ECDSA_Sig_Value_y(value.y, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ECDSA_Sig_Value(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ECDSA_Sig_Value */

/* eslint-enable */
