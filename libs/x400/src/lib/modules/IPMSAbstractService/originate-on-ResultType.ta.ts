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
    MessageSubmissionIdentifier,
    _decode_MessageSubmissionIdentifier,
    _encode_MessageSubmissionIdentifier,
} from '../MTSAbstractService/MessageSubmissionIdentifier.ta';
export {
    MessageSubmissionIdentifier,
    _decode_MessageSubmissionIdentifier,
    _encode_MessageSubmissionIdentifier,
} from '../MTSAbstractService/MessageSubmissionIdentifier.ta';
import {
    MessageSubmissionTime,
    _decode_MessageSubmissionTime,
    _encode_MessageSubmissionTime,
} from '../MTSAbstractService/MessageSubmissionTime.ta';
export {
    MessageSubmissionTime,
    _decode_MessageSubmissionTime,
    _encode_MessageSubmissionTime,
} from '../MTSAbstractService/MessageSubmissionTime.ta';

/* START_OF_SYMBOL_DEFINITION originate_on_ResultType */
/**
 * @summary originate_on_ResultType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * originate-on-ResultType ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class originate_on_ResultType {
    constructor(
        /**
         * @summary `submission_identifier`.
         * @public
         * @readonly
         */
        readonly submission_identifier: MessageSubmissionIdentifier,
        /**
         * @summary `submission_time`.
         * @public
         * @readonly
         */
        readonly submission_time: MessageSubmissionTime
    ) {}

    /**
     * @summary Restructures an object into a originate_on_ResultType
     * @description
     *
     * This takes an `object` and converts it to a `originate_on_ResultType`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `originate_on_ResultType`.
     * @returns {originate_on_ResultType}
     */
    public static _from_object(
        _o: {
            [_K in keyof originate_on_ResultType]: originate_on_ResultType[_K];
        }
    ): originate_on_ResultType {
        return new originate_on_ResultType(
            _o.submission_identifier,
            _o.submission_time
        );
    }
}
/* END_OF_SYMBOL_DEFINITION originate_on_ResultType */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_originate_on_ResultType */
/**
 * @summary The Leading Root Component Types of originate_on_ResultType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_originate_on_ResultType: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'submission-identifier',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'submission-time',
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_originate_on_ResultType */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_originate_on_ResultType */
/**
 * @summary The Trailing Root Component Types of originate_on_ResultType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_originate_on_ResultType: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_originate_on_ResultType */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_originate_on_ResultType */
/**
 * @summary The Extension Addition Component Types of originate_on_ResultType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_originate_on_ResultType: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_originate_on_ResultType */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_originate_on_ResultType */
let _cached_decoder_for_originate_on_ResultType: $.ASN1Decoder<originate_on_ResultType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_originate_on_ResultType */

/* START_OF_SYMBOL_DEFINITION _decode_originate_on_ResultType */
/**
 * @summary Decodes an ASN.1 element into a(n) originate_on_ResultType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {originate_on_ResultType} The decoded data structure.
 */
export function _decode_originate_on_ResultType(el: _Element) {
    if (!_cached_decoder_for_originate_on_ResultType) {
        _cached_decoder_for_originate_on_ResultType = function (
            el: _Element
        ): originate_on_ResultType {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let submission_identifier!: MessageSubmissionIdentifier;
            let submission_time!: MessageSubmissionTime;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'submission-identifier': (_el: _Element): void => {
                    submission_identifier = $._decode_implicit<MessageSubmissionIdentifier>(
                        () => _decode_MessageSubmissionIdentifier
                    )(_el);
                },
                'submission-time': (_el: _Element): void => {
                    submission_time = $._decode_implicit<MessageSubmissionTime>(
                        () => _decode_MessageSubmissionTime
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_originate_on_ResultType,
                _extension_additions_list_spec_for_originate_on_ResultType,
                _root_component_type_list_2_spec_for_originate_on_ResultType,
                undefined
            );
            return new originate_on_ResultType /* SET_CONSTRUCTOR_CALL */(
                submission_identifier,
                submission_time
            );
        };
    }
    return _cached_decoder_for_originate_on_ResultType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_originate_on_ResultType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_originate_on_ResultType */
let _cached_encoder_for_originate_on_ResultType: $.ASN1Encoder<originate_on_ResultType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_originate_on_ResultType */

/* START_OF_SYMBOL_DEFINITION _encode_originate_on_ResultType */
/**
 * @summary Encodes a(n) originate_on_ResultType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The originate_on_ResultType, encoded as an ASN.1 Element.
 */
export function _encode_originate_on_ResultType(
    value: originate_on_ResultType,
    elGetter: $.ASN1Encoder<originate_on_ResultType>
) {
    if (!_cached_encoder_for_originate_on_ResultType) {
        _cached_encoder_for_originate_on_ResultType = function (
            value: originate_on_ResultType,
            elGetter: $.ASN1Encoder<originate_on_ResultType>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => _encode_MessageSubmissionIdentifier,
                            $.BER
                        )(value.submission_identifier, $.BER),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            1,
                            () => _encode_MessageSubmissionTime,
                            $.BER
                        )(value.submission_time, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_originate_on_ResultType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_originate_on_ResultType */

/* eslint-enable */
