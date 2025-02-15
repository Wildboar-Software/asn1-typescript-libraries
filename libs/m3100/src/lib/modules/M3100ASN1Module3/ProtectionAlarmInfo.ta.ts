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
    ProbableCause,
    _decode_ProbableCause,
    _encode_ProbableCause,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/ProbableCause.ta';
export {
    ProbableCause,
    _decode_ProbableCause,
    _encode_ProbableCause,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/ProbableCause.ta';
import {
    AdditionalInformation,
    _decode_AdditionalInformation,
    _encode_AdditionalInformation,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/AdditionalInformation.ta';
export {
    AdditionalInformation,
    _decode_AdditionalInformation,
    _encode_AdditionalInformation,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/AdditionalInformation.ta';

/* START_OF_SYMBOL_DEFINITION ProtectionAlarmInfo */
/**
 * @summary ProtectionAlarmInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProtectionAlarmInfo ::= SEQUENCE {
 *   probableCause   ProbableCause,
 *   additionalInfo  AdditionalInformation
 * }
 * ```
 *
 * @class
 */
export class ProtectionAlarmInfo {
    constructor(
        /**
         * @summary `probableCause`.
         * @public
         * @readonly
         */
        readonly probableCause: ProbableCause,
        /**
         * @summary `additionalInfo`.
         * @public
         * @readonly
         */
        readonly additionalInfo: AdditionalInformation
    ) {}

    /**
     * @summary Restructures an object into a ProtectionAlarmInfo
     * @description
     *
     * This takes an `object` and converts it to a `ProtectionAlarmInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ProtectionAlarmInfo`.
     * @returns {ProtectionAlarmInfo}
     */
    public static _from_object(
        _o: { [_K in keyof ProtectionAlarmInfo]: ProtectionAlarmInfo[_K] }
    ): ProtectionAlarmInfo {
        return new ProtectionAlarmInfo(_o.probableCause, _o.additionalInfo);
    }
}
/* END_OF_SYMBOL_DEFINITION ProtectionAlarmInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ProtectionAlarmInfo */
/**
 * @summary The Leading Root Component Types of ProtectionAlarmInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ProtectionAlarmInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'probableCause',
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'additionalInfo',
        false,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ProtectionAlarmInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ProtectionAlarmInfo */
/**
 * @summary The Trailing Root Component Types of ProtectionAlarmInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ProtectionAlarmInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ProtectionAlarmInfo */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ProtectionAlarmInfo */
/**
 * @summary The Extension Addition Component Types of ProtectionAlarmInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ProtectionAlarmInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ProtectionAlarmInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ProtectionAlarmInfo */
let _cached_decoder_for_ProtectionAlarmInfo: $.ASN1Decoder<ProtectionAlarmInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ProtectionAlarmInfo */

/* START_OF_SYMBOL_DEFINITION _decode_ProtectionAlarmInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) ProtectionAlarmInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ProtectionAlarmInfo} The decoded data structure.
 */
export function _decode_ProtectionAlarmInfo(el: _Element) {
    if (!_cached_decoder_for_ProtectionAlarmInfo) {
        _cached_decoder_for_ProtectionAlarmInfo = function (
            el: _Element
        ): ProtectionAlarmInfo {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'ProtectionAlarmInfo contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'probableCause';
            sequence[1].name = 'additionalInfo';
            let probableCause!: ProbableCause;
            let additionalInfo!: AdditionalInformation;
            probableCause = _decode_ProbableCause(sequence[0]);
            additionalInfo = _decode_AdditionalInformation(sequence[1]);
            return new ProtectionAlarmInfo(probableCause, additionalInfo);
        };
    }
    return _cached_decoder_for_ProtectionAlarmInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ProtectionAlarmInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ProtectionAlarmInfo */
let _cached_encoder_for_ProtectionAlarmInfo: $.ASN1Encoder<ProtectionAlarmInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ProtectionAlarmInfo */

/* START_OF_SYMBOL_DEFINITION _encode_ProtectionAlarmInfo */
/**
 * @summary Encodes a(n) ProtectionAlarmInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProtectionAlarmInfo, encoded as an ASN.1 Element.
 */
export function _encode_ProtectionAlarmInfo(
    value: ProtectionAlarmInfo,
    elGetter: $.ASN1Encoder<ProtectionAlarmInfo>
) {
    if (!_cached_encoder_for_ProtectionAlarmInfo) {
        _cached_encoder_for_ProtectionAlarmInfo = function (
            value: ProtectionAlarmInfo,
            elGetter: $.ASN1Encoder<ProtectionAlarmInfo>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ProbableCause(
                            value.probableCause,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_AdditionalInformation(
                            value.additionalInfo,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ProtectionAlarmInfo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ProtectionAlarmInfo */

/* eslint-enable */
