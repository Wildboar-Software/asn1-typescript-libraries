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
import { ECPoint, _decode_ECPoint, _encode_ECPoint } from "../SEC1-v1-9/ECPoint.ta.js";
export { ECPoint, _decode_ECPoint, _encode_ECPoint } from "../SEC1-v1-9/ECPoint.ta.js";


/* START_OF_SYMBOL_DEFINITION NamedMultiples */
/**
 * @summary NamedMultiples
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NamedMultiples ::= SEQUENCE {
 *     multiples OBJECT IDENTIFIER,
 *     points SEQUENCE OF ECPoint }
 * ```
 * 
 * @class
 */
export
class NamedMultiples {
    constructor (
        /**
         * @summary `multiples`.
         * @public
         * @readonly
         */
        readonly multiples: OBJECT_IDENTIFIER,
        /**
         * @summary `points`.
         * @public
         * @readonly
         */
        readonly points: ECPoint[]
    ) {}

    /**
     * @summary Restructures an object into a NamedMultiples
     * @description
     * 
     * This takes an `object` and converts it to a `NamedMultiples`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NamedMultiples`.
     * @returns {NamedMultiples}
     */
    public static _from_object (_o: { [_K in keyof (NamedMultiples)]: (NamedMultiples)[_K] }): NamedMultiples {
        return new NamedMultiples(_o.multiples, _o.points);
    }


}
/* END_OF_SYMBOL_DEFINITION NamedMultiples */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_NamedMultiples */
/**
 * @summary The Leading Root Component Types of NamedMultiples
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NamedMultiples: $.ComponentSpec[] = [
    new $.ComponentSpec("multiples", false, $.hasTag(_TagClass.universal, 6), undefined, undefined),
    new $.ComponentSpec("points", false, $.hasTag(_TagClass.universal, 16), undefined, undefined)
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_NamedMultiples */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_NamedMultiples */
/**
 * @summary The Trailing Root Component Types of NamedMultiples
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NamedMultiples: $.ComponentSpec[] = [
    
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_NamedMultiples */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_NamedMultiples */
/**
 * @summary The Extension Addition Component Types of NamedMultiples
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NamedMultiples: $.ComponentSpec[] = [
    
];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_NamedMultiples */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NamedMultiples */
let _cached_decoder_for_NamedMultiples: $.ASN1Decoder<NamedMultiples> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NamedMultiples */

/* START_OF_SYMBOL_DEFINITION _decode_NamedMultiples */
/**
 * @summary Decodes an ASN.1 element into a(n) NamedMultiples
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NamedMultiples} The decoded data structure.
 */
export
function _decode_NamedMultiples (el: _Element) {
    if (!_cached_decoder_for_NamedMultiples) { _cached_decoder_for_NamedMultiples = function (el: _Element): NamedMultiples {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("NamedMultiples contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "multiples";
    sequence[1].name = "points";
    let multiples!: OBJECT_IDENTIFIER;
    let points!: ECPoint[];
    multiples = $._decodeObjectIdentifier(sequence[0]);
    points = $._decodeSequenceOf<ECPoint>(() => _decode_ECPoint)(sequence[1]);
    return new NamedMultiples(
        multiples,
        points,

    );
}; }
    return _cached_decoder_for_NamedMultiples(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_NamedMultiples */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NamedMultiples */
let _cached_encoder_for_NamedMultiples: $.ASN1Encoder<NamedMultiples> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NamedMultiples */

/* START_OF_SYMBOL_DEFINITION _encode_NamedMultiples */
/**
 * @summary Encodes a(n) NamedMultiples into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NamedMultiples, encoded as an ASN.1 Element.
 */
export
function _encode_NamedMultiples (value: NamedMultiples, elGetter: $.ASN1Encoder<NamedMultiples>) {
    if (!_cached_encoder_for_NamedMultiples) { _cached_encoder_for_NamedMultiples = function (value: NamedMultiples, elGetter: $.ASN1Encoder<NamedMultiples>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeObjectIdentifier(value.multiples, $.BER),
            /* REQUIRED   */ $._encodeSequenceOf<ECPoint>(() => _encode_ECPoint, $.BER)(value.points, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_NamedMultiples(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_NamedMultiples */

/* eslint-enable */
