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
    TroubleReportStatus,
    _decode_TroubleReportStatus,
    _encode_TroubleReportStatus,
} from '../X790ASN1Module/TroubleReportStatus.ta';
export {
    TroubleReportStatus,
    _decode_TroubleReportStatus,
    _encode_TroubleReportStatus,
} from '../X790ASN1Module/TroubleReportStatus.ta';
import {
    AdditionalTroubleStatusInfo,
    _decode_AdditionalTroubleStatusInfo,
    _encode_AdditionalTroubleStatusInfo,
} from '../X790ASN1Module/AdditionalTroubleStatusInfo.ta';
export {
    AdditionalTroubleStatusInfo,
    _decode_AdditionalTroubleStatusInfo,
    _encode_AdditionalTroubleStatusInfo,
} from '../X790ASN1Module/AdditionalTroubleStatusInfo.ta';

/* START_OF_SYMBOL_DEFINITION TroubleProgressInfo */
/**
 * @summary TroubleProgressInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TroubleProgressInfo ::= SEQUENCE {
 *   troubleReportStatus          [0]  TroubleReportStatus,
 *   additionalTroubleStatusInfo  [1]  AdditionalTroubleStatusInfo OPTIONAL,
 *   ...
 * }
 * ```
 *
 * @class
 */
export class TroubleProgressInfo {
    constructor(
        /**
         * @summary `troubleReportStatus`.
         * @public
         * @readonly
         */
        readonly troubleReportStatus: TroubleReportStatus,
        /**
         * @summary `additionalTroubleStatusInfo`.
         * @public
         * @readonly
         */
        readonly additionalTroubleStatusInfo: OPTIONAL<AdditionalTroubleStatusInfo>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a TroubleProgressInfo
     * @description
     *
     * This takes an `object` and converts it to a `TroubleProgressInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TroubleProgressInfo`.
     * @returns {TroubleProgressInfo}
     */
    public static _from_object(
        _o: { [_K in keyof TroubleProgressInfo]: TroubleProgressInfo[_K] }
    ): TroubleProgressInfo {
        return new TroubleProgressInfo(
            _o.troubleReportStatus,
            _o.additionalTroubleStatusInfo,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION TroubleProgressInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TroubleProgressInfo */
/**
 * @summary The Leading Root Component Types of TroubleProgressInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TroubleProgressInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'troubleReportStatus',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'additionalTroubleStatusInfo',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TroubleProgressInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TroubleProgressInfo */
/**
 * @summary The Trailing Root Component Types of TroubleProgressInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TroubleProgressInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TroubleProgressInfo */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TroubleProgressInfo */
/**
 * @summary The Extension Addition Component Types of TroubleProgressInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TroubleProgressInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TroubleProgressInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TroubleProgressInfo */
let _cached_decoder_for_TroubleProgressInfo: $.ASN1Decoder<TroubleProgressInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TroubleProgressInfo */

/* START_OF_SYMBOL_DEFINITION _decode_TroubleProgressInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) TroubleProgressInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TroubleProgressInfo} The decoded data structure.
 */
export function _decode_TroubleProgressInfo(el: _Element) {
    if (!_cached_decoder_for_TroubleProgressInfo) {
        _cached_decoder_for_TroubleProgressInfo = function (
            el: _Element
        ): TroubleProgressInfo {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let troubleReportStatus!: TroubleReportStatus;
            let additionalTroubleStatusInfo: OPTIONAL<AdditionalTroubleStatusInfo>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                troubleReportStatus: (_el: _Element): void => {
                    troubleReportStatus = $._decode_explicit<TroubleReportStatus>(
                        () => _decode_TroubleReportStatus
                    )(_el);
                },
                additionalTroubleStatusInfo: (_el: _Element): void => {
                    additionalTroubleStatusInfo = $._decode_implicit<AdditionalTroubleStatusInfo>(
                        () => _decode_AdditionalTroubleStatusInfo
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TroubleProgressInfo,
                _extension_additions_list_spec_for_TroubleProgressInfo,
                _root_component_type_list_2_spec_for_TroubleProgressInfo,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new TroubleProgressInfo /* SEQUENCE_CONSTRUCTOR_CALL */(
                troubleReportStatus,
                additionalTroubleStatusInfo,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_TroubleProgressInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TroubleProgressInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TroubleProgressInfo */
let _cached_encoder_for_TroubleProgressInfo: $.ASN1Encoder<TroubleProgressInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TroubleProgressInfo */

/* START_OF_SYMBOL_DEFINITION _encode_TroubleProgressInfo */
/**
 * @summary Encodes a(n) TroubleProgressInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TroubleProgressInfo, encoded as an ASN.1 Element.
 */
export function _encode_TroubleProgressInfo(
    value: TroubleProgressInfo,
    elGetter: $.ASN1Encoder<TroubleProgressInfo>
) {
    if (!_cached_encoder_for_TroubleProgressInfo) {
        _cached_encoder_for_TroubleProgressInfo = function (
            value: TroubleProgressInfo,
            elGetter: $.ASN1Encoder<TroubleProgressInfo>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                0,
                                () => _encode_TroubleReportStatus,
                                $.BER
                            )(value.troubleReportStatus, $.BER),
                            /* IF_ABSENT  */ value.additionalTroubleStatusInfo ===
                            undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      1,
                                      () => _encode_AdditionalTroubleStatusInfo,
                                      $.BER
                                  )(value.additionalTroubleStatusInfo, $.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_TroubleProgressInfo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TroubleProgressInfo */

/* eslint-enable */
