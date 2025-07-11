/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    RecipientField,
    _decode_RecipientField,
    _encode_RecipientField,
} from '../EDIMSInformationObjects/RecipientField.ta.mjs';
import {
    NextRecipientFields,
    _decode_NextRecipientFields,
    _encode_NextRecipientFields,
} from '../EDIMSAutoActionTypes/NextRecipientFields.ta.mjs';
/**
 * @summary ForwardWithRespAccepted
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ForwardWithRespAccepted ::= SET {
 *   new-edin-receiver-name       [0]  RecipientField OPTIONAL,
 *   per-recipient-heading-field
 *     [1]  SEQUENCE SIZE (1..ub-recipients) OF NextRecipientFields
 * }
 * ```
 *
 */
export class ForwardWithRespAccepted {
    constructor(
        /**
         * @summary `new_edin_receiver_name`.
         * @public
         * @readonly
         */
        readonly new_edin_receiver_name: OPTIONAL<RecipientField>,
        /**
         * @summary `per_recipient_heading_field`.
         * @public
         * @readonly
         */
        readonly per_recipient_heading_field: NextRecipientFields[]
    ) {}

    /**
     * @summary Restructures an object into a ForwardWithRespAccepted
     * @description
     *
     * This takes an `object` and converts it to a `ForwardWithRespAccepted`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ForwardWithRespAccepted`.
     * @returns {ForwardWithRespAccepted}
     */
    public static _from_object(
        _o: {
            [_K in keyof ForwardWithRespAccepted]: ForwardWithRespAccepted[_K];
        }
    ): ForwardWithRespAccepted {
        return new ForwardWithRespAccepted(
            _o.new_edin_receiver_name,
            _o.per_recipient_heading_field
        );
    }
}

/**
 * @summary The Leading Root Component Types of ForwardWithRespAccepted
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ForwardWithRespAccepted: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'new-edin-receiver-name',
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'per-recipient-heading-field',
        false,
        $.hasTag(_TagClass.context, 1)
    ),
];

/**
 * @summary The Trailing Root Component Types of ForwardWithRespAccepted
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ForwardWithRespAccepted: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of ForwardWithRespAccepted
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ForwardWithRespAccepted: $.ComponentSpec[] = [];

let _cached_decoder_for_ForwardWithRespAccepted: $.ASN1Decoder<ForwardWithRespAccepted> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ForwardWithRespAccepted
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ForwardWithRespAccepted} The decoded data structure.
 */
export function _decode_ForwardWithRespAccepted(el: _Element): ForwardWithRespAccepted {
    if (!_cached_decoder_for_ForwardWithRespAccepted) {
        _cached_decoder_for_ForwardWithRespAccepted = function (
            el: _Element
        ): ForwardWithRespAccepted {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let new_edin_receiver_name: OPTIONAL<RecipientField>;
            let per_recipient_heading_field!: NextRecipientFields[];
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            const callbacks: $.DecodingMap = {
                'new-edin-receiver-name': (_el: _Element): void => {
                    new_edin_receiver_name = $._decode_explicit<RecipientField>(
                        () => _decode_RecipientField
                    )(_el);
                },
                'per-recipient-heading-field': (_el: _Element): void => {
                    per_recipient_heading_field = $._decode_explicit<
                        NextRecipientFields[]
                    >(() =>
                        $._decodeSequenceOf<NextRecipientFields>(
                            () => _decode_NextRecipientFields
                        )
                    )(_el);
                },
            };
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ForwardWithRespAccepted,
                _extension_additions_list_spec_for_ForwardWithRespAccepted,
                _root_component_type_list_2_spec_for_ForwardWithRespAccepted,
                undefined
            );
            return new ForwardWithRespAccepted /* SET_CONSTRUCTOR_CALL */(
                new_edin_receiver_name,
                per_recipient_heading_field
            );
        };
    }
    return _cached_decoder_for_ForwardWithRespAccepted(el);
}

let _cached_encoder_for_ForwardWithRespAccepted: $.ASN1Encoder<ForwardWithRespAccepted> | null = null;

/**
 * @summary Encodes a(n) ForwardWithRespAccepted into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ForwardWithRespAccepted, encoded as an ASN.1 Element.
 */
export function _encode_ForwardWithRespAccepted(
    value: ForwardWithRespAccepted,
    elGetter: $.ASN1Encoder<ForwardWithRespAccepted>
): _Element {
    if (!_cached_encoder_for_ForwardWithRespAccepted) {
        _cached_encoder_for_ForwardWithRespAccepted = function (
            value: ForwardWithRespAccepted        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.new_edin_receiver_name ===
                        undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_RecipientField,
                                  $.BER
                              )(value.new_edin_receiver_name, $.BER),
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            1,
                            () =>
                                $._encodeSequenceOf<NextRecipientFields>(
                                    () => _encode_NextRecipientFields,
                                    $.BER
                                ),
                            $.BER
                        )(value.per_recipient_heading_field, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ForwardWithRespAccepted(value, elGetter);
}


/* eslint-enable */
