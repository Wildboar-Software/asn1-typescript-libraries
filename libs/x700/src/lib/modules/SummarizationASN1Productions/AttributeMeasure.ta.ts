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
import { CMIP_ATTRIBUTE } from '@wildboar/cmip/src/lib/modules/CMIP-1/CMIP-ATTRIBUTE.oca';
export { CMIP_ATTRIBUTE } from '@wildboar/cmip/src/lib/modules/CMIP-1/CMIP-ATTRIBUTE.oca';
import { AttributeSet } from '@wildboar/cmip/src/lib/modules/CMIP-1/AttributeSet.osa';
export { AttributeSet } from '@wildboar/cmip/src/lib/modules/CMIP-1/AttributeSet.osa';
import {
    TimePeriod,
    _decode_TimePeriod,
    _encode_TimePeriod,
} from '../MetricModule/TimePeriod.ta';
export {
    TimePeriod,
    _decode_TimePeriod,
    _encode_TimePeriod,
} from '../MetricModule/TimePeriod.ta';
import { AttributeId, _decode_AttributeId, _encode_AttributeId } from '@wildboar/cmip/src/lib/modules/CMIP-1/AttributeId.ta';

/* START_OF_SYMBOL_DEFINITION AttributeMeasure */
/**
 * @summary AttributeMeasure
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeMeasure ::= SEQUENCE {
 *   attributeId     CMIP-ATTRIBUTE.&id({AttributeSet}),
 *   attributeValue
 *     CMIP-ATTRIBUTE.&Value({AttributeSet}{@.attributeId}) OPTIONAL,
 *   -- not present implies missing data
 *   timeStamp       [3]  TimePeriod OPTIONAL,
 *   -- time offset forward from scan initiation time in report.
 *   -- Required of timeStampReportMode attribute is present with value = 2
 *   suspectFlag     BOOLEAN DEFAULT FALSE
 * }
 * ```
 *
 * @class
 */
export class AttributeMeasure {
    constructor(
        /**
         * @summary `attributeId`.
         * @public
         * @readonly
         */
        readonly attributeId: AttributeId,
        /**
         * @summary `attributeValue`.
         * @public
         * @readonly
         */
        readonly attributeValue: OPTIONAL<_Element>,
        /**
         * @summary `timeStamp`.
         * @public
         * @readonly
         */
        readonly timeStamp: OPTIONAL<TimePeriod>,
        /**
         * @summary `suspectFlag`.
         * @public
         * @readonly
         */
        readonly suspectFlag: OPTIONAL<BOOLEAN>
    ) {}

    /**
     * @summary Restructures an object into a AttributeMeasure
     * @description
     *
     * This takes an `object` and converts it to a `AttributeMeasure`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AttributeMeasure`.
     * @returns {AttributeMeasure}
     */
    public static _from_object(
        _o: { [_K in keyof AttributeMeasure]: AttributeMeasure[_K] }
    ): AttributeMeasure {
        return new AttributeMeasure(
            _o.attributeId,
            _o.attributeValue,
            _o.timeStamp,
            _o.suspectFlag
        );
    }

    /**
     * @summary Getter that returns the default value for `suspectFlag`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_suspectFlag() {
        return false;
    }
}
/* END_OF_SYMBOL_DEFINITION AttributeMeasure */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AttributeMeasure */
/**
 * @summary The Leading Root Component Types of AttributeMeasure
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AttributeMeasure: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'attributeId',
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'attributeValue',
        true,
        $.hasAnyTag,
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'timeStamp',
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'suspectFlag',
        true,
        $.hasTag(_TagClass.universal, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AttributeMeasure */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AttributeMeasure */
/**
 * @summary The Trailing Root Component Types of AttributeMeasure
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AttributeMeasure: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AttributeMeasure */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AttributeMeasure */
/**
 * @summary The Extension Addition Component Types of AttributeMeasure
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AttributeMeasure: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AttributeMeasure */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeMeasure */
let _cached_decoder_for_AttributeMeasure: $.ASN1Decoder<AttributeMeasure> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeMeasure */

/* START_OF_SYMBOL_DEFINITION _decode_AttributeMeasure */
/**
 * @summary Decodes an ASN.1 element into a(n) AttributeMeasure
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeMeasure} The decoded data structure.
 */
export function _decode_AttributeMeasure(el: _Element) {
    if (!_cached_decoder_for_AttributeMeasure) {
        _cached_decoder_for_AttributeMeasure = function (
            el: _Element
        ): AttributeMeasure {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let attributeId!: AttributeId;
            let attributeValue: OPTIONAL<_Element>;
            let timeStamp: OPTIONAL<TimePeriod>;
            let suspectFlag: OPTIONAL<BOOLEAN> =
                AttributeMeasure._default_value_for_suspectFlag;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                attributeId: (_el: _Element): void => {
                    attributeId = _decode_AttributeId(_el);
                },
                attributeValue: (_el: _Element): void => {
                    attributeValue = $._decodeAny(_el);
                },
                timeStamp: (_el: _Element): void => {
                    timeStamp = $._decode_explicit<TimePeriod>(
                        () => _decode_TimePeriod
                    )(_el);
                },
                suspectFlag: (_el: _Element): void => {
                    suspectFlag = $._decodeBoolean(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AttributeMeasure,
                _extension_additions_list_spec_for_AttributeMeasure,
                _root_component_type_list_2_spec_for_AttributeMeasure,
                undefined
            );
            return new AttributeMeasure /* SEQUENCE_CONSTRUCTOR_CALL */(
                attributeId,
                attributeValue,
                timeStamp,
                suspectFlag
            );
        };
    }
    return _cached_decoder_for_AttributeMeasure(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AttributeMeasure */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeMeasure */
let _cached_encoder_for_AttributeMeasure: $.ASN1Encoder<AttributeMeasure> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeMeasure */

/* START_OF_SYMBOL_DEFINITION _encode_AttributeMeasure */
/**
 * @summary Encodes a(n) AttributeMeasure into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeMeasure, encoded as an ASN.1 Element.
 */
export function _encode_AttributeMeasure(
    value: AttributeMeasure,
    elGetter: $.ASN1Encoder<AttributeMeasure>
) {
    if (!_cached_encoder_for_AttributeMeasure) {
        _cached_encoder_for_AttributeMeasure = function (
            value: AttributeMeasure,
            elGetter: $.ASN1Encoder<AttributeMeasure>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_AttributeId(
                            value.attributeId,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.attributeValue === undefined
                            ? undefined
                            : $._encodeAny(value.attributeValue, $.BER),
                        /* IF_ABSENT  */ value.timeStamp === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  3,
                                  () => _encode_TimePeriod,
                                  $.BER
                              )(value.timeStamp, $.BER),
                        /* IF_DEFAULT */ value.suspectFlag === undefined ||
                        $.deepEq(
                            value.suspectFlag,
                            AttributeMeasure._default_value_for_suspectFlag
                        )
                            ? undefined
                            : $._encodeBoolean(value.suspectFlag, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_AttributeMeasure(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AttributeMeasure */

/* eslint-enable */
