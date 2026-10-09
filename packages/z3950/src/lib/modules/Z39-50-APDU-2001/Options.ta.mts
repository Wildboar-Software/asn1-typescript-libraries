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
 * Capability bits negotiated on Init. The client proposes each bit on
 * or off. The server response decides what is in effect. For a
 * client-initiated operation (search, present, delete,
 * resource-report, scan, sort, extended services, duplicate
 * detection) and for trigger-resource-control, named result sets, and
 * concurrent operations: if the client proposes off, the server must
 * set the bit off. Bit 9 is unused and has no name. Unknown option
 * bits on a received Init are ignored. §3.2.1.1.3, §4.2.
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
 * @description
 *
 * Bit 0. Client may initiate Search. The server says whether it will
 * process Search. Client off forces server off. Conformance still
 * requires the Search service. §3.2.1.1.3 note 1, §4.4.1.
 *
 * @constant
 */
export
const Options_search: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary search
 * @description
 *
 * Short name for `Options_search`. Bit 0: Search operations.
 * Client off forces server off. §3.2.1.1.3 note 1.
 *
 * @constant
 */
export
const search: number = Options_search; /* SHORT_NAMED_BIT */

/**
 * @summary Options_present
 * @description
 *
 * Bit 1. Client may initiate Present. The server says whether it will
 * process Present. Client off forces server off. Conformance still
 * requires the Present service. §3.2.1.1.3 note 1, §4.4.1.
 *
 * @constant
 */
export
const Options_present: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary present
 * @description
 *
 * Short name for `Options_present`. Bit 1: Present operations.
 * Client off forces server off. §3.2.1.1.3 note 1.
 *
 * @constant
 */
export
const present: number = Options_present; /* SHORT_NAMED_BIT */

/**
 * @summary Options_delSet
 * @description
 *
 * Bit 2. Client may initiate Delete (result-set delete). The server
 * says whether it will process Delete. Client off forces server off.
 * §3.2.1.1.3 note 1.
 *
 * @constant
 */
export
const Options_delSet: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary delSet
 * @description
 *
 * Short name for `Options_delSet`. Bit 2: Delete result set.
 * Client off forces server off. §3.2.1.1.3 note 1.
 *
 * @constant
 */
export
const delSet: number = Options_delSet; /* SHORT_NAMED_BIT */

/**
 * @summary Options_resourceReport
 * @description
 *
 * Bit 3. Client may initiate Resource-report. The server says whether
 * it will process that operation. Client off forces server off.
 * §3.2.1.1.3 note 1.
 *
 * @constant
 */
export
const Options_resourceReport: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary resourceReport
 * @description
 *
 * Short name for `Options_resourceReport`. Bit 3: Resource-report
 * operations. Client off forces server off. §3.2.1.1.3 note 1.
 *
 * @constant
 */
export
const resourceReport: number = Options_resourceReport; /* SHORT_NAMED_BIT */

/**
 * @summary Options_triggerResourceCtrl
 * @description
 *
 * Bit 4. Client may send Trigger-resource-control. The server says
 * whether it will accept those requests. Client off forces server
 * off. If the server sets this on and resource-control off, the
 * client may use only the Cancel function. Acceptance does not mean
 * the server will act on a trigger. §3.2.1.1.3 note 2.
 *
 * @constant
 */
export
const Options_triggerResourceCtrl: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary triggerResourceCtrl
 * @description
 *
 * Short name for `Options_triggerResourceCtrl`. Bit 4:
 * Trigger-resource-control. Client off forces server off. If this is
 * on and resource-control is off, only Cancel may be used.
 * §3.2.1.1.3 note 2.
 *
 * @constant
 */
export
const triggerResourceCtrl: number = Options_triggerResourceCtrl; /* SHORT_NAMED_BIT */

/**
 * @summary Options_resourceCtrl
 * @description
 *
 * Bit 5. Client proposes to allow the server to invoke
 * Resource-control. The server says whether it may invoke it. Server
 * off means it will not invoke Resource-control. If the client
 * proposes off and the server sets this on, and the client cannot
 * accept those requests, the client should Close. §3.2.1.1.3 note 3.
 *
 * @constant
 */
export
const Options_resourceCtrl: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary resourceCtrl
 * @description
 *
 * Short name for `Options_resourceCtrl`. Bit 5: server may invoke
 * Resource-control. Server off means it will not. §3.2.1.1.3 note 3.
 *
 * @constant
 */
export
const resourceCtrl: number = Options_resourceCtrl; /* SHORT_NAMED_BIT */

/**
 * @summary Options_accessCtrl
 * @description
 *
 * Bit 6. Client proposes to allow the server to invoke
 * Access-control. Server off means it will not. If the client
 * proposes off and association-level security beyond
 * Id/authentication is mandatory, the server should reject Init and
 * set this bit on. Security at database, record, or operation level
 * need not cause rejection; the server may refuse that operation
 * here, or later report that a challenge was required but could not
 * be issued. §3.2.1.1.3 note 3.
 *
 * @constant
 */
export
const Options_accessCtrl: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary accessCtrl
 * @description
 *
 * Short name for `Options_accessCtrl`. Bit 6: server may invoke
 * Access-control. Server off means it will not. §3.2.1.1.3 note 3.
 *
 * @constant
 */
export
const accessCtrl: number = Options_accessCtrl; /* SHORT_NAMED_BIT */

/**
 * @summary Options_scan
 * @description
 *
 * Bit 7. Client may initiate Scan. The server says whether it will
 * process Scan. Client off forces server off. §3.2.1.1.3 note 1.
 *
 * @constant
 */
export
const Options_scan: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary scan
 * @description
 *
 * Short name for `Options_scan`. Bit 7: Scan operations. Client off
 * forces server off. §3.2.1.1.3 note 1.
 *
 * @constant
 */
export
const scan: number = Options_scan; /* SHORT_NAMED_BIT */

/**
 * @summary Options_sort
 * @description
 *
 * Bit 8. Client may initiate Sort. The server says whether it will
 * process Sort. Client off forces server off. Bit 16
 * (`resultCountInSort`) may be set only when this bit is set.
 * §3.2.1.1.3 notes 1 and 8.
 *
 * @constant
 */
export
const Options_sort: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary sort
 * @description
 *
 * Short name for `Options_sort`. Bit 8: Sort operations. Client off
 * forces server off. Required before bit 16 may be set.
 * §3.2.1.1.3 notes 1 and 8.
 *
 * @constant
 */
export
const sort: number = Options_sort; /* SHORT_NAMED_BIT */

/**
 * @summary Options_extendedServices
 * @description
 *
 * Bit 10. Client may initiate Extended-services. The server says
 * whether it will process that operation. Client off forces server
 * off. §3.2.1.1.3 note 1.
 *
 * @constant
 */
export
const Options_extendedServices: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary extendedServices
 * @description
 *
 * Short name for `Options_extendedServices`. Bit 10: Extended-services
 * operations. Client off forces server off. §3.2.1.1.3 note 1.
 *
 * @constant
 */
export
const extendedServices: number = Options_extendedServices; /* SHORT_NAMED_BIT */

/**
 * @summary Options_level_1Segmentation
 * @description
 *
 * Bit 11. Level-1 segmentation. Only when version 3 is in force. The
 * client proposes none (both segmentation bits off), level 1 (this
 * on, level 2 off), or level 2 (level 2 on; this bit may also be on
 * as a fallback). The server response decides. If the server sets
 * level 1 and not level 2, it will not do level 2, and the client
 * must accept level 1. Each segment then holds a whole number of
 * records. §3.2.1.1.3 note 4, §3.3.2.
 *
 * @constant
 */
export
const Options_level_1Segmentation: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary level_1Segmentation
 * @description
 *
 * Short name for `Options_level_1Segmentation`. Bit 11: level-1
 * segmentation (whole records per segment). Version 3 only. The
 * server response decides. §3.2.1.1.3 note 4, §3.3.2.
 *
 * @constant
 */
export
const level_1Segmentation: number = Options_level_1Segmentation; /* SHORT_NAMED_BIT */

/**
 * @summary Options_level_2Segmentation
 * @description
 *
 * Bit 12. Level-2 segmentation: records may span segments. Only when
 * version 3 is in force. If the server sets this bit, the client must
 * accept level 2, and the server's level-1 bit should be off. If the
 * server sets neither segmentation bit, no segmentation is in effect.
 * §3.2.1.1.3 note 4, §3.3.3.
 *
 * @constant
 */
export
const Options_level_2Segmentation: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary level_2Segmentation
 * @description
 *
 * Short name for `Options_level_2Segmentation`. Bit 12: level-2
 * segmentation (records may span segments). Version 3 only.
 * §3.2.1.1.3 note 4, §3.3.3.
 *
 * @constant
 */
export
const level_2Segmentation: number = Options_level_2Segmentation; /* SHORT_NAMED_BIT */

/**
 * @summary Options_concurrentOperations
 * @description
 *
 * Bit 13. Client may start concurrent operations, each with a
 * different reference-id. Client off forces server off. Not in effect
 * during Init. While one operation with a reference-id is active,
 * that id cannot start another. The server may process concurrent
 * operations in any order. No operation may start during Init or
 * after Close. §3.2.1.1.3 note 6, §3.5.
 *
 * @constant
 */
export
const Options_concurrentOperations: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary concurrentOperations
 * @description
 *
 * Short name for `Options_concurrentOperations`. Bit 13: concurrent
 * operations. Client off forces server off. Not in effect during
 * Init. §3.2.1.1.3 note 6, §3.5.
 *
 * @constant
 */
export
const concurrentOperations: number = Options_concurrentOperations; /* SHORT_NAMED_BIT */

/**
 * @summary Options_namedResultSets
 * @description
 *
 * Bit 14. Client may use result-set names other than `"default"`.
 * Client off forces server off. If the server leaves this off, a
 * later non-default name may be failed with diagnostic 22, or, when
 * version 3 is in force or the client tried to negotiate this bit,
 * treated as a protocol error. The server must always support
 * `"default"`. §3.2.1.1.3 note 5, §3.2.2.1.3.
 *
 * @constant
 */
export
const Options_namedResultSets: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary namedResultSets
 * @description
 *
 * Short name for `Options_namedResultSets`. Bit 14: result-set names
 * other than `"default"`. Client off forces server off.
 * §3.2.1.1.3 note 5, §3.2.2.1.3.
 *
 * @constant
 */
export
const namedResultSets: number = Options_namedResultSets; /* SHORT_NAMED_BIT */

/**
 * @summary Options_encapsulation
 * @description
 *
 * Bit 15. APDUs may be nested in `otherInfo` (on Init, in
 * `userInformationField` as UserInfo-1). Both peers must set this bit.
 * When version 2 is negotiated, encapsulation applies only inside
 * Init. If the server does not set the bit, encapsulation is not in
 * effect. Nested APDUs are executed from the outside inward; the
 * server must not ignore them silently. Not a segmentation mechanism.
 * §3.2.1.1.3, §4.3.
 *
 * @constant
 */
export
const Options_encapsulation: number = 15; /* LONG_NAMED_BIT */

/**
 * @summary encapsulation
 * @description
 *
 * Short name for `Options_encapsulation`. Bit 15: nested APDUs in
 * `otherInfo`. Both peers must set it. Version 2: Init only. §4.3.
 *
 * @constant
 */
export
const encapsulation: number = Options_encapsulation; /* SHORT_NAMED_BIT */

/**
 * @summary Options_resultCountInSort
 * @description
 *
 * Bit 16. Client supports `resultCount` on a Sort response. Set only
 * if bit 8 (Sort) is set. If the client leaves this off, the server
 * must leave it off and must omit `resultCount`. If both peers set
 * bits 8 and 16, the server may include `resultCount` but is not
 * required to. §3.2.1.1.3 note 8.
 *
 * @constant
 */
export
const Options_resultCountInSort: number = 16; /* LONG_NAMED_BIT */

/**
 * @summary resultCountInSort
 * @description
 *
 * Short name for `Options_resultCountInSort`. Bit 16: `resultCount`
 * on Sort response. Only with bit 8 set. §3.2.1.1.3 note 8.
 *
 * @constant
 */
export
const resultCountInSort: number = Options_resultCountInSort; /* SHORT_NAMED_BIT */

/**
 * @summary Options_negotiation
 * @description
 *
 * Bit 17. Client adheres to the negotiation model. Both peers must
 * set it before either may assume negotiation followed that model.
 * If only the client sets it, the client should assume the model was
 * not followed. If the client leaves it off and the server requires
 * the model, the server may reject Init with diagnostic 1055
 * ("negotiation option required"). §3.2.1.1.3 note 9.
 *
 * @constant
 */
export
const Options_negotiation: number = 17; /* LONG_NAMED_BIT */

/**
 * @summary negotiation
 * @description
 *
 * Short name for `Options_negotiation`. Bit 17: negotiation model.
 * Both peers must set it for the model to be in effect.
 * §3.2.1.1.3 note 9.
 *
 * @constant
 */
export
const negotiation: number = Options_negotiation; /* SHORT_NAMED_BIT */

/**
 * @summary Options_dedup
 * @description
 *
 * Bit 18. Client may initiate Duplicate Detection. The server says
 * whether it will process that operation. Client off forces server
 * off. §3.2.1.1.3 note 1.
 *
 * @constant
 */
export
const Options_dedup: number = 18; /* LONG_NAMED_BIT */

/**
 * @summary dedup
 * @description
 *
 * Short name for `Options_dedup`. Bit 18: Duplicate Detection.
 * Client off forces server off. §3.2.1.1.3 note 1.
 *
 * @constant
 */
export
const dedup: number = Options_dedup; /* SHORT_NAMED_BIT */

/**
 * @summary Options_query104
 * @description
 *
 * Bit 19. Client proposes queries of type 104. If the server also
 * sets this bit, a type-104 query is not a protocol error. The server
 * does not thereby accept any particular external query definition.
 * §3.2.1.1.3 note 10, §3.2.2.1.1.
 *
 * @constant
 */
export
const Options_query104: number = 19; /* LONG_NAMED_BIT */

/**
 * @summary query104
 * @description
 *
 * Short name for `Options_query104`. Bit 19: type-104 queries are not
 * a protocol error when the server also sets it. §3.2.1.1.3 note 10.
 *
 * @constant
 */
export
const query104: number = Options_query104; /* SHORT_NAMED_BIT */

/**
 * @summary Options_pqesCorrection
 * @description
 *
 * Bit 20. If both peers set this, the PeriodicQuery Extended Service
 * definition in this standard applies. Otherwise the Z39.50-1995
 * definition applies: `databaseNames` must not occur in
 * ClientPartToKeep, and must not occur in ClientPartNotToKeep unless
 * this bit is set; `additionalSearchInfo` follows the same rule;
 * `databaseNames` must occur in ServerPart when the bit is set and
 * must not when it is not; `lastQueryTime` and `lastResultNumber`
 * are optional when the bit is set and mandatory otherwise.
 * §3.2.1.1.3 note 11.
 *
 * @constant
 */
export
const Options_pqesCorrection: number = 20; /* LONG_NAMED_BIT */

/**
 * @summary pqesCorrection
 * @description
 *
 * Short name for `Options_pqesCorrection`. Bit 20: this standard's
 * PeriodicQuery Extended Service definition, when both peers set it.
 * §3.2.1.1.3 note 11.
 *
 * @constant
 */
export
const pqesCorrection: number = Options_pqesCorrection; /* SHORT_NAMED_BIT */

/**
 * @summary Options_stringSchema
 * @description
 *
 * Bit 21. If both peers set this, `schema` inside `Specification`
 * (composition specification) may be an object identifier or a
 * string. Otherwise it must be an object identifier.
 * §3.2.1.1.3 note 12.
 *
 * @constant
 */
export
const Options_stringSchema: number = 21; /* LONG_NAMED_BIT */

/**
 * @summary stringSchema
 * @description
 *
 * Short name for `Options_stringSchema`. Bit 21: `schema` in a
 * composition specification may be a string, when both peers set it.
 * §3.2.1.1.3 note 12.
 *
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
