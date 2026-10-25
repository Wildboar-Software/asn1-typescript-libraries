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
const Currency_noIndication: 0 = _enum_for_Currency.noIndication; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * No currency is indicated (clause 9). Which currency a network
 * uses is outside ES 201 296 (clause 1).
 * @summary noIndication
 * @constant
 * @type {number}
 */
export
const noIndication: 0 = Currency_noIndication; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Currency_australianDollar
 * @constant
 * @type {number}
 */
export
const Currency_australianDollar: 1 = _enum_for_Currency.australianDollar; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary australianDollar
 * @constant
 * @type {number}
 */
export
const australianDollar: 1 = Currency_australianDollar; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Currency_austrianSchilling
 * @constant
 * @type {number}
 */
export
const Currency_austrianSchilling: 2 = _enum_for_Currency.austrianSchilling; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary austrianSchilling
 * @constant
 * @type {number}
 */
export
const austrianSchilling: 2 = Currency_austrianSchilling; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Currency_belgianFranc
 * @constant
 * @type {number}
 */
export
const Currency_belgianFranc: 3 = _enum_for_Currency.belgianFranc; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary belgianFranc
 * @constant
 * @type {number}
 */
export
const belgianFranc: 3 = Currency_belgianFranc; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Currency_britishPound
 * @constant
 * @type {number}
 */
export
const Currency_britishPound: 4 = _enum_for_Currency.britishPound; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary britishPound
 * @constant
 * @type {number}
 */
export
const britishPound: 4 = Currency_britishPound; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Currency_czechKoruna
 * @constant
 * @type {number}
 */
export
const Currency_czechKoruna: 5 = _enum_for_Currency.czechKoruna; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary czechKoruna
 * @constant
 * @type {number}
 */
export
const czechKoruna: 5 = Currency_czechKoruna; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Currency_danishKrone
 * @constant
 * @type {number}
 */
export
const Currency_danishKrone: 6 = _enum_for_Currency.danishKrone; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary danishKrone
 * @constant
 * @type {number}
 */
export
const danishKrone: 6 = Currency_danishKrone; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Currency_dutchGuilder
 * @constant
 * @type {number}
 */
export
const Currency_dutchGuilder: 7 = _enum_for_Currency.dutchGuilder; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dutchGuilder
 * @constant
 * @type {number}
 */
export
const dutchGuilder: 7 = Currency_dutchGuilder; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Currency_euro
 * @constant
 * @type {number}
 */
export
const Currency_euro: 8 = _enum_for_Currency.euro; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary euro
 * @constant
 * @type {number}
 */
export
const euro: 8 = Currency_euro; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Currency_finnishMarkka
 * @constant
 * @type {number}
 */
export
const Currency_finnishMarkka: 9 = _enum_for_Currency.finnishMarkka; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary finnishMarkka
 * @constant
 * @type {number}
 */
export
const finnishMarkka: 9 = Currency_finnishMarkka; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Currency_frenchFranc
 * @constant
 * @type {number}
 */
export
const Currency_frenchFranc: 10 = _enum_for_Currency.frenchFranc; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary frenchFranc
 * @constant
 * @type {number}
 */
export
const frenchFranc: 10 = Currency_frenchFranc; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Currency_germanMark
 * @constant
 * @type {number}
 */
export
const Currency_germanMark: 11 = _enum_for_Currency.germanMark; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary germanMark
 * @constant
 * @type {number}
 */
export
const germanMark: 11 = Currency_germanMark; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Currency_greekDrachma
 * @constant
 * @type {number}
 */
export
const Currency_greekDrachma: 12 = _enum_for_Currency.greekDrachma; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary greekDrachma
 * @constant
 * @type {number}
 */
export
const greekDrachma: 12 = Currency_greekDrachma; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Currency_hungarianForint
 * @constant
 * @type {number}
 */
export
const Currency_hungarianForint: 13 = _enum_for_Currency.hungarianForint; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary hungarianForint
 * @constant
 * @type {number}
 */
export
const hungarianForint: 13 = Currency_hungarianForint; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Currency_irishPunt
 * @constant
 * @type {number}
 */
export
const Currency_irishPunt: 14 = _enum_for_Currency.irishPunt; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary irishPunt
 * @constant
 * @type {number}
 */
export
const irishPunt: 14 = Currency_irishPunt; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Currency_italianLira
 * @constant
 * @type {number}
 */
export
const Currency_italianLira: 15 = _enum_for_Currency.italianLira; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary italianLira
 * @constant
 * @type {number}
 */
export
const italianLira: 15 = Currency_italianLira; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Currency_japaneseYen
 * @constant
 * @type {number}
 */
export
const Currency_japaneseYen: 16 = _enum_for_Currency.japaneseYen; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary japaneseYen
 * @constant
 * @type {number}
 */
export
const japaneseYen: 16 = Currency_japaneseYen; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Currency_luxembourgian_Franc
 * @constant
 * @type {number}
 */
export
const Currency_luxembourgian_Franc: 17 = _enum_for_Currency.luxembourgian_Franc; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary luxembourgian_Franc
 * @constant
 * @type {number}
 */
export
const luxembourgian_Franc: 17 = Currency_luxembourgian_Franc; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Currency_norwegianKrone
 * @constant
 * @type {number}
 */
export
const Currency_norwegianKrone: 18 = _enum_for_Currency.norwegianKrone; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary norwegianKrone
 * @constant
 * @type {number}
 */
export
const norwegianKrone: 18 = Currency_norwegianKrone; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Currency_polishZloty
 * @constant
 * @type {number}
 */
export
const Currency_polishZloty: 19 = _enum_for_Currency.polishZloty; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary polishZloty
 * @constant
 * @type {number}
 */
export
const polishZloty: 19 = Currency_polishZloty; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Currency_portugeseEscudo
 * @constant
 * @type {number}
 */
export
const Currency_portugeseEscudo: 20 = _enum_for_Currency.portugeseEscudo; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary portugeseEscudo
 * @constant
 * @type {number}
 */
export
const portugeseEscudo: 20 = Currency_portugeseEscudo; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Currency_russianRouble
 * @constant
 * @type {number}
 */
export
const Currency_russianRouble: 21 = _enum_for_Currency.russianRouble; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary russianRouble
 * @constant
 * @type {number}
 */
export
const russianRouble: 21 = Currency_russianRouble; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Currency_slovakKoruna
 * @constant
 * @type {number}
 */
export
const Currency_slovakKoruna: 22 = _enum_for_Currency.slovakKoruna; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary slovakKoruna
 * @constant
 * @type {number}
 */
export
const slovakKoruna: 22 = Currency_slovakKoruna; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Currency_spanishPeseta
 * @constant
 * @type {number}
 */
export
const Currency_spanishPeseta: 23 = _enum_for_Currency.spanishPeseta; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary spanishPeseta
 * @constant
 * @type {number}
 */
export
const spanishPeseta: 23 = Currency_spanishPeseta; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Currency_swedishKrone
 * @constant
 * @type {number}
 */
export
const Currency_swedishKrone: 24 = _enum_for_Currency.swedishKrone; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary swedishKrone
 * @constant
 * @type {number}
 */
export
const swedishKrone: 24 = Currency_swedishKrone; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Currency_swissFranc
 * @constant
 * @type {number}
 */
export
const Currency_swissFranc: 25 = _enum_for_Currency.swissFranc; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary swissFranc
 * @constant
 * @type {number}
 */
export
const swissFranc: 25 = Currency_swissFranc; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Currency_turkishLira
 * @constant
 * @type {number}
 */
export
const Currency_turkishLira: 26 = _enum_for_Currency.turkishLira; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary turkishLira
 * @constant
 * @type {number}
 */
export
const turkishLira: 26 = Currency_turkishLira; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Currency_uSDollar
 * @constant
 * @type {number}
 */
export
const Currency_uSDollar: 27 = _enum_for_Currency.uSDollar; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uSDollar
 * @constant
 * @type {number}
 */
export
const uSDollar: 27 = Currency_uSDollar; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_Currency: $.ASN1Decoder<number> = $._decodeEnumerated;
export const _encode_Currency: $.ASN1Encoder<number> = $._encodeEnumerated;


/* eslint-enable */
