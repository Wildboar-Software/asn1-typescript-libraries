/* eslint-disable */
import {
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
import {
    IPMSynopsis,
    _decode_IPMSynopsis,
    _encode_IPMSynopsis,
} from '../IPMSMessageStoreAttributes/IPMSynopsis.ta.mjs';
/**
 * @summary MessageBodyPartSynopsis
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MessageBodyPartSynopsis ::= SEQUENCE {
 *   number    [0]  SequenceNumber,
 *   synopsis  [1]  IPMSynopsis
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
        readonly synopsis: IPMSynopsis
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
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'synopsis',
        false,
        $.hasTag(_TagClass.context, 1)
    ),
];

/**
 * @summary The Trailing Root Component Types of MessageBodyPartSynopsis
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_MessageBodyPartSynopsis: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of MessageBodyPartSynopsis
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_MessageBodyPartSynopsis: $.ComponentSpec[] = [];

let _cached_decoder_for_MessageBodyPartSynopsis: $.ASN1Decoder<MessageBodyPartSynopsis> | null = null;

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
            let synopsis!: IPMSynopsis;
            number_ = $._decode_implicit<SequenceNumber>(
                () => _decode_SequenceNumber
            )(sequence[0]);
            synopsis = $._decode_implicit<IPMSynopsis>(
                () => _decode_IPMSynopsis
            )(sequence[1]);
            return new MessageBodyPartSynopsis(number_, synopsis);
        };
    }
    return _cached_decoder_for_MessageBodyPartSynopsis(el);
}

let _cached_encoder_for_MessageBodyPartSynopsis: $.ASN1Encoder<MessageBodyPartSynopsis> | null = null;

/**
 * @summary Encodes a(n) MessageBodyPartSynopsis into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MessageBodyPartSynopsis, encoded as an ASN.1 Element.
 */
export function _encode_MessageBodyPartSynopsis(
    value: MessageBodyPartSynopsis,
    elGetter: $.ASN1Encoder<MessageBodyPartSynopsis>
) {
    if (!_cached_encoder_for_MessageBodyPartSynopsis) {
        _cached_encoder_for_MessageBodyPartSynopsis = function (
            value: MessageBodyPartSynopsis        ): _Element {
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
                            () => _encode_IPMSynopsis,
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


/* eslint-enable */
