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
    IntendedRecipientName,
    _decode_IntendedRecipientName,
    _encode_IntendedRecipientName,
} from '../MTSAbstractService/IntendedRecipientName.ta';
export {
    IntendedRecipientName,
    _decode_IntendedRecipientName,
    _encode_IntendedRecipientName,
} from '../MTSAbstractService/IntendedRecipientName.ta';
import {
    RedirectionReason,
    _enum_for_RedirectionReason,
    RedirectionReason_recipient_assigned_alternate_recipient /* IMPORTED_LONG_ENUMERATION_ITEM */,
    recipient_assigned_alternate_recipient /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    RedirectionReason_originator_requested_alternate_recipient /* IMPORTED_LONG_ENUMERATION_ITEM */,
    originator_requested_alternate_recipient /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    RedirectionReason_recipient_MD_assigned_alternate_recipient /* IMPORTED_LONG_ENUMERATION_ITEM */,
    recipient_MD_assigned_alternate_recipient /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    RedirectionReason_directory_look_up /* IMPORTED_LONG_ENUMERATION_ITEM */,
    directory_look_up /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    RedirectionReason_alias /* IMPORTED_LONG_ENUMERATION_ITEM */,
    alias /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_RedirectionReason,
    _encode_RedirectionReason,
} from '../MTSAbstractService/RedirectionReason.ta';
export {
    RedirectionReason,
    _enum_for_RedirectionReason,
    RedirectionReason_recipient_assigned_alternate_recipient /* IMPORTED_LONG_ENUMERATION_ITEM */,
    recipient_assigned_alternate_recipient /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    RedirectionReason_originator_requested_alternate_recipient /* IMPORTED_LONG_ENUMERATION_ITEM */,
    originator_requested_alternate_recipient /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    RedirectionReason_recipient_MD_assigned_alternate_recipient /* IMPORTED_LONG_ENUMERATION_ITEM */,
    recipient_MD_assigned_alternate_recipient /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    RedirectionReason_directory_look_up /* IMPORTED_LONG_ENUMERATION_ITEM */,
    directory_look_up /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    RedirectionReason_alias /* IMPORTED_LONG_ENUMERATION_ITEM */,
    alias /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_RedirectionReason,
    _encode_RedirectionReason,
} from '../MTSAbstractService/RedirectionReason.ta';

/* START_OF_SYMBOL_DEFINITION Redirection */
/**
 * @summary Redirection
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Redirection ::= SEQUENCE {
 *   intended-recipient-name  IntendedRecipientName,
 *   redirection-reason       RedirectionReason
 * }
 * ```
 *
 * @class
 */
export class Redirection {
    constructor(
        /**
         * @summary `intended_recipient_name`.
         * @public
         * @readonly
         */
        readonly intended_recipient_name: IntendedRecipientName,
        /**
         * @summary `redirection_reason`.
         * @public
         * @readonly
         */
        readonly redirection_reason: RedirectionReason
    ) {}

    /**
     * @summary Restructures an object into a Redirection
     * @description
     *
     * This takes an `object` and converts it to a `Redirection`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Redirection`.
     * @returns {Redirection}
     */
    public static _from_object(
        _o: { [_K in keyof Redirection]: Redirection[_K] }
    ): Redirection {
        return new Redirection(
            _o.intended_recipient_name,
            _o.redirection_reason
        );
    }

    /**
     * @summary The enum used as the type of the component `redirection_reason`
     * @public
     * @static
     */

    public static _enum_for_redirection_reason = _enum_for_RedirectionReason;
}
/* END_OF_SYMBOL_DEFINITION Redirection */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Redirection */
/**
 * @summary The Leading Root Component Types of Redirection
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Redirection: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'intended-recipient-name',
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'redirection-reason',
        false,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Redirection */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Redirection */
/**
 * @summary The Trailing Root Component Types of Redirection
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Redirection: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Redirection */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Redirection */
/**
 * @summary The Extension Addition Component Types of Redirection
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Redirection: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Redirection */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Redirection */
let _cached_decoder_for_Redirection: $.ASN1Decoder<Redirection> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Redirection */

/* START_OF_SYMBOL_DEFINITION _decode_Redirection */
/**
 * @summary Decodes an ASN.1 element into a(n) Redirection
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Redirection} The decoded data structure.
 */
export function _decode_Redirection(el: _Element) {
    if (!_cached_decoder_for_Redirection) {
        _cached_decoder_for_Redirection = function (el: _Element): Redirection {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'Redirection contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'intended-recipient-name';
            sequence[1].name = 'redirection-reason';
            let intended_recipient_name!: IntendedRecipientName;
            let redirection_reason!: RedirectionReason;
            intended_recipient_name = _decode_IntendedRecipientName(
                sequence[0]
            );
            redirection_reason = _decode_RedirectionReason(sequence[1]);
            return new Redirection(intended_recipient_name, redirection_reason);
        };
    }
    return _cached_decoder_for_Redirection(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Redirection */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Redirection */
let _cached_encoder_for_Redirection: $.ASN1Encoder<Redirection> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Redirection */

/* START_OF_SYMBOL_DEFINITION _encode_Redirection */
/**
 * @summary Encodes a(n) Redirection into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Redirection, encoded as an ASN.1 Element.
 */
export function _encode_Redirection(
    value: Redirection,
    elGetter: $.ASN1Encoder<Redirection>
) {
    if (!_cached_encoder_for_Redirection) {
        _cached_encoder_for_Redirection = function (
            value: Redirection,
            elGetter: $.ASN1Encoder<Redirection>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_IntendedRecipientName(
                            value.intended_recipient_name,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_RedirectionReason(
                            value.redirection_reason,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_Redirection(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Redirection */

/* eslint-enable */
