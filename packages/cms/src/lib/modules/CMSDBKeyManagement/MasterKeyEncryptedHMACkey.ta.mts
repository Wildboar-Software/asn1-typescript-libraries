/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    MasterKeyAlgorithmIdentifier,
    _decode_MasterKeyAlgorithmIdentifier,
    _encode_MasterKeyAlgorithmIdentifier,
} from "../CMSDBKeyManagement/MasterKeyAlgorithmIdentifier.ta.mjs";
import {
    MessageAuthenticationCodeAlgorithm,
    _decode_MessageAuthenticationCodeAlgorithm,
    _encode_MessageAuthenticationCodeAlgorithm,
} from "../CryptographicMessageSyntax-2010/MessageAuthenticationCodeAlgorithm.ta.mjs";

/**
 * @summary MasterKeyEncryptedHMACkey
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MasterKeyEncryptedHMACkey ::= SEQUENCE {
 * masterKeyAID    MasterKeyAlgorithmIdentifier OPTIONAL,
 * hmacKeyAID        MessageAuthenticationCodeAlgorithm OPTIONAL,
 * encryptedKey    OCTET STRING(SIZE(1..MAX))
 * }
 * ```
 *
 * @class
 */
export class MasterKeyEncryptedHMACkey {
    constructor(
        /**
         * @summary `masterKeyAID`.
         * @public
         * @readonly
         */
        readonly masterKeyAID: OPTIONAL<MasterKeyAlgorithmIdentifier>,
        /**
         * @summary `hmacKeyAID`.
         * @public
         * @readonly
         */
        readonly hmacKeyAID: OPTIONAL<MessageAuthenticationCodeAlgorithm>,
        /**
         * @summary `encryptedKey`.
         * @public
         * @readonly
         */
        readonly encryptedKey: OCTET_STRING
    ) {}

    /**
     * @summary Restructures an object into a MasterKeyEncryptedHMACkey
     * @description
     *
     * This takes an `object` and converts it to a `MasterKeyEncryptedHMACkey`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MasterKeyEncryptedHMACkey`.
     * @returns {MasterKeyEncryptedHMACkey}
     */
    public static _from_object(
        _o: {
            [_K in keyof MasterKeyEncryptedHMACkey]: MasterKeyEncryptedHMACkey[_K];
        }
    ): MasterKeyEncryptedHMACkey {
        return new MasterKeyEncryptedHMACkey(
            _o.masterKeyAID,
            _o.hmacKeyAID,
            _o.encryptedKey
        );
    }
}


/**
 * @summary The Leading Root Component Types of MasterKeyEncryptedHMACkey
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_MasterKeyEncryptedHMACkey: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "masterKeyAID",
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "hmacKeyAID",
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        "encryptedKey",
        false,
        $.hasTag(_TagClass.context, 2)
    ),
];


/**
 * @summary The Trailing Root Component Types of MasterKeyEncryptedHMACkey
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_MasterKeyEncryptedHMACkey: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of MasterKeyEncryptedHMACkey
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_MasterKeyEncryptedHMACkey: $.ComponentSpec[] = [];


let _cached_decoder_for_MasterKeyEncryptedHMACkey: $.ASN1Decoder<MasterKeyEncryptedHMACkey> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) MasterKeyEncryptedHMACkey
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MasterKeyEncryptedHMACkey} The decoded data structure.
 */
export function _decode_MasterKeyEncryptedHMACkey(el: _Element): MasterKeyEncryptedHMACkey {
    if (!_cached_decoder_for_MasterKeyEncryptedHMACkey) {
        _cached_decoder_for_MasterKeyEncryptedHMACkey = function (
            el: _Element
        ): MasterKeyEncryptedHMACkey {
            let masterKeyAID: OPTIONAL<MasterKeyAlgorithmIdentifier>;
            let hmacKeyAID: OPTIONAL<MessageAuthenticationCodeAlgorithm>;
            let encryptedKey!: OCTET_STRING;
            const callbacks: $.DecodingMap = {
                masterKeyAID: (_el: _Element): void => {
                    masterKeyAID = _decode_MasterKeyAlgorithmIdentifier(_el);
                },
                hmacKeyAID: (_el: _Element): void => {
                    hmacKeyAID = _decode_MessageAuthenticationCodeAlgorithm(
                        _el
                    );
                },
                encryptedKey: (_el: _Element): void => {
                    encryptedKey = $._decodeOctetString(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_MasterKeyEncryptedHMACkey,
                _extension_additions_list_spec_for_MasterKeyEncryptedHMACkey,
                _root_component_type_list_2_spec_for_MasterKeyEncryptedHMACkey,
                undefined
            );
            return new MasterKeyEncryptedHMACkey (
                masterKeyAID,
                hmacKeyAID,
                encryptedKey
            );
        };
    }
    return _cached_decoder_for_MasterKeyEncryptedHMACkey(el);
}


let _cached_encoder_for_MasterKeyEncryptedHMACkey: $.ASN1Encoder<MasterKeyEncryptedHMACkey> | null = null;


/**
 * @summary Encodes a(n) MasterKeyEncryptedHMACkey into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MasterKeyEncryptedHMACkey, encoded as an ASN.1 Element.
 */
export function _encode_MasterKeyEncryptedHMACkey(
    value: MasterKeyEncryptedHMACkey,
    elGetter: $.ASN1Encoder<MasterKeyEncryptedHMACkey>
): _Element {
    if (!_cached_encoder_for_MasterKeyEncryptedHMACkey) {
        _cached_encoder_for_MasterKeyEncryptedHMACkey = function (
            value: MasterKeyEncryptedHMACkey        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.masterKeyAID === undefined
                            ? undefined
                            : _encode_MasterKeyAlgorithmIdentifier(
                                  value.masterKeyAID,
                                  $.DER
                              ),
                        /* IF_ABSENT  */ value.hmacKeyAID === undefined
                            ? undefined
                            : _encode_MessageAuthenticationCodeAlgorithm(
                                  value.hmacKeyAID,
                                  $.DER
                              ),
                        /* REQUIRED   */ $._encodeOctetString(
                            value.encryptedKey,
                            $.DER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_MasterKeyEncryptedHMACkey(value, elGetter);
}


/* eslint-enable */
