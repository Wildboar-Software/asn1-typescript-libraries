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
    TerminateValidationInfo,
    _enum_for_TerminateValidationInfo,
    TerminateValidationInfo_cancel /* IMPORTED_LONG_ENUMERATION_ITEM */,
    cancel /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    TerminateValidationInfo_truncate /* IMPORTED_LONG_ENUMERATION_ITEM */,
    truncate /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_TerminateValidationInfo,
    _encode_TerminateValidationInfo,
} from '../SWMF/TerminateValidationInfo.ta.mjs';
export {
    TerminateValidationInfo,
    _enum_for_TerminateValidationInfo,
    TerminateValidationInfo_cancel /* IMPORTED_LONG_ENUMERATION_ITEM */,
    cancel /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    TerminateValidationInfo_truncate /* IMPORTED_LONG_ENUMERATION_ITEM */,
    truncate /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_TerminateValidationInfo,
    _encode_TerminateValidationInfo,
} from '../SWMF/TerminateValidationInfo.ta.mjs';
import {
    ManagementExtension,
    _decode_ManagementExtension,
    _encode_ManagementExtension,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/ManagementExtension.ta.mjs';
export {
    ManagementExtension,
    _decode_ManagementExtension,
    _encode_ManagementExtension,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/ManagementExtension.ta.mjs';

/* START_OF_SYMBOL_DEFINITION TerminateValidationArgument */
/**
 * @summary TerminateValidationArgument
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TerminateValidationArgument ::= SEQUENCE {
 *   terminateValidationInfo  [0]  TerminateValidationInfo,
 *   additionalInfo           [1]  SET OF ManagementExtension OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class TerminateValidationArgument {
    constructor(
        /**
         * @summary `terminateValidationInfo`.
         * @public
         * @readonly
         */
        readonly terminateValidationInfo: TerminateValidationInfo,
        /**
         * @summary `additionalInfo`.
         * @public
         * @readonly
         */
        readonly additionalInfo: OPTIONAL<ManagementExtension[]>
    ) {}

    /**
     * @summary Restructures an object into a TerminateValidationArgument
     * @description
     *
     * This takes an `object` and converts it to a `TerminateValidationArgument`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TerminateValidationArgument`.
     * @returns {TerminateValidationArgument}
     */
    public static _from_object(
        _o: {
            [_K in keyof TerminateValidationArgument]: TerminateValidationArgument[_K];
        }
    ): TerminateValidationArgument {
        return new TerminateValidationArgument(
            _o.terminateValidationInfo,
            _o.additionalInfo
        );
    }

    /**
     * @summary The enum used as the type of the component `terminateValidationInfo`
     * @public
     * @static
     */

    public static _enum_for_terminateValidationInfo = _enum_for_TerminateValidationInfo;
}
/* END_OF_SYMBOL_DEFINITION TerminateValidationArgument */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TerminateValidationArgument */
/**
 * @summary The Leading Root Component Types of TerminateValidationArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TerminateValidationArgument: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'terminateValidationInfo',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'additionalInfo',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TerminateValidationArgument */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TerminateValidationArgument */
/**
 * @summary The Trailing Root Component Types of TerminateValidationArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TerminateValidationArgument: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TerminateValidationArgument */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TerminateValidationArgument */
/**
 * @summary The Extension Addition Component Types of TerminateValidationArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TerminateValidationArgument: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TerminateValidationArgument */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TerminateValidationArgument */
let _cached_decoder_for_TerminateValidationArgument: $.ASN1Decoder<TerminateValidationArgument> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TerminateValidationArgument */

/* START_OF_SYMBOL_DEFINITION _decode_TerminateValidationArgument */
/**
 * @summary Decodes an ASN.1 element into a(n) TerminateValidationArgument
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TerminateValidationArgument} The decoded data structure.
 */
export function _decode_TerminateValidationArgument(el: _Element) {
    if (!_cached_decoder_for_TerminateValidationArgument) {
        _cached_decoder_for_TerminateValidationArgument = function (
            el: _Element
        ): TerminateValidationArgument {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let terminateValidationInfo!: TerminateValidationInfo;
            let additionalInfo: OPTIONAL<ManagementExtension[]>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                terminateValidationInfo: (_el: _Element): void => {
                    terminateValidationInfo = $._decode_implicit<TerminateValidationInfo>(
                        () => _decode_TerminateValidationInfo
                    )(_el);
                },
                additionalInfo: (_el: _Element): void => {
                    additionalInfo = $._decode_implicit<ManagementExtension[]>(
                        () =>
                            $._decodeSetOf<ManagementExtension>(
                                () => _decode_ManagementExtension
                            )
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TerminateValidationArgument,
                _extension_additions_list_spec_for_TerminateValidationArgument,
                _root_component_type_list_2_spec_for_TerminateValidationArgument,
                undefined
            );
            return new TerminateValidationArgument /* SEQUENCE_CONSTRUCTOR_CALL */(
                terminateValidationInfo,
                additionalInfo
            );
        };
    }
    return _cached_decoder_for_TerminateValidationArgument(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TerminateValidationArgument */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TerminateValidationArgument */
let _cached_encoder_for_TerminateValidationArgument: $.ASN1Encoder<TerminateValidationArgument> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TerminateValidationArgument */

/* START_OF_SYMBOL_DEFINITION _encode_TerminateValidationArgument */
/**
 * @summary Encodes a(n) TerminateValidationArgument into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TerminateValidationArgument, encoded as an ASN.1 Element.
 */
export function _encode_TerminateValidationArgument(
    value: TerminateValidationArgument,
    elGetter: $.ASN1Encoder<TerminateValidationArgument>
) {
    if (!_cached_encoder_for_TerminateValidationArgument) {
        _cached_encoder_for_TerminateValidationArgument = function (
            value: TerminateValidationArgument,
            elGetter: $.ASN1Encoder<TerminateValidationArgument>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => _encode_TerminateValidationInfo,
                            $.BER
                        )(value.terminateValidationInfo, $.BER),
                        /* IF_ABSENT  */ value.additionalInfo === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () =>
                                      $._encodeSetOf<ManagementExtension>(
                                          () => _encode_ManagementExtension,
                                          $.BER
                                      ),
                                  $.BER
                              )(value.additionalInfo, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_TerminateValidationArgument(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TerminateValidationArgument */

/* eslint-enable */
