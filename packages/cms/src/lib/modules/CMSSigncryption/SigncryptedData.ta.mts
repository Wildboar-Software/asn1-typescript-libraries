/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    Certificates,
    _decode_Certificates,
    _encode_Certificates,
} from "../CMSSigncryption/Certificates.ta.mjs";
import {
    CMSVersion,
    _decode_CMSVersion,
    _encode_CMSVersion,
} from "../CMSSigncryption/CMSVersion.ta.mjs";
import {
    ContentInformation,
    _decode_ContentInformation,
    _encode_ContentInformation,
} from "../CMSSigncryption/ContentInformation.ta.mjs";
import { CRLs, _decode_CRLs, _encode_CRLs } from "../CMSSigncryption/CRLs.ta.mjs";
import {
    Signcrypters,
    _decode_Signcrypters,
    _encode_Signcrypters,
} from "../CMSSigncryption/Signcrypters.ta.mjs";

/**
 * @summary SigncryptedData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SigncryptedData ::= SEQUENCE {
 * version        CMSVersion,
 * contentInformation    ContentInformation,
 * certificates    Certificates OPTIONAL,
 * crls            CRLs OPTIONAL,
 * signcrypters    Signcrypters
 * }
 * ```
 *
 * @class
 */
export class SigncryptedData {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: CMSVersion,
        /**
         * @summary `contentInformation`.
         * @public
         * @readonly
         */
        readonly contentInformation: ContentInformation,
        /**
         * @summary `certificates`.
         * @public
         * @readonly
         */
        readonly certificates: OPTIONAL<Certificates>,
        /**
         * @summary `crls`.
         * @public
         * @readonly
         */
        readonly crls: OPTIONAL<CRLs>,
        /**
         * @summary `signcrypters`.
         * @public
         * @readonly
         */
        readonly signcrypters: Signcrypters
    ) {}

    /**
     * @summary Restructures an object into a SigncryptedData
     * @description
     *
     * This takes an `object` and converts it to a `SigncryptedData`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SigncryptedData`.
     * @returns {SigncryptedData}
     */
    public static _from_object(
        _o: { [_K in keyof SigncryptedData]: SigncryptedData[_K] }
    ): SigncryptedData {
        return new SigncryptedData(
            _o.version,
            _o.contentInformation,
            _o.certificates,
            _o.crls,
            _o.signcrypters
        );
    }
}


/**
 * @summary The Leading Root Component Types of SigncryptedData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SigncryptedData: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "version",
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "contentInformation",
        false,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        "certificates",
        true,
        $.hasTag(_TagClass.context, 2)
    ),
    new $.ComponentSpec(
        "crls",
        true,
        $.hasTag(_TagClass.context, 3)
    ),
    new $.ComponentSpec(
        "signcrypters",
        false,
        $.hasTag(_TagClass.context, 4)
    ),
];


/**
 * @summary The Trailing Root Component Types of SigncryptedData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SigncryptedData: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of SigncryptedData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SigncryptedData: $.ComponentSpec[] = [];


let _cached_decoder_for_SigncryptedData: $.ASN1Decoder<SigncryptedData> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) SigncryptedData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SigncryptedData} The decoded data structure.
 */
export function _decode_SigncryptedData(el: _Element) {
    if (!_cached_decoder_for_SigncryptedData) {
        _cached_decoder_for_SigncryptedData = function (
            el: _Element
        ): SigncryptedData {
            let version!: CMSVersion;
            let contentInformation!: ContentInformation;
            let certificates: OPTIONAL<Certificates>;
            let crls: OPTIONAL<CRLs>;
            let signcrypters!: Signcrypters;
            const callbacks: $.DecodingMap = {
                version: (_el: _Element): void => {
                    version = _decode_CMSVersion(_el);
                },
                contentInformation: (_el: _Element): void => {
                    contentInformation = _decode_ContentInformation(_el);
                },
                certificates: (_el: _Element): void => {
                    certificates = _decode_Certificates(_el);
                },
                crls: (_el: _Element): void => {
                    crls = _decode_CRLs(_el);
                },
                signcrypters: (_el: _Element): void => {
                    signcrypters = _decode_Signcrypters(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SigncryptedData,
                _extension_additions_list_spec_for_SigncryptedData,
                _root_component_type_list_2_spec_for_SigncryptedData,
                undefined
            );
            return new SigncryptedData (
                version,
                contentInformation,
                certificates,
                crls,
                signcrypters
            );
        };
    }
    return _cached_decoder_for_SigncryptedData(el);
}


let _cached_encoder_for_SigncryptedData: $.ASN1Encoder<SigncryptedData> | null = null;


/**
 * @summary Encodes a(n) SigncryptedData into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SigncryptedData, encoded as an ASN.1 Element.
 */
export function _encode_SigncryptedData(
    value: SigncryptedData,
    elGetter: $.ASN1Encoder<SigncryptedData>
) {
    if (!_cached_encoder_for_SigncryptedData) {
        _cached_encoder_for_SigncryptedData = function (
            value: SigncryptedData        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_CMSVersion(
                            value.version,
                            $.DER
                        ),
                        /* REQUIRED   */ _encode_ContentInformation(
                            value.contentInformation,
                            $.DER
                        ),
                        /* IF_ABSENT  */ value.certificates === undefined
                            ? undefined
                            : _encode_Certificates(value.certificates, $.DER),
                        /* IF_ABSENT  */ value.crls === undefined
                            ? undefined
                            : _encode_CRLs(value.crls, $.DER),
                        /* REQUIRED   */ _encode_Signcrypters(
                            value.signcrypters,
                            $.DER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_SigncryptedData(value, elGetter);
}


/* eslint-enable */
