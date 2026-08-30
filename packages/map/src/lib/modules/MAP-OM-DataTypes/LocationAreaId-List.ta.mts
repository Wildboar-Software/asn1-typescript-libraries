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
import { LAIFixedLength, _decode_LAIFixedLength, _encode_LAIFixedLength } from "../MAP-CommonDataTypes/LAIFixedLength.ta.mjs";
// export { LAIFixedLength, _decode_LAIFixedLength, _encode_LAIFixedLength } from "../MAP-CommonDataTypes/LAIFixedLength.ta.mjs";


/**
 * @summary LocationAreaId_List
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LocationAreaId-List  ::=  SEQUENCE SIZE (1..8) OF
 *     LAIFixedLength
 * ```
 */
export
type LocationAreaId_List = LAIFixedLength[]; // SequenceOfType

let _cached_decoder_for_LocationAreaId_List: $.ASN1Decoder<LocationAreaId_List> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LocationAreaId_List
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LocationAreaId_List (el: _Element): LocationAreaId_List {
    if (!_cached_decoder_for_LocationAreaId_List) { _cached_decoder_for_LocationAreaId_List = $._decodeSequenceOf<LAIFixedLength>(() => _decode_LAIFixedLength); }
    return _cached_decoder_for_LocationAreaId_List(el);
}

let _cached_encoder_for_LocationAreaId_List: $.ASN1Encoder<LocationAreaId_List> | null = null;

/**
 * @summary Encodes a(n) LocationAreaId_List into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LocationAreaId_List, encoded as an ASN.1 Element.
 */
export
function _encode_LocationAreaId_List (value: LocationAreaId_List, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LocationAreaId_List) { _cached_encoder_for_LocationAreaId_List = $._encodeSequenceOf<LAIFixedLength>(() => _encode_LAIFixedLength, $.BER); }
    return _cached_encoder_for_LocationAreaId_List(value, elGetter);
}


/* eslint-enable */
