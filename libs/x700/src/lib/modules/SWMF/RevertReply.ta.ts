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
    AppliedPatches,
    _decode_AppliedPatches,
    _encode_AppliedPatches,
} from '../SWMF/AppliedPatches.ta';
export {
    AppliedPatches,
    _decode_AppliedPatches,
    _encode_AppliedPatches,
} from '../SWMF/AppliedPatches.ta';
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

/* START_OF_SYMBOL_DEFINITION RevertReply */
/**
 * @summary RevertReply
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RevertReply ::= SEQUENCE {
 *   revertedPatches  [0]  AppliedPatches,
 *   additionalInfo   [1]  SET OF ManagementExtension OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class RevertReply {
    constructor(
        /**
         * @summary `revertedPatches`.
         * @public
         * @readonly
         */
        readonly revertedPatches: AppliedPatches,
        /**
         * @summary `additionalInfo`.
         * @public
         * @readonly
         */
        readonly additionalInfo: OPTIONAL<ManagementExtension[]>
    ) {}

    /**
     * @summary Restructures an object into a RevertReply
     * @description
     *
     * This takes an `object` and converts it to a `RevertReply`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RevertReply`.
     * @returns {RevertReply}
     */
    public static _from_object(
        _o: { [_K in keyof RevertReply]: RevertReply[_K] }
    ): RevertReply {
        return new RevertReply(_o.revertedPatches, _o.additionalInfo);
    }
}
/* END_OF_SYMBOL_DEFINITION RevertReply */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_RevertReply */
/**
 * @summary The Leading Root Component Types of RevertReply
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_RevertReply: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'revertedPatches',
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
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_RevertReply */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_RevertReply */
/**
 * @summary The Trailing Root Component Types of RevertReply
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RevertReply: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_RevertReply */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_RevertReply */
/**
 * @summary The Extension Addition Component Types of RevertReply
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RevertReply: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_RevertReply */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RevertReply */
let _cached_decoder_for_RevertReply: $.ASN1Decoder<RevertReply> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RevertReply */

/* START_OF_SYMBOL_DEFINITION _decode_RevertReply */
/**
 * @summary Decodes an ASN.1 element into a(n) RevertReply
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RevertReply} The decoded data structure.
 */
export function _decode_RevertReply(el: _Element) {
    if (!_cached_decoder_for_RevertReply) {
        _cached_decoder_for_RevertReply = function (el: _Element): RevertReply {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let revertedPatches!: AppliedPatches;
            let additionalInfo: OPTIONAL<ManagementExtension[]>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                revertedPatches: (_el: _Element): void => {
                    revertedPatches = $._decode_implicit<AppliedPatches>(
                        () => _decode_AppliedPatches
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
                _root_component_type_list_1_spec_for_RevertReply,
                _extension_additions_list_spec_for_RevertReply,
                _root_component_type_list_2_spec_for_RevertReply,
                undefined
            );
            return new RevertReply /* SEQUENCE_CONSTRUCTOR_CALL */(
                revertedPatches,
                additionalInfo
            );
        };
    }
    return _cached_decoder_for_RevertReply(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RevertReply */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RevertReply */
let _cached_encoder_for_RevertReply: $.ASN1Encoder<RevertReply> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RevertReply */

/* START_OF_SYMBOL_DEFINITION _encode_RevertReply */
/**
 * @summary Encodes a(n) RevertReply into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RevertReply, encoded as an ASN.1 Element.
 */
export function _encode_RevertReply(
    value: RevertReply,
    elGetter: $.ASN1Encoder<RevertReply>
) {
    if (!_cached_encoder_for_RevertReply) {
        _cached_encoder_for_RevertReply = function (
            value: RevertReply,
            elGetter: $.ASN1Encoder<RevertReply>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => _encode_AppliedPatches,
                            $.BER
                        )(value.revertedPatches, $.BER),
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
    return _cached_encoder_for_RevertReply(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RevertReply */

/* eslint-enable */
