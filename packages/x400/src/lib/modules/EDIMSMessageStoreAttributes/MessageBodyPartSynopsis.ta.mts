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
    SequenceNumber,
    _decode_SequenceNumber,
    _encode_SequenceNumber,
} from '../MSAbstractService/SequenceNumber.ta.mjs';
export {
    SequenceNumber,
    _decode_SequenceNumber,
    _encode_SequenceNumber,
} from '../MSAbstractService/SequenceNumber.ta.mjs';
import {
    EDIMSynopsis,
    _decode_EDIMSynopsis,
    _encode_EDIMSynopsis,
} from '../EDIMSMessageStoreAttributes/EDIMSynopsis.ta.mjs';
export {
    EDIMSynopsis,
    _decode_EDIMSynopsis,
    _encode_EDIMSynopsis,
} from '../EDIMSMessageStoreAttributes/EDIMSynopsis.ta.mjs';

/* START_OF_SYMBOL_DEFINITION MessageBodyPartSynopsis */
/**
 * @summary MessageBodyPartSynopsis
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MessageBodyPartSynopsis ::= SEQUENCE {
 *   number    [0]  SequenceNumber,
 *   synopsis  [1]  EDIMSynopsis
 * }
 * ```
 *
 * @class
 */
export class MessageBodyPartSynopsis {
    constructor(
        /**
         * @summary `number_`.
         * @public
         * @readonly
         */
        readonly number_: SequenceNumber,
        /**
         * @summary `synopsis`.
         * @public
         * @readonly
         */
        readonly synopsis: EDIMSynopsis
    ) {}

    /**
     * @summary Restructures an object into a MessageBodyPartSynopsis
     * @description
     *
     * This takes an `object` and converts it to a `MessageBodyPartSynopsis`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MessageBodyPartSynopsis`.
     * @returns {MessageBodyPartSynopsis}
     */
    public static _from_object(
        _o: {
            [_K in keyof MessageBodyPartSynopsis]: MessageBodyPartSynopsis[_K];
        }
    ): MessageBodyPartSynopsis {
        return new MessageBodyPartSynopsis(_o.number_, _o.synopsis);
    }
}
/* END_OF_SYMBOL_DEFINITION MessageBodyPartSynopsis */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_MessageBodyPartSynopsis */
/**
 * @summary The Leading Root Component Types of MessageBodyPartSynopsis
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_MessageBodyPartSynopsis: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'number',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'synopsis',
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_MessageBodyPartSynopsis */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_MessageBodyPartSynopsis */
/**
 * @summary The Trailing Root Component Types of MessageBodyPartSynopsis
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_MessageBodyPartSynopsis: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_MessageBodyPartSynopsis */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_MessageBodyPartSynopsis */
/**
 * @summary The Extension Addition Component Types of MessageBodyPartSynopsis
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_MessageBodyPartSynopsis: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_MessageBodyPartSynopsis */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MessageBodyPartSynopsis */
let _cached_decoder_for_MessageBodyPartSynopsis: $.ASN1Decoder<MessageBodyPartSynopsis> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MessageBodyPartSynopsis */

/* START_OF_SYMBOL_DEFINITION _decode_MessageBodyPartSynopsis */
/**
 * @summary Decodes an ASN.1 element into a(n) MessageBodyPartSynopsis
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MessageBodyPartSynopsis} The decoded data structure.
 */
export function _decode_MessageBodyPartSynopsis(el: _Element) {
    if (!_cached_decoder_for_MessageBodyPartSynopsis) {
        _cached_decoder_for_MessageBodyPartSynopsis = function (
            el: _Element
        ): MessageBodyPartSynopsis {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'MessageBodyPartSynopsis contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'number';
            sequence[1].name = 'synopsis';
            let number_!: SequenceNumber;
            let synopsis!: EDIMSynopsis;
            number_ = $._decode_implicit<SequenceNumber>(
                () => _decode_SequenceNumber
            )(sequence[0]);
            synopsis = $._decode_implicit<EDIMSynopsis>(
                () => _decode_EDIMSynopsis
            )(sequence[1]);
            return new MessageBodyPartSynopsis(number_, synopsis);
        };
    }
    return _cached_decoder_for_MessageBodyPartSynopsis(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MessageBodyPartSynopsis */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MessageBodyPartSynopsis */
let _cached_encoder_for_MessageBodyPartSynopsis: $.ASN1Encoder<MessageBodyPartSynopsis> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MessageBodyPartSynopsis */

/* START_OF_SYMBOL_DEFINITION _encode_MessageBodyPartSynopsis */
/**
 * @summary Encodes a(n) MessageBodyPartSynopsis into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MessageBodyPartSynopsis, encoded as an ASN.1 Element.
 */
export function _encode_MessageBodyPartSynopsis(
    value: MessageBodyPartSynopsis,
    elGetter: $.ASN1Encoder<MessageBodyPartSynopsis>
) {
    if (!_cached_encoder_for_MessageBodyPartSynopsis) {
        _cached_encoder_for_MessageBodyPartSynopsis = function (
            value: MessageBodyPartSynopsis,
            elGetter: $.ASN1Encoder<MessageBodyPartSynopsis>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => _encode_SequenceNumber,
                            $.BER
                        )(value.number_, $.BER),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            1,
                            () => _encode_EDIMSynopsis,
                            $.BER
                        )(value.synopsis, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_MessageBodyPartSynopsis(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MessageBodyPartSynopsis */

/* eslint-enable */
