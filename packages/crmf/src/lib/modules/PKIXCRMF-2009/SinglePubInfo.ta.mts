/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    type GeneralName,
    _decode_GeneralName,
    _encode_GeneralName,
} from "@wildboar/x500/CertificateExtensions";
import {
    type SinglePubInfo_pubMethod,
    _decode_SinglePubInfo_pubMethod,
    _encode_SinglePubInfo_pubMethod,
} from "../PKIXCRMF-2009/SinglePubInfo-pubMethod.ta.mjs";


/**
 * @summary SinglePubInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SinglePubInfo ::= SEQUENCE {
 *     pubMethod    INTEGER {
 *         dontCare    (0),
 *         x500        (1),
 *         web         (2),
 *         ldap        (3) },
 *     pubLocation  GeneralName OPTIONAL }
 * ```
 *
 */
export class SinglePubInfo {
    constructor(
        /**
         * @summary `pubMethod`.
         * @public
         * @readonly
         */
        readonly pubMethod: SinglePubInfo_pubMethod,
        /**
         * @summary `pubLocation`.
         * @public
         * @readonly
         */
        readonly pubLocation: OPTIONAL<GeneralName>
    ) {}

    /**
     * @summary Restructures an object into a SinglePubInfo
     * @description
     *
     * This takes an `object` and converts it to a `SinglePubInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SinglePubInfo`.
     * @returns {SinglePubInfo}
     */
    public static _from_object(
        _o: { [_K in keyof SinglePubInfo]: SinglePubInfo[_K] }
    ): SinglePubInfo {
        return new SinglePubInfo(_o.pubMethod, _o.pubLocation);
    }
}


/**
 * @summary The Leading Root Component Types of SinglePubInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SinglePubInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "pubMethod",
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec("pubLocation", true, $.hasAnyTag),
];


/**
 * @summary The Trailing Root Component Types of SinglePubInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SinglePubInfo: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of SinglePubInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SinglePubInfo: $.ComponentSpec[] = [];


let _cached_decoder_for_SinglePubInfo: $.ASN1Decoder<SinglePubInfo> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) SinglePubInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SinglePubInfo} The decoded data structure.
 */
export function _decode_SinglePubInfo(el: _Element): SinglePubInfo {
    if (!_cached_decoder_for_SinglePubInfo) {
        _cached_decoder_for_SinglePubInfo = function (
            el: _Element
        ): SinglePubInfo {
            let pubMethod!: SinglePubInfo_pubMethod;
            let pubLocation: OPTIONAL<GeneralName>;
            const callbacks: $.DecodingMap = {
                pubMethod: (_el: _Element): void => {
                    pubMethod = _decode_SinglePubInfo_pubMethod(_el);
                },
                pubLocation: (_el: _Element): void => {
                    pubLocation = _decode_GeneralName(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SinglePubInfo,
                _extension_additions_list_spec_for_SinglePubInfo,
                _root_component_type_list_2_spec_for_SinglePubInfo,
                undefined
            );
            return new SinglePubInfo (
                pubMethod,
                pubLocation
            );
        };
    }
    return _cached_decoder_for_SinglePubInfo(el);
}


let _cached_encoder_for_SinglePubInfo: $.ASN1Encoder<SinglePubInfo> | null = null;


/**
 * @summary Encodes a(n) SinglePubInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SinglePubInfo, encoded as an ASN.1 Element.
 */
export function _encode_SinglePubInfo(
    value: SinglePubInfo,
    elGetter: $.ASN1Encoder<SinglePubInfo>
): _Element {
    if (!_cached_encoder_for_SinglePubInfo) {
        _cached_encoder_for_SinglePubInfo = function (
            value: SinglePubInfo        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_SinglePubInfo_pubMethod(
                            value.pubMethod,
                            $.DER
                        ),
                        /* IF_ABSENT  */ value.pubLocation === undefined
                            ? undefined
                            : _encode_GeneralName(value.pubLocation, $.DER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_SinglePubInfo(value, elGetter);
}


/* eslint-enable */
