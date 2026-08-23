/* eslint-disable */
import {
    BIT_STRING,
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
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
    type AlgorithmIdentifierJSON,
} from "../PKI-Stub/AlgorithmIdentifier.ta.mjs";
import {
    bitStringToJSON,
    type BitStringJSON,
} from "../../../json.mjs";

/**
 * JSON Encoding Rules encoding of {@link HASH}.
 */
export type HASHJSON = {
    algorithmIdentifier: AlgorithmIdentifierJSON;
    hashValue: BitStringJSON;
};

/**
 * @summary HASH
 * @description
 *
 * A hash of a `ToBeHashed` value: algorithm identifier plus `hashValue` bits.
 *
 * `hashValue` shall be the result of hashing the DER encoding of the
 * `ToBeHashed` value. X.509 no longer uses this type itself; it is retained for
 * import by other specifications. Prefer {@link FingerPrint} for new AVL-style
 * fingerprints.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HASH{ToBeHashed} ::= SEQUENCE {
 *   algorithmIdentifier  AlgorithmIdentifier{{SupportedAlgorithms}},
 *   hashValue            BIT STRING,
 *   ... }
 * ```
 *
 */
export class HASH<_ToBeHashed> {
    constructor(
        /**
         * @summary `algorithmIdentifier`.
         * @public
         * @readonly
         */
        readonly algorithmIdentifier: AlgorithmIdentifier,
        /**
         * @summary `hashValue`.
         * @public
         * @readonly
         */
        readonly hashValue: BIT_STRING,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a HASH
     * @description
     *
     * This takes an `object` and converts it to a `HASH`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `HASH`.
     * @returns {HASH}
     */
    public static _from_object(
        _o: { [_K in keyof HASH<any>]: HASH<any>[_K] }
    ): HASH<any> {
        return new HASH(
            _o.algorithmIdentifier,
            _o.hashValue,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Convert this `HASH` to a JSON encoding loosely following ITU-T X.697 (JER)
     * @description
     *
     * `hashValue` is encoded as a `{ value, length }` object (X.697 clause 24.3).
     * Unrecognized extensions are not represented.
     *
     * @returns The JSON Encoding Rules encoding of this value
     * @function
     * @public
     */
    public toJSON(): HASHJSON {
        return {
            algorithmIdentifier: this.algorithmIdentifier.toJSON(),
            hashValue: bitStringToJSON(this.hashValue),
        };
    }
}

/**
 * @summary The Leading Root Component Types of HASH
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_HASH: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "algorithmIdentifier",
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec(
        "hashValue",
        false,
        $.hasTag(_TagClass.universal, 3)
    ),
];

/**
 * @summary The Trailing Root Component Types of HASH
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_HASH: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of HASH
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_HASH: $.ComponentSpec[] = [];

/**
 * @summary Returns a function that will decode an ASN.1 element into a(n) HASH
 * @function
 * @param {_Element} el The element being decoded.
 * @returns A function that will decode an ASN.1 element.
 */
export function _get_decoder_for_HASH<ToBeHashed>(
    _decode_ToBeHashed: $.ASN1Decoder<ToBeHashed>
): $.ASN1Decoder<HASH<ToBeHashed>> {
    return function <ToBeHashed>(el: _Element): HASH<ToBeHashed> {
        const sequence: _Element[] = el.sequence;
        if (sequence.length < 2) {
            throw new _ConstructionError(
                "HASH contained only " +
                    sequence.length.toString() +
                    " elements."
            );
        }
        sequence[0].name = "algorithmIdentifier";
        sequence[1].name = "hashValue";
        let algorithmIdentifier!: AlgorithmIdentifier;
        let hashValue!: BIT_STRING;
        algorithmIdentifier = _decode_AlgorithmIdentifier(sequence[0]);
        hashValue = $._decodeBitString(sequence[1]);
        return new HASH<ToBeHashed>(
            algorithmIdentifier,
            hashValue,
            sequence.slice(2)
        );
    };
}

/**
 * @summary Returns a function that will encode a(n) HASH into an ASN.1 Element.
 * @function
 * @returns A function that will encode a(n) HASH as an ASN.1 element.
 */
export function _get_encoder_for_HASH<ToBeHashed>(
    _encode_ToBeHashed: $.ASN1Encoder<ToBeHashed>
): $.ASN1Encoder<HASH<ToBeHashed>> {
    return function (
        value: HASH<ToBeHashed>,
        _elGetter: $.ASN1Encoder<HASH<ToBeHashed>>
    ): _Element {
        const components: _Element[] = [
            /* REQUIRED   */ _encode_AlgorithmIdentifier(
                value.algorithmIdentifier,
                $.BER
            ),
            /* REQUIRED   */ $._encodeBitString(
                value.hashValue,
                $.BER
            ),
            ...value._unrecognizedExtensionsList ?? [],
        ];
        return $._encodeSequence(components, $.DER);
    };
}

/* eslint-enable */
