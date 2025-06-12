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
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.js';
export {
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.js';
import {
    AttributeId,
    _decode_AttributeId,
    _encode_AttributeId,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/AttributeId.ta.js';
export {
    AttributeId,
    _decode_AttributeId,
    _encode_AttributeId,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/AttributeId.ta.js';
import {
    NumericAttributeIdArray,
    _decode_NumericAttributeIdArray,
    _encode_NumericAttributeIdArray,
} from '../SummarizationASN1Productions/NumericAttributeIdArray.ta.js';
export {
    NumericAttributeIdArray,
    _decode_NumericAttributeIdArray,
    _encode_NumericAttributeIdArray,
} from '../SummarizationASN1Productions/NumericAttributeIdArray.ta.js';
import {
    ReportTimeAttributeIdList,
    _decode_ReportTimeAttributeIdList,
    _encode_ReportTimeAttributeIdList,
} from '../SummarizationASN1Productions/ReportTimeAttributeIdList.ta.js';
export {
    ReportTimeAttributeIdList,
    _decode_ReportTimeAttributeIdList,
    _encode_ReportTimeAttributeIdList,
} from '../SummarizationASN1Productions/ReportTimeAttributeIdList.ta.js';

/* START_OF_SYMBOL_DEFINITION BufferedObservationId */
/**
 * @summary BufferedObservationId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BufferedObservationId ::= SEQUENCE {
 *   observedObject             ObjectInstance,
 *   scanAttributeIdList        [0]  SET OF AttributeId OPTIONAL,
 *   numericAttributeIdArray    [1]  NumericAttributeIdArray OPTIONAL,
 *   reportTimeAttributeIdList  [2]  ReportTimeAttributeIdList OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class BufferedObservationId {
    constructor(
        /**
         * @summary `observedObject`.
         * @public
         * @readonly
         */
        readonly observedObject: ObjectInstance,
        /**
         * @summary `scanAttributeIdList`.
         * @public
         * @readonly
         */
        readonly scanAttributeIdList: OPTIONAL<AttributeId[]>,
        /**
         * @summary `numericAttributeIdArray`.
         * @public
         * @readonly
         */
        readonly numericAttributeIdArray: OPTIONAL<NumericAttributeIdArray>,
        /**
         * @summary `reportTimeAttributeIdList`.
         * @public
         * @readonly
         */
        readonly reportTimeAttributeIdList: OPTIONAL<ReportTimeAttributeIdList>
    ) {}

    /**
     * @summary Restructures an object into a BufferedObservationId
     * @description
     *
     * This takes an `object` and converts it to a `BufferedObservationId`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BufferedObservationId`.
     * @returns {BufferedObservationId}
     */
    public static _from_object(
        _o: { [_K in keyof BufferedObservationId]: BufferedObservationId[_K] }
    ): BufferedObservationId {
        return new BufferedObservationId(
            _o.observedObject,
            _o.scanAttributeIdList,
            _o.numericAttributeIdArray,
            _o.reportTimeAttributeIdList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION BufferedObservationId */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_BufferedObservationId */
/**
 * @summary The Leading Root Component Types of BufferedObservationId
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_BufferedObservationId: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'observedObject',
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'scanAttributeIdList',
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'numericAttributeIdArray',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'reportTimeAttributeIdList',
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_BufferedObservationId */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_BufferedObservationId */
/**
 * @summary The Trailing Root Component Types of BufferedObservationId
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BufferedObservationId: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_BufferedObservationId */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_BufferedObservationId */
/**
 * @summary The Extension Addition Component Types of BufferedObservationId
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BufferedObservationId: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_BufferedObservationId */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BufferedObservationId */
let _cached_decoder_for_BufferedObservationId: $.ASN1Decoder<BufferedObservationId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BufferedObservationId */

/* START_OF_SYMBOL_DEFINITION _decode_BufferedObservationId */
/**
 * @summary Decodes an ASN.1 element into a(n) BufferedObservationId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BufferedObservationId} The decoded data structure.
 */
export function _decode_BufferedObservationId(el: _Element) {
    if (!_cached_decoder_for_BufferedObservationId) {
        _cached_decoder_for_BufferedObservationId = function (
            el: _Element
        ): BufferedObservationId {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let observedObject!: ObjectInstance;
            let scanAttributeIdList: OPTIONAL<AttributeId[]>;
            let numericAttributeIdArray: OPTIONAL<NumericAttributeIdArray>;
            let reportTimeAttributeIdList: OPTIONAL<ReportTimeAttributeIdList>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                observedObject: (_el: _Element): void => {
                    observedObject = _decode_ObjectInstance(_el);
                },
                scanAttributeIdList: (_el: _Element): void => {
                    scanAttributeIdList = $._decode_implicit<AttributeId[]>(
                        () =>
                            $._decodeSetOf<AttributeId>(
                                () => _decode_AttributeId
                            )
                    )(_el);
                },
                numericAttributeIdArray: (_el: _Element): void => {
                    numericAttributeIdArray = $._decode_implicit<NumericAttributeIdArray>(
                        () => _decode_NumericAttributeIdArray
                    )(_el);
                },
                reportTimeAttributeIdList: (_el: _Element): void => {
                    reportTimeAttributeIdList = $._decode_implicit<ReportTimeAttributeIdList>(
                        () => _decode_ReportTimeAttributeIdList
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_BufferedObservationId,
                _extension_additions_list_spec_for_BufferedObservationId,
                _root_component_type_list_2_spec_for_BufferedObservationId,
                undefined
            );
            return new BufferedObservationId /* SEQUENCE_CONSTRUCTOR_CALL */(
                observedObject,
                scanAttributeIdList,
                numericAttributeIdArray,
                reportTimeAttributeIdList
            );
        };
    }
    return _cached_decoder_for_BufferedObservationId(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BufferedObservationId */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BufferedObservationId */
let _cached_encoder_for_BufferedObservationId: $.ASN1Encoder<BufferedObservationId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BufferedObservationId */

/* START_OF_SYMBOL_DEFINITION _encode_BufferedObservationId */
/**
 * @summary Encodes a(n) BufferedObservationId into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BufferedObservationId, encoded as an ASN.1 Element.
 */
export function _encode_BufferedObservationId(
    value: BufferedObservationId,
    elGetter: $.ASN1Encoder<BufferedObservationId>
) {
    if (!_cached_encoder_for_BufferedObservationId) {
        _cached_encoder_for_BufferedObservationId = function (
            value: BufferedObservationId,
            elGetter: $.ASN1Encoder<BufferedObservationId>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ObjectInstance(
                            value.observedObject,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.scanAttributeIdList === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () =>
                                      $._encodeSetOf<AttributeId>(
                                          () => _encode_AttributeId,
                                          $.BER
                                      ),
                                  $.BER
                              )(value.scanAttributeIdList, $.BER),
                        /* IF_ABSENT  */ value.numericAttributeIdArray ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_NumericAttributeIdArray,
                                  $.BER
                              )(value.numericAttributeIdArray, $.BER),
                        /* IF_ABSENT  */ value.reportTimeAttributeIdList ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_ReportTimeAttributeIdList,
                                  $.BER
                              )(value.reportTimeAttributeIdList, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_BufferedObservationId(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_BufferedObservationId */

/* eslint-enable */
