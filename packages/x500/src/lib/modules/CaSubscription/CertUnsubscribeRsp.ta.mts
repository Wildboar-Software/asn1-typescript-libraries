/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    CertUnsubscribeRsp_result,
    _decode_CertUnsubscribeRsp_result,
    _encode_CertUnsubscribeRsp_result,
} from "../CaSubscription/CertUnsubscribeRsp-result.ta.mjs";
import {
    InvokeID,
    _decode_InvokeID,
    _encode_InvokeID,
} from "../CaSubscription/InvokeID.ta.mjs";
/**
 * @summary CertUnsubscribeRsp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertUnsubscribeRsp ::= SEQUENCE {
 *   invokeID     InvokeID,
 *   result       CHOICE {
 *     success       [0]  CertUnsubscribeOK,
 *     failure       [1]  CertUnsubscribeErr,
 *     ... },
 *   ... }
 * ```
 *
 */
export class CertUnsubscribeRsp {
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
        readonly result: CertUnsubscribeRsp_result,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertUnsubscribeRsp
     * @description
     *
     * This takes an `object` and converts it to a `CertUnsubscribeRsp`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertUnsubscribeRsp`.
     * @returns {CertUnsubscribeRsp}
     */
    public static _from_object(
        _o: { [_K in keyof CertUnsubscribeRsp]: CertUnsubscribeRsp[_K] }
    ): CertUnsubscribeRsp {
        return new CertUnsubscribeRsp(
            _o.invokeID,
            _o.result,
            _o._unrecognizedExtensionsList
        );
    }
}

/**
 * @summary The Leading Root Component Types of CertUnsubscribeRsp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertUnsubscribeRsp: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "invokeID",
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec("result", false, $.hasAnyTag),
];

/**
 * @summary The Trailing Root Component Types of CertUnsubscribeRsp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertUnsubscribeRsp: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of CertUnsubscribeRsp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertUnsubscribeRsp: $.ComponentSpec[] = [];

let _cached_decoder_for_CertUnsubscribeRsp: $.ASN1Decoder<CertUnsubscribeRsp> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CertUnsubscribeRsp
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertUnsubscribeRsp} The decoded data structure.
 */
export function _decode_CertUnsubscribeRsp(el: _Element): CertUnsubscribeRsp {
    if (!_cached_decoder_for_CertUnsubscribeRsp) {
        _cached_decoder_for_CertUnsubscribeRsp = function (
            el: _Element
        ): CertUnsubscribeRsp {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "CertUnsubscribeRsp contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "invokeID";
            sequence[1].name = "result";
            let invokeID!: InvokeID;
            let result!: CertUnsubscribeRsp_result;
            invokeID = _decode_InvokeID(sequence[0]);
            result = _decode_CertUnsubscribeRsp_result(sequence[1]);
            return new CertUnsubscribeRsp(invokeID, result, sequence.slice(2));
        };
    }
    return _cached_decoder_for_CertUnsubscribeRsp(el);
}

let _cached_encoder_for_CertUnsubscribeRsp: $.ASN1Encoder<CertUnsubscribeRsp> | null = null;

/**
 * @summary Encodes a(n) CertUnsubscribeRsp into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertUnsubscribeRsp, encoded as an ASN.1 Element.
 */
export function _encode_CertUnsubscribeRsp(
    value: CertUnsubscribeRsp,
    elGetter: $.ASN1Encoder<CertUnsubscribeRsp>
): _Element {
    if (!_cached_encoder_for_CertUnsubscribeRsp) {
        _cached_encoder_for_CertUnsubscribeRsp = function (
            value: CertUnsubscribeRsp        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_InvokeID(
                                value.invokeID,
                                $.DER
                            ),
                            /* REQUIRED   */ _encode_CertUnsubscribeRsp_result(
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
    return _cached_encoder_for_CertUnsubscribeRsp(value, elGetter);
}


/* eslint-enable */
