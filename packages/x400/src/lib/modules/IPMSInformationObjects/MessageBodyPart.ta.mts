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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    MessageParameters,
    _decode_MessageParameters,
    _encode_MessageParameters,
} from '../IPMSInformationObjects/MessageParameters.ta.mjs';
import {
    MessageData,
    _decode_MessageData,
    _encode_MessageData,
} from '../IPMSInformationObjects/MessageData.ta.mjs';
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
        $.hasTag(_TagClass.universal, 17)
    ),
    new $.ComponentSpec(
        'data',
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
];

/**
 * @summary The Trailing Root Component Types of MessageBodyPart
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_MessageBodyPart: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of MessageBodyPart
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_MessageBodyPart: $.ComponentSpec[] = [];

let _cached_decoder_for_MessageBodyPart: $.ASN1Decoder<MessageBodyPart> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MessageBodyPart
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MessageBodyPart} The decoded data structure.
 */
export function _decode_MessageBodyPart(el: _Element): MessageBodyPart {
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

let _cached_encoder_for_MessageBodyPart: $.ASN1Encoder<MessageBodyPart> | null = null;

/**
 * @summary Encodes a(n) MessageBodyPart into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MessageBodyPart, encoded as an ASN.1 Element.
 */
export function _encode_MessageBodyPart(
    value: MessageBodyPart,
    elGetter: $.ASN1Encoder<MessageBodyPart>
): _Element {
    if (!_cached_encoder_for_MessageBodyPart) {
        _cached_encoder_for_MessageBodyPart = function (
            value: MessageBodyPart        ): _Element {
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


/* eslint-enable */
