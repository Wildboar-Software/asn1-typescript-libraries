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
import {
    LeapIndication,
    _enum_for_LeapIndication,
    LeapIndication_noWarning /* IMPORTED_LONG_ENUMERATION_ITEM */,
    noWarning /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    LeapIndication_minuteHas61Seconds /* IMPORTED_LONG_ENUMERATION_ITEM */,
    minuteHas61Seconds /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    LeapIndication_minuteHas59Seconds /* IMPORTED_LONG_ENUMERATION_ITEM */,
    minuteHas59Seconds /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    LeapIndication_alarmCondition /* IMPORTED_LONG_ENUMERATION_ITEM */,
    alarmCondition /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_LeapIndication,
    _encode_LeapIndication,
} from '../TimeMF/LeapIndication.ta';
export {
    LeapIndication,
    _enum_for_LeapIndication,
    LeapIndication_noWarning /* IMPORTED_LONG_ENUMERATION_ITEM */,
    noWarning /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    LeapIndication_minuteHas61Seconds /* IMPORTED_LONG_ENUMERATION_ITEM */,
    minuteHas61Seconds /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    LeapIndication_minuteHas59Seconds /* IMPORTED_LONG_ENUMERATION_ITEM */,
    minuteHas59Seconds /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    LeapIndication_alarmCondition /* IMPORTED_LONG_ENUMERATION_ITEM */,
    alarmCondition /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_LeapIndication,
    _encode_LeapIndication,
} from '../TimeMF/LeapIndication.ta';
import {
    DateOfLeap,
    _decode_DateOfLeap,
    _encode_DateOfLeap,
} from '../TimeMF/DateOfLeap.ta';
export {
    DateOfLeap,
    _decode_DateOfLeap,
    _encode_DateOfLeap,
} from '../TimeMF/DateOfLeap.ta';

/* START_OF_SYMBOL_DEFINITION LeapSecondInfo */
/**
 * @summary LeapSecondInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LeapSecondInfo ::= SEQUENCE {
 *   leapIndication  LeapIndication,
 *   dateOfLeap      DateOfLeap
 * }
 * ```
 *
 * @class
 */
export class LeapSecondInfo {
    constructor(
        /**
         * @summary `leapIndication`.
         * @public
         * @readonly
         */
        readonly leapIndication: LeapIndication,
        /**
         * @summary `dateOfLeap`.
         * @public
         * @readonly
         */
        readonly dateOfLeap: DateOfLeap
    ) {}

    /**
     * @summary Restructures an object into a LeapSecondInfo
     * @description
     *
     * This takes an `object` and converts it to a `LeapSecondInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LeapSecondInfo`.
     * @returns {LeapSecondInfo}
     */
    public static _from_object(
        _o: { [_K in keyof LeapSecondInfo]: LeapSecondInfo[_K] }
    ): LeapSecondInfo {
        return new LeapSecondInfo(_o.leapIndication, _o.dateOfLeap);
    }

    /**
     * @summary The enum used as the type of the component `leapIndication`
     * @public
     * @static
     */

    public static _enum_for_leapIndication = _enum_for_LeapIndication;
}
/* END_OF_SYMBOL_DEFINITION LeapSecondInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_LeapSecondInfo */
/**
 * @summary The Leading Root Component Types of LeapSecondInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_LeapSecondInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'leapIndication',
        false,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'dateOfLeap',
        false,
        $.hasTag(_TagClass.universal, 24),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_LeapSecondInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_LeapSecondInfo */
/**
 * @summary The Trailing Root Component Types of LeapSecondInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_LeapSecondInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_LeapSecondInfo */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_LeapSecondInfo */
/**
 * @summary The Extension Addition Component Types of LeapSecondInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_LeapSecondInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_LeapSecondInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_LeapSecondInfo */
let _cached_decoder_for_LeapSecondInfo: $.ASN1Decoder<LeapSecondInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_LeapSecondInfo */

/* START_OF_SYMBOL_DEFINITION _decode_LeapSecondInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) LeapSecondInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LeapSecondInfo} The decoded data structure.
 */
export function _decode_LeapSecondInfo(el: _Element) {
    if (!_cached_decoder_for_LeapSecondInfo) {
        _cached_decoder_for_LeapSecondInfo = function (
            el: _Element
        ): LeapSecondInfo {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'LeapSecondInfo contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'leapIndication';
            sequence[1].name = 'dateOfLeap';
            let leapIndication!: LeapIndication;
            let dateOfLeap!: DateOfLeap;
            leapIndication = _decode_LeapIndication(sequence[0]);
            dateOfLeap = _decode_DateOfLeap(sequence[1]);
            return new LeapSecondInfo(leapIndication, dateOfLeap);
        };
    }
    return _cached_decoder_for_LeapSecondInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_LeapSecondInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_LeapSecondInfo */
let _cached_encoder_for_LeapSecondInfo: $.ASN1Encoder<LeapSecondInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_LeapSecondInfo */

/* START_OF_SYMBOL_DEFINITION _encode_LeapSecondInfo */
/**
 * @summary Encodes a(n) LeapSecondInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LeapSecondInfo, encoded as an ASN.1 Element.
 */
export function _encode_LeapSecondInfo(
    value: LeapSecondInfo,
    elGetter: $.ASN1Encoder<LeapSecondInfo>
) {
    if (!_cached_encoder_for_LeapSecondInfo) {
        _cached_encoder_for_LeapSecondInfo = function (
            value: LeapSecondInfo,
            elGetter: $.ASN1Encoder<LeapSecondInfo>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_LeapIndication(
                            value.leapIndication,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_DateOfLeap(
                            value.dateOfLeap,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_LeapSecondInfo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_LeapSecondInfo */

/* eslint-enable */
