/* eslint-disable */
import {
    OCTET_STRING,
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
import { AlgorithmIdentifier, _decode_AlgorithmIdentifier, _encode_AlgorithmIdentifier } from "@wildboar/x500/src/lib/modules/AuthenticationFramework/AlgorithmIdentifier.ta.mjs";
/* START_OF_SYMBOL_DEFINITION AttributeCertificateIdentifier */
/**
 * @summary AttributeCertificateIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeCertificateIdentifier ::= SEQUENCE {
 *     hashAlgorithm               AlgorithmIdentifier,
 *     hashOverSignatureValue      OCTET STRING }
 * ```
 *
 * @class
 */
export
class AttributeCertificateIdentifier {
    constructor (
        /**
         * @summary `hashAlgorithm`.
         * @public
         * @readonly
         */
        readonly hashAlgorithm: AlgorithmIdentifier,
        /**
         * @summary `hashOverSignatureValue`.
         * @public
         * @readonly
         */
        readonly hashOverSignatureValue: OCTET_STRING
    ) {}

    /**
     * @summary Restructures an object into a AttributeCertificateIdentifier
     * @description
     *
     * This takes an `object` and converts it to a `AttributeCertificateIdentifier`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AttributeCertificateIdentifier`.
     * @returns {AttributeCertificateIdentifier}
     */
    public static _from_object (_o: { [_K in keyof (AttributeCertificateIdentifier)]: (AttributeCertificateIdentifier)[_K] }): AttributeCertificateIdentifier {
        return new AttributeCertificateIdentifier(_o.hashAlgorithm, _o.hashOverSignatureValue);
    }


}
/* END_OF_SYMBOL_DEFINITION AttributeCertificateIdentifier */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AttributeCertificateIdentifier */
/**
 * @summary The Leading Root Component Types of AttributeCertificateIdentifier
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AttributeCertificateIdentifier: $.ComponentSpec[] = [
    new $.ComponentSpec("hashAlgorithm", false, $.hasTag(_TagClass.universal, 16), undefined, undefined),
    new $.ComponentSpec("hashOverSignatureValue", false, $.hasTag(_TagClass.universal, 4), undefined, undefined)
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AttributeCertificateIdentifier */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AttributeCertificateIdentifier */
/**
 * @summary The Trailing Root Component Types of AttributeCertificateIdentifier
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AttributeCertificateIdentifier: $.ComponentSpec[] = [

];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AttributeCertificateIdentifier */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AttributeCertificateIdentifier */
/**
 * @summary The Extension Addition Component Types of AttributeCertificateIdentifier
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _extension_additions_list_spec_for_AttributeCertificateIdentifier: $.ComponentSpec[] = [

];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AttributeCertificateIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeCertificateIdentifier */
let _cached_decoder_for_AttributeCertificateIdentifier: $.ASN1Decoder<AttributeCertificateIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeCertificateIdentifier */

/* START_OF_SYMBOL_DEFINITION _decode_AttributeCertificateIdentifier */
/**
 * @summary Decodes an ASN.1 element into a(n) AttributeCertificateIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeCertificateIdentifier} The decoded data structure.
 */
export
function _decode_AttributeCertificateIdentifier (el: _Element) {
    if (!_cached_decoder_for_AttributeCertificateIdentifier) { _cached_decoder_for_AttributeCertificateIdentifier = function (el: _Element): AttributeCertificateIdentifier {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("AttributeCertificateIdentifier contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "hashAlgorithm";
    sequence[1].name = "hashOverSignatureValue";
    let hashAlgorithm!: AlgorithmIdentifier;
    let hashOverSignatureValue!: OCTET_STRING;
    hashAlgorithm = _decode_AlgorithmIdentifier(sequence[0]);
    hashOverSignatureValue = $._decodeOctetString(sequence[1]);
    return new AttributeCertificateIdentifier(
        hashAlgorithm,
        hashOverSignatureValue,

    );
}; }
    return _cached_decoder_for_AttributeCertificateIdentifier(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AttributeCertificateIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeCertificateIdentifier */
let _cached_encoder_for_AttributeCertificateIdentifier: $.ASN1Encoder<AttributeCertificateIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeCertificateIdentifier */

/* START_OF_SYMBOL_DEFINITION _encode_AttributeCertificateIdentifier */
/**
 * @summary Encodes a(n) AttributeCertificateIdentifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeCertificateIdentifier, encoded as an ASN.1 Element.
 */
export
function _encode_AttributeCertificateIdentifier (value: AttributeCertificateIdentifier, elGetter: $.ASN1Encoder<AttributeCertificateIdentifier>) {
    if (!_cached_encoder_for_AttributeCertificateIdentifier) { _cached_encoder_for_AttributeCertificateIdentifier = function (value: AttributeCertificateIdentifier): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_AlgorithmIdentifier(value.hashAlgorithm, $.BER),
            /* REQUIRED   */ $._encodeOctetString(value.hashOverSignatureValue, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AttributeCertificateIdentifier(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AttributeCertificateIdentifier */

/* eslint-enable */
