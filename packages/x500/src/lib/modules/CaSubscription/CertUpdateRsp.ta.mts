/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    CertUpdateRsp_result,
    _decode_CertUpdateRsp_result,
    _encode_CertUpdateRsp_result,
} from "../CaSubscription/CertUpdateRsp-result.ta.mjs";
import {
    InvokeID,
    _decode_InvokeID,
    _encode_InvokeID,
} from "../CaSubscription/InvokeID.ta.mjs";
/**
 * @summary CertUpdateRsp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertUpdateRsp ::= SEQUENCE {
 *   invokeID      InvokeID,
 *   result        CHOICE {
 *     success       [0]  CertUpdateOK,
 *     failure       [1]  CertUpdateErr,
 *     ... },
 *   ... }
 * ```
 *
 */
export class CertUpdateRsp {
    constructor(
        /**
         * @summary `invokeID`.
         * @public
         * @readonly
         */
        readonly invokeID: InvokeID,
        /**
         * @summary `result`.
         * @public
         * @readonly
         */
        readonly result: CertUpdateRsp_result,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertUpdateRsp
     * @description
     *
     * This takes an `object` and converts it to a `CertUpdateRsp`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertUpdateRsp`.
     * @returns {CertUpdateRsp}
     */
    public static _from_object(
        _o: { [_K in keyof CertUpdateRsp]: CertUpdateRsp[_K] }
    ): CertUpdateRsp {
        return new CertUpdateRsp(
            _o.invokeID,
            _o.result,
            _o._unrecognizedExtensionsList
        );
    }
}

/**
 * @summary The Leading Root Component Types of CertUpdateRsp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertUpdateRsp: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "invokeID",
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec("result", false, $.hasAnyTag),
];

/**
 * @summary The Trailing Root Component Types of CertUpdateRsp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertUpdateRsp: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of CertUpdateRsp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertUpdateRsp: $.ComponentSpec[] = [];

let _cached_decoder_for_CertUpdateRsp: $.ASN1Decoder<CertUpdateRsp> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CertUpdateRsp
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertUpdateRsp} The decoded data structure.
 */
export function _decode_CertUpdateRsp(el: _Element): CertUpdateRsp {
    if (!_cached_decoder_for_CertUpdateRsp) {
        _cached_decoder_for_CertUpdateRsp = function (
            el: _Element
        ): CertUpdateRsp {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "CertUpdateRsp contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "invokeID";
            sequence[1].name = "result";
            let invokeID!: InvokeID;
            let result!: CertUpdateRsp_result;
            invokeID = _decode_InvokeID(sequence[0]);
            result = _decode_CertUpdateRsp_result(sequence[1]);
            return new CertUpdateRsp(invokeID, result, sequence.slice(2));
        };
    }
    return _cached_decoder_for_CertUpdateRsp(el);
}

let _cached_encoder_for_CertUpdateRsp: $.ASN1Encoder<CertUpdateRsp> | null = null;

/**
 * @summary Encodes a(n) CertUpdateRsp into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertUpdateRsp, encoded as an ASN.1 Element.
 */
export function _encode_CertUpdateRsp(
    value: CertUpdateRsp,
    elGetter: $.ASN1Encoder<CertUpdateRsp>
): _Element {
    if (!_cached_encoder_for_CertUpdateRsp) {
        _cached_encoder_for_CertUpdateRsp = function (
            value: CertUpdateRsp        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_InvokeID(
                                value.invokeID,
                                $.DER
                            ),
                            /* REQUIRED   */ _encode_CertUpdateRsp_result(
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
    return _cached_encoder_for_CertUpdateRsp(value, elGetter);
}


/* eslint-enable */
