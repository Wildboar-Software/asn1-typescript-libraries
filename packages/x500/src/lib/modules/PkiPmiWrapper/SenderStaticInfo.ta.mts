/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    CertificateSerialNumber,
    _decode_CertificateSerialNumber,
    _encode_CertificateSerialNumber,
} from "../AuthenticationFramework/CertificateSerialNumber.ta.mjs";
import {
    Name,
    _decode_Name,
    _encode_Name,
} from "../InformationFramework/Name.ta.mjs";
import {
    UserKeyingMaterial,
    _decode_UserKeyingMaterial,
    _encode_UserKeyingMaterial,
} from "../PkiPmiWrapper/UserKeyingMaterial.ta.mjs";
/**
 * @summary SenderStaticInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SenderStaticInfo ::= SEQUENCE {
 *   issuer       Name,
 *   serialNumber CertificateSerialNumber,
 *   partyAinfo   UserKeyingMaterial,
 *   ... }
 * ```
 *
 * @class
 */
export class SenderStaticInfo {
    constructor(
        /**
         * @summary `issuer`.
         * @public
         * @readonly
         */
        readonly issuer: Name,
        /**
         * @summary `serialNumber`.
         * @public
         * @readonly
         */
        readonly serialNumber: CertificateSerialNumber,
        /**
         * @summary `partyAinfo`.
         * @public
         * @readonly
         */
        readonly partyAinfo: UserKeyingMaterial,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a SenderStaticInfo
     * @description
     *
     * This takes an `object` and converts it to a `SenderStaticInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SenderStaticInfo`.
     * @returns {SenderStaticInfo}
     */
    public static _from_object(
        _o: { [_K in keyof SenderStaticInfo]: SenderStaticInfo[_K] }
    ): SenderStaticInfo {
        return new SenderStaticInfo(
            _o.issuer,
            _o.serialNumber,
            _o.partyAinfo,
            _o._unrecognizedExtensionsList
        );
    }
}

/**
 * @summary The Leading Root Component Types of SenderStaticInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SenderStaticInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("issuer", false, $.hasAnyTag),
    new $.ComponentSpec(
        "serialNumber",
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec(
        "partyAinfo",
        false,
        $.hasTag(_TagClass.universal, 4)
    ),
];

/**
 * @summary The Trailing Root Component Types of SenderStaticInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SenderStaticInfo: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of SenderStaticInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SenderStaticInfo: $.ComponentSpec[] = [];

let _cached_decoder_for_SenderStaticInfo: $.ASN1Decoder<SenderStaticInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SenderStaticInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SenderStaticInfo} The decoded data structure.
 */
export function _decode_SenderStaticInfo(el: _Element) {
    if (!_cached_decoder_for_SenderStaticInfo) {
        _cached_decoder_for_SenderStaticInfo = function (
            el: _Element
        ): SenderStaticInfo {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 3) {
                throw new _ConstructionError(
                    "SenderStaticInfo contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "issuer";
            sequence[1].name = "serialNumber";
            sequence[2].name = "partyAinfo";
            let issuer!: Name;
            let serialNumber!: CertificateSerialNumber;
            let partyAinfo!: UserKeyingMaterial;
            issuer = _decode_Name(sequence[0]);
            serialNumber = _decode_CertificateSerialNumber(sequence[1]);
            partyAinfo = _decode_UserKeyingMaterial(sequence[2]);
            return new SenderStaticInfo(
                issuer,
                serialNumber,
                partyAinfo,
                sequence.slice(3)
            );
        };
    }
    return _cached_decoder_for_SenderStaticInfo(el);
}

let _cached_encoder_for_SenderStaticInfo: $.ASN1Encoder<SenderStaticInfo> | null = null;

/**
 * @summary Encodes a(n) SenderStaticInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SenderStaticInfo, encoded as an ASN.1 Element.
 */
export function _encode_SenderStaticInfo(
    value: SenderStaticInfo,
    elGetter: $.ASN1Encoder<SenderStaticInfo>
) {
    if (!_cached_encoder_for_SenderStaticInfo) {
        _cached_encoder_for_SenderStaticInfo = function (
            value: SenderStaticInfo        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_Name(value.issuer, $.DER),
                            /* REQUIRED   */ _encode_CertificateSerialNumber(
                                value.serialNumber,
                                $.DER
                            ),
                            /* REQUIRED   */ _encode_UserKeyingMaterial(
                                value.partyAinfo,
                                $.DER
                            ),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_SenderStaticInfo(value, elGetter);
}


/* eslint-enable */
