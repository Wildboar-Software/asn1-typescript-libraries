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
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    MessageSubmissionEnvelope,
    _decode_MessageSubmissionEnvelope,
    _encode_MessageSubmissionEnvelope,
} from '../MTSAbstractService/MessageSubmissionEnvelope.ta.mjs';
export {
    MessageSubmissionEnvelope,
    _decode_MessageSubmissionEnvelope,
    _encode_MessageSubmissionEnvelope,
} from '../MTSAbstractService/MessageSubmissionEnvelope.ta.mjs';
import {
    IPM,
    _decode_IPM,
    _encode_IPM,
} from '../IPMSInformationObjects/IPM.ta.mjs';
export {
    IPM,
    _decode_IPM,
    _encode_IPM,
} from '../IPMSInformationObjects/IPM.ta.mjs';

/* START_OF_SYMBOL_DEFINITION originate_ipm_ArgumentType */
/**
 * @summary originate_ipm_ArgumentType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * originate-ipm-ArgumentType ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class originate_ipm_ArgumentType {
    constructor(
        /**
         * @summary `envelope`.
         * @public
         * @readonly
         */
        readonly envelope: MessageSubmissionEnvelope,
        /**
         * @summary `content`.
         * @public
         * @readonly
         */
        readonly content: IPM
    ) {}

    /**
     * @summary Restructures an object into a originate_ipm_ArgumentType
     * @description
     *
     * This takes an `object` and converts it to a `originate_ipm_ArgumentType`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `originate_ipm_ArgumentType`.
     * @returns {originate_ipm_ArgumentType}
     */
    public static _from_object(
        _o: {
            [_K in keyof originate_ipm_ArgumentType]: originate_ipm_ArgumentType[_K];
        }
    ): originate_ipm_ArgumentType {
        return new originate_ipm_ArgumentType(_o.envelope, _o.content);
    }
}
/* END_OF_SYMBOL_DEFINITION originate_ipm_ArgumentType */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_originate_ipm_ArgumentType */
/**
 * @summary The Leading Root Component Types of originate_ipm_ArgumentType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_originate_ipm_ArgumentType: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'envelope',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'content',
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_originate_ipm_ArgumentType */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_originate_ipm_ArgumentType */
/**
 * @summary The Trailing Root Component Types of originate_ipm_ArgumentType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_originate_ipm_ArgumentType: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_originate_ipm_ArgumentType */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_originate_ipm_ArgumentType */
/**
 * @summary The Extension Addition Component Types of originate_ipm_ArgumentType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_originate_ipm_ArgumentType: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_originate_ipm_ArgumentType */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_originate_ipm_ArgumentType */
let _cached_decoder_for_originate_ipm_ArgumentType: $.ASN1Decoder<originate_ipm_ArgumentType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_originate_ipm_ArgumentType */

/* START_OF_SYMBOL_DEFINITION _decode_originate_ipm_ArgumentType */
/**
 * @summary Decodes an ASN.1 element into a(n) originate_ipm_ArgumentType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {originate_ipm_ArgumentType} The decoded data structure.
 */
export function _decode_originate_ipm_ArgumentType(el: _Element) {
    if (!_cached_decoder_for_originate_ipm_ArgumentType) {
        _cached_decoder_for_originate_ipm_ArgumentType = function (
            el: _Element
        ): originate_ipm_ArgumentType {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let envelope!: MessageSubmissionEnvelope;
            let content!: IPM;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                envelope: (_el: _Element): void => {
                    envelope = $._decode_implicit<MessageSubmissionEnvelope>(
                        () => _decode_MessageSubmissionEnvelope
                    )(_el);
                },
                content: (_el: _Element): void => {
                    content = $._decode_implicit<IPM>(() => _decode_IPM)(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_originate_ipm_ArgumentType,
                _extension_additions_list_spec_for_originate_ipm_ArgumentType,
                _root_component_type_list_2_spec_for_originate_ipm_ArgumentType,
                undefined
            );
            return new originate_ipm_ArgumentType /* SET_CONSTRUCTOR_CALL */(
                envelope,
                content
            );
        };
    }
    return _cached_decoder_for_originate_ipm_ArgumentType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_originate_ipm_ArgumentType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_originate_ipm_ArgumentType */
let _cached_encoder_for_originate_ipm_ArgumentType: $.ASN1Encoder<originate_ipm_ArgumentType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_originate_ipm_ArgumentType */

/* START_OF_SYMBOL_DEFINITION _encode_originate_ipm_ArgumentType */
/**
 * @summary Encodes a(n) originate_ipm_ArgumentType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The originate_ipm_ArgumentType, encoded as an ASN.1 Element.
 */
export function _encode_originate_ipm_ArgumentType(
    value: originate_ipm_ArgumentType,
    elGetter: $.ASN1Encoder<originate_ipm_ArgumentType>
) {
    if (!_cached_encoder_for_originate_ipm_ArgumentType) {
        _cached_encoder_for_originate_ipm_ArgumentType = function (
            value: originate_ipm_ArgumentType,
            elGetter: $.ASN1Encoder<originate_ipm_ArgumentType>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => _encode_MessageSubmissionEnvelope,
                            $.BER
                        )(value.envelope, $.BER),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            1,
                            () => _encode_IPM,
                            $.BER
                        )(value.content, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_originate_ipm_ArgumentType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_originate_ipm_ArgumentType */

/* eslint-enable */
