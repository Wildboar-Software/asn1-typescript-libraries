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


/* START_OF_SYMBOL_DEFINITION ECIES_Ciphertext_Value */
/**
 * @summary ECIES_Ciphertext_Value
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ECIES-Ciphertext-Value ::= SEQUENCE {
 *     ephemeralPublicKey ECPoint,
 *     symmetricCiphertext OCTET STRING,
 *     macTag OCTET STRING
 * }
 * ```
 * 
 * @class
 */
export
class ECIES_Ciphertext_Value {
    constructor (
        /**
         * @summary `ephemeralPublicKey`.
         * @public
         * @readonly
         */
        readonly ephemeralPublicKey: ECPoint,
        /**
         * @summary `symmetricCiphertext`.
         * @public
         * @readonly
         */
        readonly symmetricCiphertext: OCTET_STRING,
        /**
         * @summary `macTag`.
         * @public
         * @readonly
         */
        readonly macTag: OCTET_STRING
    ) {}

    /**
     * @summary Restructures an object into a ECIES_Ciphertext_Value
     * @description
     * 
     * This takes an `object` and converts it to a `ECIES_Ciphertext_Value`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ECIES_Ciphertext_Value`.
     * @returns {ECIES_Ciphertext_Value}
     */
    public static _from_object (_o: { [_K in keyof (ECIES_Ciphertext_Value)]: (ECIES_Ciphertext_Value)[_K] }): ECIES_Ciphertext_Value {
        return new ECIES_Ciphertext_Value(_o.ephemeralPublicKey, _o.symmetricCiphertext, _o.macTag);
    }


}
/* END_OF_SYMBOL_DEFINITION ECIES_Ciphertext_Value */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ECIES_Ciphertext_Value */
/**
 * @summary The Leading Root Component Types of ECIES_Ciphertext_Value
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ECIES_Ciphertext_Value: $.ComponentSpec[] = [
    new $.ComponentSpec("ephemeralPublicKey", false, $.hasTag(_TagClass.universal, 4), undefined, undefined),
    new $.ComponentSpec("symmetricCiphertext", false, $.hasTag(_TagClass.universal, 4), undefined, undefined),
    new $.ComponentSpec("macTag", false, $.hasTag(_TagClass.universal, 4), undefined, undefined)
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ECIES_Ciphertext_Value */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ECIES_Ciphertext_Value */
/**
 * @summary The Trailing Root Component Types of ECIES_Ciphertext_Value
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ECIES_Ciphertext_Value: $.ComponentSpec[] = [
    
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ECIES_Ciphertext_Value */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ECIES_Ciphertext_Value */
/**
 * @summary The Extension Addition Component Types of ECIES_Ciphertext_Value
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ECIES_Ciphertext_Value: $.ComponentSpec[] = [
    
];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ECIES_Ciphertext_Value */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ECIES_Ciphertext_Value */
let _cached_decoder_for_ECIES_Ciphertext_Value: $.ASN1Decoder<ECIES_Ciphertext_Value> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ECIES_Ciphertext_Value */

/* START_OF_SYMBOL_DEFINITION _decode_ECIES_Ciphertext_Value */
/**
 * @summary Decodes an ASN.1 element into a(n) ECIES_Ciphertext_Value
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ECIES_Ciphertext_Value} The decoded data structure.
 */
export
function _decode_ECIES_Ciphertext_Value (el: _Element) {
    if (!_cached_decoder_for_ECIES_Ciphertext_Value) { _cached_decoder_for_ECIES_Ciphertext_Value = function (el: _Element): ECIES_Ciphertext_Value {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("ECIES-Ciphertext-Value contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "ephemeralPublicKey";
    sequence[1].name = "symmetricCiphertext";
    sequence[2].name = "macTag";
    let ephemeralPublicKey!: ECPoint;
    let symmetricCiphertext!: OCTET_STRING;
    let macTag!: OCTET_STRING;
    ephemeralPublicKey = _decode_ECPoint(sequence[0]);
    symmetricCiphertext = $._decodeOctetString(sequence[1]);
    macTag = $._decodeOctetString(sequence[2]);
    return new ECIES_Ciphertext_Value(
        ephemeralPublicKey,
        symmetricCiphertext,
        macTag,

    );
}; }
    return _cached_decoder_for_ECIES_Ciphertext_Value(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ECIES_Ciphertext_Value */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ECIES_Ciphertext_Value */
let _cached_encoder_for_ECIES_Ciphertext_Value: $.ASN1Encoder<ECIES_Ciphertext_Value> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ECIES_Ciphertext_Value */

/* START_OF_SYMBOL_DEFINITION _encode_ECIES_Ciphertext_Value */
/**
 * @summary Encodes a(n) ECIES_Ciphertext_Value into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ECIES_Ciphertext_Value, encoded as an ASN.1 Element.
 */
export
function _encode_ECIES_Ciphertext_Value (value: ECIES_Ciphertext_Value, elGetter: $.ASN1Encoder<ECIES_Ciphertext_Value>) {
    if (!_cached_encoder_for_ECIES_Ciphertext_Value) { _cached_encoder_for_ECIES_Ciphertext_Value = function (value: ECIES_Ciphertext_Value, elGetter: $.ASN1Encoder<ECIES_Ciphertext_Value>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ECPoint(value.ephemeralPublicKey, $.BER),
            /* REQUIRED   */ $._encodeOctetString(value.symmetricCiphertext, $.BER),
            /* REQUIRED   */ $._encodeOctetString(value.macTag, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ECIES_Ciphertext_Value(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ECIES_Ciphertext_Value */

/* eslint-enable */
