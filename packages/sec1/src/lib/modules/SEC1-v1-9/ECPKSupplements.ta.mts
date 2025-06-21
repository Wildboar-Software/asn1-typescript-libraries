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
import { ECDomainParameters, _decode_ECDomainParameters, _encode_ECDomainParameters } from "../SEC1-v1-9/ECDomainParameters.ta.mjs";
import { ECCAlgorithms, _decode_ECCAlgorithms, _encode_ECCAlgorithms } from "../SEC1-v1-9/ECCAlgorithms.ta.mjs";
import { ECCSupplements, _decode_ECCSupplements, _encode_ECCSupplements } from "../SEC1-v1-9/ECCSupplements.ta.mjs";
/**
 * @summary ECPKSupplements
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ECPKSupplements ::= SEQUENCE {
 *     ecDomain ECDomainParameters {{ SECGCurveNames }},
 *     eccAlgorithms ECCAlgorithms,
 *     eccSupplements ECCSupplements }
 * ```
 *
 * @class
 */
export
class ECPKSupplements {
    constructor (
        /**
         * @summary `ecDomain`.
         * @public
         * @readonly
         */
        readonly ecDomain: ECDomainParameters,
        /**
         * @summary `eccAlgorithms`.
         * @public
         * @readonly
         */
        readonly eccAlgorithms: ECCAlgorithms,
        /**
         * @summary `eccSupplements`.
         * @public
         * @readonly
         */
        readonly eccSupplements: ECCSupplements
    ) {}

    /**
     * @summary Restructures an object into a ECPKSupplements
     * @description
     *
     * This takes an `object` and converts it to a `ECPKSupplements`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ECPKSupplements`.
     * @returns {ECPKSupplements}
     */
    public static _from_object (_o: { [_K in keyof (ECPKSupplements)]: (ECPKSupplements)[_K] }): ECPKSupplements {
        return new ECPKSupplements(_o.ecDomain, _o.eccAlgorithms, _o.eccSupplements);
    }


}

/**
 * @summary The Leading Root Component Types of ECPKSupplements
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ECPKSupplements: $.ComponentSpec[] = [
    new $.ComponentSpec("ecDomain", false, $.hasAnyTag),
    new $.ComponentSpec("eccAlgorithms", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("eccSupplements", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of ECPKSupplements
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ECPKSupplements: $.ComponentSpec[] = [

];

/**
 * @summary The Extension Addition Component Types of ECPKSupplements
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _extension_additions_list_spec_for_ECPKSupplements: $.ComponentSpec[] = [

];

let _cached_decoder_for_ECPKSupplements: $.ASN1Decoder<ECPKSupplements> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ECPKSupplements
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ECPKSupplements} The decoded data structure.
 */
export
function _decode_ECPKSupplements (el: _Element) {
    if (!_cached_decoder_for_ECPKSupplements) { _cached_decoder_for_ECPKSupplements = function (el: _Element): ECPKSupplements {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("ECPKSupplements contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "ecDomain";
    sequence[1].name = "eccAlgorithms";
    sequence[2].name = "eccSupplements";
    let ecDomain!: ECDomainParameters;
    let eccAlgorithms!: ECCAlgorithms;
    let eccSupplements!: ECCSupplements;
    ecDomain = _decode_ECDomainParameters(sequence[0]);
    eccAlgorithms = _decode_ECCAlgorithms(sequence[1]);
    eccSupplements = _decode_ECCSupplements(sequence[2]);
    return new ECPKSupplements(
        ecDomain,
        eccAlgorithms,
        eccSupplements,

    );
}; }
    return _cached_decoder_for_ECPKSupplements(el);
}

let _cached_encoder_for_ECPKSupplements: $.ASN1Encoder<ECPKSupplements> | null = null;

/**
 * @summary Encodes a(n) ECPKSupplements into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ECPKSupplements, encoded as an ASN.1 Element.
 */
export
function _encode_ECPKSupplements (value: ECPKSupplements, elGetter: $.ASN1Encoder<ECPKSupplements>) {
    if (!_cached_encoder_for_ECPKSupplements) { _cached_encoder_for_ECPKSupplements = function (value: ECPKSupplements): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ECDomainParameters(value.ecDomain, $.DER),
            /* REQUIRED   */ _encode_ECCAlgorithms(value.eccAlgorithms, $.DER),
            /* REQUIRED   */ _encode_ECCSupplements(value.eccSupplements, $.DER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.DER);
}; }
    return _cached_encoder_for_ECPKSupplements(value, elGetter);
}


/* eslint-enable */
