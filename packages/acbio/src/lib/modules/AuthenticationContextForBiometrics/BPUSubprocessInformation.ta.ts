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
    FunctionDefinition,
    _decode_FunctionDefinition,
    _encode_FunctionDefinition,
} from '../AuthenticationContextForBiometrics/FunctionDefinition.ta';
export {
    FunctionDefinition,
    _decode_FunctionDefinition,
    _encode_FunctionDefinition,
} from '../AuthenticationContextForBiometrics/FunctionDefinition.ta';
import {
    QualityEvaluation,
    _decode_QualityEvaluation,
    _encode_QualityEvaluation,
} from '../AuthenticationContextForBiometrics/QualityEvaluation.ta';
export {
    QualityEvaluation,
    _decode_QualityEvaluation,
    _encode_QualityEvaluation,
} from '../AuthenticationContextForBiometrics/QualityEvaluation.ta';

/* START_OF_SYMBOL_DEFINITION BPUSubprocessInformation */
/**
 * @summary BPUSubprocessInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BPUSubprocessInformation ::= SEQUENCE {
 *     functionDefinition  FunctionDefinition,
 *     qualityEvaluation   QualityEvaluation OPTIONAL }
 * ```
 *
 * @class
 */
export class BPUSubprocessInformation {
    constructor(
        /**
         * @summary `functionDefinition`.
         * @public
         * @readonly
         */
        readonly functionDefinition: FunctionDefinition,
        /**
         * @summary `qualityEvaluation`.
         * @public
         * @readonly
         */
        readonly qualityEvaluation: OPTIONAL<QualityEvaluation>
    ) {}

    /**
     * @summary Restructures an object into a BPUSubprocessInformation
     * @description
     *
     * This takes an `object` and converts it to a `BPUSubprocessInformation`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BPUSubprocessInformation`.
     * @returns {BPUSubprocessInformation}
     */
    public static _from_object(
        _o: {
            [_K in keyof BPUSubprocessInformation]: BPUSubprocessInformation[_K];
        }
    ): BPUSubprocessInformation {
        return new BPUSubprocessInformation(
            _o.functionDefinition,
            _o.qualityEvaluation
        );
    }
}
/* END_OF_SYMBOL_DEFINITION BPUSubprocessInformation */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_BPUSubprocessInformation */
/**
 * @summary The Leading Root Component Types of BPUSubprocessInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_BPUSubprocessInformation: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'functionDefinition',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'qualityEvaluation',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_BPUSubprocessInformation */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_BPUSubprocessInformation */
/**
 * @summary The Trailing Root Component Types of BPUSubprocessInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BPUSubprocessInformation: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_BPUSubprocessInformation */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_BPUSubprocessInformation */
/**
 * @summary The Extension Addition Component Types of BPUSubprocessInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BPUSubprocessInformation: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_BPUSubprocessInformation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BPUSubprocessInformation */
let _cached_decoder_for_BPUSubprocessInformation: $.ASN1Decoder<BPUSubprocessInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BPUSubprocessInformation */

/* START_OF_SYMBOL_DEFINITION _decode_BPUSubprocessInformation */
/**
 * @summary Decodes an ASN.1 element into a(n) BPUSubprocessInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BPUSubprocessInformation} The decoded data structure.
 */
export function _decode_BPUSubprocessInformation(el: _Element) {
    if (!_cached_decoder_for_BPUSubprocessInformation) {
        _cached_decoder_for_BPUSubprocessInformation = function (
            el: _Element
        ): BPUSubprocessInformation {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let functionDefinition!: FunctionDefinition;
            let qualityEvaluation: OPTIONAL<QualityEvaluation>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                functionDefinition: (_el: _Element): void => {
                    functionDefinition = _decode_FunctionDefinition(_el);
                },
                qualityEvaluation: (_el: _Element): void => {
                    qualityEvaluation = _decode_QualityEvaluation(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_BPUSubprocessInformation,
                _extension_additions_list_spec_for_BPUSubprocessInformation,
                _root_component_type_list_2_spec_for_BPUSubprocessInformation,
                undefined
            );
            return new BPUSubprocessInformation /* SEQUENCE_CONSTRUCTOR_CALL */(
                functionDefinition,
                qualityEvaluation
            );
        };
    }
    return _cached_decoder_for_BPUSubprocessInformation(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BPUSubprocessInformation */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BPUSubprocessInformation */
let _cached_encoder_for_BPUSubprocessInformation: $.ASN1Encoder<BPUSubprocessInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BPUSubprocessInformation */

/* START_OF_SYMBOL_DEFINITION _encode_BPUSubprocessInformation */
/**
 * @summary Encodes a(n) BPUSubprocessInformation into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BPUSubprocessInformation, encoded as an ASN.1 Element.
 */
export function _encode_BPUSubprocessInformation(
    value: BPUSubprocessInformation,
    elGetter: $.ASN1Encoder<BPUSubprocessInformation>
) {
    if (!_cached_encoder_for_BPUSubprocessInformation) {
        _cached_encoder_for_BPUSubprocessInformation = function (
            value: BPUSubprocessInformation,
            elGetter: $.ASN1Encoder<BPUSubprocessInformation>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_FunctionDefinition(
                            value.functionDefinition,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.qualityEvaluation === undefined
                            ? undefined
                            : _encode_QualityEvaluation(
                                  value.qualityEvaluation,
                                  $.BER
                              ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_BPUSubprocessInformation(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_BPUSubprocessInformation */

/* eslint-enable */
