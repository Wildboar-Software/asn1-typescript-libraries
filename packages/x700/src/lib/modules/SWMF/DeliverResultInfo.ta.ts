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
    DeliverId,
    _decode_DeliverId,
    _encode_DeliverId,
} from '../SWMF/DeliverId.ta.js';
export {
    DeliverId,
    _decode_DeliverId,
    _encode_DeliverId,
} from '../SWMF/DeliverId.ta.js';
import {
    DeliverResult,
    DeliverResult_pass /* IMPORTED_LONG_NAMED_INTEGER */,
    pass /* IMPORTED_SHORT_NAMED_INTEGER */,
    DeliverResult_communicationError /* IMPORTED_LONG_NAMED_INTEGER */,
    communicationError /* IMPORTED_SHORT_NAMED_INTEGER */,
    DeliverResult_equipmentError /* IMPORTED_LONG_NAMED_INTEGER */,
    equipmentError /* IMPORTED_SHORT_NAMED_INTEGER */,
    DeliverResult_qosError /* IMPORTED_LONG_NAMED_INTEGER */,
    qosError /* IMPORTED_SHORT_NAMED_INTEGER */,
    DeliverResult_accessDenied /* IMPORTED_LONG_NAMED_INTEGER */,
    accessDenied /* IMPORTED_SHORT_NAMED_INTEGER */,
    DeliverResult_notFound /* IMPORTED_LONG_NAMED_INTEGER */,
    notFound /* IMPORTED_SHORT_NAMED_INTEGER */,
    DeliverResult_insufficientSpace /* IMPORTED_LONG_NAMED_INTEGER */,
    insufficientSpace /* IMPORTED_SHORT_NAMED_INTEGER */,
    DeliverResult_alreadyDelivered /* IMPORTED_LONG_NAMED_INTEGER */,
    alreadyDelivered /* IMPORTED_SHORT_NAMED_INTEGER */,
    DeliverResult_inProgress /* IMPORTED_LONG_NAMED_INTEGER */,
    inProgress /* IMPORTED_SHORT_NAMED_INTEGER */,
    DeliverResult_unknown /* IMPORTED_LONG_NAMED_INTEGER */,
    unknown /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_DeliverResult,
    _encode_DeliverResult,
} from '../SWMF/DeliverResult.ta.js';
export {
    DeliverResult,
    DeliverResult_pass /* IMPORTED_LONG_NAMED_INTEGER */,
    pass /* IMPORTED_SHORT_NAMED_INTEGER */,
    DeliverResult_communicationError /* IMPORTED_LONG_NAMED_INTEGER */,
    communicationError /* IMPORTED_SHORT_NAMED_INTEGER */,
    DeliverResult_equipmentError /* IMPORTED_LONG_NAMED_INTEGER */,
    equipmentError /* IMPORTED_SHORT_NAMED_INTEGER */,
    DeliverResult_qosError /* IMPORTED_LONG_NAMED_INTEGER */,
    qosError /* IMPORTED_SHORT_NAMED_INTEGER */,
    DeliverResult_accessDenied /* IMPORTED_LONG_NAMED_INTEGER */,
    accessDenied /* IMPORTED_SHORT_NAMED_INTEGER */,
    DeliverResult_notFound /* IMPORTED_LONG_NAMED_INTEGER */,
    notFound /* IMPORTED_SHORT_NAMED_INTEGER */,
    DeliverResult_insufficientSpace /* IMPORTED_LONG_NAMED_INTEGER */,
    insufficientSpace /* IMPORTED_SHORT_NAMED_INTEGER */,
    DeliverResult_alreadyDelivered /* IMPORTED_LONG_NAMED_INTEGER */,
    alreadyDelivered /* IMPORTED_SHORT_NAMED_INTEGER */,
    DeliverResult_inProgress /* IMPORTED_LONG_NAMED_INTEGER */,
    inProgress /* IMPORTED_SHORT_NAMED_INTEGER */,
    DeliverResult_unknown /* IMPORTED_LONG_NAMED_INTEGER */,
    unknown /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_DeliverResult,
    _encode_DeliverResult,
} from '../SWMF/DeliverResult.ta.js';
import {
    ManagementExtension,
    _decode_ManagementExtension,
    _encode_ManagementExtension,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/ManagementExtension.ta.js';
export {
    ManagementExtension,
    _decode_ManagementExtension,
    _encode_ManagementExtension,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/ManagementExtension.ta.js';

/* START_OF_SYMBOL_DEFINITION DeliverResultInfo */
/**
 * @summary DeliverResultInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeliverResultInfo ::= SEQUENCE {
 *   deliverId       [0]  DeliverId OPTIONAL,
 *   deliverResult   [1]  DeliverResult,
 *   additionalInfo  SET OF ManagementExtension OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class DeliverResultInfo {
    constructor(
        /**
         * @summary `deliverId`.
         * @public
         * @readonly
         */
        readonly deliverId: OPTIONAL<DeliverId>,
        /**
         * @summary `deliverResult`.
         * @public
         * @readonly
         */
        readonly deliverResult: DeliverResult,
        /**
         * @summary `additionalInfo`.
         * @public
         * @readonly
         */
        readonly additionalInfo: OPTIONAL<ManagementExtension[]>
    ) {}

    /**
     * @summary Restructures an object into a DeliverResultInfo
     * @description
     *
     * This takes an `object` and converts it to a `DeliverResultInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DeliverResultInfo`.
     * @returns {DeliverResultInfo}
     */
    public static _from_object(
        _o: { [_K in keyof DeliverResultInfo]: DeliverResultInfo[_K] }
    ): DeliverResultInfo {
        return new DeliverResultInfo(
            _o.deliverId,
            _o.deliverResult,
            _o.additionalInfo
        );
    }
}
/* END_OF_SYMBOL_DEFINITION DeliverResultInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DeliverResultInfo */
/**
 * @summary The Leading Root Component Types of DeliverResultInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DeliverResultInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'deliverId',
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'deliverResult',
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'additionalInfo',
        true,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DeliverResultInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DeliverResultInfo */
/**
 * @summary The Trailing Root Component Types of DeliverResultInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DeliverResultInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DeliverResultInfo */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DeliverResultInfo */
/**
 * @summary The Extension Addition Component Types of DeliverResultInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DeliverResultInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DeliverResultInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DeliverResultInfo */
let _cached_decoder_for_DeliverResultInfo: $.ASN1Decoder<DeliverResultInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DeliverResultInfo */

/* START_OF_SYMBOL_DEFINITION _decode_DeliverResultInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) DeliverResultInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DeliverResultInfo} The decoded data structure.
 */
export function _decode_DeliverResultInfo(el: _Element) {
    if (!_cached_decoder_for_DeliverResultInfo) {
        _cached_decoder_for_DeliverResultInfo = function (
            el: _Element
        ): DeliverResultInfo {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let deliverId: OPTIONAL<DeliverId>;
            let deliverResult!: DeliverResult;
            let additionalInfo: OPTIONAL<ManagementExtension[]>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                deliverId: (_el: _Element): void => {
                    deliverId = $._decode_explicit<DeliverId>(
                        () => _decode_DeliverId
                    )(_el);
                },
                deliverResult: (_el: _Element): void => {
                    deliverResult = $._decode_implicit<DeliverResult>(
                        () => _decode_DeliverResult
                    )(_el);
                },
                additionalInfo: (_el: _Element): void => {
                    additionalInfo = $._decodeSetOf<ManagementExtension>(
                        () => _decode_ManagementExtension
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_DeliverResultInfo,
                _extension_additions_list_spec_for_DeliverResultInfo,
                _root_component_type_list_2_spec_for_DeliverResultInfo,
                undefined
            );
            return new DeliverResultInfo /* SEQUENCE_CONSTRUCTOR_CALL */(
                deliverId,
                deliverResult,
                additionalInfo
            );
        };
    }
    return _cached_decoder_for_DeliverResultInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DeliverResultInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DeliverResultInfo */
let _cached_encoder_for_DeliverResultInfo: $.ASN1Encoder<DeliverResultInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DeliverResultInfo */

/* START_OF_SYMBOL_DEFINITION _encode_DeliverResultInfo */
/**
 * @summary Encodes a(n) DeliverResultInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeliverResultInfo, encoded as an ASN.1 Element.
 */
export function _encode_DeliverResultInfo(
    value: DeliverResultInfo,
    elGetter: $.ASN1Encoder<DeliverResultInfo>
) {
    if (!_cached_encoder_for_DeliverResultInfo) {
        _cached_encoder_for_DeliverResultInfo = function (
            value: DeliverResultInfo,
            elGetter: $.ASN1Encoder<DeliverResultInfo>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.deliverId === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_DeliverId,
                                  $.BER
                              )(value.deliverId, $.BER),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            1,
                            () => _encode_DeliverResult,
                            $.BER
                        )(value.deliverResult, $.BER),
                        /* IF_ABSENT  */ value.additionalInfo === undefined
                            ? undefined
                            : $._encodeSetOf<ManagementExtension>(
                                  () => _encode_ManagementExtension,
                                  $.BER
                              )(value.additionalInfo, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_DeliverResultInfo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DeliverResultInfo */

/* eslint-enable */
