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
    MessageParameters,
    _decode_MessageParameters,
    _encode_MessageParameters,
} from '../IPMSInformationObjects/MessageParameters.ta.js';
export {
    MessageParameters,
    _decode_MessageParameters,
    _encode_MessageParameters,
} from '../IPMSInformationObjects/MessageParameters.ta.js';
import {
    MessageData,
    _decode_MessageData,
    _encode_MessageData,
} from '../IPMSInformationObjects/MessageData.ta.js';
export {
    MessageData,
    _decode_MessageData,
    _encode_MessageData,
} from '../IPMSInformationObjects/MessageData.ta.js';

/* START_OF_SYMBOL_DEFINITION MessageBodyPart */
/**
 * @summary MessageBodyPart
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MessageBodyPart ::= SEQUENCE {
 *   parameters  MessageParameters,
 *   data        MessageData
 * }
 * ```
 *
 * @class
 */
export class MessageBodyPart {
    constructor(
        /**
         * @summary `parameters`.
         * @public
         * @readonly
         */
        readonly parameters: MessageParameters,
        /**
         * @summary `data`.
         * @public
         * @readonly
         */
        readonly data: MessageData
    ) {}

    /**
     * @summary Restructures an object into a MessageBodyPart
     * @description
     *
     * This takes an `object` and converts it to a `MessageBodyPart`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MessageBodyPart`.
     * @returns {MessageBodyPart}
     */
    public static _from_object(
        _o: { [_K in keyof MessageBodyPart]: MessageBodyPart[_K] }
    ): MessageBodyPart {
        return new MessageBodyPart(_o.parameters, _o.data);
    }
}
/* END_OF_SYMBOL_DEFINITION MessageBodyPart */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_MessageBodyPart */
/**
 * @summary The Leading Root Component Types of MessageBodyPart
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_MessageBodyPart: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'parameters',
        false,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'data',
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_MessageBodyPart */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_MessageBodyPart */
/**
 * @summary The Trailing Root Component Types of MessageBodyPart
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_MessageBodyPart: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_MessageBodyPart */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_MessageBodyPart */
/**
 * @summary The Extension Addition Component Types of MessageBodyPart
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_MessageBodyPart: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_MessageBodyPart */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MessageBodyPart */
let _cached_decoder_for_MessageBodyPart: $.ASN1Decoder<MessageBodyPart> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MessageBodyPart */

/* START_OF_SYMBOL_DEFINITION _decode_MessageBodyPart */
/**
 * @summary Decodes an ASN.1 element into a(n) MessageBodyPart
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MessageBodyPart} The decoded data structure.
 */
export function _decode_MessageBodyPart(el: _Element) {
    if (!_cached_decoder_for_MessageBodyPart) {
        _cached_decoder_for_MessageBodyPart = function (
            el: _Element
        ): MessageBodyPart {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'MessageBodyPart contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'parameters';
            sequence[1].name = 'data';
            let parameters!: MessageParameters;
            let data!: MessageData;
            parameters = _decode_MessageParameters(sequence[0]);
            data = _decode_MessageData(sequence[1]);
            return new MessageBodyPart(parameters, data);
        };
    }
    return _cached_decoder_for_MessageBodyPart(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MessageBodyPart */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MessageBodyPart */
let _cached_encoder_for_MessageBodyPart: $.ASN1Encoder<MessageBodyPart> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MessageBodyPart */

/* START_OF_SYMBOL_DEFINITION _encode_MessageBodyPart */
/**
 * @summary Encodes a(n) MessageBodyPart into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MessageBodyPart, encoded as an ASN.1 Element.
 */
export function _encode_MessageBodyPart(
    value: MessageBodyPart,
    elGetter: $.ASN1Encoder<MessageBodyPart>
) {
    if (!_cached_encoder_for_MessageBodyPart) {
        _cached_encoder_for_MessageBodyPart = function (
            value: MessageBodyPart,
            elGetter: $.ASN1Encoder<MessageBodyPart>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_MessageParameters(
                            value.parameters,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_MessageData(value.data, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_MessageBodyPart(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MessageBodyPart */

/* eslint-enable */
