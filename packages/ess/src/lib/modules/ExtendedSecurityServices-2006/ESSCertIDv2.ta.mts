/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    Hash,
    _decode_Hash,
    _encode_Hash,
} from "../ExtendedSecurityServices-2006/Hash.ta.mjs";
import { id_sha256 } from "../ExtendedSecurityServices-2006/id-sha256.va.mjs";
import {
    IssuerSerial,
    _decode_IssuerSerial,
    _encode_IssuerSerial,
} from "../ExtendedSecurityServices-2006/IssuerSerial.ta.mjs";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "@wildboar/x500/AuthenticationFramework";


/**
 * @summary ESSCertIDv2
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ESSCertIDv2 ::= SEQUENCE {
 *     hashAlgorithm           AlgorithmIdentifier DEFAULT {algorithm id-sha256},
 *     certHash                Hash,
 *     issuerSerial            IssuerSerial OPTIONAL
 * }
 * ```
 *
 */
export class ESSCertIDv2 {
    constructor(
        /**
         * @summary `hashAlgorithm`.
         * @public
         * @readonly
         */
        readonly hashAlgorithm: OPTIONAL<AlgorithmIdentifier>,
        /**
         * @summary `certHash`.
         * @public
         * @readonly
         */
        readonly certHash: Hash,
        /**
         * @summary `issuerSerial`.
         * @public
         * @readonly
         */
        readonly issuerSerial: OPTIONAL<IssuerSerial>
    ) {}

    /**
     * @summary Restructures an object into a ESSCertIDv2
     * @description
     *
     * This takes an `object` and converts it to a `ESSCertIDv2`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ESSCertIDv2`.
     * @returns {ESSCertIDv2}
     */
    public static _from_object(
        _o: { [_K in keyof ESSCertIDv2]: ESSCertIDv2[_K] }
    ): ESSCertIDv2 {
        return new ESSCertIDv2(_o.hashAlgorithm, _o.certHash, _o.issuerSerial);
    }

    /**
     * @summary Getter that returns the default value for `hashAlgorithm`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_hashAlgorithm() {
        return AlgorithmIdentifier._from_object({
            algorithm: id_sha256,
            parameters: undefined,
            _unrecognizedExtensionsList: [],
        });
    }
}


/**
 * @summary The Leading Root Component Types of ESSCertIDv2
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ESSCertIDv2: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "hashAlgorithm",
        true,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec(
        "certHash",
        false,
        $.hasTag(_TagClass.universal, 4)
    ),
    new $.ComponentSpec(
        "issuerSerial",
        true,
        $.hasTag(_TagClass.universal, 16)
    ),
];


/**
 * @summary The Trailing Root Component Types of ESSCertIDv2
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ESSCertIDv2: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of ESSCertIDv2
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ESSCertIDv2: $.ComponentSpec[] = [];


let _cached_decoder_for_ESSCertIDv2: $.ASN1Decoder<ESSCertIDv2> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ESSCertIDv2
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ESSCertIDv2} The decoded data structure.
 */
export function _decode_ESSCertIDv2(el: _Element): ESSCertIDv2 {
    if (!_cached_decoder_for_ESSCertIDv2) {
        _cached_decoder_for_ESSCertIDv2 = function (el: _Element): ESSCertIDv2 {
            let hashAlgorithm: OPTIONAL<AlgorithmIdentifier> =
                ESSCertIDv2._default_value_for_hashAlgorithm;
            let certHash!: Hash;
            let issuerSerial: OPTIONAL<IssuerSerial>;
            const callbacks: $.DecodingMap = {
                hashAlgorithm: (_el: _Element): void => {
                    hashAlgorithm = _decode_AlgorithmIdentifier(_el);
                },
                certHash: (_el: _Element): void => {
                    certHash = _decode_Hash(_el);
                },
                issuerSerial: (_el: _Element): void => {
                    issuerSerial = _decode_IssuerSerial(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ESSCertIDv2,
                _extension_additions_list_spec_for_ESSCertIDv2,
                _root_component_type_list_2_spec_for_ESSCertIDv2,
                undefined
            );
            return new ESSCertIDv2(
                hashAlgorithm,
                certHash,
                issuerSerial
            );
        };
    }
    return _cached_decoder_for_ESSCertIDv2(el);
}


let _cached_encoder_for_ESSCertIDv2: $.ASN1Encoder<ESSCertIDv2> | null = null;


/**
 * @summary Encodes a(n) ESSCertIDv2 into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ESSCertIDv2, encoded as an ASN.1 Element.
 */
export function _encode_ESSCertIDv2(
    value: ESSCertIDv2,
    elGetter: $.ASN1Encoder<ESSCertIDv2>
): _Element {
    if (!_cached_encoder_for_ESSCertIDv2) {
        _cached_encoder_for_ESSCertIDv2 = function (
            value: ESSCertIDv2        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_DEFAULT */ value.hashAlgorithm === undefined ||
                        $.deepEq(
                            value.hashAlgorithm,
                            ESSCertIDv2._default_value_for_hashAlgorithm
                        )
                            ? undefined
                            : _encode_AlgorithmIdentifier(
                                  value.hashAlgorithm,
                                  $.DER
                              ),
                        /* REQUIRED   */ _encode_Hash(value.certHash, $.DER),
                        /* IF_ABSENT  */ value.issuerSerial === undefined
                            ? undefined
                            : _encode_IssuerSerial(value.issuerSerial, $.DER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_ESSCertIDv2(value, elGetter);
}


/* eslint-enable */
