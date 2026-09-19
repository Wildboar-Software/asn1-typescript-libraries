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



export
enum _enum_for_Currency {
    noIndication = 0,
    australianDollar = 1,
    austrianSchilling = 2,
    belgianFranc = 3,
    britishPound = 4,
    czechKoruna = 5,
    danishKrone = 6,
    dutchGuilder = 7,
    euro = 8,
    finnishMarkka = 9,
    frenchFranc = 10,
    germanMark = 11,
    greekDrachma = 12,
    hungarianForint = 13,
    irishPunt = 14,
    italianLira = 15,
    japaneseYen = 16,
    luxembourgian_Franc = 17,
    norwegianKrone = 18,
    polishZloty = 19,
    portugeseEscudo = 20,
    russianRouble = 21,
    slovakKoruna = 22,
    spanishPeseta = 23,
    swedishKrone = 24,
    swissFranc = 25,
    turkishLira = 26,
    uSDollar = 27,
}

/**
 * @summary Currency
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Currency  ::=  ENUMERATED {
 *     noIndication (0),
 *     australianDollar (1),
 *     austrianSchilling (2),
 *     belgianFranc (3),
 *     britishPound (4),
 *     czechKoruna (5),
 *     danishKrone (6),
 *     dutchGuilder (7),
 *     euro (8),
 *     finnishMarkka (9),
 *     frenchFranc (10),
 *     germanMark (11),
 *     greekDrachma (12),
 *     hungarianForint (13),
 *     irishPunt (14),
 *     italianLira (15),
 *     japaneseYen (16),
 *     luxembourgian-Franc (17),
 *     norwegianKrone (18),
 *     polishZloty (19),
 *     portugeseEscudo (20),
 *     russianRouble (21),
 *     slovakKoruna (22),
 *     spanishPeseta (23),
 *     swedishKrone (24),
 *     swissFranc (25),
 *     turkishLira (26),
 *     uSDollar (27),
 *     ...}
 * ```
 * 
 * @enum {number}
 */
export
type Currency = _enum_for_Currency | ENUMERATED;

/**
 * @summary Currency_noIndication
 * @constant
 * @type {number}
 */
export
const Currency_noIndication: Currency = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noIndication
 * @constant
 * @type {number}
 */
export
const noIndication: Currency = Currency_noIndication; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Currency_australianDollar
 * @constant
 * @type {number}
 */
export
const Currency_australianDollar: Currency = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary australianDollar
 * @constant
 * @type {number}
 */
export
const australianDollar: Currency = Currency_australianDollar; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Currency_austrianSchilling
 * @constant
 * @type {number}
 */
export
const Currency_austrianSchilling: Currency = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary austrianSchilling
 * @constant
 * @type {number}
 */
export
const austrianSchilling: Currency = Currency_austrianSchilling; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Currency_belgianFranc
 * @constant
 * @type {number}
 */
export
const Currency_belgianFranc: Currency = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary belgianFranc
 * @constant
 * @type {number}
 */
export
const belgianFranc: Currency = Currency_belgianFranc; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Currency_britishPound
 * @constant
 * @type {number}
 */
export
const Currency_britishPound: Currency = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary britishPound
 * @constant
 * @type {number}
 */
export
const britishPound: Currency = Currency_britishPound; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Currency_czechKoruna
 * @constant
 * @type {number}
 */
export
const Currency_czechKoruna: Currency = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary czechKoruna
 * @constant
 * @type {number}
 */
export
const czechKoruna: Currency = Currency_czechKoruna; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Currency_danishKrone
 * @constant
 * @type {number}
 */
export
const Currency_danishKrone: Currency = 6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary danishKrone
 * @constant
 * @type {number}
 */
export
const danishKrone: Currency = Currency_danishKrone; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Currency_dutchGuilder
 * @constant
 * @type {number}
 */
export
const Currency_dutchGuilder: Currency = 7; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dutchGuilder
 * @constant
 * @type {number}
 */
export
const dutchGuilder: Currency = Currency_dutchGuilder; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Currency_euro
 * @constant
 * @type {number}
 */
export
const Currency_euro: Currency = 8; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary euro
 * @constant
 * @type {number}
 */
export
const euro: Currency = Currency_euro; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Currency_finnishMarkka
 * @constant
 * @type {number}
 */
export
const Currency_finnishMarkka: Currency = 9; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary finnishMarkka
 * @constant
 * @type {number}
 */
export
const finnishMarkka: Currency = Currency_finnishMarkka; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Currency_frenchFranc
 * @constant
 * @type {number}
 */
export
const Currency_frenchFranc: Currency = 10; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary frenchFranc
 * @constant
 * @type {number}
 */
export
const frenchFranc: Currency = Currency_frenchFranc; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Currency_germanMark
 * @constant
 * @type {number}
 */
export
const Currency_germanMark: Currency = 11; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary germanMark
 * @constant
 * @type {number}
 */
export
const germanMark: Currency = Currency_germanMark; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Currency_greekDrachma
 * @constant
 * @type {number}
 */
export
const Currency_greekDrachma: Currency = 12; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary greekDrachma
 * @constant
 * @type {number}
 */
export
const greekDrachma: Currency = Currency_greekDrachma; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Currency_hungarianForint
 * @constant
 * @type {number}
 */
export
const Currency_hungarianForint: Currency = 13; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary hungarianForint
 * @constant
 * @type {number}
 */
export
const hungarianForint: Currency = Currency_hungarianForint; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Currency_irishPunt
 * @constant
 * @type {number}
 */
export
const Currency_irishPunt: Currency = 14; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary irishPunt
 * @constant
 * @type {number}
 */
export
const irishPunt: Currency = Currency_irishPunt; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Currency_italianLira
 * @constant
 * @type {number}
 */
export
const Currency_italianLira: Currency = 15; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary italianLira
 * @constant
 * @type {number}
 */
export
const italianLira: Currency = Currency_italianLira; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Currency_japaneseYen
 * @constant
 * @type {number}
 */
export
const Currency_japaneseYen: Currency = 16; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary japaneseYen
 * @constant
 * @type {number}
 */
export
const japaneseYen: Currency = Currency_japaneseYen; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Currency_luxembourgian_Franc
 * @constant
 * @type {number}
 */
export
const Currency_luxembourgian_Franc: Currency = 17; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary luxembourgian_Franc
 * @constant
 * @type {number}
 */
export
const luxembourgian_Franc: Currency = Currency_luxembourgian_Franc; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Currency_norwegianKrone
 * @constant
 * @type {number}
 */
export
const Currency_norwegianKrone: Currency = 18; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary norwegianKrone
 * @constant
 * @type {number}
 */
export
const norwegianKrone: Currency = Currency_norwegianKrone; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Currency_polishZloty
 * @constant
 * @type {number}
 */
export
const Currency_polishZloty: Currency = 19; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary polishZloty
 * @constant
 * @type {number}
 */
export
const polishZloty: Currency = Currency_polishZloty; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Currency_portugeseEscudo
 * @constant
 * @type {number}
 */
export
const Currency_portugeseEscudo: Currency = 20; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary portugeseEscudo
 * @constant
 * @type {number}
 */
export
const portugeseEscudo: Currency = Currency_portugeseEscudo; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Currency_russianRouble
 * @constant
 * @type {number}
 */
export
const Currency_russianRouble: Currency = 21; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary russianRouble
 * @constant
 * @type {number}
 */
export
const russianRouble: Currency = Currency_russianRouble; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Currency_slovakKoruna
 * @constant
 * @type {number}
 */
export
const Currency_slovakKoruna: Currency = 22; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary slovakKoruna
 * @constant
 * @type {number}
 */
export
const slovakKoruna: Currency = Currency_slovakKoruna; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Currency_spanishPeseta
 * @constant
 * @type {number}
 */
export
const Currency_spanishPeseta: Currency = 23; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary spanishPeseta
 * @constant
 * @type {number}
 */
export
const spanishPeseta: Currency = Currency_spanishPeseta; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Currency_swedishKrone
 * @constant
 * @type {number}
 */
export
const Currency_swedishKrone: Currency = 24; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary swedishKrone
 * @constant
 * @type {number}
 */
export
const swedishKrone: Currency = Currency_swedishKrone; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Currency_swissFranc
 * @constant
 * @type {number}
 */
export
const Currency_swissFranc: Currency = 25; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary swissFranc
 * @constant
 * @type {number}
 */
export
const swissFranc: Currency = Currency_swissFranc; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Currency_turkishLira
 * @constant
 * @type {number}
 */
export
const Currency_turkishLira: Currency = 26; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary turkishLira
 * @constant
 * @type {number}
 */
export
const turkishLira: Currency = Currency_turkishLira; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Currency_uSDollar
 * @constant
 * @type {number}
 */
export
const Currency_uSDollar: Currency = 27; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uSDollar
 * @constant
 * @type {number}
 */
export
const uSDollar: Currency = Currency_uSDollar; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_Currency: $.ASN1Decoder<Currency> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Currency
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Currency (el: _Element): Currency {
    if (!_cached_decoder_for_Currency) { _cached_decoder_for_Currency = $._decodeEnumerated; }
    return _cached_decoder_for_Currency(el);
}

let _cached_encoder_for_Currency: $.ASN1Encoder<Currency> | null = null;

/**
 * @summary Encodes a(n) Currency into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Currency, encoded as an ASN.1 Element.
 */
export
function _encode_Currency (value: Currency, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Currency) { _cached_encoder_for_Currency = $._encodeEnumerated; }
    return _cached_encoder_for_Currency(value, elGetter);
}


/* eslint-enable */
