/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export const _enum_for_Currency = {
    noIndication: 0,
    australianDollar: 1,
    austrianSchilling: 2,
    belgianFranc: 3,
    britishPound: 4,
    czechKoruna: 5,
    danishKrone: 6,
    dutchGuilder: 7,
    euro: 8,
    finnishMarkka: 9,
    frenchFranc: 10,
    germanMark: 11,
    greekDrachma: 12,
    hungarianForint: 13,
    irishPunt: 14,
    italianLira: 15,
    japaneseYen: 16,
    luxembourgian_Franc: 17,
    norwegianKrone: 18,
    polishZloty: 19,
    portugeseEscudo: 20,
    russianRouble: 21,
    slovakKoruna: 22,
    spanishPeseta: 23,
    swedishKrone: 24,
    swissFranc: 25,
    turkishLira: 26,
    uSDollar: 27,
} as const;

export type _enum_for_Currency = (typeof _enum_for_Currency)[keyof typeof _enum_for_Currency];

/**
 * @summary Currency
 * @description
 *
 * Currency of a currency-format tariff or add-on charge. Clause 1
 * leaves which currency a network uses out of scope. `noIndication`
 * means no currency is indicated. Further currencies may be added:
 * the enumeration is extensible. The identifiers follow clause 9,
 * including `portugeseEscudo` and `luxembourgian-Franc` (the
 * TypeScript name replaces the hyphen with an underscore).
 *
 * [ES 201 296 V1.3.1, clauses 1 and 9](https://www.etsi.org/deliver/etsi_es/201200_201299/201296/01.03.01_60/es_201296v010301p.pdf).
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
 * No currency is indicated (clause 9). Which currency a network
 * uses is outside ES 201 296 (clause 1).
 * @summary Currency_noIndication
 * @constant
 * @type {number}
 */
export
const Currency_noIndication = _enum_for_Currency.noIndication; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * No currency is indicated (clause 9). Which currency a network
 * uses is outside ES 201 296 (clause 1).
 * @summary noIndication
 * @constant
 * @type {number}
 */
export
const noIndication = Currency_noIndication; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Currency_australianDollar
 * @constant
 * @type {number}
 */
export
const Currency_australianDollar = _enum_for_Currency.australianDollar; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary australianDollar
 * @constant
 * @type {number}
 */
export
const australianDollar = Currency_australianDollar; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Currency_austrianSchilling
 * @constant
 * @type {number}
 */
export
const Currency_austrianSchilling = _enum_for_Currency.austrianSchilling; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary austrianSchilling
 * @constant
 * @type {number}
 */
export
const austrianSchilling = Currency_austrianSchilling; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Currency_belgianFranc
 * @constant
 * @type {number}
 */
export
const Currency_belgianFranc = _enum_for_Currency.belgianFranc; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary belgianFranc
 * @constant
 * @type {number}
 */
export
const belgianFranc = Currency_belgianFranc; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Currency_britishPound
 * @constant
 * @type {number}
 */
export
const Currency_britishPound = _enum_for_Currency.britishPound; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary britishPound
 * @constant
 * @type {number}
 */
export
const britishPound = Currency_britishPound; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Currency_czechKoruna
 * @constant
 * @type {number}
 */
export
const Currency_czechKoruna = _enum_for_Currency.czechKoruna; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary czechKoruna
 * @constant
 * @type {number}
 */
export
const czechKoruna = Currency_czechKoruna; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Currency_danishKrone
 * @constant
 * @type {number}
 */
export
const Currency_danishKrone = _enum_for_Currency.danishKrone; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary danishKrone
 * @constant
 * @type {number}
 */
export
const danishKrone = Currency_danishKrone; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Currency_dutchGuilder
 * @constant
 * @type {number}
 */
export
const Currency_dutchGuilder = _enum_for_Currency.dutchGuilder; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dutchGuilder
 * @constant
 * @type {number}
 */
export
const dutchGuilder = Currency_dutchGuilder; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Currency_euro
 * @constant
 * @type {number}
 */
export
const Currency_euro = _enum_for_Currency.euro; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary euro
 * @constant
 * @type {number}
 */
export
const euro = Currency_euro; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Currency_finnishMarkka
 * @constant
 * @type {number}
 */
export
const Currency_finnishMarkka = _enum_for_Currency.finnishMarkka; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary finnishMarkka
 * @constant
 * @type {number}
 */
export
const finnishMarkka = Currency_finnishMarkka; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Currency_frenchFranc
 * @constant
 * @type {number}
 */
export
const Currency_frenchFranc = _enum_for_Currency.frenchFranc; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary frenchFranc
 * @constant
 * @type {number}
 */
export
const frenchFranc = Currency_frenchFranc; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Currency_germanMark
 * @constant
 * @type {number}
 */
export
const Currency_germanMark = _enum_for_Currency.germanMark; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary germanMark
 * @constant
 * @type {number}
 */
export
const germanMark = Currency_germanMark; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Currency_greekDrachma
 * @constant
 * @type {number}
 */
export
const Currency_greekDrachma = _enum_for_Currency.greekDrachma; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary greekDrachma
 * @constant
 * @type {number}
 */
export
const greekDrachma = Currency_greekDrachma; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Currency_hungarianForint
 * @constant
 * @type {number}
 */
export
const Currency_hungarianForint = _enum_for_Currency.hungarianForint; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary hungarianForint
 * @constant
 * @type {number}
 */
export
const hungarianForint = Currency_hungarianForint; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Currency_irishPunt
 * @constant
 * @type {number}
 */
export
const Currency_irishPunt = _enum_for_Currency.irishPunt; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary irishPunt
 * @constant
 * @type {number}
 */
export
const irishPunt = Currency_irishPunt; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Currency_italianLira
 * @constant
 * @type {number}
 */
export
const Currency_italianLira = _enum_for_Currency.italianLira; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary italianLira
 * @constant
 * @type {number}
 */
export
const italianLira = Currency_italianLira; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Currency_japaneseYen
 * @constant
 * @type {number}
 */
export
const Currency_japaneseYen = _enum_for_Currency.japaneseYen; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary japaneseYen
 * @constant
 * @type {number}
 */
export
const japaneseYen = Currency_japaneseYen; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Currency_luxembourgian_Franc
 * @constant
 * @type {number}
 */
export
const Currency_luxembourgian_Franc = _enum_for_Currency.luxembourgian_Franc; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary luxembourgian_Franc
 * @constant
 * @type {number}
 */
export
const luxembourgian_Franc = Currency_luxembourgian_Franc; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Currency_norwegianKrone
 * @constant
 * @type {number}
 */
export
const Currency_norwegianKrone = _enum_for_Currency.norwegianKrone; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary norwegianKrone
 * @constant
 * @type {number}
 */
export
const norwegianKrone = Currency_norwegianKrone; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Currency_polishZloty
 * @constant
 * @type {number}
 */
export
const Currency_polishZloty = _enum_for_Currency.polishZloty; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary polishZloty
 * @constant
 * @type {number}
 */
export
const polishZloty = Currency_polishZloty; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Currency_portugeseEscudo
 * @constant
 * @type {number}
 */
export
const Currency_portugeseEscudo = _enum_for_Currency.portugeseEscudo; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary portugeseEscudo
 * @constant
 * @type {number}
 */
export
const portugeseEscudo = Currency_portugeseEscudo; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Currency_russianRouble
 * @constant
 * @type {number}
 */
export
const Currency_russianRouble = _enum_for_Currency.russianRouble; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary russianRouble
 * @constant
 * @type {number}
 */
export
const russianRouble = Currency_russianRouble; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Currency_slovakKoruna
 * @constant
 * @type {number}
 */
export
const Currency_slovakKoruna = _enum_for_Currency.slovakKoruna; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary slovakKoruna
 * @constant
 * @type {number}
 */
export
const slovakKoruna = Currency_slovakKoruna; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Currency_spanishPeseta
 * @constant
 * @type {number}
 */
export
const Currency_spanishPeseta = _enum_for_Currency.spanishPeseta; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary spanishPeseta
 * @constant
 * @type {number}
 */
export
const spanishPeseta = Currency_spanishPeseta; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Currency_swedishKrone
 * @constant
 * @type {number}
 */
export
const Currency_swedishKrone = _enum_for_Currency.swedishKrone; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary swedishKrone
 * @constant
 * @type {number}
 */
export
const swedishKrone = Currency_swedishKrone; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Currency_swissFranc
 * @constant
 * @type {number}
 */
export
const Currency_swissFranc = _enum_for_Currency.swissFranc; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary swissFranc
 * @constant
 * @type {number}
 */
export
const swissFranc = Currency_swissFranc; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Currency_turkishLira
 * @constant
 * @type {number}
 */
export
const Currency_turkishLira = _enum_for_Currency.turkishLira; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary turkishLira
 * @constant
 * @type {number}
 */
export
const turkishLira = Currency_turkishLira; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Currency_uSDollar
 * @constant
 * @type {number}
 */
export
const Currency_uSDollar = _enum_for_Currency.uSDollar; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uSDollar
 * @constant
 * @type {number}
 */
export
const uSDollar = Currency_uSDollar; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_Currency = $._decodeEnumerated;
export const _encode_Currency = $._encodeEnumerated;


/* eslint-enable */
