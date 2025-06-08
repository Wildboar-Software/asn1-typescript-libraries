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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/node/functional';

/* START_OF_SYMBOL_DEFINITION ActivityType */
/**
 * @summary ActivityType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ActivityType  ::=  BIT STRING {
 *   after-hours-repair(0), standby(1), after-hours-standby(2), test(3),
 *   manager-initiated-test(4), dispatch(5), no-access(6), delayed-maintenance(7),
 *   release(8)}
 * ```
 */
export type ActivityType = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION ActivityType */

/* START_OF_SYMBOL_DEFINITION ActivityType_after_hours_repair */
/**
 * @summary ActivityType_after_hours_repair
 * @constant
 */
export const ActivityType_after_hours_repair: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION ActivityType_after_hours_repair */

/* START_OF_SYMBOL_DEFINITION after_hours_repair */
/**
 * @summary after_hours_repair
 * @constant
 */
export const after_hours_repair: number = ActivityType_after_hours_repair; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION after_hours_repair */

/* START_OF_SYMBOL_DEFINITION ActivityType_standby */
/**
 * @summary ActivityType_standby
 * @constant
 */
export const ActivityType_standby: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION ActivityType_standby */

/* START_OF_SYMBOL_DEFINITION standby */
/**
 * @summary standby
 * @constant
 */
export const standby: number = ActivityType_standby; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION standby */

/* START_OF_SYMBOL_DEFINITION ActivityType_after_hours_standby */
/**
 * @summary ActivityType_after_hours_standby
 * @constant
 */
export const ActivityType_after_hours_standby: number = 2; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION ActivityType_after_hours_standby */

/* START_OF_SYMBOL_DEFINITION after_hours_standby */
/**
 * @summary after_hours_standby
 * @constant
 */
export const after_hours_standby: number = ActivityType_after_hours_standby; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION after_hours_standby */

/* START_OF_SYMBOL_DEFINITION ActivityType_test */
/**
 * @summary ActivityType_test
 * @constant
 */
export const ActivityType_test: number = 3; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION ActivityType_test */

/* START_OF_SYMBOL_DEFINITION test */
/**
 * @summary test
 * @constant
 */
export const test: number = ActivityType_test; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION test */

/* START_OF_SYMBOL_DEFINITION ActivityType_manager_initiated_test */
/**
 * @summary ActivityType_manager_initiated_test
 * @constant
 */
export const ActivityType_manager_initiated_test: number = 4; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION ActivityType_manager_initiated_test */

/* START_OF_SYMBOL_DEFINITION manager_initiated_test */
/**
 * @summary manager_initiated_test
 * @constant
 */
export const manager_initiated_test: number = ActivityType_manager_initiated_test; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION manager_initiated_test */

/* START_OF_SYMBOL_DEFINITION ActivityType_dispatch */
/**
 * @summary ActivityType_dispatch
 * @constant
 */
export const ActivityType_dispatch: number = 5; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION ActivityType_dispatch */

/* START_OF_SYMBOL_DEFINITION dispatch */
/**
 * @summary dispatch
 * @constant
 */
export const dispatch: number = ActivityType_dispatch; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION dispatch */

/* START_OF_SYMBOL_DEFINITION ActivityType_no_access */
/**
 * @summary ActivityType_no_access
 * @constant
 */
export const ActivityType_no_access: number = 6; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION ActivityType_no_access */

/* START_OF_SYMBOL_DEFINITION no_access */
/**
 * @summary no_access
 * @constant
 */
export const no_access: number = ActivityType_no_access; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION no_access */

/* START_OF_SYMBOL_DEFINITION ActivityType_delayed_maintenance */
/**
 * @summary ActivityType_delayed_maintenance
 * @constant
 */
export const ActivityType_delayed_maintenance: number = 7; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION ActivityType_delayed_maintenance */

/* START_OF_SYMBOL_DEFINITION delayed_maintenance */
/**
 * @summary delayed_maintenance
 * @constant
 */
export const delayed_maintenance: number = ActivityType_delayed_maintenance; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION delayed_maintenance */

/* START_OF_SYMBOL_DEFINITION ActivityType_release */
/**
 * @summary ActivityType_release
 * @constant
 */
export const ActivityType_release: number = 8; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION ActivityType_release */

/* START_OF_SYMBOL_DEFINITION release */
/**
 * @summary release
 * @constant
 */
export const release: number = ActivityType_release; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION release */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ActivityType */
let _cached_decoder_for_ActivityType: $.ASN1Decoder<ActivityType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ActivityType */

/* START_OF_SYMBOL_DEFINITION _decode_ActivityType */
/**
 * @summary Decodes an ASN.1 element into a(n) ActivityType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ActivityType} The decoded data structure.
 */
export function _decode_ActivityType(el: _Element) {
    if (!_cached_decoder_for_ActivityType) {
        _cached_decoder_for_ActivityType = $._decodeBitString;
    }
    return _cached_decoder_for_ActivityType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ActivityType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ActivityType */
let _cached_encoder_for_ActivityType: $.ASN1Encoder<ActivityType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ActivityType */

/* START_OF_SYMBOL_DEFINITION _encode_ActivityType */
/**
 * @summary Encodes a(n) ActivityType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ActivityType, encoded as an ASN.1 Element.
 */
export function _encode_ActivityType(
    value: ActivityType,
    elGetter: $.ASN1Encoder<ActivityType>
) {
    if (!_cached_encoder_for_ActivityType) {
        _cached_encoder_for_ActivityType = $._encodeBitString;
    }
    return _cached_encoder_for_ActivityType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ActivityType */

/* eslint-enable */
