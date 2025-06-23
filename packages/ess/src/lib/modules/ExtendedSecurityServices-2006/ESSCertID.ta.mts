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
import {
    IssuerSerial,
    _decode_IssuerSerial,
    _encode_IssuerSerial,
} from "../ExtendedSecurityServices-2006/IssuerSerial.ta.mjs";

/**
 * @summary ESSCertID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ESSCertID ::= SEQUENCE {
 *     certHash                 Hash,
 *     issuerSerial             IssuerSerial OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class ESSCertID {
    constructor(
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
     * @summary Restructures an object into a ESSCertID
     * @description
     *
     * This takes an `object` and converts it to a `ESSCertID`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ESSCertID`.
     * @returns {ESSCertID}
     */
    public static _from_object(
        _o: { [_K in keyof ESSCertID]: ESSCertID[_K] }
    ): ESSCertID {
        return new ESSCertID(_o.certHash, _o.issuerSerial);
    }
}


/**
 * @summary The Leading Root Component Types of ESSCertID
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ESSCertID: $.ComponentSpec[] = [
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
 * @summary The Trailing Root Component Types of ESSCertID
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ESSCertID: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of ESSCertID
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ESSCertID: $.ComponentSpec[] = [];


let _cached_decoder_for_ESSCertID: $.ASN1Decoder<ESSCertID> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ESSCertID
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ESSCertID} The decoded data structure.
 */
export function _decode_ESSCertID(el: _Element) {
    if (!_cached_decoder_for_ESSCertID) {
        _cached_decoder_for_ESSCertID = function (el: _Element): ESSCertID {
            let certHash!: Hash;
            let issuerSerial: OPTIONAL<IssuerSerial>;
            const callbacks: $.DecodingMap = {
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
                _root_component_type_list_1_spec_for_ESSCertID,
                _extension_additions_list_spec_for_ESSCertID,
                _root_component_type_list_2_spec_for_ESSCertID,
                undefined
            );
            return new ESSCertID(
                certHash,
                issuerSerial
            );
        };
    }
    return _cached_decoder_for_ESSCertID(el);
}


let _cached_encoder_for_ESSCertID: $.ASN1Encoder<ESSCertID> | null = null;


/**
 * @summary Encodes a(n) ESSCertID into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ESSCertID, encoded as an ASN.1 Element.
 */
export function _encode_ESSCertID(
    value: ESSCertID,
    elGetter: $.ASN1Encoder<ESSCertID>
) {
    if (!_cached_encoder_for_ESSCertID) {
        _cached_encoder_for_ESSCertID = function (
            value: ESSCertID        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
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
    return _cached_encoder_for_ESSCertID(value, elGetter);
}


/* eslint-enable */
