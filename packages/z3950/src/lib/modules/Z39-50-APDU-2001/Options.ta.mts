/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Options
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Options  ::=  [4] IMPLICIT BIT STRING{
 *     search                  (0),
 *     present                 (1),
 *     delSet                  (2),
 *     resourceReport          (3),
 *     triggerResourceCtrl     (4),
 *     resourceCtrl            (5),
 *     accessCtrl              (6),
 *     scan                    (7),
 *     sort                    (8),
 *     -- (not used)  (9),
 *     extendedServices        (10),
 *     level-1Segmentation     (11),
 *     level-2Segmentation     (12),
 *     concurrentOperations    (13),
 *     namedResultSets         (14),
 *     encapsulation           (15),
 *     resultCountInSort       (16),
 *     negotiation             (17),
 *     dedup                   (18),
 *     query104                (19),
 *     pqesCorrection          (20),
 *     stringSchema            (21)
 * }
 * ```
 */
export
type Options = BIT_STRING;

/**
 * @summary Options_search
 * @constant
 */
export
const Options_search: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary search
 * @constant
 */
export
const search: number = Options_search; /* SHORT_NAMED_BIT */

/**
 * @summary Options_present
 * @constant
 */
export
const Options_present: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary present
 * @constant
 */
export
const present: number = Options_present; /* SHORT_NAMED_BIT */

/**
 * @summary Options_delSet
 * @constant
 */
export
const Options_delSet: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary delSet
 * @constant
 */
export
const delSet: number = Options_delSet; /* SHORT_NAMED_BIT */

/**
 * @summary Options_resourceReport
 * @constant
 */
export
const Options_resourceReport: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary resourceReport
 * @constant
 */
export
const resourceReport: number = Options_resourceReport; /* SHORT_NAMED_BIT */

/**
 * @summary Options_triggerResourceCtrl
 * @constant
 */
export
const Options_triggerResourceCtrl: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary triggerResourceCtrl
 * @constant
 */
export
const triggerResourceCtrl: number = Options_triggerResourceCtrl; /* SHORT_NAMED_BIT */

/**
 * @summary Options_resourceCtrl
 * @constant
 */
export
const Options_resourceCtrl: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary resourceCtrl
 * @constant
 */
export
const resourceCtrl: number = Options_resourceCtrl; /* SHORT_NAMED_BIT */

/**
 * @summary Options_accessCtrl
 * @constant
 */
export
const Options_accessCtrl: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary accessCtrl
 * @constant
 */
export
const accessCtrl: number = Options_accessCtrl; /* SHORT_NAMED_BIT */

/**
 * @summary Options_scan
 * @constant
 */
export
const Options_scan: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary scan
 * @constant
 */
export
const scan: number = Options_scan; /* SHORT_NAMED_BIT */

/**
 * @summary Options_sort
 * @constant
 */
export
const Options_sort: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary sort
 * @constant
 */
export
const sort: number = Options_sort; /* SHORT_NAMED_BIT */

/**
 * @summary Options_extendedServices
 * @constant
 */
export
const Options_extendedServices: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary extendedServices
 * @constant
 */
export
const extendedServices: number = Options_extendedServices; /* SHORT_NAMED_BIT */

/**
 * @summary Options_level_1Segmentation
 * @constant
 */
export
const Options_level_1Segmentation: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary level_1Segmentation
 * @constant
 */
export
const level_1Segmentation: number = Options_level_1Segmentation; /* SHORT_NAMED_BIT */

/**
 * @summary Options_level_2Segmentation
 * @constant
 */
export
const Options_level_2Segmentation: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary level_2Segmentation
 * @constant
 */
export
const level_2Segmentation: number = Options_level_2Segmentation; /* SHORT_NAMED_BIT */

/**
 * @summary Options_concurrentOperations
 * @constant
 */
export
const Options_concurrentOperations: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary concurrentOperations
 * @constant
 */
export
const concurrentOperations: number = Options_concurrentOperations; /* SHORT_NAMED_BIT */

/**
 * @summary Options_namedResultSets
 * @constant
 */
export
const Options_namedResultSets: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary namedResultSets
 * @constant
 */
export
const namedResultSets: number = Options_namedResultSets; /* SHORT_NAMED_BIT */

/**
 * @summary Options_encapsulation
 * @constant
 */
export
const Options_encapsulation: number = 15; /* LONG_NAMED_BIT */

/**
 * @summary encapsulation
 * @constant
 */
export
const encapsulation: number = Options_encapsulation; /* SHORT_NAMED_BIT */

/**
 * @summary Options_resultCountInSort
 * @constant
 */
export
const Options_resultCountInSort: number = 16; /* LONG_NAMED_BIT */

/**
 * @summary resultCountInSort
 * @constant
 */
export
const resultCountInSort: number = Options_resultCountInSort; /* SHORT_NAMED_BIT */

/**
 * @summary Options_negotiation
 * @constant
 */
export
const Options_negotiation: number = 17; /* LONG_NAMED_BIT */

/**
 * @summary negotiation
 * @constant
 */
export
const negotiation: number = Options_negotiation; /* SHORT_NAMED_BIT */

/**
 * @summary Options_dedup
 * @constant
 */
export
const Options_dedup: number = 18; /* LONG_NAMED_BIT */

/**
 * @summary dedup
 * @constant
 */
export
const dedup: number = Options_dedup; /* SHORT_NAMED_BIT */

/**
 * @summary Options_query104
 * @constant
 */
export
const Options_query104: number = 19; /* LONG_NAMED_BIT */

/**
 * @summary query104
 * @constant
 */
export
const query104: number = Options_query104; /* SHORT_NAMED_BIT */

/**
 * @summary Options_pqesCorrection
 * @constant
 */
export
const Options_pqesCorrection: number = 20; /* LONG_NAMED_BIT */

/**
 * @summary pqesCorrection
 * @constant
 */
export
const pqesCorrection: number = Options_pqesCorrection; /* SHORT_NAMED_BIT */

/**
 * @summary Options_stringSchema
 * @constant
 */
export
const Options_stringSchema: number = 21; /* LONG_NAMED_BIT */

/**
 * @summary stringSchema
 * @constant
 */
export
const stringSchema: number = Options_stringSchema; /* SHORT_NAMED_BIT */

let _cached_decoder_for_Options: $.ASN1Decoder<Options> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Options
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Options (el: _Element): Options {
    if (!_cached_decoder_for_Options) { _cached_decoder_for_Options = $._decode_implicit<Options>(() => $._decodeBitString); }
    return _cached_decoder_for_Options(el);
}

let _cached_encoder_for_Options: $.ASN1Encoder<Options> | null = null;

/**
 * @summary Encodes a(n) Options into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Options, encoded as an ASN.1 Element.
 */
export
function _encode_Options (value: Options, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Options) { _cached_encoder_for_Options = $._encode_implicit(_TagClass.context, 4, () => $._encode_implicit(_TagClass.context, 4, () => $._encodeBitString, $.BER), $.BER); }
    return _cached_encoder_for_Options(value, elGetter);
}


/* eslint-enable */
