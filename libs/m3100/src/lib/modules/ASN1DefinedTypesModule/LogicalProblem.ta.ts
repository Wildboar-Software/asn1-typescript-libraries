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
    ProblemCause,
    _decode_ProblemCause,
    _encode_ProblemCause,
} from '../ASN1DefinedTypesModule/ProblemCause.ta';
export {
    ProblemCause,
    _decode_ProblemCause,
    _encode_ProblemCause,
} from '../ASN1DefinedTypesModule/ProblemCause.ta';
import {
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta';
export {
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta';

/* START_OF_SYMBOL_DEFINITION LogicalProblem */
/**
 * @summary LogicalProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LogicalProblem ::= SEQUENCE {
 *   problemCause        ProblemCause,
 *   incorrectInstances  SET OF ObjectInstance OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class LogicalProblem {
    constructor(
        /**
         * @summary `problemCause`.
         * @public
         * @readonly
         */
        readonly problemCause: ProblemCause,
        /**
         * @summary `incorrectInstances`.
         * @public
         * @readonly
         */
        readonly incorrectInstances: OPTIONAL<ObjectInstance[]>
    ) {}

    /**
     * @summary Restructures an object into a LogicalProblem
     * @description
     *
     * This takes an `object` and converts it to a `LogicalProblem`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LogicalProblem`.
     * @returns {LogicalProblem}
     */
    public static _from_object(
        _o: { [_K in keyof LogicalProblem]: LogicalProblem[_K] }
    ): LogicalProblem {
        return new LogicalProblem(_o.problemCause, _o.incorrectInstances);
    }
}
/* END_OF_SYMBOL_DEFINITION LogicalProblem */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_LogicalProblem */
/**
 * @summary The Leading Root Component Types of LogicalProblem
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_LogicalProblem: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'problemCause',
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'incorrectInstances',
        true,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_LogicalProblem */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_LogicalProblem */
/**
 * @summary The Trailing Root Component Types of LogicalProblem
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_LogicalProblem: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_LogicalProblem */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_LogicalProblem */
/**
 * @summary The Extension Addition Component Types of LogicalProblem
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_LogicalProblem: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_LogicalProblem */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_LogicalProblem */
let _cached_decoder_for_LogicalProblem: $.ASN1Decoder<LogicalProblem> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_LogicalProblem */

/* START_OF_SYMBOL_DEFINITION _decode_LogicalProblem */
/**
 * @summary Decodes an ASN.1 element into a(n) LogicalProblem
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LogicalProblem} The decoded data structure.
 */
export function _decode_LogicalProblem(el: _Element) {
    if (!_cached_decoder_for_LogicalProblem) {
        _cached_decoder_for_LogicalProblem = function (
            el: _Element
        ): LogicalProblem {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let problemCause!: ProblemCause;
            let incorrectInstances: OPTIONAL<ObjectInstance[]>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                problemCause: (_el: _Element): void => {
                    problemCause = _decode_ProblemCause(_el);
                },
                incorrectInstances: (_el: _Element): void => {
                    incorrectInstances = $._decodeSetOf<ObjectInstance>(
                        () => _decode_ObjectInstance
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_LogicalProblem,
                _extension_additions_list_spec_for_LogicalProblem,
                _root_component_type_list_2_spec_for_LogicalProblem,
                undefined
            );
            return new LogicalProblem /* SEQUENCE_CONSTRUCTOR_CALL */(
                problemCause,
                incorrectInstances
            );
        };
    }
    return _cached_decoder_for_LogicalProblem(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_LogicalProblem */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_LogicalProblem */
let _cached_encoder_for_LogicalProblem: $.ASN1Encoder<LogicalProblem> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_LogicalProblem */

/* START_OF_SYMBOL_DEFINITION _encode_LogicalProblem */
/**
 * @summary Encodes a(n) LogicalProblem into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LogicalProblem, encoded as an ASN.1 Element.
 */
export function _encode_LogicalProblem(
    value: LogicalProblem,
    elGetter: $.ASN1Encoder<LogicalProblem>
) {
    if (!_cached_encoder_for_LogicalProblem) {
        _cached_encoder_for_LogicalProblem = function (
            value: LogicalProblem,
            elGetter: $.ASN1Encoder<LogicalProblem>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ProblemCause(
                            value.problemCause,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.incorrectInstances === undefined
                            ? undefined
                            : $._encodeSetOf<ObjectInstance>(
                                  () => _encode_ObjectInstance,
                                  $.BER
                              )(value.incorrectInstances, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_LogicalProblem(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_LogicalProblem */

/* eslint-enable */
