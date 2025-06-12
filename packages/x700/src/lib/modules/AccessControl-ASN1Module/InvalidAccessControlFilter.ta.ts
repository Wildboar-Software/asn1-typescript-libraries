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
    InvalidAccessControlFilter_errorId,
    _enum_for_InvalidAccessControlFilter_errorId,
    InvalidAccessControlFilter_errorId_duplicateId /* IMPORTED_LONG_ENUMERATION_ITEM */,
    duplicateId /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    InvalidAccessControlFilter_errorId_heterogeneousId /* IMPORTED_LONG_ENUMERATION_ITEM */,
    heterogeneousId /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    InvalidAccessControlFilter_errorId_invalidId /* IMPORTED_LONG_ENUMERATION_ITEM */,
    invalidId /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_InvalidAccessControlFilter_errorId,
    _encode_InvalidAccessControlFilter_errorId,
} from '../AccessControl-ASN1Module/InvalidAccessControlFilter-errorId.ta.js';
export {
    InvalidAccessControlFilter_errorId,
    _enum_for_InvalidAccessControlFilter_errorId,
    InvalidAccessControlFilter_errorId_duplicateId /* IMPORTED_LONG_ENUMERATION_ITEM */,
    duplicateId /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    InvalidAccessControlFilter_errorId_heterogeneousId /* IMPORTED_LONG_ENUMERATION_ITEM */,
    heterogeneousId /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    InvalidAccessControlFilter_errorId_invalidId /* IMPORTED_LONG_ENUMERATION_ITEM */,
    invalidId /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_InvalidAccessControlFilter_errorId,
    _encode_InvalidAccessControlFilter_errorId,
} from '../AccessControl-ASN1Module/InvalidAccessControlFilter-errorId.ta.js';
import {
    CMISFilter,
    _decode_CMISFilter,
    _encode_CMISFilter,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/CMISFilter.ta.js';
export {
    CMISFilter,
    _decode_CMISFilter,
    _encode_CMISFilter,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/CMISFilter.ta.js';

/* START_OF_SYMBOL_DEFINITION InvalidAccessControlFilter */
/**
 * @summary InvalidAccessControlFilter
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InvalidAccessControlFilter ::= SEQUENCE {
 *   errorId  ENUMERATED {duplicateId(0), heterogeneousId(1), invalidId(2)},
 *   filter   CMISFilter OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class InvalidAccessControlFilter {
    constructor(
        /**
         * @summary `errorId`.
         * @public
         * @readonly
         */
        readonly errorId: InvalidAccessControlFilter_errorId,
        /**
         * @summary `filter`.
         * @public
         * @readonly
         */
        readonly filter: OPTIONAL<CMISFilter>
    ) {}

    /**
     * @summary Restructures an object into a InvalidAccessControlFilter
     * @description
     *
     * This takes an `object` and converts it to a `InvalidAccessControlFilter`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `InvalidAccessControlFilter`.
     * @returns {InvalidAccessControlFilter}
     */
    public static _from_object(
        _o: {
            [_K in keyof InvalidAccessControlFilter]: InvalidAccessControlFilter[_K];
        }
    ): InvalidAccessControlFilter {
        return new InvalidAccessControlFilter(_o.errorId, _o.filter);
    }

    /**
     * @summary The enum used as the type of the component `errorId`
     * @public
     * @static
     */

    public static _enum_for_errorId = _enum_for_InvalidAccessControlFilter_errorId;
}
/* END_OF_SYMBOL_DEFINITION InvalidAccessControlFilter */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_InvalidAccessControlFilter */
/**
 * @summary The Leading Root Component Types of InvalidAccessControlFilter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_InvalidAccessControlFilter: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'errorId',
        false,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
    new $.ComponentSpec('filter', true, $.hasAnyTag, undefined, undefined),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_InvalidAccessControlFilter */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_InvalidAccessControlFilter */
/**
 * @summary The Trailing Root Component Types of InvalidAccessControlFilter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_InvalidAccessControlFilter: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_InvalidAccessControlFilter */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_InvalidAccessControlFilter */
/**
 * @summary The Extension Addition Component Types of InvalidAccessControlFilter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_InvalidAccessControlFilter: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_InvalidAccessControlFilter */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_InvalidAccessControlFilter */
let _cached_decoder_for_InvalidAccessControlFilter: $.ASN1Decoder<InvalidAccessControlFilter> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_InvalidAccessControlFilter */

/* START_OF_SYMBOL_DEFINITION _decode_InvalidAccessControlFilter */
/**
 * @summary Decodes an ASN.1 element into a(n) InvalidAccessControlFilter
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {InvalidAccessControlFilter} The decoded data structure.
 */
export function _decode_InvalidAccessControlFilter(el: _Element) {
    if (!_cached_decoder_for_InvalidAccessControlFilter) {
        _cached_decoder_for_InvalidAccessControlFilter = function (
            el: _Element
        ): InvalidAccessControlFilter {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let errorId!: InvalidAccessControlFilter_errorId;
            let filter: OPTIONAL<CMISFilter>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                errorId: (_el: _Element): void => {
                    errorId = _decode_InvalidAccessControlFilter_errorId(_el);
                },
                filter: (_el: _Element): void => {
                    filter = _decode_CMISFilter(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_InvalidAccessControlFilter,
                _extension_additions_list_spec_for_InvalidAccessControlFilter,
                _root_component_type_list_2_spec_for_InvalidAccessControlFilter,
                undefined
            );
            return new InvalidAccessControlFilter /* SEQUENCE_CONSTRUCTOR_CALL */(
                errorId,
                filter
            );
        };
    }
    return _cached_decoder_for_InvalidAccessControlFilter(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_InvalidAccessControlFilter */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_InvalidAccessControlFilter */
let _cached_encoder_for_InvalidAccessControlFilter: $.ASN1Encoder<InvalidAccessControlFilter> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_InvalidAccessControlFilter */

/* START_OF_SYMBOL_DEFINITION _encode_InvalidAccessControlFilter */
/**
 * @summary Encodes a(n) InvalidAccessControlFilter into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InvalidAccessControlFilter, encoded as an ASN.1 Element.
 */
export function _encode_InvalidAccessControlFilter(
    value: InvalidAccessControlFilter,
    elGetter: $.ASN1Encoder<InvalidAccessControlFilter>
) {
    if (!_cached_encoder_for_InvalidAccessControlFilter) {
        _cached_encoder_for_InvalidAccessControlFilter = function (
            value: InvalidAccessControlFilter,
            elGetter: $.ASN1Encoder<InvalidAccessControlFilter>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_InvalidAccessControlFilter_errorId(
                            value.errorId,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.filter === undefined
                            ? undefined
                            : _encode_CMISFilter(value.filter, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_InvalidAccessControlFilter(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_InvalidAccessControlFilter */

/* eslint-enable */
