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
    BackupResult,
    _decode_BackupResult,
    _encode_BackupResult,
} from '../SWMF/BackupResult.ta';
export {
    BackupResult,
    _decode_BackupResult,
    _encode_BackupResult,
} from '../SWMF/BackupResult.ta';
import {
    ManagementExtension,
    _decode_ManagementExtension,
    _encode_ManagementExtension,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/ManagementExtension.ta';
export {
    ManagementExtension,
    _decode_ManagementExtension,
    _encode_ManagementExtension,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/ManagementExtension.ta';

/* START_OF_SYMBOL_DEFINITION AutoBackupReportInfo */
/**
 * @summary AutoBackupReportInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AutoBackupReportInfo ::= SEQUENCE {
 *   backupResult    [0]  BackupResult,
 *   additionalInfo  [1]  SET OF ManagementExtension OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class AutoBackupReportInfo {
    constructor(
        /**
         * @summary `backupResult`.
         * @public
         * @readonly
         */
        readonly backupResult: BackupResult,
        /**
         * @summary `additionalInfo`.
         * @public
         * @readonly
         */
        readonly additionalInfo: OPTIONAL<ManagementExtension[]>
    ) {}

    /**
     * @summary Restructures an object into a AutoBackupReportInfo
     * @description
     *
     * This takes an `object` and converts it to a `AutoBackupReportInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AutoBackupReportInfo`.
     * @returns {AutoBackupReportInfo}
     */
    public static _from_object(
        _o: { [_K in keyof AutoBackupReportInfo]: AutoBackupReportInfo[_K] }
    ): AutoBackupReportInfo {
        return new AutoBackupReportInfo(_o.backupResult, _o.additionalInfo);
    }
}
/* END_OF_SYMBOL_DEFINITION AutoBackupReportInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AutoBackupReportInfo */
/**
 * @summary The Leading Root Component Types of AutoBackupReportInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AutoBackupReportInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'backupResult',
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
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AutoBackupReportInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AutoBackupReportInfo */
/**
 * @summary The Trailing Root Component Types of AutoBackupReportInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AutoBackupReportInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AutoBackupReportInfo */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AutoBackupReportInfo */
/**
 * @summary The Extension Addition Component Types of AutoBackupReportInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AutoBackupReportInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AutoBackupReportInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AutoBackupReportInfo */
let _cached_decoder_for_AutoBackupReportInfo: $.ASN1Decoder<AutoBackupReportInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AutoBackupReportInfo */

/* START_OF_SYMBOL_DEFINITION _decode_AutoBackupReportInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) AutoBackupReportInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AutoBackupReportInfo} The decoded data structure.
 */
export function _decode_AutoBackupReportInfo(el: _Element) {
    if (!_cached_decoder_for_AutoBackupReportInfo) {
        _cached_decoder_for_AutoBackupReportInfo = function (
            el: _Element
        ): AutoBackupReportInfo {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let backupResult!: BackupResult;
            let additionalInfo: OPTIONAL<ManagementExtension[]>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                backupResult: (_el: _Element): void => {
                    backupResult = $._decode_explicit<BackupResult>(
                        () => _decode_BackupResult
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
                _root_component_type_list_1_spec_for_AutoBackupReportInfo,
                _extension_additions_list_spec_for_AutoBackupReportInfo,
                _root_component_type_list_2_spec_for_AutoBackupReportInfo,
                undefined
            );
            return new AutoBackupReportInfo /* SEQUENCE_CONSTRUCTOR_CALL */(
                backupResult,
                additionalInfo
            );
        };
    }
    return _cached_decoder_for_AutoBackupReportInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AutoBackupReportInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AutoBackupReportInfo */
let _cached_encoder_for_AutoBackupReportInfo: $.ASN1Encoder<AutoBackupReportInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AutoBackupReportInfo */

/* START_OF_SYMBOL_DEFINITION _encode_AutoBackupReportInfo */
/**
 * @summary Encodes a(n) AutoBackupReportInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AutoBackupReportInfo, encoded as an ASN.1 Element.
 */
export function _encode_AutoBackupReportInfo(
    value: AutoBackupReportInfo,
    elGetter: $.ASN1Encoder<AutoBackupReportInfo>
) {
    if (!_cached_encoder_for_AutoBackupReportInfo) {
        _cached_encoder_for_AutoBackupReportInfo = function (
            value: AutoBackupReportInfo,
            elGetter: $.ASN1Encoder<AutoBackupReportInfo>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            0,
                            () => _encode_BackupResult,
                            $.BER
                        )(value.backupResult, $.BER),
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
    return _cached_encoder_for_AutoBackupReportInfo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AutoBackupReportInfo */

/* eslint-enable */
