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
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta';
export {
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta';
import {
    AttributeMeasure,
    _decode_AttributeMeasure,
    _encode_AttributeMeasure,
} from '../SummarizationASN1Productions/AttributeMeasure.ta';
export {
    AttributeMeasure,
    _decode_AttributeMeasure,
    _encode_AttributeMeasure,
} from '../SummarizationASN1Productions/AttributeMeasure.ta';
import {
    NumericMeasure,
    _decode_NumericMeasure,
    _encode_NumericMeasure,
} from '../SummarizationASN1Productions/NumericMeasure.ta';
export {
    NumericMeasure,
    _decode_NumericMeasure,
    _encode_NumericMeasure,
} from '../SummarizationASN1Productions/NumericMeasure.ta';

/* START_OF_SYMBOL_DEFINITION BufferedObservationScan */
/**
 * @summary BufferedObservationScan
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BufferedObservationScan ::= SEQUENCE {
 *   objectInstance           ObjectInstance OPTIONAL,
 *   reportTimeAttributeList  [0]  SET OF AttributeMeasure OPTIONAL,
 *   attributesBuffer
 *     [1]  SET OF SEQUENCE OF-- ordered by time-- AttributeMeasure OPTIONAL,
 *   numericAttributesBuff
 *     [5]  SEQUENCE OF-- ordered by numericAttributeIdArray--
 *            SEQUENCE OF-- ordered by time-- NumericMeasure OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class BufferedObservationScan {
    constructor(
        /**
         * @summary `objectInstance`.
         * @public
         * @readonly
         */
        readonly objectInstance: OPTIONAL<ObjectInstance>,
        /**
         * @summary `reportTimeAttributeList`.
         * @public
         * @readonly
         */
        readonly reportTimeAttributeList: OPTIONAL<AttributeMeasure[]>,
        /**
         * @summary `attributesBuffer`.
         * @public
         * @readonly
         */
        readonly attributesBuffer: OPTIONAL<AttributeMeasure[][]>,
        /**
         * @summary `numericAttributesBuff`.
         * @public
         * @readonly
         */
        readonly numericAttributesBuff: OPTIONAL<NumericMeasure[][]>
    ) {}

    /**
     * @summary Restructures an object into a BufferedObservationScan
     * @description
     *
     * This takes an `object` and converts it to a `BufferedObservationScan`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BufferedObservationScan`.
     * @returns {BufferedObservationScan}
     */
    public static _from_object(
        _o: {
            [_K in keyof BufferedObservationScan]: BufferedObservationScan[_K];
        }
    ): BufferedObservationScan {
        return new BufferedObservationScan(
            _o.objectInstance,
            _o.reportTimeAttributeList,
            _o.attributesBuffer,
            _o.numericAttributesBuff
        );
    }
}
/* END_OF_SYMBOL_DEFINITION BufferedObservationScan */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_BufferedObservationScan */
/**
 * @summary The Leading Root Component Types of BufferedObservationScan
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_BufferedObservationScan: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'objectInstance',
        true,
        $.hasAnyTag,
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'reportTimeAttributeList',
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'attributesBuffer',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'numericAttributesBuff',
        true,
        $.hasTag(_TagClass.context, 5),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_BufferedObservationScan */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_BufferedObservationScan */
/**
 * @summary The Trailing Root Component Types of BufferedObservationScan
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BufferedObservationScan: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_BufferedObservationScan */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_BufferedObservationScan */
/**
 * @summary The Extension Addition Component Types of BufferedObservationScan
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BufferedObservationScan: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_BufferedObservationScan */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BufferedObservationScan */
let _cached_decoder_for_BufferedObservationScan: $.ASN1Decoder<BufferedObservationScan> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BufferedObservationScan */

/* START_OF_SYMBOL_DEFINITION _decode_BufferedObservationScan */
/**
 * @summary Decodes an ASN.1 element into a(n) BufferedObservationScan
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BufferedObservationScan} The decoded data structure.
 */
export function _decode_BufferedObservationScan(el: _Element) {
    if (!_cached_decoder_for_BufferedObservationScan) {
        _cached_decoder_for_BufferedObservationScan = function (
            el: _Element
        ): BufferedObservationScan {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let objectInstance: OPTIONAL<ObjectInstance>;
            let reportTimeAttributeList: OPTIONAL<AttributeMeasure[]>;
            let attributesBuffer: OPTIONAL<AttributeMeasure[][]>;
            let numericAttributesBuff: OPTIONAL<NumericMeasure[][]>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                objectInstance: (_el: _Element): void => {
                    objectInstance = _decode_ObjectInstance(_el);
                },
                reportTimeAttributeList: (_el: _Element): void => {
                    reportTimeAttributeList = $._decode_implicit<
                        AttributeMeasure[]
                    >(() =>
                        $._decodeSetOf<AttributeMeasure>(
                            () => _decode_AttributeMeasure
                        )
                    )(_el);
                },
                attributesBuffer: (_el: _Element): void => {
                    attributesBuffer = $._decode_implicit<AttributeMeasure[][]>(
                        () =>
                            $._decodeSetOf<AttributeMeasure[]>(() =>
                                $._decodeSequenceOf<AttributeMeasure>(
                                    () => _decode_AttributeMeasure
                                )
                            )
                    )(_el);
                },
                numericAttributesBuff: (_el: _Element): void => {
                    numericAttributesBuff = $._decode_implicit<
                        NumericMeasure[][]
                    >(() =>
                        $._decodeSequenceOf<NumericMeasure[]>(() =>
                            $._decodeSequenceOf<NumericMeasure>(
                                () => _decode_NumericMeasure
                            )
                        )
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_BufferedObservationScan,
                _extension_additions_list_spec_for_BufferedObservationScan,
                _root_component_type_list_2_spec_for_BufferedObservationScan,
                undefined
            );
            return new BufferedObservationScan /* SEQUENCE_CONSTRUCTOR_CALL */(
                objectInstance,
                reportTimeAttributeList,
                attributesBuffer,
                numericAttributesBuff
            );
        };
    }
    return _cached_decoder_for_BufferedObservationScan(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BufferedObservationScan */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BufferedObservationScan */
let _cached_encoder_for_BufferedObservationScan: $.ASN1Encoder<BufferedObservationScan> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BufferedObservationScan */

/* START_OF_SYMBOL_DEFINITION _encode_BufferedObservationScan */
/**
 * @summary Encodes a(n) BufferedObservationScan into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BufferedObservationScan, encoded as an ASN.1 Element.
 */
export function _encode_BufferedObservationScan(
    value: BufferedObservationScan,
    elGetter: $.ASN1Encoder<BufferedObservationScan>
) {
    if (!_cached_encoder_for_BufferedObservationScan) {
        _cached_encoder_for_BufferedObservationScan = function (
            value: BufferedObservationScan,
            elGetter: $.ASN1Encoder<BufferedObservationScan>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.objectInstance === undefined
                            ? undefined
                            : _encode_ObjectInstance(
                                  value.objectInstance,
                                  $.BER
                              ),
                        /* IF_ABSENT  */ value.reportTimeAttributeList ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () =>
                                      $._encodeSetOf<AttributeMeasure>(
                                          () => _encode_AttributeMeasure,
                                          $.BER
                                      ),
                                  $.BER
                              )(value.reportTimeAttributeList, $.BER),
                        /* IF_ABSENT  */ value.attributesBuffer === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () =>
                                      $._encodeSetOf<AttributeMeasure[]>(
                                          () =>
                                              $._encodeSequenceOf<AttributeMeasure>(
                                                  () =>
                                                      _encode_AttributeMeasure,
                                                  $.BER
                                              ),
                                          $.BER
                                      ),
                                  $.BER
                              )(value.attributesBuffer, $.BER),
                        /* IF_ABSENT  */ value.numericAttributesBuff ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  5,
                                  () =>
                                      $._encodeSequenceOf<NumericMeasure[]>(
                                          () =>
                                              $._encodeSequenceOf<NumericMeasure>(
                                                  () => _encode_NumericMeasure,
                                                  $.BER
                                              ),
                                          $.BER
                                      ),
                                  $.BER
                              )(value.numericAttributesBuff, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_BufferedObservationScan(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_BufferedObservationScan */

/* eslint-enable */
