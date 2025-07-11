/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    GeneralizedTime,
    OCTET_STRING,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    OtherKeyAttribute,
    _decode_OtherKeyAttribute,
    _encode_OtherKeyAttribute,
} from "../PKCS7/OtherKeyAttribute.ta.mjs";

/**
 * @summary KeyEncryptionKeyIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KeyEncryptionKeyIdentifier ::= SEQUENCE {
 *     keyIdentifier      OCTET STRING,
 *     date               GeneralizedTime OPTIONAL,
 *     otherKeyAttribute  OtherKeyAttribute OPTIONAL
 * }
 * ```
 *
 */
export class KeyEncryptionKeyIdentifier {
    constructor(
        /**
         * @summary `keyIdentifier`.
         * @public
         * @readonly
         */
        readonly keyIdentifier: OCTET_STRING,
        /**
         * @summary `date`.
         * @public
         * @readonly
         */
        readonly date: OPTIONAL<GeneralizedTime>,
        /**
         * @summary `otherKeyAttribute`.
         * @public
         * @readonly
         */
        readonly otherKeyAttribute: OPTIONAL<OtherKeyAttribute>
    ) {}

    /**
     * @summary Restructures an object into a KeyEncryptionKeyIdentifier
     * @description
     *
     * This takes an `object` and converts it to a `KeyEncryptionKeyIdentifier`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `KeyEncryptionKeyIdentifier`.
     * @returns {KeyEncryptionKeyIdentifier}
     */
    public static _from_object(
        _o: {
            [_K in keyof KeyEncryptionKeyIdentifier]: KeyEncryptionKeyIdentifier[_K];
        }
    ): KeyEncryptionKeyIdentifier {
        return new KeyEncryptionKeyIdentifier(
            _o.keyIdentifier,
            _o.date,
            _o.otherKeyAttribute
        );
    }
}


/**
 * @summary The Leading Root Component Types of KeyEncryptionKeyIdentifier
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_KeyEncryptionKeyIdentifier: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "keyIdentifier",
        false,
        $.hasTag(_TagClass.universal, 4)
    ),
    new $.ComponentSpec(
        "date",
        true,
        $.hasTag(_TagClass.universal, 24)
    ),
    new $.ComponentSpec(
        "otherKeyAttribute",
        true,
        $.hasTag(_TagClass.universal, 16)
    ),
];


/**
 * @summary The Trailing Root Component Types of KeyEncryptionKeyIdentifier
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_KeyEncryptionKeyIdentifier: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of KeyEncryptionKeyIdentifier
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_KeyEncryptionKeyIdentifier: $.ComponentSpec[] = [];


let _cached_decoder_for_KeyEncryptionKeyIdentifier: $.ASN1Decoder<KeyEncryptionKeyIdentifier> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) KeyEncryptionKeyIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {KeyEncryptionKeyIdentifier} The decoded data structure.
 */
export function _decode_KeyEncryptionKeyIdentifier(el: _Element): KeyEncryptionKeyIdentifier {
    if (!_cached_decoder_for_KeyEncryptionKeyIdentifier) {
        _cached_decoder_for_KeyEncryptionKeyIdentifier = function (
            el: _Element
        ): KeyEncryptionKeyIdentifier {
            let keyIdentifier!: OCTET_STRING;
            let date: OPTIONAL<GeneralizedTime>;
            let otherKeyAttribute: OPTIONAL<OtherKeyAttribute>;
            const callbacks: $.DecodingMap = {
                keyIdentifier: (_el: _Element): void => {
                    keyIdentifier = $._decodeOctetString(_el);
                },
                date: (_el: _Element): void => {
                    date = $._decodeGeneralizedTime(_el);
                },
                otherKeyAttribute: (_el: _Element): void => {
                    otherKeyAttribute = _decode_OtherKeyAttribute(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_KeyEncryptionKeyIdentifier,
                _extension_additions_list_spec_for_KeyEncryptionKeyIdentifier,
                _root_component_type_list_2_spec_for_KeyEncryptionKeyIdentifier,
                undefined
            );
            return new KeyEncryptionKeyIdentifier(
                keyIdentifier,
                date,
                otherKeyAttribute
            );
        };
    }
    return _cached_decoder_for_KeyEncryptionKeyIdentifier(el);
}


let _cached_encoder_for_KeyEncryptionKeyIdentifier: $.ASN1Encoder<KeyEncryptionKeyIdentifier> | null = null;


/**
 * @summary Encodes a(n) KeyEncryptionKeyIdentifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KeyEncryptionKeyIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_KeyEncryptionKeyIdentifier(
    value: KeyEncryptionKeyIdentifier,
    elGetter: $.ASN1Encoder<KeyEncryptionKeyIdentifier>
): _Element {
    if (!_cached_encoder_for_KeyEncryptionKeyIdentifier) {
        _cached_encoder_for_KeyEncryptionKeyIdentifier = function (
            value: KeyEncryptionKeyIdentifier        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeOctetString(
                            value.keyIdentifier,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.date === undefined
                            ? undefined
                            : $._encodeGeneralizedTime(value.date, $.BER),
                        /* IF_ABSENT  */ value.otherKeyAttribute === undefined
                            ? undefined
                            : _encode_OtherKeyAttribute(
                                  value.otherKeyAttribute,
                                  $.BER
                              ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_KeyEncryptionKeyIdentifier(value, elGetter);
}


/* eslint-enable */
