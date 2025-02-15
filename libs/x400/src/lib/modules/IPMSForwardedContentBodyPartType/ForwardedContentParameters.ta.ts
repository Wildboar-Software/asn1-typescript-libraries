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
    MessageDeliveryTime,
    _decode_MessageDeliveryTime,
    _encode_MessageDeliveryTime,
} from '../MTSAbstractService/MessageDeliveryTime.ta';
export {
    MessageDeliveryTime,
    _decode_MessageDeliveryTime,
    _encode_MessageDeliveryTime,
} from '../MTSAbstractService/MessageDeliveryTime.ta';
import {
    OtherMessageDeliveryFields,
    _decode_OtherMessageDeliveryFields,
    _encode_OtherMessageDeliveryFields,
} from '../MTSAbstractService/OtherMessageDeliveryFields.ta';
export {
    OtherMessageDeliveryFields,
    _decode_OtherMessageDeliveryFields,
    _encode_OtherMessageDeliveryFields,
} from '../MTSAbstractService/OtherMessageDeliveryFields.ta';
import {
    MessageDeliveryIdentifier,
    _decode_MessageDeliveryIdentifier,
    _encode_MessageDeliveryIdentifier,
} from '../MTSAbstractService/MessageDeliveryIdentifier.ta';
export {
    MessageDeliveryIdentifier,
    _decode_MessageDeliveryIdentifier,
    _encode_MessageDeliveryIdentifier,
} from '../MTSAbstractService/MessageDeliveryIdentifier.ta';
import {
    SubmissionProof,
    _decode_SubmissionProof,
    _encode_SubmissionProof,
} from '../IPMSForwardedContentBodyPartType/SubmissionProof.ta';
export {
    SubmissionProof,
    _decode_SubmissionProof,
    _encode_SubmissionProof,
} from '../IPMSForwardedContentBodyPartType/SubmissionProof.ta';

/* START_OF_SYMBOL_DEFINITION ForwardedContentParameters */
/**
 * @summary ForwardedContentParameters
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ForwardedContentParameters ::= SET {
 *   delivery-time      [0]  MessageDeliveryTime OPTIONAL,
 *   delivery-envelope  [1]  OtherMessageDeliveryFields OPTIONAL,
 *   mts-identifier     [2]  MessageDeliveryIdentifier OPTIONAL,
 *   submission-proof   [3]  SubmissionProof OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class ForwardedContentParameters {
    constructor(
        /**
         * @summary `delivery_time`.
         * @public
         * @readonly
         */
        readonly delivery_time: OPTIONAL<MessageDeliveryTime>,
        /**
         * @summary `delivery_envelope`.
         * @public
         * @readonly
         */
        readonly delivery_envelope: OPTIONAL<OtherMessageDeliveryFields>,
        /**
         * @summary `mts_identifier`.
         * @public
         * @readonly
         */
        readonly mts_identifier: OPTIONAL<MessageDeliveryIdentifier>,
        /**
         * @summary `submission_proof`.
         * @public
         * @readonly
         */
        readonly submission_proof: OPTIONAL<SubmissionProof>
    ) {}

    /**
     * @summary Restructures an object into a ForwardedContentParameters
     * @description
     *
     * This takes an `object` and converts it to a `ForwardedContentParameters`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ForwardedContentParameters`.
     * @returns {ForwardedContentParameters}
     */
    public static _from_object(
        _o: {
            [_K in keyof ForwardedContentParameters]: ForwardedContentParameters[_K];
        }
    ): ForwardedContentParameters {
        return new ForwardedContentParameters(
            _o.delivery_time,
            _o.delivery_envelope,
            _o.mts_identifier,
            _o.submission_proof
        );
    }
}
/* END_OF_SYMBOL_DEFINITION ForwardedContentParameters */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ForwardedContentParameters */
/**
 * @summary The Leading Root Component Types of ForwardedContentParameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ForwardedContentParameters: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'delivery-time',
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'delivery-envelope',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'mts-identifier',
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'submission-proof',
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ForwardedContentParameters */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ForwardedContentParameters */
/**
 * @summary The Trailing Root Component Types of ForwardedContentParameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ForwardedContentParameters: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ForwardedContentParameters */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ForwardedContentParameters */
/**
 * @summary The Extension Addition Component Types of ForwardedContentParameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ForwardedContentParameters: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ForwardedContentParameters */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ForwardedContentParameters */
let _cached_decoder_for_ForwardedContentParameters: $.ASN1Decoder<ForwardedContentParameters> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ForwardedContentParameters */

/* START_OF_SYMBOL_DEFINITION _decode_ForwardedContentParameters */
/**
 * @summary Decodes an ASN.1 element into a(n) ForwardedContentParameters
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ForwardedContentParameters} The decoded data structure.
 */
export function _decode_ForwardedContentParameters(el: _Element) {
    if (!_cached_decoder_for_ForwardedContentParameters) {
        _cached_decoder_for_ForwardedContentParameters = function (
            el: _Element
        ): ForwardedContentParameters {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let delivery_time: OPTIONAL<MessageDeliveryTime>;
            let delivery_envelope: OPTIONAL<OtherMessageDeliveryFields>;
            let mts_identifier: OPTIONAL<MessageDeliveryIdentifier>;
            let submission_proof: OPTIONAL<SubmissionProof>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'delivery-time': (_el: _Element): void => {
                    delivery_time = $._decode_implicit<MessageDeliveryTime>(
                        () => _decode_MessageDeliveryTime
                    )(_el);
                },
                'delivery-envelope': (_el: _Element): void => {
                    delivery_envelope = $._decode_implicit<OtherMessageDeliveryFields>(
                        () => _decode_OtherMessageDeliveryFields
                    )(_el);
                },
                'mts-identifier': (_el: _Element): void => {
                    mts_identifier = $._decode_implicit<MessageDeliveryIdentifier>(
                        () => _decode_MessageDeliveryIdentifier
                    )(_el);
                },
                'submission-proof': (_el: _Element): void => {
                    submission_proof = $._decode_implicit<SubmissionProof>(
                        () => _decode_SubmissionProof
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ForwardedContentParameters,
                _extension_additions_list_spec_for_ForwardedContentParameters,
                _root_component_type_list_2_spec_for_ForwardedContentParameters,
                undefined
            );
            return new ForwardedContentParameters /* SET_CONSTRUCTOR_CALL */(
                delivery_time,
                delivery_envelope,
                mts_identifier,
                submission_proof
            );
        };
    }
    return _cached_decoder_for_ForwardedContentParameters(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ForwardedContentParameters */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ForwardedContentParameters */
let _cached_encoder_for_ForwardedContentParameters: $.ASN1Encoder<ForwardedContentParameters> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ForwardedContentParameters */

/* START_OF_SYMBOL_DEFINITION _encode_ForwardedContentParameters */
/**
 * @summary Encodes a(n) ForwardedContentParameters into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ForwardedContentParameters, encoded as an ASN.1 Element.
 */
export function _encode_ForwardedContentParameters(
    value: ForwardedContentParameters,
    elGetter: $.ASN1Encoder<ForwardedContentParameters>
) {
    if (!_cached_encoder_for_ForwardedContentParameters) {
        _cached_encoder_for_ForwardedContentParameters = function (
            value: ForwardedContentParameters,
            elGetter: $.ASN1Encoder<ForwardedContentParameters>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.delivery_time === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_MessageDeliveryTime,
                                  $.BER
                              )(value.delivery_time, $.BER),
                        /* IF_ABSENT  */ value.delivery_envelope === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_OtherMessageDeliveryFields,
                                  $.BER
                              )(value.delivery_envelope, $.BER),
                        /* IF_ABSENT  */ value.mts_identifier === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_MessageDeliveryIdentifier,
                                  $.BER
                              )(value.mts_identifier, $.BER),
                        /* IF_ABSENT  */ value.submission_proof === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  3,
                                  () => _encode_SubmissionProof,
                                  $.BER
                              )(value.submission_proof, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ForwardedContentParameters(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ForwardedContentParameters */

/* eslint-enable */
