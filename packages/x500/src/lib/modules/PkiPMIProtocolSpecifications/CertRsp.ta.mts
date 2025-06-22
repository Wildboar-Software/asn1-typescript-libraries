/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    GeneralizedTime,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";
import {
    AVMPsequence,
    _decode_AVMPsequence,
    _encode_AVMPsequence,
} from "../PkiPMIProtocolSpecifications/AVMPsequence.ta.mjs";
import {
    AVMPversion,
    AVMPversion_v1 /* IMPORTED_LONG_ENUMERATION_ITEM */,
    _decode_AVMPversion,
    _encode_AVMPversion,
    _enum_for_AVMPversion,
} from "../PkiPMIProtocolSpecifications/AVMPversion.ta.mjs";
import {
    CertRsp_result,
    _decode_CertRsp_result,
    _encode_CertRsp_result,
} from "../PkiPMIProtocolSpecifications/CertRsp-result.ta.mjs";
import {
    AVMPcommonComponents,
    _root_component_type_list_1_spec_for_AVMPcommonComponents,
} from "../PkiPMIProtocolSpecifications/AVMPcommonComponents.ta.mjs";

/**
 * @summary CertRsp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertRsp ::= SEQUENCE {
 *   COMPONENTS OF AVMPcommonComponents,
 *   result        CHOICE {
 *     success       [0]  CertOK,
 *     failure       [1]  CertErr,
 *     ... },
 *   ... }
 * ```
 *
 * @class
 */
export class CertRsp implements AVMPcommonComponents {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: OPTIONAL<AVMPversion> /* REPLICATED_COMPONENT */,
        /**
         * @summary `timeStamp`.
         * @public
         * @readonly
         */
        readonly timeStamp: GeneralizedTime /* REPLICATED_COMPONENT */,
        /**
         * @summary `sequence`.
         * @public
         * @readonly
         */
        readonly sequence: AVMPsequence /* REPLICATED_COMPONENT */,
        /**
         * @summary `result`.
         * @public
         * @readonly
         */
        readonly result: CertRsp_result,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertRsp
     * @description
     *
     * This takes an `object` and converts it to a `CertRsp`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertRsp`.
     * @returns {CertRsp}
     */
    public static _from_object(
        _o: { [_K in keyof CertRsp]: CertRsp[_K] }
    ): CertRsp {
        return new CertRsp(
            _o.version,
            _o.timeStamp,
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
    public static get _default_value_for_version() {
        return AVMPversion_v1;
    }
    /**
     * @summary The enum used as the type of the component `version`
     * @public
     * @static
     */

    public static _enum_for_version = _enum_for_AVMPversion;
}

/**
 * @summary The Leading Root Component Types of CertRsp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertRsp: $.ComponentSpec[] = [
    ..._root_component_type_list_1_spec_for_AVMPcommonComponents,
    new $.ComponentSpec("result", false, $.hasAnyTag),
];

/**
 * @summary The Trailing Root Component Types of CertRsp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertRsp: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of CertRsp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertRsp: $.ComponentSpec[] = [];

let _cached_decoder_for_CertRsp: $.ASN1Decoder<CertRsp> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CertRsp
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertRsp} The decoded data structure.
 */
export function _decode_CertRsp(el: _Element) {
    if (!_cached_decoder_for_CertRsp) {
        _cached_decoder_for_CertRsp = function (el: _Element): CertRsp {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version: OPTIONAL<AVMPversion> =
                CertRsp._default_value_for_version;
            let timeStamp!: GeneralizedTime;
            let sequence!: AVMPsequence;
            let result!: CertRsp_result;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                version: (_el: _Element): void => {
                    version = _decode_AVMPversion(_el);
                },
                timeStamp: (_el: _Element): void => {
                    timeStamp = $._decodeGeneralizedTime(_el);
                },
                sequence: (_el: _Element): void => {
                    sequence = _decode_AVMPsequence(_el);
                },
                result: (_el: _Element): void => {
                    result = _decode_CertRsp_result(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CertRsp,
                _extension_additions_list_spec_for_CertRsp,
                _root_component_type_list_2_spec_for_CertRsp,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new CertRsp(
                /* SEQUENCE_CONSTRUCTOR_CALL */ version,
                timeStamp,
                sequence,
                result,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_CertRsp(el);
}

let _cached_encoder_for_CertRsp: $.ASN1Encoder<CertRsp> | null = null;

/**
 * @summary Encodes a(n) CertRsp into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertRsp, encoded as an ASN.1 Element.
 */
export function _encode_CertRsp(
    value: CertRsp,
    elGetter: $.ASN1Encoder<CertRsp>
) {
    if (!_cached_encoder_for_CertRsp) {
        _cached_encoder_for_CertRsp = function (
            value: CertRsp        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.version === undefined ||
                            $.deepEq(
                                value.version,
                                CertRsp._default_value_for_version
                            )
                                ? undefined
                                : _encode_AVMPversion(value.version, $.DER),
                            /* REQUIRED   */ $._encodeGeneralizedTime(
                                value.timeStamp,
                                $.DER
                            ),
                            /* REQUIRED   */ _encode_AVMPsequence(
                                value.sequence,
                                $.DER
                            ),
                            /* REQUIRED   */ _encode_CertRsp_result(
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
    return _cached_encoder_for_CertRsp(value, elGetter);
}


/* eslint-enable */
