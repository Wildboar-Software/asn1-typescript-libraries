/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { KeyDerivationFunction, _decode_KeyDerivationFunction, _encode_KeyDerivationFunction } from "../SEC1-v1-9/KeyDerivationFunction.ta.mjs";
import { KeyWrapFunction, _decode_KeyWrapFunction, _encode_KeyWrapFunction } from "../SEC1-v1-9/KeyWrapFunction.ta.mjs";
/**
 * @summary ECWKTParameters
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ECWKTParameters ::= SEQUENCE {
 *     kdf [0] KeyDerivationFunction OPTIONAL,
 *     wrap [1] KeyWrapFunction OPTIONAL
 * }
 * ```
 *
 */
export
class ECWKTParameters {
    constructor (
        /**
         * @summary `kdf`.
         * @public
         * @readonly
         */
        readonly kdf: OPTIONAL<KeyDerivationFunction>,
        /**
         * @summary `wrap`.
         * @public
         * @readonly
         */
        readonly wrap: OPTIONAL<KeyWrapFunction>
    ) {}

    /**
     * @summary Restructures an object into a ECWKTParameters
     * @description
     *
     * This takes an `object` and converts it to a `ECWKTParameters`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ECWKTParameters`.
     * @returns {ECWKTParameters}
     */
    public static _from_object (_o: { [_K in keyof (ECWKTParameters)]: (ECWKTParameters)[_K] }): ECWKTParameters {
        return new ECWKTParameters(_o.kdf, _o.wrap);
    }


}

/**
 * @summary The Leading Root Component Types of ECWKTParameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ECWKTParameters: $.ComponentSpec[] = [
    new $.ComponentSpec("kdf", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("wrap", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of ECWKTParameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ECWKTParameters: $.ComponentSpec[] = [

];

/**
 * @summary The Extension Addition Component Types of ECWKTParameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _extension_additions_list_spec_for_ECWKTParameters: $.ComponentSpec[] = [

];

let _cached_decoder_for_ECWKTParameters: $.ASN1Decoder<ECWKTParameters> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ECWKTParameters
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ECWKTParameters} The decoded data structure.
 */
export
function _decode_ECWKTParameters (el: _Element): ECWKTParameters {
    if (!_cached_decoder_for_ECWKTParameters) { _cached_decoder_for_ECWKTParameters = function (el: _Element): ECWKTParameters {
    let kdf: OPTIONAL<KeyDerivationFunction>;
    let wrap: OPTIONAL<KeyWrapFunction>;
    const callbacks: $.DecodingMap = {
        "kdf": (_el: _Element): void => { kdf = $._decode_explicit<KeyDerivationFunction>(() => _decode_KeyDerivationFunction)(_el); },
        "wrap": (_el: _Element): void => { wrap = $._decode_explicit<KeyWrapFunction>(() => _decode_KeyWrapFunction)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ECWKTParameters,
        _extension_additions_list_spec_for_ECWKTParameters,
        _root_component_type_list_2_spec_for_ECWKTParameters,
        undefined,
    );
    return new ECWKTParameters( 
        kdf,
        wrap
    );
}; }
    return _cached_decoder_for_ECWKTParameters(el);
}

let _cached_encoder_for_ECWKTParameters: $.ASN1Encoder<ECWKTParameters> | null = null;

/**
 * @summary Encodes a(n) ECWKTParameters into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ECWKTParameters, encoded as an ASN.1 Element.
 */
export
function _encode_ECWKTParameters (value: ECWKTParameters, elGetter: $.ASN1Encoder<ECWKTParameters>): _Element {
    if (!_cached_encoder_for_ECWKTParameters) { _cached_encoder_for_ECWKTParameters = function (value: ECWKTParameters): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.kdf === undefined) ? undefined : $._encode_explicit(_TagClass.context, 0, () => _encode_KeyDerivationFunction, $.DER)(value.kdf, $.DER)),
            /* IF_ABSENT  */ ((value.wrap === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => _encode_KeyWrapFunction, $.DER)(value.wrap, $.DER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.DER);
}; }
    return _cached_encoder_for_ECWKTParameters(value, elGetter);
}


/* eslint-enable */
