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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ECPoint, _decode_ECPoint, _encode_ECPoint } from "../SEC1-v1-9/ECPoint.ta.mjs";
/**
 * @summary ECIES_Ciphertext_Value
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ECIES-Ciphertext-Value ::= SEQUENCE {
 *     ephemeralPublicKey ECPoint,
 *     symmetricCiphertext OCTET STRING,
 *     macTag OCTET STRING
 * }
 * ```
 *
 * @class
 */
export
class ECIES_Ciphertext_Value {
    constructor (
        /**
         * @summary `ephemeralPublicKey`.
         * @public
         * @readonly
         */
        readonly ephemeralPublicKey: ECPoint,
        /**
         * @summary `symmetricCiphertext`.
         * @public
         * @readonly
         */
        readonly symmetricCiphertext: OCTET_STRING,
        /**
         * @summary `macTag`.
         * @public
         * @readonly
         */
        readonly macTag: OCTET_STRING
    ) {}

    /**
     * @summary Restructures an object into a ECIES_Ciphertext_Value
     * @description
     *
     * This takes an `object` and converts it to a `ECIES_Ciphertext_Value`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ECIES_Ciphertext_Value`.
     * @returns {ECIES_Ciphertext_Value}
     */
    public static _from_object (_o: { [_K in keyof (ECIES_Ciphertext_Value)]: (ECIES_Ciphertext_Value)[_K] }): ECIES_Ciphertext_Value {
        return new ECIES_Ciphertext_Value(_o.ephemeralPublicKey, _o.symmetricCiphertext, _o.macTag);
    }


}

/**
 * @summary The Leading Root Component Types of ECIES_Ciphertext_Value
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ECIES_Ciphertext_Value: $.ComponentSpec[] = [
    new $.ComponentSpec("ephemeralPublicKey", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("symmetricCiphertext", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("macTag", false, $.hasTag(_TagClass.universal, 4))
];

/**
 * @summary The Trailing Root Component Types of ECIES_Ciphertext_Value
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ECIES_Ciphertext_Value: $.ComponentSpec[] = [

];

/**
 * @summary The Extension Addition Component Types of ECIES_Ciphertext_Value
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _extension_additions_list_spec_for_ECIES_Ciphertext_Value: $.ComponentSpec[] = [

];

let _cached_decoder_for_ECIES_Ciphertext_Value: $.ASN1Decoder<ECIES_Ciphertext_Value> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ECIES_Ciphertext_Value
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ECIES_Ciphertext_Value} The decoded data structure.
 */
export
function _decode_ECIES_Ciphertext_Value (el: _Element): ECIES_Ciphertext_Value {
    if (!_cached_decoder_for_ECIES_Ciphertext_Value) { _cached_decoder_for_ECIES_Ciphertext_Value = function (el: _Element): ECIES_Ciphertext_Value {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("ECIES-Ciphertext-Value contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "ephemeralPublicKey";
    sequence[1].name = "symmetricCiphertext";
    sequence[2].name = "macTag";
    let ephemeralPublicKey!: ECPoint;
    let symmetricCiphertext!: OCTET_STRING;
    let macTag!: OCTET_STRING;
    ephemeralPublicKey = _decode_ECPoint(sequence[0]);
    symmetricCiphertext = $._decodeOctetString(sequence[1]);
    macTag = $._decodeOctetString(sequence[2]);
    return new ECIES_Ciphertext_Value(
        ephemeralPublicKey,
        symmetricCiphertext,
        macTag,

    );
}; }
    return _cached_decoder_for_ECIES_Ciphertext_Value(el);
}

let _cached_encoder_for_ECIES_Ciphertext_Value: $.ASN1Encoder<ECIES_Ciphertext_Value> | null = null;

/**
 * @summary Encodes a(n) ECIES_Ciphertext_Value into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ECIES_Ciphertext_Value, encoded as an ASN.1 Element.
 */
export
function _encode_ECIES_Ciphertext_Value (value: ECIES_Ciphertext_Value, elGetter: $.ASN1Encoder<ECIES_Ciphertext_Value>): _Element {
    if (!_cached_encoder_for_ECIES_Ciphertext_Value) { _cached_encoder_for_ECIES_Ciphertext_Value = function (value: ECIES_Ciphertext_Value): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ECPoint(value.ephemeralPublicKey, $.DER),
            /* REQUIRED   */ $._encodeOctetString(value.symmetricCiphertext, $.DER),
            /* REQUIRED   */ $._encodeOctetString(value.macTag, $.DER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.DER);
}; }
    return _cached_encoder_for_ECIES_Ciphertext_Value(value, elGetter);
}


/* eslint-enable */
