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
import { InvokeId, _decode_InvokeId, _encode_InvokeId } from "../Facility-Information-Element-Components/InvokeId.ta.mjs";
// export { InvokeId, _decode_InvokeId, _encode_InvokeId } from "../Facility-Information-Element-Components/InvokeId.ta.mjs";


/**
 * @summary GFPInvokeIDSet
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GFPInvokeIDSet  ::=  InvokeId(WITH COMPONENTS {
 *                               present  (-32768..32767)
 *                             })
 * ```
 */
export
type GFPInvokeIDSet = InvokeId; // DefinedType

let _cached_decoder_for_GFPInvokeIDSet: $.ASN1Decoder<GFPInvokeIDSet> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GFPInvokeIDSet
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GFPInvokeIDSet (el: _Element): GFPInvokeIDSet {
    if (!_cached_decoder_for_GFPInvokeIDSet) { _cached_decoder_for_GFPInvokeIDSet = _decode_InvokeId; }
    return _cached_decoder_for_GFPInvokeIDSet(el);
}

let _cached_encoder_for_GFPInvokeIDSet: $.ASN1Encoder<GFPInvokeIDSet> | null = null;

/**
 * @summary Encodes a(n) GFPInvokeIDSet into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GFPInvokeIDSet, encoded as an ASN.1 Element.
 */
export
function _encode_GFPInvokeIDSet (value: GFPInvokeIDSet, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GFPInvokeIDSet) { _cached_encoder_for_GFPInvokeIDSet = _encode_InvokeId; }
    return _cached_encoder_for_GFPInvokeIDSet(value, elGetter);
}


/* eslint-enable */
