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
    RevertInfo,
    _decode_RevertInfo,
    _encode_RevertInfo,
} from '../SWMF/RevertInfo.ta.mjs';
export {
    RevertInfo,
    _decode_RevertInfo,
    _encode_RevertInfo,
} from '../SWMF/RevertInfo.ta.mjs';
import {
    ManagementExtension,
    _decode_ManagementExtension,
    _encode_ManagementExtension,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/ManagementExtension.ta.mjs';
export {
    ManagementExtension,
    _decode_ManagementExtension,
    _encode_ManagementExtension,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/ManagementExtension.ta.mjs';

/* START_OF_SYMBOL_DEFINITION RevertArgument */
/**
 * @summary RevertArgument
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RevertArgument ::= SEQUENCE {
 *   revertInfo      [0]  RevertInfo,
 *   additionalInfo  [1]  SET OF ManagementExtension OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class RevertArgument {
    constructor(
        /**
         * @summary `revertInfo`.
         * @public
         * @readonly
         */
        readonly revertInfo: RevertInfo,
        /**
         * @summary `additionalInfo`.
         * @public
         * @readonly
         */
        readonly additionalInfo: OPTIONAL<ManagementExtension[]>
    ) {}

    /**
     * @summary Restructures an object into a RevertArgument
     * @description
     *
     * This takes an `object` and converts it to a `RevertArgument`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RevertArgument`.
     * @returns {RevertArgument}
     */
    public static _from_object(
        _o: { [_K in keyof RevertArgument]: RevertArgument[_K] }
    ): RevertArgument {
        return new RevertArgument(_o.revertInfo, _o.additionalInfo);
    }
}
/* END_OF_SYMBOL_DEFINITION RevertArgument */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_RevertArgument */
/**
 * @summary The Leading Root Component Types of RevertArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_RevertArgument: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'revertInfo',
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
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_RevertArgument */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_RevertArgument */
/**
 * @summary The Trailing Root Component Types of RevertArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RevertArgument: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_RevertArgument */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_RevertArgument */
/**
 * @summary The Extension Addition Component Types of RevertArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RevertArgument: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_RevertArgument */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RevertArgument */
let _cached_decoder_for_RevertArgument: $.ASN1Decoder<RevertArgument> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RevertArgument */

/* START_OF_SYMBOL_DEFINITION _decode_RevertArgument */
/**
 * @summary Decodes an ASN.1 element into a(n) RevertArgument
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RevertArgument} The decoded data structure.
 */
export function _decode_RevertArgument(el: _Element) {
    if (!_cached_decoder_for_RevertArgument) {
        _cached_decoder_for_RevertArgument = function (
            el: _Element
        ): RevertArgument {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let revertInfo!: RevertInfo;
            let additionalInfo: OPTIONAL<ManagementExtension[]>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                revertInfo: (_el: _Element): void => {
                    revertInfo = $._decode_implicit<RevertInfo>(
                        () => _decode_RevertInfo
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
                _root_component_type_list_1_spec_for_RevertArgument,
                _extension_additions_list_spec_for_RevertArgument,
                _root_component_type_list_2_spec_for_RevertArgument,
                undefined
            );
            return new RevertArgument /* SEQUENCE_CONSTRUCTOR_CALL */(
                revertInfo,
                additionalInfo
            );
        };
    }
    return _cached_decoder_for_RevertArgument(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RevertArgument */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RevertArgument */
let _cached_encoder_for_RevertArgument: $.ASN1Encoder<RevertArgument> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RevertArgument */

/* START_OF_SYMBOL_DEFINITION _encode_RevertArgument */
/**
 * @summary Encodes a(n) RevertArgument into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RevertArgument, encoded as an ASN.1 Element.
 */
export function _encode_RevertArgument(
    value: RevertArgument,
    elGetter: $.ASN1Encoder<RevertArgument>
) {
    if (!_cached_encoder_for_RevertArgument) {
        _cached_encoder_for_RevertArgument = function (
            value: RevertArgument,
            elGetter: $.ASN1Encoder<RevertArgument>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => _encode_RevertInfo,
                            $.BER
                        )(value.revertInfo, $.BER),
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
    return _cached_encoder_for_RevertArgument(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RevertArgument */

/* eslint-enable */
