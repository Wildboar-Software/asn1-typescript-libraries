/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "@wildboar/pki-stub/src/lib/modules/PKI-Stub/AlgorithmIdentifier.ta.mjs";
import {
    CertificateSerialNumber,
    _decode_CertificateSerialNumber,
    _encode_CertificateSerialNumber,
} from "@wildboar/pki-stub/src/lib/modules/PKI-Stub/CertificateSerialNumber.ta.mjs";


/**
 * @summary CertID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertID ::= SEQUENCE {
 * hashAlgorithm            AlgorithmIdentifier
 *                                 {DIGEST-ALGORITHM, {...}},
 * issuerNameHash     OCTET STRING, -- Hash of issuer's DN
 * issuerKeyHash      OCTET STRING, -- Hash of issuer's public key
 * serialNumber       CertificateSerialNumber }
 * ```
 *
 * @class
 */
export class CertID {
    constructor(
        /**
         * @summary `hashAlgorithm`.
         * @public
         * @readonly
         */
        readonly hashAlgorithm: AlgorithmIdentifier,
        /**
         * @summary `issuerNameHash`.
         * @public
         * @readonly
         */
        readonly issuerNameHash: OCTET_STRING,
        /**
         * @summary `issuerKeyHash`.
         * @public
         * @readonly
         */
        readonly issuerKeyHash: OCTET_STRING,
        /**
         * @summary `serialNumber`.
         * @public
         * @readonly
         */
        readonly serialNumber: CertificateSerialNumber
    ) {}

    /**
     * @summary Restructures an object into a CertID
     * @description
     *
     * This takes an `object` and converts it to a `CertID`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertID`.
     * @returns {CertID}
     */
    public static _from_object(
        _o: { [_K in keyof CertID]: CertID[_K] }
    ): CertID {
        return new CertID(
            _o.hashAlgorithm,
            _o.issuerNameHash,
            _o.issuerKeyHash,
            _o.serialNumber
        );
    }
}


/**
 * @summary The Leading Root Component Types of CertID
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertID: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "hashAlgorithm",
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec(
        "issuerNameHash",
        false,
        $.hasTag(_TagClass.universal, 4)
    ),
    new $.ComponentSpec(
        "issuerKeyHash",
        false,
        $.hasTag(_TagClass.universal, 4)
    ),
    new $.ComponentSpec(
        "serialNumber",
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
];


/**
 * @summary The Trailing Root Component Types of CertID
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertID: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of CertID
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertID: $.ComponentSpec[] = [];


let _cached_decoder_for_CertID: $.ASN1Decoder<CertID> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) CertID
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertID} The decoded data structure.
 */
export function _decode_CertID(el: _Element) {
    if (!_cached_decoder_for_CertID) {
        _cached_decoder_for_CertID = function (el: _Element): CertID {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 4) {
                throw new _ConstructionError(
                    "CertID contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "hashAlgorithm";
            sequence[1].name = "issuerNameHash";
            sequence[2].name = "issuerKeyHash";
            sequence[3].name = "serialNumber";
            let hashAlgorithm!: AlgorithmIdentifier;
            let issuerNameHash!: OCTET_STRING;
            let issuerKeyHash!: OCTET_STRING;
            let serialNumber!: CertificateSerialNumber;
            hashAlgorithm = _decode_AlgorithmIdentifier(sequence[0]);
            issuerNameHash = $._decodeOctetString(sequence[1]);
            issuerKeyHash = $._decodeOctetString(sequence[2]);
            serialNumber = _decode_CertificateSerialNumber(sequence[3]);
            return new CertID(
                hashAlgorithm,
                issuerNameHash,
                issuerKeyHash,
                serialNumber
            );
        };
    }
    return _cached_decoder_for_CertID(el);
}


let _cached_encoder_for_CertID: $.ASN1Encoder<CertID> | null = null;


/**
 * @summary Encodes a(n) CertID into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertID, encoded as an ASN.1 Element.
 */
export function _encode_CertID(value: CertID, elGetter: $.ASN1Encoder<CertID>) {
    if (!_cached_encoder_for_CertID) {
        _cached_encoder_for_CertID = function (
            value: CertID        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_AlgorithmIdentifier(
                            value.hashAlgorithm,
                            $.DER
                        ),
                        /* REQUIRED   */ $._encodeOctetString(
                            value.issuerNameHash,
                            $.DER
                        ),
                        /* REQUIRED   */ $._encodeOctetString(
                            value.issuerKeyHash,
                            $.DER
                        ),
                        /* REQUIRED   */ _encode_CertificateSerialNumber(
                            value.serialNumber,
                            $.DER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_CertID(value, elGetter);
}


/* eslint-enable */
