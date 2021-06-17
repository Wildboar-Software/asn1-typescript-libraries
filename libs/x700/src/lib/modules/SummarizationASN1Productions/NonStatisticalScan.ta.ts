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

/* START_OF_SYMBOL_DEFINITION NonStatisticalScan */
/**
 * @summary NonStatisticalScan
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NonStatisticalScan ::= SEQUENCE {
 *   objectInstance   ObjectInstance OPTIONAL,
 *   -- not present if suppress object instance suppression is on
 *   attributeValues  SET OF AttributeMeasure OPTIONAL
 *   -- not present if scan attribute identifier list is empty
 * }
 * ```
 *
 * @class
 */
export class NonStatisticalScan {
    constructor(
        /**
         * @summary `objectInstance`.
         * @public
         * @readonly
         */
        readonly objectInstance: OPTIONAL<ObjectInstance>,
        /**
         * @summary `attributeValues`.
         * @public
         * @readonly
         */
        readonly attributeValues: OPTIONAL<AttributeMeasure[]>
    ) {}

    /**
     * @summary Restructures an object into a NonStatisticalScan
     * @description
     *
     * This takes an `object` and converts it to a `NonStatisticalScan`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NonStatisticalScan`.
     * @returns {NonStatisticalScan}
     */
    public static _from_object(
        _o: { [_K in keyof NonStatisticalScan]: NonStatisticalScan[_K] }
    ): NonStatisticalScan {
        return new NonStatisticalScan(_o.objectInstance, _o.attributeValues);
    }
}
/* END_OF_SYMBOL_DEFINITION NonStatisticalScan */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_NonStatisticalScan */
/**
 * @summary The Leading Root Component Types of NonStatisticalScan
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_NonStatisticalScan: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'objectInstance',
        true,
        $.hasAnyTag,
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'attributeValues',
        true,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_NonStatisticalScan */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_NonStatisticalScan */
/**
 * @summary The Trailing Root Component Types of NonStatisticalScan
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_NonStatisticalScan: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_NonStatisticalScan */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_NonStatisticalScan */
/**
 * @summary The Extension Addition Component Types of NonStatisticalScan
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_NonStatisticalScan: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_NonStatisticalScan */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NonStatisticalScan */
let _cached_decoder_for_NonStatisticalScan: $.ASN1Decoder<NonStatisticalScan> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NonStatisticalScan */

/* START_OF_SYMBOL_DEFINITION _decode_NonStatisticalScan */
/**
 * @summary Decodes an ASN.1 element into a(n) NonStatisticalScan
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NonStatisticalScan} The decoded data structure.
 */
export function _decode_NonStatisticalScan(el: _Element) {
    if (!_cached_decoder_for_NonStatisticalScan) {
        _cached_decoder_for_NonStatisticalScan = function (
            el: _Element
        ): NonStatisticalScan {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let objectInstance: OPTIONAL<ObjectInstance>;
            let attributeValues: OPTIONAL<AttributeMeasure[]>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                objectInstance: (_el: _Element): void => {
                    objectInstance = _decode_ObjectInstance(_el);
                },
                attributeValues: (_el: _Element): void => {
                    attributeValues = $._decodeSetOf<AttributeMeasure>(
                        () => _decode_AttributeMeasure
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_NonStatisticalScan,
                _extension_additions_list_spec_for_NonStatisticalScan,
                _root_component_type_list_2_spec_for_NonStatisticalScan,
                undefined
            );
            return new NonStatisticalScan /* SEQUENCE_CONSTRUCTOR_CALL */(
                objectInstance,
                attributeValues
            );
        };
    }
    return _cached_decoder_for_NonStatisticalScan(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_NonStatisticalScan */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NonStatisticalScan */
let _cached_encoder_for_NonStatisticalScan: $.ASN1Encoder<NonStatisticalScan> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NonStatisticalScan */

/* START_OF_SYMBOL_DEFINITION _encode_NonStatisticalScan */
/**
 * @summary Encodes a(n) NonStatisticalScan into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NonStatisticalScan, encoded as an ASN.1 Element.
 */
export function _encode_NonStatisticalScan(
    value: NonStatisticalScan,
    elGetter: $.ASN1Encoder<NonStatisticalScan>
) {
    if (!_cached_encoder_for_NonStatisticalScan) {
        _cached_encoder_for_NonStatisticalScan = function (
            value: NonStatisticalScan,
            elGetter: $.ASN1Encoder<NonStatisticalScan>
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
                        /* IF_ABSENT  */ value.attributeValues === undefined
                            ? undefined
                            : $._encodeSetOf<AttributeMeasure>(
                                  () => _encode_AttributeMeasure,
                                  $.BER
                              )(value.attributeValues, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_NonStatisticalScan(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_NonStatisticalScan */

/* eslint-enable */
