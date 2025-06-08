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
    RecipientReference,
    _decode_RecipientReference,
    _encode_RecipientReference,
} from '../EDIMSInformationObjects/RecipientReference.ta';
export {
    RecipientReference,
    _decode_RecipientReference,
    _encode_RecipientReference,
} from '../EDIMSInformationObjects/RecipientReference.ta';
import {
    RecipientReferenceQualifier,
    _decode_RecipientReferenceQualifier,
    _encode_RecipientReferenceQualifier,
} from '../EDIMSInformationObjects/RecipientReferenceQualifier.ta';
export {
    RecipientReferenceQualifier,
    _decode_RecipientReferenceQualifier,
    _encode_RecipientReferenceQualifier,
} from '../EDIMSInformationObjects/RecipientReferenceQualifier.ta';

/* START_OF_SYMBOL_DEFINITION RecipientReferenceField */
/**
 * @summary RecipientReferenceField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RecipientReferenceField ::= SEQUENCE {
 *   recipient-reference            [0]  RecipientReference,
 *   recipient-reference-qualifier  [1]  RecipientReferenceQualifier OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class RecipientReferenceField {
    constructor(
        /**
         * @summary `recipient_reference`.
         * @public
         * @readonly
         */
        readonly recipient_reference: RecipientReference,
        /**
         * @summary `recipient_reference_qualifier`.
         * @public
         * @readonly
         */
        readonly recipient_reference_qualifier: OPTIONAL<RecipientReferenceQualifier>
    ) {}

    /**
     * @summary Restructures an object into a RecipientReferenceField
     * @description
     *
     * This takes an `object` and converts it to a `RecipientReferenceField`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RecipientReferenceField`.
     * @returns {RecipientReferenceField}
     */
    public static _from_object(
        _o: {
            [_K in keyof RecipientReferenceField]: RecipientReferenceField[_K];
        }
    ): RecipientReferenceField {
        return new RecipientReferenceField(
            _o.recipient_reference,
            _o.recipient_reference_qualifier
        );
    }
}
/* END_OF_SYMBOL_DEFINITION RecipientReferenceField */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_RecipientReferenceField */
/**
 * @summary The Leading Root Component Types of RecipientReferenceField
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_RecipientReferenceField: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'recipient-reference',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'recipient-reference-qualifier',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_RecipientReferenceField */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_RecipientReferenceField */
/**
 * @summary The Trailing Root Component Types of RecipientReferenceField
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RecipientReferenceField: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_RecipientReferenceField */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_RecipientReferenceField */
/**
 * @summary The Extension Addition Component Types of RecipientReferenceField
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RecipientReferenceField: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_RecipientReferenceField */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RecipientReferenceField */
let _cached_decoder_for_RecipientReferenceField: $.ASN1Decoder<RecipientReferenceField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RecipientReferenceField */

/* START_OF_SYMBOL_DEFINITION _decode_RecipientReferenceField */
/**
 * @summary Decodes an ASN.1 element into a(n) RecipientReferenceField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RecipientReferenceField} The decoded data structure.
 */
export function _decode_RecipientReferenceField(el: _Element) {
    if (!_cached_decoder_for_RecipientReferenceField) {
        _cached_decoder_for_RecipientReferenceField = function (
            el: _Element
        ): RecipientReferenceField {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let recipient_reference!: RecipientReference;
            let recipient_reference_qualifier: OPTIONAL<RecipientReferenceQualifier>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'recipient-reference': (_el: _Element): void => {
                    recipient_reference = $._decode_implicit<RecipientReference>(
                        () => _decode_RecipientReference
                    )(_el);
                },
                'recipient-reference-qualifier': (_el: _Element): void => {
                    recipient_reference_qualifier = $._decode_implicit<RecipientReferenceQualifier>(
                        () => _decode_RecipientReferenceQualifier
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_RecipientReferenceField,
                _extension_additions_list_spec_for_RecipientReferenceField,
                _root_component_type_list_2_spec_for_RecipientReferenceField,
                undefined
            );
            return new RecipientReferenceField /* SEQUENCE_CONSTRUCTOR_CALL */(
                recipient_reference,
                recipient_reference_qualifier
            );
        };
    }
    return _cached_decoder_for_RecipientReferenceField(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RecipientReferenceField */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RecipientReferenceField */
let _cached_encoder_for_RecipientReferenceField: $.ASN1Encoder<RecipientReferenceField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RecipientReferenceField */

/* START_OF_SYMBOL_DEFINITION _encode_RecipientReferenceField */
/**
 * @summary Encodes a(n) RecipientReferenceField into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RecipientReferenceField, encoded as an ASN.1 Element.
 */
export function _encode_RecipientReferenceField(
    value: RecipientReferenceField,
    elGetter: $.ASN1Encoder<RecipientReferenceField>
) {
    if (!_cached_encoder_for_RecipientReferenceField) {
        _cached_encoder_for_RecipientReferenceField = function (
            value: RecipientReferenceField,
            elGetter: $.ASN1Encoder<RecipientReferenceField>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => _encode_RecipientReference,
                            $.BER
                        )(value.recipient_reference, $.BER),
                        /* IF_ABSENT  */ value.recipient_reference_qualifier ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_RecipientReferenceQualifier,
                                  $.BER
                              )(value.recipient_reference_qualifier, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_RecipientReferenceField(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RecipientReferenceField */

/* eslint-enable */
