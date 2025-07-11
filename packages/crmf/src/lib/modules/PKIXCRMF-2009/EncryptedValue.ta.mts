/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BIT_STRING,
    OCTET_STRING,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "@wildboar/x500/AuthenticationFramework";


/**
 * @summary EncryptedValue
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EncryptedValue ::= SEQUENCE {
 *     intendedAlg   [0] AlgorithmIdentifier{ALGORITHM, {...}}  OPTIONAL,
 *     -- the intended algorithm for which the value will be used
 *     symmAlg       [1] AlgorithmIdentifier{ALGORITHM, {...}}  OPTIONAL,
 *     -- the symmetric algorithm used to encrypt the value
 *     encSymmKey    [2] BIT STRING           OPTIONAL,
 *     -- the (encrypted) symmetric key used to encrypt the value
 *     keyAlg        [3] AlgorithmIdentifier{ALGORITHM, {...}}  OPTIONAL,
 *     -- algorithm used to encrypt the symmetric key
 *     valueHint     [4] OCTET STRING         OPTIONAL,
 *     -- a brief description or identifier of the encValue content
 *     -- (may be meaningful only to the sending entity, and used only
 *     -- if EncryptedValue might be re-examined by the sending entity
 *
 *     -- in the future)
 *     encValue       BIT STRING }
 * ```
 *
 */
export class EncryptedValue {
    constructor(
        /**
         * @summary `intendedAlg`.
         * @public
         * @readonly
         */
        readonly intendedAlg: OPTIONAL<AlgorithmIdentifier>,
        /**
         * @summary `symmAlg`.
         * @public
         * @readonly
         */
        readonly symmAlg: OPTIONAL<AlgorithmIdentifier>,
        /**
         * @summary `encSymmKey`.
         * @public
         * @readonly
         */
        readonly encSymmKey: OPTIONAL<BIT_STRING>,
        /**
         * @summary `keyAlg`.
         * @public
         * @readonly
         */
        readonly keyAlg: OPTIONAL<AlgorithmIdentifier>,
        /**
         * @summary `valueHint`.
         * @public
         * @readonly
         */
        readonly valueHint: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `encValue`.
         * @public
         * @readonly
         */
        readonly encValue: BIT_STRING
    ) {}

    /**
     * @summary Restructures an object into a EncryptedValue
     * @description
     *
     * This takes an `object` and converts it to a `EncryptedValue`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EncryptedValue`.
     * @returns {EncryptedValue}
     */
    public static _from_object(
        _o: { [_K in keyof EncryptedValue]: EncryptedValue[_K] }
    ): EncryptedValue {
        return new EncryptedValue(
            _o.intendedAlg,
            _o.symmAlg,
            _o.encSymmKey,
            _o.keyAlg,
            _o.valueHint,
            _o.encValue
        );
    }
}


/**
 * @summary The Leading Root Component Types of EncryptedValue
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_EncryptedValue: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "intendedAlg",
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "symmAlg",
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        "encSymmKey",
        true,
        $.hasTag(_TagClass.context, 2)
    ),
    new $.ComponentSpec(
        "keyAlg",
        true,
        $.hasTag(_TagClass.context, 3)
    ),
    new $.ComponentSpec(
        "valueHint",
        true,
        $.hasTag(_TagClass.context, 4)
    ),
    new $.ComponentSpec(
        "encValue",
        false,
        $.hasTag(_TagClass.universal, 3)
    ),
];


/**
 * @summary The Trailing Root Component Types of EncryptedValue
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_EncryptedValue: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of EncryptedValue
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_EncryptedValue: $.ComponentSpec[] = [];


let _cached_decoder_for_EncryptedValue: $.ASN1Decoder<EncryptedValue> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) EncryptedValue
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EncryptedValue} The decoded data structure.
 */
export function _decode_EncryptedValue(el: _Element): EncryptedValue {
    if (!_cached_decoder_for_EncryptedValue) {
        _cached_decoder_for_EncryptedValue = function (
            el: _Element
        ): EncryptedValue {
            let intendedAlg: OPTIONAL<AlgorithmIdentifier>;
            let symmAlg: OPTIONAL<AlgorithmIdentifier>;
            let encSymmKey: OPTIONAL<BIT_STRING>;
            let keyAlg: OPTIONAL<AlgorithmIdentifier>;
            let valueHint: OPTIONAL<OCTET_STRING>;
            let encValue!: BIT_STRING;
            const callbacks: $.DecodingMap = {
                intendedAlg: (_el: _Element): void => {
                    intendedAlg = $._decode_implicit<AlgorithmIdentifier>(
                        () => _decode_AlgorithmIdentifier
                    )(_el);
                },
                symmAlg: (_el: _Element): void => {
                    symmAlg = $._decode_implicit<AlgorithmIdentifier>(
                        () => _decode_AlgorithmIdentifier
                    )(_el);
                },
                encSymmKey: (_el: _Element): void => {
                    encSymmKey = $._decode_implicit<BIT_STRING>(
                        () => $._decodeBitString
                    )(_el);
                },
                keyAlg: (_el: _Element): void => {
                    keyAlg = $._decode_implicit<AlgorithmIdentifier>(
                        () => _decode_AlgorithmIdentifier
                    )(_el);
                },
                valueHint: (_el: _Element): void => {
                    valueHint = $._decode_implicit<OCTET_STRING>(
                        () => $._decodeOctetString
                    )(_el);
                },
                encValue: (_el: _Element): void => {
                    encValue = $._decodeBitString(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_EncryptedValue,
                _extension_additions_list_spec_for_EncryptedValue,
                _root_component_type_list_2_spec_for_EncryptedValue,
                undefined
            );
            return new EncryptedValue (
                intendedAlg,
                symmAlg,
                encSymmKey,
                keyAlg,
                valueHint,
                encValue
            );
        };
    }
    return _cached_decoder_for_EncryptedValue(el);
}


let _cached_encoder_for_EncryptedValue: $.ASN1Encoder<EncryptedValue> | null = null;


/**
 * @summary Encodes a(n) EncryptedValue into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EncryptedValue, encoded as an ASN.1 Element.
 */
export function _encode_EncryptedValue(
    value: EncryptedValue,
    elGetter: $.ASN1Encoder<EncryptedValue>
): _Element {
    if (!_cached_encoder_for_EncryptedValue) {
        _cached_encoder_for_EncryptedValue = function (
            value: EncryptedValue        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.intendedAlg === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_AlgorithmIdentifier,
                                  $.DER
                              )(value.intendedAlg, $.DER),
                        /* IF_ABSENT  */ value.symmAlg === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_AlgorithmIdentifier,
                                  $.DER
                              )(value.symmAlg, $.DER),
                        /* IF_ABSENT  */ value.encSymmKey === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => $._encodeBitString,
                                  $.DER
                              )(value.encSymmKey, $.DER),
                        /* IF_ABSENT  */ value.keyAlg === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  3,
                                  () => _encode_AlgorithmIdentifier,
                                  $.DER
                              )(value.keyAlg, $.DER),
                        /* IF_ABSENT  */ value.valueHint === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  4,
                                  () => $._encodeOctetString,
                                  $.DER
                              )(value.valueHint, $.DER),
                        /* REQUIRED   */ $._encodeBitString(
                            value.encValue,
                            $.DER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_EncryptedValue(value, elGetter);
}


/* eslint-enable */
