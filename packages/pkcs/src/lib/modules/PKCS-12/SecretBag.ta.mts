/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary SecretBag
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SecretBag ::= SEQUENCE {
 *     secretTypeId  BAG-TYPE.&id ({SecretTypes}),
 *     secretValue   [0] EXPLICIT BAG-TYPE.&Type ({SecretTypes}
 *                                             {@secretTypeId})
 * }
 * ```
 *
 */
export class SecretBag {
    constructor(
        /**
         * @summary `secretTypeId`.
         * @public
         * @readonly
         */
        readonly secretTypeId: OBJECT_IDENTIFIER,
        /**
         * @summary `secretValue`.
         * @public
         * @readonly
         */
        readonly secretValue: _Element
    ) {}

    /**
     * @summary Restructures an object into a SecretBag
     * @description
     *
     * This takes an `object` and converts it to a `SecretBag`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SecretBag`.
     * @returns {SecretBag}
     */
    public static _from_object(
        _o: { [_K in keyof SecretBag]: SecretBag[_K] }
    ): SecretBag {
        return new SecretBag(_o.secretTypeId, _o.secretValue);
    }
}


/**
 * @summary The Leading Root Component Types of SecretBag
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SecretBag: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "secretTypeId",
        false,
        $.hasTag(_TagClass.universal, 6)
    ),
    new $.ComponentSpec(
        "secretValue",
        false,
        $.hasTag(_TagClass.context, 0)
    ),
];


/**
 * @summary The Trailing Root Component Types of SecretBag
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SecretBag: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of SecretBag
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SecretBag: $.ComponentSpec[] = [];


let _cached_decoder_for_SecretBag: $.ASN1Decoder<SecretBag> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) SecretBag
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SecretBag} The decoded data structure.
 */
export function _decode_SecretBag(el: _Element): SecretBag {
    if (!_cached_decoder_for_SecretBag) {
        _cached_decoder_for_SecretBag = function (el: _Element): SecretBag {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "SecretBag contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "secretTypeId";
            sequence[1].name = "secretValue";
            let secretTypeId!: OBJECT_IDENTIFIER;
            let secretValue!: _Element;
            secretTypeId = $._decodeObjectIdentifier(sequence[0]);
            secretValue = $._decode_explicit<_Element>(() => $._decodeAny)(
                sequence[1]
            );
            return new SecretBag(secretTypeId, secretValue);
        };
    }
    return _cached_decoder_for_SecretBag(el);
}


let _cached_encoder_for_SecretBag: $.ASN1Encoder<SecretBag> | null = null;


/**
 * @summary Encodes a(n) SecretBag into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SecretBag, encoded as an ASN.1 Element.
 */
export function _encode_SecretBag(
    value: SecretBag,
    elGetter: $.ASN1Encoder<SecretBag>
): _Element {
    if (!_cached_encoder_for_SecretBag) {
        _cached_encoder_for_SecretBag = function (
            value: SecretBag        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeObjectIdentifier(
                            value.secretTypeId,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            0,
                            () => $._encodeAny,
                            $.BER
                        )(value.secretValue, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_SecretBag(value, elGetter);
}


/* eslint-enable */
