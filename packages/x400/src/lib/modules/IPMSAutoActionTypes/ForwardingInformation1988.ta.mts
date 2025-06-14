/* eslint-disable */
import {
    OPTIONAL,
    PrintableString,
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
    AutoForwardComment,
    _decode_AutoForwardComment,
    _encode_AutoForwardComment,
} from '../IPMSInformationObjects/AutoForwardComment.ta.mjs';
import {
    IA5TextBodyPart,
    _decode_IA5TextBodyPart,
    _encode_IA5TextBodyPart,
} from '../IPMSInformationObjects/IA5TextBodyPart.ta.mjs';
/* START_OF_SYMBOL_DEFINITION ForwardingInformation1988 */
/**
 * @summary ForwardingInformation1988
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ForwardingInformation1988 ::= SET {
 *   auto-forwarding-comment  [0] IMPLICIT AutoForwardComment OPTIONAL,
 *   ia5-cover-note           [1] IMPLICIT IA5TextBodyPart OPTIONAL,
 *   this-ipm-prefix
 *     [2] IMPLICIT PrintableString(SIZE (1..ub-ipm-identifier-suffix)) OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class ForwardingInformation1988 {
    constructor(
        /**
         * @summary `auto_forwarding_comment`.
         * @public
         * @readonly
         */
        readonly auto_forwarding_comment: OPTIONAL<AutoForwardComment>,
        /**
         * @summary `ia5_cover_note`.
         * @public
         * @readonly
         */
        readonly ia5_cover_note: OPTIONAL<IA5TextBodyPart>,
        /**
         * @summary `this_ipm_prefix`.
         * @public
         * @readonly
         */
        readonly this_ipm_prefix: OPTIONAL<PrintableString>
    ) {}

    /**
     * @summary Restructures an object into a ForwardingInformation1988
     * @description
     *
     * This takes an `object` and converts it to a `ForwardingInformation1988`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ForwardingInformation1988`.
     * @returns {ForwardingInformation1988}
     */
    public static _from_object(
        _o: {
            [_K in keyof ForwardingInformation1988]: ForwardingInformation1988[_K];
        }
    ): ForwardingInformation1988 {
        return new ForwardingInformation1988(
            _o.auto_forwarding_comment,
            _o.ia5_cover_note,
            _o.this_ipm_prefix
        );
    }
}
/* END_OF_SYMBOL_DEFINITION ForwardingInformation1988 */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ForwardingInformation1988 */
/**
 * @summary The Leading Root Component Types of ForwardingInformation1988
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ForwardingInformation1988: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'auto-forwarding-comment',
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'ia5-cover-note',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'this-ipm-prefix',
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ForwardingInformation1988 */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ForwardingInformation1988 */
/**
 * @summary The Trailing Root Component Types of ForwardingInformation1988
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ForwardingInformation1988: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ForwardingInformation1988 */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ForwardingInformation1988 */
/**
 * @summary The Extension Addition Component Types of ForwardingInformation1988
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ForwardingInformation1988: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ForwardingInformation1988 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ForwardingInformation1988 */
let _cached_decoder_for_ForwardingInformation1988: $.ASN1Decoder<ForwardingInformation1988> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ForwardingInformation1988 */

/* START_OF_SYMBOL_DEFINITION _decode_ForwardingInformation1988 */
/**
 * @summary Decodes an ASN.1 element into a(n) ForwardingInformation1988
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ForwardingInformation1988} The decoded data structure.
 */
export function _decode_ForwardingInformation1988(el: _Element) {
    if (!_cached_decoder_for_ForwardingInformation1988) {
        _cached_decoder_for_ForwardingInformation1988 = function (
            el: _Element
        ): ForwardingInformation1988 {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let auto_forwarding_comment: OPTIONAL<AutoForwardComment>;
            let ia5_cover_note: OPTIONAL<IA5TextBodyPart>;
            let this_ipm_prefix: OPTIONAL<PrintableString>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'auto-forwarding-comment': (_el: _Element): void => {
                    auto_forwarding_comment = $._decode_implicit<AutoForwardComment>(
                        () => _decode_AutoForwardComment
                    )(_el);
                },
                'ia5-cover-note': (_el: _Element): void => {
                    ia5_cover_note = $._decode_implicit<IA5TextBodyPart>(
                        () => _decode_IA5TextBodyPart
                    )(_el);
                },
                'this-ipm-prefix': (_el: _Element): void => {
                    this_ipm_prefix = $._decode_implicit<PrintableString>(
                        () => $._decodePrintableString
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ForwardingInformation1988,
                _extension_additions_list_spec_for_ForwardingInformation1988,
                _root_component_type_list_2_spec_for_ForwardingInformation1988,
                undefined
            );
            return new ForwardingInformation1988 /* SET_CONSTRUCTOR_CALL */(
                auto_forwarding_comment,
                ia5_cover_note,
                this_ipm_prefix
            );
        };
    }
    return _cached_decoder_for_ForwardingInformation1988(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ForwardingInformation1988 */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ForwardingInformation1988 */
let _cached_encoder_for_ForwardingInformation1988: $.ASN1Encoder<ForwardingInformation1988> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ForwardingInformation1988 */

/* START_OF_SYMBOL_DEFINITION _encode_ForwardingInformation1988 */
/**
 * @summary Encodes a(n) ForwardingInformation1988 into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ForwardingInformation1988, encoded as an ASN.1 Element.
 */
export function _encode_ForwardingInformation1988(
    value: ForwardingInformation1988,
    elGetter: $.ASN1Encoder<ForwardingInformation1988>
) {
    if (!_cached_encoder_for_ForwardingInformation1988) {
        _cached_encoder_for_ForwardingInformation1988 = function (
            value: ForwardingInformation1988        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.auto_forwarding_comment ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_AutoForwardComment,
                                  $.BER
                              )(value.auto_forwarding_comment, $.BER),
                        /* IF_ABSENT  */ value.ia5_cover_note === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_IA5TextBodyPart,
                                  $.BER
                              )(value.ia5_cover_note, $.BER),
                        /* IF_ABSENT  */ value.this_ipm_prefix === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => $._encodePrintableString,
                                  $.BER
                              )(value.this_ipm_prefix, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ForwardingInformation1988(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ForwardingInformation1988 */

/* eslint-enable */
