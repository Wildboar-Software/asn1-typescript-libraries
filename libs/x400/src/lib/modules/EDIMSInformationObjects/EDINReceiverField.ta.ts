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
    ORName,
    _decode_ORName,
    _encode_ORName,
} from '../MTSAbstractService/ORName.ta';
export {
    ORName,
    _decode_ORName,
    _encode_ORName,
} from '../MTSAbstractService/ORName.ta';
import {
    EDIMIdentifier,
    _decode_EDIMIdentifier,
    _encode_EDIMIdentifier,
} from '../EDIMSInformationObjects/EDIMIdentifier.ta';
export {
    EDIMIdentifier,
    _decode_EDIMIdentifier,
    _encode_EDIMIdentifier,
} from '../EDIMSInformationObjects/EDIMIdentifier.ta';
import {
    FirstRecipientField,
    _decode_FirstRecipientField,
    _encode_FirstRecipientField,
} from '../EDIMSInformationObjects/FirstRecipientField.ta';
export {
    FirstRecipientField,
    _decode_FirstRecipientField,
    _encode_FirstRecipientField,
} from '../EDIMSInformationObjects/FirstRecipientField.ta';

/* START_OF_SYMBOL_DEFINITION EDINReceiverField */
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
/* END_OF_SYMBOL_DEFINITION EDINReceiverField */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_EDINReceiverField */
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
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'original-edim-identifier',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'first-recipient',
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_EDINReceiverField */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_EDINReceiverField */
/**
 * @summary The Trailing Root Component Types of EDINReceiverField
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_EDINReceiverField: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_EDINReceiverField */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_EDINReceiverField */
/**
 * @summary The Extension Addition Component Types of EDINReceiverField
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_EDINReceiverField: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_EDINReceiverField */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EDINReceiverField */
let _cached_decoder_for_EDINReceiverField: $.ASN1Decoder<EDINReceiverField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EDINReceiverField */

/* START_OF_SYMBOL_DEFINITION _decode_EDINReceiverField */
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
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let edin_receiver_name!: ORName;
            let original_edim_identifier: OPTIONAL<EDIMIdentifier>;
            let first_recipient: OPTIONAL<FirstRecipientField>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
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
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_EDINReceiverField,
                _extension_additions_list_spec_for_EDINReceiverField,
                _root_component_type_list_2_spec_for_EDINReceiverField,
                undefined
            );
            return new EDINReceiverField /* SEQUENCE_CONSTRUCTOR_CALL */(
                edin_receiver_name,
                original_edim_identifier,
                first_recipient
            );
        };
    }
    return _cached_decoder_for_EDINReceiverField(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EDINReceiverField */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EDINReceiverField */
let _cached_encoder_for_EDINReceiverField: $.ASN1Encoder<EDINReceiverField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EDINReceiverField */

/* START_OF_SYMBOL_DEFINITION _encode_EDINReceiverField */
/**
 * @summary Encodes a(n) EDINReceiverField into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EDINReceiverField, encoded as an ASN.1 Element.
 */
export function _encode_EDINReceiverField(
    value: EDINReceiverField,
    elGetter: $.ASN1Encoder<EDINReceiverField>
) {
    if (!_cached_encoder_for_EDINReceiverField) {
        _cached_encoder_for_EDINReceiverField = function (
            value: EDINReceiverField,
            elGetter: $.ASN1Encoder<EDINReceiverField>
        ): _Element {
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

/* END_OF_SYMBOL_DEFINITION _encode_EDINReceiverField */

/* eslint-enable */
