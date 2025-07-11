/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "@wildboar/pki-stub";

/**
 * @summary MessageImprint
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MessageImprint ::= SEQUENCE  {
 *     hashAlgorithm                AlgorithmIdentifier,
 *     hashedMessage                OCTET STRING  }
 * ```
 *
 */
export class MessageImprint {
    constructor(
        /**
         * @summary `hashAlgorithm`.
         * @public
         * @readonly
         */
        readonly hashAlgorithm: AlgorithmIdentifier,
        /**
         * @summary `hashedMessage`.
         * @public
         * @readonly
         */
        readonly hashedMessage: OCTET_STRING
    ) {}

    /**
     * @summary Restructures an object into a MessageImprint
     * @description
     *
     * This takes an `object` and converts it to a `MessageImprint`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MessageImprint`.
     * @returns {MessageImprint}
     */
    public static _from_object(
        _o: { [_K in keyof MessageImprint]: MessageImprint[_K] },
    ): MessageImprint {
        return new MessageImprint(_o.hashAlgorithm, _o.hashedMessage);
    }
}

/**
 * @summary The Leading Root Component Types of MessageImprint
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_MessageImprint: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "hashAlgorithm",
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec(
        "hashedMessage",
        false,
        $.hasTag(_TagClass.universal, 4)
    ),
];

/**
 * @summary The Trailing Root Component Types of MessageImprint
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_MessageImprint: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of MessageImprint
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_MessageImprint: $.ComponentSpec[] = [];

let _cached_decoder_for_MessageImprint: $.ASN1Decoder<MessageImprint> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MessageImprint
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MessageImprint} The decoded data structure.
 */
export function _decode_MessageImprint(el: _Element): MessageImprint {
    if (!_cached_decoder_for_MessageImprint) {
        _cached_decoder_for_MessageImprint = function (
            el: _Element
        ): MessageImprint {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "MessageImprint contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "hashAlgorithm";
            sequence[1].name = "hashedMessage";
            let hashAlgorithm!: AlgorithmIdentifier;
            let hashedMessage!: OCTET_STRING;
            hashAlgorithm = _decode_AlgorithmIdentifier(sequence[0]);
            hashedMessage = $._decodeOctetString(sequence[1]);
            return new MessageImprint(hashAlgorithm, hashedMessage);
        };
    }
    return _cached_decoder_for_MessageImprint(el);
}

let _cached_encoder_for_MessageImprint: $.ASN1Encoder<MessageImprint> | null = null;

/**
 * @summary Encodes a(n) MessageImprint into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MessageImprint, encoded as an ASN.1 Element.
 */
export function _encode_MessageImprint(
    value: MessageImprint,
    elGetter: $.ASN1Encoder<MessageImprint>
): _Element {
    if (!_cached_encoder_for_MessageImprint) {
        _cached_encoder_for_MessageImprint = function (
            value: MessageImprint        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_AlgorithmIdentifier(
                            value.hashAlgorithm,
                            $.DER
                        ),
                        /* REQUIRED   */ $._encodeOctetString(
                            value.hashedMessage,
                            $.DER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_MessageImprint(value, elGetter);
}


/* eslint-enable */
