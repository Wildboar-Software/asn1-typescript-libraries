/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    ContentEncryptionAlgorithmIdentifier,
    _decode_ContentEncryptionAlgorithmIdentifier,
    _encode_ContentEncryptionAlgorithmIdentifier,
} from "../CryptographicMessageSyntax-2010/ContentEncryptionAlgorithmIdentifier.ta.mjs";

/**
 * @summary EncryptedRecipientID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EncryptedRecipientID ::= SEQUENCE {
 * algorithm    ContentEncryptionAlgorithmIdentifier OPTIONAL,
 * keyID        [0] OCTET STRING OPTIONAL,
 * ciphertext    OCTET STRING
 * }
 * ```
 *
 */
export class EncryptedRecipientID {
    constructor(
        /**
         * @summary `algorithm`.
         * @public
         * @readonly
         */
        readonly algorithm: OPTIONAL<ContentEncryptionAlgorithmIdentifier>,
        /**
         * @summary `keyID`.
         * @public
         * @readonly
         */
        readonly keyID: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `ciphertext`.
         * @public
         * @readonly
         */
        readonly ciphertext: OCTET_STRING
    ) {}

    /**
     * @summary Restructures an object into a EncryptedRecipientID
     * @description
     *
     * This takes an `object` and converts it to a `EncryptedRecipientID`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EncryptedRecipientID`.
     * @returns {EncryptedRecipientID}
     */
    public static _from_object(
        _o: { [_K in keyof EncryptedRecipientID]: EncryptedRecipientID[_K] }
    ): EncryptedRecipientID {
        return new EncryptedRecipientID(_o.algorithm, _o.keyID, _o.ciphertext);
    }
}


/**
 * @summary The Leading Root Component Types of EncryptedRecipientID
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_EncryptedRecipientID: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "algorithm",
        true,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec(
        "keyID",
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "ciphertext",
        false,
        $.hasTag(_TagClass.universal, 4)
    ),
];


/**
 * @summary The Trailing Root Component Types of EncryptedRecipientID
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_EncryptedRecipientID: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of EncryptedRecipientID
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_EncryptedRecipientID: $.ComponentSpec[] = [];


let _cached_decoder_for_EncryptedRecipientID: $.ASN1Decoder<EncryptedRecipientID> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) EncryptedRecipientID
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EncryptedRecipientID} The decoded data structure.
 */
export function _decode_EncryptedRecipientID(el: _Element): EncryptedRecipientID {
    if (!_cached_decoder_for_EncryptedRecipientID) {
        _cached_decoder_for_EncryptedRecipientID = function (
            el: _Element
        ): EncryptedRecipientID {
            let algorithm: OPTIONAL<ContentEncryptionAlgorithmIdentifier>;
            let keyID: OPTIONAL<OCTET_STRING>;
            let ciphertext!: OCTET_STRING;
            const callbacks: $.DecodingMap = {
                algorithm: (_el: _Element): void => {
                    algorithm = _decode_ContentEncryptionAlgorithmIdentifier(
                        _el
                    );
                },
                keyID: (_el: _Element): void => {
                    keyID = $._decode_explicit<OCTET_STRING>(
                        () => $._decodeOctetString
                    )(_el);
                },
                ciphertext: (_el: _Element): void => {
                    ciphertext = $._decodeOctetString(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_EncryptedRecipientID,
                _extension_additions_list_spec_for_EncryptedRecipientID,
                _root_component_type_list_2_spec_for_EncryptedRecipientID,
                undefined
            );
            return new EncryptedRecipientID (
                algorithm,
                keyID,
                ciphertext
            );
        };
    }
    return _cached_decoder_for_EncryptedRecipientID(el);
}


let _cached_encoder_for_EncryptedRecipientID: $.ASN1Encoder<EncryptedRecipientID> | null = null;


/**
 * @summary Encodes a(n) EncryptedRecipientID into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EncryptedRecipientID, encoded as an ASN.1 Element.
 */
export function _encode_EncryptedRecipientID(
    value: EncryptedRecipientID,
    elGetter: $.ASN1Encoder<EncryptedRecipientID>
): _Element {
    if (!_cached_encoder_for_EncryptedRecipientID) {
        _cached_encoder_for_EncryptedRecipientID = function (
            value: EncryptedRecipientID        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.algorithm === undefined
                            ? undefined
                            : _encode_ContentEncryptionAlgorithmIdentifier(
                                  value.algorithm,
                                  $.DER
                              ),
                        /* IF_ABSENT  */ value.keyID === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  0,
                                  () => $._encodeOctetString,
                                  $.DER
                              )(value.keyID, $.DER),
                        /* REQUIRED   */ $._encodeOctetString(
                            value.ciphertext,
                            $.DER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_EncryptedRecipientID(value, elGetter);
}


/* eslint-enable */
