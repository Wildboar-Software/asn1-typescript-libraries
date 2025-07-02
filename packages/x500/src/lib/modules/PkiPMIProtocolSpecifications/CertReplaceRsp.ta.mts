/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    CASPsequence,
    _decode_CASPsequence,
    _encode_CASPsequence,
} from "../PkiPMIProtocolSpecifications/CASPsequence.ta.mjs";
import {
    CASPversion,
    CASPversion_v1 /* IMPORTED_LONG_ENUMERATION_ITEM */,
    _decode_CASPversion,
    _encode_CASPversion,
    _enum_for_CASPversion,
} from "../PkiPMIProtocolSpecifications/CASPversion.ta.mjs";
import {
    CertReplaceRsp_result,
    _decode_CertReplaceRsp_result,
    _encode_CertReplaceRsp_result,
} from "../PkiPMIProtocolSpecifications/CertReplaceRsp-result.ta.mjs";
import {
    CASPcommonComponents,
    _root_component_type_list_1_spec_for_CASPcommonComponents,
} from "../PkiPMIProtocolSpecifications/CASPcommonComponents.ta.mjs";

/**
 * @summary CertReplaceRsp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertReplaceRsp ::= SEQUENCE {
 *   COMPONENTS OF CASPcommonComponents,
 *   result        CHOICE {
 *     success       [0]  CertReplaceOK,
 *     failure       [1]  CertReplaceErr,
 *     ... },
 *   ... }
 * ```
 *
 */
export class CertReplaceRsp implements CASPcommonComponents {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: OPTIONAL<CASPversion> /* REPLICATED_COMPONENT */,
        /**
         * @summary `sequence`.
         * @public
         * @readonly
         */
        readonly sequence: CASPsequence /* REPLICATED_COMPONENT */,
        /**
         * @summary `result`.
         * @public
         * @readonly
         */
        readonly result: CertReplaceRsp_result,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertReplaceRsp
     * @description
     *
     * This takes an `object` and converts it to a `CertReplaceRsp`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertReplaceRsp`.
     * @returns {CertReplaceRsp}
     */
    public static _from_object(
        _o: { [_K in keyof CertReplaceRsp]: CertReplaceRsp[_K] }
    ): CertReplaceRsp {
        return new CertReplaceRsp(
            _o.version,
            _o.sequence,
            _o.result,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `version`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_version(): CASPversion {
        return CASPversion_v1;
    }
    /**
     * @summary The enum used as the type of the component `version`
     * @public
     * @static
     */

    public static _enum_for_version = _enum_for_CASPversion;
}

/**
 * @summary The Leading Root Component Types of CertReplaceRsp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertReplaceRsp: $.ComponentSpec[] = [
    ..._root_component_type_list_1_spec_for_CASPcommonComponents,
    new $.ComponentSpec("result", false, $.hasAnyTag),
];

/**
 * @summary The Trailing Root Component Types of CertReplaceRsp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertReplaceRsp: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of CertReplaceRsp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertReplaceRsp: $.ComponentSpec[] = [];

let _cached_decoder_for_CertReplaceRsp: $.ASN1Decoder<CertReplaceRsp> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CertReplaceRsp
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertReplaceRsp} The decoded data structure.
 */
export function _decode_CertReplaceRsp(el: _Element): CertReplaceRsp {
    if (!_cached_decoder_for_CertReplaceRsp) {
        _cached_decoder_for_CertReplaceRsp = function (
            el: _Element
        ): CertReplaceRsp {
            let version: OPTIONAL<CASPversion> =
                CertReplaceRsp._default_value_for_version;
            let sequence!: CASPsequence;
            let result!: CertReplaceRsp_result;
            let _unrecognizedExtensionsList: _Element[] = [];
            const callbacks: $.DecodingMap = {
                version: (_el: _Element): void => {
                    version = _decode_CASPversion(_el);
                },
                sequence: (_el: _Element): void => {
                    sequence = _decode_CASPsequence(_el);
                },
                result: (_el: _Element): void => {
                    result = _decode_CertReplaceRsp_result(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CertReplaceRsp,
                _extension_additions_list_spec_for_CertReplaceRsp,
                _root_component_type_list_2_spec_for_CertReplaceRsp,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new CertReplaceRsp(
                version,
                sequence,
                result,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_CertReplaceRsp(el);
}

let _cached_encoder_for_CertReplaceRsp: $.ASN1Encoder<CertReplaceRsp> | null = null;

/**
 * @summary Encodes a(n) CertReplaceRsp into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertReplaceRsp, encoded as an ASN.1 Element.
 */
export function _encode_CertReplaceRsp(
    value: CertReplaceRsp,
    elGetter: $.ASN1Encoder<CertReplaceRsp>
): _Element {
    if (!_cached_encoder_for_CertReplaceRsp) {
        _cached_encoder_for_CertReplaceRsp = function (
            value: CertReplaceRsp        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.version === undefined ||
                            $.deepEq(
                                value.version,
                                CertReplaceRsp._default_value_for_version
                            )
                                ? undefined
                                : _encode_CASPversion(value.version, $.DER),
                            /* REQUIRED   */ _encode_CASPsequence(
                                value.sequence,
                                $.DER
                            ),
                            /* REQUIRED   */ _encode_CertReplaceRsp_result(
                                value.result,
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
    return _cached_encoder_for_CertReplaceRsp(value, elGetter);
}


/* eslint-enable */
