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



/**
 * @summary Datagroup
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Datagroup  ::=  INTEGER {
 *     dg1(1), dg2(2), dg3(3), dg4(4), dg5(5), dg6(6),
 *     dg7(7), dg8(8), dg9(9), dg10(10), dg11(11),
 *     dg12(12), dg13(13), dg14(14), dg15(15), dg16(16),
 *     sod(20), com(21) }
 * ```
 */
export
type Datagroup = INTEGER;

/**
 * @summary Datagroup_dg1
 * @constant
 * @type {number}
 */
export
const Datagroup_dg1: Datagroup = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Datagroup_dg1
 * @constant
 * @type {number}
 */
export
const dg1: Datagroup = Datagroup_dg1; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Datagroup_dg2
 * @constant
 * @type {number}
 */
export
const Datagroup_dg2: Datagroup = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Datagroup_dg2
 * @constant
 * @type {number}
 */
export
const dg2: Datagroup = Datagroup_dg2; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Datagroup_dg3
 * @constant
 * @type {number}
 */
export
const Datagroup_dg3: Datagroup = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Datagroup_dg3
 * @constant
 * @type {number}
 */
export
const dg3: Datagroup = Datagroup_dg3; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Datagroup_dg4
 * @constant
 * @type {number}
 */
export
const Datagroup_dg4: Datagroup = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Datagroup_dg4
 * @constant
 * @type {number}
 */
export
const dg4: Datagroup = Datagroup_dg4; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Datagroup_dg5
 * @constant
 * @type {number}
 */
export
const Datagroup_dg5: Datagroup = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Datagroup_dg5
 * @constant
 * @type {number}
 */
export
const dg5: Datagroup = Datagroup_dg5; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Datagroup_dg6
 * @constant
 * @type {number}
 */
export
const Datagroup_dg6: Datagroup = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Datagroup_dg6
 * @constant
 * @type {number}
 */
export
const dg6: Datagroup = Datagroup_dg6; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Datagroup_dg7
 * @constant
 * @type {number}
 */
export
const Datagroup_dg7: Datagroup = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Datagroup_dg7
 * @constant
 * @type {number}
 */
export
const dg7: Datagroup = Datagroup_dg7; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Datagroup_dg8
 * @constant
 * @type {number}
 */
export
const Datagroup_dg8: Datagroup = 8; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Datagroup_dg8
 * @constant
 * @type {number}
 */
export
const dg8: Datagroup = Datagroup_dg8; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Datagroup_dg9
 * @constant
 * @type {number}
 */
export
const Datagroup_dg9: Datagroup = 9; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Datagroup_dg9
 * @constant
 * @type {number}
 */
export
const dg9: Datagroup = Datagroup_dg9; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Datagroup_dg10
 * @constant
 * @type {number}
 */
export
const Datagroup_dg10: Datagroup = 10; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Datagroup_dg10
 * @constant
 * @type {number}
 */
export
const dg10: Datagroup = Datagroup_dg10; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Datagroup_dg11
 * @constant
 * @type {number}
 */
export
const Datagroup_dg11: Datagroup = 11; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Datagroup_dg11
 * @constant
 * @type {number}
 */
export
const dg11: Datagroup = Datagroup_dg11; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Datagroup_dg12
 * @constant
 * @type {number}
 */
export
const Datagroup_dg12: Datagroup = 12; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Datagroup_dg12
 * @constant
 * @type {number}
 */
export
const dg12: Datagroup = Datagroup_dg12; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Datagroup_dg13
 * @constant
 * @type {number}
 */
export
const Datagroup_dg13: Datagroup = 13; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Datagroup_dg13
 * @constant
 * @type {number}
 */
export
const dg13: Datagroup = Datagroup_dg13; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Datagroup_dg14
 * @constant
 * @type {number}
 */
export
const Datagroup_dg14: Datagroup = 14; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Datagroup_dg14
 * @constant
 * @type {number}
 */
export
const dg14: Datagroup = Datagroup_dg14; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Datagroup_dg15
 * @constant
 * @type {number}
 */
export
const Datagroup_dg15: Datagroup = 15; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Datagroup_dg15
 * @constant
 * @type {number}
 */
export
const dg15: Datagroup = Datagroup_dg15; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Datagroup_dg16
 * @constant
 * @type {number}
 */
export
const Datagroup_dg16: Datagroup = 16; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Datagroup_dg16
 * @constant
 * @type {number}
 */
export
const dg16: Datagroup = Datagroup_dg16; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Datagroup_sod
 * @constant
 * @type {number}
 */
export
const Datagroup_sod: Datagroup = 20; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Datagroup_sod
 * @constant
 * @type {number}
 */
export
const sod: Datagroup = Datagroup_sod; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Datagroup_com
 * @constant
 * @type {number}
 */
export
const Datagroup_com: Datagroup = 21; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Datagroup_com
 * @constant
 * @type {number}
 */
export
const com: Datagroup = Datagroup_com; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_Datagroup: $.ASN1Decoder<Datagroup> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Datagroup
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Datagroup (el: _Element): Datagroup {
    if (!_cached_decoder_for_Datagroup) { _cached_decoder_for_Datagroup = $._decodeInteger; }
    return _cached_decoder_for_Datagroup(el);
}

let _cached_encoder_for_Datagroup: $.ASN1Encoder<Datagroup> | null = null;

/**
 * @summary Encodes a(n) Datagroup into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Datagroup, encoded as an ASN.1 Element.
 */
export
function _encode_Datagroup (value: Datagroup, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Datagroup) { _cached_encoder_for_Datagroup = $._encodeInteger; }
    return _cached_encoder_for_Datagroup(value, elGetter);
}


/* eslint-enable */
