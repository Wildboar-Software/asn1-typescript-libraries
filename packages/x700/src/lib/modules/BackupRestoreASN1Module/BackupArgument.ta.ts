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
    BackupDestination,
    _decode_BackupDestination,
    _encode_BackupDestination,
} from '../BackupRestoreASN1Module/BackupDestination.ta.js';
export {
    BackupDestination,
    _decode_BackupDestination,
    _encode_BackupDestination,
} from '../BackupRestoreASN1Module/BackupDestination.ta.js';
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

/* START_OF_SYMBOL_DEFINITION BackupArgument */
/**
 * @summary BackupArgument
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BackupArgument ::= SEQUENCE {
 *   backupDestination  [0]  BackupDestination,
 *   additionalInfo     [1]  SET OF ManagementExtension OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class BackupArgument {
    constructor(
        /**
         * @summary `backupDestination`.
         * @public
         * @readonly
         */
        readonly backupDestination: BackupDestination,
        /**
         * @summary `additionalInfo`.
         * @public
         * @readonly
         */
        readonly additionalInfo: OPTIONAL<ManagementExtension[]>
    ) {}

    /**
     * @summary Restructures an object into a BackupArgument
     * @description
     *
     * This takes an `object` and converts it to a `BackupArgument`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BackupArgument`.
     * @returns {BackupArgument}
     */
    public static _from_object(
        _o: { [_K in keyof BackupArgument]: BackupArgument[_K] }
    ): BackupArgument {
        return new BackupArgument(_o.backupDestination, _o.additionalInfo);
    }
}
/* END_OF_SYMBOL_DEFINITION BackupArgument */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_BackupArgument */
/**
 * @summary The Leading Root Component Types of BackupArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_BackupArgument: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'backupDestination',
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
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_BackupArgument */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_BackupArgument */
/**
 * @summary The Trailing Root Component Types of BackupArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BackupArgument: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_BackupArgument */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_BackupArgument */
/**
 * @summary The Extension Addition Component Types of BackupArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BackupArgument: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_BackupArgument */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BackupArgument */
let _cached_decoder_for_BackupArgument: $.ASN1Decoder<BackupArgument> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BackupArgument */

/* START_OF_SYMBOL_DEFINITION _decode_BackupArgument */
/**
 * @summary Decodes an ASN.1 element into a(n) BackupArgument
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BackupArgument} The decoded data structure.
 */
export function _decode_BackupArgument(el: _Element) {
    if (!_cached_decoder_for_BackupArgument) {
        _cached_decoder_for_BackupArgument = function (
            el: _Element
        ): BackupArgument {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let backupDestination!: BackupDestination;
            let additionalInfo: OPTIONAL<ManagementExtension[]>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                backupDestination: (_el: _Element): void => {
                    backupDestination = $._decode_explicit<BackupDestination>(
                        () => _decode_BackupDestination
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
                _root_component_type_list_1_spec_for_BackupArgument,
                _extension_additions_list_spec_for_BackupArgument,
                _root_component_type_list_2_spec_for_BackupArgument,
                undefined
            );
            return new BackupArgument /* SEQUENCE_CONSTRUCTOR_CALL */(
                backupDestination,
                additionalInfo
            );
        };
    }
    return _cached_decoder_for_BackupArgument(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BackupArgument */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BackupArgument */
let _cached_encoder_for_BackupArgument: $.ASN1Encoder<BackupArgument> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BackupArgument */

/* START_OF_SYMBOL_DEFINITION _encode_BackupArgument */
/**
 * @summary Encodes a(n) BackupArgument into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BackupArgument, encoded as an ASN.1 Element.
 */
export function _encode_BackupArgument(
    value: BackupArgument,
    elGetter: $.ASN1Encoder<BackupArgument>
) {
    if (!_cached_encoder_for_BackupArgument) {
        _cached_encoder_for_BackupArgument = function (
            value: BackupArgument,
            elGetter: $.ASN1Encoder<BackupArgument>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            0,
                            () => _encode_BackupDestination,
                            $.BER
                        )(value.backupDestination, $.BER),
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
    return _cached_encoder_for_BackupArgument(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_BackupArgument */

/* eslint-enable */
