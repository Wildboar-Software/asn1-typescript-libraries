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
import { ECPoint, _decode_ECPoint, _encode_ECPoint } from "../SEC1-v1-9/ECPoint.ta.mjs";
export { ECPoint, _decode_ECPoint, _encode_ECPoint } from "../SEC1-v1-9/ECPoint.ta.mjs";


/* START_OF_SYMBOL_DEFINITION ECDSA_Full_R */
/**
 * @summary ECDSA_Full_R
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ECDSA-Full-R ::= SEQUENCE {
 *     r ECPoint,
 *     s INTEGER
 * }
 * ```
 * 
 * @class
 */
export
class ECDSA_Full_R {
    constructor (
        /**
         * @summary `r`.
         * @public
         * @readonly
         */
        readonly r: ECPoint,
        /**
         * @summary `s`.
         * @public
         * @readonly
         */
        readonly s: INTEGER
    ) {}

    /**
     * @summary Restructures an object into a ECDSA_Full_R
     * @description
     * 
     * This takes an `object` and converts it to a `ECDSA_Full_R`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ECDSA_Full_R`.
     * @returns {ECDSA_Full_R}
     */
    public static _from_object (_o: { [_K in keyof (ECDSA_Full_R)]: (ECDSA_Full_R)[_K] }): ECDSA_Full_R {
        return new ECDSA_Full_R(_o.r, _o.s);
    }


}
/* END_OF_SYMBOL_DEFINITION ECDSA_Full_R */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ECDSA_Full_R */
/**
 * @summary The Leading Root Component Types of ECDSA_Full_R
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ECDSA_Full_R: $.ComponentSpec[] = [
    new $.ComponentSpec("r", false, $.hasTag(_TagClass.universal, 4), undefined, undefined),
    new $.ComponentSpec("s", false, $.hasTag(_TagClass.universal, 2), undefined, undefined)
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ECDSA_Full_R */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ECDSA_Full_R */
/**
 * @summary The Trailing Root Component Types of ECDSA_Full_R
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ECDSA_Full_R: $.ComponentSpec[] = [
    
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ECDSA_Full_R */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ECDSA_Full_R */
/**
 * @summary The Extension Addition Component Types of ECDSA_Full_R
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ECDSA_Full_R: $.ComponentSpec[] = [
    
];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ECDSA_Full_R */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ECDSA_Full_R */
let _cached_decoder_for_ECDSA_Full_R: $.ASN1Decoder<ECDSA_Full_R> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ECDSA_Full_R */

/* START_OF_SYMBOL_DEFINITION _decode_ECDSA_Full_R */
/**
 * @summary Decodes an ASN.1 element into a(n) ECDSA_Full_R
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ECDSA_Full_R} The decoded data structure.
 */
export
function _decode_ECDSA_Full_R (el: _Element) {
    if (!_cached_decoder_for_ECDSA_Full_R) { _cached_decoder_for_ECDSA_Full_R = function (el: _Element): ECDSA_Full_R {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("ECDSA-Full-R contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "r";
    sequence[1].name = "s";
    let r!: ECPoint;
    let s!: INTEGER;
    r = _decode_ECPoint(sequence[0]);
    s = $._decodeInteger(sequence[1]);
    return new ECDSA_Full_R(
        r,
        s,

    );
}; }
    return _cached_decoder_for_ECDSA_Full_R(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ECDSA_Full_R */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ECDSA_Full_R */
let _cached_encoder_for_ECDSA_Full_R: $.ASN1Encoder<ECDSA_Full_R> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ECDSA_Full_R */

/* START_OF_SYMBOL_DEFINITION _encode_ECDSA_Full_R */
/**
 * @summary Encodes a(n) ECDSA_Full_R into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ECDSA_Full_R, encoded as an ASN.1 Element.
 */
export
function _encode_ECDSA_Full_R (value: ECDSA_Full_R, elGetter: $.ASN1Encoder<ECDSA_Full_R>) {
    if (!_cached_encoder_for_ECDSA_Full_R) { _cached_encoder_for_ECDSA_Full_R = function (value: ECDSA_Full_R, elGetter: $.ASN1Encoder<ECDSA_Full_R>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ECPoint(value.r, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.s, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ECDSA_Full_R(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ECDSA_Full_R */

/* eslint-enable */
