/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
} from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";
import {
    GenericSecretKeyAttributes,
    _decode_GenericSecretKeyAttributes,
    _encode_GenericSecretKeyAttributes,
} from "../PKCS-15/GenericSecretKeyAttributes.ta.mjs";
import {
    SecretKeyObject,
    _get_decoder_for_SecretKeyObject,
    _get_encoder_for_SecretKeyObject,
} from "../PKCS-15/SecretKeyObject.ta.mjs";

/**
 * @summary OtherKey
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OtherKey ::= SEQUENCE {
 *     keyType OBJECT IDENTIFIER,
 *     keyAttr SecretKeyObject {GenericSecretKeyAttributes}
 * }
 * ```
 *
 * @class
 */
export class OtherKey {
    constructor(
        /**
         * @summary `keyType`.
         * @public
         * @readonly
         */
        readonly keyType: OBJECT_IDENTIFIER,
        /**
         * @summary `keyAttr`.
         * @public
         * @readonly
         */
        readonly keyAttr: SecretKeyObject<GenericSecretKeyAttributes>
    ) {}

    /**
     * @summary Restructures an object into a OtherKey
     * @description
     *
     * This takes an `object` and converts it to a `OtherKey`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OtherKey`.
     * @returns {OtherKey}
     */
    public static _from_object(
        _o: { [_K in keyof OtherKey]: OtherKey[_K] }
    ): OtherKey {
        return new OtherKey(_o.keyType, _o.keyAttr);
    }
}


/**
 * @summary The Leading Root Component Types of OtherKey
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_OtherKey: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "keyType",
        false,
        $.hasTag(_TagClass.universal, 6)
    ),
    new $.ComponentSpec(
        "keyAttr",
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
];


/**
 * @summary The Trailing Root Component Types of OtherKey
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_OtherKey: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of OtherKey
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_OtherKey: $.ComponentSpec[] = [];


let _cached_decoder_for_OtherKey: $.ASN1Decoder<OtherKey> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) OtherKey
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OtherKey} The decoded data structure.
 */
export function _decode_OtherKey(el: _Element) {
    if (!_cached_decoder_for_OtherKey) {
        _cached_decoder_for_OtherKey = function (el: _Element): OtherKey {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "OtherKey contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "keyType";
            sequence[1].name = "keyAttr";
            let keyType!: OBJECT_IDENTIFIER;
            let keyAttr!: SecretKeyObject<GenericSecretKeyAttributes>;
            keyType = $._decodeObjectIdentifier(sequence[0]);
            keyAttr = _get_decoder_for_SecretKeyObject<GenericSecretKeyAttributes>(
                _decode_GenericSecretKeyAttributes
            )(sequence[1]);
            return new OtherKey(keyType, keyAttr);
        };
    }
    return _cached_decoder_for_OtherKey(el);
}


let _cached_encoder_for_OtherKey: $.ASN1Encoder<OtherKey> | null = null;


/**
 * @summary Encodes a(n) OtherKey into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OtherKey, encoded as an ASN.1 Element.
 */
export function _encode_OtherKey(
    value: OtherKey,
    elGetter: $.ASN1Encoder<OtherKey>
) {
    if (!_cached_encoder_for_OtherKey) {
        _cached_encoder_for_OtherKey = function (
            value: OtherKey        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeObjectIdentifier(
                            value.keyType,
                            $.BER
                        ),
                        /* REQUIRED   */ _get_encoder_for_SecretKeyObject<GenericSecretKeyAttributes>(
                            _encode_GenericSecretKeyAttributes
                        )(value.keyAttr, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_OtherKey(value, elGetter);
}


/* eslint-enable */
