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
import { CnxDiag_Item, _decode_CnxDiag_Item, _encode_CnxDiag_Item } from "../V59/CnxDiag-Item.ta.mjs";
// export { CnxDiag_Item, _decode_CnxDiag_Item, _encode_CnxDiag_Item } from "../V59/CnxDiag-Item.ta.mjs";


/**
 * @summary CnxDiag
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CnxDiag  ::= 
 *   SEQUENCE OF
 *     SEQUENCE {txCarrier         V59String,
 *               rxCarrier         V59String,
 *               carrierLosses     INTEGER(0..256),
 *               renegRequests     INTEGER(0..256),
 *               renegSuccesses    INTEGER(0..256),
 *               retrainRequests   INTEGER(0..256),
 *               retrainSuccesses  INTEGER(0..256),
 *               callWaiting       INTEGER(0..256) OPTIONAL,
 *               duration          V59String OPTIONAL,
 *               caller            BOOLEAN,
 *               reverseRoles      BOOLEAN OPTIONAL,
 *               ...}
 * ```
 */
export
type CnxDiag = CnxDiag_Item[]; // SequenceOfType

let _cached_decoder_for_CnxDiag: $.ASN1Decoder<CnxDiag> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CnxDiag
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CnxDiag (el: _Element): CnxDiag {
    if (!_cached_decoder_for_CnxDiag) { _cached_decoder_for_CnxDiag = $._decodeSequenceOf<CnxDiag_Item>(() => _decode_CnxDiag_Item); }
    return _cached_decoder_for_CnxDiag(el);
}

let _cached_encoder_for_CnxDiag: $.ASN1Encoder<CnxDiag> | null = null;

/**
 * @summary Encodes a(n) CnxDiag into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CnxDiag, encoded as an ASN.1 Element.
 */
export
function _encode_CnxDiag (value: CnxDiag, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CnxDiag) { _cached_encoder_for_CnxDiag = $._encodeSequenceOf<CnxDiag_Item>(() => _encode_CnxDiag_Item, $.BER); }
    return _cached_encoder_for_CnxDiag(value, elGetter);
}


/* eslint-enable */
