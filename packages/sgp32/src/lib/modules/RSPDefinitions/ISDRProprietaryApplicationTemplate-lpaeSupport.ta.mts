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
 * @summary ISDRProprietaryApplicationTemplate_lpaeSupport
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ISDRProprietaryApplicationTemplate-lpaeSupport ::= BIT STRING { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type ISDRProprietaryApplicationTemplate_lpaeSupport = BIT_STRING;

/**
 * @summary ISDRProprietaryApplicationTemplate_lpaeSupport_lpaeUsingCat
 * @constant
 */
export
const ISDRProprietaryApplicationTemplate_lpaeSupport_lpaeUsingCat: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary lpaeUsingCat
 * @constant
 */
export
const lpaeUsingCat: number = ISDRProprietaryApplicationTemplate_lpaeSupport_lpaeUsingCat; /* SHORT_NAMED_BIT */

/**
 * @summary ISDRProprietaryApplicationTemplate_lpaeSupport_lpaeUsingScws
 * @constant
 */
export
const ISDRProprietaryApplicationTemplate_lpaeSupport_lpaeUsingScws: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary lpaeUsingScws
 * @constant
 */
export
const lpaeUsingScws: number = ISDRProprietaryApplicationTemplate_lpaeSupport_lpaeUsingScws; /* SHORT_NAMED_BIT */

let _cached_decoder_for_ISDRProprietaryApplicationTemplate_lpaeSupport: $.ASN1Decoder<ISDRProprietaryApplicationTemplate_lpaeSupport> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ISDRProprietaryApplicationTemplate_lpaeSupport
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ISDRProprietaryApplicationTemplate_lpaeSupport (el: _Element): ISDRProprietaryApplicationTemplate_lpaeSupport {
    if (!_cached_decoder_for_ISDRProprietaryApplicationTemplate_lpaeSupport) { _cached_decoder_for_ISDRProprietaryApplicationTemplate_lpaeSupport = $._decodeBitString; }
    return _cached_decoder_for_ISDRProprietaryApplicationTemplate_lpaeSupport(el);
}

let _cached_encoder_for_ISDRProprietaryApplicationTemplate_lpaeSupport: $.ASN1Encoder<ISDRProprietaryApplicationTemplate_lpaeSupport> | null = null;

/**
 * @summary Encodes a(n) ISDRProprietaryApplicationTemplate_lpaeSupport into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ISDRProprietaryApplicationTemplate_lpaeSupport, encoded as an ASN.1 Element.
 */
export
function _encode_ISDRProprietaryApplicationTemplate_lpaeSupport (value: ISDRProprietaryApplicationTemplate_lpaeSupport, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ISDRProprietaryApplicationTemplate_lpaeSupport) { _cached_encoder_for_ISDRProprietaryApplicationTemplate_lpaeSupport = $._encodeBitString; }
    return _cached_encoder_for_ISDRProprietaryApplicationTemplate_lpaeSupport(value, elGetter);
}


/* eslint-enable */
