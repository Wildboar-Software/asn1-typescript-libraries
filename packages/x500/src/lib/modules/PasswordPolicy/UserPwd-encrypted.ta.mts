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
} from "../AuthenticationFramework/AlgorithmIdentifier.ta.mjs";
/**
 * @summary UserPwd_encrypted
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UserPwd-encrypted ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class UserPwd_encrypted {
    constructor(
        /**
         * @summary `algorithmIdentifier`.
         * @public
         * @readonly
         */
        readonly algorithmIdentifier: AlgorithmIdentifier,
        /**
         * @summary `encryptedString`.
         * @public
         * @readonly
         */
        readonly encryptedString: OCTET_STRING,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a UserPwd_encrypted
     * @description
     *
     * This takes an `object` and converts it to a `UserPwd_encrypted`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UserPwd_encrypted`.
     * @returns {UserPwd_encrypted}
     */
    public static _from_object(
        _o: { [_K in keyof UserPwd_encrypted]: UserPwd_encrypted[_K] }
    ): UserPwd_encrypted {
        return new UserPwd_encrypted(
            _o.algorithmIdentifier,
            _o.encryptedString,
            _o._unrecognizedExtensionsList
        );
    }
}

/**
 * @summary The Leading Root Component Types of UserPwd_encrypted
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_UserPwd_encrypted: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "algorithmIdentifier",
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec(
        "encryptedString",
        false,
        $.hasTag(_TagClass.universal, 4)
    ),
];

/**
 * @summary The Trailing Root Component Types of UserPwd_encrypted
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_UserPwd_encrypted: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of UserPwd_encrypted
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_UserPwd_encrypted: $.ComponentSpec[] = [];

let _cached_decoder_for_UserPwd_encrypted: $.ASN1Decoder<UserPwd_encrypted> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UserPwd_encrypted
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UserPwd_encrypted} The decoded data structure.
 */
export function _decode_UserPwd_encrypted(el: _Element) {
    if (!_cached_decoder_for_UserPwd_encrypted) {
        _cached_decoder_for_UserPwd_encrypted = function (
            el: _Element
        ): UserPwd_encrypted {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "UserPwd-encrypted contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "algorithmIdentifier";
            sequence[1].name = "encryptedString";
            let algorithmIdentifier!: AlgorithmIdentifier;
            let encryptedString!: OCTET_STRING;
            algorithmIdentifier = _decode_AlgorithmIdentifier(sequence[0]);
            encryptedString = $._decodeOctetString(sequence[1]);
            return new UserPwd_encrypted(
                algorithmIdentifier,
                encryptedString,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_UserPwd_encrypted(el);
}

let _cached_encoder_for_UserPwd_encrypted: $.ASN1Encoder<UserPwd_encrypted> | null = null;

/**
 * @summary Encodes a(n) UserPwd_encrypted into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UserPwd_encrypted, encoded as an ASN.1 Element.
 */
export function _encode_UserPwd_encrypted(
    value: UserPwd_encrypted,
    elGetter: $.ASN1Encoder<UserPwd_encrypted>
) {
    if (!_cached_encoder_for_UserPwd_encrypted) {
        _cached_encoder_for_UserPwd_encrypted = function (
            value: UserPwd_encrypted        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_AlgorithmIdentifier(
                                value.algorithmIdentifier,
                                $.DER
                            ),
                            /* REQUIRED   */ $._encodeOctetString(
                                value.encryptedString,
                                $.DER
                            ),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_UserPwd_encrypted(value, elGetter);
}


/* eslint-enable */
