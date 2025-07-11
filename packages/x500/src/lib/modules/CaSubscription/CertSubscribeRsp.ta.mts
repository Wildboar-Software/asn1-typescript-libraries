/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    CertSubscribeRsp_result,
    _decode_CertSubscribeRsp_result,
    _encode_CertSubscribeRsp_result,
} from "../CaSubscription/CertSubscribeRsp-result.ta.mjs";
import {
    InvokeID,
    _decode_InvokeID,
    _encode_InvokeID,
} from "../CaSubscription/InvokeID.ta.mjs";
/**
 * @summary CertSubscribeRsp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertSubscribeRsp ::= SEQUENCE {
 *   invokeID     InvokeID,
 *   result       CHOICE {
 *     success       [0]  CertSubscribeOK,
 *     failure       [1]  CertSubscribeErr,
 *     ... },
 *   ... }
 * ```
 *
 */
export class CertSubscribeRsp {
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
        readonly result: CertSubscribeRsp_result,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertSubscribeRsp
     * @description
     *
     * This takes an `object` and converts it to a `CertSubscribeRsp`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertSubscribeRsp`.
     * @returns {CertSubscribeRsp}
     */
    public static _from_object(
        _o: { [_K in keyof CertSubscribeRsp]: CertSubscribeRsp[_K] }
    ): CertSubscribeRsp {
        return new CertSubscribeRsp(
            _o.invokeID,
            _o.result,
            _o._unrecognizedExtensionsList
        );
    }
}

/**
 * @summary The Leading Root Component Types of CertSubscribeRsp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertSubscribeRsp: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "invokeID",
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec("result", false, $.hasAnyTag),
];

/**
 * @summary The Trailing Root Component Types of CertSubscribeRsp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertSubscribeRsp: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of CertSubscribeRsp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertSubscribeRsp: $.ComponentSpec[] = [];

let _cached_decoder_for_CertSubscribeRsp: $.ASN1Decoder<CertSubscribeRsp> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CertSubscribeRsp
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertSubscribeRsp} The decoded data structure.
 */
export function _decode_CertSubscribeRsp(el: _Element): CertSubscribeRsp {
    if (!_cached_decoder_for_CertSubscribeRsp) {
        _cached_decoder_for_CertSubscribeRsp = function (
            el: _Element
        ): CertSubscribeRsp {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "CertSubscribeRsp contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "invokeID";
            sequence[1].name = "result";
            let invokeID!: InvokeID;
            let result!: CertSubscribeRsp_result;
            invokeID = _decode_InvokeID(sequence[0]);
            result = _decode_CertSubscribeRsp_result(sequence[1]);
            return new CertSubscribeRsp(invokeID, result, sequence.slice(2));
        };
    }
    return _cached_decoder_for_CertSubscribeRsp(el);
}

let _cached_encoder_for_CertSubscribeRsp: $.ASN1Encoder<CertSubscribeRsp> | null = null;

/**
 * @summary Encodes a(n) CertSubscribeRsp into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertSubscribeRsp, encoded as an ASN.1 Element.
 */
export function _encode_CertSubscribeRsp(
    value: CertSubscribeRsp,
    elGetter: $.ASN1Encoder<CertSubscribeRsp>
): _Element {
    if (!_cached_encoder_for_CertSubscribeRsp) {
        _cached_encoder_for_CertSubscribeRsp = function (
            value: CertSubscribeRsp        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_InvokeID(
                                value.invokeID,
                                $.DER
                            ),
                            /* REQUIRED   */ _encode_CertSubscribeRsp_result(
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
    return _cached_encoder_for_CertSubscribeRsp(value, elGetter);
}


/* eslint-enable */
