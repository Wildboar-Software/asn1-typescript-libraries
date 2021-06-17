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
    RestoreSource,
    _decode_RestoreSource,
    _encode_RestoreSource,
} from '../BackupRestoreASN1Module/RestoreSource.ta';
export {
    RestoreSource,
    _decode_RestoreSource,
    _encode_RestoreSource,
} from '../BackupRestoreASN1Module/RestoreSource.ta';
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

/* START_OF_SYMBOL_DEFINITION RestoreArgument */
/**
 * @summary RestoreArgument
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RestoreArgument ::= SEQUENCE {
 *   restoreSource   [0]  RestoreSource,
 *   additionalInfo  [1]  SET OF ManagementExtension OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class RestoreArgument {
    constructor(
        /**
         * @summary `restoreSource`.
         * @public
         * @readonly
         */
        readonly restoreSource: RestoreSource,
        /**
         * @summary `additionalInfo`.
         * @public
         * @readonly
         */
        readonly additionalInfo: OPTIONAL<ManagementExtension[]>
    ) {}

    /**
     * @summary Restructures an object into a RestoreArgument
     * @description
     *
     * This takes an `object` and converts it to a `RestoreArgument`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RestoreArgument`.
     * @returns {RestoreArgument}
     */
    public static _from_object(
        _o: { [_K in keyof RestoreArgument]: RestoreArgument[_K] }
    ): RestoreArgument {
        return new RestoreArgument(_o.restoreSource, _o.additionalInfo);
    }
}
/* END_OF_SYMBOL_DEFINITION RestoreArgument */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_RestoreArgument */
/**
 * @summary The Leading Root Component Types of RestoreArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_RestoreArgument: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'restoreSource',
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
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_RestoreArgument */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_RestoreArgument */
/**
 * @summary The Trailing Root Component Types of RestoreArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RestoreArgument: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_RestoreArgument */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_RestoreArgument */
/**
 * @summary The Extension Addition Component Types of RestoreArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RestoreArgument: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_RestoreArgument */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RestoreArgument */
let _cached_decoder_for_RestoreArgument: $.ASN1Decoder<RestoreArgument> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RestoreArgument */

/* START_OF_SYMBOL_DEFINITION _decode_RestoreArgument */
/**
 * @summary Decodes an ASN.1 element into a(n) RestoreArgument
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RestoreArgument} The decoded data structure.
 */
export function _decode_RestoreArgument(el: _Element) {
    if (!_cached_decoder_for_RestoreArgument) {
        _cached_decoder_for_RestoreArgument = function (
            el: _Element
        ): RestoreArgument {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let restoreSource!: RestoreSource;
            let additionalInfo: OPTIONAL<ManagementExtension[]>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                restoreSource: (_el: _Element): void => {
                    restoreSource = $._decode_explicit<RestoreSource>(
                        () => _decode_RestoreSource
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
                _root_component_type_list_1_spec_for_RestoreArgument,
                _extension_additions_list_spec_for_RestoreArgument,
                _root_component_type_list_2_spec_for_RestoreArgument,
                undefined
            );
            return new RestoreArgument /* SEQUENCE_CONSTRUCTOR_CALL */(
                restoreSource,
                additionalInfo
            );
        };
    }
    return _cached_decoder_for_RestoreArgument(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RestoreArgument */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RestoreArgument */
let _cached_encoder_for_RestoreArgument: $.ASN1Encoder<RestoreArgument> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RestoreArgument */

/* START_OF_SYMBOL_DEFINITION _encode_RestoreArgument */
/**
 * @summary Encodes a(n) RestoreArgument into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RestoreArgument, encoded as an ASN.1 Element.
 */
export function _encode_RestoreArgument(
    value: RestoreArgument,
    elGetter: $.ASN1Encoder<RestoreArgument>
) {
    if (!_cached_encoder_for_RestoreArgument) {
        _cached_encoder_for_RestoreArgument = function (
            value: RestoreArgument,
            elGetter: $.ASN1Encoder<RestoreArgument>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            0,
                            () => _encode_RestoreSource,
                            $.BER
                        )(value.restoreSource, $.BER),
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
    return _cached_encoder_for_RestoreArgument(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RestoreArgument */

/* eslint-enable */
