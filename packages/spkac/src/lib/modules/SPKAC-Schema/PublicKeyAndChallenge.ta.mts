/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    IA5String,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    SubjectPublicKeyInfo,
    _decode_SubjectPublicKeyInfo,
    _encode_SubjectPublicKeyInfo,
} from "@wildboar/pki-stub";


/**
 * @summary PublicKeyAndChallenge
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PublicKeyAndChallenge ::= SEQUENCE
 *     {
 *     spki SubjectPublicKeyInfo,
 *     challenge IA5String
 *     }
 * ```
 *
 */
export class PublicKeyAndChallenge {
    constructor(
        /**
         * @summary `spki`.
         * @public
         * @readonly
         */
        readonly spki: SubjectPublicKeyInfo,
        /**
         * @summary `challenge`.
         * @public
         * @readonly
         */
        readonly challenge: IA5String
    ) {}

    /**
     * @summary Restructures an object into a PublicKeyAndChallenge
     * @description
     *
     * This takes an `object` and converts it to a `PublicKeyAndChallenge`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PublicKeyAndChallenge`.
     * @returns {PublicKeyAndChallenge}
     */
    public static _from_object(
        _o: { [_K in keyof PublicKeyAndChallenge]: PublicKeyAndChallenge[_K] }
    ): PublicKeyAndChallenge {
        return new PublicKeyAndChallenge(_o.spki, _o.challenge);
    }
}


/**
 * @summary The Leading Root Component Types of PublicKeyAndChallenge
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PublicKeyAndChallenge: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "spki",
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "challenge",
        false,
        $.hasTag(_TagClass.context, 1)
    ),
];


/**
 * @summary The Trailing Root Component Types of PublicKeyAndChallenge
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PublicKeyAndChallenge: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of PublicKeyAndChallenge
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PublicKeyAndChallenge: $.ComponentSpec[] = [];


let _cached_decoder_for_PublicKeyAndChallenge: $.ASN1Decoder<PublicKeyAndChallenge> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) PublicKeyAndChallenge
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PublicKeyAndChallenge} The decoded data structure.
 */
export function _decode_PublicKeyAndChallenge(el: _Element): PublicKeyAndChallenge {
    if (!_cached_decoder_for_PublicKeyAndChallenge) {
        _cached_decoder_for_PublicKeyAndChallenge = function (
            el: _Element
        ): PublicKeyAndChallenge {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "PublicKeyAndChallenge contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "spki";
            sequence[1].name = "challenge";
            let spki!: SubjectPublicKeyInfo;
            let challenge!: IA5String;
            spki = _decode_SubjectPublicKeyInfo(sequence[0]);
            challenge = $._decodeIA5String(sequence[1]);
            return new PublicKeyAndChallenge(spki, challenge);
        };
    }
    return _cached_decoder_for_PublicKeyAndChallenge(el);
}


let _cached_encoder_for_PublicKeyAndChallenge: $.ASN1Encoder<PublicKeyAndChallenge> | null = null;


/**
 * @summary Encodes a(n) PublicKeyAndChallenge into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PublicKeyAndChallenge, encoded as an ASN.1 Element.
 */
export function _encode_PublicKeyAndChallenge(
    value: PublicKeyAndChallenge,
    elGetter: $.ASN1Encoder<PublicKeyAndChallenge>
): _Element {
    if (!_cached_encoder_for_PublicKeyAndChallenge) {
        _cached_encoder_for_PublicKeyAndChallenge = function (
            value: PublicKeyAndChallenge        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_SubjectPublicKeyInfo(
                            value.spki,
                            $.DER
                        ),
                        /* REQUIRED   */ $._encodeIA5String(
                            value.challenge,
                            $.DER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_PublicKeyAndChallenge(value, elGetter);
}


/* eslint-enable */
