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
import { FieldElement, _decode_FieldElement, _encode_FieldElement } from "../ANSI-X9-62/FieldElement.ta.mjs";
// export { FieldElement, _decode_FieldElement, _encode_FieldElement } from "../ANSI-X9-62/FieldElement.ta.mjs";


/**
 * @summary Curve
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Curve ::= SEQUENCE {
 *     a       FieldElement, -- Elliptic curve coefficient a
 *     b       FieldElement, -- Elliptic curve coefficient b
 *     seed    BIT STRING OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class Curve {
    constructor (
        /**
         * @summary `a`.
         * @public
         * @readonly
         */
        readonly a: FieldElement,
        /**
         * @summary `b`.
         * @public
         * @readonly
         */
        readonly b: FieldElement,
        /**
         * @summary `seed`.
         * @public
         * @readonly
         */
        readonly seed: OPTIONAL<BIT_STRING>
    ) {}

    /**
     * @summary Restructures an object into a Curve
     * @description
     * 
     * This takes an `object` and converts it to a `Curve`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Curve`.
     * @returns {Curve}
     */
    public static _from_object (_o: { [_K in keyof (Curve)]: (Curve)[_K] }): Curve {
        return new Curve(_o.a, _o.b, _o.seed);
    }


}

/**
 * @summary The Leading Root Component Types of Curve
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Curve: $.ComponentSpec[] = [
    new $.ComponentSpec("a", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("b", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("seed", true, $.hasTag(_TagClass.universal, 3))
];

/**
 * @summary The Trailing Root Component Types of Curve
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Curve: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Curve
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Curve: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Curve: $.ASN1Decoder<Curve> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Curve
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Curve (el: _Element): Curve {
    if (!_cached_decoder_for_Curve) { _cached_decoder_for_Curve = function (el: _Element): Curve {
    let a!: FieldElement;
    let b!: FieldElement;
    let seed: OPTIONAL<BIT_STRING>;
    const callbacks: $.DecodingMap = {
        "a": (_el: _Element): void => { a = _decode_FieldElement(_el); },
        "b": (_el: _Element): void => { b = _decode_FieldElement(_el); },
        "seed": (_el: _Element): void => { seed = $._decodeBitString(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Curve,
        _extension_additions_list_spec_for_Curve,
        _root_component_type_list_2_spec_for_Curve,
        undefined,
    );
    return new Curve(
        a,
        b,
        seed
    );
}; }
    return _cached_decoder_for_Curve(el);
}

let _cached_encoder_for_Curve: $.ASN1Encoder<Curve> | null = null;

/**
 * @summary Encodes a(n) Curve into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Curve, encoded as an ASN.1 Element.
 */
export
function _encode_Curve (value: Curve, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Curve) { _cached_encoder_for_Curve = function (value: Curve, elGetter: $.ASN1Encoder<Curve>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_FieldElement(value.a, $.BER),
            /* REQUIRED   */ _encode_FieldElement(value.b, $.BER),
            /* IF_ABSENT  */ ((value.seed === undefined) ? undefined : $._encodeBitString(value.seed, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Curve(value, elGetter);
}


/* eslint-enable */
