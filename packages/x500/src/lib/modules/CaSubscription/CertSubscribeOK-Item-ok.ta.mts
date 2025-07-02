/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    CertStatus,
    _decode_CertStatus,
    _encode_CertStatus,
    _enum_for_CertStatus,
} from "../CaSubscription/CertStatus.ta.mjs";
import {
    Certificate,
    _decode_Certificate,
    _encode_Certificate,
} from "@wildboar/pki-stub";
import {
    CRLReason,
    _decode_CRLReason,
    _encode_CRLReason,
    _enum_for_CRLReason,
} from "@wildboar/pki-stub";
/**
 * @summary CertSubscribeOK_Item_ok
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertSubscribeOK-Item-ok ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 */
export class CertSubscribeOK_Item_ok {
    constructor(
        /**
         * @summary `cert`.
         * @public
         * @readonly
         */
        readonly cert: Certificate,
        /**
         * @summary `status`.
         * @public
         * @readonly
         */
        readonly status: CertStatus,
        /**
         * @summary `revokeReason`.
         * @public
         * @readonly
         */
        readonly revokeReason: OPTIONAL<CRLReason>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertSubscribeOK_Item_ok
     * @description
     *
     * This takes an `object` and converts it to a `CertSubscribeOK_Item_ok`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertSubscribeOK_Item_ok`.
     * @returns {CertSubscribeOK_Item_ok}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof CertSubscribeOK_Item_ok]: CertSubscribeOK_Item_ok[_K];
            }
        >
    ): CertSubscribeOK_Item_ok {
        return new CertSubscribeOK_Item_ok(
            _o.cert,
            _o.status,
            _o.revokeReason,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary The enum used as the type of the component `status`
     * @public
     * @static
     */

    public static _enum_for_status = _enum_for_CertStatus;
    /**
     * @summary The enum used as the type of the component `revokeReason`
     * @public
     * @static
     */

    public static _enum_for_revokeReason = _enum_for_CRLReason;
}

/**
 * @summary The Leading Root Component Types of CertSubscribeOK_Item_ok
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertSubscribeOK_Item_ok: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "cert",
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec(
        "status",
        false,
        $.hasTag(_TagClass.universal, 10)
    ),
    new $.ComponentSpec(
        "revokeReason",
        true,
        $.hasTag(_TagClass.universal, 10)
    ),
];

/**
 * @summary The Trailing Root Component Types of CertSubscribeOK_Item_ok
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertSubscribeOK_Item_ok: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of CertSubscribeOK_Item_ok
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertSubscribeOK_Item_ok: $.ComponentSpec[] = [];

let _cached_decoder_for_CertSubscribeOK_Item_ok: $.ASN1Decoder<CertSubscribeOK_Item_ok> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CertSubscribeOK_Item_ok
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertSubscribeOK_Item_ok} The decoded data structure.
 */
export function _decode_CertSubscribeOK_Item_ok(el: _Element): CertSubscribeOK_Item_ok {
    if (!_cached_decoder_for_CertSubscribeOK_Item_ok) {
        _cached_decoder_for_CertSubscribeOK_Item_ok = function (
            el: _Element
        ): CertSubscribeOK_Item_ok {
            let cert!: Certificate;
            let status!: CertStatus;
            let revokeReason: OPTIONAL<CRLReason>;
            let _unrecognizedExtensionsList: _Element[] = [];
            const callbacks: $.DecodingMap = {
                cert: (_el: _Element): void => {
                    cert = _decode_Certificate(_el);
                },
                status: (_el: _Element): void => {
                    status = _decode_CertStatus(_el);
                },
                revokeReason: (_el: _Element): void => {
                    revokeReason = _decode_CRLReason(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CertSubscribeOK_Item_ok,
                _extension_additions_list_spec_for_CertSubscribeOK_Item_ok,
                _root_component_type_list_2_spec_for_CertSubscribeOK_Item_ok,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new CertSubscribeOK_Item_ok(
                cert,
                status,
                revokeReason,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_CertSubscribeOK_Item_ok(el);
}

let _cached_encoder_for_CertSubscribeOK_Item_ok: $.ASN1Encoder<CertSubscribeOK_Item_ok> | null = null;

/**
 * @summary Encodes a(n) CertSubscribeOK_Item_ok into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertSubscribeOK_Item_ok, encoded as an ASN.1 Element.
 */
export function _encode_CertSubscribeOK_Item_ok(
    value: CertSubscribeOK_Item_ok,
    elGetter: $.ASN1Encoder<CertSubscribeOK_Item_ok>
): _Element {
    if (!_cached_encoder_for_CertSubscribeOK_Item_ok) {
        _cached_encoder_for_CertSubscribeOK_Item_ok = function (
            value: CertSubscribeOK_Item_ok        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_Certificate(
                                value.cert,
                                $.DER
                            ),
                            /* REQUIRED   */ _encode_CertStatus(
                                value.status,
                                $.DER
                            ),
                            /* IF_ABSENT  */ value.revokeReason === undefined
                                ? undefined
                                : _encode_CRLReason(value.revokeReason, $.DER),
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
    return _cached_encoder_for_CertSubscribeOK_Item_ok(value, elGetter);
}


/* eslint-enable */
