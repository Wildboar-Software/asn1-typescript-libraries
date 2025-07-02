/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    SigncryptedPartsManifest,
    _decode_SigncryptedPartsManifest,
    _encode_SigncryptedPartsManifest,
} from "../CMSSigncryption/SigncryptedPartsManifest.ta.mjs";
import {
    SignedAttributes,
    _decode_SignedAttributes,
    _encode_SignedAttributes,
} from "../CryptographicMessageSyntax-2010/SignedAttributes.ta.mjs";

/**
 * @summary ToBeSigned
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ToBeSigned ::= SEQUENCE {
 * signcryptedPartsManifest    SigncryptedPartsManifest,
 * signedAttributes        SignedAttributes
 * }
 * ```
 *
 */
export class ToBeSigned {
    constructor(
        /**
         * @summary `signcryptedPartsManifest`.
         * @public
         * @readonly
         */
        readonly signcryptedPartsManifest: SigncryptedPartsManifest,
        /**
         * @summary `signedAttributes`.
         * @public
         * @readonly
         */
        readonly signedAttributes: SignedAttributes
    ) {}

    /**
     * @summary Restructures an object into a ToBeSigned
     * @description
     *
     * This takes an `object` and converts it to a `ToBeSigned`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ToBeSigned`.
     * @returns {ToBeSigned}
     */
    public static _from_object(
        _o: { [_K in keyof ToBeSigned]: ToBeSigned[_K] }
    ): ToBeSigned {
        return new ToBeSigned(_o.signcryptedPartsManifest, _o.signedAttributes);
    }
}


/**
 * @summary The Leading Root Component Types of ToBeSigned
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ToBeSigned: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "signcryptedPartsManifest",
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "signedAttributes",
        false,
        $.hasTag(_TagClass.context, 1)
    ),
];


/**
 * @summary The Trailing Root Component Types of ToBeSigned
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ToBeSigned: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of ToBeSigned
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ToBeSigned: $.ComponentSpec[] = [];


let _cached_decoder_for_ToBeSigned: $.ASN1Decoder<ToBeSigned> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ToBeSigned
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ToBeSigned} The decoded data structure.
 */
export function _decode_ToBeSigned(el: _Element): ToBeSigned {
    if (!_cached_decoder_for_ToBeSigned) {
        _cached_decoder_for_ToBeSigned = function (el: _Element): ToBeSigned {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "ToBeSigned contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "signcryptedPartsManifest";
            sequence[1].name = "signedAttributes";
            let signcryptedPartsManifest!: SigncryptedPartsManifest;
            let signedAttributes!: SignedAttributes;
            signcryptedPartsManifest = _decode_SigncryptedPartsManifest(
                sequence[0]
            );
            signedAttributes = _decode_SignedAttributes(sequence[1]);
            return new ToBeSigned(signcryptedPartsManifest, signedAttributes);
        };
    }
    return _cached_decoder_for_ToBeSigned(el);
}


let _cached_encoder_for_ToBeSigned: $.ASN1Encoder<ToBeSigned> | null = null;


/**
 * @summary Encodes a(n) ToBeSigned into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ToBeSigned, encoded as an ASN.1 Element.
 */
export function _encode_ToBeSigned(
    value: ToBeSigned,
    elGetter: $.ASN1Encoder<ToBeSigned>
): _Element {
    if (!_cached_encoder_for_ToBeSigned) {
        _cached_encoder_for_ToBeSigned = function (
            value: ToBeSigned        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_SigncryptedPartsManifest(
                            value.signcryptedPartsManifest,
                            $.DER
                        ),
                        /* REQUIRED   */ _encode_SignedAttributes(
                            value.signedAttributes,
                            $.DER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_ToBeSigned(value, elGetter);
}


/* eslint-enable */
