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
    ORName,
    _decode_ORName,
    _encode_ORName,
} from '../MTSAbstractService/ORName.ta.mjs';
import {
    EDIMIdentifier,
    _decode_EDIMIdentifier,
    _encode_EDIMIdentifier,
} from '../EDIMSInformationObjects/EDIMIdentifier.ta.mjs';
import {
    FirstRecipientField,
    _decode_FirstRecipientField,
    _encode_FirstRecipientField,
} from '../EDIMSInformationObjects/FirstRecipientField.ta.mjs';
/**
 * @summary EDINReceiverField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EDINReceiverField ::= SEQUENCE {
 *   edin-receiver-name        [0]  ORName,
 *   original-edim-identifier  [1]  EDIMIdentifier OPTIONAL,
 *   first-recipient           [2]  FirstRecipientField OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class EDINReceiverField {
    constructor(
        /**
         * @summary `edin_receiver_name`.
         * @public
         * @readonly
         */
        readonly edin_receiver_name: ORName,
        /**
         * @summary `original_edim_identifier`.
         * @public
         * @readonly
         */
        readonly original_edim_identifier: OPTIONAL<EDIMIdentifier>,
        /**
         * @summary `first_recipient`.
         * @public
         * @readonly
         */
        readonly first_recipient: OPTIONAL<FirstRecipientField>
    ) {}

    /**
     * @summary Restructures an object into a EDINReceiverField
     * @description
     *
     * This takes an `object` and converts it to a `EDINReceiverField`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EDINReceiverField`.
     * @returns {EDINReceiverField}
     */
    public static _from_object(
        _o: { [_K in keyof EDINReceiverField]: EDINReceiverField[_K] }
    ): EDINReceiverField {
        return new EDINReceiverField(
            _o.edin_receiver_name,
            _o.original_edim_identifier,
            _o.first_recipient
        );
    }
}

/**
 * @summary The Leading Root Component Types of EDINReceiverField
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_EDINReceiverField: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'edin-receiver-name',
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'original-edim-identifier',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'first-recipient',
        true,
        $.hasTag(_TagClass.context, 2)
    ),
];

/**
 * @summary The Trailing Root Component Types of EDINReceiverField
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_EDINReceiverField: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of EDINReceiverField
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_EDINReceiverField: $.ComponentSpec[] = [];

let _cached_decoder_for_EDINReceiverField: $.ASN1Decoder<EDINReceiverField> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EDINReceiverField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EDINReceiverField} The decoded data structure.
 */
export function _decode_EDINReceiverField(el: _Element) {
    if (!_cached_decoder_for_EDINReceiverField) {
        _cached_decoder_for_EDINReceiverField = function (
            el: _Element
        ): EDINReceiverField {
            let edin_receiver_name!: ORName;
            let original_edim_identifier: OPTIONAL<EDIMIdentifier>;
            let first_recipient: OPTIONAL<FirstRecipientField>;
            const callbacks: $.DecodingMap = {
                'edin-receiver-name': (_el: _Element): void => {
                    edin_receiver_name = $._decode_implicit<ORName>(
                        () => _decode_ORName
                    )(_el);
                },
                'original-edim-identifier': (_el: _Element): void => {
                    original_edim_identifier = $._decode_implicit<EDIMIdentifier>(
                        () => _decode_EDIMIdentifier
                    )(_el);
                },
                'first-recipient': (_el: _Element): void => {
                    first_recipient = $._decode_implicit<FirstRecipientField>(
                        () => _decode_FirstRecipientField
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_EDINReceiverField,
                _extension_additions_list_spec_for_EDINReceiverField,
                _root_component_type_list_2_spec_for_EDINReceiverField,
                undefined
            );
            return new EDINReceiverField (
                edin_receiver_name,
                original_edim_identifier,
                first_recipient
            );
        };
    }
    return _cached_decoder_for_EDINReceiverField(el);
}

let _cached_encoder_for_EDINReceiverField: $.ASN1Encoder<EDINReceiverField> | null = null;

/**
 * @summary Encodes a(n) EDINReceiverField into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EDINReceiverField, encoded as an ASN.1 Element.
 */
export function _encode_EDINReceiverField(
    value: EDINReceiverField,
    elGetter: $.ASN1Encoder<EDINReceiverField>
) {
    if (!_cached_encoder_for_EDINReceiverField) {
        _cached_encoder_for_EDINReceiverField = function (
            value: EDINReceiverField        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => _encode_ORName,
                            $.BER
                        )(value.edin_receiver_name, $.BER),
                        /* IF_ABSENT  */ value.original_edim_identifier ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_EDIMIdentifier,
                                  $.BER
                              )(value.original_edim_identifier, $.BER),
                        /* IF_ABSENT  */ value.first_recipient === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_FirstRecipientField,
                                  $.BER
                              )(value.first_recipient, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_EDINReceiverField(value, elGetter);
}


/* eslint-enable */
