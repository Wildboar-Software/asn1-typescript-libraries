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
import { V8bisDiag_Item, _decode_V8bisDiag_Item, _encode_V8bisDiag_Item } from "../V59/V8bisDiag-Item.ta.mjs";
// export { V8bisDiag_Item, _decode_V8bisDiag_Item, _encode_V8bisDiag_Item } from "../V59/V8bisDiag-Item.ta.mjs";


/**
 * @summary V8bisDiag
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * V8bisDiag  ::= 
 *   SEQUENCE OF
 *     SEQUENCE {v8bisTransaction  INTEGER(1..13),
 *               mR
 *                 SEQUENCE {mRtype      V8bisSignalType,
 *                           mRSequence  V59String},
 *               cR
 *                 SEQUENCE {cRtype      V8bisSignalType,
 *                           cRSequence  V59String},
 *               cL                SEQUENCE {cLSequence  V59String},
 *               cLR               SEQUENCE {cLRSequence  V59String},
 *               eS
 *                 SEQUENCE {eSType
 *                             CHOICE {nONE  INTEGER(0),
 *                                     i     INTEGER(1),
 *                                     r     INTEGER(2)},
 *                           eSSequence  V59String},
 *               ackNak
 *                 SEQUENCE {aCK
 *                             CHOICE {nONE  INTEGER(0),
 *                                     aCK1  INTEGER(1),
 *                                     aCK2  INTEGER(2)},
 *                           nAK
 *                             CHOICE {none  INTEGER(0),
 *                                     nAK1  INTEGER(1),
 *                                     nAK2  INTEGER(2),
 *                                     nAK3  INTEGER(3),
 *                                     nAK4  INTEGER(4)}}}
 * ```
 */
export
type V8bisDiag = V8bisDiag_Item[]; // SequenceOfType

let _cached_decoder_for_V8bisDiag: $.ASN1Decoder<V8bisDiag> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) V8bisDiag
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_V8bisDiag (el: _Element): V8bisDiag {
    if (!_cached_decoder_for_V8bisDiag) { _cached_decoder_for_V8bisDiag = $._decodeSequenceOf<V8bisDiag_Item>(() => _decode_V8bisDiag_Item); }
    return _cached_decoder_for_V8bisDiag(el);
}

let _cached_encoder_for_V8bisDiag: $.ASN1Encoder<V8bisDiag> | null = null;

/**
 * @summary Encodes a(n) V8bisDiag into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The V8bisDiag, encoded as an ASN.1 Element.
 */
export
function _encode_V8bisDiag (value: V8bisDiag, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_V8bisDiag) { _cached_encoder_for_V8bisDiag = $._encodeSequenceOf<V8bisDiag_Item>(() => _encode_V8bisDiag_Item, $.BER); }
    return _cached_encoder_for_V8bisDiag(value, elGetter);
}


/* eslint-enable */
