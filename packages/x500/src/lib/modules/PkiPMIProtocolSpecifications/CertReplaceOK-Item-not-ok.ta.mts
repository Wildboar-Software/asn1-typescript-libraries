/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    CASP_CertStatusCode,
    _decode_CASP_CertStatusCode,
    _encode_CASP_CertStatusCode,
    _enum_for_CASP_CertStatusCode,
} from "../PkiPMIProtocolSpecifications/CASP-CertStatusCode.ta.mjs";
/**
 * @summary CertReplaceOK_Item_not_ok
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertReplaceOK-Item-not-ok ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 */
export class CertReplaceOK_Item_not_ok {
    constructor(
        /**
         * @summary `status`.
         * @public
         * @readonly
         */
        readonly status: CASP_CertStatusCode,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertReplaceOK_Item_not_ok
     * @description
     *
     * This takes an `object` and converts it to a `CertReplaceOK_Item_not_ok`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertReplaceOK_Item_not_ok`.
     * @returns {CertReplaceOK_Item_not_ok}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof CertReplaceOK_Item_not_ok]: CertReplaceOK_Item_not_ok[_K];
            }
        >
    ): CertReplaceOK_Item_not_ok {
        return new CertReplaceOK_Item_not_ok(
            _o.status,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary The enum used as the type of the component `status`
     * @public
     * @static
     */

    public static _enum_for_status = _enum_for_CASP_CertStatusCode;
}

/**
 * @summary The Leading Root Component Types of CertReplaceOK_Item_not_ok
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertReplaceOK_Item_not_ok: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "status",
        false,
        $.hasTag(_TagClass.universal, 10)
    ),
];

/**
 * @summary The Trailing Root Component Types of CertReplaceOK_Item_not_ok
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertReplaceOK_Item_not_ok: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of CertReplaceOK_Item_not_ok
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertReplaceOK_Item_not_ok: $.ComponentSpec[] = [];

let _cached_decoder_for_CertReplaceOK_Item_not_ok: $.ASN1Decoder<CertReplaceOK_Item_not_ok> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CertReplaceOK_Item_not_ok
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertReplaceOK_Item_not_ok} The decoded data structure.
 */
export function _decode_CertReplaceOK_Item_not_ok(el: _Element): CertReplaceOK_Item_not_ok {
    if (!_cached_decoder_for_CertReplaceOK_Item_not_ok) {
        _cached_decoder_for_CertReplaceOK_Item_not_ok = function (
            el: _Element
        ): CertReplaceOK_Item_not_ok {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 1) {
                throw new _ConstructionError(
                    "CertReplaceOK-Item-not-ok contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "status";
            let status!: CASP_CertStatusCode;
            status = _decode_CASP_CertStatusCode(sequence[0]);
            return new CertReplaceOK_Item_not_ok(status, sequence.slice(1));
        };
    }
    return _cached_decoder_for_CertReplaceOK_Item_not_ok(el);
}

let _cached_encoder_for_CertReplaceOK_Item_not_ok: $.ASN1Encoder<CertReplaceOK_Item_not_ok> | null = null;

/**
 * @summary Encodes a(n) CertReplaceOK_Item_not_ok into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertReplaceOK_Item_not_ok, encoded as an ASN.1 Element.
 */
export function _encode_CertReplaceOK_Item_not_ok(
    value: CertReplaceOK_Item_not_ok,
    elGetter: $.ASN1Encoder<CertReplaceOK_Item_not_ok>
): _Element {
    if (!_cached_encoder_for_CertReplaceOK_Item_not_ok) {
        _cached_encoder_for_CertReplaceOK_Item_not_ok = function (
            value: CertReplaceOK_Item_not_ok        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_CASP_CertStatusCode(
                                value.status,
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
    return _cached_encoder_for_CertReplaceOK_Item_not_ok(value, elGetter);
}


/* eslint-enable */
