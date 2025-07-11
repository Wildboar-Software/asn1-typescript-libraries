/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BIT_STRING,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "@wildboar/x500/AuthenticationFramework";
import {
    POPOSigningKeyInput,
    _decode_POPOSigningKeyInput,
    _encode_POPOSigningKeyInput,
} from "../PKIXCRMF-2009/POPOSigningKeyInput.ta.mjs";


/**
 * @summary POPOSigningKey
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * POPOSigningKey ::= SEQUENCE {
 *     poposkInput           [0] POPOSigningKeyInput OPTIONAL,
 *     algorithmIdentifier   AlgorithmIdentifier{SIGNATURE-ALGORITHM,
 *                             {SignatureAlgorithms}},
 *     signature             BIT STRING }
 * ```
 *
 */
export class POPOSigningKey {
    constructor(
        /**
         * @summary `poposkInput`.
         * @public
         * @readonly
         */
        readonly poposkInput: OPTIONAL<POPOSigningKeyInput>,
        /**
         * @summary `algorithmIdentifier`.
         * @public
         * @readonly
         */
        readonly algorithmIdentifier: AlgorithmIdentifier,
        /**
         * @summary `signature`.
         * @public
         * @readonly
         */
        readonly signature: BIT_STRING
    ) {}

    /**
     * @summary Restructures an object into a POPOSigningKey
     * @description
     *
     * This takes an `object` and converts it to a `POPOSigningKey`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `POPOSigningKey`.
     * @returns {POPOSigningKey}
     */
    public static _from_object(
        _o: { [_K in keyof POPOSigningKey]: POPOSigningKey[_K] }
    ): POPOSigningKey {
        return new POPOSigningKey(
            _o.poposkInput,
            _o.algorithmIdentifier,
            _o.signature
        );
    }
}


/**
 * @summary The Leading Root Component Types of POPOSigningKey
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_POPOSigningKey: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "poposkInput",
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "algorithmIdentifier",
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec(
        "signature",
        false,
        $.hasTag(_TagClass.universal, 3)
    ),
];


/**
 * @summary The Trailing Root Component Types of POPOSigningKey
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_POPOSigningKey: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of POPOSigningKey
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_POPOSigningKey: $.ComponentSpec[] = [];


let _cached_decoder_for_POPOSigningKey: $.ASN1Decoder<POPOSigningKey> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) POPOSigningKey
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {POPOSigningKey} The decoded data structure.
 */
export function _decode_POPOSigningKey(el: _Element): POPOSigningKey {
    if (!_cached_decoder_for_POPOSigningKey) {
        _cached_decoder_for_POPOSigningKey = function (
            el: _Element
        ): POPOSigningKey {
            let poposkInput: OPTIONAL<POPOSigningKeyInput>;
            let algorithmIdentifier!: AlgorithmIdentifier;
            let signature!: BIT_STRING;
            const callbacks: $.DecodingMap = {
                poposkInput: (_el: _Element): void => {
                    poposkInput = $._decode_implicit<POPOSigningKeyInput>(
                        () => _decode_POPOSigningKeyInput
                    )(_el);
                },
                algorithmIdentifier: (_el: _Element): void => {
                    algorithmIdentifier = _decode_AlgorithmIdentifier(_el);
                },
                signature: (_el: _Element): void => {
                    signature = $._decodeBitString(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_POPOSigningKey,
                _extension_additions_list_spec_for_POPOSigningKey,
                _root_component_type_list_2_spec_for_POPOSigningKey,
                undefined
            );
            return new POPOSigningKey (
                poposkInput,
                algorithmIdentifier,
                signature
            );
        };
    }
    return _cached_decoder_for_POPOSigningKey(el);
}


let _cached_encoder_for_POPOSigningKey: $.ASN1Encoder<POPOSigningKey> | null = null;


/**
 * @summary Encodes a(n) POPOSigningKey into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The POPOSigningKey, encoded as an ASN.1 Element.
 */
export function _encode_POPOSigningKey(
    value: POPOSigningKey,
    elGetter: $.ASN1Encoder<POPOSigningKey>
): _Element {
    if (!_cached_encoder_for_POPOSigningKey) {
        _cached_encoder_for_POPOSigningKey = function (
            value: POPOSigningKey        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.poposkInput === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_POPOSigningKeyInput,
                                  $.DER
                              )(value.poposkInput, $.DER),
                        /* REQUIRED   */ _encode_AlgorithmIdentifier(
                            value.algorithmIdentifier,
                            $.DER
                        ),
                        /* REQUIRED   */ $._encodeBitString(
                            value.signature,
                            $.DER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_POPOSigningKey(value, elGetter);
}


/* eslint-enable */
