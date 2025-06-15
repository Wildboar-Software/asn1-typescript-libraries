/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
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
    CertUpdateReq_certs_Item,
    _decode_CertUpdateReq_certs_Item,
    _encode_CertUpdateReq_certs_Item,
} from "../PkiPMIProtocolSpecifications/CertUpdateReq-certs-Item.ta.mjs";
import {
    CASPcommonComponents,
    _root_component_type_list_1_spec_for_CASPcommonComponents,
} from "../PkiPMIProtocolSpecifications/CASPcommonComponents.ta.mjs";

/**
 * @summary CertUpdateReq
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertUpdateReq ::= SEQUENCE {
 *   COMPONENTS OF CASPcommonComponents,
 *   certs  SEQUENCE (SIZE (1..MAX)) OF SEQUENCE {
 *     subject      Name,
 *     serialNumber CertificateSerialNumber,
 *     certStatus   CertStatus,
 *     ... },
 *   ... }
 * ```
 *
 * @class
 */
export class CertUpdateReq implements CASPcommonComponents {
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
         * @summary `certs`.
         * @public
         * @readonly
         */
        readonly certs: CertUpdateReq_certs_Item[],
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertUpdateReq
     * @description
     *
     * This takes an `object` and converts it to a `CertUpdateReq`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertUpdateReq`.
     * @returns {CertUpdateReq}
     */
    public static _from_object(
        _o: { [_K in keyof CertUpdateReq]: CertUpdateReq[_K] }
    ): CertUpdateReq {
        return new CertUpdateReq(
            _o.version,
            _o.sequence,
            _o.certs,
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
 * @summary The Leading Root Component Types of CertUpdateReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertUpdateReq: $.ComponentSpec[] = [
    ..._root_component_type_list_1_spec_for_CASPcommonComponents,
    new $.ComponentSpec(
        "certs",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];

/**
 * @summary The Trailing Root Component Types of CertUpdateReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertUpdateReq: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of CertUpdateReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertUpdateReq: $.ComponentSpec[] = [];

let _cached_decoder_for_CertUpdateReq: $.ASN1Decoder<CertUpdateReq> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CertUpdateReq
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertUpdateReq} The decoded data structure.
 */
export function _decode_CertUpdateReq(el: _Element) {
    if (!_cached_decoder_for_CertUpdateReq) {
        _cached_decoder_for_CertUpdateReq = function (
            el: _Element
        ): CertUpdateReq {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version: OPTIONAL<CASPversion> =
                CertUpdateReq._default_value_for_version;
            let sequence!: CASPsequence;
            let certs!: CertUpdateReq_certs_Item[];
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                version: (_el: _Element): void => {
                    version = _decode_CASPversion(_el);
                },
                sequence: (_el: _Element): void => {
                    sequence = _decode_CASPsequence(_el);
                },
                certs: (_el: _Element): void => {
                    certs = $._decodeSequenceOf<CertUpdateReq_certs_Item>(
                        () => _decode_CertUpdateReq_certs_Item
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CertUpdateReq,
                _extension_additions_list_spec_for_CertUpdateReq,
                _root_component_type_list_2_spec_for_CertUpdateReq,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new CertUpdateReq(
                /* SEQUENCE_CONSTRUCTOR_CALL */ version,
                sequence,
                certs,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_CertUpdateReq(el);
}

let _cached_encoder_for_CertUpdateReq: $.ASN1Encoder<CertUpdateReq> | null = null;

/**
 * @summary Encodes a(n) CertUpdateReq into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertUpdateReq, encoded as an ASN.1 Element.
 */
export function _encode_CertUpdateReq(
    value: CertUpdateReq,
    elGetter: $.ASN1Encoder<CertUpdateReq>
) {
    if (!_cached_encoder_for_CertUpdateReq) {
        _cached_encoder_for_CertUpdateReq = function (
            value: CertUpdateReq        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.version === undefined ||
                            $.deepEq(
                                value.version,
                                CertUpdateReq._default_value_for_version
                            )
                                ? undefined
                                : _encode_CASPversion(value.version, $.DER),
                            /* REQUIRED   */ _encode_CASPsequence(
                                value.sequence,
                                $.DER
                            ),
                            /* REQUIRED   */ $._encodeSequenceOf<CertUpdateReq_certs_Item>(
                                () => _encode_CertUpdateReq_certs_Item,
                                $.DER
                            )(value.certs, $.DER),
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
    return _cached_encoder_for_CertUpdateReq(value, elGetter);
}


/* eslint-enable */
