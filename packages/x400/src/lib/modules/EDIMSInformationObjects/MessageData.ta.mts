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
    Heading,
    _decode_Heading,
    _encode_Heading,
} from '../EDIMSInformationObjects/Heading.ta.mjs';
import {
    BodyOrRemoved,
    _decode_BodyOrRemoved,
    _encode_BodyOrRemoved,
} from '../EDIMSInformationObjects/BodyOrRemoved.ta.mjs';
/**
 * @summary MessageData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MessageData ::= SEQUENCE {heading  Heading,
 *                           body     BodyOrRemoved
 * }
 * ```
 *
 */
export class MessageData {
    constructor(
        /**
         * @summary `heading`.
         * @public
         * @readonly
         */
        readonly heading: Heading,
        /**
         * @summary `body`.
         * @public
         * @readonly
         */
        readonly body: BodyOrRemoved
    ) {}

    /**
     * @summary Restructures an object into a MessageData
     * @description
     *
     * This takes an `object` and converts it to a `MessageData`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MessageData`.
     * @returns {MessageData}
     */
    public static _from_object(
        _o: { [_K in keyof MessageData]: MessageData[_K] }
    ): MessageData {
        return new MessageData(_o.heading, _o.body);
    }
}

/**
 * @summary The Leading Root Component Types of MessageData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_MessageData: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'heading',
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec(
        'body',
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
];

/**
 * @summary The Trailing Root Component Types of MessageData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_MessageData: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of MessageData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_MessageData: $.ComponentSpec[] = [];

let _cached_decoder_for_MessageData: $.ASN1Decoder<MessageData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MessageData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MessageData} The decoded data structure.
 */
export function _decode_MessageData(el: _Element): MessageData {
    if (!_cached_decoder_for_MessageData) {
        _cached_decoder_for_MessageData = function (el: _Element): MessageData {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'MessageData contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'heading';
            sequence[1].name = 'body';
            let heading!: Heading;
            let body!: BodyOrRemoved;
            heading = _decode_Heading(sequence[0]);
            body = _decode_BodyOrRemoved(sequence[1]);
            return new MessageData(heading, body);
        };
    }
    return _cached_decoder_for_MessageData(el);
}

let _cached_encoder_for_MessageData: $.ASN1Encoder<MessageData> | null = null;

/**
 * @summary Encodes a(n) MessageData into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MessageData, encoded as an ASN.1 Element.
 */
export function _encode_MessageData(
    value: MessageData,
    elGetter: $.ASN1Encoder<MessageData>
): _Element {
    if (!_cached_encoder_for_MessageData) {
        _cached_encoder_for_MessageData = function (
            value: MessageData        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_Heading(value.heading, $.BER),
                        /* REQUIRED   */ _encode_BodyOrRemoved(
                            value.body,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_MessageData(value, elGetter);
}


/* eslint-enable */
