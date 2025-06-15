/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import {
    AlgorithmIdentifier, _decode_AlgorithmIdentifier, _encode_AlgorithmIdentifier
} from "@wildboar/x500/src/lib/modules/AuthenticationFramework/AlgorithmIdentifier.ta.mjs";
import { OtherHashValue, _decode_OtherHashValue, _encode_OtherHashValue } from "../ETS-ElectronicSignatureFormats-ExplicitSyntax97/OtherHashValue.ta.mjs";
/**
 * @summary OtherHashAlgAndValue
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OtherHashAlgAndValue ::= SEQUENCE {
 *     hashAlgorithm       AlgorithmIdentifier,
 *     hashValue           OtherHashValue }
 * ```
 *
 * @class
 */
export
class OtherHashAlgAndValue {
    constructor (
        /**
         * @summary `hashAlgorithm`.
         * @public
         * @readonly
         */
        readonly hashAlgorithm: AlgorithmIdentifier,
        /**
         * @summary `hashValue`.
         * @public
         * @readonly
         */
        readonly hashValue: OtherHashValue
    ) {}

    /**
     * @summary Restructures an object into a OtherHashAlgAndValue
     * @description
     *
     * This takes an `object` and converts it to a `OtherHashAlgAndValue`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OtherHashAlgAndValue`.
     * @returns {OtherHashAlgAndValue}
     */
    public static _from_object (_o: { [_K in keyof (OtherHashAlgAndValue)]: (OtherHashAlgAndValue)[_K] }): OtherHashAlgAndValue {
        return new OtherHashAlgAndValue(_o.hashAlgorithm, _o.hashValue);
    }


}

/**
 * @summary The Leading Root Component Types of OtherHashAlgAndValue
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_1_spec_for_OtherHashAlgAndValue: $.ComponentSpec[] = [
    new $.ComponentSpec("hashAlgorithm", false, $.hasTag(_TagClass.universal, 16), undefined, undefined),
    new $.ComponentSpec("hashValue", false, $.hasTag(_TagClass.universal, 4), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of OtherHashAlgAndValue
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_2_spec_for_OtherHashAlgAndValue: $.ComponentSpec[] = [

];

/**
 * @summary The Extension Addition Component Types of OtherHashAlgAndValue
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _extension_additions_list_spec_for_OtherHashAlgAndValue: $.ComponentSpec[] = [

];

let _cached_decoder_for_OtherHashAlgAndValue: $.ASN1Decoder<OtherHashAlgAndValue> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OtherHashAlgAndValue
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OtherHashAlgAndValue} The decoded data structure.
 */
export
function _decode_OtherHashAlgAndValue (el: _Element) {
    if (!_cached_decoder_for_OtherHashAlgAndValue) { _cached_decoder_for_OtherHashAlgAndValue = function (el: _Element): OtherHashAlgAndValue {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("OtherHashAlgAndValue contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "hashAlgorithm";
    sequence[1].name = "hashValue";
    let hashAlgorithm!: AlgorithmIdentifier;
    let hashValue!: OtherHashValue;
    hashAlgorithm = _decode_AlgorithmIdentifier(sequence[0]);
    hashValue = _decode_OtherHashValue(sequence[1]);
    return new OtherHashAlgAndValue(
        hashAlgorithm,
        hashValue,

    );
}; }
    return _cached_decoder_for_OtherHashAlgAndValue(el);
}

let _cached_encoder_for_OtherHashAlgAndValue: $.ASN1Encoder<OtherHashAlgAndValue> | null = null;

/**
 * @summary Encodes a(n) OtherHashAlgAndValue into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OtherHashAlgAndValue, encoded as an ASN.1 Element.
 */
export
function _encode_OtherHashAlgAndValue (value: OtherHashAlgAndValue, elGetter: $.ASN1Encoder<OtherHashAlgAndValue>) {
    if (!_cached_encoder_for_OtherHashAlgAndValue) { _cached_encoder_for_OtherHashAlgAndValue = function (value: OtherHashAlgAndValue): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_AlgorithmIdentifier(value.hashAlgorithm, $.BER),
            /* REQUIRED   */ _encode_OtherHashValue(value.hashValue, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_OtherHashAlgAndValue(value, elGetter);
}


/* eslint-enable */
