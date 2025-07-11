/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    CASP_error,
    _decode_CASP_error,
    _encode_CASP_error,
    _enum_for_CASP_error,
} from "../CaSubscription/CASP-error.ta.mjs";
/**
 * @summary CertUpdateErr
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertUpdateErr ::= SEQUENCE {
 *   code          CASP-error,
 *   ... }
 * ```
 *
 */
export class CertUpdateErr {
    constructor(
        /**
         * @summary `code`.
         * @public
         * @readonly
         */
        readonly code: CASP_error,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertUpdateErr
     * @description
     *
     * This takes an `object` and converts it to a `CertUpdateErr`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertUpdateErr`.
     * @returns {CertUpdateErr}
     */
    public static _from_object(
        _o: { [_K in keyof CertUpdateErr]: CertUpdateErr[_K] }
    ): CertUpdateErr {
        return new CertUpdateErr(_o.code, _o._unrecognizedExtensionsList);
    }

    /**
     * @summary The enum used as the type of the component `code`
     * @public
     * @static
     */

    public static _enum_for_code = _enum_for_CASP_error;
}

/**
 * @summary The Leading Root Component Types of CertUpdateErr
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertUpdateErr: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "code",
        false,
        $.hasTag(_TagClass.universal, 10)
    ),
];

/**
 * @summary The Trailing Root Component Types of CertUpdateErr
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertUpdateErr: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of CertUpdateErr
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertUpdateErr: $.ComponentSpec[] = [];

let _cached_decoder_for_CertUpdateErr: $.ASN1Decoder<CertUpdateErr> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CertUpdateErr
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertUpdateErr} The decoded data structure.
 */
export function _decode_CertUpdateErr(el: _Element): CertUpdateErr {
    if (!_cached_decoder_for_CertUpdateErr) {
        _cached_decoder_for_CertUpdateErr = function (
            el: _Element
        ): CertUpdateErr {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 1) {
                throw new _ConstructionError(
                    "CertUpdateErr contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "code";
            let code!: CASP_error;
            code = _decode_CASP_error(sequence[0]);
            return new CertUpdateErr(code, sequence.slice(1));
        };
    }
    return _cached_decoder_for_CertUpdateErr(el);
}

let _cached_encoder_for_CertUpdateErr: $.ASN1Encoder<CertUpdateErr> | null = null;

/**
 * @summary Encodes a(n) CertUpdateErr into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertUpdateErr, encoded as an ASN.1 Element.
 */
export function _encode_CertUpdateErr(
    value: CertUpdateErr,
    elGetter: $.ASN1Encoder<CertUpdateErr>
): _Element {
    if (!_cached_encoder_for_CertUpdateErr) {
        _cached_encoder_for_CertUpdateErr = function (
            value: CertUpdateErr        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_CASP_error(
                                value.code,
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
    return _cached_encoder_for_CertUpdateErr(value, elGetter);
}


/* eslint-enable */
