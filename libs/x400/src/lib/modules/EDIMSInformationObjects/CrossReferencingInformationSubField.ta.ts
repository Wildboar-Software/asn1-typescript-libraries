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
    ApplicationCrossReference,
    _decode_ApplicationCrossReference,
    _encode_ApplicationCrossReference,
} from '../EDIMSInformationObjects/ApplicationCrossReference.ta';
export {
    ApplicationCrossReference,
    _decode_ApplicationCrossReference,
    _encode_ApplicationCrossReference,
} from '../EDIMSInformationObjects/ApplicationCrossReference.ta';
import {
    MessageReference,
    _decode_MessageReference,
    _encode_MessageReference,
} from '../EDIMSInformationObjects/MessageReference.ta';
export {
    MessageReference,
    _decode_MessageReference,
    _encode_MessageReference,
} from '../EDIMSInformationObjects/MessageReference.ta';
import {
    BodyPartReference,
    _decode_BodyPartReference,
    _encode_BodyPartReference,
} from '../EDIMSInformationObjects/BodyPartReference.ta';
export {
    BodyPartReference,
    _decode_BodyPartReference,
    _encode_BodyPartReference,
} from '../EDIMSInformationObjects/BodyPartReference.ta';

/* START_OF_SYMBOL_DEFINITION CrossReferencingInformationSubField */
/**
 * @summary CrossReferencingInformationSubField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CrossReferencingInformationSubField ::= SEQUENCE {
 *   application-cross-reference  [0]  ApplicationCrossReference,
 *   message-reference            [1]  MessageReference OPTIONAL,
 *   body-part-reference          [2]  BodyPartReference
 * }
 * ```
 *
 * @class
 */
export class CrossReferencingInformationSubField {
    constructor(
        /**
         * @summary `application_cross_reference`.
         * @public
         * @readonly
         */
        readonly application_cross_reference: ApplicationCrossReference,
        /**
         * @summary `message_reference`.
         * @public
         * @readonly
         */
        readonly message_reference: OPTIONAL<MessageReference>,
        /**
         * @summary `body_part_reference`.
         * @public
         * @readonly
         */
        readonly body_part_reference: BodyPartReference
    ) {}

    /**
     * @summary Restructures an object into a CrossReferencingInformationSubField
     * @description
     *
     * This takes an `object` and converts it to a `CrossReferencingInformationSubField`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CrossReferencingInformationSubField`.
     * @returns {CrossReferencingInformationSubField}
     */
    public static _from_object(
        _o: {
            [_K in keyof CrossReferencingInformationSubField]: CrossReferencingInformationSubField[_K];
        }
    ): CrossReferencingInformationSubField {
        return new CrossReferencingInformationSubField(
            _o.application_cross_reference,
            _o.message_reference,
            _o.body_part_reference
        );
    }
}
/* END_OF_SYMBOL_DEFINITION CrossReferencingInformationSubField */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CrossReferencingInformationSubField */
/**
 * @summary The Leading Root Component Types of CrossReferencingInformationSubField
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CrossReferencingInformationSubField: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'application-cross-reference',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'message-reference',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'body-part-reference',
        false,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CrossReferencingInformationSubField */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CrossReferencingInformationSubField */
/**
 * @summary The Trailing Root Component Types of CrossReferencingInformationSubField
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CrossReferencingInformationSubField: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CrossReferencingInformationSubField */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CrossReferencingInformationSubField */
/**
 * @summary The Extension Addition Component Types of CrossReferencingInformationSubField
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CrossReferencingInformationSubField: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CrossReferencingInformationSubField */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CrossReferencingInformationSubField */
let _cached_decoder_for_CrossReferencingInformationSubField: $.ASN1Decoder<CrossReferencingInformationSubField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CrossReferencingInformationSubField */

/* START_OF_SYMBOL_DEFINITION _decode_CrossReferencingInformationSubField */
/**
 * @summary Decodes an ASN.1 element into a(n) CrossReferencingInformationSubField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CrossReferencingInformationSubField} The decoded data structure.
 */
export function _decode_CrossReferencingInformationSubField(el: _Element) {
    if (!_cached_decoder_for_CrossReferencingInformationSubField) {
        _cached_decoder_for_CrossReferencingInformationSubField = function (
            el: _Element
        ): CrossReferencingInformationSubField {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let application_cross_reference!: ApplicationCrossReference;
            let message_reference: OPTIONAL<MessageReference>;
            let body_part_reference!: BodyPartReference;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'application-cross-reference': (_el: _Element): void => {
                    application_cross_reference = $._decode_implicit<ApplicationCrossReference>(
                        () => _decode_ApplicationCrossReference
                    )(_el);
                },
                'message-reference': (_el: _Element): void => {
                    message_reference = $._decode_implicit<MessageReference>(
                        () => _decode_MessageReference
                    )(_el);
                },
                'body-part-reference': (_el: _Element): void => {
                    body_part_reference = $._decode_implicit<BodyPartReference>(
                        () => _decode_BodyPartReference
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CrossReferencingInformationSubField,
                _extension_additions_list_spec_for_CrossReferencingInformationSubField,
                _root_component_type_list_2_spec_for_CrossReferencingInformationSubField,
                undefined
            );
            return new CrossReferencingInformationSubField /* SEQUENCE_CONSTRUCTOR_CALL */(
                application_cross_reference,
                message_reference,
                body_part_reference
            );
        };
    }
    return _cached_decoder_for_CrossReferencingInformationSubField(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CrossReferencingInformationSubField */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CrossReferencingInformationSubField */
let _cached_encoder_for_CrossReferencingInformationSubField: $.ASN1Encoder<CrossReferencingInformationSubField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CrossReferencingInformationSubField */

/* START_OF_SYMBOL_DEFINITION _encode_CrossReferencingInformationSubField */
/**
 * @summary Encodes a(n) CrossReferencingInformationSubField into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CrossReferencingInformationSubField, encoded as an ASN.1 Element.
 */
export function _encode_CrossReferencingInformationSubField(
    value: CrossReferencingInformationSubField,
    elGetter: $.ASN1Encoder<CrossReferencingInformationSubField>
) {
    if (!_cached_encoder_for_CrossReferencingInformationSubField) {
        _cached_encoder_for_CrossReferencingInformationSubField = function (
            value: CrossReferencingInformationSubField,
            elGetter: $.ASN1Encoder<CrossReferencingInformationSubField>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => _encode_ApplicationCrossReference,
                            $.BER
                        )(value.application_cross_reference, $.BER),
                        /* IF_ABSENT  */ value.message_reference === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_MessageReference,
                                  $.BER
                              )(value.message_reference, $.BER),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            2,
                            () => _encode_BodyPartReference,
                            $.BER
                        )(value.body_part_reference, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_CrossReferencingInformationSubField(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_CrossReferencingInformationSubField */

/* eslint-enable */
