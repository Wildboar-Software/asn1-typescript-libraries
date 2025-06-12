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
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    ConnectivityTestInfo_timeoutPeriod,
    _decode_ConnectivityTestInfo_timeoutPeriod,
    _encode_ConnectivityTestInfo_timeoutPeriod,
} from '../TestCategories-ASN1Module/ConnectivityTestInfo-timeoutPeriod.ta.js';
export {
    ConnectivityTestInfo_timeoutPeriod,
    _decode_ConnectivityTestInfo_timeoutPeriod,
    _encode_ConnectivityTestInfo_timeoutPeriod,
} from '../TestCategories-ASN1Module/ConnectivityTestInfo-timeoutPeriod.ta.js';
import {
    Timespec,
    _decode_Timespec,
    _encode_Timespec,
} from '../Test-ASN1Module/Timespec.ta.js';
export {
    Timespec,
    _decode_Timespec,
    _encode_Timespec,
} from '../Test-ASN1Module/Timespec.ta.js';

/* START_OF_SYMBOL_DEFINITION ConnectivityTestInfo */
/**
 * @summary ConnectivityTestInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ConnectivityTestInfo ::= SEQUENCE {
 *   timeoutPeriod
 *     [0] EXPLICIT CHOICE {timeUnits    Timespec,
 *                          attributeId  AttributeId},
 *   effectiveTime  [1]  Timespec
 * }
 * ```
 *
 * @class
 */
export class ConnectivityTestInfo {
    constructor(
        /**
         * @summary `timeoutPeriod`.
         * @public
         * @readonly
         */
        readonly timeoutPeriod: ConnectivityTestInfo_timeoutPeriod,
        /**
         * @summary `effectiveTime`.
         * @public
         * @readonly
         */
        readonly effectiveTime: Timespec
    ) {}

    /**
     * @summary Restructures an object into a ConnectivityTestInfo
     * @description
     *
     * This takes an `object` and converts it to a `ConnectivityTestInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ConnectivityTestInfo`.
     * @returns {ConnectivityTestInfo}
     */
    public static _from_object(
        _o: { [_K in keyof ConnectivityTestInfo]: ConnectivityTestInfo[_K] }
    ): ConnectivityTestInfo {
        return new ConnectivityTestInfo(_o.timeoutPeriod, _o.effectiveTime);
    }
}
/* END_OF_SYMBOL_DEFINITION ConnectivityTestInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ConnectivityTestInfo */
/**
 * @summary The Leading Root Component Types of ConnectivityTestInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ConnectivityTestInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'timeoutPeriod',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'effectiveTime',
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ConnectivityTestInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ConnectivityTestInfo */
/**
 * @summary The Trailing Root Component Types of ConnectivityTestInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ConnectivityTestInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ConnectivityTestInfo */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ConnectivityTestInfo */
/**
 * @summary The Extension Addition Component Types of ConnectivityTestInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ConnectivityTestInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ConnectivityTestInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ConnectivityTestInfo */
let _cached_decoder_for_ConnectivityTestInfo: $.ASN1Decoder<ConnectivityTestInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ConnectivityTestInfo */

/* START_OF_SYMBOL_DEFINITION _decode_ConnectivityTestInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) ConnectivityTestInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ConnectivityTestInfo} The decoded data structure.
 */
export function _decode_ConnectivityTestInfo(el: _Element) {
    if (!_cached_decoder_for_ConnectivityTestInfo) {
        _cached_decoder_for_ConnectivityTestInfo = function (
            el: _Element
        ): ConnectivityTestInfo {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'ConnectivityTestInfo contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'timeoutPeriod';
            sequence[1].name = 'effectiveTime';
            let timeoutPeriod!: ConnectivityTestInfo_timeoutPeriod;
            let effectiveTime!: Timespec;
            timeoutPeriod = $._decode_explicit<ConnectivityTestInfo_timeoutPeriod>(
                () => _decode_ConnectivityTestInfo_timeoutPeriod
            )(sequence[0]);
            effectiveTime = $._decode_explicit<Timespec>(
                () => _decode_Timespec
            )(sequence[1]);
            return new ConnectivityTestInfo(timeoutPeriod, effectiveTime);
        };
    }
    return _cached_decoder_for_ConnectivityTestInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ConnectivityTestInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ConnectivityTestInfo */
let _cached_encoder_for_ConnectivityTestInfo: $.ASN1Encoder<ConnectivityTestInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ConnectivityTestInfo */

/* START_OF_SYMBOL_DEFINITION _encode_ConnectivityTestInfo */
/**
 * @summary Encodes a(n) ConnectivityTestInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConnectivityTestInfo, encoded as an ASN.1 Element.
 */
export function _encode_ConnectivityTestInfo(
    value: ConnectivityTestInfo,
    elGetter: $.ASN1Encoder<ConnectivityTestInfo>
) {
    if (!_cached_encoder_for_ConnectivityTestInfo) {
        _cached_encoder_for_ConnectivityTestInfo = function (
            value: ConnectivityTestInfo,
            elGetter: $.ASN1Encoder<ConnectivityTestInfo>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            0,
                            () => _encode_ConnectivityTestInfo_timeoutPeriod,
                            $.BER
                        )(value.timeoutPeriod, $.BER),
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            1,
                            () => _encode_Timespec,
                            $.BER
                        )(value.effectiveTime, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ConnectivityTestInfo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ConnectivityTestInfo */

/* eslint-enable */
