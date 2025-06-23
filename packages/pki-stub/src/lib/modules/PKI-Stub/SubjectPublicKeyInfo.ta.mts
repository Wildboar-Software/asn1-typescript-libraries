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
} from "jsr:@wildboar/asn1@11";
import * as $ from "jsr:@wildboar/asn1@11/functional";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "../PKI-Stub/AlgorithmIdentifier.ta.mjs";
import {
    PublicKey,
    _decode_PublicKey,
    _encode_PublicKey,
} from "../PKI-Stub/PublicKey.ta.mjs";

/**
 * @summary SubjectPublicKeyInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubjectPublicKeyInfo ::= SEQUENCE {
 *   algorithm         AlgorithmIdentifier{{SupportedAlgorithms}},
 *   subjectPublicKey  PublicKey,
 *   ... }
 * ```
 *
 * @class
 */
export class SubjectPublicKeyInfo {
    constructor(
        /**
         * @summary `algorithm`.
         * @public
         * @readonly
         */
        readonly algorithm: AlgorithmIdentifier,
        /**
         * @summary `subjectPublicKey`.
         * @public
         * @readonly
         */
        readonly subjectPublicKey: PublicKey,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a SubjectPublicKeyInfo
     * @description
     *
     * This takes an `object` and converts it to a `SubjectPublicKeyInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SubjectPublicKeyInfo`.
     * @returns {SubjectPublicKeyInfo}
     */
    public static _from_object(
        _o: { [_K in keyof SubjectPublicKeyInfo]: SubjectPublicKeyInfo[_K] }
    ): SubjectPublicKeyInfo {
        return new SubjectPublicKeyInfo(
            _o.algorithm,
            _o.subjectPublicKey,
            _o._unrecognizedExtensionsList
        );
    }
}

/**
 * @summary The Leading Root Component Types of SubjectPublicKeyInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SubjectPublicKeyInfo: $.ComponentSpec[] =
    [
        new $.ComponentSpec(
            "algorithm",
            false,
            $.hasTag(_TagClass.universal, 16)
        ),
        new $.ComponentSpec(
            "subjectPublicKey",
            false,
            $.hasTag(_TagClass.universal, 3)
        ),
    ];

/**
 * @summary The Trailing Root Component Types of SubjectPublicKeyInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SubjectPublicKeyInfo: $.ComponentSpec[] =
    [];

/**
 * @summary The Extension Addition Component Types of SubjectPublicKeyInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SubjectPublicKeyInfo: $.ComponentSpec[] =
    [];

/**
 * @summary Decodes an ASN.1 element into a(n) SubjectPublicKeyInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SubjectPublicKeyInfo} The decoded data structure.
 */
export function _decode_SubjectPublicKeyInfo(el: _Element): SubjectPublicKeyInfo {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError(
            "SubjectPublicKeyInfo contained only " +
                sequence.length.toString() +
                " elements."
        );
    }
    sequence[0].name = "algorithm";
    sequence[1].name = "subjectPublicKey";
    let algorithm!: AlgorithmIdentifier;
    let subjectPublicKey!: PublicKey;
    algorithm = _decode_AlgorithmIdentifier(sequence[0]);
    subjectPublicKey = _decode_PublicKey(sequence[1]);
    return new SubjectPublicKeyInfo(
        algorithm,
        subjectPublicKey,
        sequence.slice(2)
    );
}

/**
 * @summary Encodes a(n) SubjectPublicKeyInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubjectPublicKeyInfo, encoded as an ASN.1 Element.
 */
export function _encode_SubjectPublicKeyInfo(value: SubjectPublicKeyInfo,
    _elGetter: $.ASN1Encoder<SubjectPublicKeyInfo>): _Element) {
    const components: _Element[] = [
        /* REQUIRED   */ _encode_AlgorithmIdentifier(
            value.algorithm,
            $.BER
        ),
        /* REQUIRED   */ _encode_PublicKey(
            value.subjectPublicKey,
            $.BER
        ),
        ...value._unrecognizedExtensionsList ?? [],
    ];
    return $._encodeSequence(components, $.BER);
}


/* eslint-enable */
