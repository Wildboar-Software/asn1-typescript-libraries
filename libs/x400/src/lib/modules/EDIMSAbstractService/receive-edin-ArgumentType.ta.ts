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
    MessageDeliveryEnvelope,
    _decode_MessageDeliveryEnvelope,
    _encode_MessageDeliveryEnvelope,
} from '../MTSAbstractService/MessageDeliveryEnvelope.ta';
export {
    MessageDeliveryEnvelope,
    _decode_MessageDeliveryEnvelope,
    _encode_MessageDeliveryEnvelope,
} from '../MTSAbstractService/MessageDeliveryEnvelope.ta';
import {
    EDIN,
    _decode_EDIN,
    _encode_EDIN,
} from '../EDIMSInformationObjects/EDIN.ta';
export {
    EDIN,
    _decode_EDIN,
    _encode_EDIN,
} from '../EDIMSInformationObjects/EDIN.ta';

/* START_OF_SYMBOL_DEFINITION receive_edin_ArgumentType */
/**
 * @summary receive_edin_ArgumentType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * receive-edin-ArgumentType ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class receive_edin_ArgumentType {
    constructor(
        /**
         * @summary `envelope`.
         * @public
         * @readonly
         */
        readonly envelope: MessageDeliveryEnvelope,
        /**
         * @summary `content`.
         * @public
         * @readonly
         */
        readonly content: EDIN
    ) {}

    /**
     * @summary Restructures an object into a receive_edin_ArgumentType
     * @description
     *
     * This takes an `object` and converts it to a `receive_edin_ArgumentType`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `receive_edin_ArgumentType`.
     * @returns {receive_edin_ArgumentType}
     */
    public static _from_object(
        _o: {
            [_K in keyof receive_edin_ArgumentType]: receive_edin_ArgumentType[_K];
        }
    ): receive_edin_ArgumentType {
        return new receive_edin_ArgumentType(_o.envelope, _o.content);
    }
}
/* END_OF_SYMBOL_DEFINITION receive_edin_ArgumentType */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_receive_edin_ArgumentType */
/**
 * @summary The Leading Root Component Types of receive_edin_ArgumentType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_receive_edin_ArgumentType: $.ComponentSpec[] = [
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
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_receive_edin_ArgumentType */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_receive_edin_ArgumentType */
/**
 * @summary The Trailing Root Component Types of receive_edin_ArgumentType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_receive_edin_ArgumentType: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_receive_edin_ArgumentType */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_receive_edin_ArgumentType */
/**
 * @summary The Extension Addition Component Types of receive_edin_ArgumentType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_receive_edin_ArgumentType: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_receive_edin_ArgumentType */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_receive_edin_ArgumentType */
let _cached_decoder_for_receive_edin_ArgumentType: $.ASN1Decoder<receive_edin_ArgumentType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_receive_edin_ArgumentType */

/* START_OF_SYMBOL_DEFINITION _decode_receive_edin_ArgumentType */
/**
 * @summary Decodes an ASN.1 element into a(n) receive_edin_ArgumentType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {receive_edin_ArgumentType} The decoded data structure.
 */
export function _decode_receive_edin_ArgumentType(el: _Element) {
    if (!_cached_decoder_for_receive_edin_ArgumentType) {
        _cached_decoder_for_receive_edin_ArgumentType = function (
            el: _Element
        ): receive_edin_ArgumentType {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let envelope!: MessageDeliveryEnvelope;
            let content!: EDIN;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                envelope: (_el: _Element): void => {
                    envelope = $._decode_implicit<MessageDeliveryEnvelope>(
                        () => _decode_MessageDeliveryEnvelope
                    )(_el);
                },
                content: (_el: _Element): void => {
                    content = $._decode_explicit<EDIN>(() => _decode_EDIN)(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_receive_edin_ArgumentType,
                _extension_additions_list_spec_for_receive_edin_ArgumentType,
                _root_component_type_list_2_spec_for_receive_edin_ArgumentType,
                undefined
            );
            return new receive_edin_ArgumentType /* SET_CONSTRUCTOR_CALL */(
                envelope,
                content
            );
        };
    }
    return _cached_decoder_for_receive_edin_ArgumentType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_receive_edin_ArgumentType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_receive_edin_ArgumentType */
let _cached_encoder_for_receive_edin_ArgumentType: $.ASN1Encoder<receive_edin_ArgumentType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_receive_edin_ArgumentType */

/* START_OF_SYMBOL_DEFINITION _encode_receive_edin_ArgumentType */
/**
 * @summary Encodes a(n) receive_edin_ArgumentType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The receive_edin_ArgumentType, encoded as an ASN.1 Element.
 */
export function _encode_receive_edin_ArgumentType(
    value: receive_edin_ArgumentType,
    elGetter: $.ASN1Encoder<receive_edin_ArgumentType>
) {
    if (!_cached_encoder_for_receive_edin_ArgumentType) {
        _cached_encoder_for_receive_edin_ArgumentType = function (
            value: receive_edin_ArgumentType,
            elGetter: $.ASN1Encoder<receive_edin_ArgumentType>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => _encode_MessageDeliveryEnvelope,
                            $.BER
                        )(value.envelope, $.BER),
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            1,
                            () => _encode_EDIN,
                            $.BER
                        )(value.content, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_receive_edin_ArgumentType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_receive_edin_ArgumentType */

/* eslint-enable */
